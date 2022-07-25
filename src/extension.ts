'use strict';

import * as vscode from 'vscode';

import { completionFor } from './completion/completion';
import { UonDocumentSymbolProvider } from './outline/UonDocumentSymbolProvider';

import hoverJson = require("./hover.json");
import { QuickFixProvider } from './error/QuickFixProvider';

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
      const word: string = document.getText(range);

      const hoverKey = Object.keys(hoverJson);

      const hover: any = hoverJson;

      if (hoverKey.includes(word)) {
        return new vscode.Hover(
          new vscode.MarkdownString(hover[word]));
      }
    }
  });

  extensionContext.subscriptions.push(hover);

  extensionContext.subscriptions.push(
    vscode.languages.registerDocumentSymbolProvider(
      { scheme: "file", language: "uon" },
      new UonDocumentSymbolProvider(collection, extensionContext)
    )
  );

  extensionContext.subscriptions.push(
    vscode.languages.registerCodeActionsProvider({ scheme: "file", language: "uon" }, new QuickFixProvider(), {
      providedCodeActionKinds: QuickFixProvider.providedCodeActionKinds
    })
  );
}