// Generated from test/UON.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class UONParser extends Parser {
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
	public static readonly T__17 = 18;
	public static readonly CT = 19;
	public static readonly METERS = 20;
	public static readonly KILOMETERS = 21;
	public static readonly GRAMS = 22;
	public static readonly KILOGRAMS = 23;
	public static readonly SECOND = 24;
	public static readonly MINUTE = 25;
	public static readonly CELSIUS = 26;
	public static readonly KELVIN = 27;
	public static readonly QUOTED_STRING = 28;
	public static readonly STR_TYPE = 29;
	public static readonly BOOL_TYPE = 30;
	public static readonly URL_TYPE = 31;
	public static readonly FLOAT_TYPE = 32;
	public static readonly FLOAT_128_TYPE = 33;
	public static readonly FLOAT_64_TYPE = 34;
	public static readonly FLOAT_32_TYPE = 35;
	public static readonly INT_TYPE = 36;
	public static readonly INT_128_TYPE = 37;
	public static readonly INT_64_TYPE = 38;
	public static readonly INT_32_TYPE = 39;
	public static readonly UINT_TYPE = 40;
	public static readonly UINT_128_TYPE = 41;
	public static readonly UINT_64_TYPE = 42;
	public static readonly UINT_32_TYPE = 43;
	public static readonly UNQUOTED_STRING = 44;
	public static readonly WS = 45;
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
	public static readonly RULE_uon = 0;
	public static readonly RULE_json_collection = 1;
	public static readonly RULE_json_map = 2;
	public static readonly RULE_json_seq = 3;
	public static readonly RULE_yaml_collection = 4;
	public static readonly RULE_yaml_map = 5;
	public static readonly RULE_yaml_seq = 6;
	public static readonly RULE_seq_item = 7;
	public static readonly RULE_pair = 8;
	public static readonly RULE_pair_key = 9;
	public static readonly RULE_json_pair = 10;
	public static readonly RULE_presentation_properties = 11;
	public static readonly RULE_presentation_property = 12;
	public static readonly RULE_description = 13;
	public static readonly RULE_optional = 14;
	public static readonly RULE_string = 15;
	public static readonly RULE_custom_type = 16;
	public static readonly RULE_json_user_type = 17;
	public static readonly RULE_yaml_user_type = 18;
	public static readonly RULE_scalar = 19;
	public static readonly RULE_string_scalar = 20;
	public static readonly RULE_boolean_scalar = 21;
	public static readonly RULE_url = 22;
	public static readonly RULE_quantity_scalar = 23;
	public static readonly RULE_numeric_scalar = 24;
	public static readonly RULE_coercible_numeric_scalar = 25;
	public static readonly RULE_quantity = 26;
	public static readonly RULE_length = 27;
	public static readonly RULE_mass = 28;
	public static readonly RULE_time = 29;
	public static readonly RULE_temperature = 30;
	public static readonly RULE_number = 31;
	public static readonly RULE_root_value = 32;
	public static readonly RULE_json_value = 33;
	public static readonly RULE_yaml_value = 34;
	public static readonly RULE_number_type = 35;
	public static readonly RULE_schema = 36;
	public static readonly RULE_attributes = 37;
	public static readonly RULE_attribute = 38;
	public static readonly RULE_schema_presentations = 39;
	public static readonly RULE_schema_presentation = 40;
	public static readonly RULE_schema_name = 41;
	public static readonly RULE_schema_uuid = 42;
	public static readonly RULE_validation_properties = 43;
	public static readonly RULE_string_validation = 44;
	public static readonly RULE_string_properties = 45;
	public static readonly RULE_string_property = 46;
	public static readonly RULE_string_max = 47;
	public static readonly RULE_string_min = 48;
	public static readonly RULE_url_validation = 49;
	public static readonly RULE_boolean_validation = 50;
	public static readonly RULE_number_validation = 51;
	public static readonly RULE_number_properties = 52;
	public static readonly RULE_number_property = 53;
	public static readonly RULE_number_max = 54;
	public static readonly RULE_number_min = 55;
	public static readonly RULE_number_validation_type = 56;
	public static readonly RULE_quantity_validation = 57;
	public static readonly RULE_quantity_validation_types = 58;
	public static readonly RULE_boolean = 59;
	public static readonly RULE_true = 60;
	public static readonly RULE_false = 61;
	public static readonly RULE_null = 62;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"uon", "json_collection", "json_map", "json_seq", "yaml_collection", "yaml_map", 
		"yaml_seq", "seq_item", "pair", "pair_key", "json_pair", "presentation_properties", 
		"presentation_property", "description", "optional", "string", "custom_type", 
		"json_user_type", "yaml_user_type", "scalar", "string_scalar", "boolean_scalar", 
		"url", "quantity_scalar", "numeric_scalar", "coercible_numeric_scalar", 
		"quantity", "length", "mass", "time", "temperature", "number", "root_value", 
		"json_value", "yaml_value", "number_type", "schema", "attributes", "attribute", 
		"schema_presentations", "schema_presentation", "schema_name", "schema_uuid", 
		"validation_properties", "string_validation", "string_properties", "string_property", 
		"string_max", "string_min", "url_validation", "boolean_validation", "number_validation", 
		"number_properties", "number_property", "number_max", "number_min", "number_validation_type", 
		"quantity_validation", "quantity_validation_types", "boolean", "true", 
		"false", "null",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'-'", "'description'", "'optional'", "'name'", "'uuid'", "'max'", 
		"'quantity'", "'length'", "'mass'", "'temperature'", "'time'", "'true'", 
		"'True'", "'false'", "'False'", "'null'", "'none'", "'None'", "'!!'", 
		"'m'", "'km'", "'g'", "'kg'", "'s'", "'min'", "'C'", "'K'", undefined, 
		"'!str'", "'!bool'", "'!url'", "'!float'", "'!float128'", "'!float64'", 
		"'!float32'", "'!int'", "'!int128'", "'!int6'", "'!int32'", "'!uint'", 
		"'!uint128'", "'!uint64'", "'!uint32'", undefined, undefined, "'('", "')'", 
		"'{'", "'}'", "'['", "']'", "','", "':'", "'!map'", "'!seq'", "'!schema'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "CT", "METERS", 
		"KILOMETERS", "GRAMS", "KILOGRAMS", "SECOND", "MINUTE", "CELSIUS", "KELVIN", 
		"QUOTED_STRING", "STR_TYPE", "BOOL_TYPE", "URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", 
		"FLOAT_64_TYPE", "FLOAT_32_TYPE", "INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", 
		"INT_32_TYPE", "UINT_TYPE", "UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", 
		"UNQUOTED_STRING", "WS", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", 
		"OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", "SEQUENCE_TYPE", 
		"SCHEMA_TYPE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UONParser._LITERAL_NAMES, UONParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UONParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "UON.g4"; }

	// @Override
	public get ruleNames(): string[] { return UONParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return UONParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(UONParser._ATN, this);
	}
	// @RuleVersion(0)
	public uon(): UonContext {
		let _localctx: UonContext = new UonContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, UONParser.RULE_uon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.root_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json_collection(): Json_collectionContext {
		let _localctx: Json_collectionContext = new Json_collectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, UONParser.RULE_json_collection);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.OPEN_C_BRA:
			case UONParser.MAPPING_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.json_map();
				}
				break;
			case UONParser.OPEN_S_BRA:
			case UONParser.SEQUENCE_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.json_seq();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json_map(): Json_mapContext {
		let _localctx: Json_mapContext = new Json_mapContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, UONParser.RULE_json_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.MAPPING_TYPE) {
				{
				this.state = 132;
				this.match(UONParser.MAPPING_TYPE);
				}
			}

			this.state = 135;
			this.match(UONParser.OPEN_C_BRA);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.QUOTED_STRING || _la === UONParser.UNQUOTED_STRING) {
				{
				this.state = 136;
				this.json_pair();
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 137;
					this.match(UONParser.COMMA);
					this.state = 138;
					this.json_pair();
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 146;
			this.match(UONParser.CLOSE_C_BRA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json_seq(): Json_seqContext {
		let _localctx: Json_seqContext = new Json_seqContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, UONParser.RULE_json_seq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.SEQUENCE_TYPE) {
				{
				this.state = 148;
				this.match(UONParser.SEQUENCE_TYPE);
				}
			}

			this.state = 151;
			this.match(UONParser.OPEN_S_BRA);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14) | (1 << UONParser.T__15) | (1 << UONParser.T__16) | (1 << UONParser.T__17) | (1 << UONParser.CT) | (1 << UONParser.QUOTED_STRING) | (1 << UONParser.STR_TYPE) | (1 << UONParser.BOOL_TYPE) | (1 << UONParser.URL_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (UONParser.FLOAT_TYPE - 32)) | (1 << (UONParser.FLOAT_128_TYPE - 32)) | (1 << (UONParser.FLOAT_64_TYPE - 32)) | (1 << (UONParser.FLOAT_32_TYPE - 32)) | (1 << (UONParser.INT_TYPE - 32)) | (1 << (UONParser.INT_128_TYPE - 32)) | (1 << (UONParser.INT_64_TYPE - 32)) | (1 << (UONParser.INT_32_TYPE - 32)) | (1 << (UONParser.UINT_TYPE - 32)) | (1 << (UONParser.UINT_128_TYPE - 32)) | (1 << (UONParser.UINT_64_TYPE - 32)) | (1 << (UONParser.UINT_32_TYPE - 32)) | (1 << (UONParser.UNQUOTED_STRING - 32)) | (1 << (UONParser.OPEN_C_BRA - 32)) | (1 << (UONParser.OPEN_S_BRA - 32)) | (1 << (UONParser.MAPPING_TYPE - 32)) | (1 << (UONParser.SEQUENCE_TYPE - 32)))) !== 0)) {
				{
				this.state = 152;
				this.json_value();
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 153;
					this.match(UONParser.COMMA);
					this.state = 154;
					this.json_value();
					}
					}
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 162;
			this.match(UONParser.CLOSE_S_BRA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yaml_collection(): Yaml_collectionContext {
		let _localctx: Yaml_collectionContext = new Yaml_collectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, UONParser.RULE_yaml_collection);
		try {
			this.state = 166;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.QUOTED_STRING:
			case UONParser.UNQUOTED_STRING:
			case UONParser.MAPPING_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.yaml_map();
				}
				break;
			case UONParser.T__0:
			case UONParser.SEQUENCE_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.yaml_seq();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yaml_map(): Yaml_mapContext {
		let _localctx: Yaml_mapContext = new Yaml_mapContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, UONParser.RULE_yaml_map);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.MAPPING_TYPE) {
				{
				this.state = 168;
				this.match(UONParser.MAPPING_TYPE);
				}
			}

			this.state = 172;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 171;
					this.pair();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 174;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yaml_seq(): Yaml_seqContext {
		let _localctx: Yaml_seqContext = new Yaml_seqContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, UONParser.RULE_yaml_seq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.SEQUENCE_TYPE) {
				{
				this.state = 176;
				this.match(UONParser.SEQUENCE_TYPE);
				}
			}

			this.state = 180;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 179;
					this.seq_item();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seq_item(): Seq_itemContext {
		let _localctx: Seq_itemContext = new Seq_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, UONParser.RULE_seq_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(UONParser.T__0);
			this.state = 185;
			this.yaml_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, UONParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.pair_key();
			this.state = 188;
			this.match(UONParser.COLON);
			this.state = 189;
			this.yaml_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair_key(): Pair_keyContext {
		let _localctx: Pair_keyContext = new Pair_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, UONParser.RULE_pair_key);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.string();
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 192;
				this.presentation_properties();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json_pair(): Json_pairContext {
		let _localctx: Json_pairContext = new Json_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, UONParser.RULE_json_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.pair_key();
			this.state = 196;
			this.match(UONParser.COLON);
			this.state = 197;
			this.json_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public presentation_properties(): Presentation_propertiesContext {
		let _localctx: Presentation_propertiesContext = new Presentation_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, UONParser.RULE_presentation_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(UONParser.OPEN_PAR);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.T__1 || _la === UONParser.T__2) {
				{
				this.state = 200;
				this.presentation_property();
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 201;
					this.match(UONParser.COMMA);
					this.state = 202;
					this.presentation_property();
					}
					}
					this.state = 207;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 210;
			this.match(UONParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public presentation_property(): Presentation_propertyContext {
		let _localctx: Presentation_propertyContext = new Presentation_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, UONParser.RULE_presentation_property);
		try {
			this.state = 214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this.optional();
				}
				break;
			case UONParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				this.description();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, UONParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(UONParser.T__1);
			this.state = 217;
			this.match(UONParser.COLON);
			this.state = 218;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optional(): OptionalContext {
		let _localctx: OptionalContext = new OptionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, UONParser.RULE_optional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(UONParser.T__2);
			this.state = 221;
			this.match(UONParser.COLON);
			this.state = 222;
			this.boolean();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, UONParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			_la = this._input.LA(1);
			if (!(_la === UONParser.QUOTED_STRING || _la === UONParser.UNQUOTED_STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public custom_type(): Custom_typeContext {
		let _localctx: Custom_typeContext = new Custom_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, UONParser.RULE_custom_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(UONParser.CT);
			this.state = 227;
			this.match(UONParser.UNQUOTED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json_user_type(): Json_user_typeContext {
		let _localctx: Json_user_typeContext = new Json_user_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, UONParser.RULE_json_user_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.custom_type();
			this.state = 230;
			this.json_map();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yaml_user_type(): Yaml_user_typeContext {
		let _localctx: Yaml_user_typeContext = new Yaml_user_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, UONParser.RULE_yaml_user_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.custom_type();
			this.state = 233;
			this.yaml_map();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalar(): ScalarContext {
		let _localctx: ScalarContext = new ScalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, UONParser.RULE_scalar);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				this.quantity_scalar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.string_scalar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 237;
				this.boolean_scalar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 238;
				this.url();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_scalar(): String_scalarContext {
		let _localctx: String_scalarContext = new String_scalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, UONParser.RULE_string_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.STR_TYPE) {
				{
				this.state = 241;
				this.match(UONParser.STR_TYPE);
				}
			}

			this.state = 244;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolean_scalar(): Boolean_scalarContext {
		let _localctx: Boolean_scalarContext = new Boolean_scalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, UONParser.RULE_boolean_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.BOOL_TYPE) {
				{
				this.state = 246;
				this.match(UONParser.BOOL_TYPE);
				}
			}

			this.state = 249;
			this.boolean();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let _localctx: UrlContext = new UrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, UONParser.RULE_url);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.URL_TYPE) {
				{
				this.state = 251;
				this.match(UONParser.URL_TYPE);
				}
			}

			this.state = 254;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity_scalar(): Quantity_scalarContext {
		let _localctx: Quantity_scalarContext = new Quantity_scalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, UONParser.RULE_quantity_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.numeric_scalar();
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.METERS) | (1 << UONParser.KILOMETERS) | (1 << UONParser.GRAMS) | (1 << UONParser.KILOGRAMS) | (1 << UONParser.SECOND) | (1 << UONParser.MINUTE) | (1 << UONParser.CELSIUS) | (1 << UONParser.KELVIN))) !== 0)) {
				{
				this.state = 257;
				this.quantity();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numeric_scalar(): Numeric_scalarContext {
		let _localctx: Numeric_scalarContext = new Numeric_scalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, UONParser.RULE_numeric_scalar);
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.FLOAT_TYPE:
			case UONParser.FLOAT_128_TYPE:
			case UONParser.FLOAT_64_TYPE:
			case UONParser.FLOAT_32_TYPE:
			case UONParser.INT_TYPE:
			case UONParser.INT_128_TYPE:
			case UONParser.INT_64_TYPE:
			case UONParser.INT_32_TYPE:
			case UONParser.UINT_TYPE:
			case UONParser.UINT_128_TYPE:
			case UONParser.UINT_64_TYPE:
			case UONParser.UINT_32_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				this.coercible_numeric_scalar();
				}
				break;
			case UONParser.UNQUOTED_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coercible_numeric_scalar(): Coercible_numeric_scalarContext {
		let _localctx: Coercible_numeric_scalarContext = new Coercible_numeric_scalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, UONParser.RULE_coercible_numeric_scalar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.number_type();
			this.state = 267;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.FLOAT_TYPE:
			case UONParser.FLOAT_128_TYPE:
			case UONParser.FLOAT_64_TYPE:
			case UONParser.FLOAT_32_TYPE:
			case UONParser.INT_TYPE:
			case UONParser.INT_128_TYPE:
			case UONParser.INT_64_TYPE:
			case UONParser.INT_32_TYPE:
			case UONParser.UINT_TYPE:
			case UONParser.UINT_128_TYPE:
			case UONParser.UINT_64_TYPE:
			case UONParser.UINT_32_TYPE:
				{
				this.state = 265;
				this.coercible_numeric_scalar();
				}
				break;
			case UONParser.UNQUOTED_STRING:
				{
				this.state = 266;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity(): QuantityContext {
		let _localctx: QuantityContext = new QuantityContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, UONParser.RULE_quantity);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.METERS:
			case UONParser.KILOMETERS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.length();
				}
				break;
			case UONParser.GRAMS:
			case UONParser.KILOGRAMS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.mass();
				}
				break;
			case UONParser.SECOND:
			case UONParser.MINUTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.time();
				}
				break;
			case UONParser.CELSIUS:
			case UONParser.KELVIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.temperature();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public length(): LengthContext {
		let _localctx: LengthContext = new LengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, UONParser.RULE_length);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			_la = this._input.LA(1);
			if (!(_la === UONParser.METERS || _la === UONParser.KILOMETERS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mass(): MassContext {
		let _localctx: MassContext = new MassContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, UONParser.RULE_mass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			_la = this._input.LA(1);
			if (!(_la === UONParser.GRAMS || _la === UONParser.KILOGRAMS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, UONParser.RULE_time);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			_la = this._input.LA(1);
			if (!(_la === UONParser.SECOND || _la === UONParser.MINUTE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public temperature(): TemperatureContext {
		let _localctx: TemperatureContext = new TemperatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, UONParser.RULE_temperature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			_la = this._input.LA(1);
			if (!(_la === UONParser.CELSIUS || _la === UONParser.KELVIN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, UONParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(UONParser.UNQUOTED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public root_value(): Root_valueContext {
		let _localctx: Root_valueContext = new Root_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, UONParser.RULE_root_value);
		try {
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 285;
				this.json_collection();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 286;
				this.yaml_collection();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 287;
				this.schema();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public json_value(): Json_valueContext {
		let _localctx: Json_valueContext = new Json_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, UONParser.RULE_json_value);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.OPEN_C_BRA:
			case UONParser.MAPPING_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.json_map();
				}
				break;
			case UONParser.OPEN_S_BRA:
			case UONParser.SEQUENCE_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.json_seq();
				}
				break;
			case UONParser.T__11:
			case UONParser.T__12:
			case UONParser.T__13:
			case UONParser.T__14:
			case UONParser.QUOTED_STRING:
			case UONParser.STR_TYPE:
			case UONParser.BOOL_TYPE:
			case UONParser.URL_TYPE:
			case UONParser.FLOAT_TYPE:
			case UONParser.FLOAT_128_TYPE:
			case UONParser.FLOAT_64_TYPE:
			case UONParser.FLOAT_32_TYPE:
			case UONParser.INT_TYPE:
			case UONParser.INT_128_TYPE:
			case UONParser.INT_64_TYPE:
			case UONParser.INT_32_TYPE:
			case UONParser.UINT_TYPE:
			case UONParser.UINT_128_TYPE:
			case UONParser.UINT_64_TYPE:
			case UONParser.UINT_32_TYPE:
			case UONParser.UNQUOTED_STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 292;
				this.scalar();
				}
				break;
			case UONParser.CT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 293;
				this.json_user_type();
				}
				break;
			case UONParser.T__15:
			case UONParser.T__16:
			case UONParser.T__17:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 294;
				this.null();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yaml_value(): Yaml_valueContext {
		let _localctx: Yaml_valueContext = new Yaml_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, UONParser.RULE_yaml_value);
		try {
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this.yaml_map();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 298;
				this.yaml_seq();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 299;
				this.scalar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 300;
				this.yaml_user_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 301;
				this.null();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_type(): Number_typeContext {
		let _localctx: Number_typeContext = new Number_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, UONParser.RULE_number_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (UONParser.FLOAT_TYPE - 32)) | (1 << (UONParser.FLOAT_128_TYPE - 32)) | (1 << (UONParser.FLOAT_64_TYPE - 32)) | (1 << (UONParser.FLOAT_32_TYPE - 32)) | (1 << (UONParser.INT_TYPE - 32)) | (1 << (UONParser.INT_128_TYPE - 32)) | (1 << (UONParser.INT_64_TYPE - 32)) | (1 << (UONParser.INT_32_TYPE - 32)) | (1 << (UONParser.UINT_TYPE - 32)) | (1 << (UONParser.UINT_128_TYPE - 32)) | (1 << (UONParser.UINT_64_TYPE - 32)) | (1 << (UONParser.UINT_32_TYPE - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schema(): SchemaContext {
		let _localctx: SchemaContext = new SchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, UONParser.RULE_schema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.custom_type();
			this.state = 307;
			this.match(UONParser.COLON);
			this.state = 308;
			this.match(UONParser.SCHEMA_TYPE);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 309;
				this.schema_presentations();
				}
			}

			this.state = 312;
			this.match(UONParser.OPEN_C_BRA);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.QUOTED_STRING || _la === UONParser.UNQUOTED_STRING) {
				{
				this.state = 313;
				this.attributes();
				}
			}

			this.state = 316;
			this.match(UONParser.CLOSE_C_BRA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, UONParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.attribute();
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UONParser.COMMA) {
				{
				{
				this.state = 319;
				this.match(UONParser.COMMA);
				this.state = 320;
				this.attribute();
				}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, UONParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.pair_key();
			this.state = 327;
			this.match(UONParser.COLON);
			this.state = 328;
			this.validation_properties();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schema_presentations(): Schema_presentationsContext {
		let _localctx: Schema_presentationsContext = new Schema_presentationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, UONParser.RULE_schema_presentations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(UONParser.OPEN_PAR);
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__1) | (1 << UONParser.T__3) | (1 << UONParser.T__4))) !== 0)) {
				{
				this.state = 331;
				this.schema_presentation();
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 332;
					this.match(UONParser.COMMA);
					this.state = 333;
					this.schema_presentation();
					}
					}
					this.state = 338;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 341;
			this.match(UONParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schema_presentation(): Schema_presentationContext {
		let _localctx: Schema_presentationContext = new Schema_presentationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, UONParser.RULE_schema_presentation);
		try {
			this.state = 346;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.schema_name();
				}
				break;
			case UONParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.schema_uuid();
				}
				break;
			case UONParser.T__1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 345;
				this.description();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schema_name(): Schema_nameContext {
		let _localctx: Schema_nameContext = new Schema_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, UONParser.RULE_schema_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(UONParser.T__3);
			this.state = 349;
			this.match(UONParser.COLON);
			this.state = 350;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schema_uuid(): Schema_uuidContext {
		let _localctx: Schema_uuidContext = new Schema_uuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, UONParser.RULE_schema_uuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(UONParser.T__4);
			this.state = 353;
			this.match(UONParser.COLON);
			this.state = 354;
			this.url();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public validation_properties(): Validation_propertiesContext {
		let _localctx: Validation_propertiesContext = new Validation_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, UONParser.RULE_validation_properties);
		try {
			this.state = 360;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.STR_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 356;
				this.string_validation();
				}
				break;
			case UONParser.FLOAT_TYPE:
			case UONParser.INT_TYPE:
			case UONParser.UINT_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.number_validation();
				}
				break;
			case UONParser.BOOL_TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 358;
				this.boolean_validation();
				}
				break;
			case UONParser.URL_TYPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 359;
				this.url_validation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_validation(): String_validationContext {
		let _localctx: String_validationContext = new String_validationContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, UONParser.RULE_string_validation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(UONParser.STR_TYPE);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 363;
				this.string_properties();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_properties(): String_propertiesContext {
		let _localctx: String_propertiesContext = new String_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, UONParser.RULE_string_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(UONParser.OPEN_PAR);
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.T__5 || _la === UONParser.MINUTE) {
				{
				this.state = 367;
				this.string_property();
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 368;
					this.match(UONParser.COMMA);
					this.state = 369;
					this.string_property();
					}
					}
					this.state = 374;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 377;
			this.match(UONParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_property(): String_propertyContext {
		let _localctx: String_propertyContext = new String_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, UONParser.RULE_string_property);
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 379;
				this.string_max();
				}
				break;
			case UONParser.MINUTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 380;
				this.string_min();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_max(): String_maxContext {
		let _localctx: String_maxContext = new String_maxContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, UONParser.RULE_string_max);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(UONParser.T__5);
			this.state = 384;
			this.match(UONParser.COLON);
			this.state = 385;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_min(): String_minContext {
		let _localctx: String_minContext = new String_minContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, UONParser.RULE_string_min);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(UONParser.MINUTE);
			this.state = 388;
			this.match(UONParser.COLON);
			this.state = 389;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public url_validation(): Url_validationContext {
		let _localctx: Url_validationContext = new Url_validationContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, UONParser.RULE_url_validation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.match(UONParser.URL_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolean_validation(): Boolean_validationContext {
		let _localctx: Boolean_validationContext = new Boolean_validationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, UONParser.RULE_boolean_validation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.match(UONParser.BOOL_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_validation(): Number_validationContext {
		let _localctx: Number_validationContext = new Number_validationContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, UONParser.RULE_number_validation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.number_validation_type();
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 396;
				this.number_properties();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_properties(): Number_propertiesContext {
		let _localctx: Number_propertiesContext = new Number_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, UONParser.RULE_number_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(UONParser.OPEN_PAR);
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__5) | (1 << UONParser.T__6) | (1 << UONParser.MINUTE))) !== 0)) {
				{
				this.state = 400;
				this.number_property();
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 401;
					this.match(UONParser.COMMA);
					this.state = 402;
					this.number_property();
					}
					}
					this.state = 407;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 410;
			this.match(UONParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_property(): Number_propertyContext {
		let _localctx: Number_propertyContext = new Number_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, UONParser.RULE_number_property);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.number_max();
				}
				break;
			case UONParser.MINUTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.number_min();
				}
				break;
			case UONParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.quantity_validation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_max(): Number_maxContext {
		let _localctx: Number_maxContext = new Number_maxContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, UONParser.RULE_number_max);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(UONParser.T__5);
			this.state = 418;
			this.match(UONParser.COLON);
			this.state = 419;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_min(): Number_minContext {
		let _localctx: Number_minContext = new Number_minContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, UONParser.RULE_number_min);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(UONParser.MINUTE);
			this.state = 422;
			this.match(UONParser.COLON);
			this.state = 423;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_validation_type(): Number_validation_typeContext {
		let _localctx: Number_validation_typeContext = new Number_validation_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, UONParser.RULE_number_validation_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (UONParser.FLOAT_TYPE - 32)) | (1 << (UONParser.INT_TYPE - 32)) | (1 << (UONParser.UINT_TYPE - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity_validation(): Quantity_validationContext {
		let _localctx: Quantity_validationContext = new Quantity_validationContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, UONParser.RULE_quantity_validation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(UONParser.T__6);
			this.state = 428;
			this.match(UONParser.COLON);
			this.state = 429;
			this.quantity_validation_types();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity_validation_types(): Quantity_validation_typesContext {
		let _localctx: Quantity_validation_typesContext = new Quantity_validation_typesContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, UONParser.RULE_quantity_validation_types);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__7) | (1 << UONParser.T__8) | (1 << UONParser.T__9) | (1 << UONParser.T__10))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolean(): BooleanContext {
		let _localctx: BooleanContext = new BooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, UONParser.RULE_boolean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__11:
			case UONParser.T__12:
				{
				this.state = 433;
				this.true();
				}
				break;
			case UONParser.T__13:
			case UONParser.T__14:
				{
				this.state = 434;
				this.false();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public true(): TrueContext {
		let _localctx: TrueContext = new TrueContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, UONParser.RULE_true);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			_la = this._input.LA(1);
			if (!(_la === UONParser.T__11 || _la === UONParser.T__12)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public false(): FalseContext {
		let _localctx: FalseContext = new FalseContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, UONParser.RULE_false);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			_la = this._input.LA(1);
			if (!(_la === UONParser.T__13 || _la === UONParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public null(): NullContext {
		let _localctx: NullContext = new NullContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, UONParser.RULE_null);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__15) | (1 << UONParser.T__16) | (1 << UONParser.T__17))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03:\u01BE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\x85" +
		"\n\x03\x03\x04\x05\x04\x88\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\x8E\n\x04\f\x04\x0E\x04\x91\v\x04\x05\x04\x93\n\x04\x03\x04\x03\x04\x03" +
		"\x05\x05\x05\x98\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\x9E\n\x05" +
		"\f\x05\x0E\x05\xA1\v\x05\x05\x05\xA3\n\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x05\x06\xA9\n\x06\x03\x07\x05\x07\xAC\n\x07\x03\x07\x06\x07\xAF\n" +
		"\x07\r\x07\x0E\x07\xB0\x03\b\x05\b\xB4\n\b\x03\b\x06\b\xB7\n\b\r\b\x0E" +
		"\b\xB8\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\xC4" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\xCE\n\r\f\r" +
		"\x0E\r\xD1\v\r\x05\r\xD3\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xD9\n" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xF2\n\x15\x03\x16" +
		"\x05\x16\xF5\n\x16\x03\x16\x03\x16\x03\x17\x05\x17\xFA\n\x17\x03\x17\x03" +
		"\x17\x03\x18\x05\x18\xFF\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19" +
		"\u0105\n\x19\x03\x1A\x03\x1A\x05\x1A\u0109\n\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u010E\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0114\n\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
		"\"\x03\"\x03\"\x05\"\u0123\n\"\x03#\x03#\x03#\x03#\x03#\x05#\u012A\n#" +
		"\x03$\x03$\x03$\x03$\x03$\x05$\u0131\n$\x03%\x03%\x03&\x03&\x03&\x03&" +
		"\x05&\u0139\n&\x03&\x03&\x05&\u013D\n&\x03&\x03&\x03\'\x03\'\x03\'\x07" +
		"\'\u0144\n\'\f\'\x0E\'\u0147\v\'\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03" +
		")\x07)\u0151\n)\f)\x0E)\u0154\v)\x05)\u0156\n)\x03)\x03)\x03*\x03*\x03" +
		"*\x05*\u015D\n*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03-\x03-\x03" +
		"-\x03-\x05-\u016B\n-\x03.\x03.\x05.\u016F\n.\x03/\x03/\x03/\x03/\x07/" +
		"\u0175\n/\f/\x0E/\u0178\v/\x05/\u017A\n/\x03/\x03/\x030\x030\x050\u0180" +
		"\n0\x031\x031\x031\x031\x032\x032\x032\x032\x033\x033\x034\x034\x035\x03" +
		"5\x055\u0190\n5\x036\x036\x036\x036\x076\u0196\n6\f6\x0E6\u0199\v6\x05" +
		"6\u019B\n6\x036\x036\x037\x037\x037\x057\u01A2\n7\x038\x038\x038\x038" +
		"\x039\x039\x039\x039\x03:\x03:\x03;\x03;\x03;\x03;\x03<\x03<\x03=\x03" +
		"=\x05=\u01B6\n=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x02\x02\x02A\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x02" +
		"\r\x04\x02\x1E\x1E..\x03\x02\x16\x17\x03\x02\x18\x19\x03\x02\x1A\x1B\x03" +
		"\x02\x1C\x1D\x03\x02\"-\x05\x02\"\"&&**\x03\x02\n\r\x03\x02\x0E\x0F\x03" +
		"\x02\x10\x11\x03\x02\x12\x14\x02\u01B8\x02\x80\x03\x02\x02\x02\x04\x84" +
		"\x03\x02\x02\x02\x06\x87\x03\x02\x02\x02\b\x97\x03\x02\x02\x02\n\xA8\x03" +
		"\x02\x02\x02\f\xAB\x03\x02\x02\x02\x0E\xB3\x03\x02\x02\x02\x10\xBA\x03" +
		"\x02\x02\x02\x12\xBD\x03\x02\x02\x02\x14\xC1\x03\x02\x02\x02\x16\xC5\x03" +
		"\x02\x02\x02\x18\xC9\x03\x02\x02\x02\x1A\xD8\x03\x02\x02\x02\x1C\xDA\x03" +
		"\x02\x02\x02\x1E\xDE\x03\x02\x02\x02 \xE2\x03\x02\x02\x02\"\xE4\x03\x02" +
		"\x02\x02$\xE7\x03\x02\x02\x02&\xEA\x03\x02\x02\x02(\xF1\x03\x02\x02\x02" +
		"*\xF4\x03\x02\x02\x02,\xF9\x03\x02\x02\x02.\xFE\x03\x02\x02\x020\u0102" +
		"\x03\x02\x02\x022\u0108\x03\x02\x02\x024\u010A\x03\x02\x02\x026\u0113" +
		"\x03\x02\x02\x028\u0115\x03\x02\x02\x02:\u0117\x03\x02\x02\x02<\u0119" +
		"\x03\x02\x02\x02>\u011B\x03\x02\x02\x02@\u011D\x03\x02\x02\x02B\u0122" +
		"\x03\x02\x02\x02D\u0129\x03\x02\x02\x02F\u0130\x03\x02\x02\x02H\u0132" +
		"\x03\x02\x02\x02J\u0134\x03\x02\x02\x02L\u0140\x03\x02\x02\x02N\u0148" +
		"\x03\x02\x02\x02P\u014C\x03\x02\x02\x02R\u015C\x03\x02\x02\x02T\u015E" +
		"\x03\x02\x02\x02V\u0162\x03\x02\x02\x02X\u016A\x03\x02\x02\x02Z\u016C" +
		"\x03\x02\x02\x02\\\u0170\x03\x02\x02\x02^\u017F\x03\x02\x02\x02`\u0181" +
		"\x03\x02\x02\x02b\u0185\x03\x02\x02\x02d\u0189\x03\x02\x02\x02f\u018B" +
		"\x03\x02\x02\x02h\u018D\x03\x02\x02\x02j\u0191\x03\x02\x02\x02l\u01A1" +
		"\x03\x02\x02\x02n\u01A3\x03\x02\x02\x02p\u01A7\x03\x02\x02\x02r\u01AB" +
		"\x03\x02\x02\x02t\u01AD\x03\x02\x02\x02v\u01B1\x03\x02\x02\x02x\u01B5" +
		"\x03\x02\x02\x02z\u01B7\x03\x02\x02\x02|\u01B9\x03\x02\x02\x02~\u01BB" +
		"\x03\x02\x02\x02\x80\x81\x05B\"\x02\x81\x03\x03\x02\x02\x02\x82\x85\x05" +
		"\x06\x04\x02\x83\x85\x05\b\x05\x02\x84\x82\x03\x02\x02\x02\x84\x83\x03" +
		"\x02\x02\x02\x85\x05\x03\x02\x02\x02\x86\x88\x078\x02\x02\x87\x86\x03" +
		"\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x92\x07" +
		"2\x02\x02\x8A\x8F\x05\x16\f\x02\x8B\x8C\x076\x02\x02\x8C\x8E\x05\x16\f" +
		"\x02\x8D\x8B\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02" +
		"\x02\x8F\x90\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02" +
		"\x02\x92\x8A\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02" +
		"\x02\x94\x95\x073\x02\x02\x95\x07\x03\x02\x02\x02\x96\x98\x079\x02\x02" +
		"\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02" +
		"\x99\xA2\x074\x02\x02\x9A\x9F\x05D#\x02\x9B\x9C\x076\x02\x02\x9C\x9E\x05" +
		"D#\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02" +
		"\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02" +
		"\x02\x02\xA2\x9A\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02" +
		"\x02\x02\xA4\xA5\x075\x02\x02\xA5\t\x03\x02\x02\x02\xA6\xA9\x05\f\x07" +
		"\x02\xA7\xA9\x05\x0E\b\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA7\x03\x02\x02" +
		"\x02\xA9\v\x03\x02\x02\x02\xAA\xAC\x078\x02\x02\xAB\xAA\x03\x02\x02\x02" +
		"\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAF\x05\x12\n\x02" +
		"\xAE\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02" +
		"\xB0\xB1\x03\x02\x02\x02\xB1\r\x03\x02\x02\x02\xB2\xB4\x079\x02\x02\xB3" +
		"\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5" +
		"\xB7\x05\x10\t\x02\xB6\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x0F\x03\x02\x02\x02\xBA" +
		"\xBB\x07\x03\x02\x02\xBB\xBC\x05F$\x02\xBC\x11\x03\x02\x02\x02\xBD\xBE" +
		"\x05\x14\v\x02\xBE\xBF\x077\x02\x02\xBF\xC0\x05F$\x02\xC0\x13\x03\x02" +
		"\x02\x02\xC1\xC3\x05 \x11\x02\xC2\xC4\x05\x18\r\x02\xC3\xC2\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC4\x15\x03\x02\x02\x02\xC5\xC6\x05\x14\v" +
		"\x02\xC6\xC7\x077\x02\x02\xC7\xC8\x05D#\x02\xC8\x17\x03\x02\x02\x02\xC9" +
		"\xD2\x070\x02\x02\xCA\xCF\x05\x1A\x0E\x02\xCB\xCC\x076\x02\x02\xCC\xCE" +
		"\x05\x1A\x0E\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD" +
		"\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF" +
		"\x03\x02\x02\x02\xD2\xCA\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4" +
		"\x03\x02\x02\x02\xD4\xD5\x071\x02\x02\xD5\x19\x03\x02\x02\x02\xD6\xD9" +
		"\x05\x1E\x10\x02\xD7\xD9\x05\x1C\x0F\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD7" +
		"\x03\x02\x02\x02\xD9\x1B\x03\x02\x02\x02\xDA\xDB\x07\x04\x02\x02\xDB\xDC" +
		"\x077\x02\x02\xDC\xDD\x05 \x11\x02\xDD\x1D\x03\x02\x02\x02\xDE\xDF\x07" +
		"\x05\x02\x02\xDF\xE0\x077\x02\x02\xE0\xE1\x05x=\x02\xE1\x1F\x03\x02\x02" +
		"\x02\xE2\xE3\t\x02\x02\x02\xE3!\x03\x02\x02\x02\xE4\xE5\x07\x15\x02\x02" +
		"\xE5\xE6\x07.\x02\x02\xE6#\x03\x02\x02\x02\xE7\xE8\x05\"\x12\x02\xE8\xE9" +
		"\x05\x06\x04\x02\xE9%\x03\x02\x02\x02\xEA\xEB\x05\"\x12\x02\xEB\xEC\x05" +
		"\f\x07\x02\xEC\'\x03\x02\x02\x02\xED\xF2\x050\x19\x02\xEE\xF2\x05*\x16" +
		"\x02\xEF\xF2\x05,\x17\x02\xF0\xF2\x05.\x18\x02\xF1\xED\x03\x02\x02\x02" +
		"\xF1\xEE\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF0\x03\x02\x02\x02" +
		"\xF2)\x03\x02\x02\x02\xF3\xF5\x07\x1F\x02\x02\xF4\xF3\x03\x02\x02\x02" +
		"\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x05 \x11\x02" +
		"\xF7+\x03\x02\x02\x02\xF8\xFA\x07 \x02\x02\xF9\xF8\x03\x02\x02\x02\xF9" +
		"\xFA\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x05x=\x02\xFC-\x03" +
		"\x02\x02\x02\xFD\xFF\x07!\x02\x02\xFE\xFD\x03\x02\x02\x02\xFE\xFF\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x05 \x11\x02\u0101" +
		"/\x03\x02\x02\x02\u0102\u0104\x052\x1A\x02\u0103\u0105\x056\x1C\x02\u0104" +
		"\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u01051\x03\x02\x02" +
		"\x02\u0106\u0109\x054\x1B\x02\u0107\u0109\x05@!\x02\u0108\u0106\x03\x02" +
		"\x02\x02\u0108\u0107\x03\x02\x02\x02\u01093\x03\x02\x02\x02\u010A\u010D" +
		"\x05H%\x02\u010B\u010E\x054\x1B\x02\u010C\u010E\x05@!\x02\u010D\u010B" +
		"\x03\x02\x02\x02\u010D\u010C\x03\x02\x02\x02\u010E5\x03\x02\x02\x02\u010F" +
		"\u0114\x058\x1D\x02\u0110\u0114\x05:\x1E\x02\u0111\u0114\x05<\x1F\x02" +
		"\u0112\u0114\x05> \x02\u0113\u010F\x03\x02\x02\x02\u0113\u0110\x03\x02" +
		"\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114" +
		"7\x03\x02\x02\x02\u0115\u0116\t\x03\x02\x02\u01169\x03\x02\x02\x02\u0117" +
		"\u0118\t\x04\x02\x02\u0118;\x03\x02\x02\x02\u0119\u011A\t\x05\x02\x02" +
		"\u011A=\x03\x02\x02\x02\u011B\u011C\t\x06\x02\x02\u011C?\x03\x02\x02\x02" +
		"\u011D\u011E\x07.\x02\x02\u011EA\x03\x02\x02\x02\u011F\u0123\x05\x04\x03" +
		"\x02\u0120\u0123\x05\n\x06\x02\u0121\u0123\x05J&\x02\u0122\u011F\x03\x02" +
		"\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123" +
		"C\x03\x02\x02\x02\u0124\u012A\x05\x06\x04\x02\u0125\u012A\x05\b\x05\x02" +
		"\u0126\u012A\x05(\x15\x02\u0127\u012A\x05$\x13\x02\u0128\u012A\x05~@\x02" +
		"\u0129\u0124\x03\x02\x02\x02\u0129\u0125\x03\x02\x02\x02\u0129\u0126\x03" +
		"\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A" +
		"E\x03\x02\x02\x02\u012B\u0131\x05\f\x07\x02\u012C\u0131\x05\x0E\b\x02" +
		"\u012D\u0131\x05(\x15\x02\u012E\u0131\x05&\x14\x02\u012F\u0131\x05~@\x02" +
		"\u0130\u012B\x03\x02\x02\x02\u0130\u012C\x03\x02\x02\x02\u0130\u012D\x03" +
		"\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131" +
		"G\x03\x02\x02\x02\u0132\u0133\t\x07\x02\x02\u0133I\x03\x02\x02\x02\u0134" +
		"\u0135\x05\"\x12\x02\u0135\u0136\x077\x02\x02\u0136\u0138\x07:\x02\x02" +
		"\u0137\u0139\x05P)\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139\x03\x02" +
		"\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x072\x02\x02\u013B\u013D" +
		"\x05L\'\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D" +
		"\u013E\x03\x02\x02\x02\u013E\u013F\x073\x02\x02\u013FK\x03\x02\x02\x02" +
		"\u0140\u0145\x05N(\x02\u0141\u0142\x076\x02\x02\u0142\u0144\x05N(\x02" +
		"\u0143\u0141\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03" +
		"\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146M\x03\x02\x02\x02\u0147" +
		"\u0145\x03\x02\x02\x02\u0148\u0149\x05\x14\v\x02\u0149\u014A\x077\x02" +
		"\x02\u014A\u014B\x05X-\x02\u014BO\x03\x02\x02\x02\u014C\u0155\x070\x02" +
		"\x02\u014D\u0152\x05R*\x02\u014E\u014F\x076\x02\x02\u014F\u0151\x05R*" +
		"\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150" +
		"\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02" +
		"\u0154\u0152\x03\x02\x02\x02\u0155\u014D\x03\x02\x02\x02\u0155\u0156\x03" +
		"\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x071\x02\x02\u0158" +
		"Q\x03\x02\x02\x02\u0159\u015D\x05T+\x02\u015A\u015D\x05V,\x02\u015B\u015D" +
		"\x05\x1C\x0F\x02\u015C\u0159\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02" +
		"\u015C\u015B\x03\x02\x02\x02\u015DS\x03\x02\x02\x02\u015E\u015F\x07\x06" +
		"\x02\x02\u015F\u0160\x077\x02\x02\u0160\u0161\x05 \x11\x02\u0161U\x03" +
		"\x02\x02\x02\u0162\u0163\x07\x07\x02\x02\u0163\u0164\x077\x02\x02\u0164" +
		"\u0165\x05.\x18\x02\u0165W\x03\x02\x02\x02\u0166\u016B\x05Z.\x02\u0167" +
		"\u016B\x05h5\x02\u0168\u016B\x05f4\x02\u0169\u016B\x05d3\x02\u016A\u0166" +
		"\x03\x02\x02\x02\u016A\u0167\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02" +
		"\u016A\u0169\x03\x02\x02\x02\u016BY\x03\x02\x02\x02\u016C\u016E\x07\x1F" +
		"\x02\x02\u016D\u016F\x05\\/\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F" +
		"\x03\x02\x02\x02\u016F[\x03\x02\x02\x02\u0170\u0179\x070\x02\x02\u0171" +
		"\u0176\x05^0\x02\u0172\u0173\x076\x02\x02\u0173\u0175\x05^0\x02\u0174" +
		"\u0172\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0179\u0171\x03\x02\x02\x02\u0179\u017A\x03\x02" +
		"\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x071\x02\x02\u017C]\x03" +
		"\x02\x02\x02\u017D\u0180\x05`1\x02\u017E\u0180\x05b2\x02\u017F\u017D\x03" +
		"\x02\x02\x02\u017F\u017E\x03\x02\x02\x02\u0180_\x03\x02\x02\x02\u0181" +
		"\u0182\x07\b\x02\x02\u0182\u0183\x077\x02\x02\u0183\u0184\x05 \x11\x02" +
		"\u0184a\x03\x02\x02\x02\u0185\u0186\x07\x1B\x02\x02\u0186\u0187\x077\x02" +
		"\x02\u0187\u0188\x05 \x11\x02\u0188c\x03\x02\x02\x02\u0189\u018A\x07!" +
		"\x02\x02\u018Ae\x03\x02\x02\x02\u018B\u018C\x07 \x02\x02\u018Cg\x03\x02" +
		"\x02\x02\u018D\u018F\x05r:\x02\u018E\u0190\x05j6\x02\u018F\u018E\x03\x02" +
		"\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190i\x03\x02\x02\x02\u0191\u019A" +
		"\x070\x02\x02\u0192\u0197\x05l7\x02\u0193\u0194\x076\x02\x02\u0194\u0196" +
		"\x05l7\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0199\x03\x02\x02\x02\u0197" +
		"\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019B\x03\x02" +
		"\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A\u0192\x03\x02\x02\x02\u019A" +
		"\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x071\x02" +
		"\x02\u019Dk\x03\x02\x02\x02\u019E\u01A2\x05n8\x02\u019F\u01A2\x05p9\x02" +
		"\u01A0\u01A2\x05t;\x02\u01A1\u019E\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2m\x03\x02\x02\x02\u01A3\u01A4" +
		"\x07\b\x02\x02\u01A4\u01A5\x077\x02\x02\u01A5\u01A6\x05@!\x02\u01A6o\x03" +
		"\x02\x02\x02\u01A7\u01A8\x07\x1B\x02\x02\u01A8\u01A9\x077\x02\x02\u01A9" +
		"\u01AA\x05@!\x02\u01AAq\x03\x02\x02\x02\u01AB\u01AC\t\b\x02\x02\u01AC" +
		"s\x03\x02\x02\x02\u01AD\u01AE\x07\t\x02\x02\u01AE\u01AF\x077\x02\x02\u01AF" +
		"\u01B0\x05v<\x02\u01B0u\x03\x02\x02\x02\u01B1\u01B2\t\t\x02\x02\u01B2" +
		"w\x03\x02\x02\x02\u01B3\u01B6\x05z>\x02\u01B4\u01B6\x05|?\x02\u01B5\u01B3" +
		"\x03\x02\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B6y\x03\x02\x02\x02\u01B7" +
		"\u01B8\t\n\x02\x02\u01B8{\x03\x02\x02\x02\u01B9\u01BA\t\v\x02\x02\u01BA" +
		"}\x03\x02\x02\x02\u01BB\u01BC\t\f\x02\x02\u01BC\x7F\x03\x02\x02\x02-\x84" +
		"\x87\x8F\x92\x97\x9F\xA2\xA8\xAB\xB0\xB3\xB8\xC3\xCF\xD2\xD8\xF1\xF4\xF9" +
		"\xFE\u0104\u0108\u010D\u0113\u0122\u0129\u0130\u0138\u013C\u0145\u0152" +
		"\u0155\u015C\u016A\u016E\u0176\u0179\u017F\u018F\u0197\u019A\u01A1\u01B5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UONParser.__ATN) {
			UONParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UONParser._serializedATN));
		}

		return UONParser.__ATN;
	}

}

export class UonContext extends ParserRuleContext {
	public root_value(): Root_valueContext {
		return this.getRuleContext(0, Root_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_uon; }
}


export class Json_collectionContext extends ParserRuleContext {
	public json_map(): Json_mapContext | undefined {
		return this.tryGetRuleContext(0, Json_mapContext);
	}
	public json_seq(): Json_seqContext | undefined {
		return this.tryGetRuleContext(0, Json_seqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_json_collection; }
}


export class Json_mapContext extends ParserRuleContext {
	public OPEN_C_BRA(): TerminalNode { return this.getToken(UONParser.OPEN_C_BRA, 0); }
	public CLOSE_C_BRA(): TerminalNode { return this.getToken(UONParser.CLOSE_C_BRA, 0); }
	public MAPPING_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.MAPPING_TYPE, 0); }
	public json_pair(): Json_pairContext[];
	public json_pair(i: number): Json_pairContext;
	public json_pair(i?: number): Json_pairContext | Json_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Json_pairContext);
		} else {
			return this.getRuleContext(i, Json_pairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.COMMA);
		} else {
			return this.getToken(UONParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_json_map; }
}


export class Json_seqContext extends ParserRuleContext {
	public OPEN_S_BRA(): TerminalNode { return this.getToken(UONParser.OPEN_S_BRA, 0); }
	public CLOSE_S_BRA(): TerminalNode { return this.getToken(UONParser.CLOSE_S_BRA, 0); }
	public SEQUENCE_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.SEQUENCE_TYPE, 0); }
	public json_value(): Json_valueContext[];
	public json_value(i: number): Json_valueContext;
	public json_value(i?: number): Json_valueContext | Json_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Json_valueContext);
		} else {
			return this.getRuleContext(i, Json_valueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.COMMA);
		} else {
			return this.getToken(UONParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_json_seq; }
}


export class Yaml_collectionContext extends ParserRuleContext {
	public yaml_map(): Yaml_mapContext | undefined {
		return this.tryGetRuleContext(0, Yaml_mapContext);
	}
	public yaml_seq(): Yaml_seqContext | undefined {
		return this.tryGetRuleContext(0, Yaml_seqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_yaml_collection; }
}


export class Yaml_mapContext extends ParserRuleContext {
	public MAPPING_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.MAPPING_TYPE, 0); }
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_yaml_map; }
}


export class Yaml_seqContext extends ParserRuleContext {
	public SEQUENCE_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.SEQUENCE_TYPE, 0); }
	public seq_item(): Seq_itemContext[];
	public seq_item(i: number): Seq_itemContext;
	public seq_item(i?: number): Seq_itemContext | Seq_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Seq_itemContext);
		} else {
			return this.getRuleContext(i, Seq_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_yaml_seq; }
}


export class Seq_itemContext extends ParserRuleContext {
	public yaml_value(): Yaml_valueContext {
		return this.getRuleContext(0, Yaml_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_seq_item; }
}


export class PairContext extends ParserRuleContext {
	public pair_key(): Pair_keyContext {
		return this.getRuleContext(0, Pair_keyContext);
	}
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public yaml_value(): Yaml_valueContext {
		return this.getRuleContext(0, Yaml_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_pair; }
}


export class Pair_keyContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public presentation_properties(): Presentation_propertiesContext | undefined {
		return this.tryGetRuleContext(0, Presentation_propertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_pair_key; }
}


export class Json_pairContext extends ParserRuleContext {
	public pair_key(): Pair_keyContext {
		return this.getRuleContext(0, Pair_keyContext);
	}
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public json_value(): Json_valueContext {
		return this.getRuleContext(0, Json_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_json_pair; }
}


export class Presentation_propertiesContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(UONParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(UONParser.CLOSE_PAR, 0); }
	public presentation_property(): Presentation_propertyContext[];
	public presentation_property(i: number): Presentation_propertyContext;
	public presentation_property(i?: number): Presentation_propertyContext | Presentation_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Presentation_propertyContext);
		} else {
			return this.getRuleContext(i, Presentation_propertyContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.COMMA);
		} else {
			return this.getToken(UONParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_presentation_properties; }
}


export class Presentation_propertyContext extends ParserRuleContext {
	public optional(): OptionalContext | undefined {
		return this.tryGetRuleContext(0, OptionalContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_presentation_property; }
}


export class DescriptionContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_description; }
}


export class OptionalContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public boolean(): BooleanContext {
		return this.getRuleContext(0, BooleanContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_optional; }
}


export class StringContext extends ParserRuleContext {
	public QUOTED_STRING(): TerminalNode | undefined { return this.tryGetToken(UONParser.QUOTED_STRING, 0); }
	public UNQUOTED_STRING(): TerminalNode | undefined { return this.tryGetToken(UONParser.UNQUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string; }
}


export class Custom_typeContext extends ParserRuleContext {
	public CT(): TerminalNode { return this.getToken(UONParser.CT, 0); }
	public UNQUOTED_STRING(): TerminalNode { return this.getToken(UONParser.UNQUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_custom_type; }
}


export class Json_user_typeContext extends ParserRuleContext {
	public custom_type(): Custom_typeContext {
		return this.getRuleContext(0, Custom_typeContext);
	}
	public json_map(): Json_mapContext {
		return this.getRuleContext(0, Json_mapContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_json_user_type; }
}


export class Yaml_user_typeContext extends ParserRuleContext {
	public custom_type(): Custom_typeContext {
		return this.getRuleContext(0, Custom_typeContext);
	}
	public yaml_map(): Yaml_mapContext {
		return this.getRuleContext(0, Yaml_mapContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_yaml_user_type; }
}


export class ScalarContext extends ParserRuleContext {
	public quantity_scalar(): Quantity_scalarContext | undefined {
		return this.tryGetRuleContext(0, Quantity_scalarContext);
	}
	public string_scalar(): String_scalarContext | undefined {
		return this.tryGetRuleContext(0, String_scalarContext);
	}
	public boolean_scalar(): Boolean_scalarContext | undefined {
		return this.tryGetRuleContext(0, Boolean_scalarContext);
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_scalar; }
}


export class String_scalarContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public STR_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.STR_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_scalar; }
}


export class Boolean_scalarContext extends ParserRuleContext {
	public boolean(): BooleanContext {
		return this.getRuleContext(0, BooleanContext);
	}
	public BOOL_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.BOOL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_boolean_scalar; }
}


export class UrlContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public URL_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.URL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_url; }
}


