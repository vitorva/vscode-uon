grammar UON;

uon: root_value;

root_value: json_collection | schema;

// Collection
json_collection: json_map | json_seq;

json_map: (MAPPING_TYPE | ORDERED_MAPPING_TYPE)? OPEN_C_BRA (json_pair (COMMA json_pair)*)? CLOSE_C_BRA;

json_seq: (SEQUENCE_TYPE | ORDERED_SEQUENCE_TYPE)? OPEN_S_BRA (json_value (COMMA json_value)*)? CLOSE_S_BRA;

json_user_type: custom_type json_map;

json_value
	: json_map
	| json_seq
	| scalar
	| json_user_type
	| null;

pair_key: string (presentation_properties)?;
json_pair: pair_key COLON (json_value)?;

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

// Schéma
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

// url validation
url_validation: URL_TYPE;

// boolean validation
boolean_validation: BOOL_TYPE;

number_validation: number_validation_type (number_properties)?;
number_properties: OPEN_PAR (number_property (COMMA number_property)*)? CLOSE_PAR;

number_property: number_max | number_min | quantity_validation;

number_max: MAX COLON number;
number_min: MIN COLON number;
number_validation_type: FLOAT_TYPE | INT_TYPE | UINT_TYPE;

quantity_validation: 'quantity' COLON quantity_validation_types;
quantity_validation_types: LENGTH | MASS | TEMPERATURE | TIME; 

// Scalaire
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

// On fait ça pour pouvoir réutiliser des tokens dans du texte
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

// Appoche + scientifique
number: SYMBOL? ( NUMERIC_LITERAL | NUMBER);

// Lexer rules
// UNITS
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
	| '\'' SINGLE_QUOTE_CHAR* '\'';

fragment DOUBLE_QUOTE_CHAR: ~["];

fragment SINGLE_QUOTE_CHAR: ~['];

NUMBER:
	INT ('.' [0-9]*)? EXP? // +1.e2, 1234, 1234.5
	| '.' [0-9]+ EXP? // -.2e3
	| '0' [xX] HEX+ // 0x12345678
	| '0' [oO] HEX+ ; // 0o12345678

NUMERIC_LITERAL: 'inf' | 'nan';

SYMBOL: '+' | '-';

fragment INT: '0' | [1-9] [0-9]*;

fragment EXP: [Ee] SYMBOL? [0-9]*;

fragment HEX: [0-9a-fA-F];

UNQUOTED_STRING: IDENTIFIER+;

IDENTIFIER
	: [\p{L}]     // matches a single code point in the category "letter"
	| [\p{M}]   // a character intended to be combined with another character (e.g. accents, umlauts, enclosing boxes, etc.)
	| [\p{N}]   // matches any kind of numeric character in any script.
	| [\p{Pc}]  //  punctuation character such as an underscore that connects words.
	| '$'
	| '-';

WS: [ \n\r\t] -> channel(HIDDEN);

LINE_COMMENT: '#' ~[\r\n]* -> skip;

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
ORDERED_SEQUENCE_TYPE: '!oseq';
SCHEMA_TYPE: '!schema';