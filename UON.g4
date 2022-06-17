grammar UON;

tokens {
	INDENT,
	DEDENT
}

@lexer::members {
	
	private ignoreWord : boolean = true;
	private tokens: any[] = [];
	private indents: any[] = [];

	private lastToken?: Token = undefined;


	@Override
	public emit(token?: Token): Token {
		if (this._type === UONParser.NEWLINE2) {
			//this.skip();
			this._text = "";
		}

		if (token !== undefined) {
			return super.emit(token);
		}
		return super.emit();
	}

	private createAndScheduleIndent(indent: any) {
		//const previous = this.indents.length ? 0 : this.indents[0];
		//if (indent > previous) {
		this.indents.push(indent);
		this.tokens.push(this.commonToken(UONParser.INDENT, "INDENT"));
		//}
	}

	@Override
	public nextToken(): Token {

		if (this.tokens.length === 0) {
			console.log("this.tokens.length", this.tokens.length, this.tokens);
			const next: Token = super.nextToken();

			if (this.lastToken !== null && this.lastToken?.type === UONLexer.MINUS) {
				this.tokens.push(this.commonToken(UONParser.MINUS, "-")); // TODO
				this.createAndScheduleIndent(this._tokenStartCharPositionInLine);
			}

			if (this.lastToken !== null && this.lastToken?.type === UONLexer.BOOL_TYPE) {
				//this.tokens.push(this.commonToken(UONParser.BOOL_TYPE, "!bool"));
				this.createAndScheduleIndent(this._tokenStartCharPositionInLine);
			}

			if (this.lastToken?.type === UONLexer.NEWLINE2) {
				//TODO NOTHING
			}

			this.lastToken = next;

		}
		else {
			this.lastToken = this.tokens.pop();
			console.log(this.lastToken?.line)
			console.log(this.lastToken?.type)
			console.log("pop", this.lastToken?.text);
		}


		//return this.emit(this.lastToken);
		return this.lastToken!!;
	}

	public commonToken(number: number, text: string): Token | undefined {
		//return new CommonToken(this._tokenFactorySourcePair, type, DEFAULT_TOKEN_CHANNEL, start, stop);
		//return new CommonToken(number, text);
		return new CommonToken(number, text, this._tokenFactorySourcePair);
	}

	public atStartOfInput(): boolean {
		return super.charPositionInLine === 0 && super.line === 1;
	}

}

uon: NEWLINE2* root_value;

json_collection: json_map | json_seq;

json_map: (MAPPING_TYPE)? OPEN_C_BRA (
		json_pair (COMMA json_pair)*
	)? CLOSE_C_BRA;

json_seq: (SEQUENCE_TYPE)? OPEN_S_BRA (
		json_value (COMMA json_value)*
	)? CLOSE_S_BRA;

yaml_collection: yaml_map | yaml_seq;

yaml_map: (MAPPING_TYPE)? pair+;

yaml_seq: (SEQUENCE_TYPE)? seq_item+;

seq_item: INDENT MINUS yaml_value;

pair: pair_key COLON yaml_value;

pair_key: string (presentation_properties)?;

json_pair: pair_key COLON json_value;

presentation_properties:
	OPEN_PAR (
		presentation_property (COMMA presentation_property)*
	)? CLOSE_PAR;

presentation_property: optional | description;
description: 'description' COLON string;
optional: 'optional' COLON boolean;

string: QUOTED_STRING | UNQUOTED_STRING;

CT: '!!';
custom_type: CT UNQUOTED_STRING;

json_user_type: custom_type json_map;

yaml_user_type: custom_type yaml_map;

scalar: quantity_scalar | string_scalar | boolean_scalar | url;

string_scalar: (STR_TYPE)? string;

// string ?
boolean_scalar: BOOL_TYPE INDENT boolean;
url: (URL_TYPE)? string;

quantity_scalar: numeric_scalar (quantity)?;
numeric_scalar: coercible_numeric_scalar | number;

coercible_numeric_scalar:
	number_type (coercible_numeric_scalar | number);

quantity: length | mass | time | temperature;

length: METERS | KILOMETERS;
METERS: 'm';
KILOMETERS: 'km';

mass: GRAMS | KILOGRAMS;
GRAMS: 'g';
KILOGRAMS: 'kg';

time: SECOND | MINUTE;
SECOND: 's';
MINUTE: 'min';

temperature: CELSIUS | KELVIN;
CELSIUS: 'C';
KELVIN: 'K';

number: UNQUOTED_STRING;

root_value: json_collection | yaml_collection | schema;

