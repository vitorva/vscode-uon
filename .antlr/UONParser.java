// Generated from c:\Heig-VD\2021-22\Sem2\TB\poc_plugin\te\UON.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class UONParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		CT=18, METERS=19, KILOMETERS=20, GRAMS=21, KILOGRAMS=22, SECOND=23, MINUTE=24, 
		CELSIUS=25, KELVIN=26, QUOTED_STRING=27, STR_TYPE=28, BOOL_TYPE=29, URL_TYPE=30, 
		FLOAT_TYPE=31, FLOAT_128_TYPE=32, FLOAT_64_TYPE=33, FLOAT_32_TYPE=34, 
		INT_TYPE=35, INT_128_TYPE=36, INT_64_TYPE=37, INT_32_TYPE=38, UINT_TYPE=39, 
		UINT_128_TYPE=40, UINT_64_TYPE=41, UINT_32_TYPE=42, UNQUOTED_STRING=43, 
		WS=44, NEWLINE2=45, OPEN_PAR=46, CLOSE_PAR=47, OPEN_C_BRA=48, CLOSE_C_BRA=49, 
		OPEN_S_BRA=50, CLOSE_S_BRA=51, COMMA=52, COLON=53, MAPPING_TYPE=54, SEQUENCE_TYPE=55, 
		SCHEMA_TYPE=56, MINUS=57, INDENT=58, DEDENT=59;
	public static final int
		RULE_uon = 0, RULE_json_collection = 1, RULE_json_map = 2, RULE_json_seq = 3, 
		RULE_yaml_collection = 4, RULE_yaml_collection_nested = 5, RULE_yaml_map = 6, 
		RULE_yaml_seq = 7, RULE_seq_item = 8, RULE_pair = 9, RULE_pair_key = 10, 
		RULE_json_pair = 11, RULE_presentation_properties = 12, RULE_presentation_property = 13, 
		RULE_description = 14, RULE_optional = 15, RULE_string = 16, RULE_custom_type = 17, 
		RULE_json_user_type = 18, RULE_yaml_user_type = 19, RULE_scalar = 20, 
		RULE_string_scalar = 21, RULE_boolean_scalar = 22, RULE_url = 23, RULE_quantity_scalar = 24, 
		RULE_numeric_scalar = 25, RULE_coercible_numeric_scalar = 26, RULE_quantity = 27, 
		RULE_length = 28, RULE_mass = 29, RULE_time = 30, RULE_temperature = 31, 
		RULE_number = 32, RULE_root_value = 33, RULE_json_value = 34, RULE_yaml_value = 35, 
		RULE_number_type = 36, RULE_schema = 37, RULE_attributes = 38, RULE_attribute = 39, 
		RULE_schema_presentations = 40, RULE_schema_presentation = 41, RULE_schema_name = 42, 
		RULE_schema_uuid = 43, RULE_validation_properties = 44, RULE_string_validation = 45, 
		RULE_string_properties = 46, RULE_string_property = 47, RULE_string_max = 48, 
		RULE_string_min = 49, RULE_url_validation = 50, RULE_boolean_validation = 51, 
		RULE_number_validation = 52, RULE_number_properties = 53, RULE_number_property = 54, 
		RULE_number_max = 55, RULE_number_min = 56, RULE_number_validation_type = 57, 
		RULE_quantity_validation = 58, RULE_quantity_validation_types = 59, RULE_boolean = 60, 
		RULE_true = 61, RULE_false = 62, RULE_null = 63;
	private static String[] makeRuleNames() {
		return new String[] {
			"uon", "json_collection", "json_map", "json_seq", "yaml_collection", 
			"yaml_collection_nested", "yaml_map", "yaml_seq", "seq_item", "pair", 
			"pair_key", "json_pair", "presentation_properties", "presentation_property", 
			"description", "optional", "string", "custom_type", "json_user_type", 
			"yaml_user_type", "scalar", "string_scalar", "boolean_scalar", "url", 
			"quantity_scalar", "numeric_scalar", "coercible_numeric_scalar", "quantity", 
			"length", "mass", "time", "temperature", "number", "root_value", "json_value", 
			"yaml_value", "number_type", "schema", "attributes", "attribute", "schema_presentations", 
			"schema_presentation", "schema_name", "schema_uuid", "validation_properties", 
			"string_validation", "string_properties", "string_property", "string_max", 
			"string_min", "url_validation", "boolean_validation", "number_validation", 
			"number_properties", "number_property", "number_max", "number_min", "number_validation_type", 
			"quantity_validation", "quantity_validation_types", "boolean", "true", 
			"false", "null"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'description'", "'optional'", "'name'", "'uuid'", "'max'", "'quantity'", 
			"'length'", "'mass'", "'temperature'", "'time'", "'true'", "'True'", 
			"'false'", "'False'", "'null'", "'none'", "'None'", "'!!'", "'m'", "'km'", 
			"'g'", "'kg'", "'s'", "'min'", "'C'", "'K'", null, "'!str'", "'!bool'", 
			"'!url'", "'!float'", "'!float128'", "'!float64'", "'!float32'", "'!int'", 
			"'!int128'", "'!int6'", "'!int32'", "'!uint'", "'!uint128'", "'!uint64'", 
			"'!uint32'", null, null, null, "'('", "')'", "'{'", "'}'", "'['", "']'", 
			"','", "':'", "'!map'", "'!seq'", "'!schema'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "CT", "METERS", "KILOMETERS", "GRAMS", 
			"KILOGRAMS", "SECOND", "MINUTE", "CELSIUS", "KELVIN", "QUOTED_STRING", 
			"STR_TYPE", "BOOL_TYPE", "URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", 
			"FLOAT_64_TYPE", "FLOAT_32_TYPE", "INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", 
			"INT_32_TYPE", "UINT_TYPE", "UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", 
			"UNQUOTED_STRING", "WS", "NEWLINE2", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", 
			"CLOSE_C_BRA", "OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", 
			"SEQUENCE_TYPE", "SCHEMA_TYPE", "MINUS", "INDENT", "DEDENT"
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

	@Override
	public String getGrammarFileName() { return "UON.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public UONParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class UonContext extends ParserRuleContext {
		public Root_valueContext root_value() {
			return getRuleContext(Root_valueContext.class,0);
		}
		public List<TerminalNode> NEWLINE2() { return getTokens(UONParser.NEWLINE2); }
		public TerminalNode NEWLINE2(int i) {
			return getToken(UONParser.NEWLINE2, i);
		}
		public UonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uon; }
	}

	public final UonContext uon() throws RecognitionException {
		UonContext _localctx = new UonContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_uon);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE2) {
				{
				{
				setState(128);
				match(NEWLINE2);
				}
				}
				setState(133);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(134);
			root_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Json_collectionContext extends ParserRuleContext {
		public Json_mapContext json_map() {
			return getRuleContext(Json_mapContext.class,0);
		}
		public Json_seqContext json_seq() {
			return getRuleContext(Json_seqContext.class,0);
		}
		public Json_collectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json_collection; }
	}

	public final Json_collectionContext json_collection() throws RecognitionException {
		Json_collectionContext _localctx = new Json_collectionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_json_collection);
		try {
			setState(138);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_C_BRA:
			case MAPPING_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(136);
				json_map();
				}
				break;
			case OPEN_S_BRA:
			case SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(137);
				json_seq();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Json_mapContext extends ParserRuleContext {
		public TerminalNode OPEN_C_BRA() { return getToken(UONParser.OPEN_C_BRA, 0); }
		public TerminalNode CLOSE_C_BRA() { return getToken(UONParser.CLOSE_C_BRA, 0); }
		public TerminalNode MAPPING_TYPE() { return getToken(UONParser.MAPPING_TYPE, 0); }
		public List<Json_pairContext> json_pair() {
			return getRuleContexts(Json_pairContext.class);
		}
		public Json_pairContext json_pair(int i) {
			return getRuleContext(Json_pairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public Json_mapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json_map; }
	}

	public final Json_mapContext json_map() throws RecognitionException {
		Json_mapContext _localctx = new Json_mapContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_json_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAPPING_TYPE) {
				{
				setState(140);
				match(MAPPING_TYPE);
				}
			}

			setState(143);
			match(OPEN_C_BRA);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUOTED_STRING || _la==UNQUOTED_STRING) {
				{
				setState(144);
				json_pair();
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(145);
					match(COMMA);
					setState(146);
					json_pair();
					}
					}
					setState(151);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(154);
			match(CLOSE_C_BRA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Json_seqContext extends ParserRuleContext {
		public TerminalNode OPEN_S_BRA() { return getToken(UONParser.OPEN_S_BRA, 0); }
		public TerminalNode CLOSE_S_BRA() { return getToken(UONParser.CLOSE_S_BRA, 0); }
		public TerminalNode SEQUENCE_TYPE() { return getToken(UONParser.SEQUENCE_TYPE, 0); }
		public List<Json_valueContext> json_value() {
			return getRuleContexts(Json_valueContext.class);
		}
		public Json_valueContext json_value(int i) {
			return getRuleContext(Json_valueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public Json_seqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json_seq; }
	}

	public final Json_seqContext json_seq() throws RecognitionException {
		Json_seqContext _localctx = new Json_seqContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_json_seq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEQUENCE_TYPE) {
				{
				setState(156);
				match(SEQUENCE_TYPE);
				}
			}

			setState(159);
			match(OPEN_S_BRA);
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << CT) | (1L << QUOTED_STRING) | (1L << STR_TYPE) | (1L << BOOL_TYPE) | (1L << URL_TYPE) | (1L << FLOAT_TYPE) | (1L << FLOAT_128_TYPE) | (1L << FLOAT_64_TYPE) | (1L << FLOAT_32_TYPE) | (1L << INT_TYPE) | (1L << INT_128_TYPE) | (1L << INT_64_TYPE) | (1L << INT_32_TYPE) | (1L << UINT_TYPE) | (1L << UINT_128_TYPE) | (1L << UINT_64_TYPE) | (1L << UINT_32_TYPE) | (1L << UNQUOTED_STRING) | (1L << OPEN_C_BRA) | (1L << OPEN_S_BRA) | (1L << MAPPING_TYPE) | (1L << SEQUENCE_TYPE))) != 0)) {
				{
				setState(160);
				json_value();
				setState(165);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(161);
					match(COMMA);
					setState(162);
					json_value();
					}
					}
					setState(167);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(170);
			match(CLOSE_S_BRA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Yaml_collectionContext extends ParserRuleContext {
		public Yaml_mapContext yaml_map() {
			return getRuleContext(Yaml_mapContext.class,0);
		}
		public Yaml_seqContext yaml_seq() {
			return getRuleContext(Yaml_seqContext.class,0);
		}
		public Yaml_collectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yaml_collection; }
	}

	public final Yaml_collectionContext yaml_collection() throws RecognitionException {
		Yaml_collectionContext _localctx = new Yaml_collectionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_yaml_collection);
		try {
			setState(174);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case QUOTED_STRING:
			case UNQUOTED_STRING:
			case MAPPING_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				yaml_map();
				}
				break;
			case SEQUENCE_TYPE:
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(173);
				yaml_seq();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Yaml_collection_nestedContext extends ParserRuleContext {
		public TerminalNode NEWLINE2() { return getToken(UONParser.NEWLINE2, 0); }
		public TerminalNode INDENT() { return getToken(UONParser.INDENT, 0); }
		public Yaml_collectionContext yaml_collection() {
			return getRuleContext(Yaml_collectionContext.class,0);
		}
		public TerminalNode DEDENT() { return getToken(UONParser.DEDENT, 0); }
		public Yaml_collection_nestedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yaml_collection_nested; }
	}

	public final Yaml_collection_nestedContext yaml_collection_nested() throws RecognitionException {
		Yaml_collection_nestedContext _localctx = new Yaml_collection_nestedContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_yaml_collection_nested);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(NEWLINE2);
			{
			setState(177);
			match(INDENT);
			setState(178);
			yaml_collection();
			setState(179);
			match(DEDENT);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Yaml_mapContext extends ParserRuleContext {
		public TerminalNode MAPPING_TYPE() { return getToken(UONParser.MAPPING_TYPE, 0); }
		public List<PairContext> pair() {
			return getRuleContexts(PairContext.class);
		}
		public PairContext pair(int i) {
			return getRuleContext(PairContext.class,i);
		}
		public Yaml_mapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yaml_map; }
	}

	public final Yaml_mapContext yaml_map() throws RecognitionException {
		Yaml_mapContext _localctx = new Yaml_mapContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_yaml_map);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAPPING_TYPE) {
				{
				setState(181);
				match(MAPPING_TYPE);
				}
			}

			setState(185); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(184);
					pair();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(187); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Yaml_seqContext extends ParserRuleContext {
		public TerminalNode SEQUENCE_TYPE() { return getToken(UONParser.SEQUENCE_TYPE, 0); }
		public List<Seq_itemContext> seq_item() {
			return getRuleContexts(Seq_itemContext.class);
		}
		public Seq_itemContext seq_item(int i) {
			return getRuleContext(Seq_itemContext.class,i);
		}
		public Yaml_seqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yaml_seq; }
	}

	public final Yaml_seqContext yaml_seq() throws RecognitionException {
		Yaml_seqContext _localctx = new Yaml_seqContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_yaml_seq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEQUENCE_TYPE) {
				{
				setState(189);
				match(SEQUENCE_TYPE);
				}
			}

			setState(193); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(192);
				seq_item();
				}
				}
				setState(195); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==MINUS );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Seq_itemContext extends ParserRuleContext {
		public TerminalNode MINUS() { return getToken(UONParser.MINUS, 0); }
		public Yaml_valueContext yaml_value() {
			return getRuleContext(Yaml_valueContext.class,0);
		}
		public Seq_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seq_item; }
	}

	public final Seq_itemContext seq_item() throws RecognitionException {
		Seq_itemContext _localctx = new Seq_itemContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_seq_item);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(MINUS);
			setState(198);
			yaml_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PairContext extends ParserRuleContext {
		public Pair_keyContext pair_key() {
			return getRuleContext(Pair_keyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public Yaml_valueContext yaml_value() {
			return getRuleContext(Yaml_valueContext.class,0);
		}
		public PairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pair; }
	}

	public final PairContext pair() throws RecognitionException {
		PairContext _localctx = new PairContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			pair_key();
			setState(201);
			match(COLON);
			setState(202);
			yaml_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pair_keyContext extends ParserRuleContext {
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public Presentation_propertiesContext presentation_properties() {
			return getRuleContext(Presentation_propertiesContext.class,0);
		}
		public Pair_keyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pair_key; }
	}

	public final Pair_keyContext pair_key() throws RecognitionException {
		Pair_keyContext _localctx = new Pair_keyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_pair_key);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			string();
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(205);
				presentation_properties();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Json_pairContext extends ParserRuleContext {
		public Pair_keyContext pair_key() {
			return getRuleContext(Pair_keyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public Json_valueContext json_value() {
			return getRuleContext(Json_valueContext.class,0);
		}
		public Json_pairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json_pair; }
	}

	public final Json_pairContext json_pair() throws RecognitionException {
		Json_pairContext _localctx = new Json_pairContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_json_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			pair_key();
			setState(209);
			match(COLON);
			setState(210);
			json_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Presentation_propertiesContext extends ParserRuleContext {
		public TerminalNode OPEN_PAR() { return getToken(UONParser.OPEN_PAR, 0); }
		public TerminalNode CLOSE_PAR() { return getToken(UONParser.CLOSE_PAR, 0); }
		public List<Presentation_propertyContext> presentation_property() {
			return getRuleContexts(Presentation_propertyContext.class);
		}
		public Presentation_propertyContext presentation_property(int i) {
			return getRuleContext(Presentation_propertyContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public Presentation_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_presentation_properties; }
	}

	public final Presentation_propertiesContext presentation_properties() throws RecognitionException {
		Presentation_propertiesContext _localctx = new Presentation_propertiesContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_presentation_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(OPEN_PAR);
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0 || _la==T__1) {
				{
				setState(213);
				presentation_property();
				setState(218);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(214);
					match(COMMA);
					setState(215);
					presentation_property();
					}
					}
					setState(220);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(223);
			match(CLOSE_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Presentation_propertyContext extends ParserRuleContext {
		public OptionalContext optional() {
			return getRuleContext(OptionalContext.class,0);
		}
		public DescriptionContext description() {
			return getRuleContext(DescriptionContext.class,0);
		}
		public Presentation_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_presentation_property; }
	}

	public final Presentation_propertyContext presentation_property() throws RecognitionException {
		Presentation_propertyContext _localctx = new Presentation_propertyContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_presentation_property);
		try {
			setState(227);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(225);
				optional();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(226);
				description();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public DescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_description; }
	}

	public final DescriptionContext description() throws RecognitionException {
		DescriptionContext _localctx = new DescriptionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_description);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(T__0);
			setState(230);
			match(COLON);
			setState(231);
			string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public BooleanContext boolean() {
			return getRuleContext(BooleanContext.class,0);
		}
		public OptionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optional; }
	}

	public final OptionalContext optional() throws RecognitionException {
		OptionalContext _localctx = new OptionalContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_optional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(T__1);
			setState(234);
			match(COLON);
			setState(235);
			boolean();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public TerminalNode QUOTED_STRING() { return getToken(UONParser.QUOTED_STRING, 0); }
		public TerminalNode UNQUOTED_STRING() { return getToken(UONParser.UNQUOTED_STRING, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_string);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
			_la = _input.LA(1);
			if ( !(_la==QUOTED_STRING || _la==UNQUOTED_STRING) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Custom_typeContext extends ParserRuleContext {
		public TerminalNode CT() { return getToken(UONParser.CT, 0); }
		public TerminalNode UNQUOTED_STRING() { return getToken(UONParser.UNQUOTED_STRING, 0); }
		public Custom_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_custom_type; }
	}

	public final Custom_typeContext custom_type() throws RecognitionException {
		Custom_typeContext _localctx = new Custom_typeContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_custom_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			match(CT);
			setState(240);
			match(UNQUOTED_STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Json_user_typeContext extends ParserRuleContext {
		public Custom_typeContext custom_type() {
			return getRuleContext(Custom_typeContext.class,0);
		}
		public Json_mapContext json_map() {
			return getRuleContext(Json_mapContext.class,0);
		}
		public Json_user_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json_user_type; }
	}

	public final Json_user_typeContext json_user_type() throws RecognitionException {
		Json_user_typeContext _localctx = new Json_user_typeContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_json_user_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			custom_type();
			setState(243);
			json_map();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Yaml_user_typeContext extends ParserRuleContext {
		public Custom_typeContext custom_type() {
			return getRuleContext(Custom_typeContext.class,0);
		}
		public Yaml_mapContext yaml_map() {
			return getRuleContext(Yaml_mapContext.class,0);
		}
		public Yaml_user_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yaml_user_type; }
	}

	public final Yaml_user_typeContext yaml_user_type() throws RecognitionException {
		Yaml_user_typeContext _localctx = new Yaml_user_typeContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_yaml_user_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			custom_type();
			setState(246);
			yaml_map();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScalarContext extends ParserRuleContext {
		public Quantity_scalarContext quantity_scalar() {
			return getRuleContext(Quantity_scalarContext.class,0);
		}
		public String_scalarContext string_scalar() {
			return getRuleContext(String_scalarContext.class,0);
		}
		public Boolean_scalarContext boolean_scalar() {
			return getRuleContext(Boolean_scalarContext.class,0);
		}
		public UrlContext url() {
			return getRuleContext(UrlContext.class,0);
		}
		public ScalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scalar; }
	}

	public final ScalarContext scalar() throws RecognitionException {
		ScalarContext _localctx = new ScalarContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_scalar);
		try {
			setState(252);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(248);
				quantity_scalar();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(249);
				string_scalar();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(250);
				boolean_scalar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(251);
				url();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class String_scalarContext extends ParserRuleContext {
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode STR_TYPE() { return getToken(UONParser.STR_TYPE, 0); }
		public String_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_scalar; }
	}

	public final String_scalarContext string_scalar() throws RecognitionException {
		String_scalarContext _localctx = new String_scalarContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_string_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STR_TYPE) {
				{
				setState(254);
				match(STR_TYPE);
				}
			}

			setState(257);
			string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Boolean_scalarContext extends ParserRuleContext {
		public TerminalNode BOOL_TYPE() { return getToken(UONParser.BOOL_TYPE, 0); }
		public TerminalNode INDENT() { return getToken(UONParser.INDENT, 0); }
		public BooleanContext boolean() {
			return getRuleContext(BooleanContext.class,0);
		}
		public Boolean_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolean_scalar; }
	}

	public final Boolean_scalarContext boolean_scalar() throws RecognitionException {
		Boolean_scalarContext _localctx = new Boolean_scalarContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_boolean_scalar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			match(BOOL_TYPE);
			setState(260);
			match(INDENT);
			setState(261);
			boolean();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UrlContext extends ParserRuleContext {
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode URL_TYPE() { return getToken(UONParser.URL_TYPE, 0); }
		public UrlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_url; }
	}

	public final UrlContext url() throws RecognitionException {
		UrlContext _localctx = new UrlContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_url);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==URL_TYPE) {
				{
				setState(263);
				match(URL_TYPE);
				}
			}

			setState(266);
			string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Quantity_scalarContext extends ParserRuleContext {
		public Numeric_scalarContext numeric_scalar() {
			return getRuleContext(Numeric_scalarContext.class,0);
		}
		public QuantityContext quantity() {
			return getRuleContext(QuantityContext.class,0);
		}
		public Quantity_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantity_scalar; }
	}

	public final Quantity_scalarContext quantity_scalar() throws RecognitionException {
		Quantity_scalarContext _localctx = new Quantity_scalarContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_quantity_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			numeric_scalar();
			setState(270);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << METERS) | (1L << KILOMETERS) | (1L << GRAMS) | (1L << KILOGRAMS) | (1L << SECOND) | (1L << MINUTE) | (1L << CELSIUS) | (1L << KELVIN))) != 0)) {
				{
				setState(269);
				quantity();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Numeric_scalarContext extends ParserRuleContext {
		public Coercible_numeric_scalarContext coercible_numeric_scalar() {
			return getRuleContext(Coercible_numeric_scalarContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public Numeric_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numeric_scalar; }
	}

	public final Numeric_scalarContext numeric_scalar() throws RecognitionException {
		Numeric_scalarContext _localctx = new Numeric_scalarContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_numeric_scalar);
		try {
			setState(274);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FLOAT_TYPE:
			case FLOAT_128_TYPE:
			case FLOAT_64_TYPE:
			case FLOAT_32_TYPE:
			case INT_TYPE:
			case INT_128_TYPE:
			case INT_64_TYPE:
			case INT_32_TYPE:
			case UINT_TYPE:
			case UINT_128_TYPE:
			case UINT_64_TYPE:
			case UINT_32_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(272);
				coercible_numeric_scalar();
				}
				break;
			case UNQUOTED_STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(273);
				number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Coercible_numeric_scalarContext extends ParserRuleContext {
		public Number_typeContext number_type() {
			return getRuleContext(Number_typeContext.class,0);
		}
		public Coercible_numeric_scalarContext coercible_numeric_scalar() {
			return getRuleContext(Coercible_numeric_scalarContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public Coercible_numeric_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coercible_numeric_scalar; }
	}

	public final Coercible_numeric_scalarContext coercible_numeric_scalar() throws RecognitionException {
		Coercible_numeric_scalarContext _localctx = new Coercible_numeric_scalarContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_coercible_numeric_scalar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			number_type();
			setState(279);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FLOAT_TYPE:
			case FLOAT_128_TYPE:
			case FLOAT_64_TYPE:
			case FLOAT_32_TYPE:
			case INT_TYPE:
			case INT_128_TYPE:
			case INT_64_TYPE:
			case INT_32_TYPE:
			case UINT_TYPE:
			case UINT_128_TYPE:
			case UINT_64_TYPE:
			case UINT_32_TYPE:
				{
				setState(277);
				coercible_numeric_scalar();
				}
				break;
			case UNQUOTED_STRING:
				{
				setState(278);
				number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuantityContext extends ParserRuleContext {
		public LengthContext length() {
			return getRuleContext(LengthContext.class,0);
		}
		public MassContext mass() {
			return getRuleContext(MassContext.class,0);
		}
		public TimeContext time() {
			return getRuleContext(TimeContext.class,0);
		}
		public TemperatureContext temperature() {
			return getRuleContext(TemperatureContext.class,0);
		}
		public QuantityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantity; }
	}

	public final QuantityContext quantity() throws RecognitionException {
		QuantityContext _localctx = new QuantityContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_quantity);
		try {
			setState(285);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case METERS:
			case KILOMETERS:
				enterOuterAlt(_localctx, 1);
				{
				setState(281);
				length();
				}
				break;
			case GRAMS:
			case KILOGRAMS:
				enterOuterAlt(_localctx, 2);
				{
				setState(282);
				mass();
				}
				break;
			case SECOND:
			case MINUTE:
				enterOuterAlt(_localctx, 3);
				{
				setState(283);
				time();
				}
				break;
			case CELSIUS:
			case KELVIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(284);
				temperature();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LengthContext extends ParserRuleContext {
		public TerminalNode METERS() { return getToken(UONParser.METERS, 0); }
		public TerminalNode KILOMETERS() { return getToken(UONParser.KILOMETERS, 0); }
		public LengthContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_length; }
	}

	public final LengthContext length() throws RecognitionException {
		LengthContext _localctx = new LengthContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_length);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
			_la = _input.LA(1);
			if ( !(_la==METERS || _la==KILOMETERS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MassContext extends ParserRuleContext {
		public TerminalNode GRAMS() { return getToken(UONParser.GRAMS, 0); }
		public TerminalNode KILOGRAMS() { return getToken(UONParser.KILOGRAMS, 0); }
		public MassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mass; }
	}

	public final MassContext mass() throws RecognitionException {
		MassContext _localctx = new MassContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_mass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			_la = _input.LA(1);
			if ( !(_la==GRAMS || _la==KILOGRAMS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimeContext extends ParserRuleContext {
		public TerminalNode SECOND() { return getToken(UONParser.SECOND, 0); }
		public TerminalNode MINUTE() { return getToken(UONParser.MINUTE, 0); }
		public TimeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_time; }
	}

	public final TimeContext time() throws RecognitionException {
		TimeContext _localctx = new TimeContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_time);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			_la = _input.LA(1);
			if ( !(_la==SECOND || _la==MINUTE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemperatureContext extends ParserRuleContext {
		public TerminalNode CELSIUS() { return getToken(UONParser.CELSIUS, 0); }
		public TerminalNode KELVIN() { return getToken(UONParser.KELVIN, 0); }
		public TemperatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_temperature; }
	}

	public final TemperatureContext temperature() throws RecognitionException {
		TemperatureContext _localctx = new TemperatureContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_temperature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			_la = _input.LA(1);
			if ( !(_la==CELSIUS || _la==KELVIN) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode UNQUOTED_STRING() { return getToken(UONParser.UNQUOTED_STRING, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(UNQUOTED_STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Root_valueContext extends ParserRuleContext {
		public Json_collectionContext json_collection() {
			return getRuleContext(Json_collectionContext.class,0);
		}
		public Yaml_seqContext yaml_seq() {
			return getRuleContext(Yaml_seqContext.class,0);
		}
		public SchemaContext schema() {
			return getRuleContext(SchemaContext.class,0);
		}
		public Root_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root_value; }
	}

	public final Root_valueContext root_value() throws RecognitionException {
		Root_valueContext _localctx = new Root_valueContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_root_value);
		try {
			setState(300);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(297);
				json_collection();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(298);
				yaml_seq();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(299);
				schema();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Json_valueContext extends ParserRuleContext {
		public Json_mapContext json_map() {
			return getRuleContext(Json_mapContext.class,0);
		}
		public Json_seqContext json_seq() {
			return getRuleContext(Json_seqContext.class,0);
		}
		public ScalarContext scalar() {
			return getRuleContext(ScalarContext.class,0);
		}
		public Json_user_typeContext json_user_type() {
			return getRuleContext(Json_user_typeContext.class,0);
		}
		public NullContext null() {
			return getRuleContext(NullContext.class,0);
		}
		public Json_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_json_value; }
	}

	public final Json_valueContext json_value() throws RecognitionException {
		Json_valueContext _localctx = new Json_valueContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_json_value);
		try {
			setState(307);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_C_BRA:
			case MAPPING_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(302);
				json_map();
				}
				break;
			case OPEN_S_BRA:
			case SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(303);
				json_seq();
				}
				break;
			case QUOTED_STRING:
			case STR_TYPE:
			case BOOL_TYPE:
			case URL_TYPE:
			case FLOAT_TYPE:
			case FLOAT_128_TYPE:
			case FLOAT_64_TYPE:
			case FLOAT_32_TYPE:
			case INT_TYPE:
			case INT_128_TYPE:
			case INT_64_TYPE:
			case INT_32_TYPE:
			case UINT_TYPE:
			case UINT_128_TYPE:
			case UINT_64_TYPE:
			case UINT_32_TYPE:
			case UNQUOTED_STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(304);
				scalar();
				}
				break;
			case CT:
				enterOuterAlt(_localctx, 4);
				{
				setState(305);
				json_user_type();
				}
				break;
			case T__14:
			case T__15:
			case T__16:
				enterOuterAlt(_localctx, 5);
				{
				setState(306);
				null();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Yaml_valueContext extends ParserRuleContext {
		public ScalarContext scalar() {
			return getRuleContext(ScalarContext.class,0);
		}
		public List<TerminalNode> NEWLINE2() { return getTokens(UONParser.NEWLINE2); }
		public TerminalNode NEWLINE2(int i) {
			return getToken(UONParser.NEWLINE2, i);
		}
		public Yaml_collection_nestedContext yaml_collection_nested() {
			return getRuleContext(Yaml_collection_nestedContext.class,0);
		}
		public Yaml_user_typeContext yaml_user_type() {
			return getRuleContext(Yaml_user_typeContext.class,0);
		}
		public NullContext null() {
			return getRuleContext(NullContext.class,0);
		}
		public Yaml_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yaml_value; }
	}

	public final Yaml_valueContext yaml_value() throws RecognitionException {
		Yaml_valueContext _localctx = new Yaml_valueContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_yaml_value);
		int _la;
		try {
			setState(319);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(310);
				scalar();
				setState(312); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(311);
					match(NEWLINE2);
					}
					}
					setState(314); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==NEWLINE2 );
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(316);
				yaml_collection_nested();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(317);
				yaml_user_type();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(318);
				null();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Number_typeContext extends ParserRuleContext {
		public TerminalNode FLOAT_128_TYPE() { return getToken(UONParser.FLOAT_128_TYPE, 0); }
		public TerminalNode FLOAT_64_TYPE() { return getToken(UONParser.FLOAT_64_TYPE, 0); }
		public TerminalNode FLOAT_32_TYPE() { return getToken(UONParser.FLOAT_32_TYPE, 0); }
		public TerminalNode INT_128_TYPE() { return getToken(UONParser.INT_128_TYPE, 0); }
		public TerminalNode INT_64_TYPE() { return getToken(UONParser.INT_64_TYPE, 0); }
		public TerminalNode INT_32_TYPE() { return getToken(UONParser.INT_32_TYPE, 0); }
		public TerminalNode UINT_128_TYPE() { return getToken(UONParser.UINT_128_TYPE, 0); }
		public TerminalNode UINT_64_TYPE() { return getToken(UONParser.UINT_64_TYPE, 0); }
		public TerminalNode UINT_32_TYPE() { return getToken(UONParser.UINT_32_TYPE, 0); }
		public TerminalNode FLOAT_TYPE() { return getToken(UONParser.FLOAT_TYPE, 0); }
		public TerminalNode INT_TYPE() { return getToken(UONParser.INT_TYPE, 0); }
		public TerminalNode UINT_TYPE() { return getToken(UONParser.UINT_TYPE, 0); }
		public Number_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_type; }
	}

	public final Number_typeContext number_type() throws RecognitionException {
		Number_typeContext _localctx = new Number_typeContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_number_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FLOAT_TYPE) | (1L << FLOAT_128_TYPE) | (1L << FLOAT_64_TYPE) | (1L << FLOAT_32_TYPE) | (1L << INT_TYPE) | (1L << INT_128_TYPE) | (1L << INT_64_TYPE) | (1L << INT_32_TYPE) | (1L << UINT_TYPE) | (1L << UINT_128_TYPE) | (1L << UINT_64_TYPE) | (1L << UINT_32_TYPE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SchemaContext extends ParserRuleContext {
		public Custom_typeContext custom_type() {
			return getRuleContext(Custom_typeContext.class,0);
		}
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public TerminalNode SCHEMA_TYPE() { return getToken(UONParser.SCHEMA_TYPE, 0); }
		public TerminalNode OPEN_C_BRA() { return getToken(UONParser.OPEN_C_BRA, 0); }
		public TerminalNode CLOSE_C_BRA() { return getToken(UONParser.CLOSE_C_BRA, 0); }
		public Schema_presentationsContext schema_presentations() {
			return getRuleContext(Schema_presentationsContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public SchemaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_schema; }
	}

	public final SchemaContext schema() throws RecognitionException {
		SchemaContext _localctx = new SchemaContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_schema);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			custom_type();
			setState(324);
			match(COLON);
			setState(325);
			match(SCHEMA_TYPE);
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(326);
				schema_presentations();
				}
			}

			setState(329);
			match(OPEN_C_BRA);
			setState(331);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUOTED_STRING || _la==UNQUOTED_STRING) {
				{
				setState(330);
				attributes();
				}
			}

			setState(333);
			match(CLOSE_C_BRA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributesContext extends ParserRuleContext {
		public List<AttributeContext> attribute() {
			return getRuleContexts(AttributeContext.class);
		}
		public AttributeContext attribute(int i) {
			return getRuleContext(AttributeContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public AttributesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributes; }
	}

	public final AttributesContext attributes() throws RecognitionException {
		AttributesContext _localctx = new AttributesContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_attributes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			attribute();
			setState(340);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(336);
				match(COMMA);
				setState(337);
				attribute();
				}
				}
				setState(342);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributeContext extends ParserRuleContext {
		public Pair_keyContext pair_key() {
			return getRuleContext(Pair_keyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public Validation_propertiesContext validation_properties() {
			return getRuleContext(Validation_propertiesContext.class,0);
		}
		public AttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute; }
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			pair_key();
			setState(344);
			match(COLON);
			setState(345);
			validation_properties();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Schema_presentationsContext extends ParserRuleContext {
		public TerminalNode OPEN_PAR() { return getToken(UONParser.OPEN_PAR, 0); }
		public TerminalNode CLOSE_PAR() { return getToken(UONParser.CLOSE_PAR, 0); }
		public List<Schema_presentationContext> schema_presentation() {
			return getRuleContexts(Schema_presentationContext.class);
		}
		public Schema_presentationContext schema_presentation(int i) {
			return getRuleContext(Schema_presentationContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public Schema_presentationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_schema_presentations; }
	}

	public final Schema_presentationsContext schema_presentations() throws RecognitionException {
		Schema_presentationsContext _localctx = new Schema_presentationsContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_schema_presentations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			match(OPEN_PAR);
			setState(356);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__2) | (1L << T__3))) != 0)) {
				{
				setState(348);
				schema_presentation();
				setState(353);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(349);
					match(COMMA);
					setState(350);
					schema_presentation();
					}
					}
					setState(355);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(358);
			match(CLOSE_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Schema_presentationContext extends ParserRuleContext {
		public Schema_nameContext schema_name() {
			return getRuleContext(Schema_nameContext.class,0);
		}
		public Schema_uuidContext schema_uuid() {
			return getRuleContext(Schema_uuidContext.class,0);
		}
		public DescriptionContext description() {
			return getRuleContext(DescriptionContext.class,0);
		}
		public Schema_presentationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_schema_presentation; }
	}

	public final Schema_presentationContext schema_presentation() throws RecognitionException {
		Schema_presentationContext _localctx = new Schema_presentationContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_schema_presentation);
		try {
			setState(363);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				enterOuterAlt(_localctx, 1);
				{
				setState(360);
				schema_name();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(361);
				schema_uuid();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 3);
				{
				setState(362);
				description();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Schema_nameContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public Schema_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_schema_name; }
	}

	public final Schema_nameContext schema_name() throws RecognitionException {
		Schema_nameContext _localctx = new Schema_nameContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_schema_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
			match(T__2);
			setState(366);
			match(COLON);
			setState(367);
			string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Schema_uuidContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public UrlContext url() {
			return getRuleContext(UrlContext.class,0);
		}
		public Schema_uuidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_schema_uuid; }
	}

	public final Schema_uuidContext schema_uuid() throws RecognitionException {
		Schema_uuidContext _localctx = new Schema_uuidContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_schema_uuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			match(T__3);
			setState(370);
			match(COLON);
			setState(371);
			url();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Validation_propertiesContext extends ParserRuleContext {
		public String_validationContext string_validation() {
			return getRuleContext(String_validationContext.class,0);
		}
		public Number_validationContext number_validation() {
			return getRuleContext(Number_validationContext.class,0);
		}
		public Boolean_validationContext boolean_validation() {
			return getRuleContext(Boolean_validationContext.class,0);
		}
		public Url_validationContext url_validation() {
			return getRuleContext(Url_validationContext.class,0);
		}
		public Validation_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_validation_properties; }
	}

	public final Validation_propertiesContext validation_properties() throws RecognitionException {
		Validation_propertiesContext _localctx = new Validation_propertiesContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_validation_properties);
		try {
			setState(377);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STR_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(373);
				string_validation();
				}
				break;
			case FLOAT_TYPE:
			case INT_TYPE:
			case UINT_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(374);
				number_validation();
				}
				break;
			case BOOL_TYPE:
				enterOuterAlt(_localctx, 3);
				{
				setState(375);
				boolean_validation();
				}
				break;
			case URL_TYPE:
				enterOuterAlt(_localctx, 4);
				{
				setState(376);
				url_validation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class String_validationContext extends ParserRuleContext {
		public TerminalNode STR_TYPE() { return getToken(UONParser.STR_TYPE, 0); }
		public String_propertiesContext string_properties() {
			return getRuleContext(String_propertiesContext.class,0);
		}
		public String_validationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_validation; }
	}

	public final String_validationContext string_validation() throws RecognitionException {
		String_validationContext _localctx = new String_validationContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_string_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(STR_TYPE);
			setState(381);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(380);
				string_properties();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class String_propertiesContext extends ParserRuleContext {
		public TerminalNode OPEN_PAR() { return getToken(UONParser.OPEN_PAR, 0); }
		public TerminalNode CLOSE_PAR() { return getToken(UONParser.CLOSE_PAR, 0); }
		public List<String_propertyContext> string_property() {
			return getRuleContexts(String_propertyContext.class);
		}
		public String_propertyContext string_property(int i) {
			return getRuleContext(String_propertyContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public String_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_properties; }
	}

	public final String_propertiesContext string_properties() throws RecognitionException {
		String_propertiesContext _localctx = new String_propertiesContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_string_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			match(OPEN_PAR);
			setState(392);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4 || _la==MINUTE) {
				{
				setState(384);
				string_property();
				setState(389);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(385);
					match(COMMA);
					setState(386);
					string_property();
					}
					}
					setState(391);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(394);
			match(CLOSE_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class String_propertyContext extends ParserRuleContext {
		public String_maxContext string_max() {
			return getRuleContext(String_maxContext.class,0);
		}
		public String_minContext string_min() {
			return getRuleContext(String_minContext.class,0);
		}
		public String_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_property; }
	}

	public final String_propertyContext string_property() throws RecognitionException {
		String_propertyContext _localctx = new String_propertyContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_string_property);
		try {
			setState(398);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				enterOuterAlt(_localctx, 1);
				{
				setState(396);
				string_max();
				}
				break;
			case MINUTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(397);
				string_min();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class String_maxContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public String_maxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_max; }
	}

	public final String_maxContext string_max() throws RecognitionException {
		String_maxContext _localctx = new String_maxContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_string_max);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
			match(T__4);
			setState(401);
			match(COLON);
			setState(402);
			string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class String_minContext extends ParserRuleContext {
		public TerminalNode MINUTE() { return getToken(UONParser.MINUTE, 0); }
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public String_minContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_min; }
	}

	public final String_minContext string_min() throws RecognitionException {
		String_minContext _localctx = new String_minContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_string_min);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
			match(MINUTE);
			setState(405);
			match(COLON);
			setState(406);
			string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Url_validationContext extends ParserRuleContext {
		public TerminalNode URL_TYPE() { return getToken(UONParser.URL_TYPE, 0); }
		public Url_validationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_url_validation; }
	}

	public final Url_validationContext url_validation() throws RecognitionException {
		Url_validationContext _localctx = new Url_validationContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_url_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			match(URL_TYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Boolean_validationContext extends ParserRuleContext {
		public TerminalNode BOOL_TYPE() { return getToken(UONParser.BOOL_TYPE, 0); }
		public Boolean_validationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolean_validation; }
	}

	public final Boolean_validationContext boolean_validation() throws RecognitionException {
		Boolean_validationContext _localctx = new Boolean_validationContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_boolean_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			match(BOOL_TYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Number_validationContext extends ParserRuleContext {
		public Number_validation_typeContext number_validation_type() {
			return getRuleContext(Number_validation_typeContext.class,0);
		}
		public Number_propertiesContext number_properties() {
			return getRuleContext(Number_propertiesContext.class,0);
		}
		public Number_validationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_validation; }
	}

	public final Number_validationContext number_validation() throws RecognitionException {
		Number_validationContext _localctx = new Number_validationContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_number_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			number_validation_type();
			setState(414);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(413);
				number_properties();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Number_propertiesContext extends ParserRuleContext {
		public TerminalNode OPEN_PAR() { return getToken(UONParser.OPEN_PAR, 0); }
		public TerminalNode CLOSE_PAR() { return getToken(UONParser.CLOSE_PAR, 0); }
		public List<Number_propertyContext> number_property() {
			return getRuleContexts(Number_propertyContext.class);
		}
		public Number_propertyContext number_property(int i) {
			return getRuleContext(Number_propertyContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public Number_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_properties; }
	}

	public final Number_propertiesContext number_properties() throws RecognitionException {
		Number_propertiesContext _localctx = new Number_propertiesContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_number_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
			match(OPEN_PAR);
			setState(425);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << T__5) | (1L << MINUTE))) != 0)) {
				{
				setState(417);
				number_property();
				setState(422);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(418);
					match(COMMA);
					setState(419);
					number_property();
					}
					}
					setState(424);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(427);
			match(CLOSE_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Number_propertyContext extends ParserRuleContext {
		public Number_maxContext number_max() {
			return getRuleContext(Number_maxContext.class,0);
		}
		public Number_minContext number_min() {
			return getRuleContext(Number_minContext.class,0);
		}
		public Quantity_validationContext quantity_validation() {
			return getRuleContext(Quantity_validationContext.class,0);
		}
		public Number_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_property; }
	}

	public final Number_propertyContext number_property() throws RecognitionException {
		Number_propertyContext _localctx = new Number_propertyContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_number_property);
		try {
			setState(432);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				enterOuterAlt(_localctx, 1);
				{
				setState(429);
				number_max();
				}
				break;
			case MINUTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(430);
				number_min();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 3);
				{
				setState(431);
				quantity_validation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Number_maxContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public Number_maxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_max; }
	}

	public final Number_maxContext number_max() throws RecognitionException {
		Number_maxContext _localctx = new Number_maxContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_number_max);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			match(T__4);
			setState(435);
			match(COLON);
			setState(436);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Number_minContext extends ParserRuleContext {
		public TerminalNode MINUTE() { return getToken(UONParser.MINUTE, 0); }
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public Number_minContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_min; }
	}

	public final Number_minContext number_min() throws RecognitionException {
		Number_minContext _localctx = new Number_minContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_number_min);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
			match(MINUTE);
			setState(439);
			match(COLON);
			setState(440);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Number_validation_typeContext extends ParserRuleContext {
		public TerminalNode FLOAT_TYPE() { return getToken(UONParser.FLOAT_TYPE, 0); }
		public TerminalNode INT_TYPE() { return getToken(UONParser.INT_TYPE, 0); }
		public TerminalNode UINT_TYPE() { return getToken(UONParser.UINT_TYPE, 0); }
		public Number_validation_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_validation_type; }
	}

	public final Number_validation_typeContext number_validation_type() throws RecognitionException {
		Number_validation_typeContext _localctx = new Number_validation_typeContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_number_validation_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(442);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FLOAT_TYPE) | (1L << INT_TYPE) | (1L << UINT_TYPE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Quantity_validationContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public Quantity_validation_typesContext quantity_validation_types() {
			return getRuleContext(Quantity_validation_typesContext.class,0);
		}
		public Quantity_validationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantity_validation; }
	}

	public final Quantity_validationContext quantity_validation() throws RecognitionException {
		Quantity_validationContext _localctx = new Quantity_validationContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_quantity_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			match(T__5);
			setState(445);
			match(COLON);
			setState(446);
			quantity_validation_types();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Quantity_validation_typesContext extends ParserRuleContext {
		public Quantity_validation_typesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantity_validation_types; }
	}

	public final Quantity_validation_typesContext quantity_validation_types() throws RecognitionException {
		Quantity_validation_typesContext _localctx = new Quantity_validation_typesContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_quantity_validation_types);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(448);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanContext extends ParserRuleContext {
		public TrueContext true() {
			return getRuleContext(TrueContext.class,0);
		}
		public FalseContext false() {
			return getRuleContext(FalseContext.class,0);
		}
		public BooleanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolean; }
	}

	public final BooleanContext boolean() throws RecognitionException {
		BooleanContext _localctx = new BooleanContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_boolean);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(452);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
			case T__11:
				{
				setState(450);
				true();
				}
				break;
			case T__12:
			case T__13:
				{
				setState(451);
				false();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrueContext extends ParserRuleContext {
		public TrueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_true; }
	}

	public final TrueContext true() throws RecognitionException {
		TrueContext _localctx = new TrueContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_true);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			_la = _input.LA(1);
			if ( !(_la==T__10 || _la==T__11) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FalseContext extends ParserRuleContext {
		public FalseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_false; }
	}

	public final FalseContext false() throws RecognitionException {
		FalseContext _localctx = new FalseContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_false);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(456);
			_la = _input.LA(1);
			if ( !(_la==T__12 || _la==T__13) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NullContext extends ParserRuleContext {
		public NullContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_null; }
	}

	public final NullContext null() throws RecognitionException {
		NullContext _localctx = new NullContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_null);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(458);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__15) | (1L << T__16))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3=\u01cf\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\3\2\7\2\u0084\n\2\f\2\16\2\u0087\13\2\3\2\3\2"+
		"\3\3\3\3\5\3\u008d\n\3\3\4\5\4\u0090\n\4\3\4\3\4\3\4\3\4\7\4\u0096\n\4"+
		"\f\4\16\4\u0099\13\4\5\4\u009b\n\4\3\4\3\4\3\5\5\5\u00a0\n\5\3\5\3\5\3"+
		"\5\3\5\7\5\u00a6\n\5\f\5\16\5\u00a9\13\5\5\5\u00ab\n\5\3\5\3\5\3\6\3\6"+
		"\5\6\u00b1\n\6\3\7\3\7\3\7\3\7\3\7\3\b\5\b\u00b9\n\b\3\b\6\b\u00bc\n\b"+
		"\r\b\16\b\u00bd\3\t\5\t\u00c1\n\t\3\t\6\t\u00c4\n\t\r\t\16\t\u00c5\3\n"+
		"\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\5\f\u00d1\n\f\3\r\3\r\3\r\3\r\3\16"+
		"\3\16\3\16\3\16\7\16\u00db\n\16\f\16\16\16\u00de\13\16\5\16\u00e0\n\16"+
		"\3\16\3\16\3\17\3\17\5\17\u00e6\n\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\3\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\26\3\26"+
		"\3\26\3\26\5\26\u00ff\n\26\3\27\5\27\u0102\n\27\3\27\3\27\3\30\3\30\3"+
		"\30\3\30\3\31\5\31\u010b\n\31\3\31\3\31\3\32\3\32\5\32\u0111\n\32\3\33"+
		"\3\33\5\33\u0115\n\33\3\34\3\34\3\34\5\34\u011a\n\34\3\35\3\35\3\35\3"+
		"\35\5\35\u0120\n\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3#\5"+
		"#\u012f\n#\3$\3$\3$\3$\3$\5$\u0136\n$\3%\3%\3%\6%\u013b\n%\r%\16%\u013c"+
		"\3%\3%\3%\5%\u0142\n%\3&\3&\3\'\3\'\3\'\3\'\5\'\u014a\n\'\3\'\3\'\5\'"+
		"\u014e\n\'\3\'\3\'\3(\3(\3(\7(\u0155\n(\f(\16(\u0158\13(\3)\3)\3)\3)\3"+
		"*\3*\3*\3*\7*\u0162\n*\f*\16*\u0165\13*\5*\u0167\n*\3*\3*\3+\3+\3+\5+"+
		"\u016e\n+\3,\3,\3,\3,\3-\3-\3-\3-\3.\3.\3.\3.\5.\u017c\n.\3/\3/\5/\u0180"+
		"\n/\3\60\3\60\3\60\3\60\7\60\u0186\n\60\f\60\16\60\u0189\13\60\5\60\u018b"+
		"\n\60\3\60\3\60\3\61\3\61\5\61\u0191\n\61\3\62\3\62\3\62\3\62\3\63\3\63"+
		"\3\63\3\63\3\64\3\64\3\65\3\65\3\66\3\66\5\66\u01a1\n\66\3\67\3\67\3\67"+
		"\3\67\7\67\u01a7\n\67\f\67\16\67\u01aa\13\67\5\67\u01ac\n\67\3\67\3\67"+
		"\38\38\38\58\u01b3\n8\39\39\39\39\3:\3:\3:\3:\3;\3;\3<\3<\3<\3<\3=\3="+
		"\3>\3>\5>\u01c7\n>\3?\3?\3@\3@\3A\3A\3A\2\2B\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|"+
		"~\u0080\2\r\4\2\35\35--\3\2\25\26\3\2\27\30\3\2\31\32\3\2\33\34\3\2!,"+
		"\5\2!!%%))\3\2\t\f\3\2\r\16\3\2\17\20\3\2\21\23\2\u01c9\2\u0085\3\2\2"+
		"\2\4\u008c\3\2\2\2\6\u008f\3\2\2\2\b\u009f\3\2\2\2\n\u00b0\3\2\2\2\f\u00b2"+
		"\3\2\2\2\16\u00b8\3\2\2\2\20\u00c0\3\2\2\2\22\u00c7\3\2\2\2\24\u00ca\3"+
		"\2\2\2\26\u00ce\3\2\2\2\30\u00d2\3\2\2\2\32\u00d6\3\2\2\2\34\u00e5\3\2"+
		"\2\2\36\u00e7\3\2\2\2 \u00eb\3\2\2\2\"\u00ef\3\2\2\2$\u00f1\3\2\2\2&\u00f4"+
		"\3\2\2\2(\u00f7\3\2\2\2*\u00fe\3\2\2\2,\u0101\3\2\2\2.\u0105\3\2\2\2\60"+
		"\u010a\3\2\2\2\62\u010e\3\2\2\2\64\u0114\3\2\2\2\66\u0116\3\2\2\28\u011f"+
		"\3\2\2\2:\u0121\3\2\2\2<\u0123\3\2\2\2>\u0125\3\2\2\2@\u0127\3\2\2\2B"+
		"\u0129\3\2\2\2D\u012e\3\2\2\2F\u0135\3\2\2\2H\u0141\3\2\2\2J\u0143\3\2"+
		"\2\2L\u0145\3\2\2\2N\u0151\3\2\2\2P\u0159\3\2\2\2R\u015d\3\2\2\2T\u016d"+
		"\3\2\2\2V\u016f\3\2\2\2X\u0173\3\2\2\2Z\u017b\3\2\2\2\\\u017d\3\2\2\2"+
		"^\u0181\3\2\2\2`\u0190\3\2\2\2b\u0192\3\2\2\2d\u0196\3\2\2\2f\u019a\3"+
		"\2\2\2h\u019c\3\2\2\2j\u019e\3\2\2\2l\u01a2\3\2\2\2n\u01b2\3\2\2\2p\u01b4"+
		"\3\2\2\2r\u01b8\3\2\2\2t\u01bc\3\2\2\2v\u01be\3\2\2\2x\u01c2\3\2\2\2z"+
		"\u01c6\3\2\2\2|\u01c8\3\2\2\2~\u01ca\3\2\2\2\u0080\u01cc\3\2\2\2\u0082"+
		"\u0084\7/\2\2\u0083\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085\u0083\3\2"+
		"\2\2\u0085\u0086\3\2\2\2\u0086\u0088\3\2\2\2\u0087\u0085\3\2\2\2\u0088"+
		"\u0089\5D#\2\u0089\3\3\2\2\2\u008a\u008d\5\6\4\2\u008b\u008d\5\b\5\2\u008c"+
		"\u008a\3\2\2\2\u008c\u008b\3\2\2\2\u008d\5\3\2\2\2\u008e\u0090\78\2\2"+
		"\u008f\u008e\3\2\2\2\u008f\u0090\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u009a"+
		"\7\62\2\2\u0092\u0097\5\30\r\2\u0093\u0094\7\66\2\2\u0094\u0096\5\30\r"+
		"\2\u0095\u0093\3\2\2\2\u0096\u0099\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098"+
		"\3\2\2\2\u0098\u009b\3\2\2\2\u0099\u0097\3\2\2\2\u009a\u0092\3\2\2\2\u009a"+
		"\u009b\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u009d\7\63\2\2\u009d\7\3\2\2"+
		"\2\u009e\u00a0\79\2\2\u009f\u009e\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a1"+
		"\3\2\2\2\u00a1\u00aa\7\64\2\2\u00a2\u00a7\5F$\2\u00a3\u00a4\7\66\2\2\u00a4"+
		"\u00a6\5F$\2\u00a5\u00a3\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7\u00a5\3\2\2"+
		"\2\u00a7\u00a8\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7\3\2\2\2\u00aa\u00a2"+
		"\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\7\65\2\2"+
		"\u00ad\t\3\2\2\2\u00ae\u00b1\5\16\b\2\u00af\u00b1\5\20\t\2\u00b0\u00ae"+
		"\3\2\2\2\u00b0\u00af\3\2\2\2\u00b1\13\3\2\2\2\u00b2\u00b3\7/\2\2\u00b3"+
		"\u00b4\7<\2\2\u00b4\u00b5\5\n\6\2\u00b5\u00b6\7=\2\2\u00b6\r\3\2\2\2\u00b7"+
		"\u00b9\78\2\2\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\u00bb\3\2"+
		"\2\2\u00ba\u00bc\5\24\13\2\u00bb\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd"+
		"\u00bb\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\17\3\2\2\2\u00bf\u00c1\79\2\2"+
		"\u00c0\u00bf\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00c3\3\2\2\2\u00c2\u00c4"+
		"\5\22\n\2\u00c3\u00c2\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c3\3\2\2\2"+
		"\u00c5\u00c6\3\2\2\2\u00c6\21\3\2\2\2\u00c7\u00c8\7;\2\2\u00c8\u00c9\5"+
		"H%\2\u00c9\23\3\2\2\2\u00ca\u00cb\5\26\f\2\u00cb\u00cc\7\67\2\2\u00cc"+
		"\u00cd\5H%\2\u00cd\25\3\2\2\2\u00ce\u00d0\5\"\22\2\u00cf\u00d1\5\32\16"+
		"\2\u00d0\u00cf\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\27\3\2\2\2\u00d2\u00d3"+
		"\5\26\f\2\u00d3\u00d4\7\67\2\2\u00d4\u00d5\5F$\2\u00d5\31\3\2\2\2\u00d6"+
		"\u00df\7\60\2\2\u00d7\u00dc\5\34\17\2\u00d8\u00d9\7\66\2\2\u00d9\u00db"+
		"\5\34\17\2\u00da\u00d8\3\2\2\2\u00db\u00de\3\2\2\2\u00dc\u00da\3\2\2\2"+
		"\u00dc\u00dd\3\2\2\2\u00dd\u00e0\3\2\2\2\u00de\u00dc\3\2\2\2\u00df\u00d7"+
		"\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e2\7\61\2\2"+
		"\u00e2\33\3\2\2\2\u00e3\u00e6\5 \21\2\u00e4\u00e6\5\36\20\2\u00e5\u00e3"+
		"\3\2\2\2\u00e5\u00e4\3\2\2\2\u00e6\35\3\2\2\2\u00e7\u00e8\7\3\2\2\u00e8"+
		"\u00e9\7\67\2\2\u00e9\u00ea\5\"\22\2\u00ea\37\3\2\2\2\u00eb\u00ec\7\4"+
		"\2\2\u00ec\u00ed\7\67\2\2\u00ed\u00ee\5z>\2\u00ee!\3\2\2\2\u00ef\u00f0"+
		"\t\2\2\2\u00f0#\3\2\2\2\u00f1\u00f2\7\24\2\2\u00f2\u00f3\7-\2\2\u00f3"+
		"%\3\2\2\2\u00f4\u00f5\5$\23\2\u00f5\u00f6\5\6\4\2\u00f6\'\3\2\2\2\u00f7"+
		"\u00f8\5$\23\2\u00f8\u00f9\5\16\b\2\u00f9)\3\2\2\2\u00fa\u00ff\5\62\32"+
		"\2\u00fb\u00ff\5,\27\2\u00fc\u00ff\5.\30\2\u00fd\u00ff\5\60\31\2\u00fe"+
		"\u00fa\3\2\2\2\u00fe\u00fb\3\2\2\2\u00fe\u00fc\3\2\2\2\u00fe\u00fd\3\2"+
		"\2\2\u00ff+\3\2\2\2\u0100\u0102\7\36\2\2\u0101\u0100\3\2\2\2\u0101\u0102"+
		"\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0104\5\"\22\2\u0104-\3\2\2\2\u0105"+
		"\u0106\7\37\2\2\u0106\u0107\7<\2\2\u0107\u0108\5z>\2\u0108/\3\2\2\2\u0109"+
		"\u010b\7 \2\2\u010a\u0109\3\2\2\2\u010a\u010b\3\2\2\2\u010b\u010c\3\2"+
		"\2\2\u010c\u010d\5\"\22\2\u010d\61\3\2\2\2\u010e\u0110\5\64\33\2\u010f"+
		"\u0111\58\35\2\u0110\u010f\3\2\2\2\u0110\u0111\3\2\2\2\u0111\63\3\2\2"+
		"\2\u0112\u0115\5\66\34\2\u0113\u0115\5B\"\2\u0114\u0112\3\2\2\2\u0114"+
		"\u0113\3\2\2\2\u0115\65\3\2\2\2\u0116\u0119\5J&\2\u0117\u011a\5\66\34"+
		"\2\u0118\u011a\5B\"\2\u0119\u0117\3\2\2\2\u0119\u0118\3\2\2\2\u011a\67"+
		"\3\2\2\2\u011b\u0120\5:\36\2\u011c\u0120\5<\37\2\u011d\u0120\5> \2\u011e"+
		"\u0120\5@!\2\u011f\u011b\3\2\2\2\u011f\u011c\3\2\2\2\u011f\u011d\3\2\2"+
		"\2\u011f\u011e\3\2\2\2\u01209\3\2\2\2\u0121\u0122\t\3\2\2\u0122;\3\2\2"+
		"\2\u0123\u0124\t\4\2\2\u0124=\3\2\2\2\u0125\u0126\t\5\2\2\u0126?\3\2\2"+
		"\2\u0127\u0128\t\6\2\2\u0128A\3\2\2\2\u0129\u012a\7-\2\2\u012aC\3\2\2"+
		"\2\u012b\u012f\5\4\3\2\u012c\u012f\5\20\t\2\u012d\u012f\5L\'\2\u012e\u012b"+
		"\3\2\2\2\u012e\u012c\3\2\2\2\u012e\u012d\3\2\2\2\u012fE\3\2\2\2\u0130"+
		"\u0136\5\6\4\2\u0131\u0136\5\b\5\2\u0132\u0136\5*\26\2\u0133\u0136\5&"+
		"\24\2\u0134\u0136\5\u0080A\2\u0135\u0130\3\2\2\2\u0135\u0131\3\2\2\2\u0135"+
		"\u0132\3\2\2\2\u0135\u0133\3\2\2\2\u0135\u0134\3\2\2\2\u0136G\3\2\2\2"+
		"\u0137\u0142\3\2\2\2\u0138\u013a\5*\26\2\u0139\u013b\7/\2\2\u013a\u0139"+
		"\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013a\3\2\2\2\u013c\u013d\3\2\2\2\u013d"+
		"\u0142\3\2\2\2\u013e\u0142\5\f\7\2\u013f\u0142\5(\25\2\u0140\u0142\5\u0080"+
		"A\2\u0141\u0137\3\2\2\2\u0141\u0138\3\2\2\2\u0141\u013e\3\2\2\2\u0141"+
		"\u013f\3\2\2\2\u0141\u0140\3\2\2\2\u0142I\3\2\2\2\u0143\u0144\t\7\2\2"+
		"\u0144K\3\2\2\2\u0145\u0146\5$\23\2\u0146\u0147\7\67\2\2\u0147\u0149\7"+
		":\2\2\u0148\u014a\5R*\2\u0149\u0148\3\2\2\2\u0149\u014a\3\2\2\2\u014a"+
		"\u014b\3\2\2\2\u014b\u014d\7\62\2\2\u014c\u014e\5N(\2\u014d\u014c\3\2"+
		"\2\2\u014d\u014e\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0150\7\63\2\2\u0150"+
		"M\3\2\2\2\u0151\u0156\5P)\2\u0152\u0153\7\66\2\2\u0153\u0155\5P)\2\u0154"+
		"\u0152\3\2\2\2\u0155\u0158\3\2\2\2\u0156\u0154\3\2\2\2\u0156\u0157\3\2"+
		"\2\2\u0157O\3\2\2\2\u0158\u0156\3\2\2\2\u0159\u015a\5\26\f\2\u015a\u015b"+
		"\7\67\2\2\u015b\u015c\5Z.\2\u015cQ\3\2\2\2\u015d\u0166\7\60\2\2\u015e"+
		"\u0163\5T+\2\u015f\u0160\7\66\2\2\u0160\u0162\5T+\2\u0161\u015f\3\2\2"+
		"\2\u0162\u0165\3\2\2\2\u0163\u0161\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0167"+
		"\3\2\2\2\u0165\u0163\3\2\2\2\u0166\u015e\3\2\2\2\u0166\u0167\3\2\2\2\u0167"+
		"\u0168\3\2\2\2\u0168\u0169\7\61\2\2\u0169S\3\2\2\2\u016a\u016e\5V,\2\u016b"+
		"\u016e\5X-\2\u016c\u016e\5\36\20\2\u016d\u016a\3\2\2\2\u016d\u016b\3\2"+
		"\2\2\u016d\u016c\3\2\2\2\u016eU\3\2\2\2\u016f\u0170\7\5\2\2\u0170\u0171"+
		"\7\67\2\2\u0171\u0172\5\"\22\2\u0172W\3\2\2\2\u0173\u0174\7\6\2\2\u0174"+
		"\u0175\7\67\2\2\u0175\u0176\5\60\31\2\u0176Y\3\2\2\2\u0177\u017c\5\\/"+
		"\2\u0178\u017c\5j\66\2\u0179\u017c\5h\65\2\u017a\u017c\5f\64\2\u017b\u0177"+
		"\3\2\2\2\u017b\u0178\3\2\2\2\u017b\u0179\3\2\2\2\u017b\u017a\3\2\2\2\u017c"+
		"[\3\2\2\2\u017d\u017f\7\36\2\2\u017e\u0180\5^\60\2\u017f\u017e\3\2\2\2"+
		"\u017f\u0180\3\2\2\2\u0180]\3\2\2\2\u0181\u018a\7\60\2\2\u0182\u0187\5"+
		"`\61\2\u0183\u0184\7\66\2\2\u0184\u0186\5`\61\2\u0185\u0183\3\2\2\2\u0186"+
		"\u0189\3\2\2\2\u0187\u0185\3\2\2\2\u0187\u0188\3\2\2\2\u0188\u018b\3\2"+
		"\2\2\u0189\u0187\3\2\2\2\u018a\u0182\3\2\2\2\u018a\u018b\3\2\2\2\u018b"+
		"\u018c\3\2\2\2\u018c\u018d\7\61\2\2\u018d_\3\2\2\2\u018e\u0191\5b\62\2"+
		"\u018f\u0191\5d\63\2\u0190\u018e\3\2\2\2\u0190\u018f\3\2\2\2\u0191a\3"+
		"\2\2\2\u0192\u0193\7\7\2\2\u0193\u0194\7\67\2\2\u0194\u0195\5\"\22\2\u0195"+
		"c\3\2\2\2\u0196\u0197\7\32\2\2\u0197\u0198\7\67\2\2\u0198\u0199\5\"\22"+
		"\2\u0199e\3\2\2\2\u019a\u019b\7 \2\2\u019bg\3\2\2\2\u019c\u019d\7\37\2"+
		"\2\u019di\3\2\2\2\u019e\u01a0\5t;\2\u019f\u01a1\5l\67\2\u01a0\u019f\3"+
		"\2\2\2\u01a0\u01a1\3\2\2\2\u01a1k\3\2\2\2\u01a2\u01ab\7\60\2\2\u01a3\u01a8"+
		"\5n8\2\u01a4\u01a5\7\66\2\2\u01a5\u01a7\5n8\2\u01a6\u01a4\3\2\2\2\u01a7"+
		"\u01aa\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a8\u01a9\3\2\2\2\u01a9\u01ac\3\2"+
		"\2\2\u01aa\u01a8\3\2\2\2\u01ab\u01a3\3\2\2\2\u01ab\u01ac\3\2\2\2\u01ac"+
		"\u01ad\3\2\2\2\u01ad\u01ae\7\61\2\2\u01aem\3\2\2\2\u01af\u01b3\5p9\2\u01b0"+
		"\u01b3\5r:\2\u01b1\u01b3\5v<\2\u01b2\u01af\3\2\2\2\u01b2\u01b0\3\2\2\2"+
		"\u01b2\u01b1\3\2\2\2\u01b3o\3\2\2\2\u01b4\u01b5\7\7\2\2\u01b5\u01b6\7"+
		"\67\2\2\u01b6\u01b7\5B\"\2\u01b7q\3\2\2\2\u01b8\u01b9\7\32\2\2\u01b9\u01ba"+
		"\7\67\2\2\u01ba\u01bb\5B\"\2\u01bbs\3\2\2\2\u01bc\u01bd\t\b\2\2\u01bd"+
		"u\3\2\2\2\u01be\u01bf\7\b\2\2\u01bf\u01c0\7\67\2\2\u01c0\u01c1\5x=\2\u01c1"+
		"w\3\2\2\2\u01c2\u01c3\t\t\2\2\u01c3y\3\2\2\2\u01c4\u01c7\5|?\2\u01c5\u01c7"+
		"\5~@\2\u01c6\u01c4\3\2\2\2\u01c6\u01c5\3\2\2\2\u01c7{\3\2\2\2\u01c8\u01c9"+
		"\t\n\2\2\u01c9}\3\2\2\2\u01ca\u01cb\t\13\2\2\u01cb\177\3\2\2\2\u01cc\u01cd"+
		"\t\f\2\2\u01cd\u0081\3\2\2\2.\u0085\u008c\u008f\u0097\u009a\u009f\u00a7"+
		"\u00aa\u00b0\u00b8\u00bd\u00c0\u00c5\u00d0\u00dc\u00df\u00e5\u00fe\u0101"+
		"\u010a\u0110\u0114\u0119\u011f\u012e\u0135\u013c\u0141\u0149\u014d\u0156"+
		"\u0163\u0166\u016d\u017b\u017f\u0187\u018a\u0190\u01a0\u01a8\u01ab\u01b2"+
		"\u01c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}