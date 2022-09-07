grammar UON;

tokens {
	INDENT,
	DEDENT
}

@lexer::header {
	import { CommonToken, Token } from "antlr4ts";
	import { UONParser } from "./UONParser";
}

@lexer::members {
	private ignoreWord: boolean = false;
	private tokens: any[] = [];
	private indents: any[] = [];

	private lastToken?: Token = undefined;

	@Override
	public emit(token?: Token): Token {
		if (token !== undefined) {
			return super.emit(token);
		}
		return super.emit();
	}

	private processEOF_NextToken() {
		this.schedule(this.commonToken(UONLexer.NEWLINE, "\n"));

		if (this.indents.length !== 0) {

			// Now emit as much DEDENT tokens as needed.
			while (this.indents.length !== 0) {
				this.schedule(this.createDedent());
				this.indents.pop();
			}
		}

		// Put the EOF back on the token stream.
		this.schedule(this.commonToken(UONParser.EOF, "<EOF>"));
	}

	private createDedent(): Token {
		let dedent: CommonToken = this.commonToken(UONParser.DEDENT, "DEDENT");
		dedent.line = this.lastToken?.line!!;
		return dedent;
	}


	private processNEWLINE_NextToken() {
		let spaces: string = this.text.replace(/(\r\n)+/, "");

		this.schedule(this.commonToken(UONLexer.NEWLINE, "NEWLINE"));

		let indent: number = this.getIndentationCount(spaces);
		let previous: number = this.indents.length === 0 ? 0 : this.indents[this.indents.length-1];

		if (indent === previous) {
			// do nothing
		}
		else if (indent > previous) {
			this.indents.push(indent);
			this.schedule(this.commonToken(UONParser.INDENT, "INDENT")); // spaces
		} else {
			while (this.indents.length !== 0 && this.indents[this.indents.length-1] > indent) {
				this.schedule(this.createDedent());
				this.indents.pop();
			}
		}

	}

	private getIndentationCount(spaces: string): number {
		let count: number = 0;

		for (let index = 0; index < spaces.length; index++) {
			const ch = spaces[index];

			switch (ch) {
				case "\t":
					count = count + (8 - (count % 8));
					break;
				default:
					// A normal space char.
					count = count + 1;
			}
		}
		return count;
	}

	private schedule(token: any) {
		this.tokens.push(token);
	}


	@Override
	public nextToken(): Token {
		if (this.tokens.length === 0) {
			let next: Token = super.nextToken();

			if (next.type === UONLexer.COMMA || next.type === UONLexer.OPEN_C_BRA) { // TODO
				this.ignoreWord = true;
			}

			if (next.type === UONLexer.EOF) {
				this.processEOF_NextToken();
				next = this.tokens.shift();
			} else if (next.type === UONLexer.NEWLINE) {
				this.processNEWLINE_NextToken();
				next = this.tokens.shift();
			}

			this.lastToken = next;

		}
		else {
			this.lastToken = this.tokens.shift();
		}

		return this.lastToken!!;
	}

	public commonToken(number: number, text: string): CommonToken {
		return new CommonToken(number, text, this._tokenFactorySourcePair);
	}

	public atStartOfInput(): boolean {
		return super.charPositionInLine === 0 && super.line === 1;
	}
}

uon: NEWLINE* (root_value)?;

root_value: json_collection | yaml_collection| schema;

// Collection
json_collection: json_map | json_seq;

yaml_collection_nested: NEWLINE (INDENT yaml_collection DEDENT);

json_map: (MAPPING_TYPE | ORDERED_MAPPING_TYPE)? OPEN_C_BRA (json_pair (COMMA json_pair)*)? CLOSE_C_BRA;

json_seq: (SEQUENCE_TYPE)? OPEN_S_BRA (json_value (COMMA json_value)*)? CLOSE_S_BRA;

json_user_type: custom_type json_map;

json_value
	: json_map
	| json_seq
	| scalar
	| json_user_type
	| null;

pair_key: string (presentation_properties)?;
json_pair: pair_key COLON (json_value)?;

