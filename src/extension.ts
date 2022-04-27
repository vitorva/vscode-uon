'use strict';

import * as vscode from 'vscode';

import { UONLexer } from './generated/UONLexer';
import { UONParser } from "./generated/UONParser";


import {
    CharStreams, CommonTokenStream, TokenStream
} from "antlr4ts";

import * as c3 from 'antlr4-c3';

const possibleIdentifierPrefix = /[\w]$/;
const lineSeparator = /\n|\r|\r\n/g;
export type CursorPosition = { line: number; column: number };


export function findCursorTokenIndex(tokenStream: TokenStream, cursor: CursorPosition): number {
    // NOTE: cursor position is 1-based, while token's charPositionInLine is 0-based
    const cursorCol = cursor.column - 1;
    for (let i = 0; i < tokenStream.size; i++) {
      const t = tokenStream.get(i);
  
      const tokenStartCol = t.charPositionInLine;
      const tokenEndCol = tokenStartCol + (t.text as string).length;
      const tokenStartLine = t.line;
      const tokenEndLine =
        t.type !== UONLexer.WS || !t.text ? tokenStartLine : tokenStartLine + (t.text.match(lineSeparator)?.length || 0);
  
      // NOTE: tokenEndCol makes sense only of tokenStartLine === tokenEndLine
      if (tokenEndLine > cursor.line || (tokenStartLine === cursor.line && tokenEndCol > cursorCol)) {
        if (
          i > 0 &&
          tokenStartLine === cursor.line &&
          tokenStartCol === cursorCol &&
          possibleIdentifierPrefix.test(tokenStream.get(i - 1).text as string)
        ) {
          return i - 1;
        } else if (tokenStream.get(i).type === UONLexer.WS) {
          return i + 1;
        } else return i;
      }
    }
    return 0;
  }


export function activate(context: vscode.ExtensionContext) {

	const provider1 = vscode.languages.registerCompletionItemProvider({scheme: "file", language: "uon"}, {

		async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

            //Chaine de texte de l'éditeur
            const inputStream = CharStreams.fromString(document.getText());

            const splitted = document.getText().split(/(\s+)/);
            console.log("splitted", splitted);

            const lexer = new UONLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            
            const parser = new UONParser(tokenStream);
            let tree = parser.uon();

            const core = new c3.CodeCompletionCore(parser);
            core.collectCandidates;

            let line = position.line;
            let column = position.character;

            const completionTokenIndex = findCursorTokenIndex(tokenStream, {
                line ,
                column,
              });

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
         
            // 1) At the input start.
            //Position du curseur au lieu de 0
            console.log("splitted.length", splitted.length -1);
            let candidates = core.collectCandidates(splitted.length -1);

            let keywords : vscode.CompletionItem[] = [];
            for (let candidate of candidates.tokens) {
                let str = parser.vocabulary.getDisplayName(candidate[0]);

                //https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
                str = str.replace(/'/g,"");

                keywords.push( new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword));
            }

            return keywords;
		}
	}, "!", ":"," ");


	context.subscriptions.push(provider1);

    const hover = vscode.languages.registerHoverProvider({scheme: "file", language: "uon"}, {
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