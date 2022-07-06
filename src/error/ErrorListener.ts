import * as vscode from 'vscode';
import { ANTLRErrorListener, CommonToken, RecognitionException, Recognizer, Token } from "antlr4ts";
import { UONParser } from '../generated/UONParser';

export class ErrorListener implements ANTLRErrorListener<CommonToken> {

    level = 0;
    document: vscode.TextDocument;
    collection: vscode.DiagnosticCollection;
    context: vscode.ExtensionContext; // vscode.ExtensionContext !!!! ???
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

    public errorCount = 0;

    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        // ANTLRErrorListener -> ANTLRErrorStrategy -> DefaultErrorStrategy.ts 
        //  - notifyErrorListeners
        //  - e : RecognitionException
        //  - IntervalSet
        // Lien entre syntaxError et notifyErrorListeners ???
        const expectedTokensString = e?.expectedTokens?.toStringVocabulary(recognizer.vocabulary);
        const expectedTokens = e?.expectedTokens?.toArray();

        if (expectedTokensString === undefined) {
            //return
        }
        console.log(e?.message);


        if (expectedTokens !== undefined) {
            //return
            for (let index = 0; index < expectedTokens.length; index++) {
                const element = expectedTokens[index];
                console.log(this.parser.vocabulary.getDisplayName(element));

            }
        } else {
            // TODO
        }

        //console.log(this.parser.vocabulary.getDisplayName(expectedTokens[0]));

        ++this.errorCount;

        console.log("ERROR", line + "-" + charPositionInLine + " : " + msg);

        console.log("charPositionInLine", charPositionInLine);

        const size = offendingSymbol?.text === undefined ? 0 : offendingSymbol.text.length;
        if (vscode.window.activeTextEditor) {
            const range = new vscode.Range(new vscode.Position((line - 1), charPositionInLine), new vscode.Position((line - 1), charPositionInLine));
            this.updateDiagnostics(vscode.window.activeTextEditor.document, this.collection, msg, range);
        }
    }
}