export class Quantity_scalarContext extends ParserRuleContext {
	public numeric_scalar(): Numeric_scalarContext {
		return this.getRuleContext(0, Numeric_scalarContext);
	}
	public quantity(): QuantityContext | undefined {
		return this.tryGetRuleContext(0, QuantityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_quantity_scalar; }
}


export class Numeric_scalarContext extends ParserRuleContext {
	public coercible_numeric_scalar(): Coercible_numeric_scalarContext | undefined {
		return this.tryGetRuleContext(0, Coercible_numeric_scalarContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_numeric_scalar; }
}


export class Coercible_numeric_scalarContext extends ParserRuleContext {
	public number_type(): Number_typeContext {
		return this.getRuleContext(0, Number_typeContext);
	}
	public coercible_numeric_scalar(): Coercible_numeric_scalarContext | undefined {
		return this.tryGetRuleContext(0, Coercible_numeric_scalarContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_coercible_numeric_scalar; }
}


export class QuantityContext extends ParserRuleContext {
	public length(): LengthContext | undefined {
		return this.tryGetRuleContext(0, LengthContext);
	}
	public mass(): MassContext | undefined {
		return this.tryGetRuleContext(0, MassContext);
	}
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public temperature(): TemperatureContext | undefined {
		return this.tryGetRuleContext(0, TemperatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_quantity; }
}


export class LengthContext extends ParserRuleContext {
	public METERS(): TerminalNode | undefined { return this.tryGetToken(UONParser.METERS, 0); }
	public KILOMETERS(): TerminalNode | undefined { return this.tryGetToken(UONParser.KILOMETERS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_length; }
}


export class MassContext extends ParserRuleContext {
	public GRAMS(): TerminalNode | undefined { return this.tryGetToken(UONParser.GRAMS, 0); }
	public KILOGRAMS(): TerminalNode | undefined { return this.tryGetToken(UONParser.KILOGRAMS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_mass; }
}


export class TimeContext extends ParserRuleContext {
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(UONParser.SECOND, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(UONParser.MINUTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_time; }
}


export class TemperatureContext extends ParserRuleContext {
	public CELSIUS(): TerminalNode | undefined { return this.tryGetToken(UONParser.CELSIUS, 0); }
	public KELVIN(): TerminalNode | undefined { return this.tryGetToken(UONParser.KELVIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_temperature; }
}


export class NumberContext extends ParserRuleContext {
	public UNQUOTED_STRING(): TerminalNode { return this.getToken(UONParser.UNQUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number; }
}


export class Root_valueContext extends ParserRuleContext {
	public json_collection(): Json_collectionContext | undefined {
		return this.tryGetRuleContext(0, Json_collectionContext);
	}
	public yaml_collection(): Yaml_collectionContext | undefined {
		return this.tryGetRuleContext(0, Yaml_collectionContext);
	}
	public schema(): SchemaContext | undefined {
		return this.tryGetRuleContext(0, SchemaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_root_value; }
}


export class Json_valueContext extends ParserRuleContext {
	public json_map(): Json_mapContext | undefined {
		return this.tryGetRuleContext(0, Json_mapContext);
	}
	public json_seq(): Json_seqContext | undefined {
		return this.tryGetRuleContext(0, Json_seqContext);
	}
	public scalar(): ScalarContext | undefined {
		return this.tryGetRuleContext(0, ScalarContext);
	}
	public json_user_type(): Json_user_typeContext | undefined {
		return this.tryGetRuleContext(0, Json_user_typeContext);
	}
	public null(): NullContext | undefined {
		return this.tryGetRuleContext(0, NullContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_json_value; }
}


export class Yaml_valueContext extends ParserRuleContext {
	public yaml_map(): Yaml_mapContext | undefined {
		return this.tryGetRuleContext(0, Yaml_mapContext);
	}
	public yaml_seq(): Yaml_seqContext | undefined {
		return this.tryGetRuleContext(0, Yaml_seqContext);
	}
	public scalar(): ScalarContext | undefined {
		return this.tryGetRuleContext(0, ScalarContext);
	}
	public yaml_user_type(): Yaml_user_typeContext | undefined {
		return this.tryGetRuleContext(0, Yaml_user_typeContext);
	}
	public null(): NullContext | undefined {
		return this.tryGetRuleContext(0, NullContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_yaml_value; }
}


export class Number_typeContext extends ParserRuleContext {
	public FLOAT_128_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.FLOAT_128_TYPE, 0); }
	public FLOAT_64_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.FLOAT_64_TYPE, 0); }
	public FLOAT_32_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.FLOAT_32_TYPE, 0); }
	public INT_128_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.INT_128_TYPE, 0); }
	public INT_64_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.INT_64_TYPE, 0); }
	public INT_32_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.INT_32_TYPE, 0); }
	public UINT_128_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.UINT_128_TYPE, 0); }
	public UINT_64_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.UINT_64_TYPE, 0); }
	public UINT_32_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.UINT_32_TYPE, 0); }
	public FLOAT_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.FLOAT_TYPE, 0); }
	public INT_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.INT_TYPE, 0); }
	public UINT_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.UINT_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_type; }
}


