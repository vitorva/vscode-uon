import * as vscode from 'vscode';
import { ANTLRErrorListener, CommonToken, RecognitionException, Recognizer, Token } from "antlr4ts";
import { UONParser } from '../generated/UONParser';

export class ErrorListener implements ANTLRErrorListener<CommonToken> {

    level = 0;
    document: vscode.TextDocument;
    collection: vscode.DiagnosticCollection;
    context: vscode.ExtensionContext;
    parser: UONParser;
    errorList: any = [];

    constructor(document: vscode.TextDocument, collection: vscode.DiagnosticCollection, context: vscode.ExtensionContext, parser: UONParser) {
        this.document = document;
        this.collection = collection;
        this.context = context;
        this.parser = parser;
    }

    public updateDiagnostics(document: vscode.TextDocument, collection: vscode.DiagnosticCollection, msg: string, range: vscode.Range): void {
        if (document) {
            this.errorList.push({
                code: '',
                message: msg,
                range: range,
                severity: vscode.DiagnosticSeverity.Error,
                source: '',
                relatedInformation: [
                    new vscode.DiagnosticRelatedInformation(new vscode.Location(document.uri, range), "")
                ]
            });
            collection.set(document.uri, this.errorList);

        } else {
            collection.clear();
        }
    }

    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {

        const size = offendingSymbol?.text === undefined ? 0 : offendingSymbol.text.length;

        if (vscode.window.activeTextEditor) {
            const range = new vscode.Range(new vscode.Position((line - 1), charPositionInLine), new vscode.Position((line - 1), charPositionInLine + size));
            this.updateDiagnostics(vscode.window.activeTextEditor.document, this.collection, msg, range);
        }
    }
}