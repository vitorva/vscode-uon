import { expect } from "chai";
import { UONParser } from "../../generated/UONParser";
import { UONLexer } from "../../generated/UONLexer";

import * as c3 from 'antlr4-c3';

import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token,
} from "antlr4ts";

export class ErrorListener implements ANTLRErrorListener<CommonToken> {
    public errorCount = 0;

    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        ++this.errorCount;
    }
}

// Begin of the tests.
suite("antlr4-c3", function () {
    this.slow(1000);

    test("Test completion 1", () => {
        const inputStream = CharStreams.fromString('!map {key : "value"}');
        const lexer = new UONLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);

        const parser = new UONParser(tokenStream);
        const errorListener = new ErrorListener();
        parser.addErrorListener(errorListener);
        parser.uon();
        expect(errorListener.errorCount, "Test 1").equals(0);

        const core = new c3.CodeCompletionCore(parser);
        core.ignoredTokens = new Set([
            UONLexer.OPEN_C_BRA,
            UONLexer.CLOSE_C_BRA,
            UONLexer.OPEN_S_BRA,
            UONLexer.CLOSE_S_BRA,
            UONLexer.OPEN_PAR,
            UONLexer.CLOSE_PAR,
            UONLexer.COMMA,
            UONLexer.COLON,
            UONLexer.QUOTED_STRING,
            UONLexer.UNQUOTED_STRING
        ]);

        // 1) At the input start.
        let candidates = core.collectCandidates(0);
        expect(candidates.tokens.size, "Test 2").to.equal(28);
        expect(candidates.tokens.has(UONLexer.MAPPING_TYPE), "Test 3").to.equal(true);

        candidates = core.collectCandidates(7);
        expect(candidates.tokens.size, "Test 4").to.equal(41);
    });

    test("Test completion 2", () => {
        const inputStream = CharStreams.fromString('{ motor : {weight : !int( unit : 12) 12}}');
        const lexer = new UONLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);

        const parser = new UONParser(tokenStream);
        const errorListener = new ErrorListener();
        parser.addErrorListener(errorListener);
        parser.uon();
        expect(errorListener.errorCount, "Test 1").equals(0);

        const core = new c3.CodeCompletionCore(parser);
        core.ignoredTokens = new Set([
            UONLexer.OPEN_C_BRA,
            UONLexer.CLOSE_C_BRA,
            UONLexer.OPEN_S_BRA,
            UONLexer.CLOSE_S_BRA,
            UONLexer.OPEN_PAR,
            UONLexer.CLOSE_PAR,
            UONLexer.COMMA,
            UONLexer.COLON,
            UONLexer.QUOTED_STRING,
            UONLexer.UNQUOTED_STRING
        ]);

        let candidates = core.collectCandidates(18);
        expect(candidates.tokens.size, "Test 2").to.equal(7);
    });
});