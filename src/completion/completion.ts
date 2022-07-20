import * as vscode from 'vscode';
import * as c3 from 'antlr4-c3';
import { ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, Parser, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { CompletionItem, CompletionItemKind } from 'vscode';
import { UonCompletionErrorStrategy } from '../error/UonCompletionErrorStrategy';
import { UONLexer } from '../generated/UONLexer';
import { UONParser } from '../generated/UONParser';
import hoverJson = require("../hover.json");

class ErrorCompletionListener implements ANTLRErrorListener<CommonToken> {

    public error = 0;
    public line = 0;
    public column = 0;

    // TODO : Nouveau token à remplacer si possible
    // TODO : Gérer plusieurs erreurs

    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        if (this.error > 0) { return; }
        this.error = this.error + 1;
        this.line = line - 1;
        this.column = charPositionInLine;
    }
}

export function completionFor(text: string): CompletionItem[] {
    //Antlr setup
    let inputStream = CharStreams.fromString(text);
    let lexer = new UONLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);

    let parser = new UONParser(tokenStream);
    parser.removeErrorListeners();

    let errorCompletionListener = new ErrorCompletionListener();

    let errorListener = errorCompletionListener;
    parser.addErrorListener(errorListener);

    const errorStrategy = new UonCompletionErrorStrategy();
    parser.errorHandler = errorStrategy;

    parser.buildParseTree = true;
    let tree = parser.uon();  // Parse Tree

    if (errorCompletionListener.error > 0) {
        console.log("text", text);
        console.log("line", errorCompletionListener.line);
        console.log("colum", errorCompletionListener.column);

        const lines = text.split('\r\n');

        if (errorCompletionListener.line + 1  < lines.length) {
            const left = lines.slice(0, errorCompletionListener.line);
            const right = lines.slice(errorCompletionListener.line + 1, lines.length);
            const newText = left.concat(right);
            text = newText.join('\r\n');
            console.log("text", text);
    
            let inputStream = CharStreams.fromString(text);
            lexer = new UONLexer(inputStream);
            tokenStream = new CommonTokenStream(lexer);
    
            parser = new UONParser(tokenStream);
            parser.removeErrorListeners();
    
            tree = parser.uon();
        }
    }

    //console.log("tree.toStringTree", tree.toStringTree(parser));

    const completionTokenIndex = findCursorTokenIndex(tokenStream);
    let candidates = collectC3CompletionCandidates(parser, completionTokenIndex);

    const newCompletionItem = (
        text: string,
        kind: CompletionItemKind,
        extraOptions?: Partial<CompletionItem>
    ): CompletionItem => ({
        label: text,
        kind,
        ...extraOptions,
    });

    /*
    const newSnippetItem = (label: string, snippet: string, extraOptions?: Partial<CompletionItem>): CompletionItem =>
      newCompletionItem(label, CompletionItemKind.Snippet, {
        insertText: snippet,
        insertTextFormat: InsertTextFormat.Snippet,
        ...extraOptions,
      });
  */

    let keywords: CompletionItem[] = [];
    let tokenNames = [];
    for (let candidate of candidates.tokens) {
        let str = parser.vocabulary.getDisplayName(candidate[0]);

        //https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
        str = str.replace(/'/g, "");

        let item = new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword);

        const hoverKey = Object.keys(hoverJson);

        const hover: any = hoverJson;

        if (hoverKey.includes(str)) {
            item.documentation = hover[str];
        }

        tokenNames.push(str);

        // Fonctionne uniquement si il n'y a seulement qu'une suite possible : TODO
        if (candidate[1].length > 0) {

            for (let index = 0; index < candidate[1].length; index++) {
                const element = candidate[1][index];
                str = str + " " + parser.vocabulary.getDisplayName(element).replace(/'/g, "");
                tokenNames.push(str);
                keywords.push(new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword));
            }
        }


        // TODO : Range pour texte collé

        //const range = document.getWordRangeAtPosition(position);

        //const range2 = new vscode.Range(new vscode.Position(position.line, position.character), position);

        /*
        if(tmp === null){
           tmp = range2 ;
        }else{
          item.range = tmp;
          tmp = range2;
        }
        */

        //item.range = range2

        /*
        if(tmp === null){
          tmp = new vscode.Position(position.line, position.character);
       }else{
         const range2 = new vscode.Range(new vscode.Position(tmp.line, tmp.character), position);
         item.range = range2;
         tmp = null;
       }
        */

        keywords.push(item);
    }

    //snippets

    // TODO : controler depuis le token stream quand a pas de token schema !

    if (tokenNames.includes("!str")) {
        let snippetCompletion = new vscode.CompletionItem('!str(comment: ... , description: .., optional: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!str(comment: ${1}, description: ${2}, optional: ${3})');
        keywords.push(snippetCompletion);

        snippetCompletion = new vscode.CompletionItem('!str(comment: ... , pattern: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!str(comment: ${1}, pattern: ${2})');
        keywords.push(snippetCompletion);
    }

    //match pour les listes ?
    if (tokenNames.includes("!int")) {
        let snippetCompletion = new vscode.CompletionItem('!int(comment: ... , description: ..., optional: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!int(comment: ${1}, description: ${2}, optional: ${3})');
        keywords.push(snippetCompletion);

        snippetCompletion = new vscode.CompletionItem('!int(comment: ... , unit: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!int(comment: ${1}, unit: ${2})');
        keywords.push(snippetCompletion);
    }

    // TODO : rajouter des snippets

    //const snippetCompletion = new vscode.CompletionItem('description : ... , name : ... , uuid : ... ');
    //snippetCompletion.insertText = new vscode.SnippetString('description : ${1}, name : ${2}, uuid : ${3}');

    //snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
    //keywords.push(new vscode.newS('(SELECT ... FROM ...)', '(SELECT $2 FROM $1)'));
    //keywords.push(snippetCompletion);

    console.log(keywords);
    return keywords;
}

function collectC3CompletionCandidates(
    parser: Parser,
    completionTokenIndex: number
): c3.CandidatesCollection {
    const core = new c3.CodeCompletionCore(parser);
    core.translateRulesTopDown = false;
    //core.showDebugOutput = true;

    core.ignoredTokens = new Set([
        UONLexer.OPEN_C_BRA,
        UONLexer.CLOSE_C_BRA,
        UONLexer.OPEN_S_BRA,
        UONLexer.CLOSE_S_BRA,
        UONLexer.OPEN_PAR,
        UONLexer.CLOSE_PAR,
        //UONLexer.COMMA,
        //UONLexer.COLON,
        UONLexer.QUOTED_STRING,
        UONLexer.UNQUOTED_STRING,
    ]);


    // Ignore les tokens literal
    core.preferredRules = new Set([
        UONParser.RULE_literal,
    ]);

    return core.collectCandidates(completionTokenIndex);
}

function findCursorTokenIndex(tokenStream: CommonTokenStream): number {

    let tokenStreamArray = [];
    for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        tokenStreamArray.push(t.text);
    }

    return tokenStream.size - 3;
}

