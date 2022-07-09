import { expect } from "chai";
import { UONParser } from "../../generated/UONParser";
import { UONLexer } from "../../generated/UONLexer";
import { UonASTVisitorTest } from './outline/UonASTVisitorTest';

import {
    CharStreams, CommonTokenStream
} from "antlr4ts";
import { UonCompletionErrorStrategy } from "../../error/UonCompletionErrorStrategy";


// Begin of the tests.
suite("Uon outline", function () {
   
    test("Test outline nodes", () => {
        //Antlr setup
        const inputStream = CharStreams.fromString('!map {key : "value"}');
        const lexer = new UONLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new UONParser(tokenStream);
        parser.removeErrorListeners();

        const errorStrategy = new UonCompletionErrorStrategy();
        parser.errorHandler = errorStrategy;

        parser.buildParseTree = true;
        let tree = parser.uon();  // parse Tree

        // Create the visitor
        const uonASTVisitorTest = new UonASTVisitorTest();

        // Use the visitor entry point
        const ast = uonASTVisitorTest.visit(tree);

        expect(ast).to.equal(2);

    });
});