json_value:
	json_map
	| json_seq
	| scalar
	| json_user_type
	| null;

yaml_value:
	yaml_map
	| yaml_seq
	| scalar
	| yaml_user_type
	| null;

QUOTED_STRING:
	'"' DOUBLE_QUOTE_CHAR* '"'
	| '\'' SINGLE_QUOTE_CHAR* '\'';

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

STR_TYPE: '!str';
BOOL_TYPE: '!bool';
URL_TYPE: '!url';

FLOAT_TYPE: '!float';
FLOAT_128_TYPE: '!float128';
FLOAT_64_TYPE: '!float64';
FLOAT_32_TYPE: '!float32';

INT_TYPE: '!int';
INT_128_TYPE: '!int128';
INT_64_TYPE: '!int6';
INT_32_TYPE: '!int32';

UINT_TYPE: '!uint';
UINT_128_TYPE: '!uint128';
UINT_64_TYPE: '!uint64';
UINT_32_TYPE: '!uint32';

schema:
	custom_type COLON SCHEMA_TYPE (schema_presentations)? OPEN_C_BRA (
		attributes
	)? CLOSE_C_BRA;
attributes: attribute (COMMA attribute)*;
attribute: pair_key COLON validation_properties;

schema_presentations:
	OPEN_PAR (schema_presentation (COMMA schema_presentation)*)? CLOSE_PAR;
schema_presentation: schema_name | schema_uuid | description;

schema_name: 'name' COLON string;
schema_uuid: 'uuid' COLON url;

validation_properties:
	string_validation
	| number_validation
	| boolean_validation
	| url_validation;

string_validation: STR_TYPE (string_properties)?;
string_properties:
	OPEN_PAR (string_property (COMMA string_property)*)? CLOSE_PAR;
string_property: string_max | string_min;

string_max: 'max' COLON string;
string_min: 'min' COLON string;

url_validation: URL_TYPE;

// boolean validation
boolean_validation: BOOL_TYPE;

number_validation: number_validation_type (number_properties)?;
number_properties:
	OPEN_PAR (number_property (COMMA number_property)*)? CLOSE_PAR;

number_property: number_max | number_min | quantity_validation;

number_max: 'max' COLON number;
number_min: 'min' COLON number;
number_validation_type: FLOAT_TYPE | INT_TYPE | UINT_TYPE;

quantity_validation: 'quantity' COLON quantity_validation_types;

quantity_validation_types:
	'length'
	| 'mass'
	| 'temperature'
	| 'time';

boolean: (true | false);
true: 'true' | 'True';
false: 'false' | 'False';
null: 'null' | 'none' | 'None';

fragment DOUBLE_QUOTE_CHAR: ~["\\\r\n] | ESCAPE_SEQUENCE;

fragment SINGLE_QUOTE_CHAR: ~['\\\r\n] | ESCAPE_SEQUENCE;

fragment ESCAPE_SEQUENCE:
	'\\' (
		NEWLINE
		| UNICODE_SEQUENCE // \u1234
		| ['"\\/bfnrtv] // single escape char
		| ~['"\\bfnrtv0-9xu\r\n] // non escape char
		| '0' // \0
		| 'x' HEX HEX // \x3a
	);

UNQUOTED_STRING: IDENTIFIER*;
fragment IDENTIFIER:
	[\p{L}]
	| [\p{M}]
	| [\p{N}]
	| [\p{Pc}]
	| '\\' UNICODE_SEQUENCE
	| '\u200C'
	| '\u200D'
	| '$'
	| '_'
	| '"'
	| '\''
	| '?';

fragment HEX: [0-9a-fA-F];

fragment UNICODE_SEQUENCE: 'u' HEX HEX HEX HEX;
fragment NEWLINE: '\r\n' | [\r\n\u2028\u2029];

fragment SPACES: [ \t]+;

// \- since - means "range" inside [...]

WS: [ \n\r\t] -> channel(HIDDEN);

NEWLINE2
 : ( {atStartOfInput()}?   SPACES
   | ( '\r'? '\n' | '\r' ) SPACES?
   ) {if(ignoreWord) this.skip();}
 ;

OPEN_PAR: '(';
CLOSE_PAR: ')';
OPEN_C_BRA: '{';
CLOSE_C_BRA: '}';
OPEN_S_BRA: '[';
CLOSE_S_BRA: ']';
COMMA: ',';
COLON: ':';
MAPPING_TYPE: '!map';
SEQUENCE_TYPE: '!seq';
SCHEMA_TYPE: '!schema';
MINUS: '-';