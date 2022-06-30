'use strict';

import * as vscode from 'vscode';

import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver';

import {
  ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token, Parser
} from "antlr4ts";

import { TerminalNode, RuleNode } from 'antlr4ts/tree';

import * as c3 from 'antlr4-c3';

import { UONLexer } from './generated/UONLexer';
import { BooleanContext, Json_pairContext, Json_seqContext, PairContext, StringContext, UONParser, Json_mapContext, NumberContext } from "./generated/UONParser";
import { UONVisitor } from './generated/UONVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { UonCompletionErrorStrategy } from './error/UonCompletionErrorStrategy';

const hoverJson = require("./hover.json");

// Visitor Approach
// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class UonASTVisitor extends AbstractParseTreeVisitor<any> implements UONVisitor<any> {

  level = 0;
  document: vscode.TextDocument;
  text: String;

  constructor(document: vscode.TextDocument, text: String) {
    super();
    this.document = document;
    this.text = text;
  }

  defaultResult() {
    return null;
  }

  shouldVisitNextChild(node: RuleNode, currentResult: any) {
    return true;
  }

  visitChildren(node: RuleNode) {
    let result: any;
    let n = node.childCount;
    if (n > 1) {
      result = [];
    }
    for (let i = 0; i < n; i++) {
      if (!this.shouldVisitNextChild(node, result)) {
        break;
      }
      let c = node.getChild(i);
      let childResult = c.accept(this);
      if (n > 1) {
        result.push(childResult);
      }
      else {
        result = childResult;
        return result;
      }
    }

    const flatResult = result.flat();
    return flatResult;
  }

  // TODO
  aggregateResult(aggregate: any, nextResult: any) {
    return null;
  }

  visitJson_map(ctx: Json_mapContext) {
    this.level = this.level + 1;
    var children = this.visitChildren(ctx);
    this.level = this.level - 1;
    console.log(children);

    if (this.level === 0) {
      var response = [];

      for (var i = 0; i < children.length; i++) {
        if (children[i] instanceof vscode.DocumentSymbol) {
          response.push(children[i]);
        }
      }
      return response;
    }

    const head = children.shift();

    const regex = /\r\n/g;

    var line = this.text.slice(0, head.stop).match(regex)?.length;

    var beginWord;
    var endWord;

    if (line === undefined) {
      line = 0;
      beginWord = head.start;
      endWord = head.stop;
    } else {
      console.log(this.text.slice(0, head.stop));

      const lastocc = this.text.slice(0, head.stop).lastIndexOf("\r\n");

      console.log(this.text.slice(0, head.stop).lastIndexOf("\r\n"));

      beginWord = head.start - lastocc;
      endWord = beginWord + head.text.length;
    }

    const start = new vscode.Position(line, beginWord);
    const end = new vscode.Position(line, endWord);
    const range = new vscode.Range(start, end);

    console.log(head.range);

    let jsonMap = new vscode.DocumentSymbol(
      " ",
      " ",
      vscode.SymbolKind.Object,
      range, range);

    for (var i = 0; i < children.length; i++) {
      if (children[i] instanceof vscode.DocumentSymbol) {
        jsonMap.children.push(children[i]);
      }
    }

    return [jsonMap];

  }

  visitPair(ctx: PairContext) {
    var children = this.visitChildren(ctx);
    console.log("visitPair", children);

    const head = children[0];
    const tail = children[children.length - 1];

    if (tail.kind === vscode.SymbolKind.Object) {
      tail.name = head.name;
    } else {
      const tmp = tail.name;
      tail.detail = tmp;
      tail.name = head.name;
    }

    for (var i = 0; i < children.length; i++) {
      if (children[i] instanceof vscode.DocumentSymbol) {
        console.log("name : ", children[i].name);
        console.log("name : ", children[i].name);
        console.log("detail : ", children[i].detail);
        console.log("kind : ", children[i].kind);
        console.log("vscode.SymbolKind : ", vscode.SymbolKind);
      }
    }

    return tail;
  }


  visitJson_pair(ctx: Json_pairContext) {
    var children = this.visitChildren(ctx);
    console.log("visitJson_pair", children);

    const head = children[0];
    const tail = children[children.length - 1];

    if (tail.kind === vscode.SymbolKind.Object) {
      tail.name = head.name;
    } else {
      const tmp = tail.name;
      tail.detail = tmp;
      tail.name = head.name;
    }

    for (var i = 0; i < children.length; i++) {
      if (children[i] instanceof vscode.DocumentSymbol) {
        console.log("name : ", children[i].name);
        console.log("name : ", children[i].name);
        console.log("detail : ", children[i].detail);
        console.log("kind : ", children[i].kind);
        console.log("vscode.SymbolKind : ", vscode.SymbolKind);
      }
    }

    return tail;
  }

  visitJson_seq(ctx: Json_seqContext) {
    this.level = this.level + 1;
    var children = this.visitChildren(ctx);
    this.level = this.level - 1;

    if (this.level === 0) {
      var response = [];

      for (var i = 0; i < children.length; i++) {
        if (children[i] instanceof vscode.DocumentSymbol) {
          response.push(children[i]);
        }
      }
      return response;
    }

    const head = children.shift();

    const regex = /\r\n/g;

    var line = this.text.slice(0, head.stop).match(regex)?.length;

    var beginWord;
    var endWord;

    if (line === undefined) {
      line = 0;
      beginWord = head.start;
      endWord = head.stop;
    } else {
      console.log(this.text.slice(0, head.stop));

      const lastocc = this.text.slice(0, head.stop).lastIndexOf("\r\n");

      console.log(this.text.slice(0, head.stop).lastIndexOf("\r\n"));

      beginWord = head.start - lastocc;
      endWord = beginWord + head.text.length;
    }

    const start = new vscode.Position(line, beginWord);
    const end = new vscode.Position(line, endWord);
    const range = new vscode.Range(start, end);

    console.log(head.range);

    let jsonSeq = new vscode.DocumentSymbol(
      " ",
      " ",
      vscode.SymbolKind.Array,
      range, range);

    for (var i = 0; i < children.length; i++) {
      if (children[i] instanceof vscode.DocumentSymbol) {
        jsonSeq.children.push(children[i]);
      }
    }

    return [jsonSeq];
  }

  visitString?(ctx: StringContext) {
    const child = this.visitChildren(ctx);
    const regex = /\r\n/g;

    var line = this.text.slice(0, child.stop).match(regex)?.length;

    var beginWord;
    var endWord;

    if (line === undefined) {
      line = 0;
      beginWord = child.start;
      endWord = child.stop;
    } else {
      console.log(this.text.slice(0, child.stop));

      const lastocc = this.text.slice(0, child.stop).lastIndexOf("\r\n");

      console.log(this.text.slice(0, child.stop).lastIndexOf("\r\n"));

      beginWord = child.start - lastocc;
      endWord = beginWord + child.text.length;
    }

    const start = new vscode.Position(line, beginWord);
    const end = new vscode.Position(line, endWord);
    const range = new vscode.Range(start, end);

    let string = new vscode.DocumentSymbol(
      child.text,
      " ",
      vscode.SymbolKind.String,
      range, range);

    return string;
  }

  visitBoolean(ctx: BooleanContext) {
    const child = this.visitChildren(ctx);
    const regex = /\r\n/g;

    var line = this.text.slice(0, child.stop).match(regex)?.length;

    var beginWord;
    var endWord;

    if (line === undefined) {
      line = 0;
      beginWord = child.start;
      endWord = child.stop;
    } else {
      console.log(this.text.slice(0, child.stop));

      const lastocc = this.text.slice(0, child.stop).lastIndexOf("\r\n");

      console.log(this.text.slice(0, child.stop).lastIndexOf("\r\n"));

      beginWord = child.start - lastocc;
      endWord = beginWord + child.text.length;
    }

    const start = new vscode.Position(line, beginWord);
    const end = new vscode.Position(line, endWord);
    const range = new vscode.Range(start, end);

    let boolean = new vscode.DocumentSymbol(
      child.text,
      " ",
      vscode.SymbolKind.Boolean,
      range, range);

    return boolean;
  }

  visitNumber(ctx: NumberContext) {
    const child = this.visitChildren(ctx);
    const regex = /\r\n/g;

    var line = this.text.slice(0, child.stop).match(regex)?.length;

    var beginWord;
    var endWord;

    if (line === undefined) {
      line = 0;
      beginWord = child.start;
      endWord = child.stop;
    } else {
      console.log(this.text.slice(0, child.stop));

      const lastocc = this.text.slice(0, child.stop).lastIndexOf("\r\n");

      console.log(this.text.slice(0, child.stop).lastIndexOf("\r\n"));

      beginWord = child.start - lastocc;
      endWord = beginWord + child.text.length;
    }

    const start = new vscode.Position(line, beginWord);
    const end = new vscode.Position(line, endWord);
    const range = new vscode.Range(start, end);

    let number = new vscode.DocumentSymbol(
      child.text,
      " ",
      vscode.SymbolKind.Number,
      range, range);

    return number;
  }

  visitTerminal(node: TerminalNode) {
    console.log("Node", node)
    console.log("Node symbol", node._symbol);
    console.log("Node start", node._symbol.startIndex);
    console.log("Node stop", node._symbol.stopIndex);

    // TODO aussi retourner et traiter start et stop index
    const test = {
      "text": node.text,
      "start": node._symbol.startIndex,
      "stop": node._symbol.stopIndex
    }
    return test;
  }
}

