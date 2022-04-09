'use strict';

// src/extension.ts

import * as vscode from 'vscode';

import * as fs from "fs";
import * as path from "path";

import { ExprParser } from "./generated/ExprParser";
import { ExprLexer } from "./generated/ExprLexer";
import { CPP14Parser } from "./generated/CPP14Parser";
import { CPP14Lexer } from "./generated/CPP14Lexer";
import { UONParser } from "./generated/UONParser";
import { UONLexer } from "./generated/UONLexer";

import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver';

import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token, TokenStream
} from "antlr4ts";

import * as c3 from 'antlr4-c3';
import { ScopedSymbol, Symbol } from 'antlr4-c3';

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

    context.subscriptions.push(
        vscode.languages.registerDocumentSymbolProvider(
            {scheme: "file", language: "uon"}, 
            new UonConfigDocumentSymbolProvider()
        )
    );

	const provider1 = vscode.languages.registerCompletionItemProvider({scheme: "file", language: "uon"}, {

		async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

            /*
			// a simple completion item which inserts `Hello World!`
			const simpleCompletion = new vscode.CompletionItem('Hello World!');

			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('Good part of the day');
			snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
			const docs : any = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
			snippetCompletion.documentation = docs;
			docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('console');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

			// a completion item that retriggers IntelliSense when being accepted,
			// the `command`-property is set which the editor will execute after 
			// completion has been inserted. Also, the `insertText` is set so that 
			// a space is inserted after `new`
			const commandCompletion = new vscode.CompletionItem('new');
			commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			commandCompletion.insertText = 'new ';
			commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// return all completion items as array
			return [
				simpleCompletion,
				snippetCompletion,
				commitCharacterCompletion,
				commandCompletion
			];
            */

            //Chaine de texte de l'éditeur
            const inputStream = CharStreams.fromString(document.getText());


            const splitted = document.getText().split(/(\s+)/);
            console.log(splitted);

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
              
            // 1) At the input start.
            //Position du curseur au lieu de 0
            console.log("splitted.length", splitted.length -1);
            let candidates = core.collectCandidates(splitted.length -1);


            let keywords : vscode.CompletionItem[] = [];
            for (let candidate of candidates.tokens) {
                    
                //for (let moreCandidates of candidate[1]) {
                //    keywords.push(new vscode.CompletionItem(parser.vocabulary.getDisplayName(moreCandidates), vscode.CompletionItemKind.Keyword));
                //}

                keywords.push( new vscode.CompletionItem(parser.vocabulary.getDisplayName(candidate[0]), vscode.CompletionItemKind.Keyword));
            }

    
            //const symbolTable = new c3.SymbolTable("test", { allowDuplicateSymbols: false });
            //const lol = symbolTable.getSymbolsOfType(c3.Symbol);

            /*
            for (let candidate of candidates.rules) {
                switch (candidate[0]) {
                  case UONParser.RULE_obj: {
                      console.log("SUPER", parser.vocabulary.getDisplayName(candidate[0]));
                    
                    let variables = await symbolTable.getSymbolsOfType(c3.VariableSymbol);
                    for (let variable of variables)
                      {keywords.push(new vscode.CompletionItem(variable.name, vscode.CompletionItemKind.Keyword));}
                    break;
                    
                  }
                }
              }
            */
            return keywords;
		}
	}, "."," ");

    const provider2 = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('console.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(provider1, provider2);

    const hover = vscode.languages.registerHoverProvider({scheme: "file", language: "uon"}, {
        provideHover(document, position, token) {

            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            if (word == "HELLO") {

                return new vscode.Hover({
                    language: "Hello language",
                    value: "Hello Value"
                });
            }
        }
    });

    context.subscriptions.push(hover)
}

class UonConfigDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

    private format(cmd: string):string{
        return cmd.substr(1).toLowerCase().replace(/^\w/, c => c.toUpperCase())
    }

    public provideDocumentSymbols(
        document: vscode.TextDocument,
        token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> 
        {
        return new Promise((resolve, reject) => 
        {
            let symbols: vscode.DocumentSymbol[] = [];
            let nodes = [symbols]
            let inside_marker = false
            let inside_run = false
            let inside_userinput = false

            let symbolkind_marker = vscode.SymbolKind.Field
            let symbolkind_run = vscode.SymbolKind.Event
            let symbolkind_cmd = vscode.SymbolKind.Function

            for (var i = 0; i < document.lineCount; i++) {
                var line = document.lineAt(i);

                let tokens = line.text.split(" ")

                if (line.text.startsWith("#BEGIN")) {
					console.log("line.range", line.range)

                    let marker_symbol = new vscode.DocumentSymbol(
                        this.format(tokens[0]) + " " + tokens[1],
                        'Component',
                        symbolkind_marker,
                        line.range, line.range)


                    nodes[nodes.length-1].push(marker_symbol)
                    if (!inside_marker) {
                        nodes.push(marker_symbol.children)
                        inside_marker = true
                    }
                    // marker_symbol.children.push(_boot)
                }
                else if (line.text.startsWith("#END")) {
                    // TODO check if nodes has length 1 before popping.
                    if (inside_marker) {
                        nodes.pop()
                        inside_marker = false
                    }
                }
                else if (line.text.startsWith("#RUN") || line.text.startsWith("#END")) {
                    
                    let run_symbol = new vscode.DocumentSymbol(
                        this.format(tokens[0]),
                        'Session separator',
                        symbolkind_run,
                        line.range, line.range)

                    if (inside_run) {
                        nodes.pop()
                    }
    
                    nodes[nodes.length-1].push(run_symbol)
                    nodes.push(run_symbol.children)
                    inside_run = true
                }
                else if (line.text.startsWith("#USERINPUTBEGIN")) {

                    let user_symbol = new vscode.DocumentSymbol(
                        this.format(tokens[0]),
                        'User module',
                        vscode.SymbolKind.Interface,
                        line.range, line.range)


                    nodes[nodes.length-1].push(user_symbol)
                    if (!inside_userinput) {
                        nodes.push(user_symbol.children)
                        inside_userinput = true
                    }
                    // marker_symbol.children.push(_boot)
                }
                else if (line.text.startsWith("#USERINPUTEND")) {
                    // TODO check if nodes has length 1 before popping.
                    if (inside_userinput) {
                        nodes.pop()
                        inside_userinput = false
                    }
                }                
                else if (line.text.startsWith("#")) {
					

                    let cmd_symbol = new vscode.DocumentSymbol(
                        this.format(tokens[0]),
                        '',
                        symbolkind_cmd,
                        line.range, line.range)

                    nodes[nodes.length-1].push(cmd_symbol)
                }
            }

            resolve(symbols);
        });
    }
}