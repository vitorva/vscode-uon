grammar UON;

uon
   : value
   ;

obj
   : OPEN_C_BRA pair (COMMA pair)* CLOSE_C_BRA
   | OPEN_C_BRA CLOSE_C_BRA
   ;

pair
   : key COLON value
   | key OPEN_PAR 'description' COLON key CLOSE_PAR COLON value
   ;

key
   : STRING
   | IDENTIFIER
   ;
   
string_property 
		:	string_max 
		|   string_min
		;
		
string_max: 'max' COLON key;
string_min: 'min' COLON key;

arr
   : OPEN_S_BRA value (COMMA value)* CLOSE_S_BRA
   | OPEN_S_BRA CLOSE_S_BRA
   ;

value
   : key
   | obj
   | arr
   | 'true'
   | 'false'
   | 'null'
   | '!str(' string_property CLOSE_PAR key
   ;

STRING
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
   
IDENTIFIER
   : IDENTIFIER_START IDENTIFIER_PART*
   ;
fragment IDENTIFIER_START
   : [\p{L}]
   | '$'
   | '_'
   | '\\' UNICODE_SEQUENCE
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