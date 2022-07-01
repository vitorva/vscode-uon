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
		T__9=10, T__10=11, T__11=12, METERS=13, KILOMETERS=14, GRAMS=15, KILOGRAMS=16, 
		SECOND=17, MINUTE=18, CELSIUS=19, KELVIN=20, CT=21, STR_TYPE=22, BOOL_TYPE=23, 
		URL_TYPE=24, FLOAT_TYPE=25, FLOAT_128_TYPE=26, FLOAT_64_TYPE=27, FLOAT_32_TYPE=28, 
		INT_TYPE=29, INT_128_TYPE=30, INT_64_TYPE=31, INT_32_TYPE=32, UINT_TYPE=33, 
		UINT_128_TYPE=34, UINT_64_TYPE=35, UINT_32_TYPE=36, MAX=37, MIN=38, LENGTH=39, 
		MASS=40, TEMPERATURE=41, TIME=42, QUOTED_STRING=43, NUMBER=44, NUMERIC_LITERAL=45, 
		SYMBOL=46, UNQUOTED_STRING=47, IDENTIFIER=48, WS=49, LINE_COMMENT=50, 
		OPEN_PAR=51, CLOSE_PAR=52, OPEN_C_BRA=53, CLOSE_C_BRA=54, OPEN_S_BRA=55, 
		CLOSE_S_BRA=56, COMMA=57, COLON=58, MAPPING_TYPE=59, SEQUENCE_TYPE=60, 
		SCHEMA_TYPE=61;
	public static final int
		RULE_uon = 0, RULE_json_collection = 1, RULE_json_map = 2, RULE_json_seq = 3, 
		RULE_pair_key = 4, RULE_json_pair = 5, RULE_presentation_properties = 6, 
		RULE_presentation_property = 7, RULE_description = 8, RULE_optional = 9, 
		RULE_string = 10, RULE_custom_type = 11, RULE_json_user_type = 12, RULE_scalar = 13, 
		RULE_string_scalar = 14, RULE_boolean_scalar = 15, RULE_url = 16, RULE_quantity_scalar = 17, 
		RULE_numeric_scalar = 18, RULE_coercible_numeric_scalar = 19, RULE_quantity = 20, 
		RULE_length = 21, RULE_mass = 22, RULE_time = 23, RULE_temperature = 24, 
		RULE_root_value = 25, RULE_json_value = 26, RULE_number_type = 27, RULE_schema = 28, 
		RULE_attributes = 29, RULE_attribute = 30, RULE_schema_presentations = 31, 
		RULE_schema_presentation = 32, RULE_schema_name = 33, RULE_schema_uuid = 34, 
		RULE_validation_properties = 35, RULE_string_validation = 36, RULE_string_properties = 37, 
		RULE_string_property = 38, RULE_string_max = 39, RULE_string_min = 40, 
		RULE_url_validation = 41, RULE_boolean_validation = 42, RULE_number_validation = 43, 
		RULE_number_properties = 44, RULE_number_property = 45, RULE_number_max = 46, 
		RULE_number_min = 47, RULE_number_validation_type = 48, RULE_quantity_validation = 49, 
		RULE_quantity_validation_types = 50, RULE_boolean = 51, RULE_true = 52, 
		RULE_false = 53, RULE_null = 54, RULE_literal = 55, RULE_number = 56;
	private static String[] makeRuleNames() {
		return new String[] {
			"uon", "json_collection", "json_map", "json_seq", "pair_key", "json_pair", 
			"presentation_properties", "presentation_property", "description", "optional", 
			"string", "custom_type", "json_user_type", "scalar", "string_scalar", 
			"boolean_scalar", "url", "quantity_scalar", "numeric_scalar", "coercible_numeric_scalar", 
			"quantity", "length", "mass", "time", "temperature", "root_value", "json_value", 
			"number_type", "schema", "attributes", "attribute", "schema_presentations", 
			"schema_presentation", "schema_name", "schema_uuid", "validation_properties", 
			"string_validation", "string_properties", "string_property", "string_max", 
			"string_min", "url_validation", "boolean_validation", "number_validation", 
			"number_properties", "number_property", "number_max", "number_min", "number_validation_type", 
			"quantity_validation", "quantity_validation_types", "boolean", "true", 
			"false", "null", "literal", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'description'", "'optional'", "'name'", "'uuid'", "'quantity'", 
			"'true'", "'True'", "'false'", "'False'", "'null'", "'none'", "'None'", 
			"'m'", "'km'", "'g'", "'kg'", "'s'", "'minute'", "'C'", "'K'", "'!!'", 
			"'!str'", "'!bool'", "'!url'", "'!float'", "'!float128'", "'!float64'", 
			"'!float32'", "'!int'", "'!int128'", "'!int64'", "'!int32'", "'!uint'", 
			"'!uint128'", "'!uint64'", "'!uint32'", "'max'", "'min'", "'length'", 
			"'mass'", "'temperature'", "'time'", null, null, null, null, null, null, 
			null, null, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "':'", "'!map'", 
			"'!seq'", "'!schema'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "METERS", "KILOMETERS", "GRAMS", "KILOGRAMS", "SECOND", "MINUTE", 
			"CELSIUS", "KELVIN", "CT", "STR_TYPE", "BOOL_TYPE", "URL_TYPE", "FLOAT_TYPE", 
			"FLOAT_128_TYPE", "FLOAT_64_TYPE", "FLOAT_32_TYPE", "INT_TYPE", "INT_128_TYPE", 
			"INT_64_TYPE", "INT_32_TYPE", "UINT_TYPE", "UINT_128_TYPE", "UINT_64_TYPE", 
			"UINT_32_TYPE", "MAX", "MIN", "LENGTH", "MASS", "TEMPERATURE", "TIME", 
			"QUOTED_STRING", "NUMBER", "NUMERIC_LITERAL", "SYMBOL", "UNQUOTED_STRING", 
			"IDENTIFIER", "WS", "LINE_COMMENT", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", 
			"CLOSE_C_BRA", "OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", 
			"SEQUENCE_TYPE", "SCHEMA_TYPE"
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CT) | (1L << OPEN_C_BRA) | (1L << OPEN_S_BRA) | (1L << MAPPING_TYPE) | (1L << SEQUENCE_TYPE))) != 0)) {
				{
				setState(114);
				root_value();
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
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_C_BRA:
			case MAPPING_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(117);
				json_map();
				}
				break;
			case OPEN_S_BRA:
			case SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(118);
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
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAPPING_TYPE) {
				{
				setState(121);
				match(MAPPING_TYPE);
				}
			}

			setState(124);
			match(OPEN_C_BRA);
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << QUOTED_STRING) | (1L << UNQUOTED_STRING))) != 0)) {
				{
				setState(125);
				json_pair();
				setState(130);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(126);
					match(COMMA);
					setState(127);
					json_pair();
					}
					}
					setState(132);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(135);
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
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEQUENCE_TYPE) {
				{
				setState(137);
				match(SEQUENCE_TYPE);
				}
			}

			setState(140);
			match(OPEN_S_BRA);
			setState(149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << CT) | (1L << STR_TYPE) | (1L << BOOL_TYPE) | (1L << URL_TYPE) | (1L << FLOAT_TYPE) | (1L << FLOAT_128_TYPE) | (1L << FLOAT_64_TYPE) | (1L << FLOAT_32_TYPE) | (1L << INT_TYPE) | (1L << INT_128_TYPE) | (1L << INT_64_TYPE) | (1L << INT_32_TYPE) | (1L << UINT_TYPE) | (1L << UINT_128_TYPE) | (1L << UINT_64_TYPE) | (1L << UINT_32_TYPE) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << SYMBOL) | (1L << UNQUOTED_STRING) | (1L << OPEN_C_BRA) | (1L << OPEN_S_BRA) | (1L << MAPPING_TYPE) | (1L << SEQUENCE_TYPE))) != 0)) {
				{
				setState(141);
				json_value();
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(142);
					match(COMMA);
					setState(143);
					json_value();
					}
					}
					setState(148);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(151);
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
		enterRule(_localctx, 8, RULE_pair_key);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			string();
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(154);
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
		enterRule(_localctx, 10, RULE_json_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			pair_key();
			setState(158);
			match(COLON);
			setState(159);
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
		enterRule(_localctx, 12, RULE_presentation_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(OPEN_PAR);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0 || _la==T__1) {
				{
				setState(162);
				presentation_property();
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(163);
					match(COMMA);
					setState(164);
					presentation_property();
					}
					}
					setState(169);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(172);
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
		enterRule(_localctx, 14, RULE_presentation_property);
		try {
			setState(176);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				optional();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(175);
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
		enterRule(_localctx, 16, RULE_description);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(T__0);
			setState(179);
			match(COLON);
			setState(180);
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
		enterRule(_localctx, 18, RULE_optional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			match(T__1);
			setState(183);
			match(COLON);
			setState(184);
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
		enterRule(_localctx, 20, RULE_string);
		try {
			setState(189);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case LENGTH:
			case MASS:
			case TEMPERATURE:
			case TIME:
				enterOuterAlt(_localctx, 1);
				{
				setState(186);
				literal();
				}
				break;
			case QUOTED_STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(187);
				match(QUOTED_STRING);
				}
				break;
			case UNQUOTED_STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(188);
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
		enterRule(_localctx, 22, RULE_custom_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(CT);
			setState(192);
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
		enterRule(_localctx, 24, RULE_json_user_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			custom_type();
			setState(195);
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
		enterRule(_localctx, 26, RULE_scalar);
		try {
			setState(201);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(197);
				quantity_scalar();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(198);
				string_scalar();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(199);
				boolean_scalar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(200);
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
		enterRule(_localctx, 28, RULE_string_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STR_TYPE) {
				{
				setState(203);
				match(STR_TYPE);
				}
			}

			setState(206);
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
		enterRule(_localctx, 30, RULE_boolean_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BOOL_TYPE) {
				{
				setState(208);
				match(BOOL_TYPE);
				}
			}

			setState(211);
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
		enterRule(_localctx, 32, RULE_url);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==URL_TYPE) {
				{
				setState(213);
				match(URL_TYPE);
				}
			}

			setState(216);
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
		enterRule(_localctx, 34, RULE_quantity_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			numeric_scalar();
			setState(220);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << METERS) | (1L << KILOMETERS) | (1L << GRAMS) | (1L << KILOGRAMS) | (1L << SECOND) | (1L << MINUTE) | (1L << CELSIUS) | (1L << KELVIN))) != 0)) {
				{
				setState(219);
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
		enterRule(_localctx, 36, RULE_numeric_scalar);
		try {
			setState(224);
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
				setState(222);
				coercible_numeric_scalar();
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
			case SYMBOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(223);
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
		enterRule(_localctx, 38, RULE_coercible_numeric_scalar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			number_type();
			setState(229);
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
				setState(227);
				coercible_numeric_scalar();
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
			case SYMBOL:
				{
				setState(228);
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
		enterRule(_localctx, 40, RULE_quantity);
		try {
			setState(235);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case METERS:
			case KILOMETERS:
				enterOuterAlt(_localctx, 1);
				{
				setState(231);
				length();
				}
				break;
			case GRAMS:
			case KILOGRAMS:
				enterOuterAlt(_localctx, 2);
				{
				setState(232);
				mass();
				}
				break;
			case SECOND:
			case MINUTE:
				enterOuterAlt(_localctx, 3);
				{
				setState(233);
				time();
				}
				break;
			case CELSIUS:
			case KELVIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(234);
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
		enterRule(_localctx, 42, RULE_length);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
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
		enterRule(_localctx, 44, RULE_mass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
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
		enterRule(_localctx, 46, RULE_time);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
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
		enterRule(_localctx, 48, RULE_temperature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
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
		enterRule(_localctx, 50, RULE_root_value);
		try {
			setState(247);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_C_BRA:
			case OPEN_S_BRA:
			case MAPPING_TYPE:
			case SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(245);
				json_collection();
				}
				break;
			case CT:
				enterOuterAlt(_localctx, 2);
				{
				setState(246);
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
		enterRule(_localctx, 52, RULE_json_value);
		try {
			setState(254);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(249);
				json_map();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(250);
				json_seq();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(251);
				scalar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(252);
				json_user_type();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(253);
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
		enterRule(_localctx, 54, RULE_number_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
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
		enterRule(_localctx, 56, RULE_schema);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			custom_type();
			setState(259);
			match(COLON);
			setState(260);
			match(SCHEMA_TYPE);
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(261);
				schema_presentations();
				}
			}

			setState(264);
			match(OPEN_C_BRA);
			setState(266);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << QUOTED_STRING) | (1L << UNQUOTED_STRING))) != 0)) {
				{
				setState(265);
				attributes();
				}
			}

			setState(268);
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
		enterRule(_localctx, 58, RULE_attributes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			attribute();
			setState(275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(271);
				match(COMMA);
				setState(272);
				attribute();
				}
				}
				setState(277);
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
		enterRule(_localctx, 60, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			pair_key();
			setState(279);
			match(COLON);
			setState(280);
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
		enterRule(_localctx, 62, RULE_schema_presentations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(OPEN_PAR);
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__2) | (1L << T__3))) != 0)) {
				{
				setState(283);
				schema_presentation();
				setState(288);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(284);
					match(COMMA);
					setState(285);
					schema_presentation();
					}
					}
					setState(290);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(293);
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
		enterRule(_localctx, 64, RULE_schema_presentation);
		try {
			setState(298);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				enterOuterAlt(_localctx, 1);
				{
				setState(295);
				schema_name();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(296);
				schema_uuid();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 3);
				{
				setState(297);
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
		enterRule(_localctx, 66, RULE_schema_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			match(T__2);
			setState(301);
			match(COLON);
			setState(302);
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
		enterRule(_localctx, 68, RULE_schema_uuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(T__3);
			setState(305);
			match(COLON);
			setState(306);
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
		enterRule(_localctx, 70, RULE_validation_properties);
		try {
			setState(312);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STR_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(308);
				string_validation();
				}
				break;
			case FLOAT_TYPE:
			case INT_TYPE:
			case UINT_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(309);
				number_validation();
				}
				break;
			case BOOL_TYPE:
				enterOuterAlt(_localctx, 3);
				{
				setState(310);
				boolean_validation();
				}
				break;
			case URL_TYPE:
				enterOuterAlt(_localctx, 4);
				{
				setState(311);
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
		enterRule(_localctx, 72, RULE_string_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			match(STR_TYPE);
			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(315);
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
		enterRule(_localctx, 74, RULE_string_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
			match(OPEN_PAR);
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAX || _la==MIN) {
				{
				setState(319);
				string_property();
				setState(324);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(320);
					match(COMMA);
					setState(321);
					string_property();
					}
					}
					setState(326);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(329);
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
		enterRule(_localctx, 76, RULE_string_property);
		try {
			setState(333);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(331);
				string_max();
				}
				break;
			case MIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(332);
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
		enterRule(_localctx, 78, RULE_string_max);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(MAX);
			setState(336);
			match(COLON);
			setState(337);
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
		public TerminalNode MIN() { return getToken(UONParser.MIN, 0); }
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
		enterRule(_localctx, 80, RULE_string_min);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			match(MIN);
			setState(340);
			match(COLON);
			setState(341);
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
		enterRule(_localctx, 82, RULE_url_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
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
		enterRule(_localctx, 84, RULE_boolean_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(345);
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
		enterRule(_localctx, 86, RULE_number_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			number_validation_type();
			setState(349);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(348);
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
		enterRule(_localctx, 88, RULE_number_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(OPEN_PAR);
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << MAX) | (1L << MIN))) != 0)) {
				{
				setState(352);
				number_property();
				setState(357);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(353);
					match(COMMA);
					setState(354);
					number_property();
					}
					}
					setState(359);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(362);
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
		enterRule(_localctx, 90, RULE_number_property);
		try {
			setState(367);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(364);
				number_max();
				}
				break;
			case MIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(365);
				number_min();
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 3);
				{
				setState(366);
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
		enterRule(_localctx, 92, RULE_number_max);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			match(MAX);
			setState(370);
			match(COLON);
			setState(371);
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
		enterRule(_localctx, 94, RULE_number_min);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			match(MIN);
			setState(374);
			match(COLON);
			setState(375);
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
		enterRule(_localctx, 96, RULE_number_validation_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
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
		enterRule(_localctx, 98, RULE_quantity_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(T__4);
			setState(380);
			match(COLON);
			setState(381);
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
		enterRule(_localctx, 100, RULE_quantity_validation_types);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
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
		enterRule(_localctx, 102, RULE_boolean);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__6:
				{
				setState(385);
				true();
				}
				break;
			case T__7:
			case T__8:
				{
				setState(386);
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
		enterRule(_localctx, 104, RULE_true);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
			_la = _input.LA(1);
			if ( !(_la==T__5 || _la==T__6) ) {
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
		enterRule(_localctx, 106, RULE_false);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			_la = _input.LA(1);
			if ( !(_la==T__7 || _la==T__8) ) {
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
		enterRule(_localctx, 108, RULE_null);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(393);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__9) | (1L << T__10) | (1L << T__11))) != 0)) ) {
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

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode LENGTH() { return getToken(UONParser.LENGTH, 0); }
		public TerminalNode MASS() { return getToken(UONParser.MASS, 0); }
		public TerminalNode TEMPERATURE() { return getToken(UONParser.TEMPERATURE, 0); }
		public TerminalNode TIME() { return getToken(UONParser.TIME, 0); }
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
		enterRule(_localctx, 110, RULE_literal);
		try {
			setState(401);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LENGTH:
				enterOuterAlt(_localctx, 1);
				{
				setState(395);
				match(LENGTH);
				}
				break;
			case MASS:
				enterOuterAlt(_localctx, 2);
				{
				setState(396);
				match(MASS);
				}
				break;
			case TEMPERATURE:
				enterOuterAlt(_localctx, 3);
				{
				setState(397);
				match(TEMPERATURE);
				}
				break;
			case TIME:
				enterOuterAlt(_localctx, 4);
				{
				setState(398);
				match(TIME);
				}
				break;
			case T__5:
			case T__6:
			case T__7:
			case T__8:
				enterOuterAlt(_localctx, 5);
				{
				setState(399);
				boolean();
				}
				break;
			case T__9:
			case T__10:
			case T__11:
				enterOuterAlt(_localctx, 6);
				{
				setState(400);
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
		enterRule(_localctx, 112, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SYMBOL) {
				{
				setState(403);
				match(SYMBOL);
				}
			}

			setState(406);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3?\u019b\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\3\2\5\2v\n\2\3\3\3"+
		"\3\5\3z\n\3\3\4\5\4}\n\4\3\4\3\4\3\4\3\4\7\4\u0083\n\4\f\4\16\4\u0086"+
		"\13\4\5\4\u0088\n\4\3\4\3\4\3\5\5\5\u008d\n\5\3\5\3\5\3\5\3\5\7\5\u0093"+
		"\n\5\f\5\16\5\u0096\13\5\5\5\u0098\n\5\3\5\3\5\3\6\3\6\5\6\u009e\n\6\3"+
		"\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\7\b\u00a8\n\b\f\b\16\b\u00ab\13\b\5\b\u00ad"+
		"\n\b\3\b\3\b\3\t\3\t\5\t\u00b3\n\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\f\5\f\u00c0\n\f\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3"+
		"\17\5\17\u00cc\n\17\3\20\5\20\u00cf\n\20\3\20\3\20\3\21\5\21\u00d4\n\21"+
		"\3\21\3\21\3\22\5\22\u00d9\n\22\3\22\3\22\3\23\3\23\5\23\u00df\n\23\3"+
		"\24\3\24\5\24\u00e3\n\24\3\25\3\25\3\25\5\25\u00e8\n\25\3\26\3\26\3\26"+
		"\3\26\5\26\u00ee\n\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33"+
		"\5\33\u00fa\n\33\3\34\3\34\3\34\3\34\3\34\5\34\u0101\n\34\3\35\3\35\3"+
		"\36\3\36\3\36\3\36\5\36\u0109\n\36\3\36\3\36\5\36\u010d\n\36\3\36\3\36"+
		"\3\37\3\37\3\37\7\37\u0114\n\37\f\37\16\37\u0117\13\37\3 \3 \3 \3 \3!"+
		"\3!\3!\3!\7!\u0121\n!\f!\16!\u0124\13!\5!\u0126\n!\3!\3!\3\"\3\"\3\"\5"+
		"\"\u012d\n\"\3#\3#\3#\3#\3$\3$\3$\3$\3%\3%\3%\3%\5%\u013b\n%\3&\3&\5&"+
		"\u013f\n&\3\'\3\'\3\'\3\'\7\'\u0145\n\'\f\'\16\'\u0148\13\'\5\'\u014a"+
		"\n\'\3\'\3\'\3(\3(\5(\u0150\n(\3)\3)\3)\3)\3*\3*\3*\3*\3+\3+\3,\3,\3-"+
		"\3-\5-\u0160\n-\3.\3.\3.\3.\7.\u0166\n.\f.\16.\u0169\13.\5.\u016b\n.\3"+
		".\3.\3/\3/\3/\5/\u0172\n/\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\62"+
		"\3\62\3\63\3\63\3\63\3\63\3\64\3\64\3\65\3\65\5\65\u0186\n\65\3\66\3\66"+
		"\3\67\3\67\38\38\39\39\39\39\39\39\59\u0194\n9\3:\5:\u0197\n:\3:\3:\3"+
		":\2\2;\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<"+
		">@BDFHJLNPRTVXZ\\^`bdfhjlnpr\2\r\3\2\17\20\3\2\21\22\3\2\23\24\3\2\25"+
		"\26\3\2\33&\5\2\33\33\37\37##\3\2),\3\2\b\t\3\2\n\13\3\2\f\16\3\2./\2"+
		"\u019a\2u\3\2\2\2\4y\3\2\2\2\6|\3\2\2\2\b\u008c\3\2\2\2\n\u009b\3\2\2"+
		"\2\f\u009f\3\2\2\2\16\u00a3\3\2\2\2\20\u00b2\3\2\2\2\22\u00b4\3\2\2\2"+
		"\24\u00b8\3\2\2\2\26\u00bf\3\2\2\2\30\u00c1\3\2\2\2\32\u00c4\3\2\2\2\34"+
		"\u00cb\3\2\2\2\36\u00ce\3\2\2\2 \u00d3\3\2\2\2\"\u00d8\3\2\2\2$\u00dc"+
		"\3\2\2\2&\u00e2\3\2\2\2(\u00e4\3\2\2\2*\u00ed\3\2\2\2,\u00ef\3\2\2\2."+
		"\u00f1\3\2\2\2\60\u00f3\3\2\2\2\62\u00f5\3\2\2\2\64\u00f9\3\2\2\2\66\u0100"+
		"\3\2\2\28\u0102\3\2\2\2:\u0104\3\2\2\2<\u0110\3\2\2\2>\u0118\3\2\2\2@"+
		"\u011c\3\2\2\2B\u012c\3\2\2\2D\u012e\3\2\2\2F\u0132\3\2\2\2H\u013a\3\2"+
		"\2\2J\u013c\3\2\2\2L\u0140\3\2\2\2N\u014f\3\2\2\2P\u0151\3\2\2\2R\u0155"+
		"\3\2\2\2T\u0159\3\2\2\2V\u015b\3\2\2\2X\u015d\3\2\2\2Z\u0161\3\2\2\2\\"+
		"\u0171\3\2\2\2^\u0173\3\2\2\2`\u0177\3\2\2\2b\u017b\3\2\2\2d\u017d\3\2"+
		"\2\2f\u0181\3\2\2\2h\u0185\3\2\2\2j\u0187\3\2\2\2l\u0189\3\2\2\2n\u018b"+
		"\3\2\2\2p\u0193\3\2\2\2r\u0196\3\2\2\2tv\5\64\33\2ut\3\2\2\2uv\3\2\2\2"+
		"v\3\3\2\2\2wz\5\6\4\2xz\5\b\5\2yw\3\2\2\2yx\3\2\2\2z\5\3\2\2\2{}\7=\2"+
		"\2|{\3\2\2\2|}\3\2\2\2}~\3\2\2\2~\u0087\7\67\2\2\177\u0084\5\f\7\2\u0080"+
		"\u0081\7;\2\2\u0081\u0083\5\f\7\2\u0082\u0080\3\2\2\2\u0083\u0086\3\2"+
		"\2\2\u0084\u0082\3\2\2\2\u0084\u0085\3\2\2\2\u0085\u0088\3\2\2\2\u0086"+
		"\u0084\3\2\2\2\u0087\177\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0089\3\2\2"+
		"\2\u0089\u008a\78\2\2\u008a\7\3\2\2\2\u008b\u008d\7>\2\2\u008c\u008b\3"+
		"\2\2\2\u008c\u008d\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u0097\79\2\2\u008f"+
		"\u0094\5\66\34\2\u0090\u0091\7;\2\2\u0091\u0093\5\66\34\2\u0092\u0090"+
		"\3\2\2\2\u0093\u0096\3\2\2\2\u0094\u0092\3\2\2\2\u0094\u0095\3\2\2\2\u0095"+
		"\u0098\3\2\2\2\u0096\u0094\3\2\2\2\u0097\u008f\3\2\2\2\u0097\u0098\3\2"+
		"\2\2\u0098\u0099\3\2\2\2\u0099\u009a\7:\2\2\u009a\t\3\2\2\2\u009b\u009d"+
		"\5\26\f\2\u009c\u009e\5\16\b\2\u009d\u009c\3\2\2\2\u009d\u009e\3\2\2\2"+
		"\u009e\13\3\2\2\2\u009f\u00a0\5\n\6\2\u00a0\u00a1\7<\2\2\u00a1\u00a2\5"+
		"\66\34\2\u00a2\r\3\2\2\2\u00a3\u00ac\7\65\2\2\u00a4\u00a9\5\20\t\2\u00a5"+
		"\u00a6\7;\2\2\u00a6\u00a8\5\20\t\2\u00a7\u00a5\3\2\2\2\u00a8\u00ab\3\2"+
		"\2\2\u00a9\u00a7\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ad\3\2\2\2\u00ab"+
		"\u00a9\3\2\2\2\u00ac\u00a4\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00ae\3\2"+
		"\2\2\u00ae\u00af\7\66\2\2\u00af\17\3\2\2\2\u00b0\u00b3\5\24\13\2\u00b1"+
		"\u00b3\5\22\n\2\u00b2\u00b0\3\2\2\2\u00b2\u00b1\3\2\2\2\u00b3\21\3\2\2"+
		"\2\u00b4\u00b5\7\3\2\2\u00b5\u00b6\7<\2\2\u00b6\u00b7\5\26\f\2\u00b7\23"+
		"\3\2\2\2\u00b8\u00b9\7\4\2\2\u00b9\u00ba\7<\2\2\u00ba\u00bb\5h\65\2\u00bb"+
		"\25\3\2\2\2\u00bc\u00c0\5p9\2\u00bd\u00c0\7-\2\2\u00be\u00c0\7\61\2\2"+
		"\u00bf\u00bc\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00be\3\2\2\2\u00c0\27"+
		"\3\2\2\2\u00c1\u00c2\7\27\2\2\u00c2\u00c3\7\61\2\2\u00c3\31\3\2\2\2\u00c4"+
		"\u00c5\5\30\r\2\u00c5\u00c6\5\6\4\2\u00c6\33\3\2\2\2\u00c7\u00cc\5$\23"+
		"\2\u00c8\u00cc\5\36\20\2\u00c9\u00cc\5 \21\2\u00ca\u00cc\5\"\22\2\u00cb"+
		"\u00c7\3\2\2\2\u00cb\u00c8\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cb\u00ca\3\2"+
		"\2\2\u00cc\35\3\2\2\2\u00cd\u00cf\7\30\2\2\u00ce\u00cd\3\2\2\2\u00ce\u00cf"+
		"\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0\u00d1\5\26\f\2\u00d1\37\3\2\2\2\u00d2"+
		"\u00d4\7\31\2\2\u00d3\u00d2\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d5\3"+
		"\2\2\2\u00d5\u00d6\5h\65\2\u00d6!\3\2\2\2\u00d7\u00d9\7\32\2\2\u00d8\u00d7"+
		"\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00db\5\26\f\2"+
		"\u00db#\3\2\2\2\u00dc\u00de\5&\24\2\u00dd\u00df\5*\26\2\u00de\u00dd\3"+
		"\2\2\2\u00de\u00df\3\2\2\2\u00df%\3\2\2\2\u00e0\u00e3\5(\25\2\u00e1\u00e3"+
		"\5r:\2\u00e2\u00e0\3\2\2\2\u00e2\u00e1\3\2\2\2\u00e3\'\3\2\2\2\u00e4\u00e7"+
		"\58\35\2\u00e5\u00e8\5(\25\2\u00e6\u00e8\5r:\2\u00e7\u00e5\3\2\2\2\u00e7"+
		"\u00e6\3\2\2\2\u00e8)\3\2\2\2\u00e9\u00ee\5,\27\2\u00ea\u00ee\5.\30\2"+
		"\u00eb\u00ee\5\60\31\2\u00ec\u00ee\5\62\32\2\u00ed\u00e9\3\2\2\2\u00ed"+
		"\u00ea\3\2\2\2\u00ed\u00eb\3\2\2\2\u00ed\u00ec\3\2\2\2\u00ee+\3\2\2\2"+
		"\u00ef\u00f0\t\2\2\2\u00f0-\3\2\2\2\u00f1\u00f2\t\3\2\2\u00f2/\3\2\2\2"+
		"\u00f3\u00f4\t\4\2\2\u00f4\61\3\2\2\2\u00f5\u00f6\t\5\2\2\u00f6\63\3\2"+
		"\2\2\u00f7\u00fa\5\4\3\2\u00f8\u00fa\5:\36\2\u00f9\u00f7\3\2\2\2\u00f9"+
		"\u00f8\3\2\2\2\u00fa\65\3\2\2\2\u00fb\u0101\5\6\4\2\u00fc\u0101\5\b\5"+
		"\2\u00fd\u0101\5\34\17\2\u00fe\u0101\5\32\16\2\u00ff\u0101\5n8\2\u0100"+
		"\u00fb\3\2\2\2\u0100\u00fc\3\2\2\2\u0100\u00fd\3\2\2\2\u0100\u00fe\3\2"+
		"\2\2\u0100\u00ff\3\2\2\2\u0101\67\3\2\2\2\u0102\u0103\t\6\2\2\u01039\3"+
		"\2\2\2\u0104\u0105\5\30\r\2\u0105\u0106\7<\2\2\u0106\u0108\7?\2\2\u0107"+
		"\u0109\5@!\2\u0108\u0107\3\2\2\2\u0108\u0109\3\2\2\2\u0109\u010a\3\2\2"+
		"\2\u010a\u010c\7\67\2\2\u010b\u010d\5<\37\2\u010c\u010b\3\2\2\2\u010c"+
		"\u010d\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u010f\78\2\2\u010f;\3\2\2\2\u0110"+
		"\u0115\5> \2\u0111\u0112\7;\2\2\u0112\u0114\5> \2\u0113\u0111\3\2\2\2"+
		"\u0114\u0117\3\2\2\2\u0115\u0113\3\2\2\2\u0115\u0116\3\2\2\2\u0116=\3"+
		"\2\2\2\u0117\u0115\3\2\2\2\u0118\u0119\5\n\6\2\u0119\u011a\7<\2\2\u011a"+
		"\u011b\5H%\2\u011b?\3\2\2\2\u011c\u0125\7\65\2\2\u011d\u0122\5B\"\2\u011e"+
		"\u011f\7;\2\2\u011f\u0121\5B\"\2\u0120\u011e\3\2\2\2\u0121\u0124\3\2\2"+
		"\2\u0122\u0120\3\2\2\2\u0122\u0123\3\2\2\2\u0123\u0126\3\2\2\2\u0124\u0122"+
		"\3\2\2\2\u0125\u011d\3\2\2\2\u0125\u0126\3\2\2\2\u0126\u0127\3\2\2\2\u0127"+
		"\u0128\7\66\2\2\u0128A\3\2\2\2\u0129\u012d\5D#\2\u012a\u012d\5F$\2\u012b"+
		"\u012d\5\22\n\2\u012c\u0129\3\2\2\2\u012c\u012a\3\2\2\2\u012c\u012b\3"+
		"\2\2\2\u012dC\3\2\2\2\u012e\u012f\7\5\2\2\u012f\u0130\7<\2\2\u0130\u0131"+
		"\5\26\f\2\u0131E\3\2\2\2\u0132\u0133\7\6\2\2\u0133\u0134\7<\2\2\u0134"+
		"\u0135\5\"\22\2\u0135G\3\2\2\2\u0136\u013b\5J&\2\u0137\u013b\5X-\2\u0138"+
		"\u013b\5V,\2\u0139\u013b\5T+\2\u013a\u0136\3\2\2\2\u013a\u0137\3\2\2\2"+
		"\u013a\u0138\3\2\2\2\u013a\u0139\3\2\2\2\u013bI\3\2\2\2\u013c\u013e\7"+
		"\30\2\2\u013d\u013f\5L\'\2\u013e\u013d\3\2\2\2\u013e\u013f\3\2\2\2\u013f"+
		"K\3\2\2\2\u0140\u0149\7\65\2\2\u0141\u0146\5N(\2\u0142\u0143\7;\2\2\u0143"+
		"\u0145\5N(\2\u0144\u0142\3\2\2\2\u0145\u0148\3\2\2\2\u0146\u0144\3\2\2"+
		"\2\u0146\u0147\3\2\2\2\u0147\u014a\3\2\2\2\u0148\u0146\3\2\2\2\u0149\u0141"+
		"\3\2\2\2\u0149\u014a\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014c\7\66\2\2"+
		"\u014cM\3\2\2\2\u014d\u0150\5P)\2\u014e\u0150\5R*\2\u014f\u014d\3\2\2"+
		"\2\u014f\u014e\3\2\2\2\u0150O\3\2\2\2\u0151\u0152\7\'\2\2\u0152\u0153"+
		"\7<\2\2\u0153\u0154\5\26\f\2\u0154Q\3\2\2\2\u0155\u0156\7(\2\2\u0156\u0157"+
		"\7<\2\2\u0157\u0158\5\26\f\2\u0158S\3\2\2\2\u0159\u015a\7\32\2\2\u015a"+
		"U\3\2\2\2\u015b\u015c\7\31\2\2\u015cW\3\2\2\2\u015d\u015f\5b\62\2\u015e"+
		"\u0160\5Z.\2\u015f\u015e\3\2\2\2\u015f\u0160\3\2\2\2\u0160Y\3\2\2\2\u0161"+
		"\u016a\7\65\2\2\u0162\u0167\5\\/\2\u0163\u0164\7;\2\2\u0164\u0166\5\\"+
		"/\2\u0165\u0163\3\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165\3\2\2\2\u0167"+
		"\u0168\3\2\2\2\u0168\u016b\3\2\2\2\u0169\u0167\3\2\2\2\u016a\u0162\3\2"+
		"\2\2\u016a\u016b\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\7\66\2\2\u016d"+
		"[\3\2\2\2\u016e\u0172\5^\60\2\u016f\u0172\5`\61\2\u0170\u0172\5d\63\2"+
		"\u0171\u016e\3\2\2\2\u0171\u016f\3\2\2\2\u0171\u0170\3\2\2\2\u0172]\3"+
		"\2\2\2\u0173\u0174\7\'\2\2\u0174\u0175\7<\2\2\u0175\u0176\5r:\2\u0176"+
		"_\3\2\2\2\u0177\u0178\7(\2\2\u0178\u0179\7<\2\2\u0179\u017a\5r:\2\u017a"+
		"a\3\2\2\2\u017b\u017c\t\7\2\2\u017cc\3\2\2\2\u017d\u017e\7\7\2\2\u017e"+
		"\u017f\7<\2\2\u017f\u0180\5f\64\2\u0180e\3\2\2\2\u0181\u0182\t\b\2\2\u0182"+
		"g\3\2\2\2\u0183\u0186\5j\66\2\u0184\u0186\5l\67\2\u0185\u0183\3\2\2\2"+
		"\u0185\u0184\3\2\2\2\u0186i\3\2\2\2\u0187\u0188\t\t\2\2\u0188k\3\2\2\2"+
		"\u0189\u018a\t\n\2\2\u018am\3\2\2\2\u018b\u018c\t\13\2\2\u018co\3\2\2"+
		"\2\u018d\u0194\7)\2\2\u018e\u0194\7*\2\2\u018f\u0194\7+\2\2\u0190\u0194"+
		"\7,\2\2\u0191\u0194\5h\65\2\u0192\u0194\5n8\2\u0193\u018d\3\2\2\2\u0193"+
		"\u018e\3\2\2\2\u0193\u018f\3\2\2\2\u0193\u0190\3\2\2\2\u0193\u0191\3\2"+
		"\2\2\u0193\u0192\3\2\2\2\u0194q\3\2\2\2\u0195\u0197\7\60\2\2\u0196\u0195"+
		"\3\2\2\2\u0196\u0197\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u0199\t\f\2\2\u0199"+
		"s\3\2\2\2+uy|\u0084\u0087\u008c\u0094\u0097\u009d\u00a9\u00ac\u00b2\u00bf"+
		"\u00cb\u00ce\u00d3\u00d8\u00de\u00e2\u00e7\u00ed\u00f9\u0100\u0108\u010c"+
		"\u0115\u0122\u0125\u012c\u013a\u013e\u0146\u0149\u014f\u015f\u0167\u016a"+
		"\u0171\u0185\u0193\u0196";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}