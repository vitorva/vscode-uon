import * as vscode from 'vscode';

/**
 * Provides code actions corresponding to diagnostic problems.
 */
 export class QuickFixProvider implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
		return context.diagnostics
			.map(diagnostic => this.createCommandCodeAction(diagnostic, document, range));
	}

  private createFix(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction {
		const fix = new vscode.CodeAction(`remove`, vscode.CodeActionKind.QuickFix);
		fix.edit = new vscode.WorkspaceEdit();
    const sizeWord =  range.end.character -range.start.character;
		fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, sizeWord)), '');
		return fix;
	}

  private createCommandCodeAction(diagnostic: vscode.Diagnostic, document : any, range : any): vscode.CodeAction {
    const remove = this.createFix(document, range);
    remove.isPreferred = true;
    return remove;
	}
}