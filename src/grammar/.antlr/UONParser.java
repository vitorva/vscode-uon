// Generated from c:\Heig-VD\2021-22\Sem2\TB\project\vscode-uon\src\grammar\UON.g4 by ANTLR 4.9.2
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
		METERS=10, KILOMETERS=11, GRAMS=12, KILOGRAMS=13, SECOND=14, MINUTE=15, 
		CELSIUS=16, AMPERE=17, KELVIN=18, MOLE=19, CANDELA=20, CT=21, STR_TYPE=22, 
		BOOL_TYPE=23, URL_TYPE=24, FLOAT_TYPE=25, FLOAT_128_TYPE=26, FLOAT_64_TYPE=27, 
		FLOAT_32_TYPE=28, INT_TYPE=29, INT_128_TYPE=30, INT_64_TYPE=31, INT_32_TYPE=32, 
		UINT_TYPE=33, UINT_128_TYPE=34, UINT_64_TYPE=35, UINT_32_TYPE=36, MAX=37, 
		MIN=38, LENGTH=39, MASS=40, TEMPERATURE=41, TIME=42, NAME=43, UUID=44, 
		DESCRIPTION=45, OPTIONAL=46, COMMENT=47, QUOTED_STRING=48, NUMBER=49, 
		NUMERIC_LITERAL=50, SYMBOL=51, UNQUOTED_STRING=52, IDENTIFIER=53, WS=54, 
		LINE_COMMENT=55, OPEN_PAR=56, CLOSE_PAR=57, OPEN_C_BRA=58, CLOSE_C_BRA=59, 
		OPEN_S_BRA=60, CLOSE_S_BRA=61, COMMA=62, COLON=63, MAPPING_TYPE=64, ORDERED_MAPPING_TYPE=65, 
		SEQUENCE_TYPE=66, ORDERED_SEQUENCE_TYPE=67, SCHEMA_TYPE=68;
	public static final int
		RULE_uon = 0, RULE_root_value = 1, RULE_json_collection = 2, RULE_json_map = 3, 
		RULE_json_seq = 4, RULE_json_user_type = 5, RULE_json_value = 6, RULE_pair_key = 7, 
		RULE_json_pair = 8, RULE_presentation_properties = 9, RULE_presentation_property = 10, 
		RULE_description = 11, RULE_optional = 12, RULE_types_properties = 13, 
		RULE_types_propertie = 14, RULE_comment = 15, RULE_number_presentation = 16, 
		RULE_number_presentation_properties = 17, RULE_number_presentation_propertie = 18, 
		RULE_unit = 19, RULE_schema = 20, RULE_attributes = 21, RULE_attribute = 22, 
		RULE_schema_presentations = 23, RULE_schema_presentation = 24, RULE_schema_name = 25, 
		RULE_schema_uuid = 26, RULE_validation_properties = 27, RULE_string_validation = 28, 
		RULE_string_properties = 29, RULE_string_property = 30, RULE_string_max = 31, 
		RULE_string_min = 32, RULE_url_validation = 33, RULE_boolean_validation = 34, 
		RULE_number_validation = 35, RULE_number_properties = 36, RULE_number_property = 37, 
		RULE_number_max = 38, RULE_number_min = 39, RULE_number_validation_type = 40, 
		RULE_quantity_validation = 41, RULE_quantity_validation_types = 42, RULE_scalar = 43, 
		RULE_quantity_scalar = 44, RULE_numeric_scalar = 45, RULE_coercible_numeric_scalar = 46, 
		RULE_string_scalar = 47, RULE_boolean_scalar = 48, RULE_url = 49, RULE_quantity = 50, 
		RULE_length = 51, RULE_mass = 52, RULE_time = 53, RULE_temperature = 54, 
		RULE_number_type = 55, RULE_boolean = 56, RULE_true = 57, RULE_false = 58, 
		RULE_null = 59, RULE_custom_type = 60, RULE_string = 61, RULE_literal = 62, 
		RULE_number = 63;
	private static String[] makeRuleNames() {
		return new String[] {
			"uon", "root_value", "json_collection", "json_map", "json_seq", "json_user_type", 
			"json_value", "pair_key", "json_pair", "presentation_properties", "presentation_property", 
			"description", "optional", "types_properties", "types_propertie", "comment", 
			"number_presentation", "number_presentation_properties", "number_presentation_propertie", 
			"unit", "schema", "attributes", "attribute", "schema_presentations", 
			"schema_presentation", "schema_name", "schema_uuid", "validation_properties", 
			"string_validation", "string_properties", "string_property", "string_max", 
			"string_min", "url_validation", "boolean_validation", "number_validation", 
			"number_properties", "number_property", "number_max", "number_min", "number_validation_type", 
			"quantity_validation", "quantity_validation_types", "scalar", "quantity_scalar", 
			"numeric_scalar", "coercible_numeric_scalar", "string_scalar", "boolean_scalar", 
			"url", "quantity", "length", "mass", "time", "temperature", "number_type", 
			"boolean", "true", "false", "null", "custom_type", "string", "literal", 
			"number"
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
			null, null, null, null, null, "'('", "')'", "'{'", "'}'", "'['", "']'", 
			"','", "':'", "'!map'", "'!omap'", "'!seq'", "'!oseq'", "'!schema'"
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
			"NUMBER", "NUMERIC_LITERAL", "SYMBOL", "UNQUOTED_STRING", "IDENTIFIER", 
			"WS", "LINE_COMMENT", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", 
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
		public UonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uon; }
	}

	public final UonContext uon() throws RecognitionException {
		UonContext _localctx = new UonContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_uon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
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

	public static class Root_valueContext extends ParserRuleContext {
		public Json_collectionContext json_collection() {
			return getRuleContext(Json_collectionContext.class,0);
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
		enterRule(_localctx, 2, RULE_root_value);
		try {
			setState(132);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_C_BRA:
			case OPEN_S_BRA:
			case MAPPING_TYPE:
			case ORDERED_MAPPING_TYPE:
			case SEQUENCE_TYPE:
			case ORDERED_SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(130);
				json_collection();
				}
				break;
			case CT:
				enterOuterAlt(_localctx, 2);
				{
				setState(131);
				schema();
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
		enterRule(_localctx, 4, RULE_json_collection);
		try {
			setState(136);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_C_BRA:
			case MAPPING_TYPE:
			case ORDERED_MAPPING_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(134);
				json_map();
				}
				break;
			case OPEN_S_BRA:
			case SEQUENCE_TYPE:
			case ORDERED_SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(135);
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
		public List<Json_pairContext> json_pair() {
			return getRuleContexts(Json_pairContext.class);
		}
		public Json_pairContext json_pair(int i) {
			return getRuleContext(Json_pairContext.class,i);
		}
		public TerminalNode MAPPING_TYPE() { return getToken(UONParser.MAPPING_TYPE, 0); }
		public TerminalNode ORDERED_MAPPING_TYPE() { return getToken(UONParser.ORDERED_MAPPING_TYPE, 0); }
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
		enterRule(_localctx, 6, RULE_json_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAPPING_TYPE || _la==ORDERED_MAPPING_TYPE) {
				{
				setState(138);
				_la = _input.LA(1);
				if ( !(_la==MAPPING_TYPE || _la==ORDERED_MAPPING_TYPE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(141);
			match(OPEN_C_BRA);
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << SYMBOL) | (1L << UNQUOTED_STRING))) != 0)) {
				{
				setState(142);
				json_pair();
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(143);
					match(COMMA);
					setState(144);
					json_pair();
					}
					}
					setState(149);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(152);
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
		public List<Json_valueContext> json_value() {
			return getRuleContexts(Json_valueContext.class);
		}
		public Json_valueContext json_value(int i) {
			return getRuleContext(Json_valueContext.class,i);
		}
		public TerminalNode SEQUENCE_TYPE() { return getToken(UONParser.SEQUENCE_TYPE, 0); }
		public TerminalNode ORDERED_SEQUENCE_TYPE() { return getToken(UONParser.ORDERED_SEQUENCE_TYPE, 0); }
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
		enterRule(_localctx, 8, RULE_json_seq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEQUENCE_TYPE || _la==ORDERED_SEQUENCE_TYPE) {
				{
				setState(154);
				_la = _input.LA(1);
				if ( !(_la==SEQUENCE_TYPE || _la==ORDERED_SEQUENCE_TYPE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(157);
			match(OPEN_S_BRA);
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << CT) | (1L << STR_TYPE) | (1L << BOOL_TYPE) | (1L << URL_TYPE) | (1L << FLOAT_TYPE) | (1L << FLOAT_128_TYPE) | (1L << FLOAT_64_TYPE) | (1L << FLOAT_32_TYPE) | (1L << INT_TYPE) | (1L << INT_128_TYPE) | (1L << INT_64_TYPE) | (1L << INT_32_TYPE) | (1L << UINT_TYPE) | (1L << UINT_128_TYPE) | (1L << UINT_64_TYPE) | (1L << UINT_32_TYPE) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << SYMBOL) | (1L << UNQUOTED_STRING) | (1L << OPEN_C_BRA) | (1L << OPEN_S_BRA))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (MAPPING_TYPE - 64)) | (1L << (ORDERED_MAPPING_TYPE - 64)) | (1L << (SEQUENCE_TYPE - 64)) | (1L << (ORDERED_SEQUENCE_TYPE - 64)))) != 0)) {
				{
				setState(158);
				json_value();
				setState(163);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(159);
					match(COMMA);
					setState(160);
					json_value();
					}
					}
					setState(165);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(168);
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
		enterRule(_localctx, 10, RULE_json_user_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			custom_type();
			setState(171);
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
		enterRule(_localctx, 12, RULE_json_value);
		try {
			setState(178);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(173);
				json_map();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(174);
				json_seq();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(175);
				scalar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(176);
				json_user_type();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(177);
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
		enterRule(_localctx, 14, RULE_pair_key);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			string();
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(181);
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
		enterRule(_localctx, 16, RULE_json_pair);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			pair_key();
			setState(185);
			match(COLON);
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << CT) | (1L << STR_TYPE) | (1L << BOOL_TYPE) | (1L << URL_TYPE) | (1L << FLOAT_TYPE) | (1L << FLOAT_128_TYPE) | (1L << FLOAT_64_TYPE) | (1L << FLOAT_32_TYPE) | (1L << INT_TYPE) | (1L << INT_128_TYPE) | (1L << INT_64_TYPE) | (1L << INT_32_TYPE) | (1L << UINT_TYPE) | (1L << UINT_128_TYPE) | (1L << UINT_64_TYPE) | (1L << UINT_32_TYPE) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << SYMBOL) | (1L << UNQUOTED_STRING) | (1L << OPEN_C_BRA) | (1L << OPEN_S_BRA))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (MAPPING_TYPE - 64)) | (1L << (ORDERED_MAPPING_TYPE - 64)) | (1L << (SEQUENCE_TYPE - 64)) | (1L << (ORDERED_SEQUENCE_TYPE - 64)))) != 0)) {
				{
				setState(186);
				json_value();
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
		enterRule(_localctx, 18, RULE_presentation_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			match(OPEN_PAR);
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DESCRIPTION || _la==OPTIONAL) {
				{
				setState(190);
				presentation_property();
				setState(195);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(191);
					match(COMMA);
					setState(192);
					presentation_property();
					}
					}
					setState(197);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(200);
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
		enterRule(_localctx, 20, RULE_presentation_property);
		try {
			setState(204);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPTIONAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(202);
				optional();
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(203);
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
		public TerminalNode DESCRIPTION() { return getToken(UONParser.DESCRIPTION, 0); }
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
		enterRule(_localctx, 22, RULE_description);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(DESCRIPTION);
			setState(207);
			match(COLON);
			setState(208);
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
		public TerminalNode OPTIONAL() { return getToken(UONParser.OPTIONAL, 0); }
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
		enterRule(_localctx, 24, RULE_optional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			match(OPTIONAL);
			setState(211);
			match(COLON);
			setState(212);
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

	public static class Types_propertiesContext extends ParserRuleContext {
		public TerminalNode OPEN_PAR() { return getToken(UONParser.OPEN_PAR, 0); }
		public TerminalNode CLOSE_PAR() { return getToken(UONParser.CLOSE_PAR, 0); }
		public List<Types_propertieContext> types_propertie() {
			return getRuleContexts(Types_propertieContext.class);
		}
		public Types_propertieContext types_propertie(int i) {
			return getRuleContext(Types_propertieContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public Types_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_types_properties; }
	}

	public final Types_propertiesContext types_properties() throws RecognitionException {
		Types_propertiesContext _localctx = new Types_propertiesContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_types_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			match(OPEN_PAR);
			setState(223);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << COMMENT))) != 0)) {
				{
				setState(215);
				types_propertie();
				setState(220);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(216);
					match(COMMA);
					setState(217);
					types_propertie();
					}
					}
					setState(222);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(225);
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

	public static class Types_propertieContext extends ParserRuleContext {
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public DescriptionContext description() {
			return getRuleContext(DescriptionContext.class,0);
		}
		public OptionalContext optional() {
			return getRuleContext(OptionalContext.class,0);
		}
		public Types_propertieContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_types_propertie; }
	}

	public final Types_propertieContext types_propertie() throws RecognitionException {
		Types_propertieContext _localctx = new Types_propertieContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_types_propertie);
		try {
			setState(230);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMMENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(227);
				comment();
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(228);
				description();
				}
				break;
			case OPTIONAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(229);
				optional();
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

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode COMMENT() { return getToken(UONParser.COMMENT, 0); }
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_comment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(COMMENT);
			setState(233);
			match(COLON);
			setState(234);
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

	public static class Number_presentationContext extends ParserRuleContext {
		public Types_propertieContext types_propertie() {
			return getRuleContext(Types_propertieContext.class,0);
		}
		public Number_presentation_propertieContext number_presentation_propertie() {
			return getRuleContext(Number_presentation_propertieContext.class,0);
		}
		public Number_presentationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_presentation; }
	}

	public final Number_presentationContext number_presentation() throws RecognitionException {
		Number_presentationContext _localctx = new Number_presentationContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_number_presentation);
		try {
			setState(238);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DESCRIPTION:
			case OPTIONAL:
			case COMMENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(236);
				types_propertie();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(237);
				number_presentation_propertie();
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

	public static class Number_presentation_propertiesContext extends ParserRuleContext {
		public TerminalNode OPEN_PAR() { return getToken(UONParser.OPEN_PAR, 0); }
		public TerminalNode CLOSE_PAR() { return getToken(UONParser.CLOSE_PAR, 0); }
		public List<Number_presentationContext> number_presentation() {
			return getRuleContexts(Number_presentationContext.class);
		}
		public Number_presentationContext number_presentation(int i) {
			return getRuleContext(Number_presentationContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(UONParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(UONParser.COMMA, i);
		}
		public Number_presentation_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_presentation_properties; }
	}

	public final Number_presentation_propertiesContext number_presentation_properties() throws RecognitionException {
		Number_presentation_propertiesContext _localctx = new Number_presentation_propertiesContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_number_presentation_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(OPEN_PAR);
			setState(249);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << COMMENT))) != 0)) {
				{
				setState(241);
				number_presentation();
				setState(246);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(242);
					match(COMMA);
					setState(243);
					number_presentation();
					}
					}
					setState(248);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(251);
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

	public static class Number_presentation_propertieContext extends ParserRuleContext {
		public UnitContext unit() {
			return getRuleContext(UnitContext.class,0);
		}
		public Number_presentation_propertieContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_presentation_propertie; }
	}

	public final Number_presentation_propertieContext number_presentation_propertie() throws RecognitionException {
		Number_presentation_propertieContext _localctx = new Number_presentation_propertieContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_number_presentation_propertie);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			unit();
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

	public static class UnitContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public UnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unit; }
	}

	public final UnitContext unit() throws RecognitionException {
		UnitContext _localctx = new UnitContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			match(T__0);
			setState(256);
			match(COLON);
			setState(257);
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
		enterRule(_localctx, 40, RULE_schema);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			custom_type();
			setState(260);
			match(COLON);
			setState(261);
			match(SCHEMA_TYPE);
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(262);
				schema_presentations();
				}
			}

			setState(265);
			match(OPEN_C_BRA);
			setState(267);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << SYMBOL) | (1L << UNQUOTED_STRING))) != 0)) {
				{
				setState(266);
				attributes();
				}
			}

			setState(269);
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
		enterRule(_localctx, 42, RULE_attributes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			attribute();
			setState(276);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(272);
				match(COMMA);
				setState(273);
				attribute();
				}
				}
				setState(278);
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
		enterRule(_localctx, 44, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			pair_key();
			setState(280);
			match(COLON);
			setState(281);
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
		enterRule(_localctx, 46, RULE_schema_presentations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			match(OPEN_PAR);
			setState(292);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NAME) | (1L << UUID) | (1L << DESCRIPTION))) != 0)) {
				{
				setState(284);
				schema_presentation();
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(285);
					match(COMMA);
					setState(286);
					schema_presentation();
					}
					}
					setState(291);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(294);
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
		enterRule(_localctx, 48, RULE_schema_presentation);
		try {
			setState(299);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(296);
				schema_name();
				}
				break;
			case UUID:
				enterOuterAlt(_localctx, 2);
				{
				setState(297);
				schema_uuid();
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(298);
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
		public TerminalNode NAME() { return getToken(UONParser.NAME, 0); }
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
		enterRule(_localctx, 50, RULE_schema_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(NAME);
			setState(302);
			match(COLON);
			setState(303);
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
		public TerminalNode UUID() { return getToken(UONParser.UUID, 0); }
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
		enterRule(_localctx, 52, RULE_schema_uuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(UUID);
			setState(306);
			match(COLON);
			setState(307);
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
		enterRule(_localctx, 54, RULE_validation_properties);
		try {
			setState(313);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STR_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(309);
				string_validation();
				}
				break;
			case FLOAT_TYPE:
			case INT_TYPE:
			case UINT_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(310);
				number_validation();
				}
				break;
			case BOOL_TYPE:
				enterOuterAlt(_localctx, 3);
				{
				setState(311);
				boolean_validation();
				}
				break;
			case URL_TYPE:
				enterOuterAlt(_localctx, 4);
				{
				setState(312);
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
		enterRule(_localctx, 56, RULE_string_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			match(STR_TYPE);
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(316);
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
		enterRule(_localctx, 58, RULE_string_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(319);
			match(OPEN_PAR);
			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAX || _la==MIN) {
				{
				setState(320);
				string_property();
				setState(325);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(321);
					match(COMMA);
					setState(322);
					string_property();
					}
					}
					setState(327);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(330);
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
		enterRule(_localctx, 60, RULE_string_property);
		try {
			setState(334);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(332);
				string_max();
				}
				break;
			case MIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(333);
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
		public TerminalNode MAX() { return getToken(UONParser.MAX, 0); }
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public String_maxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_max; }
	}

	public final String_maxContext string_max() throws RecognitionException {
		String_maxContext _localctx = new String_maxContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_string_max);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
			match(MAX);
			setState(337);
			match(COLON);
			setState(338);
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

	public static class String_minContext extends ParserRuleContext {
		public TerminalNode MIN() { return getToken(UONParser.MIN, 0); }
		public TerminalNode COLON() { return getToken(UONParser.COLON, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public String_minContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_min; }
	}

	public final String_minContext string_min() throws RecognitionException {
		String_minContext _localctx = new String_minContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_string_min);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(340);
			match(MIN);
			setState(341);
			match(COLON);
			setState(342);
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

	public static class Url_validationContext extends ParserRuleContext {
		public TerminalNode URL_TYPE() { return getToken(UONParser.URL_TYPE, 0); }
		public Url_validationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_url_validation; }
	}

	public final Url_validationContext url_validation() throws RecognitionException {
		Url_validationContext _localctx = new Url_validationContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_url_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(344);
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
		enterRule(_localctx, 68, RULE_boolean_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
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
		enterRule(_localctx, 70, RULE_number_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			number_validation_type();
			setState(350);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(349);
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
		enterRule(_localctx, 72, RULE_number_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			match(OPEN_PAR);
			setState(361);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << MAX) | (1L << MIN))) != 0)) {
				{
				setState(353);
				number_property();
				setState(358);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(354);
					match(COMMA);
					setState(355);
					number_property();
					}
					}
					setState(360);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(363);
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
		enterRule(_localctx, 74, RULE_number_property);
		try {
			setState(368);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(365);
				number_max();
				}
				break;
			case MIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(366);
				number_min();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 3);
				{
				setState(367);
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
		public TerminalNode MAX() { return getToken(UONParser.MAX, 0); }
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
		enterRule(_localctx, 76, RULE_number_max);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
			match(MAX);
			setState(371);
			match(COLON);
			setState(372);
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
		public TerminalNode MIN() { return getToken(UONParser.MIN, 0); }
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
		enterRule(_localctx, 78, RULE_number_min);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(MIN);
			setState(375);
			match(COLON);
			setState(376);
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
		enterRule(_localctx, 80, RULE_number_validation_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
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
		enterRule(_localctx, 82, RULE_quantity_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
			match(T__1);
			setState(381);
			match(COLON);
			setState(382);
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
		public TerminalNode LENGTH() { return getToken(UONParser.LENGTH, 0); }
		public TerminalNode MASS() { return getToken(UONParser.MASS, 0); }
		public TerminalNode TEMPERATURE() { return getToken(UONParser.TEMPERATURE, 0); }
		public TerminalNode TIME() { return getToken(UONParser.TIME, 0); }
		public Quantity_validation_typesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantity_validation_types; }
	}

	public final Quantity_validation_typesContext quantity_validation_types() throws RecognitionException {
		Quantity_validation_typesContext _localctx = new Quantity_validation_typesContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_quantity_validation_types);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(384);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME))) != 0)) ) {
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
		enterRule(_localctx, 86, RULE_scalar);
		try {
			setState(390);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(386);
				quantity_scalar();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(387);
				string_scalar();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(388);
				boolean_scalar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(389);
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
		enterRule(_localctx, 88, RULE_quantity_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			numeric_scalar();
			setState(394);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << METERS) | (1L << KILOMETERS) | (1L << GRAMS) | (1L << KILOGRAMS) | (1L << SECOND) | (1L << MINUTE) | (1L << CELSIUS) | (1L << KELVIN))) != 0)) {
				{
				setState(393);
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
		enterRule(_localctx, 90, RULE_numeric_scalar);
		try {
			setState(398);
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
				setState(396);
				coercible_numeric_scalar();
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
			case SYMBOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(397);
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
		public Number_presentation_propertiesContext number_presentation_properties() {
			return getRuleContext(Number_presentation_propertiesContext.class,0);
		}
		public Coercible_numeric_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coercible_numeric_scalar; }
	}

	public final Coercible_numeric_scalarContext coercible_numeric_scalar() throws RecognitionException {
		Coercible_numeric_scalarContext _localctx = new Coercible_numeric_scalarContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_coercible_numeric_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(400);
			number_type();
			setState(402);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(401);
				number_presentation_properties();
				}
			}

			}
			setState(406);
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
				setState(404);
				coercible_numeric_scalar();
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
			case SYMBOL:
				{
				setState(405);
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

	public static class String_scalarContext extends ParserRuleContext {
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode STR_TYPE() { return getToken(UONParser.STR_TYPE, 0); }
		public Types_propertiesContext types_properties() {
			return getRuleContext(Types_propertiesContext.class,0);
		}
		public String_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_scalar; }
	}

	public final String_scalarContext string_scalar() throws RecognitionException {
		String_scalarContext _localctx = new String_scalarContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_string_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STR_TYPE) {
				{
				setState(408);
				match(STR_TYPE);
				setState(410);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPEN_PAR) {
					{
					setState(409);
					types_properties();
					}
				}

				}
			}

			setState(414);
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
		public BooleanContext boolean() {
			return getRuleContext(BooleanContext.class,0);
		}
		public TerminalNode BOOL_TYPE() { return getToken(UONParser.BOOL_TYPE, 0); }
		public Boolean_scalarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolean_scalar; }
	}

	public final Boolean_scalarContext boolean_scalar() throws RecognitionException {
		Boolean_scalarContext _localctx = new Boolean_scalarContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_boolean_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BOOL_TYPE) {
				{
				setState(416);
				match(BOOL_TYPE);
				}
			}

			setState(419);
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
		enterRule(_localctx, 98, RULE_url);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==URL_TYPE) {
				{
				setState(421);
				match(URL_TYPE);
				}
			}

			setState(424);
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
		enterRule(_localctx, 100, RULE_quantity);
		try {
			setState(430);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case METERS:
			case KILOMETERS:
				enterOuterAlt(_localctx, 1);
				{
				setState(426);
				length();
				}
				break;
			case GRAMS:
			case KILOGRAMS:
				enterOuterAlt(_localctx, 2);
				{
				setState(427);
				mass();
				}
				break;
			case SECOND:
			case MINUTE:
				enterOuterAlt(_localctx, 3);
				{
				setState(428);
				time();
				}
				break;
			case CELSIUS:
			case KELVIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(429);
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
		enterRule(_localctx, 102, RULE_length);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
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
		enterRule(_localctx, 104, RULE_mass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
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
		enterRule(_localctx, 106, RULE_time);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
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
		enterRule(_localctx, 108, RULE_temperature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
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
		enterRule(_localctx, 110, RULE_number_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
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
		enterRule(_localctx, 112, RULE_boolean);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
			case T__3:
				{
				setState(442);
				true();
				}
				break;
			case T__4:
			case T__5:
				{
				setState(443);
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
		enterRule(_localctx, 114, RULE_true);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			_la = _input.LA(1);
			if ( !(_la==T__2 || _la==T__3) ) {
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
		enterRule(_localctx, 116, RULE_false);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(448);
			_la = _input.LA(1);
			if ( !(_la==T__4 || _la==T__5) ) {
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
		enterRule(_localctx, 118, RULE_null);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__8))) != 0)) ) {
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
		enterRule(_localctx, 120, RULE_custom_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(452);
			match(CT);
			setState(453);
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

	public static class StringContext extends ParserRuleContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode QUOTED_STRING() { return getToken(UONParser.QUOTED_STRING, 0); }
		public TerminalNode UNQUOTED_STRING() { return getToken(UONParser.UNQUOTED_STRING, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_string);
		try {
			setState(458);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case LENGTH:
			case MASS:
			case TEMPERATURE:
			case TIME:
			case NAME:
			case UUID:
			case DESCRIPTION:
			case OPTIONAL:
			case NUMBER:
			case NUMERIC_LITERAL:
			case SYMBOL:
				enterOuterAlt(_localctx, 1);
				{
				setState(455);
				literal();
				}
				break;
			case QUOTED_STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(456);
				match(QUOTED_STRING);
				}
				break;
			case UNQUOTED_STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(457);
				match(UNQUOTED_STRING);
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

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode LENGTH() { return getToken(UONParser.LENGTH, 0); }
		public TerminalNode MASS() { return getToken(UONParser.MASS, 0); }
		public TerminalNode TEMPERATURE() { return getToken(UONParser.TEMPERATURE, 0); }
		public TerminalNode TIME() { return getToken(UONParser.TIME, 0); }
		public TerminalNode NAME() { return getToken(UONParser.NAME, 0); }
		public TerminalNode UUID() { return getToken(UONParser.UUID, 0); }
		public TerminalNode DESCRIPTION() { return getToken(UONParser.DESCRIPTION, 0); }
		public TerminalNode OPTIONAL() { return getToken(UONParser.OPTIONAL, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public BooleanContext boolean() {
			return getRuleContext(BooleanContext.class,0);
		}
		public NullContext null() {
			return getRuleContext(NullContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_literal);
		try {
			setState(471);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LENGTH:
				enterOuterAlt(_localctx, 1);
				{
				setState(460);
				match(LENGTH);
				}
				break;
			case MASS:
				enterOuterAlt(_localctx, 2);
				{
				setState(461);
				match(MASS);
				}
				break;
			case TEMPERATURE:
				enterOuterAlt(_localctx, 3);
				{
				setState(462);
				match(TEMPERATURE);
				}
				break;
			case TIME:
				enterOuterAlt(_localctx, 4);
				{
				setState(463);
				match(TIME);
				}
				break;
			case NAME:
				enterOuterAlt(_localctx, 5);
				{
				setState(464);
				match(NAME);
				}
				break;
			case UUID:
				enterOuterAlt(_localctx, 6);
				{
				setState(465);
				match(UUID);
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 7);
				{
				setState(466);
				match(DESCRIPTION);
				}
				break;
			case OPTIONAL:
				enterOuterAlt(_localctx, 8);
				{
				setState(467);
				match(OPTIONAL);
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
			case SYMBOL:
				enterOuterAlt(_localctx, 9);
				{
				setState(468);
				number();
				}
				break;
			case T__2:
			case T__3:
			case T__4:
			case T__5:
				enterOuterAlt(_localctx, 10);
				{
				setState(469);
				boolean();
				}
				break;
			case T__6:
			case T__7:
			case T__8:
				enterOuterAlt(_localctx, 11);
				{
				setState(470);
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

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMERIC_LITERAL() { return getToken(UONParser.NUMERIC_LITERAL, 0); }
		public TerminalNode NUMBER() { return getToken(UONParser.NUMBER, 0); }
		public TerminalNode SYMBOL() { return getToken(UONParser.SYMBOL, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(474);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SYMBOL) {
				{
				setState(473);
				match(SYMBOL);
				}
			}

			setState(476);
			_la = _input.LA(1);
			if ( !(_la==NUMBER || _la==NUMERIC_LITERAL) ) {
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3F\u01e1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\3\2\3\2\3\3\3\3\5\3\u0087\n\3\3\4\3\4\5\4\u008b"+
		"\n\4\3\5\5\5\u008e\n\5\3\5\3\5\3\5\3\5\7\5\u0094\n\5\f\5\16\5\u0097\13"+
		"\5\5\5\u0099\n\5\3\5\3\5\3\6\5\6\u009e\n\6\3\6\3\6\3\6\3\6\7\6\u00a4\n"+
		"\6\f\6\16\6\u00a7\13\6\5\6\u00a9\n\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3"+
		"\b\3\b\5\b\u00b5\n\b\3\t\3\t\5\t\u00b9\n\t\3\n\3\n\3\n\5\n\u00be\n\n\3"+
		"\13\3\13\3\13\3\13\7\13\u00c4\n\13\f\13\16\13\u00c7\13\13\5\13\u00c9\n"+
		"\13\3\13\3\13\3\f\3\f\5\f\u00cf\n\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16"+
		"\3\17\3\17\3\17\3\17\7\17\u00dd\n\17\f\17\16\17\u00e0\13\17\5\17\u00e2"+
		"\n\17\3\17\3\17\3\20\3\20\3\20\5\20\u00e9\n\20\3\21\3\21\3\21\3\21\3\22"+
		"\3\22\5\22\u00f1\n\22\3\23\3\23\3\23\3\23\7\23\u00f7\n\23\f\23\16\23\u00fa"+
		"\13\23\5\23\u00fc\n\23\3\23\3\23\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3"+
		"\26\3\26\3\26\5\26\u010a\n\26\3\26\3\26\5\26\u010e\n\26\3\26\3\26\3\27"+
		"\3\27\3\27\7\27\u0115\n\27\f\27\16\27\u0118\13\27\3\30\3\30\3\30\3\30"+
		"\3\31\3\31\3\31\3\31\7\31\u0122\n\31\f\31\16\31\u0125\13\31\5\31\u0127"+
		"\n\31\3\31\3\31\3\32\3\32\3\32\5\32\u012e\n\32\3\33\3\33\3\33\3\33\3\34"+
		"\3\34\3\34\3\34\3\35\3\35\3\35\3\35\5\35\u013c\n\35\3\36\3\36\5\36\u0140"+
		"\n\36\3\37\3\37\3\37\3\37\7\37\u0146\n\37\f\37\16\37\u0149\13\37\5\37"+
		"\u014b\n\37\3\37\3\37\3 \3 \5 \u0151\n \3!\3!\3!\3!\3\"\3\"\3\"\3\"\3"+
		"#\3#\3$\3$\3%\3%\5%\u0161\n%\3&\3&\3&\3&\7&\u0167\n&\f&\16&\u016a\13&"+
		"\5&\u016c\n&\3&\3&\3\'\3\'\3\'\5\'\u0173\n\'\3(\3(\3(\3(\3)\3)\3)\3)\3"+
		"*\3*\3+\3+\3+\3+\3,\3,\3-\3-\3-\3-\5-\u0189\n-\3.\3.\5.\u018d\n.\3/\3"+
		"/\5/\u0191\n/\3\60\3\60\5\60\u0195\n\60\3\60\3\60\5\60\u0199\n\60\3\61"+
		"\3\61\5\61\u019d\n\61\5\61\u019f\n\61\3\61\3\61\3\62\5\62\u01a4\n\62\3"+
		"\62\3\62\3\63\5\63\u01a9\n\63\3\63\3\63\3\64\3\64\3\64\3\64\5\64\u01b1"+
		"\n\64\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\5:\u01bf\n:\3;\3"+
		";\3<\3<\3=\3=\3>\3>\3>\3?\3?\3?\5?\u01cd\n?\3@\3@\3@\3@\3@\3@\3@\3@\3"+
		"@\3@\3@\5@\u01da\n@\3A\5A\u01dd\nA\3A\3A\3A\2\2B\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnp"+
		"rtvxz|~\u0080\2\17\3\2BC\3\2DE\5\2\33\33\37\37##\3\2),\3\2\f\r\3\2\16"+
		"\17\3\2\20\21\4\2\22\22\24\24\3\2\33&\3\2\5\6\3\2\7\b\3\2\t\13\3\2\63"+
		"\64\2\u01e7\2\u0082\3\2\2\2\4\u0086\3\2\2\2\6\u008a\3\2\2\2\b\u008d\3"+
		"\2\2\2\n\u009d\3\2\2\2\f\u00ac\3\2\2\2\16\u00b4\3\2\2\2\20\u00b6\3\2\2"+
		"\2\22\u00ba\3\2\2\2\24\u00bf\3\2\2\2\26\u00ce\3\2\2\2\30\u00d0\3\2\2\2"+
		"\32\u00d4\3\2\2\2\34\u00d8\3\2\2\2\36\u00e8\3\2\2\2 \u00ea\3\2\2\2\"\u00f0"+
		"\3\2\2\2$\u00f2\3\2\2\2&\u00ff\3\2\2\2(\u0101\3\2\2\2*\u0105\3\2\2\2,"+
		"\u0111\3\2\2\2.\u0119\3\2\2\2\60\u011d\3\2\2\2\62\u012d\3\2\2\2\64\u012f"+
		"\3\2\2\2\66\u0133\3\2\2\28\u013b\3\2\2\2:\u013d\3\2\2\2<\u0141\3\2\2\2"+
		">\u0150\3\2\2\2@\u0152\3\2\2\2B\u0156\3\2\2\2D\u015a\3\2\2\2F\u015c\3"+
		"\2\2\2H\u015e\3\2\2\2J\u0162\3\2\2\2L\u0172\3\2\2\2N\u0174\3\2\2\2P\u0178"+
		"\3\2\2\2R\u017c\3\2\2\2T\u017e\3\2\2\2V\u0182\3\2\2\2X\u0188\3\2\2\2Z"+
		"\u018a\3\2\2\2\\\u0190\3\2\2\2^\u0192\3\2\2\2`\u019e\3\2\2\2b\u01a3\3"+
		"\2\2\2d\u01a8\3\2\2\2f\u01b0\3\2\2\2h\u01b2\3\2\2\2j\u01b4\3\2\2\2l\u01b6"+
		"\3\2\2\2n\u01b8\3\2\2\2p\u01ba\3\2\2\2r\u01be\3\2\2\2t\u01c0\3\2\2\2v"+
		"\u01c2\3\2\2\2x\u01c4\3\2\2\2z\u01c6\3\2\2\2|\u01cc\3\2\2\2~\u01d9\3\2"+
		"\2\2\u0080\u01dc\3\2\2\2\u0082\u0083\5\4\3\2\u0083\3\3\2\2\2\u0084\u0087"+
		"\5\6\4\2\u0085\u0087\5*\26\2\u0086\u0084\3\2\2\2\u0086\u0085\3\2\2\2\u0087"+
		"\5\3\2\2\2\u0088\u008b\5\b\5\2\u0089\u008b\5\n\6\2\u008a\u0088\3\2\2\2"+
		"\u008a\u0089\3\2\2\2\u008b\7\3\2\2\2\u008c\u008e\t\2\2\2\u008d\u008c\3"+
		"\2\2\2\u008d\u008e\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u0098\7<\2\2\u0090"+
		"\u0095\5\22\n\2\u0091\u0092\7@\2\2\u0092\u0094\5\22\n\2\u0093\u0091\3"+
		"\2\2\2\u0094\u0097\3\2\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096"+
		"\u0099\3\2\2\2\u0097\u0095\3\2\2\2\u0098\u0090\3\2\2\2\u0098\u0099\3\2"+
		"\2\2\u0099\u009a\3\2\2\2\u009a\u009b\7=\2\2\u009b\t\3\2\2\2\u009c\u009e"+
		"\t\3\2\2\u009d\u009c\3\2\2\2\u009d\u009e\3\2\2\2\u009e\u009f\3\2\2\2\u009f"+
		"\u00a8\7>\2\2\u00a0\u00a5\5\16\b\2\u00a1\u00a2\7@\2\2\u00a2\u00a4\5\16"+
		"\b\2\u00a3\u00a1\3\2\2\2\u00a4\u00a7\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5"+
		"\u00a6\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a8\u00a0\3\2"+
		"\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ab\7?\2\2\u00ab"+
		"\13\3\2\2\2\u00ac\u00ad\5z>\2\u00ad\u00ae\5\b\5\2\u00ae\r\3\2\2\2\u00af"+
		"\u00b5\5\b\5\2\u00b0\u00b5\5\n\6\2\u00b1\u00b5\5X-\2\u00b2\u00b5\5\f\7"+
		"\2\u00b3\u00b5\5x=\2\u00b4\u00af\3\2\2\2\u00b4\u00b0\3\2\2\2\u00b4\u00b1"+
		"\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b3\3\2\2\2\u00b5\17\3\2\2\2\u00b6"+
		"\u00b8\5|?\2\u00b7\u00b9\5\24\13\2\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2"+
		"\2\2\u00b9\21\3\2\2\2\u00ba\u00bb\5\20\t\2\u00bb\u00bd\7A\2\2\u00bc\u00be"+
		"\5\16\b\2\u00bd\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\23\3\2\2\2\u00bf"+
		"\u00c8\7:\2\2\u00c0\u00c5\5\26\f\2\u00c1\u00c2\7@\2\2\u00c2\u00c4\5\26"+
		"\f\2\u00c3\u00c1\3\2\2\2\u00c4\u00c7\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5"+
		"\u00c6\3\2\2\2\u00c6\u00c9\3\2\2\2\u00c7\u00c5\3\2\2\2\u00c8\u00c0\3\2"+
		"\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cb\7;\2\2\u00cb"+
		"\25\3\2\2\2\u00cc\u00cf\5\32\16\2\u00cd\u00cf\5\30\r\2\u00ce\u00cc\3\2"+
		"\2\2\u00ce\u00cd\3\2\2\2\u00cf\27\3\2\2\2\u00d0\u00d1\7/\2\2\u00d1\u00d2"+
		"\7A\2\2\u00d2\u00d3\5|?\2\u00d3\31\3\2\2\2\u00d4\u00d5\7\60\2\2\u00d5"+
		"\u00d6\7A\2\2\u00d6\u00d7\5r:\2\u00d7\33\3\2\2\2\u00d8\u00e1\7:\2\2\u00d9"+
		"\u00de\5\36\20\2\u00da\u00db\7@\2\2\u00db\u00dd\5\36\20\2\u00dc\u00da"+
		"\3\2\2\2\u00dd\u00e0\3\2\2\2\u00de\u00dc\3\2\2\2\u00de\u00df\3\2\2\2\u00df"+
		"\u00e2\3\2\2\2\u00e0\u00de\3\2\2\2\u00e1\u00d9\3\2\2\2\u00e1\u00e2\3\2"+
		"\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\7;\2\2\u00e4\35\3\2\2\2\u00e5\u00e9"+
		"\5 \21\2\u00e6\u00e9\5\30\r\2\u00e7\u00e9\5\32\16\2\u00e8\u00e5\3\2\2"+
		"\2\u00e8\u00e6\3\2\2\2\u00e8\u00e7\3\2\2\2\u00e9\37\3\2\2\2\u00ea\u00eb"+
		"\7\61\2\2\u00eb\u00ec\7A\2\2\u00ec\u00ed\5|?\2\u00ed!\3\2\2\2\u00ee\u00f1"+
		"\5\36\20\2\u00ef\u00f1\5&\24\2\u00f0\u00ee\3\2\2\2\u00f0\u00ef\3\2\2\2"+
		"\u00f1#\3\2\2\2\u00f2\u00fb\7:\2\2\u00f3\u00f8\5\"\22\2\u00f4\u00f5\7"+
		"@\2\2\u00f5\u00f7\5\"\22\2\u00f6\u00f4\3\2\2\2\u00f7\u00fa\3\2\2\2\u00f8"+
		"\u00f6\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fc\3\2\2\2\u00fa\u00f8\3\2"+
		"\2\2\u00fb\u00f3\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd"+
		"\u00fe\7;\2\2\u00fe%\3\2\2\2\u00ff\u0100\5(\25\2\u0100\'\3\2\2\2\u0101"+
		"\u0102\7\3\2\2\u0102\u0103\7A\2\2\u0103\u0104\5\u0080A\2\u0104)\3\2\2"+
		"\2\u0105\u0106\5z>\2\u0106\u0107\7A\2\2\u0107\u0109\7F\2\2\u0108\u010a"+
		"\5\60\31\2\u0109\u0108\3\2\2\2\u0109\u010a\3\2\2\2\u010a\u010b\3\2\2\2"+
		"\u010b\u010d\7<\2\2\u010c\u010e\5,\27\2\u010d\u010c\3\2\2\2\u010d\u010e"+
		"\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0110\7=\2\2\u0110+\3\2\2\2\u0111\u0116"+
		"\5.\30\2\u0112\u0113\7@\2\2\u0113\u0115\5.\30\2\u0114\u0112\3\2\2\2\u0115"+
		"\u0118\3\2\2\2\u0116\u0114\3\2\2\2\u0116\u0117\3\2\2\2\u0117-\3\2\2\2"+
		"\u0118\u0116\3\2\2\2\u0119\u011a\5\20\t\2\u011a\u011b\7A\2\2\u011b\u011c"+
		"\58\35\2\u011c/\3\2\2\2\u011d\u0126\7:\2\2\u011e\u0123\5\62\32\2\u011f"+
		"\u0120\7@\2\2\u0120\u0122\5\62\32\2\u0121\u011f\3\2\2\2\u0122\u0125\3"+
		"\2\2\2\u0123\u0121\3\2\2\2\u0123\u0124\3\2\2\2\u0124\u0127\3\2\2\2\u0125"+
		"\u0123\3\2\2\2\u0126\u011e\3\2\2\2\u0126\u0127\3\2\2\2\u0127\u0128\3\2"+
		"\2\2\u0128\u0129\7;\2\2\u0129\61\3\2\2\2\u012a\u012e\5\64\33\2\u012b\u012e"+
		"\5\66\34\2\u012c\u012e\5\30\r\2\u012d\u012a\3\2\2\2\u012d\u012b\3\2\2"+
		"\2\u012d\u012c\3\2\2\2\u012e\63\3\2\2\2\u012f\u0130\7-\2\2\u0130\u0131"+
		"\7A\2\2\u0131\u0132\5|?\2\u0132\65\3\2\2\2\u0133\u0134\7.\2\2\u0134\u0135"+
		"\7A\2\2\u0135\u0136\5d\63\2\u0136\67\3\2\2\2\u0137\u013c\5:\36\2\u0138"+
		"\u013c\5H%\2\u0139\u013c\5F$\2\u013a\u013c\5D#\2\u013b\u0137\3\2\2\2\u013b"+
		"\u0138\3\2\2\2\u013b\u0139\3\2\2\2\u013b\u013a\3\2\2\2\u013c9\3\2\2\2"+
		"\u013d\u013f\7\30\2\2\u013e\u0140\5<\37\2\u013f\u013e\3\2\2\2\u013f\u0140"+
		"\3\2\2\2\u0140;\3\2\2\2\u0141\u014a\7:\2\2\u0142\u0147\5> \2\u0143\u0144"+
		"\7@\2\2\u0144\u0146\5> \2\u0145\u0143\3\2\2\2\u0146\u0149\3\2\2\2\u0147"+
		"\u0145\3\2\2\2\u0147\u0148\3\2\2\2\u0148\u014b\3\2\2\2\u0149\u0147\3\2"+
		"\2\2\u014a\u0142\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014c\3\2\2\2\u014c"+
		"\u014d\7;\2\2\u014d=\3\2\2\2\u014e\u0151\5@!\2\u014f\u0151\5B\"\2\u0150"+
		"\u014e\3\2\2\2\u0150\u014f\3\2\2\2\u0151?\3\2\2\2\u0152\u0153\7\'\2\2"+
		"\u0153\u0154\7A\2\2\u0154\u0155\5\u0080A\2\u0155A\3\2\2\2\u0156\u0157"+
		"\7(\2\2\u0157\u0158\7A\2\2\u0158\u0159\5\u0080A\2\u0159C\3\2\2\2\u015a"+
		"\u015b\7\32\2\2\u015bE\3\2\2\2\u015c\u015d\7\31\2\2\u015dG\3\2\2\2\u015e"+
		"\u0160\5R*\2\u015f\u0161\5J&\2\u0160\u015f\3\2\2\2\u0160\u0161\3\2\2\2"+
		"\u0161I\3\2\2\2\u0162\u016b\7:\2\2\u0163\u0168\5L\'\2\u0164\u0165\7@\2"+
		"\2\u0165\u0167\5L\'\2\u0166\u0164\3\2\2\2\u0167\u016a\3\2\2\2\u0168\u0166"+
		"\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016c\3\2\2\2\u016a\u0168\3\2\2\2\u016b"+
		"\u0163\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\3\2\2\2\u016d\u016e\7;"+
		"\2\2\u016eK\3\2\2\2\u016f\u0173\5N(\2\u0170\u0173\5P)\2\u0171\u0173\5"+
		"T+\2\u0172\u016f\3\2\2\2\u0172\u0170\3\2\2\2\u0172\u0171\3\2\2\2\u0173"+
		"M\3\2\2\2\u0174\u0175\7\'\2\2\u0175\u0176\7A\2\2\u0176\u0177\5\u0080A"+
		"\2\u0177O\3\2\2\2\u0178\u0179\7(\2\2\u0179\u017a\7A\2\2\u017a\u017b\5"+
		"\u0080A\2\u017bQ\3\2\2\2\u017c\u017d\t\4\2\2\u017dS\3\2\2\2\u017e\u017f"+
		"\7\4\2\2\u017f\u0180\7A\2\2\u0180\u0181\5V,\2\u0181U\3\2\2\2\u0182\u0183"+
		"\t\5\2\2\u0183W\3\2\2\2\u0184\u0189\5Z.\2\u0185\u0189\5`\61\2\u0186\u0189"+
		"\5b\62\2\u0187\u0189\5d\63\2\u0188\u0184\3\2\2\2\u0188\u0185\3\2\2\2\u0188"+
		"\u0186\3\2\2\2\u0188\u0187\3\2\2\2\u0189Y\3\2\2\2\u018a\u018c\5\\/\2\u018b"+
		"\u018d\5f\64\2\u018c\u018b\3\2\2\2\u018c\u018d\3\2\2\2\u018d[\3\2\2\2"+
		"\u018e\u0191\5^\60\2\u018f\u0191\5\u0080A\2\u0190\u018e\3\2\2\2\u0190"+
		"\u018f\3\2\2\2\u0191]\3\2\2\2\u0192\u0194\5p9\2\u0193\u0195\5$\23\2\u0194"+
		"\u0193\3\2\2\2\u0194\u0195\3\2\2\2\u0195\u0198\3\2\2\2\u0196\u0199\5^"+
		"\60\2\u0197\u0199\5\u0080A\2\u0198\u0196\3\2\2\2\u0198\u0197\3\2\2\2\u0199"+
		"_\3\2\2\2\u019a\u019c\7\30\2\2\u019b\u019d\5\34\17\2\u019c\u019b\3\2\2"+
		"\2\u019c\u019d\3\2\2\2\u019d\u019f\3\2\2\2\u019e\u019a\3\2\2\2\u019e\u019f"+
		"\3\2\2\2\u019f\u01a0\3\2\2\2\u01a0\u01a1\5|?\2\u01a1a\3\2\2\2\u01a2\u01a4"+
		"\7\31\2\2\u01a3\u01a2\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a5\3\2\2\2"+
		"\u01a5\u01a6\5r:\2\u01a6c\3\2\2\2\u01a7\u01a9\7\32\2\2\u01a8\u01a7\3\2"+
		"\2\2\u01a8\u01a9\3\2\2\2\u01a9\u01aa\3\2\2\2\u01aa\u01ab\5|?\2\u01abe"+
		"\3\2\2\2\u01ac\u01b1\5h\65\2\u01ad\u01b1\5j\66\2\u01ae\u01b1\5l\67\2\u01af"+
		"\u01b1\5n8\2\u01b0\u01ac\3\2\2\2\u01b0\u01ad\3\2\2\2\u01b0\u01ae\3\2\2"+
		"\2\u01b0\u01af\3\2\2\2\u01b1g\3\2\2\2\u01b2\u01b3\t\6\2\2\u01b3i\3\2\2"+
		"\2\u01b4\u01b5\t\7\2\2\u01b5k\3\2\2\2\u01b6\u01b7\t\b\2\2\u01b7m\3\2\2"+
		"\2\u01b8\u01b9\t\t\2\2\u01b9o\3\2\2\2\u01ba\u01bb\t\n\2\2\u01bbq\3\2\2"+
		"\2\u01bc\u01bf\5t;\2\u01bd\u01bf\5v<\2\u01be\u01bc\3\2\2\2\u01be\u01bd"+
		"\3\2\2\2\u01bfs\3\2\2\2\u01c0\u01c1\t\13\2\2\u01c1u\3\2\2\2\u01c2\u01c3"+
		"\t\f\2\2\u01c3w\3\2\2\2\u01c4\u01c5\t\r\2\2\u01c5y\3\2\2\2\u01c6\u01c7"+
		"\7\27\2\2\u01c7\u01c8\7\66\2\2\u01c8{\3\2\2\2\u01c9\u01cd\5~@\2\u01ca"+
		"\u01cd\7\62\2\2\u01cb\u01cd\7\66\2\2\u01cc\u01c9\3\2\2\2\u01cc\u01ca\3"+
		"\2\2\2\u01cc\u01cb\3\2\2\2\u01cd}\3\2\2\2\u01ce\u01da\7)\2\2\u01cf\u01da"+
		"\7*\2\2\u01d0\u01da\7+\2\2\u01d1\u01da\7,\2\2\u01d2\u01da\7-\2\2\u01d3"+
		"\u01da\7.\2\2\u01d4\u01da\7/\2\2\u01d5\u01da\7\60\2\2\u01d6\u01da\5\u0080"+
		"A\2\u01d7\u01da\5r:\2\u01d8\u01da\5x=\2\u01d9\u01ce\3\2\2\2\u01d9\u01cf"+
		"\3\2\2\2\u01d9\u01d0\3\2\2\2\u01d9\u01d1\3\2\2\2\u01d9\u01d2\3\2\2\2\u01d9"+
		"\u01d3\3\2\2\2\u01d9\u01d4\3\2\2\2\u01d9\u01d5\3\2\2\2\u01d9\u01d6\3\2"+
		"\2\2\u01d9\u01d7\3\2\2\2\u01d9\u01d8\3\2\2\2\u01da\177\3\2\2\2\u01db\u01dd"+
		"\7\65\2\2\u01dc\u01db\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd\u01de\3\2\2\2"+
		"\u01de\u01df\t\16\2\2\u01df\u0081\3\2\2\2\63\u0086\u008a\u008d\u0095\u0098"+
		"\u009d\u00a5\u00a8\u00b4\u00b8\u00bd\u00c5\u00c8\u00ce\u00de\u00e1\u00e8"+
		"\u00f0\u00f8\u00fb\u0109\u010d\u0116\u0123\u0126\u012d\u013b\u013f\u0147"+
		"\u014a\u0150\u0160\u0168\u016b\u0172\u0188\u018c\u0190\u0194\u0198\u019c"+
		"\u019e\u01a3\u01a8\u01b0\u01be\u01cc\u01d9\u01dc";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}