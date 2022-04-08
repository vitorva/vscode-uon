'use strict';

// src/extension.ts

import * as vscode from 'vscode';

import * as fs from "fs";
import * as path from "path";

import { ExprParser } from "./generated/ExprParser";
import { ExprLexer } from "./generated/ExprLexer";
import { CPP14Parser } from "./generated/CPP14Parser";
import { CPP14Lexer } from "./generated/CPP14Lexer";

import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver';

import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token,
} from "antlr4ts";

import * as c3 from 'antlr4-c3';

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        vscode.languages.registerDocumentSymbolProvider(
            {scheme: "file", language: "uon"}, 
            new UonConfigDocumentSymbolProvider()
        )
    );

	const provider1 = vscode.languages.registerCompletionItemProvider({scheme: "file", language: "uon"}, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

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

            const inputStream = CharStreams.fromString("var c = a + b()");
            const lexer = new ExprLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);

            const parser = new ExprParser(tokenStream);
            
            parser.expression();

            const core = new c3.CodeCompletionCore(parser);

            // 1) At the input start.
            let candidates = core.collectCandidates(0);

            //console.log("candidates", candidates);

            let keywords : vscode.CompletionItem[] = [];
            for (let candidate of candidates.tokens) {
                    //keywords.push(parser.vocabulary.getDisplayName(candidate[0]));
                    let test = new vscode.CompletionItem(parser.vocabulary.getDisplayName(candidate[0]), vscode.CompletionItemKind.Keyword);

                    keywords.push(test);
                }

            console.log("keywords", keywords);

           return keywords;
		}
	});

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