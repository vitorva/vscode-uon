
/** Taken from "The Definitive ANTLR 4 Reference" by Terence Parr */

// Derived from http://json.org
grammar UON;

uon
   : value
   ;

obj
   : OPEN_C_BRA pair (COMMA pair)* CLOSE_C_BRA
   | OPEN_C_BRA CLOSE_C_BRA
   ;

pair
   : STRING COLON value
   | STRING OPEN_PAR 'description' COLON STRING CLOSE_PAR COLON value
   | '!str(' string_property CLOSE_PAR COLON STRING
   ;
   
string_property 
		:	string_max 
		|   string_min
		;
		
string_max: 'max' COLON STRING;
string_min: 'min' COLON STRING;

arr
   : OPEN_S_BRA value (COMMA value)* CLOSE_S_BRA
   | OPEN_S_BRA CLOSE_S_BRA
   ;

value
   : STRING
   | NUMBER
   | obj
   | arr
   | 'true'
   | 'false'
   | 'null'
   ;


STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   | ~[ \t\r\n[\]{}=,|&]+
   ;
   
fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;


fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;


fragment HEX
   : [0-9a-fA-F]
   ;


fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;


NUMBER
   : '-'? INT ('.' [0-9] +)? EXP?
   ;


fragment INT
   : '0' | [1-9] [0-9]*
   ;

// no leading zeros

fragment EXP
   : [Ee] [+\-]? INT
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