"use strict";
// Generated from UON.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.String_minContext = exports.String_maxContext = exports.String_propertyContext = exports.String_propertiesContext = exports.String_validationContext = exports.Validation_propertiesContext = exports.Schema_uuidContext = exports.Schema_nameContext = exports.Schema_presentationContext = exports.Schema_presentationsContext = exports.AttributeContext = exports.AttributesContext = exports.SchemaContext = exports.Number_typeContext = exports.Yaml_valueContext = exports.Json_valueContext = exports.Root_valueContext = exports.NumberContext = exports.TemperatureContext = exports.TimeContext = exports.MassContext = exports.LengthContext = exports.QuantityContext = exports.Coercible_numeric_scalarContext = exports.Numeric_scalarContext = exports.Quantity_scalarContext = exports.UrlContext = exports.Boolean_scalarContext = exports.String_scalarContext = exports.ScalarContext = exports.Yaml_user_typeContext = exports.Json_user_typeContext = exports.Custom_typeContext = exports.StringContext = exports.OptionalContext = exports.DescriptionContext = exports.Presentation_propertyContext = exports.Presentation_propertiesContext = exports.Json_pairContext = exports.Pair_keyContext = exports.PairContext = exports.Seq_itemContext = exports.Yaml_seqContext = exports.Yaml_mapContext = exports.Yaml_collectionContext = exports.Json_seqContext = exports.Json_mapContext = exports.Json_collectionContext = exports.UonContext = exports.UONParser = void 0;
exports.NullContext = exports.FalseContext = exports.TrueContext = exports.BooleanContext = exports.Quantity_validation_typesContext = exports.Quantity_validationContext = exports.Number_validation_typeContext = exports.Number_minContext = exports.Number_maxContext = exports.Number_propertyContext = exports.Number_propertiesContext = exports.Number_validationContext = exports.Boolean_validationContext = exports.Url_validationContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class UONParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(UONParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return UONParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "UON.g4"; }
    // @Override
    get ruleNames() { return UONParser.ruleNames; }
    // @Override
    get serializedATN() { return UONParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    uon() {
        let _localctx = new UonContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, UONParser.RULE_uon);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                this.root_value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    json_collection() {
        let _localctx = new Json_collectionContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    json_map() {
        let _localctx = new Json_mapContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, UONParser.RULE_json_map);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    json_seq() {
        let _localctx = new Json_seqContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, UONParser.RULE_json_seq);
        let _la;
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
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__10) | (1 << UONParser.T__11) | (1 << UONParser.T__12) | (1 << UONParser.T__13) | (1 << UONParser.T__14) | (1 << UONParser.T__15) | (1 << UONParser.T__16) | (1 << UONParser.CT) | (1 << UONParser.QUOTED_STRING) | (1 << UONParser.STR_TYPE) | (1 << UONParser.BOOL_TYPE) | (1 << UONParser.URL_TYPE) | (1 << UONParser.FLOAT_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (UONParser.FLOAT_128_TYPE - 32)) | (1 << (UONParser.FLOAT_64_TYPE - 32)) | (1 << (UONParser.FLOAT_32_TYPE - 32)) | (1 << (UONParser.INT_TYPE - 32)) | (1 << (UONParser.INT_128_TYPE - 32)) | (1 << (UONParser.INT_64_TYPE - 32)) | (1 << (UONParser.INT_32_TYPE - 32)) | (1 << (UONParser.UINT_TYPE - 32)) | (1 << (UONParser.UINT_128_TYPE - 32)) | (1 << (UONParser.UINT_64_TYPE - 32)) | (1 << (UONParser.UINT_32_TYPE - 32)) | (1 << (UONParser.UNQUOTED_STRING - 32)) | (1 << (UONParser.OPEN_C_BRA - 32)) | (1 << (UONParser.OPEN_S_BRA - 32)) | (1 << (UONParser.MAPPING_TYPE - 32)) | (1 << (UONParser.SEQUENCE_TYPE - 32)))) !== 0)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    yaml_collection() {
        let _localctx = new Yaml_collectionContext(this._ctx, this.state);
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
                case UONParser.SEQUENCE_TYPE:
                case UONParser.MINUS:
                case UONParser.INDENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 165;
                        this.yaml_seq();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    yaml_map() {
        let _localctx = new Yaml_mapContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, UONParser.RULE_yaml_map);
        let _la;
        try {
            let _alt;
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
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 174;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    yaml_seq() {
        let _localctx = new Yaml_seqContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, UONParser.RULE_yaml_seq);
        let _la;
        try {
            let _alt;
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
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 182;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    seq_item() {
        let _localctx = new Seq_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, UONParser.RULE_seq_item);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.INDENT) {
                    {
                        this.state = 184;
                        this.match(UONParser.INDENT);
                    }
                }
                this.state = 187;
                this.match(UONParser.MINUS);
                this.state = 188;
                this.yaml_value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pair() {
        let _localctx = new PairContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, UONParser.RULE_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 190;
                this.pair_key();
                this.state = 191;
                this.match(UONParser.COLON);
                this.state = 192;
                this.yaml_value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pair_key() {
        let _localctx = new Pair_keyContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, UONParser.RULE_pair_key);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.string();
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.OPEN_PAR) {
                    {
                        this.state = 195;
                        this.presentation_properties();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    json_pair() {
        let _localctx = new Json_pairContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, UONParser.RULE_json_pair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.pair_key();
                this.state = 199;
                this.match(UONParser.COLON);
                this.state = 200;
                this.json_value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    presentation_properties() {
        let _localctx = new Presentation_propertiesContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, UONParser.RULE_presentation_properties);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(UONParser.OPEN_PAR);
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.T__0 || _la === UONParser.T__1) {
                    {
                        this.state = 203;
                        this.presentation_property();
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === UONParser.COMMA) {
                            {
                                {
                                    this.state = 204;
                                    this.match(UONParser.COMMA);
                                    this.state = 205;
                                    this.presentation_property();
                                }
                            }
                            this.state = 210;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 213;
                this.match(UONParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    presentation_property() {
        let _localctx = new Presentation_propertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, UONParser.RULE_presentation_property);
        try {
            this.state = 217;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UONParser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 215;
                        this.optional();
                    }
                    break;
                case UONParser.T__0:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 216;
                        this.description();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    description() {
        let _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, UONParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this.match(UONParser.T__0);
                this.state = 220;
                this.match(UONParser.COLON);
                this.state = 221;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    optional() {
        let _localctx = new OptionalContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, UONParser.RULE_optional);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 223;
                this.match(UONParser.T__1);
                this.state = 224;
                this.match(UONParser.COLON);
                this.state = 225;
                this.boolean();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string() {
        let _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, UONParser.RULE_string);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                _la = this._input.LA(1);
                if (!(_la === UONParser.QUOTED_STRING || _la === UONParser.UNQUOTED_STRING)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    custom_type() {
        let _localctx = new Custom_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, UONParser.RULE_custom_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(UONParser.CT);
                this.state = 230;
                this.match(UONParser.UNQUOTED_STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    json_user_type() {
        let _localctx = new Json_user_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, UONParser.RULE_json_user_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.custom_type();
                this.state = 233;
                this.json_map();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    yaml_user_type() {
        let _localctx = new Yaml_user_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, UONParser.RULE_yaml_user_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                this.custom_type();
                this.state = 236;
                this.yaml_map();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    scalar() {
        let _localctx = new ScalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, UONParser.RULE_scalar);
        try {
            this.state = 242;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 238;
                        this.quantity_scalar();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 239;
                        this.string_scalar();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 240;
                        this.boolean_scalar();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 241;
                        this.url();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string_scalar() {
        let _localctx = new String_scalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, UONParser.RULE_string_scalar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 245;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.STR_TYPE) {
                    {
                        this.state = 244;
                        this.match(UONParser.STR_TYPE);
                    }
                }
                this.state = 247;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    boolean_scalar() {
        let _localctx = new Boolean_scalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, UONParser.RULE_boolean_scalar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.BOOL_TYPE) {
                    {
                        this.state = 249;
                        this.match(UONParser.BOOL_TYPE);
                    }
                }
                this.state = 252;
                this.boolean();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    url() {
        let _localctx = new UrlContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, UONParser.RULE_url);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.URL_TYPE) {
                    {
                        this.state = 254;
                        this.match(UONParser.URL_TYPE);
                    }
                }
                this.state = 257;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantity_scalar() {
        let _localctx = new Quantity_scalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, UONParser.RULE_quantity_scalar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.numeric_scalar();
                this.state = 261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.METERS) | (1 << UONParser.KILOMETERS) | (1 << UONParser.GRAMS) | (1 << UONParser.KILOGRAMS) | (1 << UONParser.SECOND) | (1 << UONParser.MINUTE) | (1 << UONParser.CELSIUS) | (1 << UONParser.KELVIN))) !== 0)) {
                    {
                        this.state = 260;
                        this.quantity();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    numeric_scalar() {
        let _localctx = new Numeric_scalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, UONParser.RULE_numeric_scalar);
        try {
            this.state = 265;
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
                        this.state = 263;
                        this.coercible_numeric_scalar();
                    }
                    break;
                case UONParser.UNQUOTED_STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 264;
                        this.number();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    coercible_numeric_scalar() {
        let _localctx = new Coercible_numeric_scalarContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, UONParser.RULE_coercible_numeric_scalar);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 267;
                this.number_type();
                this.state = 270;
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
                            this.state = 268;
                            this.coercible_numeric_scalar();
                        }
                        break;
                    case UONParser.UNQUOTED_STRING:
                        {
                            this.state = 269;
                            this.number();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantity() {
        let _localctx = new QuantityContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, UONParser.RULE_quantity);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UONParser.METERS:
                case UONParser.KILOMETERS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 272;
                        this.length();
                    }
                    break;
                case UONParser.GRAMS:
                case UONParser.KILOGRAMS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 273;
                        this.mass();
                    }
                    break;
                case UONParser.SECOND:
                case UONParser.MINUTE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 274;
                        this.time();
                    }
                    break;
                case UONParser.CELSIUS:
                case UONParser.KELVIN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 275;
                        this.temperature();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    length() {
        let _localctx = new LengthContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, UONParser.RULE_length);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                _la = this._input.LA(1);
                if (!(_la === UONParser.METERS || _la === UONParser.KILOMETERS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mass() {
        let _localctx = new MassContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, UONParser.RULE_mass);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 280;
                _la = this._input.LA(1);
                if (!(_la === UONParser.GRAMS || _la === UONParser.KILOGRAMS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    time() {
        let _localctx = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, UONParser.RULE_time);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                _la = this._input.LA(1);
                if (!(_la === UONParser.SECOND || _la === UONParser.MINUTE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    temperature() {
        let _localctx = new TemperatureContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, UONParser.RULE_temperature);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                _la = this._input.LA(1);
                if (!(_la === UONParser.CELSIUS || _la === UONParser.KELVIN)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number() {
        let _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, UONParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                this.match(UONParser.UNQUOTED_STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    root_value() {
        let _localctx = new Root_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, UONParser.RULE_root_value);
        try {
            this.state = 291;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 288;
                        this.json_collection();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 289;
                        this.yaml_collection();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 290;
                        this.schema();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    json_value() {
        let _localctx = new Json_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, UONParser.RULE_json_value);
        try {
            this.state = 298;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UONParser.OPEN_C_BRA:
                case UONParser.MAPPING_TYPE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 293;
                        this.json_map();
                    }
                    break;
                case UONParser.OPEN_S_BRA:
                case UONParser.SEQUENCE_TYPE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 294;
                        this.json_seq();
                    }
                    break;
                case UONParser.T__10:
                case UONParser.T__11:
                case UONParser.T__12:
                case UONParser.T__13:
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
                        this.state = 295;
                        this.scalar();
                    }
                    break;
                case UONParser.CT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 296;
                        this.json_user_type();
                    }
                    break;
                case UONParser.T__14:
                case UONParser.T__15:
                case UONParser.T__16:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 297;
                        this.null();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    yaml_value() {
        let _localctx = new Yaml_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, UONParser.RULE_yaml_value);
        try {
            this.state = 305;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 300;
                        this.yaml_map();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 301;
                        this.yaml_seq();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 302;
                        this.scalar();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 303;
                        this.yaml_user_type();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 304;
                        this.null();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number_type() {
        let _localctx = new Number_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, UONParser.RULE_number_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                _la = this._input.LA(1);
                if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (UONParser.FLOAT_TYPE - 31)) | (1 << (UONParser.FLOAT_128_TYPE - 31)) | (1 << (UONParser.FLOAT_64_TYPE - 31)) | (1 << (UONParser.FLOAT_32_TYPE - 31)) | (1 << (UONParser.INT_TYPE - 31)) | (1 << (UONParser.INT_128_TYPE - 31)) | (1 << (UONParser.INT_64_TYPE - 31)) | (1 << (UONParser.INT_32_TYPE - 31)) | (1 << (UONParser.UINT_TYPE - 31)) | (1 << (UONParser.UINT_128_TYPE - 31)) | (1 << (UONParser.UINT_64_TYPE - 31)) | (1 << (UONParser.UINT_32_TYPE - 31)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema() {
        let _localctx = new SchemaContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, UONParser.RULE_schema);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.custom_type();
                this.state = 310;
                this.match(UONParser.COLON);
                this.state = 311;
                this.match(UONParser.SCHEMA_TYPE);
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.OPEN_PAR) {
                    {
                        this.state = 312;
                        this.schema_presentations();
                    }
                }
                this.state = 315;
                this.match(UONParser.OPEN_C_BRA);
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.QUOTED_STRING || _la === UONParser.UNQUOTED_STRING) {
                    {
                        this.state = 316;
                        this.attributes();
                    }
                }
                this.state = 319;
                this.match(UONParser.CLOSE_C_BRA);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    attributes() {
        let _localctx = new AttributesContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, UONParser.RULE_attributes);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 321;
                this.attribute();
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === UONParser.COMMA) {
                    {
                        {
                            this.state = 322;
                            this.match(UONParser.COMMA);
                            this.state = 323;
                            this.attribute();
                        }
                    }
                    this.state = 328;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    attribute() {
        let _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, UONParser.RULE_attribute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this.pair_key();
                this.state = 330;
                this.match(UONParser.COLON);
                this.state = 331;
                this.validation_properties();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema_presentations() {
        let _localctx = new Schema_presentationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, UONParser.RULE_schema_presentations);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this.match(UONParser.OPEN_PAR);
                this.state = 342;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__0) | (1 << UONParser.T__2) | (1 << UONParser.T__3))) !== 0)) {
                    {
                        this.state = 334;
                        this.schema_presentation();
                        this.state = 339;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === UONParser.COMMA) {
                            {
                                {
                                    this.state = 335;
                                    this.match(UONParser.COMMA);
                                    this.state = 336;
                                    this.schema_presentation();
                                }
                            }
                            this.state = 341;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 344;
                this.match(UONParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema_presentation() {
        let _localctx = new Schema_presentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, UONParser.RULE_schema_presentation);
        try {
            this.state = 349;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UONParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 346;
                        this.schema_name();
                    }
                    break;
                case UONParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 347;
                        this.schema_uuid();
                    }
                    break;
                case UONParser.T__0:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 348;
                        this.description();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema_name() {
        let _localctx = new Schema_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, UONParser.RULE_schema_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this.match(UONParser.T__2);
                this.state = 352;
                this.match(UONParser.COLON);
                this.state = 353;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schema_uuid() {
        let _localctx = new Schema_uuidContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, UONParser.RULE_schema_uuid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 355;
                this.match(UONParser.T__3);
                this.state = 356;
                this.match(UONParser.COLON);
                this.state = 357;
                this.url();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    validation_properties() {
        let _localctx = new Validation_propertiesContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, UONParser.RULE_validation_properties);
        try {
            this.state = 363;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UONParser.STR_TYPE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 359;
                        this.string_validation();
                    }
                    break;
                case UONParser.FLOAT_TYPE:
                case UONParser.INT_TYPE:
                case UONParser.UINT_TYPE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 360;
                        this.number_validation();
                    }
                    break;
                case UONParser.BOOL_TYPE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 361;
                        this.boolean_validation();
                    }
                    break;
                case UONParser.URL_TYPE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 362;
                        this.url_validation();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string_validation() {
        let _localctx = new String_validationContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, UONParser.RULE_string_validation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 365;
                this.match(UONParser.STR_TYPE);
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.OPEN_PAR) {
                    {
                        this.state = 366;
                        this.string_properties();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string_properties() {
        let _localctx = new String_propertiesContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, UONParser.RULE_string_properties);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(UONParser.OPEN_PAR);
                this.state = 378;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.T__4 || _la === UONParser.MINUTE) {
                    {
                        this.state = 370;
                        this.string_property();
                        this.state = 375;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === UONParser.COMMA) {
                            {
                                {
                                    this.state = 371;
                                    this.match(UONParser.COMMA);
                                    this.state = 372;
                                    this.string_property();
                                }
                            }
                            this.state = 377;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 380;
                this.match(UONParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string_property() {
        let _localctx = new String_propertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, UONParser.RULE_string_property);
        try {
            this.state = 384;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UONParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 382;
                        this.string_max();
                    }
                    break;
                case UONParser.MINUTE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 383;
                        this.string_min();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string_max() {
        let _localctx = new String_maxContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, UONParser.RULE_string_max);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this.match(UONParser.T__4);
                this.state = 387;
                this.match(UONParser.COLON);
                this.state = 388;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string_min() {
        let _localctx = new String_minContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, UONParser.RULE_string_min);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(UONParser.MINUTE);
                this.state = 391;
                this.match(UONParser.COLON);
                this.state = 392;
                this.string();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    url_validation() {
        let _localctx = new Url_validationContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, UONParser.RULE_url_validation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 394;
                this.match(UONParser.URL_TYPE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    boolean_validation() {
        let _localctx = new Boolean_validationContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, UONParser.RULE_boolean_validation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(UONParser.BOOL_TYPE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number_validation() {
        let _localctx = new Number_validationContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, UONParser.RULE_number_validation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this.number_validation_type();
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === UONParser.OPEN_PAR) {
                    {
                        this.state = 399;
                        this.number_properties();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number_properties() {
        let _localctx = new Number_propertiesContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, UONParser.RULE_number_properties);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 402;
                this.match(UONParser.OPEN_PAR);
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__4) | (1 << UONParser.T__5) | (1 << UONParser.MINUTE))) !== 0)) {
                    {
                        this.state = 403;
                        this.number_property();
                        this.state = 408;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === UONParser.COMMA) {
                            {
                                {
                                    this.state = 404;
                                    this.match(UONParser.COMMA);
                                    this.state = 405;
                                    this.number_property();
                                }
                            }
                            this.state = 410;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 413;
                this.match(UONParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number_property() {
        let _localctx = new Number_propertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, UONParser.RULE_number_property);
        try {
            this.state = 418;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case UONParser.T__4:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 415;
                        this.number_max();
                    }
                    break;
                case UONParser.MINUTE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 416;
                        this.number_min();
                    }
                    break;
                case UONParser.T__5:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 417;
                        this.quantity_validation();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number_max() {
        let _localctx = new Number_maxContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, UONParser.RULE_number_max);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this.match(UONParser.T__4);
                this.state = 421;
                this.match(UONParser.COLON);
                this.state = 422;
                this.number();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number_min() {
        let _localctx = new Number_minContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, UONParser.RULE_number_min);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 424;
                this.match(UONParser.MINUTE);
                this.state = 425;
                this.match(UONParser.COLON);
                this.state = 426;
                this.number();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    number_validation_type() {
        let _localctx = new Number_validation_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, UONParser.RULE_number_validation_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                _la = this._input.LA(1);
                if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (UONParser.FLOAT_TYPE - 31)) | (1 << (UONParser.INT_TYPE - 31)) | (1 << (UONParser.UINT_TYPE - 31)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantity_validation() {
        let _localctx = new Quantity_validationContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, UONParser.RULE_quantity_validation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                this.match(UONParser.T__5);
                this.state = 431;
                this.match(UONParser.COLON);
                this.state = 432;
                this.quantity_validation_types();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantity_validation_types() {
        let _localctx = new Quantity_validation_typesContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, UONParser.RULE_quantity_validation_types);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 434;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__6) | (1 << UONParser.T__7) | (1 << UONParser.T__8) | (1 << UONParser.T__9))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    boolean() {
        let _localctx = new BooleanContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, UONParser.RULE_boolean);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 438;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case UONParser.T__10:
                    case UONParser.T__11:
                        {
                            this.state = 436;
                            this.true();
                        }
                        break;
                    case UONParser.T__12:
                    case UONParser.T__13:
                        {
                            this.state = 437;
                            this.false();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    true() {
        let _localctx = new TrueContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, UONParser.RULE_true);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                _la = this._input.LA(1);
                if (!(_la === UONParser.T__10 || _la === UONParser.T__11)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    false() {
        let _localctx = new FalseContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, UONParser.RULE_false);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 442;
                _la = this._input.LA(1);
                if (!(_la === UONParser.T__12 || _la === UONParser.T__13)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    null() {
        let _localctx = new NullContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, UONParser.RULE_null);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 444;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UONParser.T__14) | (1 << UONParser.T__15) | (1 << UONParser.T__16))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!UONParser.__ATN) {
            UONParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(UONParser._serializedATN));
        }
        return UONParser.__ATN;
    }
}
exports.UONParser = UONParser;
UONParser.T__0 = 1;
UONParser.T__1 = 2;
UONParser.T__2 = 3;
UONParser.T__3 = 4;
UONParser.T__4 = 5;
UONParser.T__5 = 6;
UONParser.T__6 = 7;
UONParser.T__7 = 8;
UONParser.T__8 = 9;
UONParser.T__9 = 10;
UONParser.T__10 = 11;
UONParser.T__11 = 12;
UONParser.T__12 = 13;
UONParser.T__13 = 14;
UONParser.T__14 = 15;
UONParser.T__15 = 16;
UONParser.T__16 = 17;
UONParser.CT = 18;
UONParser.METERS = 19;
UONParser.KILOMETERS = 20;
UONParser.GRAMS = 21;
UONParser.KILOGRAMS = 22;
UONParser.SECOND = 23;
UONParser.MINUTE = 24;
UONParser.CELSIUS = 25;
UONParser.KELVIN = 26;
UONParser.QUOTED_STRING = 27;
UONParser.STR_TYPE = 28;
UONParser.BOOL_TYPE = 29;
UONParser.URL_TYPE = 30;
UONParser.FLOAT_TYPE = 31;
UONParser.FLOAT_128_TYPE = 32;
UONParser.FLOAT_64_TYPE = 33;
UONParser.FLOAT_32_TYPE = 34;
UONParser.INT_TYPE = 35;
UONParser.INT_128_TYPE = 36;
UONParser.INT_64_TYPE = 37;
UONParser.INT_32_TYPE = 38;
UONParser.UINT_TYPE = 39;
UONParser.UINT_128_TYPE = 40;
UONParser.UINT_64_TYPE = 41;
UONParser.UINT_32_TYPE = 42;
UONParser.UNQUOTED_STRING = 43;
UONParser.WS = 44;
UONParser.OPEN_PAR = 45;
UONParser.CLOSE_PAR = 46;
UONParser.OPEN_C_BRA = 47;
UONParser.CLOSE_C_BRA = 48;
UONParser.OPEN_S_BRA = 49;
UONParser.CLOSE_S_BRA = 50;
UONParser.COMMA = 51;
UONParser.COLON = 52;
UONParser.MAPPING_TYPE = 53;
UONParser.SEQUENCE_TYPE = 54;
UONParser.SCHEMA_TYPE = 55;
UONParser.MINUS = 56;
UONParser.INDENT = 57;
UONParser.DEDENT = 58;
UONParser.RULE_uon = 0;
UONParser.RULE_json_collection = 1;
UONParser.RULE_json_map = 2;
UONParser.RULE_json_seq = 3;
UONParser.RULE_yaml_collection = 4;
UONParser.RULE_yaml_map = 5;
UONParser.RULE_yaml_seq = 6;
UONParser.RULE_seq_item = 7;
UONParser.RULE_pair = 8;
UONParser.RULE_pair_key = 9;
UONParser.RULE_json_pair = 10;
UONParser.RULE_presentation_properties = 11;
UONParser.RULE_presentation_property = 12;
UONParser.RULE_description = 13;
UONParser.RULE_optional = 14;
UONParser.RULE_string = 15;
UONParser.RULE_custom_type = 16;
UONParser.RULE_json_user_type = 17;
UONParser.RULE_yaml_user_type = 18;
UONParser.RULE_scalar = 19;
UONParser.RULE_string_scalar = 20;
UONParser.RULE_boolean_scalar = 21;
UONParser.RULE_url = 22;
UONParser.RULE_quantity_scalar = 23;
UONParser.RULE_numeric_scalar = 24;
UONParser.RULE_coercible_numeric_scalar = 25;
UONParser.RULE_quantity = 26;
UONParser.RULE_length = 27;
UONParser.RULE_mass = 28;
UONParser.RULE_time = 29;
UONParser.RULE_temperature = 30;
UONParser.RULE_number = 31;
UONParser.RULE_root_value = 32;
UONParser.RULE_json_value = 33;
UONParser.RULE_yaml_value = 34;
UONParser.RULE_number_type = 35;
UONParser.RULE_schema = 36;
UONParser.RULE_attributes = 37;
UONParser.RULE_attribute = 38;
UONParser.RULE_schema_presentations = 39;
UONParser.RULE_schema_presentation = 40;
UONParser.RULE_schema_name = 41;
UONParser.RULE_schema_uuid = 42;
UONParser.RULE_validation_properties = 43;
UONParser.RULE_string_validation = 44;
UONParser.RULE_string_properties = 45;
UONParser.RULE_string_property = 46;
UONParser.RULE_string_max = 47;
UONParser.RULE_string_min = 48;
UONParser.RULE_url_validation = 49;
UONParser.RULE_boolean_validation = 50;
UONParser.RULE_number_validation = 51;
UONParser.RULE_number_properties = 52;
UONParser.RULE_number_property = 53;
UONParser.RULE_number_max = 54;
UONParser.RULE_number_min = 55;
UONParser.RULE_number_validation_type = 56;
UONParser.RULE_quantity_validation = 57;
UONParser.RULE_quantity_validation_types = 58;
UONParser.RULE_boolean = 59;
UONParser.RULE_true = 60;
UONParser.RULE_false = 61;
UONParser.RULE_null = 62;
// tslint:disable:no-trailing-whitespace
UONParser.ruleNames = [
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
UONParser._LITERAL_NAMES = [
    undefined, "'description'", "'optional'", "'name'", "'uuid'", "'max'",
    "'quantity'", "'length'", "'mass'", "'temperature'", "'time'", "'true'",
    "'True'", "'false'", "'False'", "'null'", "'none'", "'None'", "'!!'",
    "'m'", "'km'", "'g'", "'kg'", "'s'", "'min'", "'C'", "'K'", undefined,
    "'!str'", "'!bool'", "'!url'", "'!float'", "'!float128'", "'!float64'",
    "'!float32'", "'!int'", "'!int128'", "'!int6'", "'!int32'", "'!uint'",
    "'!uint128'", "'!uint64'", "'!uint32'", undefined, undefined, "'('", "')'",
    "'{'", "'}'", "'['", "']'", "','", "':'", "'!map'", "'!seq'", "'!schema'",
    "'-'",
];
UONParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "CT", "METERS", "KILOMETERS",
    "GRAMS", "KILOGRAMS", "SECOND", "MINUTE", "CELSIUS", "KELVIN", "QUOTED_STRING",
    "STR_TYPE", "BOOL_TYPE", "URL_TYPE", "FLOAT_TYPE", "FLOAT_128_TYPE", "FLOAT_64_TYPE",
    "FLOAT_32_TYPE", "INT_TYPE", "INT_128_TYPE", "INT_64_TYPE", "INT_32_TYPE",
    "UINT_TYPE", "UINT_128_TYPE", "UINT_64_TYPE", "UINT_32_TYPE", "UNQUOTED_STRING",
    "WS", "OPEN_PAR", "CLOSE_PAR", "OPEN_C_BRA", "CLOSE_C_BRA", "OPEN_S_BRA",
    "CLOSE_S_BRA", "COMMA", "COLON", "MAPPING_TYPE", "SEQUENCE_TYPE", "SCHEMA_TYPE",
    "MINUS", "INDENT", "DEDENT",
];
UONParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(UONParser._LITERAL_NAMES, UONParser._SYMBOLIC_NAMES, []);
UONParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\u01C1\x04\x02" +
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
    "\b\xB8\x03\t\x05\t\xBC\n\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
    "\v\x03\v\x05\v\xC7\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r" +
    "\x07\r\xD1\n\r\f\r\x0E\r\xD4\v\r\x05\r\xD6\n\r\x03\r\x03\r\x03\x0E\x03" +
    "\x0E\x05\x0E\xDC\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
    "\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
    "\xF5\n\x15\x03\x16\x05\x16\xF8\n\x16\x03\x16\x03\x16\x03\x17\x05\x17\xFD" +
    "\n\x17\x03\x17\x03\x17\x03\x18\x05\x18\u0102\n\x18\x03\x18\x03\x18\x03" +
    "\x19\x03\x19\x05\x19\u0108\n\x19\x03\x1A\x03\x1A\x05\x1A\u010C\n\x1A\x03" +
    "\x1B\x03\x1B\x03\x1B\x05\x1B\u0111\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
    "\x05\x1C\u0117\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
    " \x03 \x03!\x03!\x03\"\x03\"\x03\"\x05\"\u0126\n\"\x03#\x03#\x03#\x03" +
    "#\x03#\x05#\u012D\n#\x03$\x03$\x03$\x03$\x03$\x05$\u0134\n$\x03%\x03%" +
    "\x03&\x03&\x03&\x03&\x05&\u013C\n&\x03&\x03&\x05&\u0140\n&\x03&\x03&\x03" +
    "\'\x03\'\x03\'\x07\'\u0147\n\'\f\'\x0E\'\u014A\v\'\x03(\x03(\x03(\x03" +
    "(\x03)\x03)\x03)\x03)\x07)\u0154\n)\f)\x0E)\u0157\v)\x05)\u0159\n)\x03" +
    ")\x03)\x03*\x03*\x03*\x05*\u0160\n*\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
    ",\x03,\x03-\x03-\x03-\x03-\x05-\u016E\n-\x03.\x03.\x05.\u0172\n.\x03/" +
    "\x03/\x03/\x03/\x07/\u0178\n/\f/\x0E/\u017B\v/\x05/\u017D\n/\x03/\x03" +
    "/\x030\x030\x050\u0183\n0\x031\x031\x031\x031\x032\x032\x032\x032\x03" +
    "3\x033\x034\x034\x035\x035\x055\u0193\n5\x036\x036\x036\x036\x076\u0199" +
    "\n6\f6\x0E6\u019C\v6\x056\u019E\n6\x036\x036\x037\x037\x037\x057\u01A5" +
    "\n7\x038\x038\x038\x038\x039\x039\x039\x039\x03:\x03:\x03;\x03;\x03;\x03" +
    ";\x03<\x03<\x03=\x03=\x05=\u01B9\n=\x03>\x03>\x03?\x03?\x03@\x03@\x03" +
    "@\x02\x02\x02A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
    "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x02\r\x04\x02\x1D\x1D--\x03\x02\x15\x16\x03\x02\x17\x18" +
    "\x03\x02\x19\x1A\x03\x02\x1B\x1C\x03\x02!,\x05\x02!!%%))\x03\x02\t\f\x03" +
    "\x02\r\x0E\x03\x02\x0F\x10\x03\x02\x11\x13\x02\u01BC\x02\x80\x03\x02\x02" +
    "\x02\x04\x84\x03\x02\x02\x02\x06\x87\x03\x02\x02\x02\b\x97\x03\x02\x02" +
    "\x02\n\xA8\x03\x02\x02\x02\f\xAB\x03\x02\x02\x02\x0E\xB3\x03\x02\x02\x02" +
    "\x10\xBB\x03\x02\x02\x02\x12\xC0\x03\x02\x02\x02\x14\xC4\x03\x02\x02\x02" +
    "\x16\xC8\x03\x02\x02\x02\x18\xCC\x03\x02\x02\x02\x1A\xDB\x03\x02\x02\x02" +
    "\x1C\xDD\x03\x02\x02\x02\x1E\xE1\x03\x02\x02\x02 \xE5\x03\x02\x02\x02" +
    "\"\xE7\x03\x02\x02\x02$\xEA\x03\x02\x02\x02&\xED\x03\x02\x02\x02(\xF4" +
    "\x03\x02\x02\x02*\xF7\x03\x02\x02\x02,\xFC\x03\x02\x02\x02.\u0101\x03" +
    "\x02\x02\x020\u0105\x03\x02\x02\x022\u010B\x03\x02\x02\x024\u010D\x03" +
    "\x02\x02\x026\u0116\x03\x02\x02\x028\u0118\x03\x02\x02\x02:\u011A\x03" +
    "\x02\x02\x02<\u011C\x03\x02\x02\x02>\u011E\x03\x02\x02\x02@\u0120\x03" +
    "\x02\x02\x02B\u0125\x03\x02\x02\x02D\u012C\x03\x02\x02\x02F\u0133\x03" +
    "\x02\x02\x02H\u0135\x03\x02\x02\x02J\u0137\x03\x02\x02\x02L\u0143\x03" +
    "\x02\x02\x02N\u014B\x03\x02\x02\x02P\u014F\x03\x02\x02\x02R\u015F\x03" +
    "\x02\x02\x02T\u0161\x03\x02\x02\x02V\u0165\x03\x02\x02\x02X\u016D\x03" +
    "\x02\x02\x02Z\u016F\x03\x02\x02\x02\\\u0173\x03\x02\x02\x02^\u0182\x03" +
    "\x02\x02\x02`\u0184\x03\x02\x02\x02b\u0188\x03\x02\x02\x02d\u018C\x03" +
    "\x02\x02\x02f\u018E\x03\x02\x02\x02h\u0190\x03\x02\x02\x02j\u0194\x03" +
    "\x02\x02\x02l\u01A4\x03\x02\x02\x02n\u01A6\x03\x02\x02\x02p\u01AA\x03" +
    "\x02\x02\x02r\u01AE\x03\x02\x02\x02t\u01B0\x03\x02\x02\x02v\u01B4\x03" +
    "\x02\x02\x02x\u01B8\x03\x02\x02\x02z\u01BA\x03\x02\x02\x02|\u01BC\x03" +
    "\x02\x02\x02~\u01BE\x03\x02\x02\x02\x80\x81\x05B\"\x02\x81\x03\x03\x02" +
    "\x02\x02\x82\x85\x05\x06\x04\x02\x83\x85\x05\b\x05\x02\x84\x82\x03\x02" +
    "\x02\x02\x84\x83\x03\x02\x02\x02\x85\x05\x03\x02\x02\x02\x86\x88\x077" +
    "\x02\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02" +
    "\x02\x02\x89\x92\x071\x02\x02\x8A\x8F\x05\x16\f\x02\x8B\x8C\x075\x02\x02" +
    "\x8C\x8E\x05\x16\f\x02\x8D\x8B\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02" +
    "\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02" +
    "\x91\x8F\x03\x02\x02\x02\x92\x8A\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02" +
    "\x93\x94\x03\x02\x02\x02\x94\x95\x072\x02\x02\x95\x07\x03\x02\x02\x02" +
    "\x96\x98\x078\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02" +
    "\x98\x99\x03\x02\x02\x02\x99\xA2\x073\x02\x02\x9A\x9F\x05D#\x02\x9B\x9C" +
    "\x075\x02\x02\x9C\x9E\x05D#\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02" +
    "\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA3\x03\x02" +
    "\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\x9A\x03\x02\x02\x02\xA2\xA3\x03\x02" +
    "\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x074\x02\x02\xA5\t\x03\x02\x02" +
    "\x02\xA6\xA9\x05\f\x07\x02\xA7\xA9\x05\x0E\b\x02\xA8\xA6\x03\x02\x02\x02" +
    "\xA8\xA7\x03\x02\x02\x02\xA9\v\x03\x02\x02\x02\xAA\xAC\x077\x02\x02\xAB" +
    "\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD" +
    "\xAF\x05\x12\n\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0" +
    "\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\r\x03\x02\x02\x02\xB2" +
    "\xB4\x078\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4" +
    "\xB6\x03\x02\x02\x02\xB5\xB7\x05\x10\t\x02\xB6\xB5\x03\x02\x02\x02\xB7" +
    "\xB8\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9" +
    "\x0F\x03\x02\x02\x02\xBA\xBC\x07;\x02\x02\xBB\xBA\x03\x02\x02\x02\xBB" +
    "\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x07:\x02\x02\xBE" +
    "\xBF\x05F$\x02\xBF\x11\x03\x02\x02\x02\xC0\xC1\x05\x14\v\x02\xC1\xC2\x07" +
    "6\x02\x02\xC2\xC3\x05F$\x02\xC3\x13\x03\x02\x02\x02\xC4\xC6\x05 \x11\x02" +
    "\xC5\xC7\x05\x18\r\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
    "\xC7\x15\x03\x02\x02\x02\xC8\xC9\x05\x14\v\x02\xC9\xCA\x076\x02\x02\xCA" +
    "\xCB\x05D#\x02\xCB\x17\x03\x02\x02\x02\xCC\xD5\x07/\x02\x02\xCD\xD2\x05" +
    "\x1A\x0E\x02\xCE\xCF\x075\x02\x02\xCF\xD1\x05\x1A\x0E\x02\xD0\xCE\x03" +
    "\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03" +
    "\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xCD\x03" +
    "\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x07" +
    "0\x02\x02\xD8\x19\x03\x02\x02\x02\xD9\xDC\x05\x1E\x10\x02\xDA\xDC\x05" +
    "\x1C\x0F\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x1B\x03" +
    "\x02\x02\x02\xDD\xDE\x07\x03\x02\x02\xDE\xDF\x076\x02\x02\xDF\xE0\x05" +
    " \x11\x02\xE0\x1D\x03\x02\x02\x02\xE1\xE2\x07\x04\x02\x02\xE2\xE3\x07" +
    "6\x02\x02\xE3\xE4\x05x=\x02\xE4\x1F\x03\x02\x02\x02\xE5\xE6\t\x02\x02" +
    "\x02\xE6!\x03\x02\x02\x02\xE7\xE8\x07\x14\x02\x02\xE8\xE9\x07-\x02\x02" +
    "\xE9#\x03\x02\x02\x02\xEA\xEB\x05\"\x12\x02\xEB\xEC\x05\x06\x04\x02\xEC" +
    "%\x03\x02\x02\x02\xED\xEE\x05\"\x12\x02\xEE\xEF\x05\f\x07\x02\xEF\'\x03" +
    "\x02\x02\x02\xF0\xF5\x050\x19\x02\xF1\xF5\x05*\x16\x02\xF2\xF5\x05,\x17" +
    "\x02\xF3\xF5\x05.\x18\x02\xF4\xF0\x03\x02\x02\x02\xF4\xF1\x03\x02\x02" +
    "\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5)\x03\x02\x02" +
    "\x02\xF6\xF8\x07\x1E\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02" +
    "\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x05 \x11\x02\xFA+\x03\x02\x02\x02" +
    "\xFB\xFD\x07\x1F\x02\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02" +
    "\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x05x=\x02\xFF-\x03\x02\x02\x02\u0100" +
    "\u0102\x07 \x02\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
    "\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x05 \x11\x02\u0104/\x03\x02" +
    "\x02\x02\u0105\u0107\x052\x1A\x02\u0106\u0108\x056\x1C\x02\u0107\u0106" +
    "\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u01081\x03\x02\x02\x02\u0109" +
    "\u010C\x054\x1B\x02\u010A\u010C\x05@!\x02\u010B\u0109\x03\x02\x02\x02" +
    "\u010B\u010A\x03\x02\x02\x02\u010C3\x03\x02\x02\x02\u010D\u0110\x05H%" +
    "\x02\u010E\u0111\x054\x1B\x02\u010F\u0111\x05@!\x02\u0110\u010E\x03\x02" +
    "\x02\x02\u0110\u010F\x03\x02\x02\x02\u01115\x03\x02\x02\x02\u0112\u0117" +
    "\x058\x1D\x02\u0113\u0117\x05:\x1E\x02\u0114\u0117\x05<\x1F\x02\u0115" +
    "\u0117\x05> \x02\u0116\u0112\x03\x02\x02\x02\u0116\u0113\x03\x02\x02\x02" +
    "\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u01177\x03\x02" +
    "\x02\x02\u0118\u0119\t\x03\x02\x02\u01199\x03\x02\x02\x02\u011A\u011B" +
    "\t\x04\x02\x02\u011B;\x03\x02\x02\x02\u011C\u011D\t\x05\x02\x02\u011D" +
    "=\x03\x02\x02\x02\u011E\u011F\t\x06\x02\x02\u011F?\x03\x02\x02\x02\u0120" +
    "\u0121\x07-\x02\x02\u0121A\x03\x02\x02\x02\u0122\u0126\x05\x04\x03\x02" +
    "\u0123\u0126\x05\n\x06\x02\u0124\u0126\x05J&\x02\u0125\u0122\x03\x02\x02" +
    "\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126C\x03" +
    "\x02\x02\x02\u0127\u012D\x05\x06\x04\x02\u0128\u012D\x05\b\x05\x02\u0129" +
    "\u012D\x05(\x15\x02\u012A\u012D\x05$\x13\x02\u012B\u012D\x05~@\x02\u012C" +
    "\u0127\x03\x02\x02\x02\u012C\u0128\x03\x02\x02\x02\u012C\u0129\x03\x02" +
    "\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D" +
    "E\x03\x02\x02\x02\u012E\u0134\x05\f\x07\x02\u012F\u0134\x05\x0E\b\x02" +
    "\u0130\u0134\x05(\x15\x02\u0131\u0134\x05&\x14\x02\u0132\u0134\x05~@\x02" +
    "\u0133\u012E\x03\x02\x02\x02\u0133\u012F\x03\x02\x02\x02\u0133\u0130\x03" +
    "\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134" +
    "G\x03\x02\x02\x02\u0135\u0136\t\x07\x02\x02\u0136I\x03\x02\x02\x02\u0137" +
    "\u0138\x05\"\x12\x02\u0138\u0139\x076\x02\x02\u0139\u013B\x079\x02\x02" +
    "\u013A\u013C\x05P)\x02\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02" +
    "\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F\x071\x02\x02\u013E\u0140" +
    "\x05L\'\x02\u013F\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
    "\u0141\x03\x02\x02\x02\u0141\u0142\x072\x02\x02\u0142K\x03\x02\x02\x02" +
    "\u0143\u0148\x05N(\x02\u0144\u0145\x075\x02\x02\u0145\u0147\x05N(\x02" +
    "\u0146\u0144\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03" +
    "\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149M\x03\x02\x02\x02\u014A" +
    "\u0148\x03\x02\x02\x02\u014B\u014C\x05\x14\v\x02\u014C\u014D\x076\x02" +
    "\x02\u014D\u014E\x05X-\x02\u014EO\x03\x02\x02\x02\u014F\u0158\x07/\x02" +
    "\x02\u0150\u0155\x05R*\x02\u0151\u0152\x075\x02\x02\u0152\u0154\x05R*" +
    "\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153" +
    "\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02" +
    "\u0157\u0155\x03\x02\x02\x02\u0158\u0150\x03\x02\x02\x02\u0158\u0159\x03" +
    "\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x070\x02\x02\u015B" +
    "Q\x03\x02\x02\x02\u015C\u0160\x05T+\x02\u015D\u0160\x05V,\x02\u015E\u0160" +
    "\x05\x1C\x0F\x02\u015F\u015C\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02" +
    "\u015F\u015E\x03\x02\x02\x02\u0160S\x03\x02\x02\x02\u0161\u0162\x07\x05" +
    "\x02\x02\u0162\u0163\x076\x02\x02\u0163\u0164\x05 \x11\x02\u0164U\x03" +
    "\x02\x02\x02\u0165\u0166\x07\x06\x02\x02\u0166\u0167\x076\x02\x02\u0167" +
    "\u0168\x05.\x18\x02\u0168W\x03\x02\x02\x02\u0169\u016E\x05Z.\x02\u016A" +
    "\u016E\x05h5\x02\u016B\u016E\x05f4\x02\u016C\u016E\x05d3\x02\u016D\u0169" +
    "\x03\x02\x02\x02\u016D\u016A\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02" +
    "\u016D\u016C\x03\x02\x02\x02\u016EY\x03\x02\x02\x02\u016F\u0171\x07\x1E" +
    "\x02\x02\u0170\u0172\x05\\/\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172" +
    "\x03\x02\x02\x02\u0172[\x03\x02\x02\x02\u0173\u017C\x07/\x02\x02\u0174" +
    "\u0179\x05^0\x02\u0175\u0176\x075\x02\x02\u0176\u0178\x05^0\x02\u0177" +
    "\u0175\x03\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02" +
    "\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B" +
    "\u0179\x03\x02\x02\x02\u017C\u0174\x03\x02\x02\x02\u017C\u017D\x03\x02" +
    "\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x070\x02\x02\u017F]\x03" +
    "\x02\x02\x02\u0180\u0183\x05`1\x02\u0181\u0183\x05b2\x02\u0182\u0180\x03" +
    "\x02\x02\x02\u0182\u0181\x03\x02\x02\x02\u0183_\x03\x02\x02\x02\u0184" +
    "\u0185\x07\x07\x02\x02\u0185\u0186\x076\x02\x02\u0186\u0187\x05 \x11\x02" +
    "\u0187a\x03\x02\x02\x02\u0188\u0189\x07\x1A\x02\x02\u0189\u018A\x076\x02" +
    "\x02\u018A\u018B\x05 \x11\x02\u018Bc\x03\x02\x02\x02\u018C\u018D\x07 " +
    "\x02\x02\u018De\x03\x02\x02\x02\u018E\u018F\x07\x1F\x02\x02\u018Fg\x03" +
    "\x02\x02\x02\u0190\u0192\x05r:\x02\u0191\u0193\x05j6\x02\u0192\u0191\x03" +
    "\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193i\x03\x02\x02\x02\u0194" +
    "\u019D\x07/\x02\x02\u0195\u019A\x05l7\x02\u0196\u0197\x075\x02\x02\u0197" +
    "\u0199\x05l7\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02" +
    "\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019E\x03" +
    "\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u0195\x03\x02\x02\x02\u019D" +
    "\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x070\x02" +
    "\x02\u01A0k\x03\x02\x02\x02\u01A1\u01A5\x05n8\x02\u01A2\u01A5\x05p9\x02" +
    "\u01A3\u01A5\x05t;\x02\u01A4\u01A1\x03\x02\x02\x02\u01A4\u01A2\x03\x02" +
    "\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A5m\x03\x02\x02\x02\u01A6\u01A7" +
    "\x07\x07\x02\x02\u01A7\u01A8\x076\x02\x02\u01A8\u01A9\x05@!\x02\u01A9" +
    "o\x03\x02\x02\x02\u01AA\u01AB\x07\x1A\x02\x02\u01AB\u01AC\x076\x02\x02" +
    "\u01AC\u01AD\x05@!\x02\u01ADq\x03\x02\x02\x02\u01AE\u01AF\t\b\x02\x02" +
    "\u01AFs\x03\x02\x02\x02\u01B0\u01B1\x07\b\x02\x02\u01B1\u01B2\x076\x02" +
    "\x02\u01B2\u01B3\x05v<\x02\u01B3u\x03\x02\x02\x02\u01B4\u01B5\t\t\x02" +
    "\x02\u01B5w\x03\x02\x02\x02\u01B6\u01B9\x05z>\x02\u01B7\u01B9\x05|?\x02" +
    "\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9y\x03\x02" +
    "\x02\x02\u01BA\u01BB\t\n\x02\x02\u01BB{\x03\x02\x02\x02\u01BC\u01BD\t" +
    "\v\x02\x02\u01BD}\x03\x02\x02\x02\u01BE\u01BF\t\f\x02\x02\u01BF\x7F\x03" +
    "\x02\x02\x02.\x84\x87\x8F\x92\x97\x9F\xA2\xA8\xAB\xB0\xB3\xB8\xBB\xC6" +
    "\xD2\xD5\xDB\xF4\xF7\xFC\u0101\u0107\u010B\u0110\u0116\u0125\u012C\u0133" +
    "\u013B\u013F\u0148\u0155\u0158\u015F\u016D\u0171\u0179\u017C\u0182\u0192" +
    "\u019A\u019D\u01A4\u01B8";
class UonContext extends ParserRuleContext_1.ParserRuleContext {
    root_value() {
        return this.getRuleContext(0, Root_valueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_uon; }
    // @Override
    enterRule(listener) {
        if (listener.enterUon) {
            listener.enterUon(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUon) {
            listener.exitUon(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUon) {
            return visitor.visitUon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UonContext = UonContext;
class Json_collectionContext extends ParserRuleContext_1.ParserRuleContext {
    json_map() {
        return this.tryGetRuleContext(0, Json_mapContext);
    }
    json_seq() {
        return this.tryGetRuleContext(0, Json_seqContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_json_collection; }
    // @Override
    enterRule(listener) {
        if (listener.enterJson_collection) {
            listener.enterJson_collection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJson_collection) {
            listener.exitJson_collection(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJson_collection) {
            return visitor.visitJson_collection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Json_collectionContext = Json_collectionContext;
class Json_mapContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_C_BRA() { return this.getToken(UONParser.OPEN_C_BRA, 0); }
    CLOSE_C_BRA() { return this.getToken(UONParser.CLOSE_C_BRA, 0); }
    MAPPING_TYPE() { return this.tryGetToken(UONParser.MAPPING_TYPE, 0); }
    json_pair(i) {
        if (i === undefined) {
            return this.getRuleContexts(Json_pairContext);
        }
        else {
            return this.getRuleContext(i, Json_pairContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(UONParser.COMMA);
        }
        else {
            return this.getToken(UONParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_json_map; }
    // @Override
    enterRule(listener) {
        if (listener.enterJson_map) {
            listener.enterJson_map(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJson_map) {
            listener.exitJson_map(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJson_map) {
            return visitor.visitJson_map(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Json_mapContext = Json_mapContext;
class Json_seqContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_S_BRA() { return this.getToken(UONParser.OPEN_S_BRA, 0); }
    CLOSE_S_BRA() { return this.getToken(UONParser.CLOSE_S_BRA, 0); }
    SEQUENCE_TYPE() { return this.tryGetToken(UONParser.SEQUENCE_TYPE, 0); }
    json_value(i) {
        if (i === undefined) {
            return this.getRuleContexts(Json_valueContext);
        }
        else {
            return this.getRuleContext(i, Json_valueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(UONParser.COMMA);
        }
        else {
            return this.getToken(UONParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_json_seq; }
    // @Override
    enterRule(listener) {
        if (listener.enterJson_seq) {
            listener.enterJson_seq(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJson_seq) {
            listener.exitJson_seq(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJson_seq) {
            return visitor.visitJson_seq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Json_seqContext = Json_seqContext;
class Yaml_collectionContext extends ParserRuleContext_1.ParserRuleContext {
    yaml_map() {
        return this.tryGetRuleContext(0, Yaml_mapContext);
    }
    yaml_seq() {
        return this.tryGetRuleContext(0, Yaml_seqContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_yaml_collection; }
    // @Override
    enterRule(listener) {
        if (listener.enterYaml_collection) {
            listener.enterYaml_collection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitYaml_collection) {
            listener.exitYaml_collection(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitYaml_collection) {
            return visitor.visitYaml_collection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Yaml_collectionContext = Yaml_collectionContext;
class Yaml_mapContext extends ParserRuleContext_1.ParserRuleContext {
    MAPPING_TYPE() { return this.tryGetToken(UONParser.MAPPING_TYPE, 0); }
    pair(i) {
        if (i === undefined) {
            return this.getRuleContexts(PairContext);
        }
        else {
            return this.getRuleContext(i, PairContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_yaml_map; }
    // @Override
    enterRule(listener) {
        if (listener.enterYaml_map) {
            listener.enterYaml_map(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitYaml_map) {
            listener.exitYaml_map(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitYaml_map) {
            return visitor.visitYaml_map(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Yaml_mapContext = Yaml_mapContext;
class Yaml_seqContext extends ParserRuleContext_1.ParserRuleContext {
    SEQUENCE_TYPE() { return this.tryGetToken(UONParser.SEQUENCE_TYPE, 0); }
    seq_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Seq_itemContext);
        }
        else {
            return this.getRuleContext(i, Seq_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_yaml_seq; }
    // @Override
    enterRule(listener) {
        if (listener.enterYaml_seq) {
            listener.enterYaml_seq(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitYaml_seq) {
            listener.exitYaml_seq(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitYaml_seq) {
            return visitor.visitYaml_seq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Yaml_seqContext = Yaml_seqContext;
class Seq_itemContext extends ParserRuleContext_1.ParserRuleContext {
    MINUS() { return this.getToken(UONParser.MINUS, 0); }
    yaml_value() {
        return this.getRuleContext(0, Yaml_valueContext);
    }
    INDENT() { return this.tryGetToken(UONParser.INDENT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_seq_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterSeq_item) {
            listener.enterSeq_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSeq_item) {
            listener.exitSeq_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSeq_item) {
            return visitor.visitSeq_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Seq_itemContext = Seq_itemContext;
class PairContext extends ParserRuleContext_1.ParserRuleContext {
    pair_key() {
        return this.getRuleContext(0, Pair_keyContext);
    }
    COLON() { return this.getToken(UONParser.COLON, 0); }
    yaml_value() {
        return this.getRuleContext(0, Yaml_valueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_pair; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair) {
            listener.enterPair(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair) {
            listener.exitPair(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPair) {
            return visitor.visitPair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PairContext = PairContext;
class Pair_keyContext extends ParserRuleContext_1.ParserRuleContext {
    string() {
        return this.getRuleContext(0, StringContext);
    }
    presentation_properties() {
        return this.tryGetRuleContext(0, Presentation_propertiesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_pair_key; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_key) {
            listener.enterPair_key(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_key) {
            listener.exitPair_key(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPair_key) {
            return visitor.visitPair_key(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Pair_keyContext = Pair_keyContext;
class Json_pairContext extends ParserRuleContext_1.ParserRuleContext {
    pair_key() {
        return this.getRuleContext(0, Pair_keyContext);
    }
    COLON() { return this.getToken(UONParser.COLON, 0); }
    json_value() {
        return this.getRuleContext(0, Json_valueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_json_pair; }
    // @Override
    enterRule(listener) {
        if (listener.enterJson_pair) {
            listener.enterJson_pair(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJson_pair) {
            listener.exitJson_pair(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJson_pair) {
            return visitor.visitJson_pair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Json_pairContext = Json_pairContext;
class Presentation_propertiesContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.getToken(UONParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(UONParser.CLOSE_PAR, 0); }
    presentation_property(i) {
        if (i === undefined) {
            return this.getRuleContexts(Presentation_propertyContext);
        }
        else {
            return this.getRuleContext(i, Presentation_propertyContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(UONParser.COMMA);
        }
        else {
            return this.getToken(UONParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_presentation_properties; }
    // @Override
    enterRule(listener) {
        if (listener.enterPresentation_properties) {
            listener.enterPresentation_properties(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPresentation_properties) {
            listener.exitPresentation_properties(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPresentation_properties) {
            return visitor.visitPresentation_properties(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Presentation_propertiesContext = Presentation_propertiesContext;
class Presentation_propertyContext extends ParserRuleContext_1.ParserRuleContext {
    optional() {
        return this.tryGetRuleContext(0, OptionalContext);
    }
    description() {
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_presentation_property; }
    // @Override
    enterRule(listener) {
        if (listener.enterPresentation_property) {
            listener.enterPresentation_property(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPresentation_property) {
            listener.exitPresentation_property(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPresentation_property) {
            return visitor.visitPresentation_property(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Presentation_propertyContext = Presentation_propertyContext;
class DescriptionContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(UONParser.COLON, 0); }
    string() {
        return this.getRuleContext(0, StringContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_description; }
    // @Override
    enterRule(listener) {
        if (listener.enterDescription) {
            listener.enterDescription(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDescription) {
            listener.exitDescription(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DescriptionContext = DescriptionContext;
class OptionalContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(UONParser.COLON, 0); }
    boolean() {
        return this.getRuleContext(0, BooleanContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_optional; }
    // @Override
    enterRule(listener) {
        if (listener.enterOptional) {
            listener.enterOptional(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOptional) {
            listener.exitOptional(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOptional) {
            return visitor.visitOptional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OptionalContext = OptionalContext;
class StringContext extends ParserRuleContext_1.ParserRuleContext {
    QUOTED_STRING() { return this.tryGetToken(UONParser.QUOTED_STRING, 0); }
    UNQUOTED_STRING() { return this.tryGetToken(UONParser.UNQUOTED_STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_string; }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringContext = StringContext;
class Custom_typeContext extends ParserRuleContext_1.ParserRuleContext {
    CT() { return this.getToken(UONParser.CT, 0); }
    UNQUOTED_STRING() { return this.getToken(UONParser.UNQUOTED_STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_custom_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterCustom_type) {
            listener.enterCustom_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCustom_type) {
            listener.exitCustom_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCustom_type) {
            return visitor.visitCustom_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Custom_typeContext = Custom_typeContext;
class Json_user_typeContext extends ParserRuleContext_1.ParserRuleContext {
    custom_type() {
        return this.getRuleContext(0, Custom_typeContext);
    }
    json_map() {
        return this.getRuleContext(0, Json_mapContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_json_user_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterJson_user_type) {
            listener.enterJson_user_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJson_user_type) {
            listener.exitJson_user_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJson_user_type) {
            return visitor.visitJson_user_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Json_user_typeContext = Json_user_typeContext;
class Yaml_user_typeContext extends ParserRuleContext_1.ParserRuleContext {
    custom_type() {
        return this.getRuleContext(0, Custom_typeContext);
    }
    yaml_map() {
        return this.getRuleContext(0, Yaml_mapContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_yaml_user_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterYaml_user_type) {
            listener.enterYaml_user_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitYaml_user_type) {
            listener.exitYaml_user_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitYaml_user_type) {
            return visitor.visitYaml_user_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Yaml_user_typeContext = Yaml_user_typeContext;
class ScalarContext extends ParserRuleContext_1.ParserRuleContext {
    quantity_scalar() {
        return this.tryGetRuleContext(0, Quantity_scalarContext);
    }
    string_scalar() {
        return this.tryGetRuleContext(0, String_scalarContext);
    }
    boolean_scalar() {
        return this.tryGetRuleContext(0, Boolean_scalarContext);
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_scalar; }
    // @Override
    enterRule(listener) {
        if (listener.enterScalar) {
            listener.enterScalar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitScalar) {
            listener.exitScalar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitScalar) {
            return visitor.visitScalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ScalarContext = ScalarContext;
class String_scalarContext extends ParserRuleContext_1.ParserRuleContext {
    string() {
        return this.getRuleContext(0, StringContext);
    }
    STR_TYPE() { return this.tryGetToken(UONParser.STR_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_string_scalar; }
    // @Override
    enterRule(listener) {
        if (listener.enterString_scalar) {
            listener.enterString_scalar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString_scalar) {
            listener.exitString_scalar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString_scalar) {
            return visitor.visitString_scalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.String_scalarContext = String_scalarContext;
class Boolean_scalarContext extends ParserRuleContext_1.ParserRuleContext {
    boolean() {
        return this.getRuleContext(0, BooleanContext);
    }
    BOOL_TYPE() { return this.tryGetToken(UONParser.BOOL_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_boolean_scalar; }
    // @Override
    enterRule(listener) {
        if (listener.enterBoolean_scalar) {
            listener.enterBoolean_scalar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoolean_scalar) {
            listener.exitBoolean_scalar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolean_scalar) {
            return visitor.visitBoolean_scalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Boolean_scalarContext = Boolean_scalarContext;
class UrlContext extends ParserRuleContext_1.ParserRuleContext {
    string() {
        return this.getRuleContext(0, StringContext);
    }
    URL_TYPE() { return this.tryGetToken(UONParser.URL_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_url; }
    // @Override
    enterRule(listener) {
        if (listener.enterUrl) {
            listener.enterUrl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUrl) {
            listener.exitUrl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUrl) {
            return visitor.visitUrl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UrlContext = UrlContext;
class Quantity_scalarContext extends ParserRuleContext_1.ParserRuleContext {
    numeric_scalar() {
        return this.getRuleContext(0, Numeric_scalarContext);
    }
    quantity() {
        return this.tryGetRuleContext(0, QuantityContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_quantity_scalar; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantity_scalar) {
            listener.enterQuantity_scalar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantity_scalar) {
            listener.exitQuantity_scalar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantity_scalar) {
            return visitor.visitQuantity_scalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Quantity_scalarContext = Quantity_scalarContext;
class Numeric_scalarContext extends ParserRuleContext_1.ParserRuleContext {
    coercible_numeric_scalar() {
        return this.tryGetRuleContext(0, Coercible_numeric_scalarContext);
    }
    number() {
        return this.tryGetRuleContext(0, NumberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_numeric_scalar; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumeric_scalar) {
            listener.enterNumeric_scalar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumeric_scalar) {
            listener.exitNumeric_scalar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumeric_scalar) {
            return visitor.visitNumeric_scalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Numeric_scalarContext = Numeric_scalarContext;
class Coercible_numeric_scalarContext extends ParserRuleContext_1.ParserRuleContext {
    number_type() {
        return this.getRuleContext(0, Number_typeContext);
    }
    coercible_numeric_scalar() {
        return this.tryGetRuleContext(0, Coercible_numeric_scalarContext);
    }
    number() {
        return this.tryGetRuleContext(0, NumberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_coercible_numeric_scalar; }
    // @Override
    enterRule(listener) {
        if (listener.enterCoercible_numeric_scalar) {
            listener.enterCoercible_numeric_scalar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCoercible_numeric_scalar) {
            listener.exitCoercible_numeric_scalar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCoercible_numeric_scalar) {
            return visitor.visitCoercible_numeric_scalar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Coercible_numeric_scalarContext = Coercible_numeric_scalarContext;
class QuantityContext extends ParserRuleContext_1.ParserRuleContext {
    length() {
        return this.tryGetRuleContext(0, LengthContext);
    }
    mass() {
        return this.tryGetRuleContext(0, MassContext);
    }
    time() {
        return this.tryGetRuleContext(0, TimeContext);
    }
    temperature() {
        return this.tryGetRuleContext(0, TemperatureContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_quantity; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantity) {
            listener.enterQuantity(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantity) {
            listener.exitQuantity(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantity) {
            return visitor.visitQuantity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuantityContext = QuantityContext;
class LengthContext extends ParserRuleContext_1.ParserRuleContext {
    METERS() { return this.tryGetToken(UONParser.METERS, 0); }
    KILOMETERS() { return this.tryGetToken(UONParser.KILOMETERS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_length; }
    // @Override
    enterRule(listener) {
        if (listener.enterLength) {
            listener.enterLength(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLength) {
            listener.exitLength(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLength) {
            return visitor.visitLength(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LengthContext = LengthContext;
class MassContext extends ParserRuleContext_1.ParserRuleContext {
    GRAMS() { return this.tryGetToken(UONParser.GRAMS, 0); }
    KILOGRAMS() { return this.tryGetToken(UONParser.KILOGRAMS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_mass; }
    // @Override
    enterRule(listener) {
        if (listener.enterMass) {
            listener.enterMass(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMass) {
            listener.exitMass(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMass) {
            return visitor.visitMass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MassContext = MassContext;
class TimeContext extends ParserRuleContext_1.ParserRuleContext {
    SECOND() { return this.tryGetToken(UONParser.SECOND, 0); }
    MINUTE() { return this.tryGetToken(UONParser.MINUTE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_time; }
    // @Override
    enterRule(listener) {
        if (listener.enterTime) {
            listener.enterTime(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTime) {
            listener.exitTime(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTime) {
            return visitor.visitTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimeContext = TimeContext;
class TemperatureContext extends ParserRuleContext_1.ParserRuleContext {
    CELSIUS() { return this.tryGetToken(UONParser.CELSIUS, 0); }
    KELVIN() { return this.tryGetToken(UONParser.KELVIN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_temperature; }
    // @Override
    enterRule(listener) {
        if (listener.enterTemperature) {
            listener.enterTemperature(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTemperature) {
            listener.exitTemperature(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTemperature) {
            return visitor.visitTemperature(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TemperatureContext = TemperatureContext;
class NumberContext extends ParserRuleContext_1.ParserRuleContext {
    UNQUOTED_STRING() { return this.getToken(UONParser.UNQUOTED_STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberContext = NumberContext;
class Root_valueContext extends ParserRuleContext_1.ParserRuleContext {
    json_collection() {
        return this.tryGetRuleContext(0, Json_collectionContext);
    }
    yaml_collection() {
        return this.tryGetRuleContext(0, Yaml_collectionContext);
    }
    schema() {
        return this.tryGetRuleContext(0, SchemaContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_root_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterRoot_value) {
            listener.enterRoot_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRoot_value) {
            listener.exitRoot_value(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRoot_value) {
            return visitor.visitRoot_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Root_valueContext = Root_valueContext;
class Json_valueContext extends ParserRuleContext_1.ParserRuleContext {
    json_map() {
        return this.tryGetRuleContext(0, Json_mapContext);
    }
    json_seq() {
        return this.tryGetRuleContext(0, Json_seqContext);
    }
    scalar() {
        return this.tryGetRuleContext(0, ScalarContext);
    }
    json_user_type() {
        return this.tryGetRuleContext(0, Json_user_typeContext);
    }
    null() {
        return this.tryGetRuleContext(0, NullContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_json_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterJson_value) {
            listener.enterJson_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJson_value) {
            listener.exitJson_value(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJson_value) {
            return visitor.visitJson_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Json_valueContext = Json_valueContext;
class Yaml_valueContext extends ParserRuleContext_1.ParserRuleContext {
    yaml_map() {
        return this.tryGetRuleContext(0, Yaml_mapContext);
    }
    yaml_seq() {
        return this.tryGetRuleContext(0, Yaml_seqContext);
    }
    scalar() {
        return this.tryGetRuleContext(0, ScalarContext);
    }
    yaml_user_type() {
        return this.tryGetRuleContext(0, Yaml_user_typeContext);
    }
    null() {
        return this.tryGetRuleContext(0, NullContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_yaml_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterYaml_value) {
            listener.enterYaml_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitYaml_value) {
            listener.exitYaml_value(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitYaml_value) {
            return visitor.visitYaml_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Yaml_valueContext = Yaml_valueContext;
class Number_typeContext extends ParserRuleContext_1.ParserRuleContext {
    FLOAT_128_TYPE() { return this.tryGetToken(UONParser.FLOAT_128_TYPE, 0); }
    FLOAT_64_TYPE() { return this.tryGetToken(UONParser.FLOAT_64_TYPE, 0); }
    FLOAT_32_TYPE() { return this.tryGetToken(UONParser.FLOAT_32_TYPE, 0); }
    INT_128_TYPE() { return this.tryGetToken(UONParser.INT_128_TYPE, 0); }
    INT_64_TYPE() { return this.tryGetToken(UONParser.INT_64_TYPE, 0); }
    INT_32_TYPE() { return this.tryGetToken(UONParser.INT_32_TYPE, 0); }
    UINT_128_TYPE() { return this.tryGetToken(UONParser.UINT_128_TYPE, 0); }
    UINT_64_TYPE() { return this.tryGetToken(UONParser.UINT_64_TYPE, 0); }
    UINT_32_TYPE() { return this.tryGetToken(UONParser.UINT_32_TYPE, 0); }
    FLOAT_TYPE() { return this.tryGetToken(UONParser.FLOAT_TYPE, 0); }
    INT_TYPE() { return this.tryGetToken(UONParser.INT_TYPE, 0); }
    UINT_TYPE() { return this.tryGetToken(UONParser.UINT_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber_type) {
            listener.enterNumber_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber_type) {
            listener.exitNumber_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber_type) {
            return visitor.visitNumber_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Number_typeContext = Number_typeContext;
class SchemaContext extends ParserRuleContext_1.ParserRuleContext {
    custom_type() {
        return this.getRuleContext(0, Custom_typeContext);
    }
    COLON() { return this.getToken(UONParser.COLON, 0); }
    SCHEMA_TYPE() { return this.getToken(UONParser.SCHEMA_TYPE, 0); }
    OPEN_C_BRA() { return this.getToken(UONParser.OPEN_C_BRA, 0); }
    CLOSE_C_BRA() { return this.getToken(UONParser.CLOSE_C_BRA, 0); }
    schema_presentations() {
        return this.tryGetRuleContext(0, Schema_presentationsContext);
    }
    attributes() {
        return this.tryGetRuleContext(0, AttributesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_schema; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema) {
            listener.enterSchema(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema) {
            listener.exitSchema(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSchema) {
            return visitor.visitSchema(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SchemaContext = SchemaContext;
class AttributesContext extends ParserRuleContext_1.ParserRuleContext {
    attribute(i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(UONParser.COMMA);
        }
        else {
            return this.getToken(UONParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_attributes; }
    // @Override
    enterRule(listener) {
        if (listener.enterAttributes) {
            listener.enterAttributes(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAttributes) {
            listener.exitAttributes(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttributes) {
            return visitor.visitAttributes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttributesContext = AttributesContext;
class AttributeContext extends ParserRuleContext_1.ParserRuleContext {
    pair_key() {
        return this.getRuleContext(0, Pair_keyContext);
    }
    COLON() { return this.getToken(UONParser.COLON, 0); }
    validation_properties() {
        return this.getRuleContext(0, Validation_propertiesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_attribute; }
    // @Override
    enterRule(listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttributeContext = AttributeContext;
class Schema_presentationsContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.getToken(UONParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(UONParser.CLOSE_PAR, 0); }
    schema_presentation(i) {
        if (i === undefined) {
            return this.getRuleContexts(Schema_presentationContext);
        }
        else {
            return this.getRuleContext(i, Schema_presentationContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(UONParser.COMMA);
        }
        else {
            return this.getToken(UONParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_schema_presentations; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema_presentations) {
            listener.enterSchema_presentations(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema_presentations) {
            listener.exitSchema_presentations(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSchema_presentations) {
            return visitor.visitSchema_presentations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Schema_presentationsContext = Schema_presentationsContext;
class Schema_presentationContext extends ParserRuleContext_1.ParserRuleContext {
    schema_name() {
        return this.tryGetRuleContext(0, Schema_nameContext);
    }
    schema_uuid() {
        return this.tryGetRuleContext(0, Schema_uuidContext);
    }
    description() {
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_schema_presentation; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema_presentation) {
            listener.enterSchema_presentation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema_presentation) {
            listener.exitSchema_presentation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSchema_presentation) {
            return visitor.visitSchema_presentation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Schema_presentationContext = Schema_presentationContext;
class Schema_nameContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(UONParser.COLON, 0); }
    string() {
        return this.getRuleContext(0, StringContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_schema_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema_name) {
            listener.enterSchema_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema_name) {
            listener.exitSchema_name(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSchema_name) {
            return visitor.visitSchema_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Schema_nameContext = Schema_nameContext;
class Schema_uuidContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(UONParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_schema_uuid; }
    // @Override
    enterRule(listener) {
        if (listener.enterSchema_uuid) {
            listener.enterSchema_uuid(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchema_uuid) {
            listener.exitSchema_uuid(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSchema_uuid) {
            return visitor.visitSchema_uuid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Schema_uuidContext = Schema_uuidContext;
class Validation_propertiesContext extends ParserRuleContext_1.ParserRuleContext {
    string_validation() {
        return this.tryGetRuleContext(0, String_validationContext);
    }
    number_validation() {
        return this.tryGetRuleContext(0, Number_validationContext);
    }
    boolean_validation() {
        return this.tryGetRuleContext(0, Boolean_validationContext);
    }
    url_validation() {
        return this.tryGetRuleContext(0, Url_validationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_validation_properties; }
    // @Override
    enterRule(listener) {
        if (listener.enterValidation_properties) {
            listener.enterValidation_properties(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValidation_properties) {
            listener.exitValidation_properties(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValidation_properties) {
            return visitor.visitValidation_properties(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Validation_propertiesContext = Validation_propertiesContext;
class String_validationContext extends ParserRuleContext_1.ParserRuleContext {
    STR_TYPE() { return this.getToken(UONParser.STR_TYPE, 0); }
    string_properties() {
        return this.tryGetRuleContext(0, String_propertiesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_string_validation; }
    // @Override
    enterRule(listener) {
        if (listener.enterString_validation) {
            listener.enterString_validation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString_validation) {
            listener.exitString_validation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString_validation) {
            return visitor.visitString_validation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.String_validationContext = String_validationContext;
class String_propertiesContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.getToken(UONParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(UONParser.CLOSE_PAR, 0); }
    string_property(i) {
        if (i === undefined) {
            return this.getRuleContexts(String_propertyContext);
        }
        else {
            return this.getRuleContext(i, String_propertyContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(UONParser.COMMA);
        }
        else {
            return this.getToken(UONParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_string_properties; }
    // @Override
    enterRule(listener) {
        if (listener.enterString_properties) {
            listener.enterString_properties(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString_properties) {
            listener.exitString_properties(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString_properties) {
            return visitor.visitString_properties(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.String_propertiesContext = String_propertiesContext;
class String_propertyContext extends ParserRuleContext_1.ParserRuleContext {
    string_max() {
        return this.tryGetRuleContext(0, String_maxContext);
    }
    string_min() {
        return this.tryGetRuleContext(0, String_minContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_string_property; }
    // @Override
    enterRule(listener) {
        if (listener.enterString_property) {
            listener.enterString_property(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString_property) {
            listener.exitString_property(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString_property) {
            return visitor.visitString_property(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.String_propertyContext = String_propertyContext;
class String_maxContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(UONParser.COLON, 0); }
    string() {
        return this.getRuleContext(0, StringContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_string_max; }
    // @Override
    enterRule(listener) {
        if (listener.enterString_max) {
            listener.enterString_max(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString_max) {
            listener.exitString_max(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString_max) {
            return visitor.visitString_max(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.String_maxContext = String_maxContext;
class String_minContext extends ParserRuleContext_1.ParserRuleContext {
    MINUTE() { return this.getToken(UONParser.MINUTE, 0); }
    COLON() { return this.getToken(UONParser.COLON, 0); }
    string() {
        return this.getRuleContext(0, StringContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_string_min; }
    // @Override
    enterRule(listener) {
        if (listener.enterString_min) {
            listener.enterString_min(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString_min) {
            listener.exitString_min(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString_min) {
            return visitor.visitString_min(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.String_minContext = String_minContext;
class Url_validationContext extends ParserRuleContext_1.ParserRuleContext {
    URL_TYPE() { return this.getToken(UONParser.URL_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_url_validation; }
    // @Override
    enterRule(listener) {
        if (listener.enterUrl_validation) {
            listener.enterUrl_validation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUrl_validation) {
            listener.exitUrl_validation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUrl_validation) {
            return visitor.visitUrl_validation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Url_validationContext = Url_validationContext;
class Boolean_validationContext extends ParserRuleContext_1.ParserRuleContext {
    BOOL_TYPE() { return this.getToken(UONParser.BOOL_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_boolean_validation; }
    // @Override
    enterRule(listener) {
        if (listener.enterBoolean_validation) {
            listener.enterBoolean_validation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoolean_validation) {
            listener.exitBoolean_validation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolean_validation) {
            return visitor.visitBoolean_validation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Boolean_validationContext = Boolean_validationContext;
class Number_validationContext extends ParserRuleContext_1.ParserRuleContext {
    number_validation_type() {
        return this.getRuleContext(0, Number_validation_typeContext);
    }
    number_properties() {
        return this.tryGetRuleContext(0, Number_propertiesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number_validation; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber_validation) {
            listener.enterNumber_validation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber_validation) {
            listener.exitNumber_validation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber_validation) {
            return visitor.visitNumber_validation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Number_validationContext = Number_validationContext;
class Number_propertiesContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAR() { return this.getToken(UONParser.OPEN_PAR, 0); }
    CLOSE_PAR() { return this.getToken(UONParser.CLOSE_PAR, 0); }
    number_property(i) {
        if (i === undefined) {
            return this.getRuleContexts(Number_propertyContext);
        }
        else {
            return this.getRuleContext(i, Number_propertyContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(UONParser.COMMA);
        }
        else {
            return this.getToken(UONParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number_properties; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber_properties) {
            listener.enterNumber_properties(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber_properties) {
            listener.exitNumber_properties(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber_properties) {
            return visitor.visitNumber_properties(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Number_propertiesContext = Number_propertiesContext;
class Number_propertyContext extends ParserRuleContext_1.ParserRuleContext {
    number_max() {
        return this.tryGetRuleContext(0, Number_maxContext);
    }
    number_min() {
        return this.tryGetRuleContext(0, Number_minContext);
    }
    quantity_validation() {
        return this.tryGetRuleContext(0, Quantity_validationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number_property; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber_property) {
            listener.enterNumber_property(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber_property) {
            listener.exitNumber_property(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber_property) {
            return visitor.visitNumber_property(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Number_propertyContext = Number_propertyContext;
class Number_maxContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(UONParser.COLON, 0); }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number_max; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber_max) {
            listener.enterNumber_max(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber_max) {
            listener.exitNumber_max(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber_max) {
            return visitor.visitNumber_max(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Number_maxContext = Number_maxContext;
class Number_minContext extends ParserRuleContext_1.ParserRuleContext {
    MINUTE() { return this.getToken(UONParser.MINUTE, 0); }
    COLON() { return this.getToken(UONParser.COLON, 0); }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number_min; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber_min) {
            listener.enterNumber_min(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber_min) {
            listener.exitNumber_min(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber_min) {
            return visitor.visitNumber_min(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Number_minContext = Number_minContext;
class Number_validation_typeContext extends ParserRuleContext_1.ParserRuleContext {
    FLOAT_TYPE() { return this.tryGetToken(UONParser.FLOAT_TYPE, 0); }
    INT_TYPE() { return this.tryGetToken(UONParser.INT_TYPE, 0); }
    UINT_TYPE() { return this.tryGetToken(UONParser.UINT_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_number_validation_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber_validation_type) {
            listener.enterNumber_validation_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber_validation_type) {
            listener.exitNumber_validation_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber_validation_type) {
            return visitor.visitNumber_validation_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Number_validation_typeContext = Number_validation_typeContext;
class Quantity_validationContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(UONParser.COLON, 0); }
    quantity_validation_types() {
        return this.getRuleContext(0, Quantity_validation_typesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_quantity_validation; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantity_validation) {
            listener.enterQuantity_validation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantity_validation) {
            listener.exitQuantity_validation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantity_validation) {
            return visitor.visitQuantity_validation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Quantity_validationContext = Quantity_validationContext;
class Quantity_validation_typesContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_quantity_validation_types; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantity_validation_types) {
            listener.enterQuantity_validation_types(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantity_validation_types) {
            listener.exitQuantity_validation_types(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantity_validation_types) {
            return visitor.visitQuantity_validation_types(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Quantity_validation_typesContext = Quantity_validation_typesContext;
class BooleanContext extends ParserRuleContext_1.ParserRuleContext {
    true() {
        return this.tryGetRuleContext(0, TrueContext);
    }
    false() {
        return this.tryGetRuleContext(0, FalseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_boolean; }
    // @Override
    enterRule(listener) {
        if (listener.enterBoolean) {
            listener.enterBoolean(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoolean) {
            listener.exitBoolean(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanContext = BooleanContext;
class TrueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_true; }
    // @Override
    enterRule(listener) {
        if (listener.enterTrue) {
            listener.enterTrue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrue) {
            listener.exitTrue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTrue) {
            return visitor.visitTrue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TrueContext = TrueContext;
class FalseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_false; }
    // @Override
    enterRule(listener) {
        if (listener.enterFalse) {
            listener.enterFalse(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFalse) {
            listener.exitFalse(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFalse) {
            return visitor.visitFalse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FalseContext = FalseContext;
class NullContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return UONParser.RULE_null; }
    // @Override
    enterRule(listener) {
        if (listener.enterNull) {
            listener.enterNull(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNull) {
            listener.exitNull(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNull) {
            return visitor.visitNull(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NullContext = NullContext;
//# sourceMappingURL=UONParser.js.map