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
		NUMERIC_LITERAL=50, UNQUOTED_STRING=51, IDENTIFIER=52, WS=53, LINE_COMMENT=54, 
		NEWLINE=55, MINUS=56, OPEN_PAR=57, CLOSE_PAR=58, OPEN_C_BRA=59, CLOSE_C_BRA=60, 
		OPEN_S_BRA=61, CLOSE_S_BRA=62, COMMA=63, COLON=64, MAPPING_TYPE=65, ORDERED_MAPPING_TYPE=66, 
		SEQUENCE_TYPE=67, ORDERED_SEQUENCE_TYPE=68, SCHEMA_TYPE=69, INDENT=70, 
		DEDENT=71;
	public static final int
		RULE_uon = 0, RULE_root_value = 1, RULE_json_collection = 2, RULE_yaml_collection_nested = 3, 
		RULE_json_map = 4, RULE_json_seq = 5, RULE_json_user_type = 6, RULE_json_value = 7, 
		RULE_pair_key = 8, RULE_json_pair = 9, RULE_yaml_collection = 10, RULE_yaml_map = 11, 
		RULE_yaml_seq = 12, RULE_seq_item = 13, RULE_pair = 14, RULE_yaml_value = 15, 
		RULE_yaml_user_type = 16, RULE_presentation_properties = 17, RULE_presentation_property = 18, 
		RULE_description = 19, RULE_optional = 20, RULE_types_properties = 21, 
		RULE_types_propertie = 22, RULE_comment = 23, RULE_number_presentation = 24, 
		RULE_number_presentation_properties = 25, RULE_number_presentation_propertie = 26, 
		RULE_unit = 27, RULE_schema = 28, RULE_attributes = 29, RULE_attribute = 30, 
		RULE_schema_presentations = 31, RULE_schema_presentation = 32, RULE_schema_name = 33, 
		RULE_schema_uuid = 34, RULE_validation_properties = 35, RULE_string_validation = 36, 
		RULE_string_properties = 37, RULE_string_property = 38, RULE_string_max = 39, 
		RULE_string_min = 40, RULE_url_validation = 41, RULE_boolean_validation = 42, 
		RULE_number_validation = 43, RULE_number_properties = 44, RULE_number_property = 45, 
		RULE_number_max = 46, RULE_number_min = 47, RULE_number_validation_type = 48, 
		RULE_quantity_validation = 49, RULE_quantity_validation_types = 50, RULE_scalar = 51, 
		RULE_quantity_scalar = 52, RULE_numeric_scalar = 53, RULE_coercible_numeric_scalar = 54, 
		RULE_string_scalar = 55, RULE_boolean_scalar = 56, RULE_url = 57, RULE_quantity = 58, 
		RULE_length = 59, RULE_mass = 60, RULE_time = 61, RULE_temperature = 62, 
		RULE_number_type = 63, RULE_boolean = 64, RULE_true = 65, RULE_false = 66, 
		RULE_null = 67, RULE_custom_type = 68, RULE_string = 69, RULE_literal = 70, 
		RULE_number = 71;
	private static String[] makeRuleNames() {
		return new String[] {
			"uon", "root_value", "json_collection", "yaml_collection_nested", "json_map", 
			"json_seq", "json_user_type", "json_value", "pair_key", "json_pair", 
			"yaml_collection", "yaml_map", "yaml_seq", "seq_item", "pair", "yaml_value", 
			"yaml_user_type", "presentation_properties", "presentation_property", 
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
			"NEWLINE", "MINUS", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", 
			"OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", "ORDERED_MAPPING_TYPE", 
			"SEQUENCE_TYPE", "ORDERED_SEQUENCE_TYPE", "SCHEMA_TYPE", "INDENT", "DEDENT"
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
		public List<TerminalNode> NEWLINE() { return getTokens(UONParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(UONParser.NEWLINE, i);
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
			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(144);
				match(NEWLINE);
				}
				}
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(150);
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
		public Yaml_collectionContext yaml_collection() {
			return getRuleContext(Yaml_collectionContext.class,0);
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
			setState(155);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(152);
				json_collection();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(153);
				yaml_collection();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(154);
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
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_C_BRA:
			case MAPPING_TYPE:
			case ORDERED_MAPPING_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(157);
				json_map();
				}
				break;
			case OPEN_S_BRA:
			case SEQUENCE_TYPE:
			case ORDERED_SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(158);
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

	public static class Yaml_collection_nestedContext extends ParserRuleContext {
		public TerminalNode NEWLINE() { return getToken(UONParser.NEWLINE, 0); }
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
		enterRule(_localctx, 6, RULE_yaml_collection_nested);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(NEWLINE);
			{
			setState(162);
			match(INDENT);
			setState(163);
			yaml_collection();
			setState(164);
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
		enterRule(_localctx, 8, RULE_json_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAPPING_TYPE || _la==ORDERED_MAPPING_TYPE) {
				{
				setState(166);
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

			setState(169);
			match(OPEN_C_BRA);
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << UNQUOTED_STRING))) != 0)) {
				{
				setState(170);
				json_pair();
				setState(175);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(171);
					match(COMMA);
					setState(172);
					json_pair();
					}
					}
					setState(177);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(180);
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
		enterRule(_localctx, 10, RULE_json_seq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEQUENCE_TYPE || _la==ORDERED_SEQUENCE_TYPE) {
				{
				setState(182);
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

			setState(185);
			match(OPEN_S_BRA);
			setState(194);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << CT) | (1L << STR_TYPE) | (1L << BOOL_TYPE) | (1L << URL_TYPE) | (1L << FLOAT_TYPE) | (1L << FLOAT_128_TYPE) | (1L << FLOAT_64_TYPE) | (1L << FLOAT_32_TYPE) | (1L << INT_TYPE) | (1L << INT_128_TYPE) | (1L << INT_64_TYPE) | (1L << INT_32_TYPE) | (1L << UINT_TYPE) | (1L << UINT_128_TYPE) | (1L << UINT_64_TYPE) | (1L << UINT_32_TYPE) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << UNQUOTED_STRING) | (1L << OPEN_C_BRA) | (1L << OPEN_S_BRA))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (MAPPING_TYPE - 65)) | (1L << (ORDERED_MAPPING_TYPE - 65)) | (1L << (SEQUENCE_TYPE - 65)) | (1L << (ORDERED_SEQUENCE_TYPE - 65)))) != 0)) {
				{
				setState(186);
				json_value();
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(187);
					match(COMMA);
					setState(188);
					json_value();
					}
					}
					setState(193);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(196);
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
		enterRule(_localctx, 12, RULE_json_user_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			custom_type();
			setState(199);
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
		enterRule(_localctx, 14, RULE_json_value);
		try {
			setState(206);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(201);
				json_map();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(202);
				json_seq();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(203);
				scalar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(204);
				json_user_type();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(205);
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
		enterRule(_localctx, 16, RULE_pair_key);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			string();
			setState(210);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(209);
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
		enterRule(_localctx, 18, RULE_json_pair);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			pair_key();
			setState(213);
			match(COLON);
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << CT) | (1L << STR_TYPE) | (1L << BOOL_TYPE) | (1L << URL_TYPE) | (1L << FLOAT_TYPE) | (1L << FLOAT_128_TYPE) | (1L << FLOAT_64_TYPE) | (1L << FLOAT_32_TYPE) | (1L << INT_TYPE) | (1L << INT_128_TYPE) | (1L << INT_64_TYPE) | (1L << INT_32_TYPE) | (1L << UINT_TYPE) | (1L << UINT_128_TYPE) | (1L << UINT_64_TYPE) | (1L << UINT_32_TYPE) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << UNQUOTED_STRING) | (1L << OPEN_C_BRA) | (1L << OPEN_S_BRA))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (MAPPING_TYPE - 65)) | (1L << (ORDERED_MAPPING_TYPE - 65)) | (1L << (SEQUENCE_TYPE - 65)) | (1L << (ORDERED_SEQUENCE_TYPE - 65)))) != 0)) {
				{
				setState(214);
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
		enterRule(_localctx, 20, RULE_yaml_collection);
		try {
			setState(219);
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
			case QUOTED_STRING:
			case NUMBER:
			case NUMERIC_LITERAL:
			case UNQUOTED_STRING:
			case MAPPING_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(217);
				yaml_map();
				}
				break;
			case MINUS:
			case SEQUENCE_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(218);
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
		enterRule(_localctx, 22, RULE_yaml_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAPPING_TYPE) {
				{
				setState(221);
				match(MAPPING_TYPE);
				}
			}

			setState(225); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(224);
				pair();
				}
				}
				setState(227); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << UNQUOTED_STRING))) != 0) );
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
		enterRule(_localctx, 24, RULE_yaml_seq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEQUENCE_TYPE) {
				{
				setState(229);
				match(SEQUENCE_TYPE);
				}
			}

			setState(233); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(232);
				seq_item();
				}
				}
				setState(235); 
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
		enterRule(_localctx, 26, RULE_seq_item);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
			match(MINUS);
			setState(238);
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
		enterRule(_localctx, 28, RULE_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			pair_key();
			setState(241);
			match(COLON);
			setState(242);
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

	public static class Yaml_valueContext extends ParserRuleContext {
		public ScalarContext scalar() {
			return getRuleContext(ScalarContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(UONParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(UONParser.NEWLINE, i);
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
		enterRule(_localctx, 30, RULE_yaml_value);
		int _la;
		try {
			setState(254);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(245);
				scalar();
				setState(247); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(246);
					match(NEWLINE);
					}
					}
					setState(249); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==NEWLINE );
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(251);
				yaml_collection_nested();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(252);
				yaml_user_type();
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

	public static class Yaml_user_typeContext extends ParserRuleContext {
		public TerminalNode NEWLINE() { return getToken(UONParser.NEWLINE, 0); }
		public TerminalNode INDENT() { return getToken(UONParser.INDENT, 0); }
		public Custom_typeContext custom_type() {
			return getRuleContext(Custom_typeContext.class,0);
		}
		public Yaml_mapContext yaml_map() {
			return getRuleContext(Yaml_mapContext.class,0);
		}
		public TerminalNode DEDENT() { return getToken(UONParser.DEDENT, 0); }
		public Yaml_user_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yaml_user_type; }
	}

	public final Yaml_user_typeContext yaml_user_type() throws RecognitionException {
		Yaml_user_typeContext _localctx = new Yaml_user_typeContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_yaml_user_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(NEWLINE);
			setState(257);
			match(INDENT);
			setState(258);
			custom_type();
			setState(259);
			yaml_map();
			setState(260);
			match(DEDENT);
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
		enterRule(_localctx, 34, RULE_presentation_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			match(OPEN_PAR);
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DESCRIPTION || _la==OPTIONAL) {
				{
				setState(263);
				presentation_property();
				setState(268);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(264);
					match(COMMA);
					setState(265);
					presentation_property();
					}
					}
					setState(270);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(273);
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
		enterRule(_localctx, 36, RULE_presentation_property);
		try {
			setState(277);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPTIONAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(275);
				optional();
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(276);
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
		enterRule(_localctx, 38, RULE_description);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			match(DESCRIPTION);
			setState(280);
			match(COLON);
			setState(281);
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
		enterRule(_localctx, 40, RULE_optional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			match(OPTIONAL);
			setState(284);
			match(COLON);
			setState(285);
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
		enterRule(_localctx, 42, RULE_types_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
			match(OPEN_PAR);
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << COMMENT))) != 0)) {
				{
				setState(288);
				types_propertie();
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(289);
					match(COMMA);
					setState(290);
					types_propertie();
					}
					}
					setState(295);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(298);
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
		enterRule(_localctx, 44, RULE_types_propertie);
		try {
			setState(303);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMMENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(300);
				comment();
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(301);
				description();
				}
				break;
			case OPTIONAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(302);
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
		enterRule(_localctx, 46, RULE_comment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(COMMENT);
			setState(306);
			match(COLON);
			setState(307);
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
		enterRule(_localctx, 48, RULE_number_presentation);
		try {
			setState(311);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DESCRIPTION:
			case OPTIONAL:
			case COMMENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(309);
				types_propertie();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(310);
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
		enterRule(_localctx, 50, RULE_number_presentation_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			match(OPEN_PAR);
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << COMMENT))) != 0)) {
				{
				setState(314);
				number_presentation();
				setState(319);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(315);
					match(COMMA);
					setState(316);
					number_presentation();
					}
					}
					setState(321);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(324);
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
		enterRule(_localctx, 52, RULE_number_presentation_propertie);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
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
		enterRule(_localctx, 54, RULE_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(T__0);
			setState(329);
			match(COLON);
			setState(330);
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
		enterRule(_localctx, 56, RULE_schema);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			custom_type();
			setState(333);
			match(COLON);
			setState(334);
			match(SCHEMA_TYPE);
			setState(336);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(335);
				schema_presentations();
				}
			}

			setState(338);
			match(OPEN_C_BRA);
			setState(340);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << LENGTH) | (1L << MASS) | (1L << TEMPERATURE) | (1L << TIME) | (1L << NAME) | (1L << UUID) | (1L << DESCRIPTION) | (1L << OPTIONAL) | (1L << QUOTED_STRING) | (1L << NUMBER) | (1L << NUMERIC_LITERAL) | (1L << UNQUOTED_STRING))) != 0)) {
				{
				setState(339);
				attributes();
				}
			}

			setState(342);
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
			setState(344);
			attribute();
			setState(349);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(345);
				match(COMMA);
				setState(346);
				attribute();
				}
				}
				setState(351);
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
			setState(352);
			pair_key();
			setState(353);
			match(COLON);
			setState(354);
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
			setState(356);
			match(OPEN_PAR);
			setState(365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NAME) | (1L << UUID) | (1L << DESCRIPTION))) != 0)) {
				{
				setState(357);
				schema_presentation();
				setState(362);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(358);
					match(COMMA);
					setState(359);
					schema_presentation();
					}
					}
					setState(364);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(367);
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
			setState(372);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(369);
				schema_name();
				}
				break;
			case UUID:
				enterOuterAlt(_localctx, 2);
				{
				setState(370);
				schema_uuid();
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(371);
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
		enterRule(_localctx, 66, RULE_schema_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(NAME);
			setState(375);
			match(COLON);
			setState(376);
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
		enterRule(_localctx, 68, RULE_schema_uuid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(UUID);
			setState(379);
			match(COLON);
			setState(380);
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
			setState(386);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STR_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(382);
				string_validation();
				}
				break;
			case FLOAT_TYPE:
			case INT_TYPE:
			case UINT_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(383);
				number_validation();
				}
				break;
			case BOOL_TYPE:
				enterOuterAlt(_localctx, 3);
				{
				setState(384);
				boolean_validation();
				}
				break;
			case URL_TYPE:
				enterOuterAlt(_localctx, 4);
				{
				setState(385);
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
			setState(388);
			match(STR_TYPE);
			setState(390);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(389);
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
			setState(392);
			match(OPEN_PAR);
			setState(401);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAX || _la==MIN) {
				{
				setState(393);
				string_property();
				setState(398);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(394);
					match(COMMA);
					setState(395);
					string_property();
					}
					}
					setState(400);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(403);
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
			setState(407);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(405);
				string_max();
				}
				break;
			case MIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(406);
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
		enterRule(_localctx, 78, RULE_string_max);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(409);
			match(MAX);
			setState(410);
			match(COLON);
			setState(411);
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
		enterRule(_localctx, 80, RULE_string_min);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(MIN);
			setState(414);
			match(COLON);
			setState(415);
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
		enterRule(_localctx, 82, RULE_url_validation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
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
			setState(419);
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
			setState(421);
			number_validation_type();
			setState(423);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(422);
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
			setState(425);
			match(OPEN_PAR);
			setState(434);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << MAX) | (1L << MIN))) != 0)) {
				{
				setState(426);
				number_property();
				setState(431);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(427);
					match(COMMA);
					setState(428);
					number_property();
					}
					}
					setState(433);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(436);
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
			setState(441);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MAX:
				enterOuterAlt(_localctx, 1);
				{
				setState(438);
				number_max();
				}
				break;
			case MIN:
				enterOuterAlt(_localctx, 2);
				{
				setState(439);
				number_min();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 3);
				{
				setState(440);
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
			setState(443);
			match(MAX);
			setState(444);
			match(COLON);
			setState(445);
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
			setState(447);
			match(MIN);
			setState(448);
			match(COLON);
			setState(449);
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
			setState(451);
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
			setState(453);
			match(T__1);
			setState(454);
			match(COLON);
			setState(455);
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
			setState(457);
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
		enterRule(_localctx, 102, RULE_scalar);
		try {
			setState(463);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(459);
				quantity_scalar();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(460);
				string_scalar();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(461);
				boolean_scalar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(462);
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
		enterRule(_localctx, 104, RULE_quantity_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			numeric_scalar();
			setState(467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << METERS) | (1L << KILOMETERS) | (1L << GRAMS) | (1L << KILOGRAMS) | (1L << SECOND) | (1L << MINUTE) | (1L << CELSIUS) | (1L << KELVIN))) != 0)) {
				{
				setState(466);
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
		enterRule(_localctx, 106, RULE_numeric_scalar);
		try {
			setState(471);
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
				setState(469);
				coercible_numeric_scalar();
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(470);
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
		enterRule(_localctx, 108, RULE_coercible_numeric_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(473);
			number_type();
			setState(475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_PAR) {
				{
				setState(474);
				number_presentation_properties();
				}
			}

			}
			setState(479);
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
				setState(477);
				coercible_numeric_scalar();
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
				{
				setState(478);
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
		enterRule(_localctx, 110, RULE_string_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(485);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STR_TYPE) {
				{
				setState(481);
				match(STR_TYPE);
				setState(483);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPEN_PAR) {
					{
					setState(482);
					types_properties();
					}
				}

				}
			}

			setState(487);
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
		enterRule(_localctx, 112, RULE_boolean_scalar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(490);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BOOL_TYPE) {
				{
				setState(489);
				match(BOOL_TYPE);
				}
			}

			setState(492);
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
		enterRule(_localctx, 114, RULE_url);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(495);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==URL_TYPE) {
				{
				setState(494);
				match(URL_TYPE);
				}
			}

			setState(497);
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
		enterRule(_localctx, 116, RULE_quantity);
		try {
			setState(503);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case METERS:
			case KILOMETERS:
				enterOuterAlt(_localctx, 1);
				{
				setState(499);
				length();
				}
				break;
			case GRAMS:
			case KILOGRAMS:
				enterOuterAlt(_localctx, 2);
				{
				setState(500);
				mass();
				}
				break;
			case SECOND:
			case MINUTE:
				enterOuterAlt(_localctx, 3);
				{
				setState(501);
				time();
				}
				break;
			case CELSIUS:
			case KELVIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(502);
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
		enterRule(_localctx, 118, RULE_length);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(505);
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
		enterRule(_localctx, 120, RULE_mass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(507);
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
		enterRule(_localctx, 122, RULE_time);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
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
		enterRule(_localctx, 124, RULE_temperature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(511);
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
		enterRule(_localctx, 126, RULE_number_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
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
		enterRule(_localctx, 128, RULE_boolean);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(517);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
			case T__3:
				{
				setState(515);
				true();
				}
				break;
			case T__4:
			case T__5:
				{
				setState(516);
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
		enterRule(_localctx, 130, RULE_true);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(519);
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
		enterRule(_localctx, 132, RULE_false);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
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
		enterRule(_localctx, 134, RULE_null);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
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
		enterRule(_localctx, 136, RULE_custom_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(525);
			match(CT);
			setState(526);
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
		enterRule(_localctx, 138, RULE_string);
		try {
			setState(531);
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
				enterOuterAlt(_localctx, 1);
				{
				setState(528);
				literal();
				}
				break;
			case QUOTED_STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(529);
				match(QUOTED_STRING);
				}
				break;
			case UNQUOTED_STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(530);
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
		enterRule(_localctx, 140, RULE_literal);
		try {
			setState(544);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LENGTH:
				enterOuterAlt(_localctx, 1);
				{
				setState(533);
				match(LENGTH);
				}
				break;
			case MASS:
				enterOuterAlt(_localctx, 2);
				{
				setState(534);
				match(MASS);
				}
				break;
			case TEMPERATURE:
				enterOuterAlt(_localctx, 3);
				{
				setState(535);
				match(TEMPERATURE);
				}
				break;
			case TIME:
				enterOuterAlt(_localctx, 4);
				{
				setState(536);
				match(TIME);
				}
				break;
			case NAME:
				enterOuterAlt(_localctx, 5);
				{
				setState(537);
				match(NAME);
				}
				break;
			case UUID:
				enterOuterAlt(_localctx, 6);
				{
				setState(538);
				match(UUID);
				}
				break;
			case DESCRIPTION:
				enterOuterAlt(_localctx, 7);
				{
				setState(539);
				match(DESCRIPTION);
				}
				break;
			case OPTIONAL:
				enterOuterAlt(_localctx, 8);
				{
				setState(540);
				match(OPTIONAL);
				}
				break;
			case NUMBER:
			case NUMERIC_LITERAL:
				enterOuterAlt(_localctx, 9);
				{
				setState(541);
				number();
				}
				break;
			case T__2:
			case T__3:
			case T__4:
			case T__5:
				enterOuterAlt(_localctx, 10);
				{
				setState(542);
				boolean();
				}
				break;
			case T__6:
			case T__7:
			case T__8:
				enterOuterAlt(_localctx, 11);
				{
				setState(543);
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
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(546);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3I\u0227\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\3\2\7\2\u0094\n\2\f\2\16\2\u0097\13\2\3\2\3\2\3\3\3\3\3\3\5\3\u009e"+
		"\n\3\3\4\3\4\5\4\u00a2\n\4\3\5\3\5\3\5\3\5\3\5\3\6\5\6\u00aa\n\6\3\6\3"+
		"\6\3\6\3\6\7\6\u00b0\n\6\f\6\16\6\u00b3\13\6\5\6\u00b5\n\6\3\6\3\6\3\7"+
		"\5\7\u00ba\n\7\3\7\3\7\3\7\3\7\7\7\u00c0\n\7\f\7\16\7\u00c3\13\7\5\7\u00c5"+
		"\n\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\5\t\u00d1\n\t\3\n\3\n\5\n"+
		"\u00d5\n\n\3\13\3\13\3\13\5\13\u00da\n\13\3\f\3\f\5\f\u00de\n\f\3\r\5"+
		"\r\u00e1\n\r\3\r\6\r\u00e4\n\r\r\r\16\r\u00e5\3\16\5\16\u00e9\n\16\3\16"+
		"\6\16\u00ec\n\16\r\16\16\16\u00ed\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3"+
		"\21\3\21\3\21\6\21\u00fa\n\21\r\21\16\21\u00fb\3\21\3\21\3\21\5\21\u0101"+
		"\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\7\23\u010d\n\23"+
		"\f\23\16\23\u0110\13\23\5\23\u0112\n\23\3\23\3\23\3\24\3\24\5\24\u0118"+
		"\n\24\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\7\27"+
		"\u0126\n\27\f\27\16\27\u0129\13\27\5\27\u012b\n\27\3\27\3\27\3\30\3\30"+
		"\3\30\5\30\u0132\n\30\3\31\3\31\3\31\3\31\3\32\3\32\5\32\u013a\n\32\3"+
		"\33\3\33\3\33\3\33\7\33\u0140\n\33\f\33\16\33\u0143\13\33\5\33\u0145\n"+
		"\33\3\33\3\33\3\34\3\34\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\5\36\u0153"+
		"\n\36\3\36\3\36\5\36\u0157\n\36\3\36\3\36\3\37\3\37\3\37\7\37\u015e\n"+
		"\37\f\37\16\37\u0161\13\37\3 \3 \3 \3 \3!\3!\3!\3!\7!\u016b\n!\f!\16!"+
		"\u016e\13!\5!\u0170\n!\3!\3!\3\"\3\"\3\"\5\"\u0177\n\"\3#\3#\3#\3#\3$"+
		"\3$\3$\3$\3%\3%\3%\3%\5%\u0185\n%\3&\3&\5&\u0189\n&\3\'\3\'\3\'\3\'\7"+
		"\'\u018f\n\'\f\'\16\'\u0192\13\'\5\'\u0194\n\'\3\'\3\'\3(\3(\5(\u019a"+
		"\n(\3)\3)\3)\3)\3*\3*\3*\3*\3+\3+\3,\3,\3-\3-\5-\u01aa\n-\3.\3.\3.\3."+
		"\7.\u01b0\n.\f.\16.\u01b3\13.\5.\u01b5\n.\3.\3.\3/\3/\3/\5/\u01bc\n/\3"+
		"\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\62\3\62\3\63\3\63\3\63\3\63\3"+
		"\64\3\64\3\65\3\65\3\65\3\65\5\65\u01d2\n\65\3\66\3\66\5\66\u01d6\n\66"+
		"\3\67\3\67\5\67\u01da\n\67\38\38\58\u01de\n8\38\38\58\u01e2\n8\39\39\5"+
		"9\u01e6\n9\59\u01e8\n9\39\39\3:\5:\u01ed\n:\3:\3:\3;\5;\u01f2\n;\3;\3"+
		";\3<\3<\3<\3<\5<\u01fa\n<\3=\3=\3>\3>\3?\3?\3@\3@\3A\3A\3B\3B\5B\u0208"+
		"\nB\3C\3C\3D\3D\3E\3E\3F\3F\3F\3G\3G\3G\5G\u0216\nG\3H\3H\3H\3H\3H\3H"+
		"\3H\3H\3H\3H\3H\5H\u0223\nH\3I\3I\3I\2\2J\2\4\6\b\n\f\16\20\22\24\26\30"+
		"\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080"+
		"\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\2\17\3\2CD\3\2EF\5\2"+
		"\33\33\37\37##\3\2),\3\2\f\r\3\2\16\17\3\2\20\21\4\2\22\22\24\24\3\2\33"+
		"&\3\2\5\6\3\2\7\b\3\2\t\13\3\2\63\64\2\u0230\2\u0095\3\2\2\2\4\u009d\3"+
		"\2\2\2\6\u00a1\3\2\2\2\b\u00a3\3\2\2\2\n\u00a9\3\2\2\2\f\u00b9\3\2\2\2"+
		"\16\u00c8\3\2\2\2\20\u00d0\3\2\2\2\22\u00d2\3\2\2\2\24\u00d6\3\2\2\2\26"+
		"\u00dd\3\2\2\2\30\u00e0\3\2\2\2\32\u00e8\3\2\2\2\34\u00ef\3\2\2\2\36\u00f2"+
		"\3\2\2\2 \u0100\3\2\2\2\"\u0102\3\2\2\2$\u0108\3\2\2\2&\u0117\3\2\2\2"+
		"(\u0119\3\2\2\2*\u011d\3\2\2\2,\u0121\3\2\2\2.\u0131\3\2\2\2\60\u0133"+
		"\3\2\2\2\62\u0139\3\2\2\2\64\u013b\3\2\2\2\66\u0148\3\2\2\28\u014a\3\2"+
		"\2\2:\u014e\3\2\2\2<\u015a\3\2\2\2>\u0162\3\2\2\2@\u0166\3\2\2\2B\u0176"+
		"\3\2\2\2D\u0178\3\2\2\2F\u017c\3\2\2\2H\u0184\3\2\2\2J\u0186\3\2\2\2L"+
		"\u018a\3\2\2\2N\u0199\3\2\2\2P\u019b\3\2\2\2R\u019f\3\2\2\2T\u01a3\3\2"+
		"\2\2V\u01a5\3\2\2\2X\u01a7\3\2\2\2Z\u01ab\3\2\2\2\\\u01bb\3\2\2\2^\u01bd"+
		"\3\2\2\2`\u01c1\3\2\2\2b\u01c5\3\2\2\2d\u01c7\3\2\2\2f\u01cb\3\2\2\2h"+
		"\u01d1\3\2\2\2j\u01d3\3\2\2\2l\u01d9\3\2\2\2n\u01db\3\2\2\2p\u01e7\3\2"+
		"\2\2r\u01ec\3\2\2\2t\u01f1\3\2\2\2v\u01f9\3\2\2\2x\u01fb\3\2\2\2z\u01fd"+
		"\3\2\2\2|\u01ff\3\2\2\2~\u0201\3\2\2\2\u0080\u0203\3\2\2\2\u0082\u0207"+
		"\3\2\2\2\u0084\u0209\3\2\2\2\u0086\u020b\3\2\2\2\u0088\u020d\3\2\2\2\u008a"+
		"\u020f\3\2\2\2\u008c\u0215\3\2\2\2\u008e\u0222\3\2\2\2\u0090\u0224\3\2"+
		"\2\2\u0092\u0094\79\2\2\u0093\u0092\3\2\2\2\u0094\u0097\3\2\2\2\u0095"+
		"\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0098\3\2\2\2\u0097\u0095\3\2"+
		"\2\2\u0098\u0099\5\4\3\2\u0099\3\3\2\2\2\u009a\u009e\5\6\4\2\u009b\u009e"+
		"\5\26\f\2\u009c\u009e\5:\36\2\u009d\u009a\3\2\2\2\u009d\u009b\3\2\2\2"+
		"\u009d\u009c\3\2\2\2\u009e\5\3\2\2\2\u009f\u00a2\5\n\6\2\u00a0\u00a2\5"+
		"\f\7\2\u00a1\u009f\3\2\2\2\u00a1\u00a0\3\2\2\2\u00a2\7\3\2\2\2\u00a3\u00a4"+
		"\79\2\2\u00a4\u00a5\7H\2\2\u00a5\u00a6\5\26\f\2\u00a6\u00a7\7I\2\2\u00a7"+
		"\t\3\2\2\2\u00a8\u00aa\t\2\2\2\u00a9\u00a8\3\2\2\2\u00a9\u00aa\3\2\2\2"+
		"\u00aa\u00ab\3\2\2\2\u00ab\u00b4\7=\2\2\u00ac\u00b1\5\24\13\2\u00ad\u00ae"+
		"\7A\2\2\u00ae\u00b0\5\24\13\2\u00af\u00ad\3\2\2\2\u00b0\u00b3\3\2\2\2"+
		"\u00b1\u00af\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b5\3\2\2\2\u00b3\u00b1"+
		"\3\2\2\2\u00b4\u00ac\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6"+
		"\u00b7\7>\2\2\u00b7\13\3\2\2\2\u00b8\u00ba\t\3\2\2\u00b9\u00b8\3\2\2\2"+
		"\u00b9\u00ba\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00c4\7?\2\2\u00bc\u00c1"+
		"\5\20\t\2\u00bd\u00be\7A\2\2\u00be\u00c0\5\20\t\2\u00bf\u00bd\3\2\2\2"+
		"\u00c0\u00c3\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c5"+
		"\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c4\u00bc\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5"+
		"\u00c6\3\2\2\2\u00c6\u00c7\7@\2\2\u00c7\r\3\2\2\2\u00c8\u00c9\5\u008a"+
		"F\2\u00c9\u00ca\5\n\6\2\u00ca\17\3\2\2\2\u00cb\u00d1\5\n\6\2\u00cc\u00d1"+
		"\5\f\7\2\u00cd\u00d1\5h\65\2\u00ce\u00d1\5\16\b\2\u00cf\u00d1\5\u0088"+
		"E\2\u00d0\u00cb\3\2\2\2\u00d0\u00cc\3\2\2\2\u00d0\u00cd\3\2\2\2\u00d0"+
		"\u00ce\3\2\2\2\u00d0\u00cf\3\2\2\2\u00d1\21\3\2\2\2\u00d2\u00d4\5\u008c"+
		"G\2\u00d3\u00d5\5$\23\2\u00d4\u00d3\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5"+
		"\23\3\2\2\2\u00d6\u00d7\5\22\n\2\u00d7\u00d9\7B\2\2\u00d8\u00da\5\20\t"+
		"\2\u00d9\u00d8\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\25\3\2\2\2\u00db\u00de"+
		"\5\30\r\2\u00dc\u00de\5\32\16\2\u00dd\u00db\3\2\2\2\u00dd\u00dc\3\2\2"+
		"\2\u00de\27\3\2\2\2\u00df\u00e1\7C\2\2\u00e0\u00df\3\2\2\2\u00e0\u00e1"+
		"\3\2\2\2\u00e1\u00e3\3\2\2\2\u00e2\u00e4\5\36\20\2\u00e3\u00e2\3\2\2\2"+
		"\u00e4\u00e5\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\31"+
		"\3\2\2\2\u00e7\u00e9\7E\2\2\u00e8\u00e7\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9"+
		"\u00eb\3\2\2\2\u00ea\u00ec\5\34\17\2\u00eb\u00ea\3\2\2\2\u00ec\u00ed\3"+
		"\2\2\2\u00ed\u00eb\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee\33\3\2\2\2\u00ef"+
		"\u00f0\7:\2\2\u00f0\u00f1\5 \21\2\u00f1\35\3\2\2\2\u00f2\u00f3\5\22\n"+
		"\2\u00f3\u00f4\7B\2\2\u00f4\u00f5\5 \21\2\u00f5\37\3\2\2\2\u00f6\u0101"+
		"\3\2\2\2\u00f7\u00f9\5h\65\2\u00f8\u00fa\79\2\2\u00f9\u00f8\3\2\2\2\u00fa"+
		"\u00fb\3\2\2\2\u00fb\u00f9\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u0101\3\2"+
		"\2\2\u00fd\u0101\5\b\5\2\u00fe\u0101\5\"\22\2\u00ff\u0101\5\u0088E\2\u0100"+
		"\u00f6\3\2\2\2\u0100\u00f7\3\2\2\2\u0100\u00fd\3\2\2\2\u0100\u00fe\3\2"+
		"\2\2\u0100\u00ff\3\2\2\2\u0101!\3\2\2\2\u0102\u0103\79\2\2\u0103\u0104"+
		"\7H\2\2\u0104\u0105\5\u008aF\2\u0105\u0106\5\30\r\2\u0106\u0107\7I\2\2"+
		"\u0107#\3\2\2\2\u0108\u0111\7;\2\2\u0109\u010e\5&\24\2\u010a\u010b\7A"+
		"\2\2\u010b\u010d\5&\24\2\u010c\u010a\3\2\2\2\u010d\u0110\3\2\2\2\u010e"+
		"\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0112\3\2\2\2\u0110\u010e\3\2"+
		"\2\2\u0111\u0109\3\2\2\2\u0111\u0112\3\2\2\2\u0112\u0113\3\2\2\2\u0113"+
		"\u0114\7<\2\2\u0114%\3\2\2\2\u0115\u0118\5*\26\2\u0116\u0118\5(\25\2\u0117"+
		"\u0115\3\2\2\2\u0117\u0116\3\2\2\2\u0118\'\3\2\2\2\u0119\u011a\7/\2\2"+
		"\u011a\u011b\7B\2\2\u011b\u011c\5\u008cG\2\u011c)\3\2\2\2\u011d\u011e"+
		"\7\60\2\2\u011e\u011f\7B\2\2\u011f\u0120\5\u0082B\2\u0120+\3\2\2\2\u0121"+
		"\u012a\7;\2\2\u0122\u0127\5.\30\2\u0123\u0124\7A\2\2\u0124\u0126\5.\30"+
		"\2\u0125\u0123\3\2\2\2\u0126\u0129\3\2\2\2\u0127\u0125\3\2\2\2\u0127\u0128"+
		"\3\2\2\2\u0128\u012b\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u0122\3\2\2\2\u012a"+
		"\u012b\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012d\7<\2\2\u012d-\3\2\2\2\u012e"+
		"\u0132\5\60\31\2\u012f\u0132\5(\25\2\u0130\u0132\5*\26\2\u0131\u012e\3"+
		"\2\2\2\u0131\u012f\3\2\2\2\u0131\u0130\3\2\2\2\u0132/\3\2\2\2\u0133\u0134"+
		"\7\61\2\2\u0134\u0135\7B\2\2\u0135\u0136\5\u008cG\2\u0136\61\3\2\2\2\u0137"+
		"\u013a\5.\30\2\u0138\u013a\5\66\34\2\u0139\u0137\3\2\2\2\u0139\u0138\3"+
		"\2\2\2\u013a\63\3\2\2\2\u013b\u0144\7;\2\2\u013c\u0141\5\62\32\2\u013d"+
		"\u013e\7A\2\2\u013e\u0140\5\62\32\2\u013f\u013d\3\2\2\2\u0140\u0143\3"+
		"\2\2\2\u0141\u013f\3\2\2\2\u0141\u0142\3\2\2\2\u0142\u0145\3\2\2\2\u0143"+
		"\u0141\3\2\2\2\u0144\u013c\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0146\3\2"+
		"\2\2\u0146\u0147\7<\2\2\u0147\65\3\2\2\2\u0148\u0149\58\35\2\u0149\67"+
		"\3\2\2\2\u014a\u014b\7\3\2\2\u014b\u014c\7B\2\2\u014c\u014d\5\u0090I\2"+
		"\u014d9\3\2\2\2\u014e\u014f\5\u008aF\2\u014f\u0150\7B\2\2\u0150\u0152"+
		"\7G\2\2\u0151\u0153\5@!\2\u0152\u0151\3\2\2\2\u0152\u0153\3\2\2\2\u0153"+
		"\u0154\3\2\2\2\u0154\u0156\7=\2\2\u0155\u0157\5<\37\2\u0156\u0155\3\2"+
		"\2\2\u0156\u0157\3\2\2\2\u0157\u0158\3\2\2\2\u0158\u0159\7>\2\2\u0159"+
		";\3\2\2\2\u015a\u015f\5> \2\u015b\u015c\7A\2\2\u015c\u015e\5> \2\u015d"+
		"\u015b\3\2\2\2\u015e\u0161\3\2\2\2\u015f\u015d\3\2\2\2\u015f\u0160\3\2"+
		"\2\2\u0160=\3\2\2\2\u0161\u015f\3\2\2\2\u0162\u0163\5\22\n\2\u0163\u0164"+
		"\7B\2\2\u0164\u0165\5H%\2\u0165?\3\2\2\2\u0166\u016f\7;\2\2\u0167\u016c"+
		"\5B\"\2\u0168\u0169\7A\2\2\u0169\u016b\5B\"\2\u016a\u0168\3\2\2\2\u016b"+
		"\u016e\3\2\2\2\u016c\u016a\3\2\2\2\u016c\u016d\3\2\2\2\u016d\u0170\3\2"+
		"\2\2\u016e\u016c\3\2\2\2\u016f\u0167\3\2\2\2\u016f\u0170\3\2\2\2\u0170"+
		"\u0171\3\2\2\2\u0171\u0172\7<\2\2\u0172A\3\2\2\2\u0173\u0177\5D#\2\u0174"+
		"\u0177\5F$\2\u0175\u0177\5(\25\2\u0176\u0173\3\2\2\2\u0176\u0174\3\2\2"+
		"\2\u0176\u0175\3\2\2\2\u0177C\3\2\2\2\u0178\u0179\7-\2\2\u0179\u017a\7"+
		"B\2\2\u017a\u017b\5\u008cG\2\u017bE\3\2\2\2\u017c\u017d\7.\2\2\u017d\u017e"+
		"\7B\2\2\u017e\u017f\5t;\2\u017fG\3\2\2\2\u0180\u0185\5J&\2\u0181\u0185"+
		"\5X-\2\u0182\u0185\5V,\2\u0183\u0185\5T+\2\u0184\u0180\3\2\2\2\u0184\u0181"+
		"\3\2\2\2\u0184\u0182\3\2\2\2\u0184\u0183\3\2\2\2\u0185I\3\2\2\2\u0186"+
		"\u0188\7\30\2\2\u0187\u0189\5L\'\2\u0188\u0187\3\2\2\2\u0188\u0189\3\2"+
		"\2\2\u0189K\3\2\2\2\u018a\u0193\7;\2\2\u018b\u0190\5N(\2\u018c\u018d\7"+
		"A\2\2\u018d\u018f\5N(\2\u018e\u018c\3\2\2\2\u018f\u0192\3\2\2\2\u0190"+
		"\u018e\3\2\2\2\u0190\u0191\3\2\2\2\u0191\u0194\3\2\2\2\u0192\u0190\3\2"+
		"\2\2\u0193\u018b\3\2\2\2\u0193\u0194\3\2\2\2\u0194\u0195\3\2\2\2\u0195"+
		"\u0196\7<\2\2\u0196M\3\2\2\2\u0197\u019a\5P)\2\u0198\u019a\5R*\2\u0199"+
		"\u0197\3\2\2\2\u0199\u0198\3\2\2\2\u019aO\3\2\2\2\u019b\u019c\7\'\2\2"+
		"\u019c\u019d\7B\2\2\u019d\u019e\5\u0090I\2\u019eQ\3\2\2\2\u019f\u01a0"+
		"\7(\2\2\u01a0\u01a1\7B\2\2\u01a1\u01a2\5\u0090I\2\u01a2S\3\2\2\2\u01a3"+
		"\u01a4\7\32\2\2\u01a4U\3\2\2\2\u01a5\u01a6\7\31\2\2\u01a6W\3\2\2\2\u01a7"+
		"\u01a9\5b\62\2\u01a8\u01aa\5Z.\2\u01a9\u01a8\3\2\2\2\u01a9\u01aa\3\2\2"+
		"\2\u01aaY\3\2\2\2\u01ab\u01b4\7;\2\2\u01ac\u01b1\5\\/\2\u01ad\u01ae\7"+
		"A\2\2\u01ae\u01b0\5\\/\2\u01af\u01ad\3\2\2\2\u01b0\u01b3\3\2\2\2\u01b1"+
		"\u01af\3\2\2\2\u01b1\u01b2\3\2\2\2\u01b2\u01b5\3\2\2\2\u01b3\u01b1\3\2"+
		"\2\2\u01b4\u01ac\3\2\2\2\u01b4\u01b5\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6"+
		"\u01b7\7<\2\2\u01b7[\3\2\2\2\u01b8\u01bc\5^\60\2\u01b9\u01bc\5`\61\2\u01ba"+
		"\u01bc\5d\63\2\u01bb\u01b8\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb\u01ba\3\2"+
		"\2\2\u01bc]\3\2\2\2\u01bd\u01be\7\'\2\2\u01be\u01bf\7B\2\2\u01bf\u01c0"+
		"\5\u0090I\2\u01c0_\3\2\2\2\u01c1\u01c2\7(\2\2\u01c2\u01c3\7B\2\2\u01c3"+
		"\u01c4\5\u0090I\2\u01c4a\3\2\2\2\u01c5\u01c6\t\4\2\2\u01c6c\3\2\2\2\u01c7"+
		"\u01c8\7\4\2\2\u01c8\u01c9\7B\2\2\u01c9\u01ca\5f\64\2\u01cae\3\2\2\2\u01cb"+
		"\u01cc\t\5\2\2\u01ccg\3\2\2\2\u01cd\u01d2\5j\66\2\u01ce\u01d2\5p9\2\u01cf"+
		"\u01d2\5r:\2\u01d0\u01d2\5t;\2\u01d1\u01cd\3\2\2\2\u01d1\u01ce\3\2\2\2"+
		"\u01d1\u01cf\3\2\2\2\u01d1\u01d0\3\2\2\2\u01d2i\3\2\2\2\u01d3\u01d5\5"+
		"l\67\2\u01d4\u01d6\5v<\2\u01d5\u01d4\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6"+
		"k\3\2\2\2\u01d7\u01da\5n8\2\u01d8\u01da\5\u0090I\2\u01d9\u01d7\3\2\2\2"+
		"\u01d9\u01d8\3\2\2\2\u01dam\3\2\2\2\u01db\u01dd\5\u0080A\2\u01dc\u01de"+
		"\5\64\33\2\u01dd\u01dc\3\2\2\2\u01dd\u01de\3\2\2\2\u01de\u01e1\3\2\2\2"+
		"\u01df\u01e2\5n8\2\u01e0\u01e2\5\u0090I\2\u01e1\u01df\3\2\2\2\u01e1\u01e0"+
		"\3\2\2\2\u01e2o\3\2\2\2\u01e3\u01e5\7\30\2\2\u01e4\u01e6\5,\27\2\u01e5"+
		"\u01e4\3\2\2\2\u01e5\u01e6\3\2\2\2\u01e6\u01e8\3\2\2\2\u01e7\u01e3\3\2"+
		"\2\2\u01e7\u01e8\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9\u01ea\5\u008cG\2\u01ea"+
		"q\3\2\2\2\u01eb\u01ed\7\31\2\2\u01ec\u01eb\3\2\2\2\u01ec\u01ed\3\2\2\2"+
		"\u01ed\u01ee\3\2\2\2\u01ee\u01ef\5\u0082B\2\u01efs\3\2\2\2\u01f0\u01f2"+
		"\7\32\2\2\u01f1\u01f0\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f2\u01f3\3\2\2\2"+
		"\u01f3\u01f4\5\u008cG\2\u01f4u\3\2\2\2\u01f5\u01fa\5x=\2\u01f6\u01fa\5"+
		"z>\2\u01f7\u01fa\5|?\2\u01f8\u01fa\5~@\2\u01f9\u01f5\3\2\2\2\u01f9\u01f6"+
		"\3\2\2\2\u01f9\u01f7\3\2\2\2\u01f9\u01f8\3\2\2\2\u01faw\3\2\2\2\u01fb"+
		"\u01fc\t\6\2\2\u01fcy\3\2\2\2\u01fd\u01fe\t\7\2\2\u01fe{\3\2\2\2\u01ff"+
		"\u0200\t\b\2\2\u0200}\3\2\2\2\u0201\u0202\t\t\2\2\u0202\177\3\2\2\2\u0203"+
		"\u0204\t\n\2\2\u0204\u0081\3\2\2\2\u0205\u0208\5\u0084C\2\u0206\u0208"+
		"\5\u0086D\2\u0207\u0205\3\2\2\2\u0207\u0206\3\2\2\2\u0208\u0083\3\2\2"+
		"\2\u0209\u020a\t\13\2\2\u020a\u0085\3\2\2\2\u020b\u020c\t\f\2\2\u020c"+
		"\u0087\3\2\2\2\u020d\u020e\t\r\2\2\u020e\u0089\3\2\2\2\u020f\u0210\7\27"+
		"\2\2\u0210\u0211\7\65\2\2\u0211\u008b\3\2\2\2\u0212\u0216\5\u008eH\2\u0213"+
		"\u0216\7\62\2\2\u0214\u0216\7\65\2\2\u0215\u0212\3\2\2\2\u0215\u0213\3"+
		"\2\2\2\u0215\u0214\3\2\2\2\u0216\u008d\3\2\2\2\u0217\u0223\7)\2\2\u0218"+
		"\u0223\7*\2\2\u0219\u0223\7+\2\2\u021a\u0223\7,\2\2\u021b\u0223\7-\2\2"+
		"\u021c\u0223\7.\2\2\u021d\u0223\7/\2\2\u021e\u0223\7\60\2\2\u021f\u0223"+
		"\5\u0090I\2\u0220\u0223\5\u0082B\2\u0221\u0223\5\u0088E\2\u0222\u0217"+
		"\3\2\2\2\u0222\u0218\3\2\2\2\u0222\u0219\3\2\2\2\u0222\u021a\3\2\2\2\u0222"+
		"\u021b\3\2\2\2\u0222\u021c\3\2\2\2\u0222\u021d\3\2\2\2\u0222\u021e\3\2"+
		"\2\2\u0222\u021f\3\2\2\2\u0222\u0220\3\2\2\2\u0222\u0221\3\2\2\2\u0223"+
		"\u008f\3\2\2\2\u0224\u0225\t\16\2\2\u0225\u0091\3\2\2\2:\u0095\u009d\u00a1"+
		"\u00a9\u00b1\u00b4\u00b9\u00c1\u00c4\u00d0\u00d4\u00d9\u00dd\u00e0\u00e5"+
		"\u00e8\u00ed\u00fb\u0100\u010e\u0111\u0117\u0127\u012a\u0131\u0139\u0141"+
		"\u0144\u0152\u0156\u015f\u016c\u016f\u0176\u0184\u0188\u0190\u0193\u0199"+
		"\u01a9\u01b1\u01b4\u01bb\u01d1\u01d5\u01d9\u01dd\u01e1\u01e5\u01e7\u01ec"+
		"\u01f1\u01f9\u0207\u0215\u0222";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}