export class SchemaContext extends ParserRuleContext {
	public custom_type(): Custom_typeContext {
		return this.getRuleContext(0, Custom_typeContext);
	}
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public SCHEMA_TYPE(): TerminalNode { return this.getToken(UONParser.SCHEMA_TYPE, 0); }
	public OPEN_C_BRA(): TerminalNode { return this.getToken(UONParser.OPEN_C_BRA, 0); }
	public CLOSE_C_BRA(): TerminalNode { return this.getToken(UONParser.CLOSE_C_BRA, 0); }
	public schema_presentations(): Schema_presentationsContext | undefined {
		return this.tryGetRuleContext(0, Schema_presentationsContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_schema; }
}


export class AttributesContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.COMMA);
		} else {
			return this.getToken(UONParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_attributes; }
}


export class AttributeContext extends ParserRuleContext {
	public pair_key(): Pair_keyContext {
		return this.getRuleContext(0, Pair_keyContext);
	}
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public validation_properties(): Validation_propertiesContext {
		return this.getRuleContext(0, Validation_propertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_attribute; }
}


export class Schema_presentationsContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(UONParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(UONParser.CLOSE_PAR, 0); }
	public schema_presentation(): Schema_presentationContext[];
	public schema_presentation(i: number): Schema_presentationContext;
	public schema_presentation(i?: number): Schema_presentationContext | Schema_presentationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Schema_presentationContext);
		} else {
			return this.getRuleContext(i, Schema_presentationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.COMMA);
		} else {
			return this.getToken(UONParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_schema_presentations; }
}


