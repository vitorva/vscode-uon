/*
 * This file is released under the MIT license.
 * Copyright (c) 2016, 2021 Mike Lischke
 *
 * See LICENSE file for more info.
 */

// spell-checker: disable

import { expect, assert } from "chai";
import { UONParser } from "../../generated/UONParser";
import { UONLexer } from "../../generated/UONLexer";

import * as c3 from 'antlr4-c3';

import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token,
} from "antlr4ts";

// Some helper functions + types to create certain setups.

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

    test("Uon parser", () => {
            // No customization happens here, so the c3 engine only returns lexer tokens.
            const inputStream = CharStreams.fromString('!map {key : "value"}');
            const lexer = new UONLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new UONParser(tokenStream);
            const errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            parser.uon();
            expect(errorListener.errorCount, "Test 1").equals(0);

            const core = new c3.CodeCompletionCore(parser);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);
            expect(candidates.tokens.size, "Test 2").to.equal(8);

            /*
            expect(candidates.tokens.has(ExprLexer.VAR), "Test 3").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.LET), "Test 4").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 5").to.equal(true);

            expect(candidates.tokens.get(ExprLexer.VAR), "Test 6").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.LET), "Test 7").to.eql([ExprLexer.ID, ExprLexer.EQUAL]);
            expect(candidates.tokens.get(ExprLexer.ID), "Test 8").to.eql([]);

            // 2) On the first whitespace. In real implementations you would do some additional checks where in the
            //    whitespace the caret is, as the outcome is different depending on that position.
            candidates = core.collectCandidates(1);
            expect(candidates.tokens.size, "Test 9").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 10").to.equal(true);

            // 3) On the variable name ('c').
            candidates = core.collectCandidates(2);
            expect(candidates.tokens.size, "Test 11").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 12").to.equal(true);

            // 4) On the equal sign (ignoring whitespace positions from now on).
            candidates = core.collectCandidates(4);
            expect(candidates.tokens.size, "Test 13").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.EQUAL), "Test 14").to.equal(true);

            // 5) On the variable reference 'a'. But since we have not configure the c3 engine to return us var refs
            //    (or function refs for that matter) we only get an ID here.
            candidates = core.collectCandidates(6);
            expect(candidates.tokens.size, "Test 15").to.equal(1);
            expect(candidates.tokens.has(ExprLexer.ID), "Test 16").to.equal(true);

            // 6) On the '+' operator. Usually you would not show operators as candidates, but we have not set up the
            //    c3 engine yet to not return them.
            candidates = core.collectCandidates(8);
            expect(candidates.tokens.size, "Test 17").to.equal(5);
            expect(candidates.tokens.has(ExprLexer.PLUS), "Test 18").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.MINUS), "Test 19").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.MULTIPLY), "Test 20").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.DIVIDE), "Test 21").to.equal(true);
            expect(candidates.tokens.has(ExprLexer.OPEN_PAR), "Test 22").to.equal(true);
            */
    });
});