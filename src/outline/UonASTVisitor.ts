import * as vscode from 'vscode';

import { AbstractParseTreeVisitor, RuleNode, TerminalNode } from "antlr4ts/tree";
import { BooleanContext, Json_mapContext, Json_pairContext, Json_seqContext, NumberContext, StringContext } from "../generated/UONParser";
import { UONVisitor } from "../generated/UONVisitor";

export class UonASTVisitor extends AbstractParseTreeVisitor<any> implements UONVisitor<any> {

    level = 0;
    document: vscode.TextDocument;
    text: String;

    constructor(document: vscode.TextDocument, text: String) {
        super();
        this.document = document;
        this.text = text;
    }

    defaultResult() {
        return null;
    }

    shouldVisitNextChild(node: RuleNode, currentResult: any) {
        return true;
    }

    visitChildren(node: RuleNode) {
        let result: any;
        let n = node.childCount;
        if (n > 1) {
            result = [];
        }
        for (let i = 0; i < n; i++) {
            if (!this.shouldVisitNextChild(node, result)) {
                break;
            }
            let c = node.getChild(i);
            let childResult = c.accept(this);
            if (n > 1) {
                result.push(childResult);
            }
            else {
                result = childResult;
                return result;
            }
        }

        const flatResult = result.flat();
        return flatResult;
    }

    // TODO
    aggregateResult(aggregate: any, nextResult: any) {
        return null;
    }

