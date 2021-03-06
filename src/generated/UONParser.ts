// Generated from ../grammar/UON.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { UONListener } from "./UONListener";
import { UONVisitor } from "./UONVisitor";


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
	public static readonly METERS = 16;
	public static readonly KILOMETERS = 17;
	public static readonly GRAMS = 18;
	public static readonly KILOGRAMS = 19;
	public static readonly SECOND = 20;
	public static readonly MINUTE = 21;
	public static readonly CELSIUS = 22;
	public static readonly AMPERE = 23;
	public static readonly KELVIN = 24;
	public static readonly MOLE = 25;
	public static readonly CANDELA = 26;
	public static readonly CT = 27;
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
	public static readonly MAX = 43;
	public static readonly MIN = 44;
	public static readonly LENGTH = 45;
	public static readonly MASS = 46;
	public static readonly TEMPERATURE = 47;
	public static readonly TIME = 48;
	public static readonly NAME = 49;
	public static readonly UUID = 50;
	public static readonly DESCRIPTION = 51;
	public static readonly OPTIONAL = 52;
	public static readonly COMMENT = 53;
	public static readonly QUOTED_STRING = 54;
	public static readonly NUMBER = 55;
	public static readonly UNQUOTED_STRING = 56;
	public static readonly IDENTIFIER = 57;
	public static readonly WS = 58;
	public static readonly LINE_COMMENT = 59;
	public static readonly NEWLINE = 60;
	public static readonly MINUS = 61;
	public static readonly OPEN_PAR = 62;
	public static readonly CLOSE_PAR = 63;
	public static readonly OPEN_C_BRA = 64;
	public static readonly CLOSE_C_BRA = 65;
	public static readonly OPEN_S_BRA = 66;
	public static readonly CLOSE_S_BRA = 67;
	public static readonly COMMA = 68;
	public static readonly COLON = 69;
	public static readonly MAPPING_TYPE = 70;
	public static readonly ORDERED_MAPPING_TYPE = 71;
	public static readonly SEQUENCE_TYPE = 72;
	public static readonly SCHEMA_TYPE = 73;
	public static readonly INDENT = 74;
	public static readonly DEDENT = 75;
	public static readonly RULE_uon = 0;
	public static readonly RULE_root_value = 1;
	public static readonly RULE_json_collection = 2;
	public static readonly RULE_yaml_collection_nested = 3;
	public static readonly RULE_json_map = 4;
	public static readonly RULE_json_seq = 5;
	public static readonly RULE_json_user_type = 6;
	public static readonly RULE_json_value = 7;
	public static readonly RULE_pair_key = 8;
	public static readonly RULE_json_pair = 9;
	public static readonly RULE_yaml_collection = 10;
	public static readonly RULE_yaml_map = 11;
	public static readonly RULE_yaml_seq = 12;
	public static readonly RULE_seq_item = 13;
	public static readonly RULE_pair = 14;
	public static readonly RULE_yaml_value = 15;
	public static readonly RULE_yaml_user_type = 16;
	public static readonly RULE_presentation_properties = 17;
	public static readonly RULE_presentation_property = 18;
	public static readonly RULE_description = 19;
	public static readonly RULE_optional = 20;
	public static readonly RULE_types_properties = 21;
	public static readonly RULE_types_propertie = 22;
	public static readonly RULE_comment = 23;
	public static readonly RULE_number_presentation = 24;
	public static readonly RULE_number_presentation_properties = 25;
	public static readonly RULE_number_presentation_propertie = 26;
	public static readonly RULE_unit = 27;
	public static readonly RULE_schema = 28;
	public static readonly RULE_attributes = 29;
	public static readonly RULE_attribute = 30;
	public static readonly RULE_schema_presentations = 31;
	public static readonly RULE_schema_presentation = 32;
	public static readonly RULE_schema_name = 33;
	public static readonly RULE_schema_uuid = 34;
	public static readonly RULE_validation_properties = 35;
	public static readonly RULE_string_validation = 36;
	public static readonly RULE_string_properties = 37;
	public static readonly RULE_string_property = 38;
	public static readonly RULE_string_max = 39;
	public static readonly RULE_string_min = 40;
	public static readonly RULE_url_validation = 41;
	public static readonly RULE_boolean_validation = 42;
	public static readonly RULE_number_validation = 43;
	public static readonly RULE_number_properties = 44;
	public static readonly RULE_number_property = 45;
	public static readonly RULE_number_max = 46;
	public static readonly RULE_number_min = 47;
	public static readonly RULE_number_validation_type = 48;
	public static readonly RULE_quantity_validation = 49;
	public static readonly RULE_quantity_validation_types = 50;
	public static readonly RULE_scalar = 51;
	public static readonly RULE_quantity_scalar = 52;
	public static readonly RULE_numeric_scalar = 53;
	public static readonly RULE_coercible_numeric_scalar = 54;
	public static readonly RULE_string_scalar = 55;
	public static readonly RULE_boolean_scalar = 56;
	public static readonly RULE_url = 57;
	public static readonly RULE_quantity = 58;
	public static readonly RULE_length = 59;
	public static readonly RULE_mass = 60;
	public static readonly RULE_time = 61;
	public static readonly RULE_temperature = 62;
	public static readonly RULE_number_type = 63;
	public static readonly RULE_boolean = 64;
	public static readonly RULE_true = 65;
	public static readonly RULE_false = 66;
	public static readonly RULE_null = 67;
	public static readonly RULE_custom_type = 68;
	public static readonly RULE_string = 69;
	public static readonly RULE_literal = 70;
	public static readonly RULE_number = 71;
	public static readonly RULE_numeric_literal = 72;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"uon", "root_value", "json_collection", "yaml_collection_nested", "json_map", 
		"json_seq", "json_user_type", "json_value", "pair_key", "json_pair", "yaml_collection", 
		"yaml_map", "yaml_seq", "seq_item", "pair", "yaml_value", "yaml_user_type", 
		"presentation_properties", "presentation_property", "description", "optional", 
		"types_properties", "types_propertie", "comment", "number_presentation", 
		"number_presentation_properties", "number_presentation_propertie", "unit", 
		"schema", "attributes", "attribute", "schema_presentations", "schema_presentation", 
		"schema_name", "schema_uuid", "validation_properties", "string_validation", 
		"string_properties", "string_property", "string_max", "string_min", "url_validation", 
		"boolean_validation", "number_validation", "number_properties", "number_property", 
		"number_max", "number_min", "number_validation_type", "quantity_validation", 
		"quantity_validation_types", "scalar", "quantity_scalar", "numeric_scalar", 
		"coercible_numeric_scalar", "string_scalar", "boolean_scalar", "url", 
		"quantity", "length", "mass", "time", "temperature", "number_type", "boolean", 
		"true", "false", "null", "custom_type", "string", "literal", "number", 
		"numeric_literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'unit'", "'quantity'", "'true'", "'True'", "'false'", "'False'", 
		"'null'", "'none'", "'None'", "'inf'", "'nan'", "'-inf'", "'-nan'", "'+inf'", 
		"'+nan'", "'m'", "'km'", "'g'", "'kg'", "'s'", "'minute'", "'C'", "'A'", 
		"'K'", "'mol'", "'cd'", "'!!'", "'!str'", "'!bool'", "'!url'", "'!float'", 
		"'!float128'", "'!float64'", "'!float32'", "'!int'", "'!int128'", "'!int64'", 
		"'!int32'", "'!uint'", "'!uint128'", "'!uint64'", "'!uint32'", "'max'", 
		"'min'", "'length'", "'mass'", "'temperature'", "'time'", "'name'", "'uuid'", 
		"'description'", "'optional'", "'comment'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'-'", "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "','", "':'", "'!map'", "'!omap'", "'!seq'", "'!schema'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "METERS", "KILOMETERS", "GRAMS", "KILOGRAMS", "SECOND", 
		"MINUTE", "CELSIUS", "AMPERE", "KELVIN", "MOLE", "CANDELA", "CT", "STR_TYPE", 
		"BOOL_TYPE", "URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", "FLOAT_64_TYPE", 
		"FLOAT_32_TYPE", "INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", "INT_32_TYPE", 
		"UINT_TYPE", "UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", "MAX", "MIN", 
		"LENGTH", "MASS", "TEMPERATURE", "TIME", "NAME", "UUID", "DESCRIPTION", 
		"OPTIONAL", "COMMENT", "QUOTED_STRING", "NUMBER", "UNQUOTED_STRING", "IDENTIFIER", 
		"WS", "LINE_COMMENT", "NEWLINE", "MINUS", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", 
		"CLOSE_C_BRA", "OPEN_S_BRA", "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", 
		"ORDERED_MAPPING_TYPE", "SEQUENCE_TYPE", "SCHEMA_TYPE", "INDENT", "DEDENT",
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UONParser.NEWLINE) {
				{
				{
				this.state = 146;
				this.match(UONParser.NEWLINE);
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
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
	public root_value(): Root_valueContext {
		let _localctx: Root_valueContext = new Root_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, UONParser.RULE_root_value);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.json_collection();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.yaml_collection();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
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
	public json_collection(): Json_collectionContext {
		let _localctx: Json_collectionContext = new Json_collectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, UONParser.RULE_json_collection);
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.OPEN_C_BRA:
			case UONParser.MAPPING_TYPE:
			case UONParser.ORDERED_MAPPING_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 159;
				this.json_map();
				}
				break;
			case UONParser.OPEN_S_BRA:
			case UONParser.SEQUENCE_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 160;
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
	public yaml_collection_nested(): Yaml_collection_nestedContext {
		let _localctx: Yaml_collection_nestedContext = new Yaml_collection_nestedContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, UONParser.RULE_yaml_collection_nested);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(UONParser.NEWLINE);
			{
			this.state = 164;
			this.match(UONParser.INDENT);
			this.state = 165;
			this.yaml_collection();
			this.state = 166;
			this.match(UONParser.DEDENT);
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
	public json_map(): Json_mapContext {
		let _localctx: Json_mapContext = new Json_mapContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, UONParser.RULE_json_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.MAPPING_TYPE || _la === UONParser.ORDERED_MAPPING_TYPE) {
				{
				this.state = 168;
				_la = this._input.LA(1);
				if (!(_la === UONParser.MAPPING_TYPE || _la === UONParser.ORDERED_MAPPING_TYPE)) {
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

			this.state = 171;
			this.match(UONParser.OPEN_C_BRA);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__2) | (1 << UONParser.T__3) | (1 << UONParser.T__4) | (1 << UONParser.T__5) | (1 << UONParser.T__6) | (1 << UONParser.T__7) | (1 << UONParser.T__8) | (1 << UONParser.T__9) | (1 << UONParser.T__10) | (1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (UONParser.LENGTH - 45)) | (1 << (UONParser.MASS - 45)) | (1 << (UONParser.TEMPERATURE - 45)) | (1 << (UONParser.TIME - 45)) | (1 << (UONParser.NAME - 45)) | (1 << (UONParser.UUID - 45)) | (1 << (UONParser.DESCRIPTION - 45)) | (1 << (UONParser.OPTIONAL - 45)) | (1 << (UONParser.QUOTED_STRING - 45)) | (1 << (UONParser.NUMBER - 45)) | (1 << (UONParser.UNQUOTED_STRING - 45)))) !== 0)) {
				{
				this.state = 172;
				this.json_pair();
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 173;
					this.match(UONParser.COMMA);
					this.state = 174;
					this.json_pair();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 182;
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
		this.enterRule(_localctx, 10, UONParser.RULE_json_seq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.SEQUENCE_TYPE) {
				{
				this.state = 184;
				this.match(UONParser.SEQUENCE_TYPE);
				}
			}

			this.state = 187;
			this.match(UONParser.OPEN_S_BRA);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__2) | (1 << UONParser.T__3) | (1 << UONParser.T__4) | (1 << UONParser.T__5) | (1 << UONParser.T__6) | (1 << UONParser.T__7) | (1 << UONParser.T__8) | (1 << UONParser.T__9) | (1 << UONParser.T__10) | (1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14) | (1 << UONParser.CT) | (1 << UONParser.STR_TYPE) | (1 << UONParser.BOOL_TYPE) | (1 << UONParser.URL_TYPE) | (1 << UONParser.FLOAT_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (UONParser.FLOAT_128_TYPE - 32)) | (1 << (UONParser.FLOAT_64_TYPE - 32)) | (1 << (UONParser.FLOAT_32_TYPE - 32)) | (1 << (UONParser.INT_TYPE - 32)) | (1 << (UONParser.INT_128_TYPE - 32)) | (1 << (UONParser.INT_64_TYPE - 32)) | (1 << (UONParser.INT_32_TYPE - 32)) | (1 << (UONParser.UINT_TYPE - 32)) | (1 << (UONParser.UINT_128_TYPE - 32)) | (1 << (UONParser.UINT_64_TYPE - 32)) | (1 << (UONParser.UINT_32_TYPE - 32)) | (1 << (UONParser.LENGTH - 32)) | (1 << (UONParser.MASS - 32)) | (1 << (UONParser.TEMPERATURE - 32)) | (1 << (UONParser.TIME - 32)) | (1 << (UONParser.NAME - 32)) | (1 << (UONParser.UUID - 32)) | (1 << (UONParser.DESCRIPTION - 32)) | (1 << (UONParser.OPTIONAL - 32)) | (1 << (UONParser.QUOTED_STRING - 32)) | (1 << (UONParser.NUMBER - 32)) | (1 << (UONParser.UNQUOTED_STRING - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (UONParser.OPEN_C_BRA - 64)) | (1 << (UONParser.OPEN_S_BRA - 64)) | (1 << (UONParser.MAPPING_TYPE - 64)) | (1 << (UONParser.ORDERED_MAPPING_TYPE - 64)) | (1 << (UONParser.SEQUENCE_TYPE - 64)))) !== 0)) {
				{
				this.state = 188;
				this.json_value();
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 189;
					this.match(UONParser.COMMA);
					this.state = 190;
					this.json_value();
					}
					}
					this.state = 195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 198;
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
	public json_user_type(): Json_user_typeContext {
		let _localctx: Json_user_typeContext = new Json_user_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, UONParser.RULE_json_user_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.custom_type();
			this.state = 201;
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
	public json_value(): Json_valueContext {
		let _localctx: Json_valueContext = new Json_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, UONParser.RULE_json_value);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.json_map();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.json_seq();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 205;
				this.scalar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 206;
				this.json_user_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 207;
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
	public pair_key(): Pair_keyContext {
		let _localctx: Pair_keyContext = new Pair_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, UONParser.RULE_pair_key);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.string();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 211;
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
		this.enterRule(_localctx, 18, UONParser.RULE_json_pair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.pair_key();
			this.state = 215;
			this.match(UONParser.COLON);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__2) | (1 << UONParser.T__3) | (1 << UONParser.T__4) | (1 << UONParser.T__5) | (1 << UONParser.T__6) | (1 << UONParser.T__7) | (1 << UONParser.T__8) | (1 << UONParser.T__9) | (1 << UONParser.T__10) | (1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14) | (1 << UONParser.CT) | (1 << UONParser.STR_TYPE) | (1 << UONParser.BOOL_TYPE) | (1 << UONParser.URL_TYPE) | (1 << UONParser.FLOAT_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (UONParser.FLOAT_128_TYPE - 32)) | (1 << (UONParser.FLOAT_64_TYPE - 32)) | (1 << (UONParser.FLOAT_32_TYPE - 32)) | (1 << (UONParser.INT_TYPE - 32)) | (1 << (UONParser.INT_128_TYPE - 32)) | (1 << (UONParser.INT_64_TYPE - 32)) | (1 << (UONParser.INT_32_TYPE - 32)) | (1 << (UONParser.UINT_TYPE - 32)) | (1 << (UONParser.UINT_128_TYPE - 32)) | (1 << (UONParser.UINT_64_TYPE - 32)) | (1 << (UONParser.UINT_32_TYPE - 32)) | (1 << (UONParser.LENGTH - 32)) | (1 << (UONParser.MASS - 32)) | (1 << (UONParser.TEMPERATURE - 32)) | (1 << (UONParser.TIME - 32)) | (1 << (UONParser.NAME - 32)) | (1 << (UONParser.UUID - 32)) | (1 << (UONParser.DESCRIPTION - 32)) | (1 << (UONParser.OPTIONAL - 32)) | (1 << (UONParser.QUOTED_STRING - 32)) | (1 << (UONParser.NUMBER - 32)) | (1 << (UONParser.UNQUOTED_STRING - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (UONParser.OPEN_C_BRA - 64)) | (1 << (UONParser.OPEN_S_BRA - 64)) | (1 << (UONParser.MAPPING_TYPE - 64)) | (1 << (UONParser.ORDERED_MAPPING_TYPE - 64)) | (1 << (UONParser.SEQUENCE_TYPE - 64)))) !== 0)) {
				{
				this.state = 216;
				this.json_value();
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
	public yaml_collection(): Yaml_collectionContext {
		let _localctx: Yaml_collectionContext = new Yaml_collectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, UONParser.RULE_yaml_collection);
		try {
			this.state = 221;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__2:
			case UONParser.T__3:
			case UONParser.T__4:
			case UONParser.T__5:
			case UONParser.T__6:
			case UONParser.T__7:
			case UONParser.T__8:
			case UONParser.T__9:
			case UONParser.T__10:
			case UONParser.T__11:
			case UONParser.T__12:
			case UONParser.T__13:
			case UONParser.T__14:
			case UONParser.LENGTH:
			case UONParser.MASS:
			case UONParser.TEMPERATURE:
			case UONParser.TIME:
			case UONParser.NAME:
			case UONParser.UUID:
			case UONParser.DESCRIPTION:
			case UONParser.OPTIONAL:
			case UONParser.QUOTED_STRING:
			case UONParser.NUMBER:
			case UONParser.UNQUOTED_STRING:
			case UONParser.MAPPING_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 219;
				this.yaml_map();
				}
				break;
			case UONParser.MINUS:
			case UONParser.SEQUENCE_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 220;
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
		this.enterRule(_localctx, 22, UONParser.RULE_yaml_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.MAPPING_TYPE) {
				{
				this.state = 223;
				this.match(UONParser.MAPPING_TYPE);
				}
			}

			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 226;
				this.pair();
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__2) | (1 << UONParser.T__3) | (1 << UONParser.T__4) | (1 << UONParser.T__5) | (1 << UONParser.T__6) | (1 << UONParser.T__7) | (1 << UONParser.T__8) | (1 << UONParser.T__9) | (1 << UONParser.T__10) | (1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (UONParser.LENGTH - 45)) | (1 << (UONParser.MASS - 45)) | (1 << (UONParser.TEMPERATURE - 45)) | (1 << (UONParser.TIME - 45)) | (1 << (UONParser.NAME - 45)) | (1 << (UONParser.UUID - 45)) | (1 << (UONParser.DESCRIPTION - 45)) | (1 << (UONParser.OPTIONAL - 45)) | (1 << (UONParser.QUOTED_STRING - 45)) | (1 << (UONParser.NUMBER - 45)) | (1 << (UONParser.UNQUOTED_STRING - 45)))) !== 0));
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
		this.enterRule(_localctx, 24, UONParser.RULE_yaml_seq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.SEQUENCE_TYPE) {
				{
				this.state = 231;
				this.match(UONParser.SEQUENCE_TYPE);
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 234;
				this.seq_item();
				}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === UONParser.MINUS);
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
		this.enterRule(_localctx, 26, UONParser.RULE_seq_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(UONParser.MINUS);
			this.state = 240;
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
		this.enterRule(_localctx, 28, UONParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.pair_key();
			this.state = 243;
			this.match(UONParser.COLON);
			this.state = 244;
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
	public yaml_value(): Yaml_valueContext {
		let _localctx: Yaml_valueContext = new Yaml_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, UONParser.RULE_yaml_value);
		let _la: number;
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 247;
				this.scalar();
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 248;
					this.match(UONParser.NEWLINE);
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === UONParser.NEWLINE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 253;
				this.yaml_collection_nested();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 254;
				this.yaml_user_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 255;
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
	public yaml_user_type(): Yaml_user_typeContext {
		let _localctx: Yaml_user_typeContext = new Yaml_user_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, UONParser.RULE_yaml_user_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(UONParser.NEWLINE);
			this.state = 259;
			this.match(UONParser.INDENT);
			this.state = 260;
			this.custom_type();
			this.state = 261;
			this.yaml_map();
			this.state = 262;
			this.match(UONParser.DEDENT);
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
		this.enterRule(_localctx, 34, UONParser.RULE_presentation_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(UONParser.OPEN_PAR);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.DESCRIPTION || _la === UONParser.OPTIONAL) {
				{
				this.state = 265;
				this.presentation_property();
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 266;
					this.match(UONParser.COMMA);
					this.state = 267;
					this.presentation_property();
					}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 275;
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
		this.enterRule(_localctx, 36, UONParser.RULE_presentation_property);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.OPTIONAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.optional();
				}
				break;
			case UONParser.DESCRIPTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 278;
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
		this.enterRule(_localctx, 38, UONParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(UONParser.DESCRIPTION);
			this.state = 282;
			this.match(UONParser.COLON);
			this.state = 283;
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
		this.enterRule(_localctx, 40, UONParser.RULE_optional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(UONParser.OPTIONAL);
			this.state = 286;
			this.match(UONParser.COLON);
			this.state = 287;
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
	public types_properties(): Types_propertiesContext {
		let _localctx: Types_propertiesContext = new Types_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, UONParser.RULE_types_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(UONParser.OPEN_PAR);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (UONParser.DESCRIPTION - 51)) | (1 << (UONParser.OPTIONAL - 51)) | (1 << (UONParser.COMMENT - 51)))) !== 0)) {
				{
				this.state = 290;
				this.types_propertie();
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 291;
					this.match(UONParser.COMMA);
					this.state = 292;
					this.types_propertie();
					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 300;
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
	public types_propertie(): Types_propertieContext {
		let _localctx: Types_propertieContext = new Types_propertieContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, UONParser.RULE_types_propertie);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.COMMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.comment();
				}
				break;
			case UONParser.DESCRIPTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 303;
				this.description();
				}
				break;
			case UONParser.OPTIONAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 304;
				this.optional();
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, UONParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(UONParser.COMMENT);
			this.state = 308;
			this.match(UONParser.COLON);
			this.state = 309;
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
	public number_presentation(): Number_presentationContext {
		let _localctx: Number_presentationContext = new Number_presentationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, UONParser.RULE_number_presentation);
		try {
			this.state = 313;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.DESCRIPTION:
			case UONParser.OPTIONAL:
			case UONParser.COMMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 311;
				this.types_propertie();
				}
				break;
			case UONParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 312;
				this.number_presentation_propertie();
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
	public number_presentation_properties(): Number_presentation_propertiesContext {
		let _localctx: Number_presentation_propertiesContext = new Number_presentation_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, UONParser.RULE_number_presentation_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(UONParser.OPEN_PAR);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.T__0 || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (UONParser.DESCRIPTION - 51)) | (1 << (UONParser.OPTIONAL - 51)) | (1 << (UONParser.COMMENT - 51)))) !== 0)) {
				{
				this.state = 316;
				this.number_presentation();
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 317;
					this.match(UONParser.COMMA);
					this.state = 318;
					this.number_presentation();
					}
					}
					this.state = 323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 326;
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
	public number_presentation_propertie(): Number_presentation_propertieContext {
		let _localctx: Number_presentation_propertieContext = new Number_presentation_propertieContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, UONParser.RULE_number_presentation_propertie);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.unit();
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
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, UONParser.RULE_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(UONParser.T__0);
			this.state = 331;
			this.match(UONParser.COLON);
			this.state = 332;
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
	public schema(): SchemaContext {
		let _localctx: SchemaContext = new SchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, UONParser.RULE_schema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.custom_type();
			this.state = 335;
			this.match(UONParser.COLON);
			this.state = 336;
			this.match(UONParser.SCHEMA_TYPE);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 337;
				this.schema_presentations();
				}
			}

			this.state = 340;
			this.match(UONParser.OPEN_C_BRA);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__2) | (1 << UONParser.T__3) | (1 << UONParser.T__4) | (1 << UONParser.T__5) | (1 << UONParser.T__6) | (1 << UONParser.T__7) | (1 << UONParser.T__8) | (1 << UONParser.T__9) | (1 << UONParser.T__10) | (1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (UONParser.LENGTH - 45)) | (1 << (UONParser.MASS - 45)) | (1 << (UONParser.TEMPERATURE - 45)) | (1 << (UONParser.TIME - 45)) | (1 << (UONParser.NAME - 45)) | (1 << (UONParser.UUID - 45)) | (1 << (UONParser.DESCRIPTION - 45)) | (1 << (UONParser.OPTIONAL - 45)) | (1 << (UONParser.QUOTED_STRING - 45)) | (1 << (UONParser.NUMBER - 45)) | (1 << (UONParser.UNQUOTED_STRING - 45)))) !== 0)) {
				{
				this.state = 341;
				this.attributes();
				}
			}

			this.state = 344;
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
		this.enterRule(_localctx, 58, UONParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.attribute();
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === UONParser.COMMA) {
				{
				{
				this.state = 347;
				this.match(UONParser.COMMA);
				this.state = 348;
				this.attribute();
				}
				}
				this.state = 353;
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
		this.enterRule(_localctx, 60, UONParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.pair_key();
			this.state = 355;
			this.match(UONParser.COLON);
			this.state = 356;
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
		this.enterRule(_localctx, 62, UONParser.RULE_schema_presentations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(UONParser.OPEN_PAR);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (UONParser.NAME - 49)) | (1 << (UONParser.UUID - 49)) | (1 << (UONParser.DESCRIPTION - 49)))) !== 0)) {
				{
				this.state = 359;
				this.schema_presentation();
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 360;
					this.match(UONParser.COMMA);
					this.state = 361;
					this.schema_presentation();
					}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 369;
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
		this.enterRule(_localctx, 64, UONParser.RULE_schema_presentation);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 371;
				this.schema_name();
				}
				break;
			case UONParser.UUID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 372;
				this.schema_uuid();
				}
				break;
			case UONParser.DESCRIPTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 373;
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
		this.enterRule(_localctx, 66, UONParser.RULE_schema_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(UONParser.NAME);
			this.state = 377;
			this.match(UONParser.COLON);
			this.state = 378;
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
		this.enterRule(_localctx, 68, UONParser.RULE_schema_uuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(UONParser.UUID);
			this.state = 381;
			this.match(UONParser.COLON);
			this.state = 382;
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
		this.enterRule(_localctx, 70, UONParser.RULE_validation_properties);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.STR_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				this.string_validation();
				}
				break;
			case UONParser.FLOAT_TYPE:
			case UONParser.INT_TYPE:
			case UONParser.UINT_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.number_validation();
				}
				break;
			case UONParser.BOOL_TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 386;
				this.boolean_validation();
				}
				break;
			case UONParser.URL_TYPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 387;
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
		this.enterRule(_localctx, 72, UONParser.RULE_string_validation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(UONParser.STR_TYPE);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 391;
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
		this.enterRule(_localctx, 74, UONParser.RULE_string_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(UONParser.OPEN_PAR);
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.MAX || _la === UONParser.MIN) {
				{
				this.state = 395;
				this.string_property();
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 396;
					this.match(UONParser.COMMA);
					this.state = 397;
					this.string_property();
					}
					}
					this.state = 402;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 405;
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
		this.enterRule(_localctx, 76, UONParser.RULE_string_property);
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.MAX:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 407;
				this.string_max();
				}
				break;
			case UONParser.MIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 408;
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
		this.enterRule(_localctx, 78, UONParser.RULE_string_max);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(UONParser.MAX);
			this.state = 412;
			this.match(UONParser.COLON);
			this.state = 413;
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
	public string_min(): String_minContext {
		let _localctx: String_minContext = new String_minContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, UONParser.RULE_string_min);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(UONParser.MIN);
			this.state = 416;
			this.match(UONParser.COLON);
			this.state = 417;
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
	public url_validation(): Url_validationContext {
		let _localctx: Url_validationContext = new Url_validationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, UONParser.RULE_url_validation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
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
		this.enterRule(_localctx, 84, UONParser.RULE_boolean_validation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
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
		this.enterRule(_localctx, 86, UONParser.RULE_number_validation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.number_validation_type();
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 424;
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
		this.enterRule(_localctx, 88, UONParser.RULE_number_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(UONParser.OPEN_PAR);
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.T__1 || _la === UONParser.MAX || _la === UONParser.MIN) {
				{
				this.state = 428;
				this.number_property();
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === UONParser.COMMA) {
					{
					{
					this.state = 429;
					this.match(UONParser.COMMA);
					this.state = 430;
					this.number_property();
					}
					}
					this.state = 435;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 438;
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
		this.enterRule(_localctx, 90, UONParser.RULE_number_property);
		try {
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.MAX:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 440;
				this.number_max();
				}
				break;
			case UONParser.MIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.number_min();
				}
				break;
			case UONParser.T__1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 442;
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
		this.enterRule(_localctx, 92, UONParser.RULE_number_max);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(UONParser.MAX);
			this.state = 446;
			this.match(UONParser.COLON);
			this.state = 447;
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
		this.enterRule(_localctx, 94, UONParser.RULE_number_min);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(UONParser.MIN);
			this.state = 450;
			this.match(UONParser.COLON);
			this.state = 451;
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
		this.enterRule(_localctx, 96, UONParser.RULE_number_validation_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (UONParser.FLOAT_TYPE - 31)) | (1 << (UONParser.INT_TYPE - 31)) | (1 << (UONParser.UINT_TYPE - 31)))) !== 0))) {
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
		this.enterRule(_localctx, 98, UONParser.RULE_quantity_validation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(UONParser.T__1);
			this.state = 456;
			this.match(UONParser.COLON);
			this.state = 457;
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
		this.enterRule(_localctx, 100, UONParser.RULE_quantity_validation_types);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (UONParser.LENGTH - 45)) | (1 << (UONParser.MASS - 45)) | (1 << (UONParser.TEMPERATURE - 45)) | (1 << (UONParser.TIME - 45)))) !== 0))) {
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
	public scalar(): ScalarContext {
		let _localctx: ScalarContext = new ScalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, UONParser.RULE_scalar);
		try {
			this.state = 465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 461;
				this.quantity_scalar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 462;
				this.string_scalar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 463;
				this.boolean_scalar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 464;
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
	public quantity_scalar(): Quantity_scalarContext {
		let _localctx: Quantity_scalarContext = new Quantity_scalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, UONParser.RULE_quantity_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.numeric_scalar();
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.METERS) | (1 << UONParser.KILOMETERS) | (1 << UONParser.GRAMS) | (1 << UONParser.KILOGRAMS) | (1 << UONParser.SECOND) | (1 << UONParser.MINUTE) | (1 << UONParser.CELSIUS) | (1 << UONParser.KELVIN))) !== 0)) {
				{
				this.state = 468;
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
		this.enterRule(_localctx, 106, UONParser.RULE_numeric_scalar);
		try {
			this.state = 473;
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
				this.state = 471;
				this.coercible_numeric_scalar();
				}
				break;
			case UONParser.T__9:
			case UONParser.T__10:
			case UONParser.T__11:
			case UONParser.T__12:
			case UONParser.T__13:
			case UONParser.T__14:
			case UONParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
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
		this.enterRule(_localctx, 108, UONParser.RULE_coercible_numeric_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 475;
			this.number_type();
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.OPEN_PAR) {
				{
				this.state = 476;
				this.number_presentation_properties();
				}
			}

			}
			this.state = 481;
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
				this.state = 479;
				this.coercible_numeric_scalar();
				}
				break;
			case UONParser.T__9:
			case UONParser.T__10:
			case UONParser.T__11:
			case UONParser.T__12:
			case UONParser.T__13:
			case UONParser.T__14:
			case UONParser.NUMBER:
				{
				this.state = 480;
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
	public string_scalar(): String_scalarContext {
		let _localctx: String_scalarContext = new String_scalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, UONParser.RULE_string_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.STR_TYPE) {
				{
				this.state = 483;
				this.match(UONParser.STR_TYPE);
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === UONParser.OPEN_PAR) {
					{
					this.state = 484;
					this.types_properties();
					}
				}

				}
			}

			this.state = 489;
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
		this.enterRule(_localctx, 112, UONParser.RULE_boolean_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.BOOL_TYPE) {
				{
				this.state = 491;
				this.match(UONParser.BOOL_TYPE);
				}
			}

			this.state = 494;
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
		this.enterRule(_localctx, 114, UONParser.RULE_url);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === UONParser.URL_TYPE) {
				{
				this.state = 496;
				this.match(UONParser.URL_TYPE);
				}
			}

			this.state = 499;
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
	public quantity(): QuantityContext {
		let _localctx: QuantityContext = new QuantityContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, UONParser.RULE_quantity);
		try {
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.METERS:
			case UONParser.KILOMETERS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.length();
				}
				break;
			case UONParser.GRAMS:
			case UONParser.KILOGRAMS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this.mass();
				}
				break;
			case UONParser.SECOND:
			case UONParser.MINUTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 503;
				this.time();
				}
				break;
			case UONParser.CELSIUS:
			case UONParser.KELVIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 504;
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
		this.enterRule(_localctx, 118, UONParser.RULE_length);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
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
		this.enterRule(_localctx, 120, UONParser.RULE_mass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
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
		this.enterRule(_localctx, 122, UONParser.RULE_time);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
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
		this.enterRule(_localctx, 124, UONParser.RULE_temperature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
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
	public number_type(): Number_typeContext {
		let _localctx: Number_typeContext = new Number_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, UONParser.RULE_number_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (UONParser.FLOAT_TYPE - 31)) | (1 << (UONParser.FLOAT_128_TYPE - 31)) | (1 << (UONParser.FLOAT_64_TYPE - 31)) | (1 << (UONParser.FLOAT_32_TYPE - 31)) | (1 << (UONParser.INT_TYPE - 31)) | (1 << (UONParser.INT_128_TYPE - 31)) | (1 << (UONParser.INT_64_TYPE - 31)) | (1 << (UONParser.INT_32_TYPE - 31)) | (1 << (UONParser.UINT_TYPE - 31)) | (1 << (UONParser.UINT_128_TYPE - 31)) | (1 << (UONParser.UINT_64_TYPE - 31)) | (1 << (UONParser.UINT_32_TYPE - 31)))) !== 0))) {
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
		this.enterRule(_localctx, 128, UONParser.RULE_boolean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__2:
			case UONParser.T__3:
				{
				this.state = 517;
				this.true();
				}
				break;
			case UONParser.T__4:
			case UONParser.T__5:
				{
				this.state = 518;
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
		this.enterRule(_localctx, 130, UONParser.RULE_true);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			_la = this._input.LA(1);
			if (!(_la === UONParser.T__2 || _la === UONParser.T__3)) {
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
		this.enterRule(_localctx, 132, UONParser.RULE_false);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			_la = this._input.LA(1);
			if (!(_la === UONParser.T__4 || _la === UONParser.T__5)) {
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
		this.enterRule(_localctx, 134, UONParser.RULE_null);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__6) | (1 << UONParser.T__7) | (1 << UONParser.T__8))) !== 0))) {
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
		this.enterRule(_localctx, 136, UONParser.RULE_custom_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.match(UONParser.CT);
			this.state = 528;
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, UONParser.RULE_string);
		try {
			this.state = 533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__2:
			case UONParser.T__3:
			case UONParser.T__4:
			case UONParser.T__5:
			case UONParser.T__6:
			case UONParser.T__7:
			case UONParser.T__8:
			case UONParser.T__9:
			case UONParser.T__10:
			case UONParser.T__11:
			case UONParser.T__12:
			case UONParser.T__13:
			case UONParser.T__14:
			case UONParser.LENGTH:
			case UONParser.MASS:
			case UONParser.TEMPERATURE:
			case UONParser.TIME:
			case UONParser.NAME:
			case UONParser.UUID:
			case UONParser.DESCRIPTION:
			case UONParser.OPTIONAL:
			case UONParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 530;
				this.literal();
				}
				break;
			case UONParser.QUOTED_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 531;
				this.match(UONParser.QUOTED_STRING);
				}
				break;
			case UONParser.UNQUOTED_STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 532;
				this.match(UONParser.UNQUOTED_STRING);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, UONParser.RULE_literal);
		try {
			this.state = 546;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.LENGTH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 535;
				this.match(UONParser.LENGTH);
				}
				break;
			case UONParser.MASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 536;
				this.match(UONParser.MASS);
				}
				break;
			case UONParser.TEMPERATURE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 537;
				this.match(UONParser.TEMPERATURE);
				}
				break;
			case UONParser.TIME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 538;
				this.match(UONParser.TIME);
				}
				break;
			case UONParser.NAME:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 539;
				this.match(UONParser.NAME);
				}
				break;
			case UONParser.UUID:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 540;
				this.match(UONParser.UUID);
				}
				break;
			case UONParser.DESCRIPTION:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 541;
				this.match(UONParser.DESCRIPTION);
				}
				break;
			case UONParser.OPTIONAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 542;
				this.match(UONParser.OPTIONAL);
				}
				break;
			case UONParser.T__9:
			case UONParser.T__10:
			case UONParser.T__11:
			case UONParser.T__12:
			case UONParser.T__13:
			case UONParser.T__14:
			case UONParser.NUMBER:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 543;
				this.number();
				}
				break;
			case UONParser.T__2:
			case UONParser.T__3:
			case UONParser.T__4:
			case UONParser.T__5:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 544;
				this.boolean();
				}
				break;
			case UONParser.T__6:
			case UONParser.T__7:
			case UONParser.T__8:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 545;
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, UONParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case UONParser.T__9:
			case UONParser.T__10:
			case UONParser.T__11:
			case UONParser.T__12:
			case UONParser.T__13:
			case UONParser.T__14:
				{
				this.state = 548;
				this.numeric_literal();
				}
				break;
			case UONParser.NUMBER:
				{
				this.state = 549;
				this.match(UONParser.NUMBER);
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
	public numeric_literal(): Numeric_literalContext {
		let _localctx: Numeric_literalContext = new Numeric_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, UONParser.RULE_numeric_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__9) | (1 << UONParser.T__10) | (1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u022D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x03\x02\x07\x02\x96\n\x02\f\x02\x0E" +
		"\x02\x99\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\xA0\n\x03" +
		"\x03\x04\x03\x04\x05\x04\xA4\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x05\x06\xAC\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\xB2\n\x06\f\x06\x0E\x06\xB5\v\x06\x05\x06\xB7\n\x06\x03\x06\x03\x06\x03" +
		"\x07\x05\x07\xBC\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xC2\n\x07" +
		"\f\x07\x0E\x07\xC5\v\x07\x05\x07\xC7\n\x07\x03\x07\x03\x07\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD3\n\t\x03\n\x03\n\x05\n\xD7" +
		"\n\n\x03\v\x03\v\x03\v\x05\v\xDC\n\v\x03\f\x03\f\x05\f\xE0\n\f\x03\r\x05" +
		"\r\xE3\n\r\x03\r\x06\r\xE6\n\r\r\r\x0E\r\xE7\x03\x0E\x05\x0E\xEB\n\x0E" +
		"\x03\x0E\x06\x0E\xEE\n\x0E\r\x0E\x0E\x0E\xEF\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x06\x11\xFC\n\x11" +
		"\r\x11\x0E\x11\xFD\x03\x11\x03\x11\x03\x11\x05\x11\u0103\n\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x07\x13\u010F\n\x13\f\x13\x0E\x13\u0112\v\x13\x05\x13\u0114\n\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x05\x14\u011A\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x07\x17\u0128\n\x17\f\x17\x0E\x17\u012B\v\x17\x05\x17\u012D\n\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0134\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u013C\n\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u0142\n\x1B\f\x1B\x0E\x1B\u0145\v\x1B\x05\x1B\u0147" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0155\n\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u0159\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0160" +
		"\n\x1F\f\x1F\x0E\x1F\u0163\v\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03" +
		"!\x07!\u016D\n!\f!\x0E!\u0170\v!\x05!\u0172\n!\x03!\x03!\x03\"\x03\"\x03" +
		"\"\x05\"\u0179\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03" +
		"%\x03%\x05%\u0187\n%\x03&\x03&\x05&\u018B\n&\x03\'\x03\'\x03\'\x03\'\x07" +
		"\'\u0191\n\'\f\'\x0E\'\u0194\v\'\x05\'\u0196\n\'\x03\'\x03\'\x03(\x03" +
		"(\x05(\u019C\n(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03" +
		",\x03,\x03-\x03-\x05-\u01AC\n-\x03.\x03.\x03.\x03.\x07.\u01B2\n.\f.\x0E" +
		".\u01B5\v.\x05.\u01B7\n.\x03.\x03.\x03/\x03/\x03/\x05/\u01BE\n/\x030\x03" +
		"0\x030\x030\x031\x031\x031\x031\x032\x032\x033\x033\x033\x033\x034\x03" +
		"4\x035\x035\x035\x035\x055\u01D4\n5\x036\x036\x056\u01D8\n6\x037\x037" +
		"\x057\u01DC\n7\x038\x038\x058\u01E0\n8\x038\x038\x058\u01E4\n8\x039\x03" +
		"9\x059\u01E8\n9\x059\u01EA\n9\x039\x039\x03:\x05:\u01EF\n:\x03:\x03:\x03" +
		";\x05;\u01F4\n;\x03;\x03;\x03<\x03<\x03<\x03<\x05<\u01FC\n<\x03=\x03=" +
		"\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x05B\u020A\nB\x03C" +
		"\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03G\x05G\u0218\nG" +
		"\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0225\nH" +
		"\x03I\x03I\x05I\u0229\nI\x03J\x03J\x03J\x02\x02\x02K\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x02\x0E" +
		"\x03\x02HI\x05\x02!!%%))\x03\x02/2\x03\x02\x12\x13\x03\x02\x14\x15\x03" +
		"\x02\x16\x17\x04\x02\x18\x18\x1A\x1A\x03\x02!,\x03\x02\x05\x06\x03\x02" +
		"\x07\b\x03\x02\t\v\x03\x02\f\x11\x02\u0236\x02\x97\x03\x02\x02\x02\x04" +
		"\x9F\x03\x02\x02\x02\x06\xA3\x03\x02\x02\x02\b\xA5\x03\x02\x02\x02\n\xAB" +
		"\x03\x02\x02\x02\f\xBB\x03\x02\x02\x02\x0E\xCA\x03\x02\x02\x02\x10\xD2" +
		"\x03\x02\x02\x02\x12\xD4\x03\x02\x02\x02\x14\xD8\x03\x02\x02\x02\x16\xDF" +
		"\x03\x02\x02\x02\x18\xE2\x03\x02\x02\x02\x1A\xEA\x03\x02\x02\x02\x1C\xF1" +
		"\x03\x02\x02\x02\x1E\xF4\x03\x02\x02\x02 \u0102\x03\x02\x02\x02\"\u0104" +
		"\x03\x02\x02\x02$\u010A\x03\x02\x02\x02&\u0119\x03\x02\x02\x02(\u011B" +
		"\x03\x02\x02\x02*\u011F\x03\x02\x02\x02,\u0123\x03\x02\x02\x02.\u0133" +
		"\x03\x02\x02\x020\u0135\x03\x02\x02\x022\u013B\x03\x02\x02\x024\u013D" +
		"\x03\x02\x02\x026\u014A\x03\x02\x02\x028\u014C\x03\x02\x02\x02:\u0150" +
		"\x03\x02\x02\x02<\u015C\x03\x02\x02\x02>\u0164\x03\x02\x02\x02@\u0168" +
		"\x03\x02\x02\x02B\u0178\x03\x02\x02\x02D\u017A\x03\x02\x02\x02F\u017E" +
		"\x03\x02\x02\x02H\u0186\x03\x02\x02\x02J\u0188\x03\x02\x02\x02L\u018C" +
		"\x03\x02\x02\x02N\u019B\x03\x02\x02\x02P\u019D\x03\x02\x02\x02R\u01A1" +
		"\x03\x02\x02\x02T\u01A5\x03\x02\x02\x02V\u01A7\x03\x02\x02\x02X\u01A9" +
		"\x03\x02\x02\x02Z\u01AD\x03\x02\x02\x02\\\u01BD\x03\x02\x02\x02^\u01BF" +
		"\x03\x02\x02\x02`\u01C3\x03\x02\x02\x02b\u01C7\x03\x02\x02\x02d\u01C9" +
		"\x03\x02\x02\x02f\u01CD\x03\x02\x02\x02h\u01D3\x03\x02\x02\x02j\u01D5" +
		"\x03\x02\x02\x02l\u01DB\x03\x02\x02\x02n\u01DD\x03\x02\x02\x02p\u01E9" +
		"\x03\x02\x02\x02r\u01EE\x03\x02\x02\x02t\u01F3\x03\x02\x02\x02v\u01FB" +
		"\x03\x02\x02\x02x\u01FD\x03\x02\x02\x02z\u01FF\x03\x02\x02\x02|\u0201" +
		"\x03\x02\x02\x02~\u0203\x03\x02\x02\x02\x80\u0205\x03\x02\x02\x02\x82" +
		"\u0209\x03\x02\x02\x02\x84\u020B\x03\x02\x02\x02\x86\u020D\x03\x02\x02" +
		"\x02\x88\u020F\x03\x02\x02\x02\x8A\u0211\x03\x02\x02\x02\x8C\u0217\x03" +
		"\x02\x02\x02\x8E\u0224\x03\x02\x02\x02\x90\u0228\x03\x02\x02\x02\x92\u022A" +
		"\x03\x02\x02\x02\x94\x96\x07>\x02\x02\x95\x94\x03\x02\x02\x02\x96\x99" +
		"\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A" +
		"\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9B\x05\x04\x03\x02\x9B\x03" +
		"\x03\x02\x02\x02\x9C\xA0\x05\x06\x04\x02\x9D\xA0\x05\x16\f\x02\x9E\xA0" +
		"\x05:\x1E\x02\x9F\x9C\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\x9E" +
		"\x03\x02\x02\x02\xA0\x05\x03\x02\x02\x02\xA1\xA4\x05\n\x06\x02\xA2\xA4" +
		"\x05\f\x07\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4\x07" +
		"\x03\x02\x02\x02\xA5\xA6\x07>\x02\x02\xA6\xA7\x07L\x02\x02\xA7\xA8\x05" +
		"\x16\f\x02\xA8\xA9\x07M\x02\x02\xA9\t\x03\x02\x02\x02\xAA\xAC\t\x02\x02" +
		"\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD\xB6\x07B\x02\x02\xAE\xB3\x05\x14\v\x02\xAF\xB0\x07F\x02\x02\xB0" +
		"\xB2\x05\x14\v\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3" +
		"\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5" +
		"\xB3\x03\x02\x02\x02\xB6\xAE\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\xB8\x03\x02\x02\x02\xB8\xB9\x07C\x02\x02\xB9\v\x03\x02\x02\x02\xBA\xBC" +
		"\x07J\x02\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\xC6\x07D\x02\x02\xBE\xC3\x05\x10\t\x02\xBF\xC0\x07" +
		"F\x02\x02\xC0\xC2\x05\x10\t\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC5\x03\x02" +
		"\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x03\x02" +
		"\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xBE\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x07E\x02\x02\xC9\r\x03\x02\x02" +
		"\x02\xCA\xCB\x05\x8AF\x02\xCB\xCC\x05\n\x06\x02\xCC\x0F\x03\x02\x02\x02" +
		"\xCD\xD3\x05\n\x06\x02\xCE\xD3\x05\f\x07\x02\xCF\xD3\x05h5\x02\xD0\xD3" +
		"\x05\x0E\b\x02\xD1\xD3\x05\x88E\x02\xD2\xCD\x03\x02\x02\x02\xD2\xCE\x03" +
		"\x02\x02\x02\xD2\xCF\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD1\x03" +
		"\x02\x02\x02\xD3\x11\x03\x02\x02\x02\xD4\xD6\x05\x8CG\x02\xD5\xD7\x05" +
		"$\x13\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\x13\x03" +
		"\x02\x02\x02\xD8\xD9\x05\x12\n\x02\xD9\xDB\x07G\x02\x02\xDA\xDC\x05\x10" +
		"\t\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x15\x03\x02" +
		"\x02\x02\xDD\xE0\x05\x18\r\x02\xDE\xE0\x05\x1A\x0E\x02\xDF\xDD\x03\x02" +
		"\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\x17\x03\x02\x02\x02\xE1\xE3\x07H" +
		"\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5\x03\x02" +
		"\x02\x02\xE4\xE6\x05\x1E\x10\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02" +
		"\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\x19\x03\x02" +
		"\x02\x02\xE9\xEB\x07J\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03\x02" +
		"\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEE\x05\x1C\x0F\x02\xED\xEC\x03\x02" +
		"\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02" +
		"\x02\x02\xF0\x1B\x03\x02\x02\x02\xF1\xF2\x07?\x02\x02\xF2\xF3\x05 \x11" +
		"\x02\xF3\x1D\x03\x02\x02\x02\xF4\xF5\x05\x12\n\x02\xF5\xF6\x07G\x02\x02" +
		"\xF6\xF7\x05 \x11\x02\xF7\x1F\x03\x02\x02\x02\xF8\u0103\x03\x02\x02\x02" +
		"\xF9\xFB\x05h5\x02\xFA\xFC\x07>\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFD" +
		"\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0103" +
		"\x03\x02\x02\x02\xFF\u0103\x05\b\x05\x02\u0100\u0103\x05\"\x12\x02\u0101" +
		"\u0103\x05\x88E\x02\u0102\xF8\x03\x02\x02\x02\u0102\xF9\x03\x02\x02\x02" +
		"\u0102\xFF\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0101\x03" +
		"\x02\x02\x02\u0103!\x03\x02\x02\x02\u0104\u0105\x07>\x02\x02\u0105\u0106" +
		"\x07L\x02\x02\u0106\u0107\x05\x8AF\x02\u0107\u0108\x05\x18\r\x02\u0108" +
		"\u0109\x07M\x02\x02\u0109#\x03\x02\x02\x02\u010A\u0113\x07@\x02\x02\u010B" +
		"\u0110\x05&\x14\x02\u010C\u010D\x07F\x02\x02\u010D\u010F\x05&\x14\x02" +
		"\u010E\u010C\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03" +
		"\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112" +
		"\u0110\x03\x02\x02\x02\u0113\u010B\x03\x02\x02\x02\u0113\u0114\x03\x02" +
		"\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x07A\x02\x02\u0116%\x03" +
		"\x02\x02\x02\u0117\u011A\x05*\x16\x02\u0118\u011A\x05(\x15\x02\u0119\u0117" +
		"\x03\x02\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A\'\x03\x02\x02\x02\u011B" +
		"\u011C\x075\x02\x02\u011C\u011D\x07G\x02\x02\u011D\u011E\x05\x8CG\x02" +
		"\u011E)\x03\x02\x02\x02\u011F\u0120\x076\x02\x02\u0120\u0121\x07G\x02" +
		"\x02\u0121\u0122\x05\x82B\x02\u0122+\x03\x02\x02\x02\u0123\u012C\x07@" +
		"\x02\x02\u0124\u0129\x05.\x18\x02\u0125\u0126\x07F\x02\x02\u0126\u0128" +
		"\x05.\x18\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02" +
		"\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012D\x03" +
		"\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u0124\x03\x02\x02\x02\u012C" +
		"\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x07A\x02" +
		"\x02\u012F-\x03\x02\x02\x02\u0130\u0134\x050\x19\x02\u0131\u0134\x05(" +
		"\x15\x02\u0132\u0134\x05*\x16\x02\u0133\u0130\x03\x02\x02\x02\u0133\u0131" +
		"\x03\x02\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134/\x03\x02\x02\x02\u0135" +
		"\u0136\x077\x02\x02\u0136\u0137\x07G\x02\x02\u0137\u0138\x05\x8CG\x02" +
		"\u01381\x03\x02\x02\x02\u0139\u013C\x05.\x18\x02\u013A\u013C\x056\x1C" +
		"\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C3\x03" +
		"\x02\x02\x02\u013D\u0146\x07@\x02\x02\u013E\u0143\x052\x1A\x02\u013F\u0140" +
		"\x07F\x02\x02\u0140\u0142\x052\x1A\x02\u0141\u013F\x03\x02\x02\x02\u0142" +
		"\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02" +
		"\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146" +
		"\u013E\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u0149\x07A\x02\x02\u01495\x03\x02\x02\x02\u014A\u014B\x05" +
		"8\x1D\x02\u014B7\x03\x02\x02\x02\u014C\u014D\x07\x03\x02\x02\u014D\u014E" +
		"\x07G\x02\x02\u014E\u014F\x05\x90I\x02\u014F9\x03\x02\x02\x02\u0150\u0151" +
		"\x05\x8AF\x02\u0151\u0152\x07G\x02\x02\u0152\u0154\x07K\x02\x02\u0153" +
		"\u0155\x05@!\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02" +
		"\u0155\u0156\x03\x02\x02\x02\u0156\u0158\x07B\x02\x02\u0157\u0159\x05" +
		"<\x1F\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015B\x07C\x02\x02\u015B;\x03\x02\x02\x02" +
		"\u015C\u0161\x05> \x02\u015D\u015E\x07F\x02\x02\u015E\u0160\x05> \x02" +
		"\u015F\u015D\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03" +
		"\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162=\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0164\u0165\x05\x12\n\x02\u0165\u0166\x07G\x02" +
		"\x02\u0166\u0167\x05H%\x02\u0167?\x03\x02\x02\x02\u0168\u0171\x07@\x02" +
		"\x02\u0169\u016E\x05B\"\x02\u016A\u016B\x07F\x02\x02\u016B\u016D\x05B" +
		"\"\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E\u016C" +
		"\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02" +
		"\u0170\u016E\x03\x02\x02\x02\u0171\u0169\x03\x02\x02\x02\u0171\u0172\x03" +
		"\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x07A\x02\x02\u0174" +
		"A\x03\x02\x02\x02\u0175\u0179\x05D#\x02\u0176\u0179\x05F$\x02\u0177\u0179" +
		"\x05(\x15\x02\u0178\u0175\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02" +
		"\u0178\u0177\x03\x02\x02\x02\u0179C\x03\x02\x02\x02\u017A\u017B\x073\x02" +
		"\x02\u017B\u017C\x07G\x02\x02\u017C\u017D\x05\x8CG\x02\u017DE\x03\x02" +
		"\x02\x02\u017E\u017F\x074\x02\x02\u017F\u0180\x07G\x02\x02\u0180\u0181" +
		"\x05t;\x02\u0181G\x03\x02\x02\x02\u0182\u0187\x05J&\x02\u0183\u0187\x05" +
		"X-\x02\u0184\u0187\x05V,\x02\u0185\u0187\x05T+\x02\u0186\u0182\x03\x02" +
		"\x02\x02\u0186\u0183\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186" +
		"\u0185\x03\x02\x02\x02\u0187I\x03\x02\x02\x02\u0188\u018A\x07\x1E\x02" +
		"\x02\u0189\u018B\x05L\'\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03" +
		"\x02\x02\x02\u018BK\x03\x02\x02\x02\u018C\u0195\x07@\x02\x02\u018D\u0192" +
		"\x05N(\x02\u018E\u018F\x07F\x02\x02\u018F\u0191\x05N(\x02\u0190\u018E" +
		"\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02" +
		"\u0192\u0193\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03" +
		"\x02\x02\x02\u0195\u018D\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0197\x03\x02\x02\x02\u0197\u0198\x07A\x02\x02\u0198M\x03\x02\x02\x02" +
		"\u0199\u019C\x05P)\x02\u019A\u019C\x05R*\x02\u019B\u0199\x03\x02\x02\x02" +
		"\u019B\u019A\x03\x02\x02\x02\u019CO\x03\x02\x02\x02\u019D\u019E\x07-\x02" +
		"\x02\u019E\u019F\x07G\x02\x02\u019F\u01A0\x05\x90I\x02\u01A0Q\x03\x02" +
		"\x02\x02\u01A1\u01A2\x07.\x02\x02\u01A2\u01A3\x07G\x02\x02\u01A3\u01A4" +
		"\x05\x90I\x02\u01A4S\x03\x02\x02\x02\u01A5\u01A6\x07 \x02\x02\u01A6U\x03" +
		"\x02\x02\x02\u01A7\u01A8\x07\x1F\x02\x02\u01A8W\x03\x02\x02\x02\u01A9" +
		"\u01AB\x05b2\x02\u01AA\u01AC\x05Z.\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB" +
		"\u01AC\x03\x02\x02\x02\u01ACY\x03\x02\x02\x02\u01AD\u01B6\x07@\x02\x02" +
		"\u01AE\u01B3\x05\\/\x02\u01AF\u01B0\x07F\x02\x02\u01B0\u01B2\x05\\/\x02" +
		"\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03" +
		"\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5" +
		"\u01B3\x03\x02\x02\x02\u01B6\u01AE\x03\x02\x02\x02\u01B6\u01B7\x03\x02" +
		"\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x07A\x02\x02\u01B9[\x03" +
		"\x02\x02\x02\u01BA\u01BE\x05^0\x02\u01BB\u01BE\x05`1\x02\u01BC\u01BE\x05" +
		"d3\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC" +
		"\x03\x02\x02\x02\u01BE]\x03\x02\x02\x02\u01BF\u01C0\x07-\x02\x02\u01C0" +
		"\u01C1\x07G\x02\x02\u01C1\u01C2\x05\x90I\x02\u01C2_\x03\x02\x02\x02\u01C3" +
		"\u01C4\x07.\x02\x02\u01C4\u01C5\x07G\x02\x02\u01C5\u01C6\x05\x90I\x02" +
		"\u01C6a\x03\x02\x02\x02\u01C7\u01C8\t\x03\x02\x02\u01C8c\x03\x02\x02\x02" +
		"\u01C9\u01CA\x07\x04\x02\x02\u01CA\u01CB\x07G\x02\x02\u01CB\u01CC\x05" +
		"f4\x02\u01CCe\x03\x02\x02\x02\u01CD\u01CE\t\x04\x02\x02\u01CEg\x03\x02" +
		"\x02\x02\u01CF\u01D4\x05j6\x02\u01D0\u01D4\x05p9\x02\u01D1\u01D4\x05r" +
		":\x02\u01D2\u01D4\x05t;\x02\u01D3\u01CF\x03\x02\x02\x02\u01D3\u01D0\x03" +
		"\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4" +
		"i\x03\x02\x02\x02\u01D5\u01D7\x05l7\x02\u01D6\u01D8\x05v<\x02\u01D7\u01D6" +
		"\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8k\x03\x02\x02\x02\u01D9" +
		"\u01DC\x05n8\x02\u01DA\u01DC\x05\x90I\x02\u01DB\u01D9\x03\x02\x02\x02" +
		"\u01DB\u01DA\x03\x02\x02\x02\u01DCm\x03\x02\x02\x02\u01DD\u01DF\x05\x80" +
		"A\x02\u01DE\u01E0\x054\x1B\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0" +
		"\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01E4\x05n8\x02\u01E2" +
		"\u01E4\x05\x90I\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02" +
		"\x02\u01E4o\x03\x02\x02\x02\u01E5\u01E7\x07\x1E\x02\x02\u01E6\u01E8\x05" +
		",\x17\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
		"\u01EA\x03\x02\x02\x02\u01E9\u01E5\x03\x02\x02\x02\u01E9\u01EA\x03\x02" +
		"\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EC\x05\x8CG\x02\u01ECq\x03" +
		"\x02\x02\x02\u01ED\u01EF\x07\x1F\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE" +
		"\u01EF\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x05\x82" +
		"B\x02\u01F1s\x03\x02\x02\x02\u01F2\u01F4\x07 \x02\x02\u01F3\u01F2\x03" +
		"\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5" +
		"\u01F6\x05\x8CG\x02\u01F6u\x03\x02\x02\x02\u01F7\u01FC\x05x=\x02\u01F8" +
		"\u01FC\x05z>\x02\u01F9\u01FC\x05|?\x02\u01FA\u01FC\x05~@\x02\u01FB\u01F7" +
		"\x03\x02\x02\x02\u01FB\u01F8\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02" +
		"\u01FB\u01FA\x03\x02\x02\x02\u01FCw\x03\x02\x02\x02\u01FD\u01FE\t\x05" +
		"\x02\x02\u01FEy\x03\x02\x02\x02\u01FF\u0200\t\x06\x02\x02\u0200{\x03\x02" +
		"\x02\x02\u0201\u0202\t\x07\x02\x02\u0202}\x03\x02\x02\x02\u0203\u0204" +
		"\t\b\x02\x02\u0204\x7F\x03\x02\x02\x02\u0205\u0206\t\t\x02\x02\u0206\x81" +
		"\x03\x02\x02\x02\u0207\u020A\x05\x84C\x02\u0208\u020A\x05\x86D\x02\u0209" +
		"\u0207\x03\x02\x02\x02\u0209\u0208\x03\x02\x02\x02\u020A\x83\x03\x02\x02" +
		"\x02\u020B\u020C\t\n\x02\x02\u020C\x85\x03\x02\x02\x02\u020D\u020E\t\v" +
		"\x02\x02\u020E\x87\x03\x02\x02\x02\u020F\u0210\t\f\x02\x02\u0210\x89\x03" +
		"\x02\x02\x02\u0211\u0212\x07\x1D\x02\x02\u0212\u0213\x07:\x02\x02\u0213" +
		"\x8B\x03\x02\x02\x02\u0214\u0218\x05\x8EH\x02\u0215\u0218\x078\x02\x02" +
		"\u0216\u0218\x07:\x02\x02\u0217\u0214\x03\x02\x02\x02\u0217\u0215\x03" +
		"\x02\x02\x02\u0217\u0216\x03\x02\x02\x02\u0218\x8D\x03\x02\x02\x02\u0219" +
		"\u0225\x07/\x02\x02\u021A\u0225\x070\x02\x02\u021B\u0225\x071\x02\x02" +
		"\u021C\u0225\x072\x02\x02\u021D\u0225\x073\x02\x02\u021E\u0225\x074\x02" +
		"\x02\u021F\u0225\x075\x02\x02\u0220\u0225\x076\x02\x02\u0221\u0225\x05" +
		"\x90I\x02\u0222\u0225\x05\x82B\x02\u0223\u0225\x05\x88E\x02\u0224\u0219" +
		"\x03\x02\x02\x02\u0224\u021A\x03\x02\x02\x02\u0224\u021B\x03\x02\x02\x02" +
		"\u0224\u021C\x03\x02\x02\x02\u0224\u021D\x03\x02\x02\x02\u0224\u021E\x03" +
		"\x02\x02\x02\u0224\u021F\x03\x02\x02\x02\u0224\u0220\x03\x02\x02\x02\u0224" +
		"\u0221\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0223\x03\x02" +
		"\x02\x02\u0225\x8F\x03\x02\x02\x02\u0226\u0229\x05\x92J\x02\u0227\u0229" +
		"\x079\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02" +
		"\u0229\x91\x03\x02\x02\x02\u022A\u022B\t\r\x02\x02\u022B\x93\x03\x02\x02" +
		"\x02;\x97\x9F\xA3\xAB\xB3\xB6\xBB\xC3\xC6\xD2\xD6\xDB\xDF\xE2\xE7\xEA" +
		"\xEF\xFD\u0102\u0110\u0113\u0119\u0129\u012C\u0133\u013B\u0143\u0146\u0154" +
		"\u0158\u0161\u016E\u0171\u0178\u0186\u018A\u0192\u0195\u019B\u01AB\u01B3" +
		"\u01B6\u01BD\u01D3\u01D7\u01DB\u01DF\u01E3\u01E7\u01E9\u01EE\u01F3\u01FB" +
		"\u0209\u0217\u0224\u0228";
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
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.NEWLINE);
		} else {
			return this.getToken(UONParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_uon; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterUon) {
			listener.enterUon(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitUon) {
			listener.exitUon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitUon) {
			return visitor.visitUon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterRoot_value) {
			listener.enterRoot_value(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitRoot_value) {
			listener.exitRoot_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitRoot_value) {
			return visitor.visitRoot_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterJson_collection) {
			listener.enterJson_collection(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitJson_collection) {
			listener.exitJson_collection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitJson_collection) {
			return visitor.visitJson_collection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yaml_collection_nestedContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(UONParser.NEWLINE, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(UONParser.INDENT, 0); }
	public yaml_collection(): Yaml_collectionContext | undefined {
		return this.tryGetRuleContext(0, Yaml_collectionContext);
	}
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(UONParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_yaml_collection_nested; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterYaml_collection_nested) {
			listener.enterYaml_collection_nested(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitYaml_collection_nested) {
			listener.exitYaml_collection_nested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitYaml_collection_nested) {
			return visitor.visitYaml_collection_nested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Json_mapContext extends ParserRuleContext {
	public OPEN_C_BRA(): TerminalNode { return this.getToken(UONParser.OPEN_C_BRA, 0); }
	public CLOSE_C_BRA(): TerminalNode { return this.getToken(UONParser.CLOSE_C_BRA, 0); }
	public json_pair(): Json_pairContext[];
	public json_pair(i: number): Json_pairContext;
	public json_pair(i?: number): Json_pairContext | Json_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Json_pairContext);
		} else {
			return this.getRuleContext(i, Json_pairContext);
		}
	}
	public MAPPING_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.MAPPING_TYPE, 0); }
	public ORDERED_MAPPING_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.ORDERED_MAPPING_TYPE, 0); }
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterJson_map) {
			listener.enterJson_map(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitJson_map) {
			listener.exitJson_map(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitJson_map) {
			return visitor.visitJson_map(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterJson_seq) {
			listener.enterJson_seq(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitJson_seq) {
			listener.exitJson_seq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitJson_seq) {
			return visitor.visitJson_seq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterJson_user_type) {
			listener.enterJson_user_type(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitJson_user_type) {
			listener.exitJson_user_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitJson_user_type) {
			return visitor.visitJson_user_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterJson_value) {
			listener.enterJson_value(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitJson_value) {
			listener.exitJson_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitJson_value) {
			return visitor.visitJson_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterPair_key) {
			listener.enterPair_key(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitPair_key) {
			listener.exitPair_key(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitPair_key) {
			return visitor.visitPair_key(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Json_pairContext extends ParserRuleContext {
	public pair_key(): Pair_keyContext {
		return this.getRuleContext(0, Pair_keyContext);
	}
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public json_value(): Json_valueContext | undefined {
		return this.tryGetRuleContext(0, Json_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_json_pair; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterJson_pair) {
			listener.enterJson_pair(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitJson_pair) {
			listener.exitJson_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitJson_pair) {
			return visitor.visitJson_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterYaml_collection) {
			listener.enterYaml_collection(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitYaml_collection) {
			listener.exitYaml_collection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitYaml_collection) {
			return visitor.visitYaml_collection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterYaml_map) {
			listener.enterYaml_map(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitYaml_map) {
			listener.exitYaml_map(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitYaml_map) {
			return visitor.visitYaml_map(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterYaml_seq) {
			listener.enterYaml_seq(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitYaml_seq) {
			listener.exitYaml_seq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitYaml_seq) {
			return visitor.visitYaml_seq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seq_itemContext extends ParserRuleContext {
	public MINUS(): TerminalNode { return this.getToken(UONParser.MINUS, 0); }
	public yaml_value(): Yaml_valueContext {
		return this.getRuleContext(0, Yaml_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_seq_item; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterSeq_item) {
			listener.enterSeq_item(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitSeq_item) {
			listener.exitSeq_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitSeq_item) {
			return visitor.visitSeq_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yaml_valueContext extends ParserRuleContext {
	public scalar(): ScalarContext | undefined {
		return this.tryGetRuleContext(0, ScalarContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(UONParser.NEWLINE);
		} else {
			return this.getToken(UONParser.NEWLINE, i);
		}
	}
	public yaml_collection_nested(): Yaml_collection_nestedContext | undefined {
		return this.tryGetRuleContext(0, Yaml_collection_nestedContext);
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterYaml_value) {
			listener.enterYaml_value(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitYaml_value) {
			listener.exitYaml_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitYaml_value) {
			return visitor.visitYaml_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yaml_user_typeContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(UONParser.NEWLINE, 0); }
	public INDENT(): TerminalNode { return this.getToken(UONParser.INDENT, 0); }
	public custom_type(): Custom_typeContext {
		return this.getRuleContext(0, Custom_typeContext);
	}
	public yaml_map(): Yaml_mapContext {
		return this.getRuleContext(0, Yaml_mapContext);
	}
	public DEDENT(): TerminalNode { return this.getToken(UONParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_yaml_user_type; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterYaml_user_type) {
			listener.enterYaml_user_type(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitYaml_user_type) {
			listener.exitYaml_user_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitYaml_user_type) {
			return visitor.visitYaml_user_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterPresentation_properties) {
			listener.enterPresentation_properties(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitPresentation_properties) {
			listener.exitPresentation_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitPresentation_properties) {
			return visitor.visitPresentation_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterPresentation_property) {
			listener.enterPresentation_property(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitPresentation_property) {
			listener.exitPresentation_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitPresentation_property) {
			return visitor.visitPresentation_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionContext extends ParserRuleContext {
	public DESCRIPTION(): TerminalNode { return this.getToken(UONParser.DESCRIPTION, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_description; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterDescription) {
			listener.enterDescription(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitDescription) {
			listener.exitDescription(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitDescription) {
			return visitor.visitDescription(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalContext extends ParserRuleContext {
	public OPTIONAL(): TerminalNode { return this.getToken(UONParser.OPTIONAL, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public boolean(): BooleanContext {
		return this.getRuleContext(0, BooleanContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_optional; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterOptional) {
			listener.enterOptional(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitOptional) {
			listener.exitOptional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitOptional) {
			return visitor.visitOptional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Types_propertiesContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(UONParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(UONParser.CLOSE_PAR, 0); }
	public types_propertie(): Types_propertieContext[];
	public types_propertie(i: number): Types_propertieContext;
	public types_propertie(i?: number): Types_propertieContext | Types_propertieContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Types_propertieContext);
		} else {
			return this.getRuleContext(i, Types_propertieContext);
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
	public get ruleIndex(): number { return UONParser.RULE_types_properties; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterTypes_properties) {
			listener.enterTypes_properties(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitTypes_properties) {
			listener.exitTypes_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitTypes_properties) {
			return visitor.visitTypes_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Types_propertieContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public optional(): OptionalContext | undefined {
		return this.tryGetRuleContext(0, OptionalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_types_propertie; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterTypes_propertie) {
			listener.enterTypes_propertie(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitTypes_propertie) {
			listener.exitTypes_propertie(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitTypes_propertie) {
			return visitor.visitTypes_propertie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(UONParser.COMMENT, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_comment; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_presentationContext extends ParserRuleContext {
	public types_propertie(): Types_propertieContext | undefined {
		return this.tryGetRuleContext(0, Types_propertieContext);
	}
	public number_presentation_propertie(): Number_presentation_propertieContext | undefined {
		return this.tryGetRuleContext(0, Number_presentation_propertieContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_presentation; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_presentation) {
			listener.enterNumber_presentation(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_presentation) {
			listener.exitNumber_presentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_presentation) {
			return visitor.visitNumber_presentation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_presentation_propertiesContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode { return this.getToken(UONParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(UONParser.CLOSE_PAR, 0); }
	public number_presentation(): Number_presentationContext[];
	public number_presentation(i: number): Number_presentationContext;
	public number_presentation(i?: number): Number_presentationContext | Number_presentationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Number_presentationContext);
		} else {
			return this.getRuleContext(i, Number_presentationContext);
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
	public get ruleIndex(): number { return UONParser.RULE_number_presentation_properties; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_presentation_properties) {
			listener.enterNumber_presentation_properties(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_presentation_properties) {
			listener.exitNumber_presentation_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_presentation_properties) {
			return visitor.visitNumber_presentation_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_presentation_propertieContext extends ParserRuleContext {
	public unit(): UnitContext {
		return this.getRuleContext(0, UnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_presentation_propertie; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_presentation_propertie) {
			listener.enterNumber_presentation_propertie(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_presentation_propertie) {
			listener.exitNumber_presentation_propertie(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_presentation_propertie) {
			return visitor.visitNumber_presentation_propertie(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_unit; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterSchema) {
			listener.enterSchema(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitSchema) {
			listener.exitSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitSchema) {
			return visitor.visitSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitAttributes) {
			return visitor.visitAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterSchema_presentations) {
			listener.enterSchema_presentations(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitSchema_presentations) {
			listener.exitSchema_presentations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitSchema_presentations) {
			return visitor.visitSchema_presentations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterSchema_presentation) {
			listener.enterSchema_presentation(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitSchema_presentation) {
			listener.exitSchema_presentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitSchema_presentation) {
			return visitor.visitSchema_presentation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Schema_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(UONParser.NAME, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_schema_name; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterSchema_name) {
			listener.enterSchema_name(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitSchema_name) {
			listener.exitSchema_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitSchema_name) {
			return visitor.visitSchema_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Schema_uuidContext extends ParserRuleContext {
	public UUID(): TerminalNode { return this.getToken(UONParser.UUID, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_schema_uuid; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterSchema_uuid) {
			listener.enterSchema_uuid(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitSchema_uuid) {
			listener.exitSchema_uuid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitSchema_uuid) {
			return visitor.visitSchema_uuid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterValidation_properties) {
			listener.enterValidation_properties(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitValidation_properties) {
			listener.exitValidation_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitValidation_properties) {
			return visitor.visitValidation_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterString_validation) {
			listener.enterString_validation(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitString_validation) {
			listener.exitString_validation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitString_validation) {
			return visitor.visitString_validation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterString_properties) {
			listener.enterString_properties(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitString_properties) {
			listener.exitString_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitString_properties) {
			return visitor.visitString_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterString_property) {
			listener.enterString_property(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitString_property) {
			listener.exitString_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitString_property) {
			return visitor.visitString_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_maxContext extends ParserRuleContext {
	public MAX(): TerminalNode { return this.getToken(UONParser.MAX, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_max; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterString_max) {
			listener.enterString_max(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitString_max) {
			listener.exitString_max(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitString_max) {
			return visitor.visitString_max(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_minContext extends ParserRuleContext {
	public MIN(): TerminalNode { return this.getToken(UONParser.MIN, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_min; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterString_min) {
			listener.enterString_min(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitString_min) {
			listener.exitString_min(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitString_min) {
			return visitor.visitString_min(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Url_validationContext extends ParserRuleContext {
	public URL_TYPE(): TerminalNode { return this.getToken(UONParser.URL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_url_validation; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterUrl_validation) {
			listener.enterUrl_validation(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitUrl_validation) {
			listener.exitUrl_validation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitUrl_validation) {
			return visitor.visitUrl_validation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_validationContext extends ParserRuleContext {
	public BOOL_TYPE(): TerminalNode { return this.getToken(UONParser.BOOL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_boolean_validation; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterBoolean_validation) {
			listener.enterBoolean_validation(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitBoolean_validation) {
			listener.exitBoolean_validation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitBoolean_validation) {
			return visitor.visitBoolean_validation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_validation) {
			listener.enterNumber_validation(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_validation) {
			listener.exitNumber_validation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_validation) {
			return visitor.visitNumber_validation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_properties) {
			listener.enterNumber_properties(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_properties) {
			listener.exitNumber_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_properties) {
			return visitor.visitNumber_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_property) {
			listener.enterNumber_property(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_property) {
			listener.exitNumber_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_property) {
			return visitor.visitNumber_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_maxContext extends ParserRuleContext {
	public MAX(): TerminalNode { return this.getToken(UONParser.MAX, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_max; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_max) {
			listener.enterNumber_max(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_max) {
			listener.exitNumber_max(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_max) {
			return visitor.visitNumber_max(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Number_minContext extends ParserRuleContext {
	public MIN(): TerminalNode { return this.getToken(UONParser.MIN, 0); }
	public COLON(): TerminalNode { return this.getToken(UONParser.COLON, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number_min; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_min) {
			listener.enterNumber_min(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_min) {
			listener.exitNumber_min(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_min) {
			return visitor.visitNumber_min(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_validation_type) {
			listener.enterNumber_validation_type(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_validation_type) {
			listener.exitNumber_validation_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_validation_type) {
			return visitor.visitNumber_validation_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterQuantity_validation) {
			listener.enterQuantity_validation(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitQuantity_validation) {
			listener.exitQuantity_validation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitQuantity_validation) {
			return visitor.visitQuantity_validation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quantity_validation_typesContext extends ParserRuleContext {
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(UONParser.LENGTH, 0); }
	public MASS(): TerminalNode | undefined { return this.tryGetToken(UONParser.MASS, 0); }
	public TEMPERATURE(): TerminalNode | undefined { return this.tryGetToken(UONParser.TEMPERATURE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(UONParser.TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_quantity_validation_types; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterQuantity_validation_types) {
			listener.enterQuantity_validation_types(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitQuantity_validation_types) {
			listener.exitQuantity_validation_types(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitQuantity_validation_types) {
			return visitor.visitQuantity_validation_types(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterScalar) {
			listener.enterScalar(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitScalar) {
			listener.exitScalar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitScalar) {
			return visitor.visitScalar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterQuantity_scalar) {
			listener.enterQuantity_scalar(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitQuantity_scalar) {
			listener.exitQuantity_scalar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitQuantity_scalar) {
			return visitor.visitQuantity_scalar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumeric_scalar) {
			listener.enterNumeric_scalar(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumeric_scalar) {
			listener.exitNumeric_scalar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumeric_scalar) {
			return visitor.visitNumeric_scalar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Coercible_numeric_scalarContext extends ParserRuleContext {
	public number_type(): Number_typeContext | undefined {
		return this.tryGetRuleContext(0, Number_typeContext);
	}
	public coercible_numeric_scalar(): Coercible_numeric_scalarContext | undefined {
		return this.tryGetRuleContext(0, Coercible_numeric_scalarContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public number_presentation_properties(): Number_presentation_propertiesContext | undefined {
		return this.tryGetRuleContext(0, Number_presentation_propertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_coercible_numeric_scalar; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterCoercible_numeric_scalar) {
			listener.enterCoercible_numeric_scalar(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitCoercible_numeric_scalar) {
			listener.exitCoercible_numeric_scalar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitCoercible_numeric_scalar) {
			return visitor.visitCoercible_numeric_scalar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_scalarContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public STR_TYPE(): TerminalNode | undefined { return this.tryGetToken(UONParser.STR_TYPE, 0); }
	public types_properties(): Types_propertiesContext | undefined {
		return this.tryGetRuleContext(0, Types_propertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string_scalar; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterString_scalar) {
			listener.enterString_scalar(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitString_scalar) {
			listener.exitString_scalar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitString_scalar) {
			return visitor.visitString_scalar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterBoolean_scalar) {
			listener.enterBoolean_scalar(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitBoolean_scalar) {
			listener.exitBoolean_scalar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitBoolean_scalar) {
			return visitor.visitBoolean_scalar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitUrl) {
			return visitor.visitUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterQuantity) {
			listener.enterQuantity(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitQuantity) {
			listener.exitQuantity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitQuantity) {
			return visitor.visitQuantity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthContext extends ParserRuleContext {
	public METERS(): TerminalNode | undefined { return this.tryGetToken(UONParser.METERS, 0); }
	public KILOMETERS(): TerminalNode | undefined { return this.tryGetToken(UONParser.KILOMETERS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_length; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterLength) {
			listener.enterLength(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitLength) {
			listener.exitLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitLength) {
			return visitor.visitLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MassContext extends ParserRuleContext {
	public GRAMS(): TerminalNode | undefined { return this.tryGetToken(UONParser.GRAMS, 0); }
	public KILOGRAMS(): TerminalNode | undefined { return this.tryGetToken(UONParser.KILOGRAMS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_mass; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterMass) {
			listener.enterMass(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitMass) {
			listener.exitMass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitMass) {
			return visitor.visitMass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(UONParser.SECOND, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(UONParser.MINUTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_time; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitTime) {
			return visitor.visitTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemperatureContext extends ParserRuleContext {
	public CELSIUS(): TerminalNode | undefined { return this.tryGetToken(UONParser.CELSIUS, 0); }
	public KELVIN(): TerminalNode | undefined { return this.tryGetToken(UONParser.KELVIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_temperature; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterTemperature) {
			listener.enterTemperature(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitTemperature) {
			listener.exitTemperature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitTemperature) {
			return visitor.visitTemperature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber_type) {
			listener.enterNumber_type(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber_type) {
			listener.exitNumber_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber_type) {
			return visitor.visitNumber_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterBoolean) {
			listener.enterBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitBoolean) {
			listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_true; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterTrue) {
			listener.enterTrue(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitTrue) {
			listener.exitTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitTrue) {
			return visitor.visitTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FalseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_false; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterFalse) {
			listener.enterFalse(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitFalse) {
			listener.exitFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitFalse) {
			return visitor.visitFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_null; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNull) {
			listener.enterNull(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNull) {
			listener.exitNull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNull) {
			return visitor.visitNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Custom_typeContext extends ParserRuleContext {
	public CT(): TerminalNode { return this.getToken(UONParser.CT, 0); }
	public UNQUOTED_STRING(): TerminalNode { return this.getToken(UONParser.UNQUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_custom_type; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterCustom_type) {
			listener.enterCustom_type(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitCustom_type) {
			listener.exitCustom_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitCustom_type) {
			return visitor.visitCustom_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public QUOTED_STRING(): TerminalNode | undefined { return this.tryGetToken(UONParser.QUOTED_STRING, 0); }
	public UNQUOTED_STRING(): TerminalNode | undefined { return this.tryGetToken(UONParser.UNQUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_string; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(UONParser.LENGTH, 0); }
	public MASS(): TerminalNode | undefined { return this.tryGetToken(UONParser.MASS, 0); }
	public TEMPERATURE(): TerminalNode | undefined { return this.tryGetToken(UONParser.TEMPERATURE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(UONParser.TIME, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(UONParser.NAME, 0); }
	public UUID(): TerminalNode | undefined { return this.tryGetToken(UONParser.UUID, 0); }
	public DESCRIPTION(): TerminalNode | undefined { return this.tryGetToken(UONParser.DESCRIPTION, 0); }
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(UONParser.OPTIONAL, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public boolean(): BooleanContext | undefined {
		return this.tryGetRuleContext(0, BooleanContext);
	}
	public null(): NullContext | undefined {
		return this.tryGetRuleContext(0, NullContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_literal; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(UONParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_number; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Numeric_literalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return UONParser.RULE_numeric_literal; }
	// @Override
	public enterRule(listener: UONListener): void {
		if (listener.enterNumeric_literal) {
			listener.enterNumeric_literal(this);
		}
	}
	// @Override
	public exitRule(listener: UONListener): void {
		if (listener.exitNumeric_literal) {
			listener.exitNumeric_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UONVisitor<Result>): Result {
		if (visitor.visitNumeric_literal) {
			return visitor.visitNumeric_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


