import * as vscode from 'vscode';

import { UONParser } from "../../generated/UONParser";
import { UONLexer } from "../../generated/UONLexer";

const chai = require('chai');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');

import {
    CharStreams, CommonTokenStream
} from "antlr4ts";
import { UonCompletionErrorStrategy } from "../../error/UonCompletionErrorStrategy";

import { UonASTVisitor } from '../../outline/UonASTVisitor';

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

// Begin of the tests.
suite("Uon outline", function () {

    test("Test outline 1", () => {
        //Antlr setup
        const inputStream = CharStreams.fromString('!map {key : value}');
        const lexer = new UONLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new UONParser(tokenStream);
        parser.removeErrorListeners();

        const errorStrategy = new UonCompletionErrorStrategy();
        parser.errorHandler = errorStrategy;

        parser.buildParseTree = true;
        let tree = parser.uon();

        // Create the visitor
        const uonASTVisitor = new UonASTVisitor();

        // Use the visitor entry point
        const ast = uonASTVisitor.visit(tree);

        let symbols: vscode.DocumentSymbol[] = [];
        let nodes = [symbols];

        for (var i = 0; i < ast.length; i++) {
            if (ast[i] instanceof vscode.DocumentSymbol) { // Pour ignorer les tokens de retour à la ligne
                nodes[nodes.length - 1].push(ast[i]);
            }
        }

        const start = new vscode.Position(0, 12);
        const end = new vscode.Position(0, 17);
        const range = new vscode.Range(start, end);

        let structure = new vscode.DocumentSymbol(
            "key",
            "value",
            vscode.SymbolKind.String,
            range, range);

        expect(nodes[0]).to.deep.equalInAnyOrder([structure]);
    });

    test("Test outline 2", () => {
        const inputStream = CharStreams.fromString('{key : 12}');
        const lexer = new UONLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new UONParser(tokenStream);
        parser.removeErrorListeners();

        const errorStrategy = new UonCompletionErrorStrategy();
        parser.errorHandler = errorStrategy;

        parser.buildParseTree = true;
        let tree = parser.uon();

        const uonASTVisitor = new UonASTVisitor();

        const ast = uonASTVisitor.visit(tree);

        let symbols: vscode.DocumentSymbol[] = [];
        let nodes = [symbols];

        for (var i = 0; i < ast.length; i++) {
            if (ast[i] instanceof vscode.DocumentSymbol) {
                nodes[nodes.length - 1].push(ast[i]);
            }
        }

        const start = new vscode.Position(0, 7);
        const end = new vscode.Position(0, 9);
        const range = new vscode.Range(start, end);

        let structure = new vscode.DocumentSymbol(
            "key",
            "12",
            vscode.SymbolKind.Number,
            range, range);

        expect(nodes[0]).to.deep.equalInAnyOrder([structure]);
    });
});