import * as vscode from 'vscode';
import * as c3 from 'antlr4-c3';
import { CharStreams, CommonTokenStream, Parser } from 'antlr4ts';
import { CompletionItem } from 'vscode';
import { UonCompletionErrorStrategy } from '../error/UonCompletionErrorStrategy';
import { UONLexer } from '../generated/UONLexer';
import { UONParser } from '../generated/UONParser';
import hoverJson = require("../hover.json");
import { ErrorCompletionListener } from '../error/ErrorCompletionListener';


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
        const lines = text.split('\r\n');

        if (errorCompletionListener.line + 1 < lines.length) { // ne traite pas une erreur sur la ligne ou se trouve le curseur
            const left = lines.slice(0, errorCompletionListener.line);
            const right = lines.slice(errorCompletionListener.line + 1, lines.length);
            const newText = left.concat(right);
            text = newText.join('\r\n');

            let inputStream = CharStreams.fromString(text);
            lexer = new UONLexer(inputStream);
            tokenStream = new CommonTokenStream(lexer);

            parser = new UONParser(tokenStream);
            parser.removeErrorListeners();

            tree = parser.uon();
        }
    }

    const completionTokenIndex = findCursorTokenIndex(tokenStream);
    let candidates = collectC3CompletionCandidates(parser, completionTokenIndex);

    let keywords: CompletionItem[] = [];
    let tokenNames = [];
    for (let candidate of candidates.tokens) {
        let str = parser.vocabulary.getDisplayName(candidate[0]);

        str = str.replace(/'/g, "");

        let item = new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword);

        const hoverKey = Object.keys(hoverJson);

        const hover: any = hoverJson;

        if (hoverKey.includes(str)) {
            item.documentation = hover[str];
        }

        tokenNames.push(str);

        // Fonctionne uniquement s'l n'y a seulement qu'une suite possible
        if (candidate[1].length > 0) {
            for (let index = 0; index < candidate[1].length; index++) {
                const element = candidate[1][index];
                str = str + " " + parser.vocabulary.getDisplayName(element).replace(/'/g, "");
                tokenNames.push(str);
            }
            keywords.push(new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword));
        } else {
            keywords.push(item);
        }
    }

    const tokenStreamText = getTokensStreamText(tokenStream);

    //snippets 
    if (tokenNames.includes("!str") && tokenStreamText.includes("!schema") === false) {
        let snippetCompletion = new vscode.CompletionItem('!str(comment: ... , description: .., optional: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!str(comment: ${1}, description: ${2}, optional: ${3})');
        keywords.push(snippetCompletion);

        snippetCompletion = new vscode.CompletionItem('!str(comment: ... , pattern: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!str(comment: ${1}, pattern: ${2})');
        keywords.push(snippetCompletion);
    }

    if (tokenNames.includes("!int") && tokenStreamText.includes("!schema") === false) {
        let snippetCompletion = new vscode.CompletionItem('!int(comment: ... , description: ..., optional: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!int(comment: ${1}, description: ${2}, optional: ${3})');
        keywords.push(snippetCompletion);

        snippetCompletion = new vscode.CompletionItem('!int(comment: ... , unit: ...)');
        snippetCompletion.insertText = new vscode.SnippetString('!int(comment: ${1}, unit: ${2})');
        keywords.push(snippetCompletion);
    }

    return keywords;
}

function collectC3CompletionCandidates(
    parser: Parser,
    completionTokenIndex: number
): c3.CandidatesCollection {
    const core = new c3.CodeCompletionCore(parser);

    core.ignoredTokens = new Set([
        UONLexer.OPEN_C_BRA,
        UONLexer.CLOSE_C_BRA,
        UONLexer.OPEN_S_BRA,
        UONLexer.CLOSE_S_BRA,
        UONLexer.OPEN_PAR,
        UONLexer.CLOSE_PAR,
        UONLexer.COMMA,
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
    return tokenStream.size - 3; // TODO -1 de plus si DEDENT
}

function getTokensStreamText(tokenStream: CommonTokenStream) {

    let tokenStreamArray = [];
    for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        tokenStreamArray.push(t.text);
    }

    return tokenStreamArray;
}

