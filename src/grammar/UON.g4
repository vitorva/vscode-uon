grammar UON;

uon
   : root_value?
   ;

json_collection : json_map | json_seq;

json_map
   : (MAPPING_TYPE)? OPEN_C_BRA (json_pair (COMMA json_pair)*)? CLOSE_C_BRA
   ;

json_seq
   : (SEQUENCE_TYPE)? OPEN_S_BRA (json_value (COMMA json_value)*)? CLOSE_S_BRA
   ;

pair_key
   : string (presentation_properties)?
   ;

json_pair: pair_key COLON json_value;

presentation_properties: OPEN_PAR (presentation_property (COMMA presentation_property)*)? CLOSE_PAR;

presentation_property : optional | description;
description: 'description' COLON string;
optional: 'optional' COLON boolean;

string
   : literal
   | QUOTED_STRING
   | UNQUOTED_STRING
   ;

custom_type: CT UNQUOTED_STRING;

json_user_type: custom_type json_map;

scalar
   : quantity_scalar
   | string_scalar
   | boolean_scalar
   | url
   ;

string_scalar: (STR_TYPE)? string;

// string ?
boolean_scalar: (BOOL_TYPE)? boolean;
url: (URL_TYPE)? string;

quantity_scalar: numeric_scalar (quantity)?;
numeric_scalar: coercible_numeric_scalar | number;

coercible_numeric_scalar : number_type (coercible_numeric_scalar | number);

quantity: length | mass | time | temperature;

length: METERS | KILOMETERS;
mass: GRAMS | KILOGRAMS;
time: SECOND  | MINUTE;
temperature: CELSIUS | KELVIN;

root_value
   : json_collection
   | schema
   ;

json_value
   : json_map
   | json_seq
   | scalar
   | json_user_type
   | null
   ;

number_type: FLOAT_128_TYPE | FLOAT_64_TYPE | FLOAT_32_TYPE
               | INT_128_TYPE | INT_64_TYPE | INT_32_TYPE
               | UINT_128_TYPE | UINT_64_TYPE | UINT_32_TYPE
               | FLOAT_TYPE | INT_TYPE | UINT_TYPE;

schema: custom_type COLON SCHEMA_TYPE (schema_presentations)? OPEN_C_BRA (attributes)? CLOSE_C_BRA;
attributes: attribute (COMMA attribute)*;
attribute: pair_key COLON validation_properties;

schema_presentations: OPEN_PAR (schema_presentation (COMMA schema_presentation)*)? CLOSE_PAR;
schema_presentation: schema_name | schema_uuid | description;

schema_name: 'name' COLON string;
schema_uuid: 'uuid' COLON url;

validation_properties: string_validation
                      | number_validation
                      | boolean_validation
                      | url_validation;

string_validation: STR_TYPE (string_properties)?;
string_properties: OPEN_PAR (string_property (COMMA string_property)*)? CLOSE_PAR;
string_property
		:	string_max
		|  string_min
		;

string_max: 'max' COLON string;
string_min: 'min' COLON string;

url_validation: URL_TYPE;

// boolean validation
boolean_validation: BOOL_TYPE;

number_validation: number_validation_type (number_properties)?;
number_properties: OPEN_PAR (number_property (COMMA number_property)*)? CLOSE_PAR;

number_property: number_max | number_min | quantity_validation;

number_max: 'max' COLON number;
number_min: 'min' COLON number;
number_validation_type: FLOAT_TYPE | INT_TYPE | UINT_TYPE;

quantity_validation: 'quantity' COLON quantity_validation_types;
quantity_validation_types: LENGTH | MASS | TEMPERATURE | TIME;

boolean: (true | false);
true : 'true' | 'True';
false : 'false' | 'False';
null: 'null' | 'none' | 'None';

literal : LENGTH | MASS | TEMPERATURE | TIME | boolean | null;

number
   : SYMBOL?
      ( NUMERIC_LITERAL
      | NUMBER
      )
   ;

METERS: 'm';
KILOMETERS: 'km';

GRAMS: 'g';
KILOGRAMS: 'kg';

SECOND: 's';
//min -> minute to avoid ambiguity with minimum
MINUTE: 'minute';
CELSIUS: 'C';

KELVIN: 'K';

CT : '!!';

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

MAX : 'max';
MIN : 'min';

LENGTH : 'length';
MASS : 'mass';
TEMPERATURE : 'temperature';
TIME : 'time';

QUOTED_STRING
   : '"' DOUBLE_QUOTE_CHAR* '"'
   | '\'' SINGLE_QUOTE_CHAR* '\''
   ;

fragment DOUBLE_QUOTE_CHAR
   : ~["\\\r\n]
   | ESCAPE_SEQUENCE
   ;

fragment SINGLE_QUOTE_CHAR
   : ~['\\\r\n]
   | ESCAPE_SEQUENCE
   ;

fragment ESCAPE_SEQUENCE
   : '\\'
   ( NEWLINE
   | UNICODE_SEQUENCE       // \u1234
   | ['"\\/bfnrtv]          // single escape char
   | ~['"\\bfnrtv0-9xu\r\n] // non escape char
   | '0'                    // \0
   | 'x' HEX HEX            // \x3a
   )
   ;

NUMBER
   : INT ('.' [0-9]*)? EXP? // +1.e2, 1234, 1234.5
   | '.' [0-9]+ EXP?        // -.2e3
   | '0' [xX] HEX+          // 0x12345678
   ;

NUMERIC_LITERAL
   : 'Infinity'
   | 'NaN'
   ;

SYMBOL
   : '+' | '-'
   ;

fragment INT
   : '0' | [1-9] [0-9]*
   ;

fragment EXP
   : [Ee] SYMBOL? [0-9]*
   ;

UNQUOTED_STRING
   : IDENTIFIER
   ;

IDENTIFIER
   : IDENTIFIER_START IDENTIFIER_PART*
   ;

fragment IDENTIFIER_START
   : [\p{L}]
   | '$'
   | '_'
   | '\\' UNICODE_SEQUENCE
   ;

fragment IDENTIFIER_PART
   : IDENTIFIER_START
   | [\p{M}]
   | [\p{N}]
   | [\p{Pc}]
   | '\u200C'
   | '\u200D'
   ;


fragment HEX
   : [0-9a-fA-F]
   ;

fragment UNICODE_SEQUENCE
   : 'u' HEX HEX HEX HEX
   ;
fragment NEWLINE
   : '\r\n'
   | [\r\n\u2028\u2029]
   ;

// \- since - means "range" inside [...]

WS: [ \n\r\t] -> channel(HIDDEN);

LINE_COMMENT: '#' ~[\r\n]* -> skip;
   
OPEN_PAR:    '(';
CLOSE_PAR:   ')';
OPEN_C_BRA:  '{';
CLOSE_C_BRA: '}';
OPEN_S_BRA:  '[';
CLOSE_S_BRA: ']';
COMMA:		 ',';
COLON:		 ':';
MAPPING_TYPE: '!map';
SEQUENCE_TYPE: '!seq';
SCHEMA_TYPE: '!schema';