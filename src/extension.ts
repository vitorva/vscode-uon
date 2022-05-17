'use strict';

import * as vscode from 'vscode';

import { UONLexer } from './generated/UONLexer';
import { UONParser } from "./generated/UONParser";

import {
  ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, TokenStream, RecognitionException, Recognizer, Token, Parser
} from "antlr4ts";

import { DefaultErrorStrategy } from 'antlr4ts/DefaultErrorStrategy';
import { IntervalSet } from 'antlr4ts/misc/IntervalSet';

import * as c3 from 'antlr4-c3';

import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver';

class UonCompletionErrorStrategy extends DefaultErrorStrategy {
  protected singleTokenDeletion(recognizer: Parser): Token | undefined {
    return undefined;
  }

  protected consumeUntil(recognizer: Parser, set: IntervalSet): void {
    console.log(set);
  }

  public recover(recognizer: Parser, e: RecognitionException): void {
              //		System.out.println("recover in "+recognizer.getRuleInvocationStack()+
        //						   " index="+recognizer.inputStream.index+
        //						   ", lastErrorIndex="+
        //						   lastErrorIndex+
        //						   ", states="+lastErrorStates);

        console.log(this.lastErrorStates);
        if (this.lastErrorIndex === recognizer.inputStream.index &&
          this.lastErrorStates &&
          this.lastErrorStates.contains(recognizer.state)) {
          // uh oh, another error at same token index and previously-visited
          // state in ATN; must be a case where LT(1) is in the recovery
          // token set so nothing got consumed. Consume a single token
          // at least to prevent an infinite loop; this is a failsafe.
          //			System.err.println("seen error condition before index="+
          //							   lastErrorIndex+", states="+lastErrorStates);
          //			System.err.println("FAILSAFE consumes "+recognizer.getTokenNames()[recognizer.inputStream.LA(1)]);
          //recognizer.consume();
      }
    this.lastErrorIndex = recognizer.inputStream.index;
    console.log("lastErrorIndex", this.lastErrorIndex);
  }

  protected getErrorRecoverySet(recognizer: Parser): IntervalSet {
    const defaultRecoverySet = super.getErrorRecoverySet(recognizer);

    const soqlFieldFollowSet = new IntervalSet();

    soqlFieldFollowSet.add(UONLexer.COLON);

    let temp = []
    for (let i = 0; i < recognizer.inputStream.size; i++) {
      temp.push(recognizer.inputStream.get(i).text);
    }
    console.log(temp);

    console.log(super.lastErrorIndex);

    return soqlFieldFollowSet;
  }

}

export class ErrorListener implements ANTLRErrorListener<CommonToken> {
  public errorCount = 0;

  public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
    charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
    ++this.errorCount;
    console.log("ERROR", this.errorCount);
  }

}

export function activate(context: vscode.ExtensionContext) {

  const provider1 = vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "uon" }, {

    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
      //let line = position.line;
      //let column = position.character;

      // https://stackoverflow.com/questions/65261663/vscode-how-to-get-position-of-cursor-in-the-document
      // Alternative :
      // https://stackoverflow.com/questions/64561781/vscode-api-get-position-of-last-character-of-line
      let activeEditor = vscode.window.activeTextEditor;
      let curPos = activeEditor?.selection.active;
      let offset = document.offsetAt(curPos!!);

      //console.log(offset);

      const text = document.getText().slice(0, offset);
      console.log(text);
      console.log(text.length);

      const inputStream = CharStreams.fromString(text);
      const lexer = new UONLexer(inputStream);
      
      const tokenStream = new CommonTokenStream(lexer);

      const parser = new UONParser(tokenStream);

      //let errorListener = new ErrorListener();
      //parser.addErrorListener(errorListener);

      parser.removeErrorListeners();

      const lol = new UonCompletionErrorStrategy();
      parser.errorHandler = lol;

      let tree = parser.uon();

      
      console.log(tree);

      console.log("tokenStream");
      console.log("tokenStreamSize", tokenStream.size);
      let testArr = []
      for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        //console.log(t.text);
        testArr.push(t.text);
      }

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
        let str = parser.vocabulary.getDisplayName(candidate[0]);

        //https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
        str = str.replace(/'/g, "");

        let item = new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword);
        const range = document.getWordRangeAtPosition(position);
        item.range = range;

        keywords.push(item);
      }

      //TODO        
      const snippetCompletion = new vscode.CompletionItem('description : ... , name : ... , uuid : ... ');
      snippetCompletion.insertText = new vscode.SnippetString('description : ${1}, name : ${2}, uuid : ${3}');
      
      //snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
      //keywords.push(new vscode.newS('(SELECT ... FROM ...)', '(SELECT $2 FROM $1)'));

      keywords.push(snippetCompletion);

      console.log(keywords);
      return keywords;
    }
  }, " ");

  context.subscriptions.push(provider1);

  const hover = vscode.languages.registerHoverProvider({ scheme: "file", language: "uon" }, {
    provideHover(document, position, token) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);

      if (word === "!str") {
        return new vscode.Hover({
          language: "String encoded in UTF-8",
          value: "String encoded in UTF-8"
        });
      }
    }
  });

  context.subscriptions.push(hover);
}