/*
// TODO : Improves behaviour
class UonCompletionErrorStrategy extends DefaultErrorStrategy {
  protected singleTokenDeletion(recognizer: Parser): Token | undefined {
    return super.singleTokenDeletion(recognizer);
  }

  protected consumeUntil(recognizer: Parser, set: IntervalSet): void {
    super.consumeUntil(recognizer, set);
  }

  public recover(recognizer: Parser, e: RecognitionException): void {
    super.recover(recognizer, e);
  }

  protected getErrorRecoverySet(recognizer: Parser): IntervalSet {
    return super.getErrorRecoverySet(recognizer);
  }
}
*/

export class ErrorListener implements ANTLRErrorListener<CommonToken> {

  level = 0;
  document: vscode.TextDocument;
  collection: vscode.DiagnosticCollection;
  context: vscode.ExtensionContext; // vscode.ExtensionContext !!!! ???
  parser: UONParser;

  constructor(document: vscode.TextDocument, collection: vscode.DiagnosticCollection, context: vscode.ExtensionContext, parser: UONParser) {
    this.document = document;
    this.collection = collection;
    this.context = context;
    this.parser = parser;
  }

  public updateDiagnostics(document: vscode.TextDocument, collection: vscode.DiagnosticCollection, msg: string, range: vscode.Range): void {
    if (document) {
      collection.set(document.uri, [{
        code: '',
        message: msg,
        range: range,
        severity: vscode.DiagnosticSeverity.Error,
        source: '',
        relatedInformation: [
          new vscode.DiagnosticRelatedInformation(new vscode.Location(document.uri, range), "")
        ]
      }]);
    } else {
      collection.clear();
    }
  }

