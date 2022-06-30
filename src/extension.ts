'use strict';

import * as vscode from 'vscode';

import { completionFor } from './completion/completion';
import { UonConfigDocumentSymbolProvider } from './outline/UonConfigDocumentSymbolProvider';

const hoverJson = require("./hover.json");

export function activate(extensionContext: vscode.ExtensionContext) {

  const collection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection('test');

  const completion = vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "uon" }, {
    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, completionContext: vscode.CompletionContext) {
      //Find cursor position
      let activeEditor = vscode.window.activeTextEditor;
      let curPos = activeEditor?.selection.active;
      let offset = document.offsetAt(curPos!!);

      //Retrieve text from start to cursor position
      const text = document.getText().slice(0, offset);

      return completionFor(text);
    }
  }, " ", "\n");

  extensionContext.subscriptions.push(completion);

  const hover = vscode.languages.registerHoverProvider({ scheme: "file", language: "uon" }, {
    provideHover(document, position) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);

      const hover = Object.keys(hoverJson.content);

      if (hover.includes(word)) {
        console.log(hoverJson.content[word]);
        return new vscode.Hover(
          new vscode.MarkdownString(hoverJson.content[word]));
      }
    }
  });

  extensionContext.subscriptions.push(hover);

  extensionContext.subscriptions.push(
    vscode.languages.registerDocumentSymbolProvider(
      { scheme: "file", language: "uon" },
      new UonConfigDocumentSymbolProvider(collection, extensionContext)
    )
  );
}

