grammar UON;

uon
   : root_value
   ;

map
   : (MAPPING_TYPE)? OPEN_C_BRA (json_pair (COMMA json_pair)*)? CLOSE_C_BRA
   ;

seq
   : OPEN_S_BRA value (COMMA value)* CLOSE_S_BRA
   | OPEN_S_BRA CLOSE_S_BRA
   ;

schema : 'shema';
   
pair_key
   : string (presentation_properties)?
   ;

json_pair: pair_key COLON value;

presentation_properties: OPEN_PAR presentation_property ((COMMA presentation_property)*)? CLOSE_PAR;

presentation_property : optional | description;
description: 'description' COLON string;
optional: 'optional' COLON boolean;

boolean: 'true' | 'false';

string
   : QUOTED_STRING
   | UNQUOTED_STRING
   ;
   
string_property 
		:	string_max 
		|  string_min
		;
		
string_max: 'max' COLON string;
string_min: 'min' COLON string;

custom_type: '!!' UNQUOTED_STRING;

json_user_type: custom_type map;

scalar
   : quantity_scalar
   | string_scalar
   ;

string_scalar: (STR_TYPE)? string;

quantity_scalar: numeric_scalar (quantity)?;
numeric_scalar: coercible_numeric_scalar | number;

coercible_numeric_scalar : number_type (coercible_numeric_scalar | number);


quantity: length | mass | time | temperature;

length: METERS | KILOMETERS;
METERS: 'm';
KILOMETERS: 'km';

mass: GRAMS | KILOGRAMS;
GRAMS: 'g';
KILOGRAMS: 'kg';

time: SECOND  | MINUTE;
SECOND: 's';
MINUTE: 'min';

temperature: CELSIUS | KELVIN;
CELSIUS: 'C';
KELVIN: 'K';

number: UNQUOTED_STRING;
  
root_value
   : map
   | seq
   | schema
   ;

value
   : map 
   | seq
   | scalar
   | json_user_type 
   | 'true'
   | 'false'
   | 'null'
   ;

QUOTED_STRING
   : '"' DOUBLE_QUOTE_CHAR* '"'
   | '\'' SINGLE_QUOTE_CHAR* '\''
   ;

number_type: FLOAT_128_TYPE | FLOAT_64_TYPE | FLOAT_32_TYPE
               | INT_128_TYPE | INT_64_TYPE | INT_32_TYPE
               | UINT_128_TYPE | UINT_64_TYPE | UINT_32_TYPE
               | FLOAT_TYPE | INT_TYPE | UINT_TYPE;

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
   
UNQUOTED_STRING
   : IDENTIFIER_START IDENTIFIER_PART*
   ;
fragment IDENTIFIER_START
   : [\p{L}]
   | '$'
   | '_'
   | '\\' UNICODE_SEQUENCE
   | [\p{M}]
   | [\p{N}]
   | [\p{Pc}]
   | '\u200C'
   | '\u200D'
   | '"'
   ;
fragment IDENTIFIER_PART
   : IDENTIFIER_START
   | [\p{M}]
   | [\p{N}]
   | [\p{Pc}]
   | '\u200C'
   | '\u200D'
   | '"'
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

WS
   : [ \t\n\r] + -> skip
   ;
   
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