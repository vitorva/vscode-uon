'use strict';

import * as vscode from 'vscode';

import { UONLexer } from './generated/UONLexer';
import { UONParser } from "./generated/UONParser";

import {
  ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, TokenStream, RecognitionException, Recognizer, Token, Parser
} from "antlr4ts";

import { DefaultErrorStrategy } from 'antlr4ts/DefaultErrorStrategy';
import { IntervalSet } from 'antlr4ts/misc/IntervalSet';
import {ParseTreeVisitor} from 'antlr4ts/tree/ParseTreeVisitor';

import * as c3 from 'antlr4-c3';

import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver';

import { UONVisitor } from './generated/UONVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { UONListener } from './generated/UONListener';
import {Json_mapContext, Yaml_mapContext, Yaml_seqContext, NumberContext } from './generated/UONParser';

import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import {ParseTreeListener} from 'antlr4ts/tree/ParseTreeListener';

import {TerminalNode, ErrorNode, ParseTree, RuleNode } from 'antlr4ts/tree';
import {ParserRuleContext} from 'antlr4ts';
import { UonContext } from './generated/_OLD/UONParser';

class EnterFunctionListener implements UONListener {
    enterYaml_seq(context: Yaml_seqContext) {
      //console.log(`Function start line number ${context._start.line}`);
      console.log("enterYaml_seq !!!!! ")
      // ...
    }
    enterNumber(ctx: NumberContext){
      console.log("enterNumber !!!!! ");
    };

    // other enterX functions...

}



//Visitor Approach
// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class CountFunctionsVisitor extends AbstractParseTreeVisitor<any> implements UONVisitor<any> {

  defaultResult() {
    return "";
  }

  visit(tree: ParseTree) {
      super.visit(tree);
  }

  visitChildren(node: RuleNode){
    console.log(node)
    //super.visitChildren(node);
    let result = this.defaultResult();
    let n = node.childCount;
    for (let i = 0; i < n; i++) {
        if (!this.shouldVisitNextChild(node, result)) {
            break;
        }
        let c = node.getChild(i);

        // TODO
        
        let childResult = c.accept(this);
        result = this.aggregateResult(result, childResult);
    }
    return result;
  }

  aggregateResult(aggregate: string, nextResult: string) {
    return aggregate + nextResult;
  }

  visitYaml_seq(ctx: Yaml_seqContext) : string{
    return ctx.text + this.visitChildren(ctx);
  }
  
  /*
  visitYaml_seq(ctx: Yaml_seqContext){
    console.log("visitYaml_seq WORK !!");
  }

  visitTerminal(node: TerminalNode) {
    console.log("TERMINUS", node._parent);  
    console.log("TERMINUS2", node.text); 
  }
  */
  
}

const  hoverJson = require('./hover.json');

class Visitor implements ParseTreeVisitor<any> {
  visit(){

  }
  visitChildren(ctx: any) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map((child : any) => {
        if (child.children && child.children.length !== 0) {
          return child.accept(this);
        } else {
          console.log(child);
        }
      });
    }
  }

  visitTerminal(){}

  visitErrorNode(){}
}

class UonCompletionErrorStrategy extends DefaultErrorStrategy {
  protected singleTokenDeletion(recognizer: Parser): Token | undefined {
    return undefined;
  }

  protected consumeUntil(recognizer: Parser, set: IntervalSet): void {
    console.log(set);
  }

  public recover(recognizer: Parser, e: RecognitionException): void {
              //		System.out.println("recover in "+recognizer.getRuleInvocationStack()+
        //						   " index="+recognizer.inputStream.index+
        //						   ", lastErrorIndex="+
        //						   lastErrorIndex+
        //						   ", states="+lastErrorStates);

        console.log(this.lastErrorStates);
        if (this.lastErrorIndex === recognizer.inputStream.index &&
          this.lastErrorStates &&
          this.lastErrorStates.contains(recognizer.state)) {
          // uh oh, another error at same token index and previously-visited
          // state in ATN; must be a case where LT(1) is in the recovery
          // token set so nothing got consumed. Consume a single token
          // at least to prevent an infinite loop; this is a failsafe.
          //			System.err.println("seen error condition before index="+
          //							   lastErrorIndex+", states="+lastErrorStates);
          //			System.err.println("FAILSAFE consumes "+recognizer.getTokenNames()[recognizer.inputStream.LA(1)]);
          //recognizer.consume();
      }
    this.lastErrorIndex = recognizer.inputStream.index;
    console.log("lastErrorIndex", this.lastErrorIndex);
  }

  protected getErrorRecoverySet(recognizer: Parser): IntervalSet {
    const defaultRecoverySet = super.getErrorRecoverySet(recognizer);

    const soqlFieldFollowSet = new IntervalSet();

    soqlFieldFollowSet.add(UONLexer.COLON);

    let temp = []
    for (let i = 0; i < recognizer.inputStream.size; i++) {
      temp.push(recognizer.inputStream.get(i).text);
    }
    console.log(temp);

    console.log(super.lastErrorIndex);

    return soqlFieldFollowSet;
  }

}

