import * as vscode from 'vscode';

import { UONParser } from "../../generated/UONParser";
import { UONLexer } from "../../generated/UONLexer";

const chai = require('chai');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');

import {
    CharStreams, CommonTokenStream
} from "antlr4ts";
import { UonCompletionErrorStrategy } from "../../error/UonCompletionErrorStrategy";
import { expect } from 'chai';

chai.use(deepEqualInAnyOrder);

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
        let tree = parser.uon();  

        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(0, 0);
        const range = new vscode.Range(start, end);

        let structure = new vscode.DocumentSymbol(
            "test",
            " ",
            vscode.SymbolKind.String,
            range, range);

        let structure2 = new vscode.DocumentSymbol(
            "test",
            " ",
            vscode.SymbolKind.String,
            range, range);

        expect(structure).to.deep.equals(structure2);
    });
});