export class Schema_presentationContext extends ParserRuleContext {
	public schema_name(): Schema_nameContext | undefined {
		return this.tryGetRuleContext(0, Schema_nameContext);
	}
	public schema_uuid(): Schema_uuidContext | undefined {
		return this.tryGetRuleContext(0, Schema_uuidContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_schema_presentation; }
}


export class Schema_nameContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_schema_name; }
}


export class Schema_uuidContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_schema_uuid; }
}


export class Validation_propertiesContext extends ParserRuleContext {
	public string_validation(): String_validationContext | undefined {
		return this.tryGetRuleContext(0, String_validationContext);
	}
	public number_validation(): Number_validationContext | undefined {
		return this.tryGetRuleContext(0, Number_validationContext);
	}
	public boolean_validation(): Boolean_validationContext | undefined {
		return this.tryGetRuleContext(0, Boolean_validationContext);
	}
	public url_validation(): Url_validationContext | undefined {
		return this.tryGetRuleContext(0, Url_validationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_validation_properties; }
}


export class String_validationContext extends ParserRuleContext {
	public STR_TYPE(): TerminalNode { return this.getToken(UONParser.STR_TYPE, 0); }
	public string_properties(): String_propertiesContext | undefined {
		return this.tryGetRuleContext(0, String_propertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_validation; }
}


export class String_propertiesContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(UONParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(UONParser.CLOSE_PAR, 0); }
	public string_property(): String_propertyContext[];
	public string_property(i: number): String_propertyContext;
	public string_property(i?: number): String_propertyContext | String_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(String_propertyContext);
		} else {
			return this.getRuleContext(i, String_propertyContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.COMMA);
		} else {
			return this.getToken(UONParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_properties; }
}


export class String_propertyContext extends ParserRuleContext {
	public string_max(): String_maxContext | undefined {
		return this.tryGetRuleContext(0, String_maxContext);
	}
	public string_min(): String_minContext | undefined {
		return this.tryGetRuleContext(0, String_minContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_property; }
}


export class String_maxContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_max; }
}


