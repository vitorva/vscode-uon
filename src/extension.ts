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

class UonCompletionErrorStrategy extends DefaultErrorStrategy {
  protected singleTokenDeletion(recognizer: Parser): Token | undefined {
    return undefined;
  }

  public getOK(){
    return this.ok;
  }

  private ok = false;
  protected consumeUntil(recognizer: Parser, set: IntervalSet): void {
      
      let test = recognizer.currentToken;
      
      this.ok = true;
     
  }

  
  protected getErrorRecoverySet(recognizer: Parser): IntervalSet {
    const defaultRecoverySet = super.getErrorRecoverySet(recognizer);

    const soqlFieldFollowSet = new IntervalSet();
    
    soqlFieldFollowSet.add(UONLexer.COLON);

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
      parser.errorHandler = lol ;

      let tree = parser.uon();

      if(lol.getOK()){
        console.log("ICI");
      }

      console.log("tokenStream");
      console.log("tokenStreamSize", tokenStream.size);
      for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        console.log(t.text);
      }

      const index = tokenStream.get(tokenStream.size-1).type === UONLexer.EOF ? tokenStream.size : 0;

      const core = new c3.CodeCompletionCore(parser);
      core.collectCandidates;

      //core.preferredRules = new Set([
      //  UONParser.RULE_obj,
      //  UONParser.RULE_arr
      //]);

      /*
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
      */

      let candidates = core.collectCandidates(index);

      let keywords: vscode.CompletionItem[] = [];
      for (let candidate of candidates.tokens) {
        let str = parser.vocabulary.getDisplayName(candidate[0]);

        //https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
        str = str.replace(/'/g, "");

        keywords.push(new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword));
      }

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