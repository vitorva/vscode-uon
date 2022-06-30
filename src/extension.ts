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

const hoverJson = require("./hover.json");

export function activate(context1: vscode.ExtensionContext) {

  const collection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection('test');

  const provider1 = vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "uon" }, {

    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

      // TODO : refactoring

      //Find cursor position
      let activeEditor = vscode.window.activeTextEditor;
      let curPos = activeEditor?.selection.active;
      let offset = document.offsetAt(curPos!!);

      //Retrieve text from start to cursor position
      const text = document.getText().slice(0, offset);
      console.log(text);
      console.log(text.length);

      //Antlr setup
      const inputStream = CharStreams.fromString(text);
      const lexer = new UONLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new UONParser(tokenStream);

      parser.removeErrorListeners();

      const errorStrategy = new UonCompletionErrorStrategy();
      parser.errorHandler = errorStrategy;

      parser.buildParseTree = true;
      let tree = parser.uon();  // Parse Tree

      console.log("tree.toStringTree", tree.toStringTree(parser));
      console.log("tokenStream");
      console.log("tokenStreamSize", tokenStream.size);

      let testArr = []
      for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        testArr.push(t.text);
      }


      //TODO : Function
      let index = 0;
      if (tokenStream.get(tokenStream.size - 1).type === UONLexer.EOF) {
        console.log(testArr);
        // si pas d'erreurs alors on veut la position du curseur actuelle
        index = tokenStream.size - 2;
        console.log(index);
      } else {
        console.log(testArr);
        console.log(testArr.lastIndexOf(''));
        //let  newArra =testArr.slice(0, testArr.lastIndexOf(''));
        let newArra = testArr;
        //newArra.push(parser.vocabulary.getDisplayName(UONLexer.EOF));
        console.log(newArra.length);

        for (let i = newArra.length - 1; i >= 0; i--) {
          if (newArra[i] === '') {
            newArra = testArr.slice(0, i);
          } else {
            index = newArra.length;
            break;
          }
        }
        //index = newArra.length- 1;
        index = newArra.length;
      }

      const core = new c3.CodeCompletionCore(parser);


      // TODO : RULES

      //core.preferredRules = new Set([
      //  UONParser.RULE_obj,
      //  UONParser.RULE_arr
      //]);


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

      let candidates = core.collectCandidates(index);

      const newCompletionItem = (
        text: string,
        kind: CompletionItemKind,
        extraOptions?: Partial<CompletionItem>
      ): CompletionItem => ({
        label: text,
        kind,
        ...extraOptions,
      });

      const newSnippetItem = (label: string, snippet: string, extraOptions?: Partial<CompletionItem>): CompletionItem =>
        newCompletionItem(label, CompletionItemKind.Snippet, {
          insertText: snippet,
          insertTextFormat: InsertTextFormat.Snippet,
          ...extraOptions,
        });

      let keywords: vscode.CompletionItem[] = [];
      for (let candidate of candidates.tokens) {
        console.log("valid", candidate[0]);
        let str = parser.vocabulary.getDisplayName(candidate[0]);

        //https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
        str = str.replace(/'/g, "");

        let item = new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword);
        const range = document.getWordRangeAtPosition(position);

        // TODO : Range pour texte collé

        //const range2 = new vscode.Range(new vscode.Position(position.line, position.character), position);

        /*
        if(tmp === null){
           tmp = range2 ;
        }else{
          item.range = tmp;
          tmp = range2;
        }
        */

        //item.range = range2

        /*
        if(tmp === null){
          tmp = new vscode.Position(position.line, position.character);
       }else{
         const range2 = new vscode.Range(new vscode.Position(tmp.line, tmp.character), position);
         item.range = range2;
         tmp = null;
       }
        */

        keywords.push(item);
      }

      //TODO snippet        
      //const snippetCompletion = new vscode.CompletionItem('description : ... , name : ... , uuid : ... ');
      //snippetCompletion.insertText = new vscode.SnippetString('description : ${1}, name : ${2}, uuid : ${3}');

      //snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
      //keywords.push(new vscode.newS('(SELECT ... FROM ...)', '(SELECT $2 FROM $1)'));
      //keywords.push(snippetCompletion);

      console.log(keywords);
      return keywords;

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
          new vscode.MarkdownString(hoverJson.content[word]))
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
