import * as vscode from 'vscode';

import { AbstractParseTreeVisitor, RuleNode, TerminalNode } from "antlr4ts/tree";
import { BooleanContext, Json_mapContext, Json_pairContext, Json_seqContext, NumberContext, SchemaContext, StringContext } from "../generated/UONParser";
import { UONVisitor } from "../generated/UONVisitor";

export class UonASTVisitor extends AbstractParseTreeVisitor<any> implements UONVisitor<any> {

    level = 0; // Pour savoir si on est à la racine du document ou non
    text: String;

    // Keep in memory the document and the texte for what ???
    constructor(text: String) {
        super();
        this.text = text;
    }

    defaultResult() {
        return null;
    }

    shouldVisitNextChild(node: RuleNode, currentResult: any) {
        return true;
    }

    visitChildren(node: RuleNode) {
        // let result = this.defaultResult(); --> ne sert à rien
        let result: any; // any pour retourner un tableau ou non / plus de default 
        let n = node.childCount;
        if (n > 1) { // Si on a plus de 1 enfant alors on créer une structure pour garder les enfants
            result = [];
        }

        //// algo de parcours modifié -> on agregera dans la structure "racine"
        for (let i = 0; i < n; i++) {
            if (!this.shouldVisitNextChild(node, result)) {
                break;
            }
            let c = node.getChild(i);
            let childResult = c.accept(this);
            //result = this.aggregateResult(result, childResult);
            ////    

            // Si on est une strucutre contenant des enfants alors on push les enfants dans un tableau
            if (n > 1) {
                result.push(childResult);
            }
            else { // sinon on retourne directement l'enfant
                result = childResult;
                return result;
            }
        }

        // pourqouoi faire un flat ? [ [], [], ] -> TODO
        const flatResult = result.flat();
        return flatResult;
    }

    // Ne fait rien car on aggretate plus ici
    aggregateResult(aggregate: any, nextResult: any) {
        return null;
    }

    visitSchema(ctx: SchemaContext) {
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

        let schema = new vscode.DocumentSymbol(
            " ",
            " ",
            vscode.SymbolKind.Object,
            range, range);

        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof vscode.DocumentSymbol) {
                schema.children.push(children[i]);
            }
        }

        return [schema];
    }

    structure(ctx: any, kind : any) {
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

        // On récupère le première enfant...
        const head = children.shift(); // C'est quoi head concrêtement ? // Comme c'est un dfs ici çA représentera normalement le {
        const regex = /\r\n/g;

        // on prend le texte global, on drop jusqu'à head.stop et à l'aide de la regex on peut savoir le nombre d'espace donc de ligne
        // start et stop doivent représente leur emplaccement dans la chaine de texte
        var line = this.text.slice(0, head.stop).match(regex)?.length;

        var beginWord;
        var endWord;

        if (line === undefined) { // Normalement jamais atteint, au cas ou si erreur
            line = 0;
            beginWord = head.start;
            endWord = head.stop;
        } else {
            console.log(this.text.slice(0, head.stop));

            const lastNewLinePosition = this.text.slice(0, head.stop).lastIndexOf("\r\n");

            console.log(this.text.slice(0, head.stop).lastIndexOf("\r\n"));

            // calcul pour représenter la position selon vscode dans le niveau colonne
            beginWord = head.start - lastNewLinePosition;
            endWord = beginWord + head.text.length;
        }

        const start = new vscode.Position(line, beginWord);
        const end = new vscode.Position(line, endWord);
        const range = new vscode.Range(start, end);

        console.log(head.range);

       
        let structure = new vscode.DocumentSymbol(
            " ",
            " ",
            kind,
            range, range);

        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof vscode.DocumentSymbol) {
                structure.children.push(children[i]);
            }
        }

        return [structure]; // tableau pour représenter une strucuture...


    }

    visitJson_map(ctx: Json_mapContext) {
        return  this.structure(ctx, vscode.SymbolKind.Object);
    }

    // traitement particulier...
    //
    visitJson_pair(ctx: Json_pairContext) { // name(....) : !str toto
        var children = this.visitChildren(ctx); // cool dfs garde l'ordre donc agrlable à manipuler car c'est ce qu'on attend à recevoir
        console.log("visitJson_pair", children);

        const head = children[0];
        const tail = children[children.length - 1];

        if (tail.kind === vscode.SymbolKind.Object) {
            // {} name
            tail.name = head.name;
        } else {
            //[abc] name paul
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
        return this.structure(ctx, vscode.SymbolKind.Array);
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

    // traitement pour la position + afficher #(number)
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

    // Feuille finale, on crée la strucutre minimal utile , analyse précdéement de ce que c'est un node est récupérer les infos les + utiles
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