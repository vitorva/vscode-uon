
/** Taken from "The Definitive ANTLR 4 Reference" by Terence Parr */

// Derived from http://json.org
grammar UON;

uon
   : value
   ;

obj
   : open_c_bra pair (comma pair)* close_c_bra
   | open_c_bra close_c_bra
   ;

pair
   : STRING colon value
   | STRING open_par 'description' colon STRING close_par colon value
   | '!str(' string_property close_par colon STRING
   ;
   
string_property 
		:	string_max 
		|   string_min
		;
		
string_max: 'max' colon STRING;
string_min: 'min' colon STRING;

arr
   : open_s_bra value (comma value)* close_s_bra
   | open_s_bra close_s_bra
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
   
open_c_bra:  '{';
close_c_bra: '}';
open_s_bra:  '[';
close_s_bra: ']';  
open_par:    '(';
close_par:   ')';
colon:       ':';
comma:		 ',';