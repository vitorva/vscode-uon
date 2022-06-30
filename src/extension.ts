'use strict';

import * as vscode from 'vscode';

import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver';

import {
  CharStreams, CommonTokenStream
} from "antlr4ts";

import * as c3 from 'antlr4-c3';

import { UONLexer } from './generated/UONLexer';
import { UONParser } from "./generated/UONParser";
import { UonCompletionErrorStrategy } from './error/UonCompletionErrorStrategy';
import { UonASTVisitor } from './outline/UonASTVisitor';
import { ErrorListener } from './error/ErrorListener';
import { completionFor } from './completion/completion';

const hoverJson = require("./hover.json");

export function activate(context1: vscode.ExtensionContext) {

  const collection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection('test');

  const provider1 = vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "uon" }, {

    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
      //Find cursor position
      let activeEditor = vscode.window.activeTextEditor;
      let curPos = activeEditor?.selection.active;
      let offset = document.offsetAt(curPos!!);

      //Retrieve text from start to cursor position
      const text = document.getText().slice(0, offset);

      return completionFor(text);
    }
  }, " ", "\n", ".");

  context1.subscriptions.push(provider1);

  const hover = vscode.languages.registerHoverProvider({ scheme: "file", language: "uon" }, {
    provideHover(document, position, token) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      console.log(word);

      const hover = Object.keys(hoverJson.content);
      console.log(hover);


      if (hover.includes(word)) {
        console.log(hoverJson.content[word]);
        return new vscode.Hover(
          new vscode.MarkdownString(hoverJson.content[word]));
      }

      return;
    }
  });

  context1.subscriptions.push(hover);

  context1.subscriptions.push(
    vscode.languages.registerDocumentSymbolProvider(
      { scheme: "file", language: "uon" },
      new UonConfigDocumentSymbolProvider(collection, context1)
    )
  );
}

class UonConfigDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

  collection: vscode.DiagnosticCollection;
  context: vscode.ExtensionContext; // vscode.ExtensionContext ?

  constructor(collection: vscode.DiagnosticCollection, context: vscode.ExtensionContext) {
    this.collection = collection;
    this.context = context;
  }

  public provideDocumentSymbols(
    document: vscode.TextDocument,
    token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
    return new Promise((resolve, reject) => {

      //Find cursor position
      let activeEditor = vscode.window.activeTextEditor;
      let curPos = activeEditor?.selection.active;
      let offset = document.offsetAt(curPos!!);

      //Retrieve text from start to cursor position
      const text = document.getText();

      //Antlr setup
      const inputStream = CharStreams.fromString(text);
      const lexer = new UONLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new UONParser(tokenStream);

      parser.removeErrorListeners();

      this.collection.clear()
      let errorListener = new ErrorListener(document, this.collection, this.context, parser);
      parser.addErrorListener(errorListener);

      parser.buildParseTree = true;
      let tree = parser.uon();  // parse Tree

      // Create the visitor
      const uonASTVisitor = new UonASTVisitor(document, text);

      // Use the visitor entry point
      const ast = uonASTVisitor.visit(tree);

      console.log("AST", ast);

      let symbols: vscode.DocumentSymbol[] = [];
      let nodes = [symbols];

      // the ast coulb be an array []
      for (var i = 0; i < ast.length; i++) {
        nodes[nodes.length - 1].push(ast[i]);
      }

      resolve(symbols);
    });
  }
}