export class String_minContext extends ParserRuleContext {
	public MINUTE(): TerminalNode { return this.getToken(UONParser.MINUTE, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_min; }
}


export class Url_validationContext extends ParserRuleContext {
	public URL_TYPE(): TerminalNode { return this.getToken(UONParser.URL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_url_validation; }
}


export class Boolean_validationContext extends ParserRuleContext {
	public BOOL_TYPE(): TerminalNode { return this.getToken(UONParser.BOOL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_boolean_validation; }
}


export class Number_validationContext extends ParserRuleContext {
	public number_validation_type(): Number_validation_typeContext {
		return this.getRuleContext(0, Number_validation_typeContext);
	}
	public number_properties(): Number_propertiesContext | undefined {
		return this.tryGetRuleContext(0, Number_propertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_validation; }
}


export class Number_propertiesContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(UONParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(UONParser.CLOSE_PAR, 0); }
	public number_property(): Number_propertyContext[];
	public number_property(i: number): Number_propertyContext;
	public number_property(i?: number): Number_propertyContext | Number_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Number_propertyContext);
		} else {
			return this.getRuleContext(i, Number_propertyContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.COMMA);
		} else {
			return this.getToken(UONParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_properties; }
}


export class Number_propertyContext extends ParserRuleContext {
	public number_max(): Number_maxContext | undefined {
		return this.tryGetRuleContext(0, Number_maxContext);
	}
	public number_min(): Number_minContext | undefined {
		return this.tryGetRuleContext(0, Number_minContext);
	}
	public quantity_validation(): Quantity_validationContext | undefined {
		return this.tryGetRuleContext(0, Quantity_validationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_property; }
}


export class Number_maxContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_max; }
}


export class Number_minContext extends ParserRuleContext {
	public MINUTE(): TerminalNode { return this.getToken(UONParser.MINUTE, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_min; }
}


export class Number_validation_typeContext extends ParserRuleContext {
	public FLOAT_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.FLOAT_TYPE, 0); }
	public INT_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.INT_TYPE, 0); }
	public UINT_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.UINT_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_validation_type; }
}


export class Quantity_validationContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public quantity_validation_types(): Quantity_validation_typesContext {
		return this.getRuleContext(0, Quantity_validation_typesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_quantity_validation; }
}


export class Quantity_validation_typesContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_quantity_validation_types; }
}


export class BooleanContext extends ParserRuleContext {
	public true(): TrueContext | undefined {
		return this.tryGetRuleContext(0, TrueContext);
	}
	public false(): FalseContext | undefined {
		return this.tryGetRuleContext(0, FalseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_boolean; }
}


export class TrueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_true; }
}


export class FalseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_false; }
}


export class NullContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_null; }
}

