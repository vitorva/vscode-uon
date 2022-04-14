grammar UON;

uon
   : value
   ;

obj
   : OPEN_C_BRA pair (COMMA pair)* CLOSE_C_BRA
   | OPEN_C_BRA CLOSE_C_BRA
   ;

pair
   : WORD COLON value
   | WORD OPEN_PAR 'description' COLON WORD CLOSE_PAR COLON value
   | '!str(' string_property CLOSE_PAR COLON WORD
   ;
   
string_property 
		:	string_max 
		|   string_min
		;
		
string_max: 'max' COLON WORD;
string_min: 'min' COLON WORD;

arr
   : OPEN_S_BRA value (COMMA value)* CLOSE_S_BRA
   | OPEN_S_BRA CLOSE_S_BRA
   ;

value
   : WORD
   | obj
   | arr
   | 'true'
   | 'false'
   | 'null'
   ;


WORD
   : [a-zA-z1-9]+
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