yaml_collection : yaml_map | yaml_seq;

yaml_map
   : (MAPPING_TYPE)? pair+
   ;

yaml_seq
   : (SEQUENCE_TYPE)? seq_item+
   ;

seq_item: MINUS (yaml_value | yaml_seq) ;

pair: pair_key COLON yaml_value;

yaml_value:
	| scalar NEWLINE+
	| yaml_collection_nested
	| yaml_user_type
	| null;

yaml_user_type: NEWLINE INDENT custom_type yaml_map DEDENT;

presentation_properties: OPEN_PAR (presentation_property (COMMA presentation_property)*)? CLOSE_PAR;
presentation_property: optional | description;
description: DESCRIPTION COLON string;
optional: OPTIONAL COLON boolean;

types_properties: OPEN_PAR (types_propertie (COMMA types_propertie)*)? CLOSE_PAR;
types_propertie: comment | description | optional;
comment: COMMENT COLON string;

number_presentation: types_propertie | number_presentation_propertie;
number_presentation_properties: OPEN_PAR (number_presentation (COMMA number_presentation)*)? CLOSE_PAR;
number_presentation_propertie: unit;
unit: 'unit' COLON number;

// Schema
schema: custom_type COLON SCHEMA_TYPE (schema_presentations)? OPEN_C_BRA (attributes)? CLOSE_C_BRA;
attributes: attribute (COMMA attribute)*;
attribute: pair_key COLON validation_properties;

schema_presentations: OPEN_PAR (schema_presentation (COMMA schema_presentation)*)? CLOSE_PAR;
schema_presentation: schema_name | schema_uuid | description;

schema_name: NAME COLON string;
schema_uuid: UUID COLON url;

// Validation properties
validation_properties:
	string_validation
	| number_validation
	| boolean_validation
	| url_validation;

string_validation: STR_TYPE (string_properties)?;
string_properties: OPEN_PAR (string_property (COMMA string_property)*)? CLOSE_PAR;
string_property: string_max | string_min;

string_max: MAX COLON number;
string_min: MIN COLON number;

url_validation: URL_TYPE;

boolean_validation: BOOL_TYPE;

number_validation: number_validation_type (number_properties)?;
number_properties: OPEN_PAR (number_property (COMMA number_property)*)? CLOSE_PAR;

number_property: number_max | number_min | quantity_validation;

number_max: MAX COLON number;
number_min: MIN COLON number;
number_validation_type: FLOAT_TYPE | INT_TYPE | UINT_TYPE;

quantity_validation: 'quantity' COLON quantity_validation_types;
quantity_validation_types: LENGTH | MASS | TEMPERATURE | TIME; 

// Scalar values
scalar: quantity_scalar | string_scalar | boolean_scalar | url;

quantity_scalar: numeric_scalar (quantity)?;
numeric_scalar: coercible_numeric_scalar | number;
coercible_numeric_scalar: (number_type (number_presentation_properties)?) (coercible_numeric_scalar | number);

string_scalar: (STR_TYPE (types_properties)?)? string;
boolean_scalar: (BOOL_TYPE)? boolean;
url: (URL_TYPE)? string; 

// Units and Quantites
quantity: length | mass | time | temperature;

length: METERS | KILOMETERS;
mass: GRAMS | KILOGRAMS;
time: SECOND | MINUTE;
temperature: CELSIUS | KELVIN;

// Number types
number_type:
	FLOAT_128_TYPE
	| FLOAT_64_TYPE
	| FLOAT_32_TYPE
	| INT_128_TYPE
	| INT_64_TYPE
	| INT_32_TYPE
	| UINT_128_TYPE
	| UINT_64_TYPE
	| UINT_32_TYPE
	| FLOAT_TYPE
	| INT_TYPE
	| UINT_TYPE;

boolean: (true | false);
true: 'true' | 'True';
false: 'false' | 'False';
null: 'null' | 'none' | 'None';

custom_type: CT UNQUOTED_STRING;

string :
	literal
	| QUOTED_STRING
	| UNQUOTED_STRING;

