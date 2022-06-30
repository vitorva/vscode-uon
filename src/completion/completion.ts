import * as vscode from 'vscode';
import * as c3 from 'antlr4-c3';
import { CharStreams, CommonTokenStream, Parser, ParserRuleContext } from 'antlr4ts';
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
    for (let candidate of candidates.tokens) {
        console.log("valid", candidate[0]);
        let str = parser.vocabulary.getDisplayName(candidate[0]);

        //https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
        str = str.replace(/'/g, "");

        let item = new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword);

        //const range = document.getWordRangeAtPosition(position);

        // TODO : Range pour texte collé

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

    //TODO snippet        
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
        UONLexer.UNQUOTED_STRING
    ]);

    // TODO : RULES
    //core.preferredRules = new Set([
    //  UONParser.RULE_obj,
    //  UONParser.RULE_arr
    //]);



    return core.collectCandidates(completionTokenIndex);
}


function findCursorTokenIndex(tokenStream: CommonTokenStream): number {
    let tokenStreamArray = [];
    for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        tokenStreamArray.push(t.text);
    }

    //TODO : Function
    let index: number = 0;
    if (tokenStream.get(tokenStream.size - 1).type === UONLexer.EOF) {
        console.log(tokenStreamArray);
        // si pas d'erreurs alors on veut la position du curseur actuelle
        index = tokenStream.size - 2;
        console.log(index);
    } else {
        let newTokenStreamArray = tokenStreamArray;

        for (let i = newTokenStreamArray.length - 1; i >= 0; i--) {
            if (newTokenStreamArray[i] === '') {
                newTokenStreamArray = tokenStreamArray.slice(0, i);
            } else {
                index = newTokenStreamArray.length;
                break;
            }
        }
        index = newTokenStreamArray.length;
    }

    return index;
}

