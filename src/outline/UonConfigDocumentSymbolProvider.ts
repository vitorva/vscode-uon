import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as vscode from 'vscode';
import { DocumentSymbolProvider } from 'vscode';
import { ErrorListener } from '../error/ErrorListener';
import { UONLexer } from '../generated/UONLexer';
import { UONParser } from '../generated/UONParser';
import { UonASTVisitor } from './UonASTVisitor';

export class UonConfigDocumentSymbolProvider implements DocumentSymbolProvider {

    // The outline will also have the role of controlling the structure of the file
    collection: vscode.DiagnosticCollection;
    context: vscode.ExtensionContext;

    constructor(collection: vscode.DiagnosticCollection, context: vscode.ExtensionContext) {
        this.collection = collection;
        this.context = context;
    }

    public provideDocumentSymbols(
        document: vscode.TextDocument,
        token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
        return new Promise((resolve, reject) => {

            //Find cursor position
            let activeEditor = vscode.window.activeTextEditor;
            let curPos = activeEditor?.selection.active;
            let offset = document.offsetAt(curPos!!);

            //Retrieve text from start to cursor position
            const text = document.getText();

            //Antlr setup
            const inputStream = CharStreams.fromString(text);
            const lexer = new UONLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new UONParser(tokenStream);

            parser.removeErrorListeners();

            this.collection.clear()
            let errorListener = new ErrorListener(document, this.collection, this.context, parser);
            parser.addErrorListener(errorListener);

            parser.buildParseTree = true;
            let tree = parser.uon();  // parse Tree

            // Create the visitor
            const uonASTVisitor = new UonASTVisitor(document, text);

            // Use the visitor entry point
            const ast = uonASTVisitor.visit(tree);

            console.log("AST", ast);

            let symbols: vscode.DocumentSymbol[] = [];
            let nodes = [symbols];

            // the ast coulb be an array []
            for (var i = 0; i < ast.length; i++) {
                nodes[nodes.length - 1].push(ast[i]);
            }

            resolve(symbols);
        });
    }
}
