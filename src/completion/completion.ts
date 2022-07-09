import * as vscode from 'vscode';
import * as c3 from 'antlr4-c3';
import { CharStreams, CommonTokenStream, Parser } from 'antlr4ts';
import { CompletionItem, CompletionItemKind } from 'vscode';
import { UonCompletionErrorStrategy } from '../error/UonCompletionErrorStrategy';
import { UONLexer } from '../generated/UONLexer';
import { UONParser } from '../generated/UONParser';

export function completionFor(text: string): CompletionItem[] {
    //Antlr setup
    const inputStream = CharStreams.fromString(text);
    const lexer = new UONLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new UONParser(tokenStream);
    parser.removeErrorListeners();

    const errorStrategy = new UonCompletionErrorStrategy();
    parser.errorHandler = errorStrategy;

    parser.buildParseTree = true;
    let tree = parser.uon();  // Parse Tree

    console.log("tree.toStringTree", tree.toStringTree(parser));

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
        tokenNames.push(str);

        if (candidate[1].length > 1) {

            for (let index = 0; index < candidate[1].length; index++) {
                const element = candidate[1][index];
                str = str + "" + parser.vocabulary.getDisplayName(element).replace(/'/g, "");
                tokenNames.push(str);
            }

            keywords.push(new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword));
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
    // TODO : Ignorer les tokens literal
    core.ignoredTokens = new Set([
        UONLexer.OPEN_C_BRA,
        UONLexer.CLOSE_C_BRA,
        UONLexer.OPEN_S_BRA,
        UONLexer.CLOSE_S_BRA,
        UONLexer.OPEN_PAR,
        UONLexer.CLOSE_PAR,
        UONLexer.COMMA,
        UONLexer.COLON,
        UONLexer.QUOTED_STRING,
        UONLexer.UNQUOTED_STRING,
        UONLexer.MASS,
        UONLexer.NAME
    ]);

    // TODO : RULES
    //core.preferredRules = new Set([
    //  UONParser.RULE_obj,
    //  UONParser.RULE_arr
    //]);

    return core.collectCandidates(completionTokenIndex);
}


function findCursorTokenIndex(tokenStream: CommonTokenStream): number {
    /*
    let tokenStreamArray = [];
    for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        tokenStreamArray.push(t.text);
    }
    */
    return tokenStream.size - 2;
}

