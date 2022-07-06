'use strict';

import * as vscode from 'vscode';

import { completionFor } from './completion/completion';
import { UonDocumentSymbolProvider } from './outline/UonDocumentSymbolProvider';

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
      new UonDocumentSymbolProvider(collection, extensionContext)
    )
  );

  extensionContext.subscriptions.push(
		vscode.languages.registerCodeActionsProvider({ scheme: "file", language: "uon" }, new QuickFixProvider(), {
			providedCodeActionKinds: QuickFixProvider.providedCodeActionKinds
		})
	);
}

/**
 * Provides code actions corresponding to diagnostic problems.
 */
 export class QuickFixProvider implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
		// for each diagnostic entry that has the matching `code`, create a code action command

		//return context.diagnostics
		//	.map(diagnostic => this.createCommandCodeAction(diagnostic));

    //const remove = this.createFix(document, range);
    //remove.isPreferred = true;
    //return [remove];

		return context.diagnostics
			.map(diagnostic => this.createCommandCodeAction2(diagnostic, document, range));
	}

  private createFix(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction {
		const fix = new vscode.CodeAction(`remove`, vscode.CodeActionKind.QuickFix);
		fix.edit = new vscode.WorkspaceEdit();
    const sizeWord =  range.end.character -range.start.character;
		fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, sizeWord)), '');
		return fix;
	}

	private createCommandCodeAction(diagnostic: vscode.Diagnostic): vscode.CodeAction {
		const action = new vscode.CodeAction('Learn more...', vscode.CodeActionKind.QuickFix);
    action.command = { command: 'code-actions-sample.command', title: 'Learn more about emojis', tooltip: 'This will open the unicode emoji page.' };
		action.diagnostics = [diagnostic];
		action.isPreferred = true;
		return action;
	}

  private createCommandCodeAction2(diagnostic: vscode.Diagnostic, document : any, range : any): vscode.CodeAction {
    const remove = this.createFix(document, range);
    remove.isPreferred = true;
    return remove;
	}
}