// To be able to reuse tokens in string
literal:
	LENGTH
	| MASS
	| TEMPERATURE
	| TIME
	| NAME
	| UUID
	| DESCRIPTION
	| OPTIONAL
	| number
	| boolean
	| null;

number:  (numeric_literal | NUMBER);

// Lexer rules

METERS: 'm';
KILOMETERS: 'km';

GRAMS: 'g';
KILOGRAMS: 'kg';

SECOND: 's';
MINUTE: 'minute'; //min -> minute to avoid ambiguity with minimum
CELSIUS: 'C';

AMPERE: 'A';
KELVIN: 'K';
MOLE: 'mol';
CANDELA: 'cd';

CT: '!!';

STR_TYPE: '!str';
BOOL_TYPE: '!bool';
URL_TYPE: '!url';

FLOAT_TYPE: '!float';
FLOAT_128_TYPE: '!float128';
FLOAT_64_TYPE: '!float64';
FLOAT_32_TYPE: '!float32';

INT_TYPE: '!int';
INT_128_TYPE: '!int128';
INT_64_TYPE: '!int64';
INT_32_TYPE: '!int32';

UINT_TYPE: '!uint';
UINT_128_TYPE: '!uint128';
UINT_64_TYPE: '!uint64';
UINT_32_TYPE: '!uint32';

MAX: 'max';
MIN: 'min';

LENGTH: 'length';
MASS: 'mass';
TEMPERATURE: 'temperature';
TIME: 'time';

NAME: 'name';
UUID: 'uuid';

DESCRIPTION: 'description';
OPTIONAL: 'optional';

COMMENT: 'comment';

QUOTED_STRING:
    '"' DOUBLE_QUOTE_CHAR* '"'
    | '"''"''"' MULTILINE_QUOTE_CHAR* '"''"''"'
    | '\'' SINGLE_QUOTE_CHAR* '\'';

fragment DOUBLE_QUOTE_CHAR: ~["\\\r\n];

fragment MULTILINE_QUOTE_CHAR: ~["];

fragment SINGLE_QUOTE_CHAR: ~['\\\r\n];

NUMBER:
	(('+'|'-')? INT ('.' [0-9]*)? EXP?) // +1.e2, 1234, 1234.5
	| '.' [0-9]+ EXP? // -.2e3
	| (('+'|'-')? '0' [xX] HEX+) // 0x12345678
	| (('+'|'-')? '0' [oO] HEX+) ; // 0o12345678

numeric_literal: 'inf' | 'nan' | '-inf' | '-nan' | '+inf' | '+nan';

fragment INT: '0' | [1-9] [0-9]*;

fragment EXP: [Ee] (('+'|'-') [0-9]*);

fragment HEX: [0-9a-fA-F];

UNQUOTED_STRING: IDENTIFIER+;

IDENTIFIER
	: [\p{L}]    // matches a single code point in the category "letter"
	| [\p{M}]    // a character intended to be combined with another character (e.g. accents, umlauts, enclosing boxes, etc.)
	| [\p{N}]    // matches any kind of numeric character in any script.
	| [\p{Pc}]   //  punctuation character such as an underscore that connects words.
	| '$';

WS: [ \n\r\t] -> channel(HIDDEN);

LINE_COMMENT: '#' ~[\r\n]* -> skip;

fragment SPACES: [ \t]+;

NEWLINE
 : ( {this.atStartOfInput()}?   SPACES
   | ( '\r'? '\n' | '\r' ) SPACES?
   ) {if(this.ignoreWord) this.skip();}
 ;

MINUS: '-';
OPEN_PAR: '(';
CLOSE_PAR: ')';
OPEN_C_BRA: '{';
CLOSE_C_BRA: '}';
OPEN_S_BRA: '[';
CLOSE_S_BRA: ']';
COMMA: ',';
COLON: ':';
MAPPING_TYPE: '!map';
ORDERED_MAPPING_TYPE: '!omap';
SEQUENCE_TYPE: '!seq';
SCHEMA_TYPE: '!schema';