export class ErrorListener implements ANTLRErrorListener<CommonToken> {
  public errorCount = 0;

  public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
    charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
    ++this.errorCount;
    console.log("ERROR", this.errorCount);
  }

}

let tmp : any = null;

export function activate(context: vscode.ExtensionContext) {

  const provider1 = vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "uon" }, {

    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
      //let line = position.line;
      //let column = position.character;

      // https://stackoverflow.com/questions/65261663/vscode-how-to-get-position-of-cursor-in-the-document
      // Alternative :
      // https://stackoverflow.com/questions/64561781/vscode-api-get-position-of-last-character-of-line
      let activeEditor = vscode.window.activeTextEditor;
      let curPos = activeEditor?.selection.active;
      let offset = document.offsetAt(curPos!!);

      //console.log(offset);

      const text = document.getText().slice(0, offset);
      console.log(text);
      console.log(text.length);

      const inputStream = CharStreams.fromString(text);
      const lexer = new UONLexer(inputStream);
      
      const tokenStream = new CommonTokenStream(lexer);

      const parser = new UONParser(tokenStream);



      //let errorListener = new ErrorListener();
      //parser.addErrorListener(errorListener);

      parser.removeErrorListeners();

      const lol = new UonCompletionErrorStrategy();
      parser.errorHandler = lol;

      parser.buildParseTree = true;
      let tree = parser.uon();

      //let visitor = new Visitor();
      //tree.accept(visitor);
      console.log("tree.toStringTree", tree.toStringTree(parser));

      // Create the visitor
      //const countFunctionsVisitor = new CountFunctionsVisitor();
      // Use the visitor entry point
      //countFunctionsVisitor.visit(tree);

      // Create the listener
      const listener: UONListener = new EnterFunctionListener();
      // Use the entry point for listeners
      
      ParseTreeWalker.DEFAULT.walk(listener, tree);

      console.log("tokenStream");
      console.log("tokenStreamSize", tokenStream.size);
      let testArr = []
      for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        //console.log(t.text);
        testArr.push(t.text);
      }

      let index = 0;
      if (tokenStream.get(tokenStream.size - 1).type === UONLexer.EOF) {
        console.log(testArr);
        // si pas d'erreurs alors on veut la position du curseur actuelle
        index = tokenStream.size - 2;
        console.log(index);
      } else {
        console.log(testArr);
        console.log(testArr.lastIndexOf(''));
        //let  newArra =testArr.slice(0, testArr.lastIndexOf(''));
        let newArra = testArr;
        //newArra.push(parser.vocabulary.getDisplayName(UONLexer.EOF));
        console.log(newArra.length);

        for (let i = newArra.length - 1; i >= 0; i--) {
          if (newArra[i] === '') {
            newArra = testArr.slice(0, i);
          } else {
            index = newArra.length;
            break;
          }
        }
        //index = newArra.length- 1;
        index = newArra.length;
      }

      const core = new c3.CodeCompletionCore(parser);


      //core.preferredRules = new Set([
      //  UONParser.RULE_obj,
      //  UONParser.RULE_arr
      //]);

      /*
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
      */

      let candidates = core.collectCandidates(index);

      const newCompletionItem = (
        text: string,
        kind: CompletionItemKind,
        extraOptions?: Partial<CompletionItem>
      ): CompletionItem => ({
        label: text,
        kind,
        ...extraOptions,
      });

      const newSnippetItem = (label: string, snippet: string, extraOptions?: Partial<CompletionItem>): CompletionItem =>
        newCompletionItem(label, CompletionItemKind.Snippet, {
          insertText: snippet,
          insertTextFormat: InsertTextFormat.Snippet,
          ...extraOptions,
        });

      let keywords: vscode.CompletionItem[] = [];
      for (let candidate of candidates.tokens) {
        let str = parser.vocabulary.getDisplayName(candidate[0]);

        //https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
        str = str.replace(/'/g, "");

        let item = new vscode.CompletionItem(str, vscode.CompletionItemKind.Keyword);
        const range = document.getWordRangeAtPosition(position);

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

      //TODO        
      const snippetCompletion = new vscode.CompletionItem('description : ... , name : ... , uuid : ... ');
      snippetCompletion.insertText = new vscode.SnippetString('description : ${1}, name : ${2}, uuid : ${3}');
      
      //snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
      //keywords.push(new vscode.newS('(SELECT ... FROM ...)', '(SELECT $2 FROM $1)'));

      keywords.push(snippetCompletion);

      console.log(keywords);
      return keywords;
    }
  }, " ", "\n", ".");

  context.subscriptions.push(provider1);

  const hover = vscode.languages.registerHoverProvider({ scheme: "file", language: "uon" }, {
    provideHover(document, position, token) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      console.log(word);

      //console.log(Person.person["name"]);

      const test = Object.keys(hoverJson.content)
      console.log(test);
      
    
      if(test.includes(word)){
      console.log(hoverJson.content[word]);
      return new vscode.Hover({
        language: "uon",
        value: hoverJson.content[word]
      });
      }

      return
      

      //TODO : READ A HOVER FILE

      //const hover = JSON.parse(hoverJson);
          // Read key
          
          /*
    for (var key in hoverJson) {
      console.log(key);
     if (word === key){
      return new vscode.Hover({
        language: "uon",
        value: hoverJson[key];
      });
     }
     return
  }
  */
  /*
      switch(word) { 
        case "!str": { 
          return new vscode.Hover({
            language: "uon",
            value: "String encoded in UTF-8\n\nBased on : !scalar "
          });
        } 
        case "!bool": { 
          return new vscode.Hover({
            language: "uon",
            value: "Boolean, true or false\n\nBased on : !scalar "
          });
        }
        case "!map": { 
          return new vscode.Hover({
            language: "uon",
            value: "Unordered Mapping (also called HashMap or Dictionary )\n\nBased on : !type "
          });
        } 
        case "!seq": { 
          return new vscode.Hover({
            language: "uon",
            value: "Ordered Sequence (also called List or Array)\n\nBased on : !scalar "
          });
        }
        case "!float": { 
          return new vscode.Hover({
            language: "uon",
            value: "Floating point IEEE-754\n\nBased on : !scalar "
          });
        }    
        default: { 
           return; 
        } 
     } 
*/

    }
  });

  context.subscriptions.push(hover);

  context.subscriptions.push(
  vscode.languages.registerDocumentSymbolProvider(
      {scheme: "file", language: "uon"}, 
      new UonConfigDocumentSymbolProvider()
  )
);

}

class UonConfigDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

  private format(cmd: string):string{
      return cmd.substr(1).toLowerCase().replace(/^\w/, c => c.toUpperCase())
  }

  public provideDocumentSymbols(
    document: vscode.TextDocument,
    token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> 
    {
    return new Promise((resolve, reject) => 
    {
        let symbols: vscode.DocumentSymbol[] = [];
        let nodes = [symbols]
        let inside_marker = false
        let inside_run = false
        let inside_userinput = false

        let symbolkind_marker = vscode.SymbolKind.Field
        let symbolkind_run = vscode.SymbolKind.Event
        let symbolkind_cmd = vscode.SymbolKind.Function

        for (var i = 0; i < document.lineCount; i++) {
            var line = document.lineAt(i);

            let tokens = line.text.split(" ")

            if (line.text.startsWith("!map")) {

                let marker_symbol = new vscode.DocumentSymbol(
                    this.format(tokens[0]) + " " + tokens[1],
                    'Component',
                    symbolkind_marker,
                    line.range, line.range)


                nodes[nodes.length-1].push(marker_symbol)
                if (!inside_marker) {
                    nodes.push(marker_symbol.children)
                    inside_marker = true
                }
                // marker_symbol.children.push(_boot)
            }
            else if (line.text.startsWith("#END_COMP")) {
                // TODO check if nodes has length 1 before popping.
                if (inside_marker) {
                    nodes.pop()
                    inside_marker = false
                }
            }
            else if (line.text.startsWith("#RUN") || line.text.startsWith("#END")) {
                
                let run_symbol = new vscode.DocumentSymbol(
                    this.format(tokens[0]),
                    'Session separator',
                    symbolkind_run,
                    line.range, line.range)

                if (inside_run) {
                    nodes.pop()
                }

                nodes[nodes.length-1].push(run_symbol)
                nodes.push(run_symbol.children)
                inside_run = true
            }
            else if (line.text.startsWith("#USERINPUTBEGIN")) {

                let user_symbol = new vscode.DocumentSymbol(
                    this.format(tokens[0]),
                    'User module',
                    vscode.SymbolKind.Interface,
                    line.range, line.range)


                nodes[nodes.length-1].push(user_symbol)
                if (!inside_userinput) {
                    nodes.push(user_symbol.children)
                    inside_userinput = true
                }
                // marker_symbol.children.push(_boot)
            }
            else if (line.text.startsWith("#USERINPUTEND")) {
                // TODO check if nodes has length 1 before popping.
                if (inside_userinput) {
                    nodes.pop()
                    inside_userinput = false
                }
            }                
            else if (line.text.startsWith("#")) {
                let cmd_symbol = new vscode.DocumentSymbol(
                    this.format(tokens[0]),
                    '',
                    symbolkind_cmd,
                    line.range, line.range)

                nodes[nodes.length-1].push(cmd_symbol)
            }
        }

        resolve(symbols);
    });
}
}
