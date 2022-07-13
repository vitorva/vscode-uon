// Generated from c:\Heig-VD\2021-22\Sem2\TB\project\vscode-uon\src\grammar\UON.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class UONLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		METERS=10, KILOMETERS=11, GRAMS=12, KILOGRAMS=13, SECOND=14, MINUTE=15, 
		CELSIUS=16, AMPERE=17, KELVIN=18, MOLE=19, CANDELA=20, CT=21, STR_TYPE=22, 
		BOOL_TYPE=23, URL_TYPE=24, FLOAT_TYPE=25, FLOAT_128_TYPE=26, FLOAT_64_TYPE=27, 
		FLOAT_32_TYPE=28, INT_TYPE=29, INT_128_TYPE=30, INT_64_TYPE=31, INT_32_TYPE=32, 
		UINT_TYPE=33, UINT_128_TYPE=34, UINT_64_TYPE=35, UINT_32_TYPE=36, MAX=37, 
		MIN=38, LENGTH=39, MASS=40, TEMPERATURE=41, TIME=42, NAME=43, UUID=44, 
		DESCRIPTION=45, OPTIONAL=46, COMMENT=47, QUOTED_STRING=48, NUMBER=49, 
		NUMERIC_LITERAL=50, UNQUOTED_STRING=51, IDENTIFIER=52, WS=53, LINE_COMMENT=54, 
		NEWLINE2=55, MINUS=56, OPEN_PAR=57, CLOSE_PAR=58, OPEN_C_BRA=59, CLOSE_C_BRA=60, 
		OPEN_S_BRA=61, CLOSE_S_BRA=62, COMMA=63, COLON=64, MAPPING_TYPE=65, ORDERED_MAPPING_TYPE=66, 
		SEQUENCE_TYPE=67, ORDERED_SEQUENCE_TYPE=68, SCHEMA_TYPE=69;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"METERS", "KILOMETERS", "GRAMS", "KILOGRAMS", "SECOND", "MINUTE", "CELSIUS", 
			"AMPERE", "KELVIN", "MOLE", "CANDELA", "CT", "STR_TYPE", "BOOL_TYPE", 
			"URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", "FLOAT_64_TYPE", "FLOAT_32_TYPE", 
			"INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", "INT_32_TYPE", "UINT_TYPE", 
			"UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", "MAX", "MIN", "LENGTH", 
			"MASS", "TEMPERATURE", "TIME", "NAME", "UUID", "DESCRIPTION", "OPTIONAL", 
			"COMMENT", "QUOTED_STRING", "DOUBLE_QUOTE_CHAR", "SINGLE_QUOTE_CHAR", 
			"NUMBER", "NUMERIC_LITERAL", "INT", "EXP", "HEX", "UNQUOTED_STRING", 
			"IDENTIFIER", "WS", "LINE_COMMENT", "SPACES", "NEWLINE2", "MINUS", "OPEN_PAR", 
			"CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", "OPEN_S_BRA", "CLOSE_S_BRA", 
			"COMMA", "COLON", "MAPPING_TYPE", "ORDERED_MAPPING_TYPE", "SEQUENCE_TYPE", 
			"ORDERED_SEQUENCE_TYPE", "SCHEMA_TYPE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'unit'", "'quantity'", "'true'", "'True'", "'false'", "'False'", 
			"'null'", "'none'", "'None'", "'m'", "'km'", "'g'", "'kg'", "'s'", "'minute'", 
			"'C'", "'A'", "'K'", "'mol'", "'cd'", "'!!'", "'!str'", "'!bool'", "'!url'", 
			"'!float'", "'!float128'", "'!float64'", "'!float32'", "'!int'", "'!int128'", 
			"'!int64'", "'!int32'", "'!uint'", "'!uint128'", "'!uint64'", "'!uint32'", 
			"'max'", "'min'", "'length'", "'mass'", "'temperature'", "'time'", "'name'", 
			"'uuid'", "'description'", "'optional'", "'comment'", null, null, null, 
			null, null, null, null, null, "'-'", "'('", "')'", "'{'", "'}'", "'['", 
			"']'", "','", "':'", "'!map'", "'!omap'", "'!seq'", "'!oseq'", "'!schema'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "METERS", 
			"KILOMETERS", "GRAMS", "KILOGRAMS", "SECOND", "MINUTE", "CELSIUS", "AMPERE", 
			"KELVIN", "MOLE", "CANDELA", "CT", "STR_TYPE", "BOOL_TYPE", "URL_TYPE", 
			"FLOAT_TYPE", "FLOAT_128_TYPE", "FLOAT_64_TYPE", "FLOAT_32_TYPE", "INT_TYPE", 
			"INT_128_TYPE", "INT_64_TYPE", "INT_32_TYPE", "UINT_TYPE", "UINT_128_TYPE", 
			"UINT_64_TYPE", "UINT_32_TYPE", "MAX", "MIN", "LENGTH", "MASS", "TEMPERATURE", 
			"TIME", "NAME", "UUID", "DESCRIPTION", "OPTIONAL", "COMMENT", "QUOTED_STRING", 
			"NUMBER", "NUMERIC_LITERAL", "UNQUOTED_STRING", "IDENTIFIER", "WS", "LINE_COMMENT", 
			"NEWLINE2", "MINUS", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", 
			"OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", "ORDERED_MAPPING_TYPE", 
			"SEQUENCE_TYPE", "ORDERED_SEQUENCE_TYPE", "SCHEMA_TYPE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


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

			this.schedule(this.commonToken(UONLexer.NEWLINE2, "NEWLINE2"));

			let indent: number = this.getIndentationCount(spaces);
			let previous: number = this.indents.length === 0 ? 0 : this.indents[0];

			console.log("indent-previous", indent, previous);

			if (indent === previous) {
				// TODO
			}
			else if (indent > previous) {
				this.indents.push(indent);
				this.schedule(this.commonToken(UONParser.INDENT, "INDENT")); // spaces
			} else {
				while (this.indents.length !== 0 && this.indents[0] > indent) {
					this.schedule(this.createDedent());
					this.indents.shift();
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
				} else if (next.type === UONLexer.NEWLINE2) {
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


	public UONLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "UON.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 60:
			NEWLINE2_action((RuleContext)_localctx, actionIndex);
			break;
		}
	}
	private void NEWLINE2_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0:
			if(ignoreWord) this.skip();
			break;
		}
	}
	@Override
	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 60:
			return NEWLINE2_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean NEWLINE2_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return atStartOfInput();
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2G\u0273\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n"+
		"\3\n\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\16\3\16\3\16\3\17\3\17"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24"+
		"\3\24\3\24\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3!\3\"\3\"\3\""+
		"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3$\3$\3%\3%"+
		"\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3(\3"+
		")\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3,\3"+
		",\3,\3,\3,\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3/\3/\3"+
		"/\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61"+
		"\7\61\u01ab\n\61\f\61\16\61\u01ae\13\61\3\61\3\61\3\61\7\61\u01b3\n\61"+
		"\f\61\16\61\u01b6\13\61\3\61\5\61\u01b9\n\61\3\62\3\62\3\63\3\63\3\64"+
		"\5\64\u01c0\n\64\3\64\3\64\3\64\7\64\u01c5\n\64\f\64\16\64\u01c8\13\64"+
		"\5\64\u01ca\n\64\3\64\5\64\u01cd\n\64\3\64\3\64\6\64\u01d1\n\64\r\64\16"+
		"\64\u01d2\3\64\5\64\u01d6\n\64\3\64\5\64\u01d9\n\64\3\64\3\64\3\64\6\64"+
		"\u01de\n\64\r\64\16\64\u01df\3\64\5\64\u01e3\n\64\3\64\3\64\3\64\6\64"+
		"\u01e8\n\64\r\64\16\64\u01e9\5\64\u01ec\n\64\3\65\3\65\3\65\3\65\3\65"+
		"\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65"+
		"\3\65\3\65\3\65\5\65\u0204\n\65\3\66\3\66\3\66\7\66\u0209\n\66\f\66\16"+
		"\66\u020c\13\66\5\66\u020e\n\66\3\67\3\67\3\67\7\67\u0213\n\67\f\67\16"+
		"\67\u0216\13\67\38\38\39\69\u021b\n9\r9\169\u021c\3:\5:\u0220\n:\3;\3"+
		";\3;\3;\3<\3<\7<\u0228\n<\f<\16<\u022b\13<\3<\3<\3=\6=\u0230\n=\r=\16"+
		"=\u0231\3>\3>\3>\5>\u0237\n>\3>\3>\5>\u023b\n>\3>\5>\u023e\n>\5>\u0240"+
		"\n>\3>\3>\3?\3?\3@\3@\3A\3A\3B\3B\3C\3C\3D\3D\3E\3E\3F\3F\3G\3G\3H\3H"+
		"\3H\3H\3H\3I\3I\3I\3I\3I\3I\3J\3J\3J\3J\3J\3K\3K\3K\3K\3K\3K\3L\3L\3L"+
		"\3L\3L\3L\3L\3L\2\2M\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27"+
		"\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33"+
		"\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\2"+
		"e\2g\63i\64k\2m\2o\2q\65s\66u\67w8y\2{9}:\177;\u0081<\u0083=\u0085>\u0087"+
		"?\u0089@\u008bA\u008dB\u008fC\u0091D\u0093E\u0095F\u0097G\3\2\16\3\2$"+
		"$\3\2))\4\2--//\3\2\62;\4\2ZZzz\4\2QQqq\3\2\63;\4\2GGgg\5\2\62;CHch\5"+
		"\2\13\f\17\17\"\"\4\2\f\f\17\17\4\2\13\13\"\"\3\u02cf\2&\2&\2\62\2;\2"+
		"C\2\\\2a\2a\2c\2|\2\u00ac\2\u00ac\2\u00b4\2\u00b5\2\u00b7\2\u00b7\2\u00bb"+
		"\2\u00bc\2\u00be\2\u00c0\2\u00c2\2\u00d8\2\u00da\2\u00f8\2\u00fa\2\u02c3"+
		"\2\u02c8\2\u02d3\2\u02e2\2\u02e6\2\u02ee\2\u02ee\2\u02f0\2\u02f0\2\u0302"+
		"\2\u0376\2\u0378\2\u0379\2\u037c\2\u037f\2\u0381\2\u0381\2\u0388\2\u0388"+
		"\2\u038a\2\u038c\2\u038e\2\u038e\2\u0390\2\u03a3\2\u03a5\2\u03f7\2\u03f9"+
		"\2\u0483\2\u0485\2\u0531\2\u0533\2\u0558\2\u055b\2\u055b\2\u0563\2\u0589"+
		"\2\u0593\2\u05bf\2\u05c1\2\u05c1\2\u05c3\2\u05c4\2\u05c6\2\u05c7\2\u05c9"+
		"\2\u05c9\2\u05d2\2\u05ec\2\u05f2\2\u05f4\2\u0612\2\u061c\2\u0622\2\u066b"+
		"\2\u0670\2\u06d5\2\u06d7\2\u06de\2\u06e1\2\u06ea\2\u06ec\2\u06fe\2\u0701"+
		"\2\u0701\2\u0712\2\u074c\2\u074f\2\u07b3\2\u07c2\2\u07f7\2\u07fc\2\u07fc"+
		"\2\u0802\2\u082f\2\u0842\2\u085d\2\u0862\2\u086c\2\u08a2\2\u08b6\2\u08b8"+
		"\2\u08bf\2\u08d6\2\u08e3\2\u08e5\2\u0965\2\u0968\2\u0971\2\u0973\2\u0985"+
		"\2\u0987\2\u098e\2\u0991\2\u0992\2\u0995\2\u09aa\2\u09ac\2\u09b2\2\u09b4"+
		"\2\u09b4\2\u09b8\2\u09bb\2\u09be\2\u09c6\2\u09c9\2\u09ca\2\u09cd\2\u09d0"+
		"\2\u09d9\2\u09d9\2\u09de\2\u09df\2\u09e1\2\u09e5\2\u09e8\2\u09f3\2\u09f6"+
		"\2\u09fb\2\u09fe\2\u09fe\2\u0a03\2\u0a05\2\u0a07\2\u0a0c\2\u0a11\2\u0a12"+
		"\2\u0a15\2\u0a2a\2\u0a2c\2\u0a32\2\u0a34\2\u0a35\2\u0a37\2\u0a38\2\u0a3a"+
		"\2\u0a3b\2\u0a3e\2\u0a3e\2\u0a40\2\u0a44\2\u0a49\2\u0a4a\2\u0a4d\2\u0a4f"+
		"\2\u0a53\2\u0a53\2\u0a5b\2\u0a5e\2\u0a60\2\u0a60\2\u0a68\2\u0a77\2\u0a83"+
		"\2\u0a85\2\u0a87\2\u0a8f\2\u0a91\2\u0a93\2\u0a95\2\u0aaa\2\u0aac\2\u0ab2"+
		"\2\u0ab4\2\u0ab5\2\u0ab7\2\u0abb\2\u0abe\2\u0ac7\2\u0ac9\2\u0acb\2\u0acd"+
		"\2\u0acf\2\u0ad2\2\u0ad2\2\u0ae2\2\u0ae5\2\u0ae8\2\u0af1\2\u0afb\2\u0b01"+
		"\2\u0b03\2\u0b05\2\u0b07\2\u0b0e\2\u0b11\2\u0b12\2\u0b15\2\u0b2a\2\u0b2c"+
		"\2\u0b32\2\u0b34\2\u0b35\2\u0b37\2\u0b3b\2\u0b3e\2\u0b46\2\u0b49\2\u0b4a"+
		"\2\u0b4d\2\u0b4f\2\u0b58\2\u0b59\2\u0b5e\2\u0b5f\2\u0b61\2\u0b65\2\u0b68"+
		"\2\u0b71\2\u0b73\2\u0b79\2\u0b84\2\u0b85\2\u0b87\2\u0b8c\2\u0b90\2\u0b92"+
		"\2\u0b94\2\u0b97\2\u0b9b\2\u0b9c\2\u0b9e\2\u0b9e\2\u0ba0\2\u0ba1\2\u0ba5"+
		"\2\u0ba6\2\u0baa\2\u0bac\2\u0bb0\2\u0bbb\2\u0bc0\2\u0bc4\2\u0bc8\2\u0bca"+
		"\2\u0bcc\2\u0bcf\2\u0bd2\2\u0bd2\2\u0bd9\2\u0bd9\2\u0be8\2\u0bf4\2\u0c02"+
		"\2\u0c05\2\u0c07\2\u0c0e\2\u0c10\2\u0c12\2\u0c14\2\u0c2a\2\u0c2c\2\u0c3b"+
		"\2\u0c3f\2\u0c46\2\u0c48\2\u0c4a\2\u0c4c\2\u0c4f\2\u0c57\2\u0c58\2\u0c5a"+
		"\2\u0c5c\2\u0c62\2\u0c65\2\u0c68\2\u0c71\2\u0c7a\2\u0c80\2\u0c82\2\u0c85"+
		"\2\u0c87\2\u0c8e\2\u0c90\2\u0c92\2\u0c94\2\u0caa\2\u0cac\2\u0cb5\2\u0cb7"+
		"\2\u0cbb\2\u0cbe\2\u0cc6\2\u0cc8\2\u0cca\2\u0ccc\2\u0ccf\2\u0cd7\2\u0cd8"+
		"\2\u0ce0\2\u0ce0\2\u0ce2\2\u0ce5\2\u0ce8\2\u0cf1\2\u0cf3\2\u0cf4\2\u0d02"+
		"\2\u0d05\2\u0d07\2\u0d0e\2\u0d10\2\u0d12\2\u0d14\2\u0d46\2\u0d48\2\u0d4a"+
		"\2\u0d4c\2\u0d50\2\u0d56\2\u0d65\2\u0d68\2\u0d7a\2\u0d7c\2\u0d81\2\u0d84"+
		"\2\u0d85\2\u0d87\2\u0d98\2\u0d9c\2\u0db3\2\u0db5\2\u0dbd\2\u0dbf\2\u0dbf"+
		"\2\u0dc2\2\u0dc8\2\u0dcc\2\u0dcc\2\u0dd1\2\u0dd6\2\u0dd8\2\u0dd8\2\u0dda"+
		"\2\u0de1\2\u0de8\2\u0df1\2\u0df4\2\u0df5\2\u0e03\2\u0e3c\2\u0e42\2\u0e50"+
		"\2\u0e52\2\u0e5b\2\u0e83\2\u0e84\2\u0e86\2\u0e86\2\u0e89\2\u0e8a\2\u0e8c"+
		"\2\u0e8c\2\u0e8f\2\u0e8f\2\u0e96\2\u0e99\2\u0e9b\2\u0ea1\2\u0ea3\2\u0ea5"+
		"\2\u0ea7\2\u0ea7\2\u0ea9\2\u0ea9\2\u0eac\2\u0ead\2\u0eaf\2\u0ebb\2\u0ebd"+
		"\2\u0ebf\2\u0ec2\2\u0ec6\2\u0ec8\2\u0ec8\2\u0eca\2\u0ecf\2\u0ed2\2\u0edb"+
		"\2\u0ede\2\u0ee1\2\u0f02\2\u0f02\2\u0f1a\2\u0f1b\2\u0f22\2\u0f35\2\u0f37"+
		"\2\u0f37\2\u0f39\2\u0f39\2\u0f3b\2\u0f3b\2\u0f40\2\u0f49\2\u0f4b\2\u0f6e"+
		"\2\u0f73\2\u0f86\2\u0f88\2\u0f99\2\u0f9b\2\u0fbe\2\u0fc8\2\u0fc8\2\u1002"+
		"\2\u104b\2\u1052\2\u109f\2\u10a2\2\u10c7\2\u10c9\2\u10c9\2\u10cf\2\u10cf"+
		"\2\u10d2\2\u10fc\2\u10fe\2\u124a\2\u124c\2\u124f\2\u1252\2\u1258\2\u125a"+
		"\2\u125a\2\u125c\2\u125f\2\u1262\2\u128a\2\u128c\2\u128f\2\u1292\2\u12b2"+
		"\2\u12b4\2\u12b7\2\u12ba\2\u12c0\2\u12c2\2\u12c2\2\u12c4\2\u12c7\2\u12ca"+
		"\2\u12d8\2\u12da\2\u1312\2\u1314\2\u1317\2\u131a\2\u135c\2\u135f\2\u1361"+
		"\2\u136b\2\u137e\2\u1382\2\u1391\2\u13a2\2\u13f7\2\u13fa\2\u13ff\2\u1403"+
		"\2\u166e\2\u1671\2\u1681\2\u1683\2\u169c\2\u16a2\2\u16ec\2\u16f0\2\u16fa"+
		"\2\u1702\2\u170e\2\u1710\2\u1716\2\u1722\2\u1736\2\u1742\2\u1755\2\u1762"+
		"\2\u176e\2\u1770\2\u1772\2\u1774\2\u1775\2\u1782\2\u17d5\2\u17d9\2\u17d9"+
		"\2\u17de\2\u17df\2\u17e2\2\u17eb\2\u17f2\2\u17fb\2\u180d\2\u180f\2\u1812"+
		"\2\u181b\2\u1822\2\u1879\2\u1882\2\u18ac\2\u18b2\2\u18f7\2\u1902\2\u1920"+
		"\2\u1922\2\u192d\2\u1932\2\u193d\2\u1948\2\u196f\2\u1972\2\u1976\2\u1982"+
		"\2\u19ad\2\u19b2\2\u19cb\2\u19d2\2\u19dc\2\u1a02\2\u1a1d\2\u1a22\2\u1a60"+
		"\2\u1a62\2\u1a7e\2\u1a81\2\u1a8b\2\u1a92\2\u1a9b\2\u1aa9\2\u1aa9\2\u1ab2"+
		"\2\u1ac0\2\u1b02\2\u1b4d\2\u1b52\2\u1b5b\2\u1b6d\2\u1b75\2\u1b82\2\u1bf5"+
		"\2\u1c02\2\u1c39\2\u1c42\2\u1c4b\2\u1c4f\2\u1c7f\2\u1c82\2\u1c8a\2\u1cd2"+
		"\2\u1cd4\2\u1cd6\2\u1cfb\2\u1d02\2\u1dfb\2\u1dfd\2\u1f17\2\u1f1a\2\u1f1f"+
		"\2\u1f22\2\u1f47\2\u1f4a\2\u1f4f\2\u1f52\2\u1f59\2\u1f5b\2\u1f5b\2\u1f5d"+
		"\2\u1f5d\2\u1f5f\2\u1f5f\2\u1f61\2\u1f7f\2\u1f82\2\u1fb6\2\u1fb8\2\u1fbe"+
		"\2\u1fc0\2\u1fc0\2\u1fc4\2\u1fc6\2\u1fc8\2\u1fce\2\u1fd2\2\u1fd5\2\u1fd8"+
		"\2\u1fdd\2\u1fe2\2\u1fee\2\u1ff4\2\u1ff6\2\u1ff8\2\u1ffe\2\u2041\2\u2042"+
		"\2\u2056\2\u2056\2\u2072\2\u2073\2\u2076\2\u207b\2\u2081\2\u208b\2\u2092"+
		"\2\u209e\2\u20d2\2\u20f2\2\u2104\2\u2104\2\u2109\2\u2109\2\u210c\2\u2115"+
		"\2\u2117\2\u2117\2\u211b\2\u211f\2\u2126\2\u2126\2\u2128\2\u2128\2\u212a"+
		"\2\u212a\2\u212c\2\u212f\2\u2131\2\u213b\2\u213e\2\u2141\2\u2147\2\u214b"+
		"\2\u2150\2\u2150\2\u2152\2\u218b\2\u2462\2\u249d\2\u24ec\2\u2501\2\u2778"+
		"\2\u2795\2\u2c02\2\u2c30\2\u2c32\2\u2c60\2\u2c62\2\u2ce6\2\u2ced\2\u2cf5"+
		"\2\u2cff\2\u2cff\2\u2d02\2\u2d27\2\u2d29\2\u2d29\2\u2d2f\2\u2d2f\2\u2d32"+
		"\2\u2d69\2\u2d71\2\u2d71\2\u2d81\2\u2d98\2\u2da2\2\u2da8\2\u2daa\2\u2db0"+
		"\2\u2db2\2\u2db8\2\u2dba\2\u2dc0\2\u2dc2\2\u2dc8\2\u2dca\2\u2dd0\2\u2dd2"+
		"\2\u2dd8\2\u2dda\2\u2de0\2\u2de2\2\u2e01\2\u2e31\2\u2e31\2\u3007\2\u3009"+
		"\2\u3023\2\u3031\2\u3033\2\u3037\2\u303a\2\u303e\2\u3043\2\u3098\2\u309b"+
		"\2\u309c\2\u309f\2\u30a1\2\u30a3\2\u30fc\2\u30fe\2\u3101\2\u3107\2\u3130"+
		"\2\u3133\2\u3190\2\u3194\2\u3197\2\u31a2\2\u31bc\2\u31f2\2\u3201\2\u3222"+
		"\2\u322b\2\u324a\2\u3251\2\u3253\2\u3261\2\u3282\2\u328b\2\u32b3\2\u32c1"+
		"\2\u3402\2\u4db7\2\u4e02\2\u9fec\2\ua002\2\ua48e\2\ua4d2\2\ua4ff\2\ua502"+
		"\2\ua60e\2\ua612\2\ua62d\2\ua642\2\ua674\2\ua676\2\ua67f\2\ua681\2\ua6f3"+
		"\2\ua719\2\ua721\2\ua724\2\ua78a\2\ua78d\2\ua7b0\2\ua7b2\2\ua7b9\2\ua7f9"+
		"\2\ua829\2\ua832\2\ua837\2\ua842\2\ua875\2\ua882\2\ua8c7\2\ua8d2\2\ua8db"+
		"\2\ua8e2\2\ua8f9\2\ua8fd\2\ua8fd\2\ua8ff\2\ua8ff\2\ua902\2\ua92f\2\ua932"+
		"\2\ua955\2\ua962\2\ua97e\2\ua982\2\ua9c2\2\ua9d1\2\ua9db\2\ua9e2\2\uaa00"+
		"\2\uaa02\2\uaa38\2\uaa42\2\uaa4f\2\uaa52\2\uaa5b\2\uaa62\2\uaa78\2\uaa7c"+
		"\2\uaac4\2\uaadd\2\uaadf\2\uaae2\2\uaaf1\2\uaaf4\2\uaaf8\2\uab03\2\uab08"+
		"\2\uab0b\2\uab10\2\uab13\2\uab18\2\uab22\2\uab28\2\uab2a\2\uab30\2\uab32"+
		"\2\uab5c\2\uab5e\2\uab67\2\uab72\2\uabec\2\uabee\2\uabef\2\uabf2\2\uabfb"+
		"\2\uac02\2\ud7a5\2\ud7b2\2\ud7c8\2\ud7cd\2\ud7fd\2\uf902\2\ufa6f\2\ufa72"+
		"\2\ufadb\2\ufb02\2\ufb08\2\ufb15\2\ufb19\2\ufb1f\2\ufb2a\2\ufb2c\2\ufb38"+
		"\2\ufb3a\2\ufb3e\2\ufb40\2\ufb40\2\ufb42\2\ufb43\2\ufb45\2\ufb46\2\ufb48"+
		"\2\ufbb3\2\ufbd5\2\ufd3f\2\ufd52\2\ufd91\2\ufd94\2\ufdc9\2\ufdf2\2\ufdfd"+
		"\2\ufe02\2\ufe11\2\ufe22\2\ufe31\2\ufe35\2\ufe36\2\ufe4f\2\ufe51\2\ufe72"+
		"\2\ufe76\2\ufe78\2\ufefe\2\uff12\2\uff1b\2\uff23\2\uff3c\2\uff41\2\uff41"+
		"\2\uff43\2\uff5c\2\uff68\2\uffc0\2\uffc4\2\uffc9\2\uffcc\2\uffd1\2\uffd4"+
		"\2\uffd9\2\uffdc\2\uffde\2\2\3\r\3\17\3(\3*\3<\3>\3?\3A\3O\3R\3_\3\u0082"+
		"\3\u00fc\3\u0109\3\u0135\3\u0142\3\u017a\3\u018c\3\u018d\3\u01ff\3\u01ff"+
		"\3\u0282\3\u029e\3\u02a2\3\u02d2\3\u02e2\3\u02fd\3\u0302\3\u0325\3\u032f"+
		"\3\u034c\3\u0352\3\u037c\3\u0382\3\u039f\3\u03a2\3\u03c5\3\u03ca\3\u03d1"+
		"\3\u03d3\3\u03d7\3\u0402\3\u049f\3\u04a2\3\u04ab\3\u04b2\3\u04d5\3\u04da"+
		"\3\u04fd\3\u0502\3\u0529\3\u0532\3\u0565\3\u0602\3\u0738\3\u0742\3\u0757"+
		"\3\u0762\3\u0769\3\u0802\3\u0807\3\u080a\3\u080a\3\u080c\3\u0837\3\u0839"+
		"\3\u083a\3\u083e\3\u083e\3\u0841\3\u0857\3\u085a\3\u0878\3\u087b\3\u08a0"+
		"\3\u08a9\3\u08b1\3\u08e2\3\u08f4\3\u08f6\3\u08f7\3\u08fd\3\u091d\3\u0922"+
		"\3\u093b\3\u0982\3\u09b9\3\u09be\3\u09d1\3\u09d4\3\u0a05\3\u0a07\3\u0a08"+
		"\3\u0a0e\3\u0a15\3\u0a17\3\u0a19\3\u0a1b\3\u0a35\3\u0a3a\3\u0a3c\3\u0a41"+
		"\3\u0a49\3\u0a62\3\u0a80\3\u0a82\3\u0aa1\3\u0ac2\3\u0ac9\3\u0acb\3\u0ae8"+
		"\3\u0aed\3\u0af1\3\u0b02\3\u0b37\3\u0b42\3\u0b57\3\u0b5a\3\u0b74\3\u0b7a"+
		"\3\u0b93\3\u0bab\3\u0bb1\3\u0c02\3\u0c4a\3\u0c82\3\u0cb4\3\u0cc2\3\u0cf4"+
		"\3\u0cfc\3\u0d01\3\u0e62\3\u0e80\3\u1002\3\u1048\3\u1054\3\u1071\3\u1081"+
		"\3\u10bc\3\u10d2\3\u10ea\3\u10f2\3\u10fb\3\u1102\3\u1136\3\u1138\3\u1141"+
		"\3\u1152\3\u1175\3\u1178\3\u1178\3\u1182\3\u11c6\3\u11cc\3\u11ce\3\u11d2"+
		"\3\u11dc\3\u11de\3\u11de\3\u11e3\3\u11f6\3\u1202\3\u1213\3\u1215\3\u1239"+
		"\3\u1240\3\u1240\3\u1282\3\u1288\3\u128a\3\u128a\3\u128c\3\u128f\3\u1291"+
		"\3\u129f\3\u12a1\3\u12aa\3\u12b2\3\u12ec\3\u12f2\3\u12fb\3\u1302\3\u1305"+
		"\3\u1307\3\u130e\3\u1311\3\u1312\3\u1315\3\u132a\3\u132c\3\u1332\3\u1334"+
		"\3\u1335\3\u1337\3\u133b\3\u133e\3\u1346\3\u1349\3\u134a\3\u134d\3\u134f"+
		"\3\u1352\3\u1352\3\u1359\3\u1359\3\u135f\3\u1365\3\u1368\3\u136e\3\u1372"+
		"\3\u1376\3\u1402\3\u144c\3\u1452\3\u145b\3\u1482\3\u14c7\3\u14c9\3\u14c9"+
		"\3\u14d2\3\u14db\3\u1582\3\u15b7\3\u15ba\3\u15c2\3\u15da\3\u15df\3\u1602"+
		"\3\u1642\3\u1646\3\u1646\3\u1652\3\u165b\3\u1682\3\u16b9\3\u16c2\3\u16cb"+
		"\3\u1702\3\u171b\3\u171f\3\u172d\3\u1732\3\u173d\3\u18a2\3\u18f4\3\u1901"+
		"\3\u1901\3\u1a02\3\u1a40\3\u1a49\3\u1a49\3\u1a52\3\u1a85\3\u1a88\3\u1a9b"+
		"\3\u1ac2\3\u1afa\3\u1c02\3\u1c0a\3\u1c0c\3\u1c38\3\u1c3a\3\u1c42\3\u1c52"+
		"\3\u1c6e\3\u1c74\3\u1c91\3\u1c94\3\u1ca9\3\u1cab\3\u1cb8\3\u1d02\3\u1d08"+
		"\3\u1d0a\3\u1d0b\3\u1d0d\3\u1d38\3\u1d3c\3\u1d3c\3\u1d3e\3\u1d3f\3\u1d41"+
		"\3\u1d49\3\u1d52\3\u1d5b\3\u2002\3\u239b\3\u2402\3\u2470\3\u2482\3\u2545"+
		"\3\u3002\3\u3430\3\u4402\3\u4648\3\u6802\3\u6a3a\3\u6a42\3\u6a60\3\u6a62"+
		"\3\u6a6b\3\u6ad2\3\u6aef\3\u6af2\3\u6af6\3\u6b02\3\u6b38\3\u6b42\3\u6b45"+
		"\3\u6b52\3\u6b5b\3\u6b5d\3\u6b63\3\u6b65\3\u6b79\3\u6b7f\3\u6b91\3\u6f02"+
		"\3\u6f46\3\u6f52\3\u6f80\3\u6f91\3\u6fa1\3\u6fe2\3\u6fe3\3\u7002\3\u87ee"+
		"\3\u8802\3\u8af4\3\ub002\3\ub120\3\ub172\3\ub2fd\3\ubc02\3\ubc6c\3\ubc72"+
		"\3\ubc7e\3\ubc82\3\ubc8a\3\ubc92\3\ubc9b\3\ubc9f\3\ubca0\3\ud167\3\ud16b"+
		"\3\ud16f\3\ud174\3\ud17d\3\ud184\3\ud187\3\ud18d\3\ud1ac\3\ud1af\3\ud244"+
		"\3\ud246\3\ud362\3\ud373\3\ud402\3\ud456\3\ud458\3\ud49e\3\ud4a0\3\ud4a1"+
		"\3\ud4a4\3\ud4a4\3\ud4a7\3\ud4a8\3\ud4ab\3\ud4ae\3\ud4b0\3\ud4bb\3\ud4bd"+
		"\3\ud4bd\3\ud4bf\3\ud4c5\3\ud4c7\3\ud507\3\ud509\3\ud50c\3\ud50f\3\ud516"+
		"\3\ud518\3\ud51e\3\ud520\3\ud53b\3\ud53d\3\ud540\3\ud542\3\ud546\3\ud548"+
		"\3\ud548\3\ud54c\3\ud552\3\ud554\3\ud6a7\3\ud6aa\3\ud6c2\3\ud6c4\3\ud6dc"+
		"\3\ud6de\3\ud6fc\3\ud6fe\3\ud716\3\ud718\3\ud736\3\ud738\3\ud750\3\ud752"+
		"\3\ud770\3\ud772\3\ud78a\3\ud78c\3\ud7aa\3\ud7ac\3\ud7c4\3\ud7c6\3\ud7cd"+
		"\3\ud7d0\3\ud801\3\uda02\3\uda38\3\uda3d\3\uda6e\3\uda77\3\uda77\3\uda86"+
		"\3\uda86\3\uda9d\3\udaa1\3\udaa3\3\udab1\3\ue002\3\ue008\3\ue00a\3\ue01a"+
		"\3\ue01d\3\ue023\3\ue025\3\ue026\3\ue028\3\ue02c\3\ue802\3\ue8c6\3\ue8c9"+
		"\3\ue8d8\3\ue902\3\ue94c\3\ue952\3\ue95b\3\uee02\3\uee05\3\uee07\3\uee21"+
		"\3\uee23\3\uee24\3\uee26\3\uee26\3\uee29\3\uee29\3\uee2b\3\uee34\3\uee36"+
		"\3\uee39\3\uee3b\3\uee3b\3\uee3d\3\uee3d\3\uee44\3\uee44\3\uee49\3\uee49"+
		"\3\uee4b\3\uee4b\3\uee4d\3\uee4d\3\uee4f\3\uee51\3\uee53\3\uee54\3\uee56"+
		"\3\uee56\3\uee59\3\uee59\3\uee5b\3\uee5b\3\uee5d\3\uee5d\3\uee5f\3\uee5f"+
		"\3\uee61\3\uee61\3\uee63\3\uee64\3\uee66\3\uee66\3\uee69\3\uee6c\3\uee6e"+
		"\3\uee74\3\uee76\3\uee79\3\uee7b\3\uee7e\3\uee80\3\uee80\3\uee82\3\uee8b"+
		"\3\uee8d\3\uee9d\3\ueea3\3\ueea5\3\ueea7\3\ueeab\3\ueead\3\ueebd\3\uf102"+
		"\3\uf10e\3\2\4\ua6d8\4\ua702\4\ub736\4\ub742\4\ub81f\4\ub822\4\ucea3\4"+
		"\uceb2\4\uebe2\4\uf802\4\ufa1f\4\u0102\20\u01f1\20\u028b\2\3\3\2\2\2\2"+
		"\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2"+
		"\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2"+
		"\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2"+
		"\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2"+
		"\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2"+
		"\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2"+
		"K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3"+
		"\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2g\3\2\2"+
		"\2\2i\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2{\3\2\2\2\2"+
		"}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2"+
		"\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f"+
		"\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2"+
		"\2\3\u0099\3\2\2\2\5\u009e\3\2\2\2\7\u00a7\3\2\2\2\t\u00ac\3\2\2\2\13"+
		"\u00b1\3\2\2\2\r\u00b7\3\2\2\2\17\u00bd\3\2\2\2\21\u00c2\3\2\2\2\23\u00c7"+
		"\3\2\2\2\25\u00cc\3\2\2\2\27\u00ce\3\2\2\2\31\u00d1\3\2\2\2\33\u00d3\3"+
		"\2\2\2\35\u00d6\3\2\2\2\37\u00d8\3\2\2\2!\u00df\3\2\2\2#\u00e1\3\2\2\2"+
		"%\u00e3\3\2\2\2\'\u00e5\3\2\2\2)\u00e9\3\2\2\2+\u00ec\3\2\2\2-\u00ef\3"+
		"\2\2\2/\u00f4\3\2\2\2\61\u00fa\3\2\2\2\63\u00ff\3\2\2\2\65\u0106\3\2\2"+
		"\2\67\u0110\3\2\2\29\u0119\3\2\2\2;\u0122\3\2\2\2=\u0127\3\2\2\2?\u012f"+
		"\3\2\2\2A\u0136\3\2\2\2C\u013d\3\2\2\2E\u0143\3\2\2\2G\u014c\3\2\2\2I"+
		"\u0154\3\2\2\2K\u015c\3\2\2\2M\u0160\3\2\2\2O\u0164\3\2\2\2Q\u016b\3\2"+
		"\2\2S\u0170\3\2\2\2U\u017c\3\2\2\2W\u0181\3\2\2\2Y\u0186\3\2\2\2[\u018b"+
		"\3\2\2\2]\u0197\3\2\2\2_\u01a0\3\2\2\2a\u01b8\3\2\2\2c\u01ba\3\2\2\2e"+
		"\u01bc\3\2\2\2g\u01eb\3\2\2\2i\u0203\3\2\2\2k\u020d\3\2\2\2m\u020f\3\2"+
		"\2\2o\u0217\3\2\2\2q\u021a\3\2\2\2s\u021f\3\2\2\2u\u0221\3\2\2\2w\u0225"+
		"\3\2\2\2y\u022f\3\2\2\2{\u023f\3\2\2\2}\u0243\3\2\2\2\177\u0245\3\2\2"+
		"\2\u0081\u0247\3\2\2\2\u0083\u0249\3\2\2\2\u0085\u024b\3\2\2\2\u0087\u024d"+
		"\3\2\2\2\u0089\u024f\3\2\2\2\u008b\u0251\3\2\2\2\u008d\u0253\3\2\2\2\u008f"+
		"\u0255\3\2\2\2\u0091\u025a\3\2\2\2\u0093\u0260\3\2\2\2\u0095\u0265\3\2"+
		"\2\2\u0097\u026b\3\2\2\2\u0099\u009a\7w\2\2\u009a\u009b\7p\2\2\u009b\u009c"+
		"\7k\2\2\u009c\u009d\7v\2\2\u009d\4\3\2\2\2\u009e\u009f\7s\2\2\u009f\u00a0"+
		"\7w\2\2\u00a0\u00a1\7c\2\2\u00a1\u00a2\7p\2\2\u00a2\u00a3\7v\2\2\u00a3"+
		"\u00a4\7k\2\2\u00a4\u00a5\7v\2\2\u00a5\u00a6\7{\2\2\u00a6\6\3\2\2\2\u00a7"+
		"\u00a8\7v\2\2\u00a8\u00a9\7t\2\2\u00a9\u00aa\7w\2\2\u00aa\u00ab\7g\2\2"+
		"\u00ab\b\3\2\2\2\u00ac\u00ad\7V\2\2\u00ad\u00ae\7t\2\2\u00ae\u00af\7w"+
		"\2\2\u00af\u00b0\7g\2\2\u00b0\n\3\2\2\2\u00b1\u00b2\7h\2\2\u00b2\u00b3"+
		"\7c\2\2\u00b3\u00b4\7n\2\2\u00b4\u00b5\7u\2\2\u00b5\u00b6\7g\2\2\u00b6"+
		"\f\3\2\2\2\u00b7\u00b8\7H\2\2\u00b8\u00b9\7c\2\2\u00b9\u00ba\7n\2\2\u00ba"+
		"\u00bb\7u\2\2\u00bb\u00bc\7g\2\2\u00bc\16\3\2\2\2\u00bd\u00be\7p\2\2\u00be"+
		"\u00bf\7w\2\2\u00bf\u00c0\7n\2\2\u00c0\u00c1\7n\2\2\u00c1\20\3\2\2\2\u00c2"+
		"\u00c3\7p\2\2\u00c3\u00c4\7q\2\2\u00c4\u00c5\7p\2\2\u00c5\u00c6\7g\2\2"+
		"\u00c6\22\3\2\2\2\u00c7\u00c8\7P\2\2\u00c8\u00c9\7q\2\2\u00c9\u00ca\7"+
		"p\2\2\u00ca\u00cb\7g\2\2\u00cb\24\3\2\2\2\u00cc\u00cd\7o\2\2\u00cd\26"+
		"\3\2\2\2\u00ce\u00cf\7m\2\2\u00cf\u00d0\7o\2\2\u00d0\30\3\2\2\2\u00d1"+
		"\u00d2\7i\2\2\u00d2\32\3\2\2\2\u00d3\u00d4\7m\2\2\u00d4\u00d5\7i\2\2\u00d5"+
		"\34\3\2\2\2\u00d6\u00d7\7u\2\2\u00d7\36\3\2\2\2\u00d8\u00d9\7o\2\2\u00d9"+
		"\u00da\7k\2\2\u00da\u00db\7p\2\2\u00db\u00dc\7w\2\2\u00dc\u00dd\7v\2\2"+
		"\u00dd\u00de\7g\2\2\u00de \3\2\2\2\u00df\u00e0\7E\2\2\u00e0\"\3\2\2\2"+
		"\u00e1\u00e2\7C\2\2\u00e2$\3\2\2\2\u00e3\u00e4\7M\2\2\u00e4&\3\2\2\2\u00e5"+
		"\u00e6\7o\2\2\u00e6\u00e7\7q\2\2\u00e7\u00e8\7n\2\2\u00e8(\3\2\2\2\u00e9"+
		"\u00ea\7e\2\2\u00ea\u00eb\7f\2\2\u00eb*\3\2\2\2\u00ec\u00ed\7#\2\2\u00ed"+
		"\u00ee\7#\2\2\u00ee,\3\2\2\2\u00ef\u00f0\7#\2\2\u00f0\u00f1\7u\2\2\u00f1"+
		"\u00f2\7v\2\2\u00f2\u00f3\7t\2\2\u00f3.\3\2\2\2\u00f4\u00f5\7#\2\2\u00f5"+
		"\u00f6\7d\2\2\u00f6\u00f7\7q\2\2\u00f7\u00f8\7q\2\2\u00f8\u00f9\7n\2\2"+
		"\u00f9\60\3\2\2\2\u00fa\u00fb\7#\2\2\u00fb\u00fc\7w\2\2\u00fc\u00fd\7"+
		"t\2\2\u00fd\u00fe\7n\2\2\u00fe\62\3\2\2\2\u00ff\u0100\7#\2\2\u0100\u0101"+
		"\7h\2\2\u0101\u0102\7n\2\2\u0102\u0103\7q\2\2\u0103\u0104\7c\2\2\u0104"+
		"\u0105\7v\2\2\u0105\64\3\2\2\2\u0106\u0107\7#\2\2\u0107\u0108\7h\2\2\u0108"+
		"\u0109\7n\2\2\u0109\u010a\7q\2\2\u010a\u010b\7c\2\2\u010b\u010c\7v\2\2"+
		"\u010c\u010d\7\63\2\2\u010d\u010e\7\64\2\2\u010e\u010f\7:\2\2\u010f\66"+
		"\3\2\2\2\u0110\u0111\7#\2\2\u0111\u0112\7h\2\2\u0112\u0113\7n\2\2\u0113"+
		"\u0114\7q\2\2\u0114\u0115\7c\2\2\u0115\u0116\7v\2\2\u0116\u0117\78\2\2"+
		"\u0117\u0118\7\66\2\2\u01188\3\2\2\2\u0119\u011a\7#\2\2\u011a\u011b\7"+
		"h\2\2\u011b\u011c\7n\2\2\u011c\u011d\7q\2\2\u011d\u011e\7c\2\2\u011e\u011f"+
		"\7v\2\2\u011f\u0120\7\65\2\2\u0120\u0121\7\64\2\2\u0121:\3\2\2\2\u0122"+
		"\u0123\7#\2\2\u0123\u0124\7k\2\2\u0124\u0125\7p\2\2\u0125\u0126\7v\2\2"+
		"\u0126<\3\2\2\2\u0127\u0128\7#\2\2\u0128\u0129\7k\2\2\u0129\u012a\7p\2"+
		"\2\u012a\u012b\7v\2\2\u012b\u012c\7\63\2\2\u012c\u012d\7\64\2\2\u012d"+
		"\u012e\7:\2\2\u012e>\3\2\2\2\u012f\u0130\7#\2\2\u0130\u0131\7k\2\2\u0131"+
		"\u0132\7p\2\2\u0132\u0133\7v\2\2\u0133\u0134\78\2\2\u0134\u0135\7\66\2"+
		"\2\u0135@\3\2\2\2\u0136\u0137\7#\2\2\u0137\u0138\7k\2\2\u0138\u0139\7"+
		"p\2\2\u0139\u013a\7v\2\2\u013a\u013b\7\65\2\2\u013b\u013c\7\64\2\2\u013c"+
		"B\3\2\2\2\u013d\u013e\7#\2\2\u013e\u013f\7w\2\2\u013f\u0140\7k\2\2\u0140"+
		"\u0141\7p\2\2\u0141\u0142\7v\2\2\u0142D\3\2\2\2\u0143\u0144\7#\2\2\u0144"+
		"\u0145\7w\2\2\u0145\u0146\7k\2\2\u0146\u0147\7p\2\2\u0147\u0148\7v\2\2"+
		"\u0148\u0149\7\63\2\2\u0149\u014a\7\64\2\2\u014a\u014b\7:\2\2\u014bF\3"+
		"\2\2\2\u014c\u014d\7#\2\2\u014d\u014e\7w\2\2\u014e\u014f\7k\2\2\u014f"+
		"\u0150\7p\2\2\u0150\u0151\7v\2\2\u0151\u0152\78\2\2\u0152\u0153\7\66\2"+
		"\2\u0153H\3\2\2\2\u0154\u0155\7#\2\2\u0155\u0156\7w\2\2\u0156\u0157\7"+
		"k\2\2\u0157\u0158\7p\2\2\u0158\u0159\7v\2\2\u0159\u015a\7\65\2\2\u015a"+
		"\u015b\7\64\2\2\u015bJ\3\2\2\2\u015c\u015d\7o\2\2\u015d\u015e\7c\2\2\u015e"+
		"\u015f\7z\2\2\u015fL\3\2\2\2\u0160\u0161\7o\2\2\u0161\u0162\7k\2\2\u0162"+
		"\u0163\7p\2\2\u0163N\3\2\2\2\u0164\u0165\7n\2\2\u0165\u0166\7g\2\2\u0166"+
		"\u0167\7p\2\2\u0167\u0168\7i\2\2\u0168\u0169\7v\2\2\u0169\u016a\7j\2\2"+
		"\u016aP\3\2\2\2\u016b\u016c\7o\2\2\u016c\u016d\7c\2\2\u016d\u016e\7u\2"+
		"\2\u016e\u016f\7u\2\2\u016fR\3\2\2\2\u0170\u0171\7v\2\2\u0171\u0172\7"+
		"g\2\2\u0172\u0173\7o\2\2\u0173\u0174\7r\2\2\u0174\u0175\7g\2\2\u0175\u0176"+
		"\7t\2\2\u0176\u0177\7c\2\2\u0177\u0178\7v\2\2\u0178\u0179\7w\2\2\u0179"+
		"\u017a\7t\2\2\u017a\u017b\7g\2\2\u017bT\3\2\2\2\u017c\u017d\7v\2\2\u017d"+
		"\u017e\7k\2\2\u017e\u017f\7o\2\2\u017f\u0180\7g\2\2\u0180V\3\2\2\2\u0181"+
		"\u0182\7p\2\2\u0182\u0183\7c\2\2\u0183\u0184\7o\2\2\u0184\u0185\7g\2\2"+
		"\u0185X\3\2\2\2\u0186\u0187\7w\2\2\u0187\u0188\7w\2\2\u0188\u0189\7k\2"+
		"\2\u0189\u018a\7f\2\2\u018aZ\3\2\2\2\u018b\u018c\7f\2\2\u018c\u018d\7"+
		"g\2\2\u018d\u018e\7u\2\2\u018e\u018f\7e\2\2\u018f\u0190\7t\2\2\u0190\u0191"+
		"\7k\2\2\u0191\u0192\7r\2\2\u0192\u0193\7v\2\2\u0193\u0194\7k\2\2\u0194"+
		"\u0195\7q\2\2\u0195\u0196\7p\2\2\u0196\\\3\2\2\2\u0197\u0198\7q\2\2\u0198"+
		"\u0199\7r\2\2\u0199\u019a\7v\2\2\u019a\u019b\7k\2\2\u019b\u019c\7q\2\2"+
		"\u019c\u019d\7p\2\2\u019d\u019e\7c\2\2\u019e\u019f\7n\2\2\u019f^\3\2\2"+
		"\2\u01a0\u01a1\7e\2\2\u01a1\u01a2\7q\2\2\u01a2\u01a3\7o\2\2\u01a3\u01a4"+
		"\7o\2\2\u01a4\u01a5\7g\2\2\u01a5\u01a6\7p\2\2\u01a6\u01a7\7v\2\2\u01a7"+
		"`\3\2\2\2\u01a8\u01ac\7$\2\2\u01a9\u01ab\5c\62\2\u01aa\u01a9\3\2\2\2\u01ab"+
		"\u01ae\3\2\2\2\u01ac\u01aa\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01af\3\2"+
		"\2\2\u01ae\u01ac\3\2\2\2\u01af\u01b9\7$\2\2\u01b0\u01b4\7)\2\2\u01b1\u01b3"+
		"\5e\63\2\u01b2\u01b1\3\2\2\2\u01b3\u01b6\3\2\2\2\u01b4\u01b2\3\2\2\2\u01b4"+
		"\u01b5\3\2\2\2\u01b5\u01b7\3\2\2\2\u01b6\u01b4\3\2\2\2\u01b7\u01b9\7)"+
		"\2\2\u01b8\u01a8\3\2\2\2\u01b8\u01b0\3\2\2\2\u01b9b\3\2\2\2\u01ba\u01bb"+
		"\n\2\2\2\u01bbd\3\2\2\2\u01bc\u01bd\n\3\2\2\u01bdf\3\2\2\2\u01be\u01c0"+
		"\t\4\2\2\u01bf\u01be\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0\u01c1\3\2\2\2\u01c1"+
		"\u01c9\5k\66\2\u01c2\u01c6\7\60\2\2\u01c3\u01c5\t\5\2\2\u01c4\u01c3\3"+
		"\2\2\2\u01c5\u01c8\3\2\2\2\u01c6\u01c4\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7"+
		"\u01ca\3\2\2\2\u01c8\u01c6\3\2\2\2\u01c9\u01c2\3\2\2\2\u01c9\u01ca\3\2"+
		"\2\2\u01ca\u01cc\3\2\2\2\u01cb\u01cd\5m\67\2\u01cc\u01cb\3\2\2\2\u01cc"+
		"\u01cd\3\2\2\2\u01cd\u01ec\3\2\2\2\u01ce\u01d0\7\60\2\2\u01cf\u01d1\t"+
		"\5\2\2\u01d0\u01cf\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2\u01d0\3\2\2\2\u01d2"+
		"\u01d3\3\2\2\2\u01d3\u01d5\3\2\2\2\u01d4\u01d6\5m\67\2\u01d5\u01d4\3\2"+
		"\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01ec\3\2\2\2\u01d7\u01d9\t\4\2\2\u01d8"+
		"\u01d7\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\u01da\3\2\2\2\u01da\u01db\7\62"+
		"\2\2\u01db\u01dd\t\6\2\2\u01dc\u01de\5o8\2\u01dd\u01dc\3\2\2\2\u01de\u01df"+
		"\3\2\2\2\u01df\u01dd\3\2\2\2\u01df\u01e0\3\2\2\2\u01e0\u01ec\3\2\2\2\u01e1"+
		"\u01e3\t\4\2\2\u01e2\u01e1\3\2\2\2\u01e2\u01e3\3\2\2\2\u01e3\u01e4\3\2"+
		"\2\2\u01e4\u01e5\7\62\2\2\u01e5\u01e7\t\7\2\2\u01e6\u01e8\5o8\2\u01e7"+
		"\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9\u01e7\3\2\2\2\u01e9\u01ea\3\2"+
		"\2\2\u01ea\u01ec\3\2\2\2\u01eb\u01bf\3\2\2\2\u01eb\u01ce\3\2\2\2\u01eb"+
		"\u01d8\3\2\2\2\u01eb\u01e2\3\2\2\2\u01ech\3\2\2\2\u01ed\u01ee\7k\2\2\u01ee"+
		"\u01ef\7p\2\2\u01ef\u0204\7h\2\2\u01f0\u01f1\7p\2\2\u01f1\u01f2\7c\2\2"+
		"\u01f2\u0204\7p\2\2\u01f3\u01f4\7/\2\2\u01f4\u01f5\7k\2\2\u01f5\u01f6"+
		"\7p\2\2\u01f6\u0204\7h\2\2\u01f7\u01f8\7/\2\2\u01f8\u01f9\7p\2\2\u01f9"+
		"\u01fa\7c\2\2\u01fa\u0204\7p\2\2\u01fb\u01fc\7-\2\2\u01fc\u01fd\7k\2\2"+
		"\u01fd\u01fe\7p\2\2\u01fe\u0204\7h\2\2\u01ff\u0200\7-\2\2\u0200\u0201"+
		"\7p\2\2\u0201\u0202\7c\2\2\u0202\u0204\7p\2\2\u0203\u01ed\3\2\2\2\u0203"+
		"\u01f0\3\2\2\2\u0203\u01f3\3\2\2\2\u0203\u01f7\3\2\2\2\u0203\u01fb\3\2"+
		"\2\2\u0203\u01ff\3\2\2\2\u0204j\3\2\2\2\u0205\u020e\7\62\2\2\u0206\u020a"+
		"\t\b\2\2\u0207\u0209\t\5\2\2\u0208\u0207\3\2\2\2\u0209\u020c\3\2\2\2\u020a"+
		"\u0208\3\2\2\2\u020a\u020b\3\2\2\2\u020b\u020e\3\2\2\2\u020c\u020a\3\2"+
		"\2\2\u020d\u0205\3\2\2\2\u020d\u0206\3\2\2\2\u020el\3\2\2\2\u020f\u0210"+
		"\t\t\2\2\u0210\u0214\t\4\2\2\u0211\u0213\t\5\2\2\u0212\u0211\3\2\2\2\u0213"+
		"\u0216\3\2\2\2\u0214\u0212\3\2\2\2\u0214\u0215\3\2\2\2\u0215n\3\2\2\2"+
		"\u0216\u0214\3\2\2\2\u0217\u0218\t\n\2\2\u0218p\3\2\2\2\u0219\u021b\5"+
		"s:\2\u021a\u0219\3\2\2\2\u021b\u021c\3\2\2\2\u021c\u021a\3\2\2\2\u021c"+
		"\u021d\3\2\2\2\u021dr\3\2\2\2\u021e\u0220\t\16\2\2\u021f\u021e\3\2\2\2"+
		"\u0220t\3\2\2\2\u0221\u0222\t\13\2\2\u0222\u0223\3\2\2\2\u0223\u0224\b"+
		";\2\2\u0224v\3\2\2\2\u0225\u0229\7%\2\2\u0226\u0228\n\f\2\2\u0227\u0226"+
		"\3\2\2\2\u0228\u022b\3\2\2\2\u0229\u0227\3\2\2\2\u0229\u022a\3\2\2\2\u022a"+
		"\u022c\3\2\2\2\u022b\u0229\3\2\2\2\u022c\u022d\b<\3\2\u022dx\3\2\2\2\u022e"+
		"\u0230\t\r\2\2\u022f\u022e\3\2\2\2\u0230\u0231\3\2\2\2\u0231\u022f\3\2"+
		"\2\2\u0231\u0232\3\2\2\2\u0232z\3\2\2\2\u0233\u0234\6>\2\2\u0234\u0240"+
		"\5y=\2\u0235\u0237\7\17\2\2\u0236\u0235\3\2\2\2\u0236\u0237\3\2\2\2\u0237"+
		"\u0238\3\2\2\2\u0238\u023b\7\f\2\2\u0239\u023b\7\17\2\2\u023a\u0236\3"+
		"\2\2\2\u023a\u0239\3\2\2\2\u023b\u023d\3\2\2\2\u023c\u023e\5y=\2\u023d"+
		"\u023c\3\2\2\2\u023d\u023e\3\2\2\2\u023e\u0240\3\2\2\2\u023f\u0233\3\2"+
		"\2\2\u023f\u023a\3\2\2\2\u0240\u0241\3\2\2\2\u0241\u0242\b>\4\2\u0242"+
		"|\3\2\2\2\u0243\u0244\7/\2\2\u0244~\3\2\2\2\u0245\u0246\7*\2\2\u0246\u0080"+
		"\3\2\2\2\u0247\u0248\7+\2\2\u0248\u0082\3\2\2\2\u0249\u024a\7}\2\2\u024a"+
		"\u0084\3\2\2\2\u024b\u024c\7\177\2\2\u024c\u0086\3\2\2\2\u024d\u024e\7"+
		"]\2\2\u024e\u0088\3\2\2\2\u024f\u0250\7_\2\2\u0250\u008a\3\2\2\2\u0251"+
		"\u0252\7.\2\2\u0252\u008c\3\2\2\2\u0253\u0254\7<\2\2\u0254\u008e\3\2\2"+
		"\2\u0255\u0256\7#\2\2\u0256\u0257\7o\2\2\u0257\u0258\7c\2\2\u0258\u0259"+
		"\7r\2\2\u0259\u0090\3\2\2\2\u025a\u025b\7#\2\2\u025b\u025c\7q\2\2\u025c"+
		"\u025d\7o\2\2\u025d\u025e\7c\2\2\u025e\u025f\7r\2\2\u025f\u0092\3\2\2"+
		"\2\u0260\u0261\7#\2\2\u0261\u0262\7u\2\2\u0262\u0263\7g\2\2\u0263\u0264"+
		"\7s\2\2\u0264\u0094\3\2\2\2\u0265\u0266\7#\2\2\u0266\u0267\7q\2\2\u0267"+
		"\u0268\7u\2\2\u0268\u0269\7g\2\2\u0269\u026a\7s\2\2\u026a\u0096\3\2\2"+
		"\2\u026b\u026c\7#\2\2\u026c\u026d\7u\2\2\u026d\u026e\7e\2\2\u026e\u026f"+
		"\7j\2\2\u026f\u0270\7g\2\2\u0270\u0271\7o\2\2\u0271\u0272\7c\2\2\u0272"+
		"\u0098\3\2\2\2\35\2\u01ac\u01b4\u01b8\u01bf\u01c6\u01c9\u01cc\u01d2\u01d5"+
		"\u01d8\u01df\u01e2\u01e9\u01eb\u0203\u020a\u020d\u0214\u021c\u021f\u0229"+
		"\u0231\u0236\u023a\u023d\u023f\5\2\3\2\b\2\2\3>\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}