    visitJson_map(ctx: Json_mapContext) {
        this.level = this.level + 1;
        var children = this.visitChildren(ctx);
        this.level = this.level - 1;
        console.log(children);

        if (this.level === 0) {
            var response = [];

            for (var i = 0; i < children.length; i++) {
                if (children[i] instanceof vscode.DocumentSymbol) {
                    response.push(children[i]);
                }
            }
            return response;
        }

        const head = children.shift();

        const regex = /\r\n/g;

        var line = this.text.slice(0, head.stop).match(regex)?.length;

        var beginWord;
        var endWord;

        if (line === undefined) {
            line = 0;
            beginWord = head.start;
            endWord = head.stop;
        } else {
            console.log(this.text.slice(0, head.stop));

            const lastocc = this.text.slice(0, head.stop).lastIndexOf("\r\n");

            console.log(this.text.slice(0, head.stop).lastIndexOf("\r\n"));

            beginWord = head.start - lastocc;
            endWord = beginWord + head.text.length;
        }

        const start = new vscode.Position(line, beginWord);
        const end = new vscode.Position(line, endWord);
        const range = new vscode.Range(start, end);

        console.log(head.range);

        let jsonMap = new vscode.DocumentSymbol(
            " ",
            " ",
            vscode.SymbolKind.Object,
            range, range);

        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof vscode.DocumentSymbol) {
                jsonMap.children.push(children[i]);
            }
        }

        return [jsonMap];

    }

    visitJson_pair(ctx: Json_pairContext) {
        var children = this.visitChildren(ctx);
        console.log("visitJson_pair", children);

        const head = children[0];
        const tail = children[children.length - 1];

        if (tail.kind === vscode.SymbolKind.Object) {
            tail.name = head.name;
        } else {
            const tmp = tail.name;
            tail.detail = tmp;
            tail.name = head.name;
        }

        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof vscode.DocumentSymbol) {
                console.log("name : ", children[i].name);
                console.log("name : ", children[i].name);
                console.log("detail : ", children[i].detail);
                console.log("kind : ", children[i].kind);
                console.log("vscode.SymbolKind : ", vscode.SymbolKind);
            }
        }

        return tail;
    }

    visitJson_seq(ctx: Json_seqContext) {
        this.level = this.level + 1;
        var children = this.visitChildren(ctx);
        this.level = this.level - 1;

        if (this.level === 0) {
            var response = [];

            for (var i = 0; i < children.length; i++) {
                if (children[i] instanceof vscode.DocumentSymbol) {
                    response.push(children[i]);
                }
            }
            return response;
        }

        const head = children.shift();

        const regex = /\r\n/g;

        var line = this.text.slice(0, head.stop).match(regex)?.length;

        var beginWord;
        var endWord;

        if (line === undefined) {
            line = 0;
            beginWord = head.start;
            endWord = head.stop;
        } else {
            console.log(this.text.slice(0, head.stop));

            const lastocc = this.text.slice(0, head.stop).lastIndexOf("\r\n");

            console.log(this.text.slice(0, head.stop).lastIndexOf("\r\n"));

            beginWord = head.start - lastocc;
            endWord = beginWord + head.text.length;
        }

        const start = new vscode.Position(line, beginWord);
        const end = new vscode.Position(line, endWord);
        const range = new vscode.Range(start, end);

        console.log(head.range);

        let jsonSeq = new vscode.DocumentSymbol(
            " ",
            " ",
            vscode.SymbolKind.Array,
            range, range);

        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof vscode.DocumentSymbol) {
                jsonSeq.children.push(children[i]);
            }
        }

        return [jsonSeq];
    }

    visitString?(ctx: StringContext) {
        const child = this.visitChildren(ctx);
        const regex = /\r\n/g;

        var line = this.text.slice(0, child.stop).match(regex)?.length;

        var beginWord;
        var endWord;

        if (line === undefined) {
            line = 0;
            beginWord = child.start;
            endWord = child.stop;
        } else {
            console.log(this.text.slice(0, child.stop));

            const lastocc = this.text.slice(0, child.stop).lastIndexOf("\r\n");

            console.log(this.text.slice(0, child.stop).lastIndexOf("\r\n"));

            beginWord = child.start - lastocc;
            endWord = beginWord + child.text.length;
        }

        const start = new vscode.Position(line, beginWord);
        const end = new vscode.Position(line, endWord);
        const range = new vscode.Range(start, end);

        let string = new vscode.DocumentSymbol(
            child.text,
            " ",
            vscode.SymbolKind.String,
            range, range);

        return string;
    }

    visitBoolean(ctx: BooleanContext) {
        const child = this.visitChildren(ctx);
        const regex = /\r\n/g;

        var line = this.text.slice(0, child.stop).match(regex)?.length;

        var beginWord;
        var endWord;

        if (line === undefined) {
            line = 0;
            beginWord = child.start;
            endWord = child.stop;
        } else {
            console.log(this.text.slice(0, child.stop));

            const lastocc = this.text.slice(0, child.stop).lastIndexOf("\r\n");

            console.log(this.text.slice(0, child.stop).lastIndexOf("\r\n"));

            beginWord = child.start - lastocc;
            endWord = beginWord + child.text.length;
        }

        const start = new vscode.Position(line, beginWord);
        const end = new vscode.Position(line, endWord);
        const range = new vscode.Range(start, end);

        let boolean = new vscode.DocumentSymbol(
            child.text,
            " ",
            vscode.SymbolKind.Boolean,
            range, range);

        return boolean;
    }

    visitNumber(ctx: NumberContext) {
        const child = this.visitChildren(ctx);
        const regex = /\r\n/g;

        var line = this.text.slice(0, child.stop).match(regex)?.length;

        var beginWord;
        var endWord;

        if (line === undefined) {
            line = 0;
            beginWord = child.start;
            endWord = child.stop;
        } else {
            console.log(this.text.slice(0, child.stop));

            const lastocc = this.text.slice(0, child.stop).lastIndexOf("\r\n");

            console.log(this.text.slice(0, child.stop).lastIndexOf("\r\n"));

            beginWord = child.start - lastocc;
            endWord = beginWord + child.text.length;
        }

        const start = new vscode.Position(line, beginWord);
        const end = new vscode.Position(line, endWord);
        const range = new vscode.Range(start, end);

        let number = new vscode.DocumentSymbol(
            child.text,
            " ",
            vscode.SymbolKind.Number,
            range, range);

        return number;
    }

    visitTerminal(node: TerminalNode) {
        console.log("Node", node)
        console.log("Node symbol", node._symbol);
        console.log("Node start", node._symbol.startIndex);
        console.log("Node stop", node._symbol.stopIndex);

        // TODO aussi retourner et traiter start et stop index
        const test = {
            "text": node.text,
            "start": node._symbol.startIndex,
            "stop": node._symbol.stopIndex
        }
        return test;
    }
}