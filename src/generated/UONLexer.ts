// Generated from UON.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";
import { CommonToken, Token } from "antlr4ts";
import { UONParser } from "./UONParser";


export class UONLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly CT = 18;
	public static readonly METERS = 19;
	public static readonly KILOMETERS = 20;
	public static readonly GRAMS = 21;
	public static readonly KILOGRAMS = 22;
	public static readonly SECOND = 23;
	public static readonly MINUTE = 24;
	public static readonly CELSIUS = 25;
	public static readonly KELVIN = 26;
	public static readonly QUOTED_STRING = 27;
	public static readonly STR_TYPE = 28;
	public static readonly BOOL_TYPE = 29;
	public static readonly URL_TYPE = 30;
	public static readonly FLOAT_TYPE = 31;
	public static readonly FLOAT_128_TYPE = 32;
	public static readonly FLOAT_64_TYPE = 33;
	public static readonly FLOAT_32_TYPE = 34;
	public static readonly INT_TYPE = 35;
	public static readonly INT_128_TYPE = 36;
	public static readonly INT_64_TYPE = 37;
	public static readonly INT_32_TYPE = 38;
	public static readonly UINT_TYPE = 39;
	public static readonly UINT_128_TYPE = 40;
	public static readonly UINT_64_TYPE = 41;
	public static readonly UINT_32_TYPE = 42;
	public static readonly UNQUOTED_STRING = 43;
	public static readonly WS = 44;
	public static readonly NEWLINE2 = 45;
	public static readonly OPEN_PAR = 46;
	public static readonly CLOSE_PAR = 47;
	public static readonly OPEN_C_BRA = 48;
	public static readonly CLOSE_C_BRA = 49;
	public static readonly OPEN_S_BRA = 50;
	public static readonly CLOSE_S_BRA = 51;
	public static readonly COMMA = 52;
	public static readonly COLON = 53;
	public static readonly MAPPING_TYPE = 54;
	public static readonly SEQUENCE_TYPE = 55;
	public static readonly SCHEMA_TYPE = 56;
	public static readonly MINUS = 57;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"CT", "METERS", "KILOMETERS", "GRAMS", "KILOGRAMS", "SECOND", "MINUTE", 
		"CELSIUS", "KELVIN", "QUOTED_STRING", "STR_TYPE", "BOOL_TYPE", "URL_TYPE", 
		"FLOAT_TYPE", "FLOAT_128_TYPE", "FLOAT_64_TYPE", "FLOAT_32_TYPE", "INT_TYPE", 
		"INT_128_TYPE", "INT_64_TYPE", "INT_32_TYPE", "UINT_TYPE", "UINT_128_TYPE", 
		"UINT_64_TYPE", "UINT_32_TYPE", "DOUBLE_QUOTE_CHAR", "SINGLE_QUOTE_CHAR", 
		"ESCAPE_SEQUENCE", "UNQUOTED_STRING", "IDENTIFIER", "HEX", "UNICODE_SEQUENCE", 
		"NEWLINE", "SPACES", "WS", "NEWLINE2", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", 
		"CLOSE_C_BRA", "OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", 
		"SEQUENCE_TYPE", "SCHEMA_TYPE", "MINUS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'description'", "'optional'", "'name'", "'uuid'", "'max'", 
		"'quantity'", "'length'", "'mass'", "'temperature'", "'time'", "'true'", 
		"'True'", "'false'", "'False'", "'null'", "'none'", "'None'", "'!!'", 
		"'m'", "'km'", "'g'", "'kg'", "'s'", "'min'", "'C'", "'K'", undefined, 
		"'!str'", "'!bool'", "'!url'", "'!float'", "'!float128'", "'!float64'", 
		"'!float32'", "'!int'", "'!int128'", "'!int6'", "'!int32'", "'!uint'", 
		"'!uint128'", "'!uint64'", "'!uint32'", undefined, undefined, undefined, 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "','", "':'", "'!map'", "'!seq'", 
		"'!schema'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "CT", "METERS", "KILOMETERS", 
		"GRAMS", "KILOGRAMS", "SECOND", "MINUTE", "CELSIUS", "KELVIN", "QUOTED_STRING", 
		"STR_TYPE", "BOOL_TYPE", "URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", "FLOAT_64_TYPE", 
		"FLOAT_32_TYPE", "INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", "INT_32_TYPE", 
		"UINT_TYPE", "UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", "UNQUOTED_STRING", 
		"WS", "NEWLINE2", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", 
		"OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", "SEQUENCE_TYPE", 
		"SCHEMA_TYPE", "MINUS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UONLexer._LITERAL_NAMES, UONLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UONLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


		
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

		private createAndScheduleIndent(indent: any) {
			const previous = this.indents.length ? 0 : this.indents[0];
			if (indent > previous) {
				this.indents.push(indent);
				this.tokens.push(this.commonToken(UONParser.INDENT, "INDENT"));
			}
		}

		private processEOF_NextToken() {
			this.schedule(this.commonToken(UONLexer.NEWLINE2, "\n"));

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
			console.log(this.text);
			let spaces: string = this.text.replace(/(\r\n)+/, "");

			this.schedule(this.commonToken(UONLexer.NEWLINE2, "\n"));


			let indent: number = this.getIndentationCount(spaces);
			let previous: number = this.indents.length === 0 ? 0 : this.indents[0];

			console.log("indent-previous", indent, previous);


			if (indent === previous) {

			}
			else if (indent > previous) {
				this.indents.push(indent);
				this.schedule(this.commonToken(UONParser.INDENT, spaces));
			} else {
				while (this.indents.length === 0 && this.indents[0] > indent) {
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
			//throw new Error("Function not implemented.");
			this.tokens.push(token);
		}


		@Override
		public nextToken(): Token {
			console.log("LENGHT", this.tokens.length);

			if (this.tokens.length === 0) {
				console.log("this.tokens.length", this.tokens.length, this.tokens);
				let next: Token = super.nextToken();


				if (next.type === UONLexer.EOF) {
					this.processEOF_NextToken();
					next = this.tokens.pop();
				} else if (next.type === UONLexer.NEWLINE2) {
					this.processNEWLINE_NextToken();
					next = this.tokens.pop();
				}


				if (this.lastToken !== null && this.lastToken?.type === UONLexer.MINUS) {
					//this.tokens.push(this.commonToken(UONParser.MINUS, "-")); // TODO
					//this.createAndScheduleIndent(this._tokenStartCharPositionInLine);

					/*
					let indent = this._tokenStartCharPositionInLine;

					let afterNext: Token = super.nextToken();
					console.log(next.type);
					console.log(afterNext.type);

					if (afterNext.type === UONLexer.EOF) {
						this.processEOF_NextToken();
					} else if (afterNext.type === UONLexer.NEWLINE2) {
						this.processNEWLINE_NextToken();
						//this.tokens.push(this.commonToken(UONParser.MINUS, "-")); // TODO
						//this.createAndScheduleIndent(this._tokenStartCharPositionInLine);
					}
					else {
						this.schedule(afterNext);
					}
					*/
				}

				if (this.lastToken !== null && this.lastToken?.type === UONLexer.BOOL_TYPE) {
					//this.tokens.push(this.commonToken(UONParser.BOOL_TYPE, "!bool"));
					//this.createAndScheduleIndent(this._tokenStartCharPositionInLine);
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

		public commonToken(number: number, text: string): CommonToken {
			//return new CommonToken(this._tokenFactorySourcePair, type, DEFAULT_TOKEN_CHANNEL, start, stop);
			//return new CommonToken(number, text);
			return new CommonToken(number, text, this._tokenFactorySourcePair);
		}

		public atStartOfInput(): boolean {
			return super.charPositionInLine === 0 && super.line === 1;
		}



	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(UONLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "UON.g4"; }

	// @Override
	public get ruleNames(): string[] { return UONLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return UONLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return UONLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return UONLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 52:
			this.NEWLINE2_action(_localctx, actionIndex);
			break;
		}
	}
	private NEWLINE2_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			if(this.ignoreWord) this.skip();
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 52:
			return this.NEWLINE2_sempred(_localctx, predIndex);
		}
		return true;
	}
	private NEWLINE2_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02;\u01F2\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x07\x1C\u010D\n\x1C\f\x1C\x0E" +
		"\x1C\u0110\v\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0115\n\x1C\f\x1C\x0E" +
		"\x1C\u0118\v\x1C\x03\x1C\x05\x1C\u011B\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03,\x03,\x05,\u018B\n,\x03-\x03-\x05-\u018F\n-\x03.\x03." +
		"\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u019B\n.\x03/\x07/\u019E" +
		"\n/\f/\x0E/\u01A1\v/\x030\x030\x030\x030\x050\u01A7\n0\x031\x031\x032" +
		"\x032\x032\x032\x032\x032\x033\x033\x033\x053\u01B4\n3\x034\x064\u01B7" +
		"\n4\r4\x0E4\u01B8\x035\x035\x035\x035\x036\x036\x036\x056\u01C2\n6\x03" +
		"6\x036\x056\u01C6\n6\x036\x056\u01C9\n6\x056\u01CB\n6\x036\x036\x037\x03" +
		"7\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03" +
		">\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03B\x03B\x02\x02\x02C\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02" +
		"\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191" +
		"\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02" +
		"\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02\x02" +
		"Y\x02\x02[\x02\x02]\x02-_\x02\x02a\x02\x02c\x02\x02e\x02\x02g\x02\x02" +
		"i\x02.k\x02/m\x020o\x021q\x022s\x023u\x024w\x025y\x026{\x027}\x028\x7F" +
		"\x029\x81\x02:\x83\x02;\x03\x02\v\x06\x02\f\f\x0F\x0F$$^^\x06\x02\f\f" +
		"\x0F\x0F))^^\f\x02$$))11^^ddhhppttvvxx\x0E\x02\f\f\x0F\x0F$$))2;^^ddh" +
		"hppttvxzz\b\x02$$&&))AAaa\u200E\u200F\x05\x022;CHch\x05\x02\f\f\x0F\x0F" +
		"\u202A\u202B\x04\x02\v\v\"\"\x05\x02\v\f\x0F\x0F\"\"\x03\u02C1\x022\x02" +
		";\x02C\x02\\\x02a\x02a\x02c\x02|\x02\xAC\x02\xAC\x02\xB4\x02\xB5\x02\xB7" +
		"\x02\xB7\x02\xBB\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xD8\x02\xDA\x02\xF8" +
		"\x02\xFA\x02\u02C3\x02\u02C8\x02\u02D3\x02\u02E2\x02\u02E6\x02\u02EE\x02" +
		"\u02EE\x02\u02F0\x02\u02F0\x02\u0302\x02\u0376\x02\u0378\x02\u0379\x02" +
		"\u037C\x02\u037F\x02\u0381\x02\u0381\x02\u0388\x02\u0388\x02\u038A\x02" +
		"\u038C\x02\u038E\x02\u038E\x02\u0390\x02\u03A3\x02\u03A5\x02\u03F7\x02" +
		"\u03F9\x02\u0483\x02\u0485\x02\u0531\x02\u0533\x02\u0558\x02\u055B\x02" +
		"\u055B\x02\u0563\x02\u0589\x02\u0593\x02\u05BF\x02\u05C1\x02\u05C1\x02" +
		"\u05C3\x02\u05C4\x02\u05C6\x02\u05C7\x02\u05C9\x02\u05C9\x02\u05D2\x02" +
		"\u05EC\x02\u05F2\x02\u05F4\x02\u0612\x02\u061C\x02\u0622\x02\u066B\x02" +
		"\u0670\x02\u06D5\x02\u06D7\x02\u06DE\x02\u06E1\x02\u06EA\x02\u06EC\x02" +
		"\u06FE\x02\u0701\x02\u0701\x02\u0712\x02\u074C\x02\u074F\x02\u07B3\x02" +
		"\u07C2\x02\u07F7\x02\u07FC\x02\u07FC\x02\u0802\x02\u082F\x02\u0842\x02" +
		"\u085D\x02\u08A2\x02\u08B6\x02\u08B8\x02\u08BF\x02\u08D6\x02\u08E3\x02" +
		"\u08E5\x02\u0965\x02\u0968\x02\u0971\x02\u0973\x02\u0985\x02\u0987\x02" +
		"\u098E\x02\u0991\x02\u0992\x02\u0995\x02\u09AA\x02\u09AC\x02\u09B2\x02" +
		"\u09B4\x02\u09B4\x02\u09B8\x02\u09BB\x02\u09BE\x02\u09C6\x02\u09C9\x02" +
		"\u09CA\x02\u09CD\x02\u09D0\x02\u09D9\x02\u09D9\x02\u09DE\x02\u09DF\x02" +
		"\u09E1\x02\u09E5\x02\u09E8\x02\u09F3\x02\u09F6\x02\u09FB\x02\u0A03\x02" +
		"\u0A05\x02\u0A07\x02\u0A0C\x02\u0A11\x02\u0A12\x02\u0A15\x02\u0A2A\x02" +
		"\u0A2C\x02\u0A32\x02\u0A34\x02\u0A35\x02\u0A37\x02\u0A38\x02\u0A3A\x02" +
		"\u0A3B\x02\u0A3E\x02\u0A3E\x02\u0A40\x02\u0A44\x02\u0A49\x02\u0A4A\x02" +
		"\u0A4D\x02\u0A4F\x02\u0A53\x02\u0A53\x02\u0A5B\x02\u0A5E\x02\u0A60\x02" +
		"\u0A60\x02\u0A68\x02\u0A77\x02\u0A83\x02\u0A85\x02\u0A87\x02\u0A8F\x02" +
		"\u0A91\x02\u0A93\x02\u0A95\x02\u0AAA\x02\u0AAC\x02\u0AB2\x02\u0AB4\x02" +
		"\u0AB5\x02\u0AB7\x02\u0ABB\x02\u0ABE\x02\u0AC7\x02\u0AC9\x02\u0ACB\x02" +
		"\u0ACD\x02\u0ACF\x02\u0AD2\x02\u0AD2\x02\u0AE2\x02\u0AE5\x02\u0AE8\x02" +
		"\u0AF1\x02\u0AFB\x02\u0AFB\x02\u0B03\x02\u0B05\x02\u0B07\x02\u0B0E\x02" +
		"\u0B11\x02\u0B12\x02\u0B15\x02\u0B2A\x02\u0B2C\x02\u0B32\x02\u0B34\x02" +
		"\u0B35\x02\u0B37\x02\u0B3B\x02\u0B3E\x02\u0B46\x02\u0B49\x02\u0B4A\x02" +
		"\u0B4D\x02\u0B4F\x02\u0B58\x02\u0B59\x02\u0B5E\x02\u0B5F\x02\u0B61\x02" +
		"\u0B65\x02\u0B68\x02\u0B71\x02\u0B73\x02\u0B79\x02\u0B84\x02\u0B85\x02" +
		"\u0B87\x02\u0B8C\x02\u0B90\x02\u0B92\x02\u0B94\x02\u0B97\x02\u0B9B\x02" +
		"\u0B9C\x02\u0B9E\x02\u0B9E\x02\u0BA0\x02\u0BA1\x02\u0BA5\x02\u0BA6\x02" +
		"\u0BAA\x02\u0BAC\x02\u0BB0\x02\u0BBB\x02\u0BC0\x02\u0BC4\x02\u0BC8\x02" +
		"\u0BCA\x02\u0BCC\x02\u0BCF\x02\u0BD2\x02\u0BD2\x02\u0BD9\x02\u0BD9\x02" +
		"\u0BE8\x02\u0BF4\x02\u0C02\x02\u0C05\x02\u0C07\x02\u0C0E\x02\u0C10\x02" +
		"\u0C12\x02\u0C14\x02\u0C2A\x02\u0C2C\x02\u0C3B\x02\u0C3F\x02\u0C46\x02" +
		"\u0C48\x02\u0C4A\x02\u0C4C\x02\u0C4F\x02\u0C57\x02\u0C58\x02\u0C5A\x02" +
		"\u0C5C\x02\u0C62\x02\u0C65\x02\u0C68\x02\u0C71\x02\u0C7A\x02\u0C80\x02" +
		"\u0C82\x02\u0C85\x02\u0C87\x02\u0C8E\x02\u0C90\x02\u0C92\x02\u0C94\x02" +
		"\u0CAA\x02\u0CAC\x02\u0CB5\x02\u0CB7\x02\u0CBB\x02\u0CBE\x02\u0CC6\x02" +
		"\u0CC8\x02\u0CCA\x02\u0CCC\x02\u0CCF\x02\u0CD7\x02\u0CD8\x02\u0CE0\x02" +
		"\u0CE0\x02\u0CE2\x02\u0CE5\x02\u0CE8\x02\u0CF1\x02\u0CF3\x02\u0CF4\x02" +
		"\u0D03\x02\u0D05\x02\u0D07\x02\u0D0E\x02\u0D10\x02\u0D12\x02\u0D14\x02" +
		"\u0D3C\x02\u0D3F\x02\u0D46\x02\u0D48\x02\u0D4A\x02\u0D4C\x02\u0D50\x02" +
		"\u0D56\x02\u0D65\x02\u0D68\x02\u0D7A\x02\u0D7C\x02\u0D81\x02\u0D84\x02" +
		"\u0D85\x02\u0D87\x02\u0D98\x02\u0D9C\x02\u0DB3\x02\u0DB5\x02\u0DBD\x02" +
		"\u0DBF\x02\u0DBF\x02\u0DC2\x02\u0DC8\x02\u0DCC\x02\u0DCC\x02\u0DD1\x02" +
		"\u0DD6\x02\u0DD8\x02\u0DD8\x02\u0DDA\x02\u0DE1\x02\u0DE8\x02\u0DF1\x02" +
		"\u0DF4\x02\u0DF5\x02\u0E03\x02\u0E3C\x02\u0E42\x02\u0E50\x02\u0E52\x02" +
		"\u0E5B\x02\u0E83\x02\u0E84\x02\u0E86\x02\u0E86\x02\u0E89\x02\u0E8A\x02" +
		"\u0E8C\x02\u0E8C\x02\u0E8F\x02\u0E8F\x02\u0E96\x02\u0E99\x02\u0E9B\x02" +
		"\u0EA1\x02\u0EA3\x02\u0EA5\x02\u0EA7\x02\u0EA7\x02\u0EA9\x02\u0EA9\x02" +
		"\u0EAC\x02\u0EAD\x02\u0EAF\x02\u0EBB\x02\u0EBD\x02\u0EBF\x02\u0EC2\x02" +
		"\u0EC6\x02\u0EC8\x02\u0EC8\x02\u0ECA\x02\u0ECF\x02\u0ED2\x02\u0EDB\x02" +
		"\u0EDE\x02\u0EE1\x02\u0F02\x02\u0F02\x02\u0F1A\x02\u0F1B\x02\u0F22\x02" +
		"\u0F35\x02\u0F37\x02\u0F37\x02\u0F39\x02\u0F39\x02\u0F3B\x02\u0F3B\x02" +
		"\u0F40\x02\u0F49\x02\u0F4B\x02\u0F6E\x02\u0F73\x02\u0F86\x02\u0F88\x02" +
		"\u0F99\x02\u0F9B\x02\u0FBE\x02\u0FC8\x02\u0FC8\x02\u1002\x02\u104B\x02" +
		"\u1052\x02\u109F\x02\u10A2\x02\u10C7\x02\u10C9\x02\u10C9\x02\u10CF\x02" +
		"\u10CF\x02\u10D2\x02\u10FC\x02\u10FE\x02\u124A\x02\u124C\x02\u124F\x02" +
		"\u1252\x02\u1258\x02\u125A\x02\u125A\x02\u125C\x02\u125F\x02\u1262\x02" +
		"\u128A\x02\u128C\x02\u128F\x02\u1292\x02\u12B2\x02\u12B4\x02\u12B7\x02" +
		"\u12BA\x02\u12C0\x02\u12C2\x02\u12C2\x02\u12C4\x02\u12C7\x02\u12CA\x02" +
		"\u12D8\x02\u12DA\x02\u1312\x02\u1314\x02\u1317\x02\u131A\x02\u135C\x02" +
		"\u135F\x02\u1361\x02\u136B\x02\u137E\x02\u1382\x02\u1391\x02\u13A2\x02" +
		"\u13F7\x02\u13FA\x02\u13FF\x02\u1403\x02\u166E\x02\u1671\x02\u1681\x02" +
		"\u1683\x02\u169C\x02\u16A2\x02\u16EC\x02\u16F0\x02\u16FA\x02\u1702\x02" +
		"\u170E\x02\u1710\x02\u1716\x02\u1722\x02\u1736\x02\u1742\x02\u1755\x02" +
		"\u1762\x02\u176E\x02\u1770\x02\u1772\x02\u1774\x02\u1775\x02\u1782\x02" +
		"\u17D5\x02\u17D9\x02\u17D9\x02\u17DE\x02\u17DF\x02\u17E2\x02\u17EB\x02" +
		"\u17F2\x02\u17FB\x02\u180D\x02\u180F\x02\u1812\x02\u181B\x02\u1822\x02" +
		"\u1879\x02\u1882\x02\u18AC\x02\u18B2\x02\u18F7\x02\u1902\x02\u1920\x02" +
		"\u1922\x02\u192D\x02\u1932\x02\u193D\x02\u1948\x02\u196F\x02\u1972\x02" +
		"\u1976\x02\u1982\x02\u19AD\x02\u19B2\x02\u19CB\x02\u19D2\x02\u19DC\x02" +
		"\u1A02\x02\u1A1D\x02\u1A22\x02\u1A60\x02\u1A62\x02\u1A7E\x02\u1A81\x02" +
		"\u1A8B\x02\u1A92\x02\u1A9B\x02\u1AA9\x02\u1AA9\x02\u1AB2\x02\u1AC0\x02" +
		"\u1B02\x02\u1B4D\x02\u1B52\x02\u1B5B\x02\u1B6D\x02\u1B75\x02\u1B82\x02" +
		"\u1BF5\x02\u1C02\x02\u1C39\x02\u1C42\x02\u1C4B\x02\u1C4F\x02\u1C7F\x02" +
		"\u1C82\x02\u1C8A\x02\u1CD2\x02\u1CD4\x02\u1CD6\x02\u1CF8\x02\u1CFA\x02" +
		"\u1CFB\x02\u1D02\x02\u1DF7\x02\u1DFD\x02\u1F17\x02\u1F1A\x02\u1F1F\x02" +
		"\u1F22\x02\u1F47\x02\u1F4A\x02\u1F4F\x02\u1F52\x02\u1F59\x02\u1F5B\x02" +
		"\u1F5B\x02\u1F5D\x02\u1F5D\x02\u1F5F\x02\u1F5F\x02\u1F61\x02\u1F7F\x02" +
		"\u1F82\x02\u1FB6\x02\u1FB8\x02\u1FBE\x02\u1FC0\x02\u1FC0\x02\u1FC4\x02" +
		"\u1FC6\x02\u1FC8\x02\u1FCE\x02\u1FD2\x02\u1FD5\x02\u1FD8\x02\u1FDD\x02" +
		"\u1FE2\x02\u1FEE\x02\u1FF4\x02\u1FF6\x02\u1FF8\x02\u1FFE\x02\u2041\x02" +
		"\u2042\x02\u2056\x02\u2056\x02\u2072\x02\u2073\x02\u2076\x02\u207B\x02" +
		"\u2081\x02\u208B\x02\u2092\x02\u209E\x02\u20D2\x02\u20F2\x02\u2104\x02" +
		"\u2104\x02\u2109\x02\u2109\x02\u210C\x02\u2115\x02\u2117\x02\u2117\x02" +
		"\u211B\x02\u211F\x02\u2126\x02\u2126\x02\u2128\x02\u2128\x02\u212A\x02" +
		"\u212A\x02\u212C\x02\u212F\x02\u2131\x02\u213B\x02\u213E\x02\u2141\x02" +
		"\u2147\x02\u214B\x02\u2150\x02\u2150\x02\u2152\x02\u218B\x02\u2462\x02" +
		"\u249D\x02\u24EC\x02\u2501\x02\u2778\x02\u2795\x02\u2C02\x02\u2C30\x02" +
		"\u2C32\x02\u2C60\x02\u2C62\x02\u2CE6\x02\u2CED\x02\u2CF5\x02\u2CFF\x02" +
		"\u2CFF\x02\u2D02\x02\u2D27\x02\u2D29\x02\u2D29\x02\u2D2F\x02\u2D2F\x02" +
		"\u2D32\x02\u2D69\x02\u2D71\x02\u2D71\x02\u2D81\x02\u2D98\x02\u2DA2\x02" +
		"\u2DA8\x02\u2DAA\x02\u2DB0\x02\u2DB2\x02\u2DB8\x02\u2DBA\x02\u2DC0\x02" +
		"\u2DC2\x02\u2DC8\x02\u2DCA\x02\u2DD0\x02\u2DD2\x02\u2DD8\x02\u2DDA\x02" +
		"\u2DE0\x02\u2DE2\x02\u2E01\x02\u2E31\x02\u2E31\x02\u3007\x02\u3009\x02" +
		"\u3023\x02\u3031\x02\u3033\x02\u3037\x02\u303A\x02\u303E\x02\u3043\x02" +
		"\u3098\x02\u309B\x02\u309C\x02\u309F\x02\u30A1\x02\u30A3\x02\u30FC\x02" +
		"\u30FE\x02\u3101\x02\u3107\x02\u312F\x02\u3133\x02\u3190\x02\u3194\x02" +
		"\u3197\x02\u31A2\x02\u31BC\x02\u31F2\x02\u3201\x02\u3222\x02\u322B\x02" +
		"\u324A\x02\u3251\x02\u3253\x02\u3261\x02\u3282\x02\u328B\x02\u32B3\x02" +
		"\u32C1\x02\u3402\x02\u4DB7\x02\u4E02\x02\u9FD7\x02\uA002\x02\uA48E\x02" +
		"\uA4D2\x02\uA4FF\x02\uA502\x02\uA60E\x02\uA612\x02\uA62D\x02\uA642\x02" +
		"\uA674\x02\uA676\x02\uA67F\x02\uA681\x02\uA6F3\x02\uA719\x02\uA721\x02" +
		"\uA724\x02\uA78A\x02\uA78D\x02\uA7B0\x02\uA7B2\x02\uA7B9\x02\uA7F9\x02" +
		"\uA829\x02\uA832\x02\uA837\x02\uA842\x02\uA875\x02\uA882\x02\uA8C7\x02" +
		"\uA8D2\x02\uA8DB\x02\uA8E2\x02\uA8F9\x02\uA8FD\x02\uA8FD\x02\uA8FF\x02" +
		"\uA8FF\x02\uA902\x02\uA92F\x02\uA932\x02\uA955\x02\uA962\x02\uA97E\x02" +
		"\uA982\x02\uA9C2\x02\uA9D1\x02\uA9DB\x02\uA9E2\x02\uAA00\x02\uAA02\x02" +
		"\uAA38\x02\uAA42\x02\uAA4F\x02\uAA52\x02\uAA5B\x02\uAA62\x02\uAA78\x02" +
		"\uAA7C\x02\uAAC4\x02\uAADD\x02\uAADF\x02\uAAE2\x02\uAAF1\x02\uAAF4\x02" +
		"\uAAF8\x02\uAB03\x02\uAB08\x02\uAB0B\x02\uAB10\x02\uAB13\x02\uAB18\x02" +
		"\uAB22\x02\uAB28\x02\uAB2A\x02\uAB30\x02\uAB32\x02\uAB5C\x02\uAB5E\x02" +
		"\uAB67\x02\uAB72\x02\uABEC\x02\uABEE\x02\uABEF\x02\uABF2\x02\uABFB\x02" +
		"\uAC02\x02\uD7A5\x02\uD7B2\x02\uD7C8\x02\uD7CD\x02\uD7FD\x02\uF902\x02" +
		"\uFA6F\x02\uFA72\x02\uFADB\x02\uFB02\x02\uFB08\x02\uFB15\x02\uFB19\x02" +
		"\uFB1F\x02\uFB2A\x02\uFB2C\x02\uFB38\x02\uFB3A\x02\uFB3E\x02\uFB40\x02" +
		"\uFB40\x02\uFB42\x02\uFB43\x02\uFB45\x02\uFB46\x02\uFB48\x02\uFBB3\x02" +
		"\uFBD5\x02\uFD3F\x02\uFD52\x02\uFD91\x02\uFD94\x02\uFDC9\x02\uFDF2\x02" +
		"\uFDFD\x02\uFE02\x02\uFE11\x02\uFE22\x02\uFE31\x02\uFE35\x02\uFE36\x02" +
		"\uFE4F\x02\uFE51\x02\uFE72\x02\uFE76\x02\uFE78\x02\uFEFE\x02\uFF12\x02" +
		"\uFF1B\x02\uFF23\x02\uFF3C\x02\uFF41\x02\uFF41\x02\uFF43\x02\uFF5C\x02" +
		"\uFF68\x02\uFFC0\x02\uFFC4\x02\uFFC9\x02\uFFCC\x02\uFFD1\x02\uFFD4\x02" +
		"\uFFD9\x02\uFFDC\x02\uFFDE\x02\x02\x03\r\x03\x0F\x03(\x03*\x03<\x03>\x03" +
		"?\x03A\x03O\x03R\x03_\x03\x82\x03\xFC\x03\u0109\x03\u0135\x03\u0142\x03" +
		"\u017A\x03\u018C\x03\u018D\x03\u01FF\x03\u01FF\x03\u0282\x03\u029E\x03" +
		"\u02A2\x03\u02D2\x03\u02E2\x03\u02FD\x03\u0302\x03\u0325\x03\u0332\x03" +
		"\u034C\x03\u0352\x03\u037C\x03\u0382\x03\u039F\x03\u03A2\x03\u03C5\x03" +
		"\u03CA\x03\u03D1\x03\u03D3\x03\u03D7\x03\u0402\x03\u049F\x03\u04A2\x03" +
		"\u04AB\x03\u04B2\x03\u04D5\x03\u04DA\x03\u04FD\x03\u0502\x03\u0529\x03" +
		"\u0532\x03\u0565\x03\u0602\x03\u0738\x03\u0742\x03\u0757\x03\u0762\x03" +
		"\u0769\x03\u0802\x03\u0807\x03\u080A\x03\u080A\x03\u080C\x03\u0837\x03" +
		"\u0839\x03\u083A\x03\u083E\x03\u083E\x03\u0841\x03\u0857\x03\u085A\x03" +
		"\u0878\x03\u087B\x03\u08A0\x03\u08A9\x03\u08B1\x03\u08E2\x03\u08F4\x03" +
		"\u08F6\x03\u08F7\x03\u08FD\x03\u091D\x03\u0922\x03\u093B\x03\u0982\x03" +
		"\u09B9\x03\u09BE\x03\u09D1\x03\u09D4\x03\u0A05\x03\u0A07\x03\u0A08\x03" +
		"\u0A0E\x03\u0A15\x03\u0A17\x03\u0A19\x03\u0A1B\x03\u0A35\x03\u0A3A\x03" +
		"\u0A3C\x03\u0A41\x03\u0A49\x03\u0A62\x03\u0A80\x03\u0A82\x03\u0AA1\x03" +
		"\u0AC2\x03\u0AC9\x03\u0ACB\x03\u0AE8\x03\u0AED\x03\u0AF1\x03\u0B02\x03" +
		"\u0B37\x03\u0B42\x03\u0B57\x03\u0B5A\x03\u0B74\x03\u0B7A\x03\u0B93\x03" +
		"\u0BAB\x03\u0BB1\x03\u0C02\x03\u0C4A\x03\u0C82\x03\u0CB4\x03\u0CC2\x03" +
		"\u0CF4\x03\u0CFC\x03\u0D01\x03\u0E62\x03\u0E80\x03\u1002\x03\u1048\x03" +
		"\u1054\x03\u1071\x03\u1081\x03\u10BC\x03\u10D2\x03\u10EA\x03\u10F2\x03" +
		"\u10FB\x03\u1102\x03\u1136\x03\u1138\x03\u1141\x03\u1152\x03\u1175\x03" +
		"\u1178\x03\u1178\x03\u1182\x03\u11C6\x03\u11CC\x03\u11CE\x03\u11D2\x03" +
		"\u11DC\x03\u11DE\x03\u11DE\x03\u11E3\x03\u11F6\x03\u1202\x03\u1213\x03" +
		"\u1215\x03\u1239\x03\u1240\x03\u1240\x03\u1282\x03\u1288\x03\u128A\x03" +
		"\u128A\x03\u128C\x03\u128F\x03\u1291\x03\u129F\x03\u12A1\x03\u12AA\x03" +
		"\u12B2\x03\u12EC\x03\u12F2\x03\u12FB\x03\u1302\x03\u1305\x03\u1307\x03" +
		"\u130E\x03\u1311\x03\u1312\x03\u1315\x03\u132A\x03\u132C\x03\u1332\x03" +
		"\u1334\x03\u1335\x03\u1337\x03\u133B\x03\u133E\x03\u1346\x03\u1349\x03" +
		"\u134A\x03\u134D\x03\u134F\x03\u1352\x03\u1352\x03\u1359\x03\u1359\x03" +
		"\u135F\x03\u1365\x03\u1368\x03\u136E\x03\u1372\x03\u1376\x03\u1402\x03" +
		"\u144C\x03\u1452\x03\u145B\x03\u1482\x03\u14C7\x03\u14C9\x03\u14C9\x03" +
		"\u14D2\x03\u14DB\x03\u1582\x03\u15B7\x03\u15BA\x03\u15C2\x03\u15DA\x03" +
		"\u15DF\x03\u1602\x03\u1642\x03\u1646\x03\u1646\x03\u1652\x03\u165B\x03" +
		"\u1682\x03\u16B9\x03\u16C2\x03\u16CB\x03\u1702\x03\u171B\x03\u171F\x03" +
		"\u172D\x03\u1732\x03\u173D\x03\u18A2\x03\u18F4\x03\u1901\x03\u1901\x03" +
		"\u1AC2\x03\u1AFA\x03\u1C02\x03\u1C0A\x03\u1C0C\x03\u1C38\x03\u1C3A\x03" +
		"\u1C42\x03\u1C52\x03\u1C6E\x03\u1C74\x03\u1C91\x03\u1C94\x03\u1CA9\x03" +
		"\u1CAB\x03\u1CB8\x03\u2002\x03\u239B\x03\u2402\x03\u2470\x03\u2482\x03" +
		"\u2545\x03\u3002\x03\u3430\x03\u4402\x03\u4648\x03\u6802\x03\u6A3A\x03" +
		"\u6A42\x03\u6A60\x03\u6A62\x03\u6A6B\x03\u6AD2\x03\u6AEF\x03\u6AF2\x03" +
		"\u6AF6\x03\u6B02\x03\u6B38\x03\u6B42\x03\u6B45\x03\u6B52\x03\u6B5B\x03" +
		"\u6B5D\x03\u6B63\x03\u6B65\x03\u6B79\x03\u6B7F\x03\u6B91\x03\u6F02\x03" +
		"\u6F46\x03\u6F52\x03\u6F80\x03\u6F91\x03\u6FA1\x03\u6FE2\x03\u6FE2\x03" +
		"\u7002\x03\u87EE\x03\u8802\x03\u8AF4\x03\uB002\x03\uB003\x03\uBC02\x03" +
		"\uBC6C\x03\uBC72\x03\uBC7E\x03\uBC82\x03\uBC8A\x03\uBC92\x03\uBC9B\x03" +
		"\uBC9F\x03\uBCA0\x03\uD167\x03\uD16B\x03\uD16F\x03\uD174\x03\uD17D\x03" +
		"\uD184\x03\uD187\x03\uD18D\x03\uD1AC\x03\uD1AF\x03\uD244\x03\uD246\x03" +
		"\uD362\x03\uD373\x03\uD402\x03\uD456\x03\uD458\x03\uD49E\x03\uD4A0\x03" +
		"\uD4A1\x03\uD4A4\x03\uD4A4\x03\uD4A7\x03\uD4A8\x03\uD4AB\x03\uD4AE\x03" +
		"\uD4B0\x03\uD4BB\x03\uD4BD\x03\uD4BD\x03\uD4BF\x03\uD4C5\x03\uD4C7\x03" +
		"\uD507\x03\uD509\x03\uD50C\x03\uD50F\x03\uD516\x03\uD518\x03\uD51E\x03" +
		"\uD520\x03\uD53B\x03\uD53D\x03\uD540\x03\uD542\x03\uD546\x03\uD548\x03" +
		"\uD548\x03\uD54C\x03\uD552\x03\uD554\x03\uD6A7\x03\uD6AA\x03\uD6C2\x03" +
		"\uD6C4\x03\uD6DC\x03\uD6DE\x03\uD6FC\x03\uD6FE\x03\uD716\x03\uD718\x03" +
		"\uD736\x03\uD738\x03\uD750\x03\uD752\x03\uD770\x03\uD772\x03\uD78A\x03" +
		"\uD78C\x03\uD7AA\x03\uD7AC\x03\uD7C4\x03\uD7C6\x03\uD7CD\x03\uD7D0\x03" +
		"\uD801\x03\uDA02\x03\uDA38\x03\uDA3D\x03\uDA6E\x03\uDA77\x03\uDA77\x03" +
		"\uDA86\x03\uDA86\x03\uDA9D\x03\uDAA1\x03\uDAA3\x03\uDAB1\x03\uE002\x03" +
		"\uE008\x03\uE00A\x03\uE01A\x03\uE01D\x03\uE023\x03\uE025\x03\uE026\x03" +
		"\uE028\x03\uE02C\x03\uE802\x03\uE8C6\x03\uE8C9\x03\uE8D8\x03\uE902\x03" +
		"\uE94C\x03\uE952\x03\uE95B\x03\uEE02\x03\uEE05\x03\uEE07\x03\uEE21\x03" +
		"\uEE23\x03\uEE24\x03\uEE26\x03\uEE26\x03\uEE29\x03\uEE29\x03\uEE2B\x03" +
		"\uEE34\x03\uEE36\x03\uEE39\x03\uEE3B\x03\uEE3B\x03\uEE3D\x03\uEE3D\x03" +
		"\uEE44\x03\uEE44\x03\uEE49\x03\uEE49\x03\uEE4B\x03\uEE4B\x03\uEE4D\x03" +
		"\uEE4D\x03\uEE4F\x03\uEE51\x03\uEE53\x03\uEE54\x03\uEE56\x03\uEE56\x03" +
		"\uEE59\x03\uEE59\x03\uEE5B\x03\uEE5B\x03\uEE5D\x03\uEE5D\x03\uEE5F\x03" +
		"\uEE5F\x03\uEE61\x03\uEE61\x03\uEE63\x03\uEE64\x03\uEE66\x03\uEE66\x03" +
		"\uEE69\x03\uEE6C\x03\uEE6E\x03\uEE74\x03\uEE76\x03\uEE79\x03\uEE7B\x03" +
		"\uEE7E\x03\uEE80\x03\uEE80\x03\uEE82\x03\uEE8B\x03\uEE8D\x03\uEE9D\x03" +
		"\uEEA3\x03\uEEA5\x03\uEEA7\x03\uEEAB\x03\uEEAD\x03\uEEBD\x03\uF102\x03" +
		"\uF10E\x03\x02\x04\uA6D8\x04\uA702\x04\uB736\x04\uB742\x04\uB81F\x04\uB822" +
		"\x04\uCEA3\x04\uF802\x04\uFA1F\x04\u0102\x10\u01F1\x10\u01FC\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03" +
		"\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02" +
		"\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02" +
		"=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02" +
		"\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02" +
		"\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03" +
		"\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02]\x03\x02\x02" +
		"\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02" +
		"o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02" +
		"\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02" +
		"\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02" +
		"\x02\x83\x03\x02\x02\x02\x03\x85\x03\x02\x02\x02\x05\x91\x03\x02\x02\x02" +
		"\x07\x9A\x03\x02\x02\x02\t\x9F\x03\x02\x02\x02\v\xA4\x03\x02\x02\x02\r" +
		"\xA8\x03\x02\x02\x02\x0F\xB1\x03\x02\x02\x02\x11\xB8\x03\x02\x02\x02\x13" +
		"\xBD\x03\x02\x02\x02\x15\xC9\x03\x02\x02\x02\x17\xCE\x03\x02\x02\x02\x19" +
		"\xD3\x03\x02\x02\x02\x1B\xD8\x03\x02\x02\x02\x1D\xDE\x03\x02\x02\x02\x1F" +
		"\xE4\x03\x02\x02\x02!\xE9\x03\x02\x02\x02#\xEE\x03\x02\x02\x02%\xF3\x03" +
		"\x02\x02\x02\'\xF6\x03\x02\x02\x02)\xF8\x03\x02\x02\x02+\xFB\x03\x02\x02" +
		"\x02-\xFD\x03\x02\x02\x02/\u0100\x03\x02\x02\x021\u0102\x03\x02\x02\x02" +
		"3\u0106\x03\x02\x02\x025\u0108\x03\x02\x02\x027\u011A\x03\x02\x02\x02" +
		"9\u011C\x03\x02\x02\x02;\u0121\x03\x02\x02\x02=\u0127\x03\x02\x02\x02" +
		"?\u012C\x03\x02\x02\x02A\u0133\x03\x02\x02\x02C\u013D\x03\x02\x02\x02" +
		"E\u0146\x03\x02\x02\x02G\u014F\x03\x02\x02\x02I\u0154\x03\x02\x02\x02" +
		"K\u015C\x03\x02\x02\x02M\u0162\x03\x02\x02\x02O\u0169\x03\x02\x02\x02" +
		"Q\u016F\x03\x02\x02\x02S\u0178\x03\x02\x02\x02U\u0180\x03\x02\x02\x02" +
		"W\u018A\x03\x02\x02\x02Y\u018E\x03\x02\x02\x02[\u0190\x03\x02\x02\x02" +
		"]\u019F\x03\x02\x02\x02_\u01A6\x03\x02\x02\x02a\u01A8\x03\x02\x02\x02" +
		"c\u01AA\x03\x02\x02\x02e\u01B3\x03\x02\x02\x02g\u01B6\x03\x02\x02\x02" +
		"i\u01BA\x03\x02\x02\x02k\u01CA\x03\x02\x02\x02m\u01CE\x03\x02\x02\x02" +
		"o\u01D0\x03\x02\x02\x02q\u01D2\x03\x02\x02\x02s\u01D4\x03\x02\x02\x02" +
		"u\u01D6\x03\x02\x02\x02w\u01D8\x03\x02\x02\x02y\u01DA\x03\x02\x02\x02" +
		"{\u01DC\x03\x02\x02\x02}\u01DE\x03\x02\x02\x02\x7F\u01E3\x03\x02\x02\x02" +
		"\x81\u01E8\x03\x02\x02\x02\x83\u01F0\x03\x02\x02\x02\x85\x86\x07f\x02" +
		"\x02\x86\x87\x07g\x02\x02\x87\x88\x07u\x02\x02\x88\x89\x07e\x02\x02\x89" +
		"\x8A\x07t\x02\x02\x8A\x8B\x07k\x02\x02\x8B\x8C\x07r\x02\x02\x8C\x8D\x07" +
		"v\x02\x02\x8D\x8E\x07k\x02\x02\x8E\x8F\x07q\x02\x02\x8F\x90\x07p\x02\x02" +
		"\x90\x04\x03\x02\x02\x02\x91\x92\x07q\x02\x02\x92\x93\x07r\x02\x02\x93" +
		"\x94\x07v\x02\x02\x94\x95\x07k\x02\x02\x95\x96\x07q\x02\x02\x96\x97\x07" +
		"p\x02\x02\x97\x98\x07c\x02\x02\x98\x99";
	private static readonly _serializedATNSegment1: string =
		"\x07n\x02\x02\x99\x06\x03\x02\x02\x02\x9A\x9B\x07p\x02\x02\x9B\x9C\x07" +
		"c\x02\x02\x9C\x9D\x07o\x02\x02\x9D\x9E\x07g\x02\x02\x9E\b\x03\x02\x02" +
		"\x02\x9F\xA0\x07w\x02\x02\xA0\xA1\x07w\x02\x02\xA1\xA2\x07k\x02\x02\xA2" +
		"\xA3\x07f\x02\x02\xA3\n\x03\x02\x02\x02\xA4\xA5\x07o\x02\x02\xA5\xA6\x07" +
		"c\x02\x02\xA6\xA7\x07z\x02\x02\xA7\f\x03\x02\x02\x02\xA8\xA9\x07s\x02" +
		"\x02\xA9\xAA\x07w\x02\x02\xAA\xAB\x07c\x02\x02\xAB\xAC\x07p\x02\x02\xAC" +
		"\xAD\x07v\x02\x02\xAD\xAE\x07k\x02\x02\xAE\xAF\x07v\x02\x02\xAF\xB0\x07" +
		"{\x02\x02\xB0\x0E\x03\x02\x02\x02\xB1\xB2\x07n\x02\x02\xB2\xB3\x07g\x02" +
		"\x02\xB3\xB4\x07p\x02\x02\xB4\xB5\x07i\x02\x02\xB5\xB6\x07v\x02\x02\xB6" +
		"\xB7\x07j\x02\x02\xB7\x10\x03\x02\x02\x02\xB8\xB9\x07o\x02\x02\xB9\xBA" +
		"\x07c\x02\x02\xBA\xBB\x07u\x02\x02\xBB\xBC\x07u\x02\x02\xBC\x12\x03\x02" +
		"\x02\x02\xBD\xBE\x07v\x02\x02\xBE\xBF\x07g\x02\x02\xBF\xC0\x07o\x02\x02" +
		"\xC0\xC1\x07r\x02\x02\xC1\xC2\x07g\x02\x02\xC2\xC3\x07t\x02\x02\xC3\xC4" +
		"\x07c\x02\x02\xC4\xC5\x07v\x02\x02\xC5\xC6\x07w\x02\x02\xC6\xC7\x07t\x02" +
		"\x02\xC7\xC8\x07g\x02\x02\xC8\x14\x03\x02\x02\x02\xC9\xCA\x07v\x02\x02" +
		"\xCA\xCB\x07k\x02\x02\xCB\xCC\x07o\x02\x02\xCC\xCD\x07g\x02\x02\xCD\x16" +
		"\x03\x02\x02\x02\xCE\xCF\x07v\x02\x02\xCF\xD0\x07t\x02\x02\xD0\xD1\x07" +
		"w\x02\x02\xD1\xD2\x07g\x02\x02\xD2\x18\x03\x02\x02\x02\xD3\xD4\x07V\x02" +
		"\x02\xD4\xD5\x07t\x02\x02\xD5\xD6\x07w\x02\x02\xD6\xD7\x07g\x02\x02\xD7" +
		"\x1A\x03\x02\x02\x02\xD8\xD9\x07h\x02\x02\xD9\xDA\x07c\x02\x02\xDA\xDB" +
		"\x07n\x02\x02\xDB\xDC\x07u\x02\x02\xDC\xDD\x07g\x02\x02\xDD\x1C\x03\x02" +
		"\x02\x02\xDE\xDF\x07H\x02\x02\xDF\xE0\x07c\x02\x02\xE0\xE1\x07n\x02\x02" +
		"\xE1\xE2\x07u\x02\x02\xE2\xE3\x07g\x02\x02\xE3\x1E\x03\x02\x02\x02\xE4" +
		"\xE5\x07p\x02\x02\xE5\xE6\x07w\x02\x02\xE6\xE7\x07n\x02\x02\xE7\xE8\x07" +
		"n\x02\x02\xE8 \x03\x02\x02\x02\xE9\xEA\x07p\x02\x02\xEA\xEB\x07q\x02\x02" +
		"\xEB\xEC\x07p\x02\x02\xEC\xED\x07g\x02\x02\xED\"\x03\x02\x02\x02\xEE\xEF" +
		"\x07P\x02\x02\xEF\xF0\x07q\x02\x02\xF0\xF1\x07p\x02\x02\xF1\xF2\x07g\x02" +
		"\x02\xF2$\x03\x02\x02\x02\xF3\xF4\x07#\x02\x02\xF4\xF5\x07#\x02\x02\xF5" +
		"&\x03\x02\x02\x02\xF6\xF7\x07o\x02\x02\xF7(\x03\x02\x02\x02\xF8\xF9\x07" +
		"m\x02\x02\xF9\xFA\x07o\x02\x02\xFA*\x03\x02\x02\x02\xFB\xFC\x07i\x02\x02" +
		"\xFC,\x03\x02\x02\x02\xFD\xFE\x07m\x02\x02\xFE\xFF\x07i\x02\x02\xFF.\x03" +
		"\x02\x02\x02\u0100\u0101\x07u\x02\x02\u01010\x03\x02\x02\x02\u0102\u0103" +
		"\x07o\x02\x02\u0103\u0104\x07k\x02\x02\u0104\u0105\x07p\x02\x02\u0105" +
		"2\x03\x02\x02\x02\u0106\u0107\x07E\x02\x02\u01074\x03\x02\x02\x02\u0108" +
		"\u0109\x07M\x02\x02\u01096\x03\x02\x02\x02\u010A\u010E\x07$\x02\x02\u010B" +
		"\u010D\x05W,\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02" +
		"\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x03" +
		"\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u011B\x07$\x02\x02\u0112" +
		"\u0116\x07)\x02\x02\u0113\u0115\x05Y-\x02\u0114\u0113\x03\x02\x02\x02" +
		"\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03" +
		"\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119" +
		"\u011B\x07)\x02\x02\u011A\u010A\x03\x02\x02\x02\u011A\u0112\x03\x02\x02" +
		"\x02\u011B8\x03\x02\x02\x02\u011C\u011D\x07#\x02\x02\u011D\u011E\x07u" +
		"\x02\x02\u011E\u011F\x07v\x02\x02\u011F\u0120\x07t\x02\x02\u0120:\x03" +
		"\x02\x02\x02\u0121\u0122\x07#\x02\x02\u0122\u0123\x07d\x02\x02\u0123\u0124" +
		"\x07q\x02\x02\u0124\u0125\x07q\x02\x02\u0125\u0126\x07n\x02\x02\u0126" +
		"<\x03\x02\x02\x02\u0127\u0128\x07#\x02\x02\u0128\u0129\x07w\x02\x02\u0129" +
		"\u012A\x07t\x02\x02\u012A\u012B\x07n\x02\x02\u012B>\x03\x02\x02\x02\u012C" +
		"\u012D\x07#\x02\x02\u012D\u012E\x07h\x02\x02\u012E\u012F\x07n\x02\x02" +
		"\u012F\u0130\x07q\x02\x02\u0130\u0131\x07c\x02\x02\u0131\u0132\x07v\x02" +
		"\x02\u0132@\x03\x02\x02\x02\u0133\u0134\x07#\x02\x02\u0134\u0135\x07h" +
		"\x02\x02\u0135\u0136\x07n\x02\x02\u0136\u0137\x07q\x02\x02\u0137\u0138" +
		"\x07c\x02\x02\u0138\u0139\x07v\x02\x02\u0139\u013A\x073\x02\x02\u013A" +
		"\u013B\x074\x02\x02\u013B\u013C\x07:\x02\x02\u013CB\x03\x02\x02\x02\u013D" +
		"\u013E\x07#\x02\x02\u013E\u013F\x07h\x02\x02\u013F\u0140\x07n\x02\x02" +
		"\u0140\u0141\x07q\x02\x02\u0141\u0142\x07c\x02\x02\u0142\u0143\x07v\x02" +
		"\x02\u0143\u0144\x078\x02\x02\u0144\u0145\x076\x02\x02\u0145D\x03\x02" +
		"\x02\x02\u0146\u0147\x07#\x02\x02\u0147\u0148\x07h\x02\x02\u0148\u0149" +
		"\x07n\x02\x02\u0149\u014A\x07q\x02\x02\u014A\u014B\x07c\x02\x02\u014B" +
		"\u014C\x07v\x02\x02\u014C\u014D\x075\x02\x02\u014D\u014E\x074\x02\x02" +
		"\u014EF\x03\x02\x02\x02\u014F\u0150\x07#\x02\x02\u0150\u0151\x07k\x02" +
		"\x02\u0151\u0152\x07p\x02\x02\u0152\u0153\x07v\x02\x02\u0153H\x03\x02" +
		"\x02\x02\u0154\u0155\x07#\x02\x02\u0155\u0156\x07k\x02\x02\u0156\u0157" +
		"\x07p\x02\x02\u0157\u0158\x07v\x02\x02\u0158\u0159\x073\x02\x02\u0159" +
		"\u015A\x074\x02\x02\u015A\u015B\x07:\x02\x02\u015BJ\x03\x02\x02\x02\u015C" +
		"\u015D\x07#\x02\x02\u015D\u015E\x07k\x02\x02\u015E\u015F\x07p\x02\x02" +
		"\u015F\u0160\x07v\x02\x02\u0160\u0161\x078\x02\x02\u0161L\x03\x02\x02" +
		"\x02\u0162\u0163\x07#\x02\x02\u0163\u0164\x07k\x02\x02\u0164\u0165\x07" +
		"p\x02\x02\u0165\u0166\x07v\x02\x02\u0166\u0167\x075\x02\x02\u0167\u0168" +
		"\x074\x02\x02\u0168N\x03\x02\x02\x02\u0169\u016A\x07#\x02\x02\u016A\u016B" +
		"\x07w\x02\x02\u016B\u016C\x07k\x02\x02\u016C\u016D\x07p\x02\x02\u016D" +
		"\u016E\x07v\x02\x02\u016EP\x03\x02\x02\x02\u016F\u0170\x07#\x02\x02\u0170" +
		"\u0171\x07w\x02\x02\u0171\u0172\x07k\x02\x02\u0172\u0173\x07p\x02\x02" +
		"\u0173\u0174\x07v\x02\x02\u0174\u0175\x073\x02\x02\u0175\u0176\x074\x02" +
		"\x02\u0176\u0177\x07:\x02\x02\u0177R\x03\x02\x02\x02\u0178\u0179\x07#" +
		"\x02\x02\u0179\u017A\x07w\x02\x02\u017A\u017B\x07k\x02\x02\u017B\u017C" +
		"\x07p\x02\x02\u017C\u017D\x07v\x02\x02\u017D\u017E\x078\x02\x02\u017E" +
		"\u017F\x076\x02\x02\u017FT\x03\x02\x02\x02\u0180\u0181\x07#\x02\x02\u0181" +
		"\u0182\x07w\x02\x02\u0182\u0183\x07k\x02\x02\u0183\u0184\x07p\x02\x02" +
		"\u0184\u0185\x07v\x02\x02\u0185\u0186\x075\x02\x02\u0186\u0187\x074\x02" +
		"\x02\u0187V\x03\x02\x02\x02\u0188\u018B\n\x02\x02\x02\u0189\u018B\x05" +
		"[.\x02\u018A\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02\x02\x02\u018BX" +
		"\x03\x02\x02\x02\u018C\u018F\n\x03\x02\x02\u018D\u018F\x05[.\x02\u018E" +
		"\u018C\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02\u018FZ\x03\x02\x02" +
		"\x02\u0190\u019A\x07^\x02\x02\u0191\u019B\x05e3\x02\u0192\u019B\x05c2" +
		"\x02\u0193\u019B\t\x04\x02\x02\u0194\u019B\n\x05\x02\x02\u0195\u019B\x07" +
		"2\x02\x02\u0196\u0197\x07z\x02\x02\u0197\u0198\x05a1\x02\u0198\u0199\x05" +
		"a1\x02\u0199\u019B\x03\x02\x02\x02\u019A\u0191\x03\x02\x02\x02\u019A\u0192" +
		"\x03\x02\x02\x02\u019A\u0193\x03\x02\x02\x02\u019A\u0194\x03\x02\x02\x02" +
		"\u019A\u0195\x03\x02\x02\x02\u019A\u0196\x03\x02\x02\x02\u019B\\\x03\x02" +
		"\x02\x02\u019C\u019E\x05_0\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1" +
		"\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02" +
		"\u01A0^\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A7\t\v\x02" +
		"\x02\u01A3\u01A4\x07^\x02\x02\u01A4\u01A7\x05c2\x02\u01A5\u01A7\t\x06" +
		"\x02\x02\u01A6\u01A2\x03\x02\x02\x02\u01A6\u01A3\x03\x02\x02\x02\u01A6" +
		"\u01A5\x03\x02\x02\x02\u01A7`\x03\x02\x02\x02\u01A8\u01A9\t\x07\x02\x02" +
		"\u01A9b\x03\x02\x02\x02\u01AA\u01AB\x07w\x02\x02\u01AB\u01AC\x05a1\x02" +
		"\u01AC\u01AD\x05a1\x02\u01AD\u01AE\x05a1\x02\u01AE\u01AF\x05a1\x02\u01AF" +
		"d\x03\x02\x02\x02\u01B0\u01B1\x07\x0F\x02\x02\u01B1\u01B4\x07\f\x02\x02" +
		"\u01B2\u01B4\t\b\x02\x02\u01B3\u01B0\x03\x02\x02\x02\u01B3\u01B2\x03\x02" +
		"\x02\x02\u01B4f\x03\x02\x02\x02\u01B5\u01B7\t\t\x02\x02\u01B6\u01B5\x03" +
		"\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8" +
		"\u01B9\x03\x02\x02\x02\u01B9h\x03\x02\x02\x02\u01BA\u01BB\t\n\x02\x02" +
		"\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\b5\x02\x02\u01BDj\x03\x02\x02" +
		"\x02\u01BE\u01BF\x066\x02\x02\u01BF\u01CB\x05g4\x02\u01C0\u01C2\x07\x0F" +
		"\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C3\x03\x02\x02\x02\u01C3\u01C6\x07\f\x02\x02\u01C4\u01C6\x07\x0F\x02" +
		"\x02\u01C5\u01C1\x03\x02\x02\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C8" +
		"\x03\x02\x02\x02\u01C7\u01C9\x05g4\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA\u01BE\x03\x02" +
		"\x02\x02\u01CA\u01C5\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC" +
		"\u01CD\b6\x03\x02\u01CDl\x03\x02\x02\x02\u01CE\u01CF\x07*\x02\x02\u01CF" +
		"n\x03\x02\x02\x02\u01D0\u01D1\x07+\x02\x02\u01D1p\x03\x02\x02\x02\u01D2" +
		"\u01D3\x07}\x02\x02\u01D3r\x03\x02\x02\x02\u01D4\u01D5\x07\x7F\x02\x02" +
		"\u01D5t\x03\x02\x02\x02\u01D6\u01D7\x07]\x02\x02\u01D7v\x03\x02\x02\x02" +
		"\u01D8\u01D9\x07_\x02\x02\u01D9x\x03\x02\x02\x02\u01DA\u01DB\x07.\x02" +
		"\x02\u01DBz\x03\x02\x02\x02\u01DC\u01DD\x07<\x02\x02\u01DD|\x03\x02\x02" +
		"\x02\u01DE\u01DF\x07#\x02\x02\u01DF\u01E0\x07o\x02\x02\u01E0\u01E1\x07" +
		"c\x02\x02\u01E1\u01E2\x07r\x02\x02\u01E2~\x03\x02\x02\x02\u01E3\u01E4" +
		"\x07#\x02\x02\u01E4\u01E5\x07u\x02\x02\u01E5\u01E6\x07g\x02\x02\u01E6" +
		"\u01E7\x07s\x02\x02\u01E7\x80\x03\x02\x02\x02\u01E8\u01E9\x07#\x02\x02" +
		"\u01E9\u01EA\x07u\x02\x02\u01EA\u01EB\x07e\x02\x02\u01EB\u01EC\x07j\x02" +
		"\x02\u01EC\u01ED\x07g\x02\x02\u01ED\u01EE\x07o\x02\x02\u01EE\u01EF\x07" +
		"c\x02\x02\u01EF\x82\x03\x02\x02\x02\u01F0\u01F1\x07/\x02\x02\u01F1\x84" +
		"\x03\x02\x02\x02\x11\x02\u010E\u0116\u011A\u018A\u018E\u019A\u019F\u01A6" +
		"\u01B3\u01B8\u01C1\u01C5\u01C8\u01CA\x04\x02\x03\x02\x036\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			UONLexer._serializedATNSegment0,
			UONLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UONLexer.__ATN) {
			UONLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UONLexer._serializedATN));
		}

		return UONLexer.__ATN;
	}

}