  public errorCount = 0;

  public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
    charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
    // ANTLRErrorListener -> ANTLRErrorStrategy -> DefaultErrorStrategy.ts 
    //  - notifyErrorListeners
    //  - e : RecognitionException
    //  - IntervalSet
    // Lien entre syntaxError et notifyErrorListeners ???
    const expectedTokensString = e?.expectedTokens?.toStringVocabulary(recognizer.vocabulary);
    const expectedTokens = e?.expectedTokens?.toArray();

    if (expectedTokensString === undefined) {
      //return
    }
    console.log(e?.message);


    if (expectedTokens !== undefined) {
      //return
      for (let index = 0; index < expectedTokens.length; index++) {
        const element = expectedTokens[index];
        console.log(this.parser.vocabulary.getDisplayName(element));

      }
    } else {
      // TODO
    }


    //console.log(this.parser.vocabulary.getDisplayName(expectedTokens[0]));

    if (this.errorCount > 0) {
      return
    }
    ++this.errorCount;

    console.log("ERROR", line + "-" + charPositionInLine + " : " + msg);

    console.log("charPositionInLine", charPositionInLine);

    if (vscode.window.activeTextEditor) {
      const range = new vscode.Range(new vscode.Position((line - 1), charPositionInLine), new vscode.Position((line - 1), charPositionInLine));
      this.updateDiagnostics(vscode.window.activeTextEditor.document, this.collection, msg, range);
    }
  }
}

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
