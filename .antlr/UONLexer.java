// Generated from c:\Heig-VD\2021-22\Sem2\TB\poc_plugin\te\UON - Copie.g4 by ANTLR 4.9.2
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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, CT=19, METERS=20, KILOMETERS=21, GRAMS=22, KILOGRAMS=23, SECOND=24, 
		MINUTE=25, CELSIUS=26, KELVIN=27, QUOTED_STRING=28, STR_TYPE=29, BOOL_TYPE=30, 
		URL_TYPE=31, FLOAT_TYPE=32, FLOAT_128_TYPE=33, FLOAT_64_TYPE=34, FLOAT_32_TYPE=35, 
		INT_TYPE=36, INT_128_TYPE=37, INT_64_TYPE=38, INT_32_TYPE=39, UINT_TYPE=40, 
		UINT_128_TYPE=41, UINT_64_TYPE=42, UINT_32_TYPE=43, UNQUOTED_STRING=44, 
		WS=45, OPEN_PAR=46, CLOSE_PAR=47, OPEN_C_BRA=48, CLOSE_C_BRA=49, OPEN_S_BRA=50, 
		CLOSE_S_BRA=51, COMMA=52, COLON=53, MAPPING_TYPE=54, SEQUENCE_TYPE=55, 
		SCHEMA_TYPE=56;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "CT", "METERS", "KILOMETERS", "GRAMS", "KILOGRAMS", "SECOND", 
			"MINUTE", "CELSIUS", "KELVIN", "QUOTED_STRING", "STR_TYPE", "BOOL_TYPE", 
			"URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", "FLOAT_64_TYPE", "FLOAT_32_TYPE", 
			"INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", "INT_32_TYPE", "UINT_TYPE", 
			"UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", "SPACES", "DOUBLE_QUOTE_CHAR", 
			"SINGLE_QUOTE_CHAR", "ESCAPE_SEQUENCE", "UNQUOTED_STRING", "IDENTIFIER", 
			"HEX", "UNICODE_SEQUENCE", "NEWLINEXXX", "WS", "OPEN_PAR", "CLOSE_PAR", 
			"OPEN_C_BRA", "CLOSE_C_BRA", "OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", 
			"MAPPING_TYPE", "SEQUENCE_TYPE", "SCHEMA_TYPE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'-'", "'description'", "'optional'", "'name'", "'uuid'", "'max'", 
			"'quantity'", "'length'", "'mass'", "'temperature'", "'time'", "'true'", 
			"'True'", "'false'", "'False'", "'null'", "'none'", "'None'", "'!!'", 
			"'m'", "'km'", "'g'", "'kg'", "'s'", "'min'", "'C'", "'K'", null, "'!str'", 
			"'!bool'", "'!url'", "'!float'", "'!float128'", "'!float64'", "'!float32'", 
			"'!int'", "'!int128'", "'!int6'", "'!int32'", "'!uint'", "'!uint128'", 
			"'!uint64'", "'!uint32'", null, null, "'('", "')'", "'{'", "'}'", "'['", 
			"']'", "','", "':'", "'!map'", "'!seq'", "'!schema'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "CT", "METERS", "KILOMETERS", 
			"GRAMS", "KILOGRAMS", "SECOND", "MINUTE", "CELSIUS", "KELVIN", "QUOTED_STRING", 
			"STR_TYPE", "BOOL_TYPE", "URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", 
			"FLOAT_64_TYPE", "FLOAT_32_TYPE", "INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", 
			"INT_32_TYPE", "UINT_TYPE", "UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", 
			"UNQUOTED_STRING", "WS", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", 
			"OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", "SEQUENCE_TYPE", 
			"SCHEMA_TYPE"
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


	// TEST HELP

		  
	//public emit(token: Token): Token;
	//public emit(): Token;
		@Override
		public emit(token?: Token): any {
		super.token = token;
		}


	public UONLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "UON - Copie.g4"; }

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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2:\u01e0\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6"+
		"\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3"+
		"\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22"+
		"\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\26\3\26\3\26\3\27"+
		"\3\27\3\30\3\30\3\30\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33\3\34\3\34"+
		"\3\35\3\35\7\35\u010d\n\35\f\35\16\35\u0110\13\35\3\35\3\35\3\35\7\35"+
		"\u0115\n\35\f\35\16\35\u0118\13\35\3\35\5\35\u011b\n\35\3\36\3\36\3\36"+
		"\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3"+
		"!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3"+
		"#\3#\3$\3$\3$\3$\3$\3$\3$\3$\3$\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&\3"+
		"&\3\'\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3)\3*\3"+
		"*\3*\3*\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3"+
		",\3-\6-\u018a\n-\r-\16-\u018b\3.\3.\5.\u0190\n.\3/\3/\5/\u0194\n/\3\60"+
		"\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\5\60\u01a0\n\60\3\61\7\61"+
		"\u01a3\n\61\f\61\16\61\u01a6\13\61\3\62\3\62\3\62\3\62\5\62\u01ac\n\62"+
		"\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65\5\65\u01b9\n\65"+
		"\3\66\3\66\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3=\3=\3>"+
		"\3>\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3A\3A\3A\3A\3A\3A\3A\3A\2\2B\3\3\5\4"+
		"\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22"+
		"#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C"+
		"#E$G%I&K\'M(O)Q*S+U,W-Y\2[\2]\2_\2a.c\2e\2g\2i\2k/m\60o\61q\62s\63u\64"+
		"w\65y\66{\67}8\1779\u0081:\3\2\13\4\2\13\13\"\"\6\2\f\f\17\17$$^^\6\2"+
		"\f\f\17\17))^^\f\2$$))\61\61^^ddhhppttvvxx\16\2\f\f\17\17$$))\62;^^dd"+
		"hhppttvxzz\b\2$$&&))AAaa\u200e\u200f\5\2\62;CHch\5\2\f\f\17\17\u202a\u202b"+
		"\5\2\13\f\17\17\"\"\3\u02ce\2\62\2;\2C\2\\\2a\2a\2c\2|\2\u00ac\2\u00ac"+
		"\2\u00b4\2\u00b5\2\u00b7\2\u00b7\2\u00bb\2\u00bc\2\u00be\2\u00c0\2\u00c2"+
		"\2\u00d8\2\u00da\2\u00f8\2\u00fa\2\u02c3\2\u02c8\2\u02d3\2\u02e2\2\u02e6"+
		"\2\u02ee\2\u02ee\2\u02f0\2\u02f0\2\u0302\2\u0376\2\u0378\2\u0379\2\u037c"+
		"\2\u037f\2\u0381\2\u0381\2\u0388\2\u0388\2\u038a\2\u038c\2\u038e\2\u038e"+
		"\2\u0390\2\u03a3\2\u03a5\2\u03f7\2\u03f9\2\u0483\2\u0485\2\u0531\2\u0533"+
		"\2\u0558\2\u055b\2\u055b\2\u0563\2\u0589\2\u0593\2\u05bf\2\u05c1\2\u05c1"+
		"\2\u05c3\2\u05c4\2\u05c6\2\u05c7\2\u05c9\2\u05c9\2\u05d2\2\u05ec\2\u05f2"+
		"\2\u05f4\2\u0612\2\u061c\2\u0622\2\u066b\2\u0670\2\u06d5\2\u06d7\2\u06de"+
		"\2\u06e1\2\u06ea\2\u06ec\2\u06fe\2\u0701\2\u0701\2\u0712\2\u074c\2\u074f"+
		"\2\u07b3\2\u07c2\2\u07f7\2\u07fc\2\u07fc\2\u0802\2\u082f\2\u0842\2\u085d"+
		"\2\u0862\2\u086c\2\u08a2\2\u08b6\2\u08b8\2\u08bf\2\u08d6\2\u08e3\2\u08e5"+
		"\2\u0965\2\u0968\2\u0971\2\u0973\2\u0985\2\u0987\2\u098e\2\u0991\2\u0992"+
		"\2\u0995\2\u09aa\2\u09ac\2\u09b2\2\u09b4\2\u09b4\2\u09b8\2\u09bb\2\u09be"+
		"\2\u09c6\2\u09c9\2\u09ca\2\u09cd\2\u09d0\2\u09d9\2\u09d9\2\u09de\2\u09df"+
		"\2\u09e1\2\u09e5\2\u09e8\2\u09f3\2\u09f6\2\u09fb\2\u09fe\2\u09fe\2\u0a03"+
		"\2\u0a05\2\u0a07\2\u0a0c\2\u0a11\2\u0a12\2\u0a15\2\u0a2a\2\u0a2c\2\u0a32"+
		"\2\u0a34\2\u0a35\2\u0a37\2\u0a38\2\u0a3a\2\u0a3b\2\u0a3e\2\u0a3e\2\u0a40"+
		"\2\u0a44\2\u0a49\2\u0a4a\2\u0a4d\2\u0a4f\2\u0a53\2\u0a53\2\u0a5b\2\u0a5e"+
		"\2\u0a60\2\u0a60\2\u0a68\2\u0a77\2\u0a83\2\u0a85\2\u0a87\2\u0a8f\2\u0a91"+
		"\2\u0a93\2\u0a95\2\u0aaa\2\u0aac\2\u0ab2\2\u0ab4\2\u0ab5\2\u0ab7\2\u0abb"+
		"\2\u0abe\2\u0ac7\2\u0ac9\2\u0acb\2\u0acd\2\u0acf\2\u0ad2\2\u0ad2\2\u0ae2"+
		"\2\u0ae5\2\u0ae8\2\u0af1\2\u0afb\2\u0b01\2\u0b03\2\u0b05\2\u0b07\2\u0b0e"+
		"\2\u0b11\2\u0b12\2\u0b15\2\u0b2a\2\u0b2c\2\u0b32\2\u0b34\2\u0b35\2\u0b37"+
		"\2\u0b3b\2\u0b3e\2\u0b46\2\u0b49\2\u0b4a\2\u0b4d\2\u0b4f\2\u0b58\2\u0b59"+
		"\2\u0b5e\2\u0b5f\2\u0b61\2\u0b65\2\u0b68\2\u0b71\2\u0b73\2\u0b79\2\u0b84"+
		"\2\u0b85\2\u0b87\2\u0b8c\2\u0b90\2\u0b92\2\u0b94\2\u0b97\2\u0b9b\2\u0b9c"+
		"\2\u0b9e\2\u0b9e\2\u0ba0\2\u0ba1\2\u0ba5\2\u0ba6\2\u0baa\2\u0bac\2\u0bb0"+
		"\2\u0bbb\2\u0bc0\2\u0bc4\2\u0bc8\2\u0bca\2\u0bcc\2\u0bcf\2\u0bd2\2\u0bd2"+
		"\2\u0bd9\2\u0bd9\2\u0be8\2\u0bf4\2\u0c02\2\u0c05\2\u0c07\2\u0c0e\2\u0c10"+
		"\2\u0c12\2\u0c14\2\u0c2a\2\u0c2c\2\u0c3b\2\u0c3f\2\u0c46\2\u0c48\2\u0c4a"+
		"\2\u0c4c\2\u0c4f\2\u0c57\2\u0c58\2\u0c5a\2\u0c5c\2\u0c62\2\u0c65\2\u0c68"+
		"\2\u0c71\2\u0c7a\2\u0c80\2\u0c82\2\u0c85\2\u0c87\2\u0c8e\2\u0c90\2\u0c92"+
		"\2\u0c94\2\u0caa\2\u0cac\2\u0cb5\2\u0cb7\2\u0cbb\2\u0cbe\2\u0cc6\2\u0cc8"+
		"\2\u0cca\2\u0ccc\2\u0ccf\2\u0cd7\2\u0cd8\2\u0ce0\2\u0ce0\2\u0ce2\2\u0ce5"+
		"\2\u0ce8\2\u0cf1\2\u0cf3\2\u0cf4\2\u0d02\2\u0d05\2\u0d07\2\u0d0e\2\u0d10"+
		"\2\u0d12\2\u0d14\2\u0d46\2\u0d48\2\u0d4a\2\u0d4c\2\u0d50\2\u0d56\2\u0d65"+
		"\2\u0d68\2\u0d7a\2\u0d7c\2\u0d81\2\u0d84\2\u0d85\2\u0d87\2\u0d98\2\u0d9c"+
		"\2\u0db3\2\u0db5\2\u0dbd\2\u0dbf\2\u0dbf\2\u0dc2\2\u0dc8\2\u0dcc\2\u0dcc"+
		"\2\u0dd1\2\u0dd6\2\u0dd8\2\u0dd8\2\u0dda\2\u0de1\2\u0de8\2\u0df1\2\u0df4"+
		"\2\u0df5\2\u0e03\2\u0e3c\2\u0e42\2\u0e50\2\u0e52\2\u0e5b\2\u0e83\2\u0e84"+
		"\2\u0e86\2\u0e86\2\u0e89\2\u0e8a\2\u0e8c\2\u0e8c\2\u0e8f\2\u0e8f\2\u0e96"+
		"\2\u0e99\2\u0e9b\2\u0ea1\2\u0ea3\2\u0ea5\2\u0ea7\2\u0ea7\2\u0ea9\2\u0ea9"+
		"\2\u0eac\2\u0ead\2\u0eaf\2\u0ebb\2\u0ebd\2\u0ebf\2\u0ec2\2\u0ec6\2\u0ec8"+
		"\2\u0ec8\2\u0eca\2\u0ecf\2\u0ed2\2\u0edb\2\u0ede\2\u0ee1\2\u0f02\2\u0f02"+
		"\2\u0f1a\2\u0f1b\2\u0f22\2\u0f35\2\u0f37\2\u0f37\2\u0f39\2\u0f39\2\u0f3b"+
		"\2\u0f3b\2\u0f40\2\u0f49\2\u0f4b\2\u0f6e\2\u0f73\2\u0f86\2\u0f88\2\u0f99"+
		"\2\u0f9b\2\u0fbe\2\u0fc8\2\u0fc8\2\u1002\2\u104b\2\u1052\2\u109f\2\u10a2"+
		"\2\u10c7\2\u10c9\2\u10c9\2\u10cf\2\u10cf\2\u10d2\2\u10fc\2\u10fe\2\u124a"+
		"\2\u124c\2\u124f\2\u1252\2\u1258\2\u125a\2\u125a\2\u125c\2\u125f\2\u1262"+
		"\2\u128a\2\u128c\2\u128f\2\u1292\2\u12b2\2\u12b4\2\u12b7\2\u12ba\2\u12c0"+
		"\2\u12c2\2\u12c2\2\u12c4\2\u12c7\2\u12ca\2\u12d8\2\u12da\2\u1312\2\u1314"+
		"\2\u1317\2\u131a\2\u135c\2\u135f\2\u1361\2\u136b\2\u137e\2\u1382\2\u1391"+
		"\2\u13a2\2\u13f7\2\u13fa\2\u13ff\2\u1403\2\u166e\2\u1671\2\u1681\2\u1683"+
		"\2\u169c\2\u16a2\2\u16ec\2\u16f0\2\u16fa\2\u1702\2\u170e\2\u1710\2\u1716"+
		"\2\u1722\2\u1736\2\u1742\2\u1755\2\u1762\2\u176e\2\u1770\2\u1772\2\u1774"+
		"\2\u1775\2\u1782\2\u17d5\2\u17d9\2\u17d9\2\u17de\2\u17df\2\u17e2\2\u17eb"+
		"\2\u17f2\2\u17fb\2\u180d\2\u180f\2\u1812\2\u181b\2\u1822\2\u1879\2\u1882"+
		"\2\u18ac\2\u18b2\2\u18f7\2\u1902\2\u1920\2\u1922\2\u192d\2\u1932\2\u193d"+
		"\2\u1948\2\u196f\2\u1972\2\u1976\2\u1982\2\u19ad\2\u19b2\2\u19cb\2\u19d2"+
		"\2\u19dc\2\u1a02\2\u1a1d\2\u1a22\2\u1a60\2\u1a62\2\u1a7e\2\u1a81\2\u1a8b"+
		"\2\u1a92\2\u1a9b\2\u1aa9\2\u1aa9\2\u1ab2\2\u1ac0\2\u1b02\2\u1b4d\2\u1b52"+
		"\2\u1b5b\2\u1b6d\2\u1b75\2\u1b82\2\u1bf5\2\u1c02\2\u1c39\2\u1c42\2\u1c4b"+
		"\2\u1c4f\2\u1c7f\2\u1c82\2\u1c8a\2\u1cd2\2\u1cd4\2\u1cd6\2\u1cfb\2\u1d02"+
		"\2\u1dfb\2\u1dfd\2\u1f17\2\u1f1a\2\u1f1f\2\u1f22\2\u1f47\2\u1f4a\2\u1f4f"+
		"\2\u1f52\2\u1f59\2\u1f5b\2\u1f5b\2\u1f5d\2\u1f5d\2\u1f5f\2\u1f5f\2\u1f61"+
		"\2\u1f7f\2\u1f82\2\u1fb6\2\u1fb8\2\u1fbe\2\u1fc0\2\u1fc0\2\u1fc4\2\u1fc6"+
		"\2\u1fc8\2\u1fce\2\u1fd2\2\u1fd5\2\u1fd8\2\u1fdd\2\u1fe2\2\u1fee\2\u1ff4"+
		"\2\u1ff6\2\u1ff8\2\u1ffe\2\u2041\2\u2042\2\u2056\2\u2056\2\u2072\2\u2073"+
		"\2\u2076\2\u207b\2\u2081\2\u208b\2\u2092\2\u209e\2\u20d2\2\u20f2\2\u2104"+
		"\2\u2104\2\u2109\2\u2109\2\u210c\2\u2115\2\u2117\2\u2117\2\u211b\2\u211f"+
		"\2\u2126\2\u2126\2\u2128\2\u2128\2\u212a\2\u212a\2\u212c\2\u212f\2\u2131"+
		"\2\u213b\2\u213e\2\u2141\2\u2147\2\u214b\2\u2150\2\u2150\2\u2152\2\u218b"+
		"\2\u2462\2\u249d\2\u24ec\2\u2501\2\u2778\2\u2795\2\u2c02\2\u2c30\2\u2c32"+
		"\2\u2c60\2\u2c62\2\u2ce6\2\u2ced\2\u2cf5\2\u2cff\2\u2cff\2\u2d02\2\u2d27"+
		"\2\u2d29\2\u2d29\2\u2d2f\2\u2d2f\2\u2d32\2\u2d69\2\u2d71\2\u2d71\2\u2d81"+
		"\2\u2d98\2\u2da2\2\u2da8\2\u2daa\2\u2db0\2\u2db2\2\u2db8\2\u2dba\2\u2dc0"+
		"\2\u2dc2\2\u2dc8\2\u2dca\2\u2dd0\2\u2dd2\2\u2dd8\2\u2dda\2\u2de0\2\u2de2"+
		"\2\u2e01\2\u2e31\2\u2e31\2\u3007\2\u3009\2\u3023\2\u3031\2\u3033\2\u3037"+
		"\2\u303a\2\u303e\2\u3043\2\u3098\2\u309b\2\u309c\2\u309f\2\u30a1\2\u30a3"+
		"\2\u30fc\2\u30fe\2\u3101\2\u3107\2\u3130\2\u3133\2\u3190\2\u3194\2\u3197"+
		"\2\u31a2\2\u31bc\2\u31f2\2\u3201\2\u3222\2\u322b\2\u324a\2\u3251\2\u3253"+
		"\2\u3261\2\u3282\2\u328b\2\u32b3\2\u32c1\2\u3402\2\u4db7\2\u4e02\2\u9fec"+
		"\2\ua002\2\ua48e\2\ua4d2\2\ua4ff\2\ua502\2\ua60e\2\ua612\2\ua62d\2\ua642"+
		"\2\ua674\2\ua676\2\ua67f\2\ua681\2\ua6f3\2\ua719\2\ua721\2\ua724\2\ua78a"+
		"\2\ua78d\2\ua7b0\2\ua7b2\2\ua7b9\2\ua7f9\2\ua829\2\ua832\2\ua837\2\ua842"+
		"\2\ua875\2\ua882\2\ua8c7\2\ua8d2\2\ua8db\2\ua8e2\2\ua8f9\2\ua8fd\2\ua8fd"+
		"\2\ua8ff\2\ua8ff\2\ua902\2\ua92f\2\ua932\2\ua955\2\ua962\2\ua97e\2\ua982"+
		"\2\ua9c2\2\ua9d1\2\ua9db\2\ua9e2\2\uaa00\2\uaa02\2\uaa38\2\uaa42\2\uaa4f"+
		"\2\uaa52\2\uaa5b\2\uaa62\2\uaa78\2\uaa7c\2\uaac4\2\uaadd\2\uaadf\2\uaae2"+
		"\2\uaaf1\2\uaaf4\2\uaaf8\2\uab03\2\uab08\2\uab0b\2\uab10\2\uab13\2\uab18"+
		"\2\uab22\2\uab28\2\uab2a\2\uab30\2\uab32\2\uab5c\2\uab5e\2\uab67\2\uab72"+
		"\2\uabec\2\uabee\2\uabef\2\uabf2\2\uabfb\2\uac02\2\ud7a5\2\ud7b2\2\ud7c8"+
		"\2\ud7cd\2\ud7fd\2\uf902\2\ufa6f\2\ufa72\2\ufadb\2\ufb02\2\ufb08\2\ufb15"+
		"\2\ufb19\2\ufb1f\2\ufb2a\2\ufb2c\2\ufb38\2\ufb3a\2\ufb3e\2\ufb40\2\ufb40"+
		"\2\ufb42\2\ufb43\2\ufb45\2\ufb46\2\ufb48\2\ufbb3\2\ufbd5\2\ufd3f\2\ufd52"+
		"\2\ufd91\2\ufd94\2\ufdc9\2\ufdf2\2\ufdfd\2\ufe02\2\ufe11\2\ufe22\2\ufe31"+
		"\2\ufe35\2\ufe36\2\ufe4f\2\ufe51\2\ufe72\2\ufe76\2\ufe78\2\ufefe\2\uff12"+
		"\2\uff1b\2\uff23\2\uff3c\2\uff41\2\uff41\2\uff43\2\uff5c\2\uff68\2\uffc0"+
		"\2\uffc4\2\uffc9\2\uffcc\2\uffd1\2\uffd4\2\uffd9\2\uffdc\2\uffde\2\2\3"+
		"\r\3\17\3(\3*\3<\3>\3?\3A\3O\3R\3_\3\u0082\3\u00fc\3\u0109\3\u0135\3\u0142"+
		"\3\u017a\3\u018c\3\u018d\3\u01ff\3\u01ff\3\u0282\3\u029e\3\u02a2\3\u02d2"+
		"\3\u02e2\3\u02fd\3\u0302\3\u0325\3\u032f\3\u034c\3\u0352\3\u037c\3\u0382"+
		"\3\u039f\3\u03a2\3\u03c5\3\u03ca\3\u03d1\3\u03d3\3\u03d7\3\u0402\3\u049f"+
		"\3\u04a2\3\u04ab\3\u04b2\3\u04d5\3\u04da\3\u04fd\3\u0502\3\u0529\3\u0532"+
		"\3\u0565\3\u0602\3\u0738\3\u0742\3\u0757\3\u0762\3\u0769\3\u0802\3\u0807"+
		"\3\u080a\3\u080a\3\u080c\3\u0837\3\u0839\3\u083a\3\u083e\3\u083e\3\u0841"+
		"\3\u0857\3\u085a\3\u0878\3\u087b\3\u08a0\3\u08a9\3\u08b1\3\u08e2\3\u08f4"+
		"\3\u08f6\3\u08f7\3\u08fd\3\u091d\3\u0922\3\u093b\3\u0982\3\u09b9\3\u09be"+
		"\3\u09d1\3\u09d4\3\u0a05\3\u0a07\3\u0a08\3\u0a0e\3\u0a15\3\u0a17\3\u0a19"+
		"\3\u0a1b\3\u0a35\3\u0a3a\3\u0a3c\3\u0a41\3\u0a49\3\u0a62\3\u0a80\3\u0a82"+
		"\3\u0aa1\3\u0ac2\3\u0ac9\3\u0acb\3\u0ae8\3\u0aed\3\u0af1\3\u0b02\3\u0b37"+
		"\3\u0b42\3\u0b57\3\u0b5a\3\u0b74\3\u0b7a\3\u0b93\3\u0bab\3\u0bb1\3\u0c02"+
		"\3\u0c4a\3\u0c82\3\u0cb4\3\u0cc2\3\u0cf4\3\u0cfc\3\u0d01\3\u0e62\3\u0e80"+
		"\3\u1002\3\u1048\3\u1054\3\u1071\3\u1081\3\u10bc\3\u10d2\3\u10ea\3\u10f2"+
		"\3\u10fb\3\u1102\3\u1136\3\u1138\3\u1141\3\u1152\3\u1175\3\u1178\3\u1178"+
		"\3\u1182\3\u11c6\3\u11cc\3\u11ce\3\u11d2\3\u11dc\3\u11de\3\u11de\3\u11e3"+
		"\3\u11f6\3\u1202\3\u1213\3\u1215\3\u1239\3\u1240\3\u1240\3\u1282\3\u1288"+
		"\3\u128a\3\u128a\3\u128c\3\u128f\3\u1291\3\u129f\3\u12a1\3\u12aa\3\u12b2"+
		"\3\u12ec\3\u12f2\3\u12fb\3\u1302\3\u1305\3\u1307\3\u130e\3\u1311\3\u1312"+
		"\3\u1315\3\u132a\3\u132c\3\u1332\3\u1334\3\u1335\3\u1337\3\u133b\3\u133e"+
		"\3\u1346\3\u1349\3\u134a\3\u134d\3\u134f\3\u1352\3\u1352\3\u1359\3\u1359"+
		"\3\u135f\3\u1365\3\u1368\3\u136e\3\u1372\3\u1376\3\u1402\3\u144c\3\u1452"+
		"\3\u145b\3\u1482\3\u14c7\3\u14c9\3\u14c9\3\u14d2\3\u14db\3\u1582\3\u15b7"+
		"\3\u15ba\3\u15c2\3\u15da\3\u15df\3\u1602\3\u1642\3\u1646\3\u1646\3\u1652"+
		"\3\u165b\3\u1682\3\u16b9\3\u16c2\3\u16cb\3\u1702\3\u171b\3\u171f\3\u172d"+
		"\3\u1732\3\u173d\3\u18a2\3\u18f4\3\u1901\3\u1901\3\u1a02\3\u1a40\3\u1a49"+
		"\3\u1a49\3\u1a52\3\u1a85\3\u1a88\3\u1a9b\3\u1ac2\3\u1afa\3\u1c02\3\u1c0a"+
		"\3\u1c0c\3\u1c38\3\u1c3a\3\u1c42\3\u1c52\3\u1c6e\3\u1c74\3\u1c91\3\u1c94"+
		"\3\u1ca9\3\u1cab\3\u1cb8\3\u1d02\3\u1d08\3\u1d0a\3\u1d0b\3\u1d0d\3\u1d38"+
		"\3\u1d3c\3\u1d3c\3\u1d3e\3\u1d3f\3\u1d41\3\u1d49\3\u1d52\3\u1d5b\3\u2002"+
		"\3\u239b\3\u2402\3\u2470\3\u2482\3\u2545\3\u3002\3\u3430\3\u4402\3\u4648"+
		"\3\u6802\3\u6a3a\3\u6a42\3\u6a60\3\u6a62\3\u6a6b\3\u6ad2\3\u6aef\3\u6af2"+
		"\3\u6af6\3\u6b02\3\u6b38\3\u6b42\3\u6b45\3\u6b52\3\u6b5b\3\u6b5d\3\u6b63"+
		"\3\u6b65\3\u6b79\3\u6b7f\3\u6b91\3\u6f02\3\u6f46\3\u6f52\3\u6f80\3\u6f91"+
		"\3\u6fa1\3\u6fe2\3\u6fe3\3\u7002\3\u87ee\3\u8802\3\u8af4\3\ub002\3\ub120"+
		"\3\ub172\3\ub2fd\3\ubc02\3\ubc6c\3\ubc72\3\ubc7e\3\ubc82\3\ubc8a\3\ubc92"+
		"\3\ubc9b\3\ubc9f\3\ubca0\3\ud167\3\ud16b\3\ud16f\3\ud174\3\ud17d\3\ud184"+
		"\3\ud187\3\ud18d\3\ud1ac\3\ud1af\3\ud244\3\ud246\3\ud362\3\ud373\3\ud402"+
		"\3\ud456\3\ud458\3\ud49e\3\ud4a0\3\ud4a1\3\ud4a4\3\ud4a4\3\ud4a7\3\ud4a8"+
		"\3\ud4ab\3\ud4ae\3\ud4b0\3\ud4bb\3\ud4bd\3\ud4bd\3\ud4bf\3\ud4c5\3\ud4c7"+
		"\3\ud507\3\ud509\3\ud50c\3\ud50f\3\ud516\3\ud518\3\ud51e\3\ud520\3\ud53b"+
		"\3\ud53d\3\ud540\3\ud542\3\ud546\3\ud548\3\ud548\3\ud54c\3\ud552\3\ud554"+
		"\3\ud6a7\3\ud6aa\3\ud6c2\3\ud6c4\3\ud6dc\3\ud6de\3\ud6fc\3\ud6fe\3\ud716"+
		"\3\ud718\3\ud736\3\ud738\3\ud750\3\ud752\3\ud770\3\ud772\3\ud78a\3\ud78c"+
		"\3\ud7aa\3\ud7ac\3\ud7c4\3\ud7c6\3\ud7cd\3\ud7d0\3\ud801\3\uda02\3\uda38"+
		"\3\uda3d\3\uda6e\3\uda77\3\uda77\3\uda86\3\uda86\3\uda9d\3\udaa1\3\udaa3"+
		"\3\udab1\3\ue002\3\ue008\3\ue00a\3\ue01a\3\ue01d\3\ue023\3\ue025\3\ue026"+
		"\3\ue028\3\ue02c\3\ue802\3\ue8c6\3\ue8c9\3\ue8d8\3\ue902\3\ue94c\3\ue952"+
		"\3\ue95b\3\uee02\3\uee05\3\uee07\3\uee21\3\uee23\3\uee24\3\uee26\3\uee26"+
		"\3\uee29\3\uee29\3\uee2b\3\uee34\3\uee36\3\uee39\3\uee3b\3\uee3b\3\uee3d"+
		"\3\uee3d\3\uee44\3\uee44\3\uee49\3\uee49\3\uee4b\3\uee4b\3\uee4d\3\uee4d"+
		"\3\uee4f\3\uee51\3\uee53\3\uee54\3\uee56\3\uee56\3\uee59\3\uee59\3\uee5b"+
		"\3\uee5b\3\uee5d\3\uee5d\3\uee5f\3\uee5f\3\uee61\3\uee61\3\uee63\3\uee64"+
		"\3\uee66\3\uee66\3\uee69\3\uee6c\3\uee6e\3\uee74\3\uee76\3\uee79\3\uee7b"+
		"\3\uee7e\3\uee80\3\uee80\3\uee82\3\uee8b\3\uee8d\3\uee9d\3\ueea3\3\ueea5"+
		"\3\ueea7\3\ueeab\3\ueead\3\ueebd\3\uf102\3\uf10e\3\2\4\ua6d8\4\ua702\4"+
		"\ub736\4\ub742\4\ub81f\4\ub822\4\ucea3\4\uceb2\4\uebe2\4\uf802\4\ufa1f"+
		"\4\u0102\20\u01f1\20\u01e6\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2"+
		"\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2"+
		"\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3"+
		"\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2"+
		"\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67"+
		"\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2"+
		"\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2"+
		"\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2a\3\2\2\2\2k\3\2\2\2\2m"+
		"\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2"+
		"\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\3\u0083\3\2\2"+
		"\2\5\u0085\3\2\2\2\7\u0091\3\2\2\2\t\u009a\3\2\2\2\13\u009f\3\2\2\2\r"+
		"\u00a4\3\2\2\2\17\u00a8\3\2\2\2\21\u00b1\3\2\2\2\23\u00b8\3\2\2\2\25\u00bd"+
		"\3\2\2\2\27\u00c9\3\2\2\2\31\u00ce\3\2\2\2\33\u00d3\3\2\2\2\35\u00d8\3"+
		"\2\2\2\37\u00de\3\2\2\2!\u00e4\3\2\2\2#\u00e9\3\2\2\2%\u00ee\3\2\2\2\'"+
		"\u00f3\3\2\2\2)\u00f6\3\2\2\2+\u00f8\3\2\2\2-\u00fb\3\2\2\2/\u00fd\3\2"+
		"\2\2\61\u0100\3\2\2\2\63\u0102\3\2\2\2\65\u0106\3\2\2\2\67\u0108\3\2\2"+
		"\29\u011a\3\2\2\2;\u011c\3\2\2\2=\u0121\3\2\2\2?\u0127\3\2\2\2A\u012c"+
		"\3\2\2\2C\u0133\3\2\2\2E\u013d\3\2\2\2G\u0146\3\2\2\2I\u014f\3\2\2\2K"+
		"\u0154\3\2\2\2M\u015c\3\2\2\2O\u0162\3\2\2\2Q\u0169\3\2\2\2S\u016f\3\2"+
		"\2\2U\u0178\3\2\2\2W\u0180\3\2\2\2Y\u0189\3\2\2\2[\u018f\3\2\2\2]\u0193"+
		"\3\2\2\2_\u0195\3\2\2\2a\u01a4\3\2\2\2c\u01ab\3\2\2\2e\u01ad\3\2\2\2g"+
		"\u01af\3\2\2\2i\u01b8\3\2\2\2k\u01ba\3\2\2\2m\u01be\3\2\2\2o\u01c0\3\2"+
		"\2\2q\u01c2\3\2\2\2s\u01c4\3\2\2\2u\u01c6\3\2\2\2w\u01c8\3\2\2\2y\u01ca"+
		"\3\2\2\2{\u01cc\3\2\2\2}\u01ce\3\2\2\2\177\u01d3\3\2\2\2\u0081\u01d8\3"+
		"\2\2\2\u0083\u0084\7/\2\2\u0084\4\3\2\2\2\u0085\u0086\7f\2\2\u0086\u0087"+
		"\7g\2\2\u0087\u0088\7u\2\2\u0088\u0089\7e\2\2\u0089\u008a\7t\2\2\u008a"+
		"\u008b\7k\2\2\u008b\u008c\7r\2\2\u008c\u008d\7v\2\2\u008d\u008e\7k\2\2"+
		"\u008e\u008f\7q\2\2\u008f\u0090\7p\2\2\u0090\6\3\2\2\2\u0091\u0092\7q"+
		"\2\2\u0092\u0093\7r\2\2\u0093\u0094\7v\2\2\u0094\u0095\7k\2\2\u0095\u0096"+
		"\7q\2\2\u0096\u0097\7p\2\2\u0097\u0098\7c\2\2\u0098\u0099\7n\2\2\u0099"+
		"\b\3\2\2\2\u009a\u009b\7p\2\2\u009b\u009c\7c\2\2\u009c\u009d\7o\2\2\u009d"+
		"\u009e\7g\2\2\u009e\n\3\2\2\2\u009f\u00a0\7w\2\2\u00a0\u00a1\7w\2\2\u00a1"+
		"\u00a2\7k\2\2\u00a2\u00a3\7f\2\2\u00a3\f\3\2\2\2\u00a4\u00a5\7o\2\2\u00a5"+
		"\u00a6\7c\2\2\u00a6\u00a7\7z\2\2\u00a7\16\3\2\2\2\u00a8\u00a9\7s\2\2\u00a9"+
		"\u00aa\7w\2\2\u00aa\u00ab\7c\2\2\u00ab\u00ac\7p\2\2\u00ac\u00ad\7v\2\2"+
		"\u00ad\u00ae\7k\2\2\u00ae\u00af\7v\2\2\u00af\u00b0\7{\2\2\u00b0\20\3\2"+
		"\2\2\u00b1\u00b2\7n\2\2\u00b2\u00b3\7g\2\2\u00b3\u00b4\7p\2\2\u00b4\u00b5"+
		"\7i\2\2\u00b5\u00b6\7v\2\2\u00b6\u00b7\7j\2\2\u00b7\22\3\2\2\2\u00b8\u00b9"+
		"\7o\2\2\u00b9\u00ba\7c\2\2\u00ba\u00bb\7u\2\2\u00bb\u00bc\7u\2\2\u00bc"+
		"\24\3\2\2\2\u00bd\u00be\7v\2\2\u00be\u00bf\7g\2\2\u00bf\u00c0\7o\2\2\u00c0"+
		"\u00c1\7r\2\2\u00c1\u00c2\7g\2\2\u00c2\u00c3\7t\2\2\u00c3\u00c4\7c\2\2"+
		"\u00c4\u00c5\7v\2\2\u00c5\u00c6\7w\2\2\u00c6\u00c7\7t\2\2\u00c7\u00c8"+
		"\7g\2\2\u00c8\26\3\2\2\2\u00c9\u00ca\7v\2\2\u00ca\u00cb\7k\2\2\u00cb\u00cc"+
		"\7o\2\2\u00cc\u00cd\7g\2\2\u00cd\30\3\2\2\2\u00ce\u00cf\7v\2\2\u00cf\u00d0"+
		"\7t\2\2\u00d0\u00d1\7w\2\2\u00d1\u00d2\7g\2\2\u00d2\32\3\2\2\2\u00d3\u00d4"+
		"\7V\2\2\u00d4\u00d5\7t\2\2\u00d5\u00d6\7w\2\2\u00d6\u00d7\7g\2\2\u00d7"+
		"\34\3\2\2\2\u00d8\u00d9\7h\2\2\u00d9\u00da\7c\2\2\u00da\u00db\7n\2\2\u00db"+
		"\u00dc\7u\2\2\u00dc\u00dd\7g\2\2\u00dd\36\3\2\2\2\u00de\u00df\7H\2\2\u00df"+
		"\u00e0\7c\2\2\u00e0\u00e1\7n\2\2\u00e1\u00e2\7u\2\2\u00e2\u00e3\7g\2\2"+
		"\u00e3 \3\2\2\2\u00e4\u00e5\7p\2\2\u00e5\u00e6\7w\2\2\u00e6\u00e7\7n\2"+
		"\2\u00e7\u00e8\7n\2\2\u00e8\"\3\2\2\2\u00e9\u00ea\7p\2\2\u00ea\u00eb\7"+
		"q\2\2\u00eb\u00ec\7p\2\2\u00ec\u00ed\7g\2\2\u00ed$\3\2\2\2\u00ee\u00ef"+
		"\7P\2\2\u00ef\u00f0\7q\2\2\u00f0\u00f1\7p\2\2\u00f1\u00f2\7g\2\2\u00f2"+
		"&\3\2\2\2\u00f3\u00f4\7#\2\2\u00f4\u00f5\7#\2\2\u00f5(\3\2\2\2\u00f6\u00f7"+
		"\7o\2\2\u00f7*\3\2\2\2\u00f8\u00f9\7m\2\2\u00f9\u00fa\7o\2\2\u00fa,\3"+
		"\2\2\2\u00fb\u00fc\7i\2\2\u00fc.\3\2\2\2\u00fd\u00fe\7m\2\2\u00fe\u00ff"+
		"\7i\2\2\u00ff\60\3\2\2\2\u0100\u0101\7u\2\2\u0101\62\3\2\2\2\u0102\u0103"+
		"\7o\2\2\u0103\u0104\7k\2\2\u0104\u0105\7p\2\2\u0105\64\3\2\2\2\u0106\u0107"+
		"\7E\2\2\u0107\66\3\2\2\2\u0108\u0109\7M\2\2\u01098\3\2\2\2\u010a\u010e"+
		"\7$\2\2\u010b\u010d\5[.\2\u010c\u010b\3\2\2\2\u010d\u0110\3\2\2\2\u010e"+
		"\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0111\3\2\2\2\u0110\u010e\3\2"+
		"\2\2\u0111\u011b\7$\2\2\u0112\u0116\7)\2\2\u0113\u0115\5]/\2\u0114\u0113"+
		"\3\2\2\2\u0115\u0118\3\2\2\2\u0116\u0114\3\2\2\2\u0116\u0117\3\2\2\2\u0117"+
		"\u0119\3\2\2\2\u0118\u0116\3\2\2\2\u0119\u011b\7)\2\2\u011a\u010a\3\2"+
		"\2\2\u011a\u0112\3\2\2\2\u011b:\3\2\2\2\u011c\u011d\7#\2\2\u011d\u011e"+
		"\7u\2\2\u011e\u011f\7v\2\2\u011f\u0120\7t\2\2\u0120<\3\2\2\2\u0121\u0122"+
		"\7#\2\2\u0122\u0123\7d\2\2\u0123\u0124\7q\2\2\u0124\u0125\7q\2\2\u0125"+
		"\u0126\7n\2\2\u0126>\3\2\2\2\u0127\u0128\7#\2\2\u0128\u0129\7w\2\2\u0129"+
		"\u012a\7t\2\2\u012a\u012b\7n\2\2\u012b@\3\2\2\2\u012c\u012d\7#\2\2\u012d"+
		"\u012e\7h\2\2\u012e\u012f\7n\2\2\u012f\u0130\7q\2\2\u0130\u0131\7c\2\2"+
		"\u0131\u0132\7v\2\2\u0132B\3\2\2\2\u0133\u0134\7#\2\2\u0134\u0135\7h\2"+
		"\2\u0135\u0136\7n\2\2\u0136\u0137\7q\2\2\u0137\u0138\7c\2\2\u0138\u0139"+
		"\7v\2\2\u0139\u013a\7\63\2\2\u013a\u013b\7\64\2\2\u013b\u013c\7:\2\2\u013c"+
		"D\3\2\2\2\u013d\u013e\7#\2\2\u013e\u013f\7h\2\2\u013f\u0140\7n\2\2\u0140"+
		"\u0141\7q\2\2\u0141\u0142\7c\2\2\u0142\u0143\7v\2\2\u0143\u0144\78\2\2"+
		"\u0144\u0145\7\66\2\2\u0145F\3\2\2\2\u0146\u0147\7#\2\2\u0147\u0148\7"+
		"h\2\2\u0148\u0149\7n\2\2\u0149\u014a\7q\2\2\u014a\u014b\7c\2\2\u014b\u014c"+
		"\7v\2\2\u014c\u014d\7\65\2\2\u014d\u014e\7\64\2\2\u014eH\3\2\2\2\u014f"+
		"\u0150\7#\2\2\u0150\u0151\7k\2\2\u0151\u0152\7p\2\2\u0152\u0153\7v\2\2"+
		"\u0153J\3\2\2\2\u0154\u0155\7#\2\2\u0155\u0156\7k\2\2\u0156\u0157\7p\2"+
		"\2\u0157\u0158\7v\2\2\u0158\u0159\7\63\2\2\u0159\u015a\7\64\2\2\u015a"+
		"\u015b\7:\2\2\u015bL\3\2\2\2\u015c\u015d\7#\2\2\u015d\u015e\7k\2\2\u015e"+
		"\u015f\7p\2\2\u015f\u0160\7v\2\2\u0160\u0161\78\2\2\u0161N\3\2\2\2\u0162"+
		"\u0163\7#\2\2\u0163\u0164\7k\2\2\u0164\u0165\7p\2\2\u0165\u0166\7v\2\2"+
		"\u0166\u0167\7\65\2\2\u0167\u0168\7\64\2\2\u0168P\3\2\2\2\u0169\u016a"+
		"\7#\2\2\u016a\u016b\7w\2\2\u016b\u016c\7k\2\2\u016c\u016d\7p\2\2\u016d"+
		"\u016e\7v\2\2\u016eR\3\2\2\2\u016f\u0170\7#\2\2\u0170\u0171\7w\2\2\u0171"+
		"\u0172\7k\2\2\u0172\u0173\7p\2\2\u0173\u0174\7v\2\2\u0174\u0175\7\63\2"+
		"\2\u0175\u0176\7\64\2\2\u0176\u0177\7:\2\2\u0177T\3\2\2\2\u0178\u0179"+
		"\7#\2\2\u0179\u017a\7w\2\2\u017a\u017b\7k\2\2\u017b\u017c\7p\2\2\u017c"+
		"\u017d\7v\2\2\u017d\u017e\78\2\2\u017e\u017f\7\66\2\2\u017fV\3\2\2\2\u0180"+
		"\u0181\7#\2\2\u0181\u0182\7w\2\2\u0182\u0183\7k\2\2\u0183\u0184\7p\2\2"+
		"\u0184\u0185\7v\2\2\u0185\u0186\7\65\2\2\u0186\u0187\7\64\2\2\u0187X\3"+
		"\2\2\2\u0188\u018a\t\2\2\2\u0189\u0188\3\2\2\2\u018a\u018b\3\2\2\2\u018b"+
		"\u0189\3\2\2\2\u018b\u018c\3\2\2\2\u018cZ\3\2\2\2\u018d\u0190\n\3\2\2"+
		"\u018e\u0190\5_\60\2\u018f\u018d\3\2\2\2\u018f\u018e\3\2\2\2\u0190\\\3"+
		"\2\2\2\u0191\u0194\n\4\2\2\u0192\u0194\5_\60\2\u0193\u0191\3\2\2\2\u0193"+
		"\u0192\3\2\2\2\u0194^\3\2\2\2\u0195\u019f\7^\2\2\u0196\u01a0\5i\65\2\u0197"+
		"\u01a0\5g\64\2\u0198\u01a0\t\5\2\2\u0199\u01a0\n\6\2\2\u019a\u01a0\7\62"+
		"\2\2\u019b\u019c\7z\2\2\u019c\u019d\5e\63\2\u019d\u019e\5e\63\2\u019e"+
		"\u01a0\3\2\2\2\u019f\u0196\3\2\2\2\u019f\u0197\3\2\2\2\u019f\u0198\3\2"+
		"\2\2\u019f\u0199\3\2\2\2\u019f\u019a\3\2\2\2\u019f\u019b\3\2\2\2\u01a0"+
		"`\3\2\2\2\u01a1\u01a3\5c\62\2\u01a2\u01a1\3\2\2\2\u01a3\u01a6\3\2\2\2"+
		"\u01a4\u01a2\3\2\2\2\u01a4\u01a5\3\2\2\2\u01a5b\3\2\2\2\u01a6\u01a4\3"+
		"\2\2\2\u01a7\u01ac\t\13\2\2\u01a8\u01a9\7^\2\2\u01a9\u01ac\5g\64\2\u01aa"+
		"\u01ac\t\7\2\2\u01ab\u01a7\3\2\2\2\u01ab\u01a8\3\2\2\2\u01ab\u01aa\3\2"+
		"\2\2\u01acd\3\2\2\2\u01ad\u01ae\t\b\2\2\u01aef\3\2\2\2\u01af\u01b0\7w"+
		"\2\2\u01b0\u01b1\5e\63\2\u01b1\u01b2\5e\63\2\u01b2\u01b3\5e\63\2\u01b3"+
		"\u01b4\5e\63\2\u01b4h\3\2\2\2\u01b5\u01b6\7\17\2\2\u01b6\u01b9\7\f\2\2"+
		"\u01b7\u01b9\t\t\2\2\u01b8\u01b5\3\2\2\2\u01b8\u01b7\3\2\2\2\u01b9j\3"+
		"\2\2\2\u01ba\u01bb\t\n\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01bd\b\66\2\2\u01bd"+
		"l\3\2\2\2\u01be\u01bf\7*\2\2\u01bfn\3\2\2\2\u01c0\u01c1\7+\2\2\u01c1p"+
		"\3\2\2\2\u01c2\u01c3\7}\2\2\u01c3r\3\2\2\2\u01c4\u01c5\7\177\2\2\u01c5"+
		"t\3\2\2\2\u01c6\u01c7\7]\2\2\u01c7v\3\2\2\2\u01c8\u01c9\7_\2\2\u01c9x"+
		"\3\2\2\2\u01ca\u01cb\7.\2\2\u01cbz\3\2\2\2\u01cc\u01cd\7<\2\2\u01cd|\3"+
		"\2\2\2\u01ce\u01cf\7#\2\2\u01cf\u01d0\7o\2\2\u01d0\u01d1\7c\2\2\u01d1"+
		"\u01d2\7r\2\2\u01d2~\3\2\2\2\u01d3\u01d4\7#\2\2\u01d4\u01d5\7u\2\2\u01d5"+
		"\u01d6\7g\2\2\u01d6\u01d7\7s\2\2\u01d7\u0080\3\2\2\2\u01d8\u01d9\7#\2"+
		"\2\u01d9\u01da\7u\2\2\u01da\u01db\7e\2\2\u01db\u01dc\7j\2\2\u01dc\u01dd"+
		"\7g\2\2\u01dd\u01de\7o\2\2\u01de\u01df\7c\2\2\u01df\u0082\3\2\2\2\r\2"+
		"\u010e\u0116\u011a\u018b\u018f\u0193\u019f\u01a4\u01ab\u01b8\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}