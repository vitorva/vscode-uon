import * as vscode from 'vscode';

import { AbstractParseTreeVisitor, RuleNode, TerminalNode } from "antlr4ts/tree";
import { AttributeContext, AttributesContext, BooleanContext, Json_mapContext, Json_pairContext, Json_seqContext, NumberContext, SchemaContext, StringContext } from "../generated/UONParser";
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
        return [];
    }

    shouldVisitNextChild(node: RuleNode, currentResult: any) {
        return true;
    }

    visitChildren(node: RuleNode) {
        let result: any = this.defaultResult();
        let n = node.childCount;
        for (let i = 0; i < n; i++) {
            if (!this.shouldVisitNextChild(node, result)) {
                break;
            }
            let c = node.getChild(i);
            let childResult = c.accept(this);
            result = this.aggregateResult(result, childResult);
        }
        return result;
    }

    // Ne fait rien car on aggretate plus ici
    aggregateResult(aggregate: any, nextResult: any) {
        let tmp = aggregate.concat(nextResult);
        return tmp;
    }

    visitAttributes(ctx: AttributesContext) {
        const children = this.visitChildren(ctx);
        return children;

    }

    visitAttribute(ctx: AttributeContext) {
        const children = this.visitChildren(ctx);

        var response = [];

        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof vscode.DocumentSymbol) {
                response.push(children[i]);
            }
        }

        console.log(response);
        // TODO gérer les proprités partout
        /*
        !!mySensor: !schema ( description : "provide great infos") {
        descriptions :  !int ( max : 32 ),
        pression ( optional : True ) : !float,
        names: !str ,
        located: !bool  
        }
        
        / description ^provide great infos^
        {} description
            {} !int
                # max 32
                # min : 12
            {} pression
                / Optional true
                !float
        */

        const head = response[0];
        const tail = response[response.length - 1];

        if (response.length > 1) {
            const tmp = tail.name;
            tail.detail = tmp;
            tail.name = head.name;
        }

        return tail;
    }

    visitSchema(ctx: SchemaContext) {
        return this.structure(ctx, vscode.SymbolKind.Object);
    }

    createDocumentSymbol(word: any, kind: any) {
        const text = word.text;
        const regex = /\r\n/g;

        // on prend le texte global, on drop jusqu'à head.stop et à l'aide de la regex on peut savoir le nombre d'espace donc de ligne
        // start et stop doivent représente leur emplaccement dans la chaine de texte
        var line = this.text.slice(0, word.stop).match(regex)?.length;

        var beginWord;
        var endWord;

        if (line === undefined) { // Normalement jamais atteint, au cas ou si erreur
            line = 0;
            beginWord = word.start;
            endWord = word.stop;
        } else {
            console.log(this.text.slice(0, word.stop));

            const lastNewLinePosition = this.text.slice(0, word.stop).lastIndexOf("\r\n");

            console.log(this.text.slice(0, word.stop).lastIndexOf("\r\n"));

            // calcul pour représenter la position selon vscode dans le niveau colonne
            beginWord = word.start - lastNewLinePosition;
            endWord = beginWord + word.text.length;
        }

        const start = new vscode.Position(line, beginWord);
        const end = new vscode.Position(line, endWord);
        const range = new vscode.Range(start, end);

        console.log(word.range);

        let structure = new vscode.DocumentSymbol(
            text,
            " ",
            kind,
            range, range);

        return structure;
    }

    structure(ctx: any, kind: any) {
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

        let structure = this.createDocumentSymbol(head, kind);

        for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof vscode.DocumentSymbol) {
                structure.children.push(children[i]);
            }
        }

        return [structure]; // tableau pour représenter une strucuture...
    }

    visitJson_map(ctx: Json_mapContext) {
        return this.structure(ctx, vscode.SymbolKind.Object);
    }

    // traitement particulier...
    //
    visitJson_pair(ctx: Json_pairContext) { // name(....) : !str toto
        var children = this.visitChildren(ctx); // cool dfs garde l'ordre donc agrlable à manipuler car c'est ce qu'on attend à recevoir

        //console.log("visitJson_pair", children);

        const head = children[0];
        const tail = children[children.length - 1];

        if (tail.kind === vscode.SymbolKind.Object) {
            // {} name
            tail.name = head.name;
        } else { // On fait les modifs pour obtenir le résultat visuel suivant :
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

    visitString(ctx: StringContext) {
        const child = this.visitChildren(ctx);

        let string = this.createDocumentSymbol(child[0], vscode.SymbolKind.String);

        return string;
    }

    visitBoolean(ctx: BooleanContext) {
        const child = this.visitChildren(ctx);

        let bool = this.createDocumentSymbol(child[0], vscode.SymbolKind.Boolean);

        return bool;
    }

    // traitement pour la position + afficher #(number)
    visitNumber(ctx: NumberContext) {
        const child = this.visitChildren(ctx);

        let number = this.createDocumentSymbol(child[0], vscode.SymbolKind.Number);

        return number;
    }

    // Feuille finale, on crée la strucutre minimal utile , analyse précdéement de ce que c'est un node est récupérer les infos les + utiles
    visitTerminal(node: TerminalNode) {
        console.log("Node", node)
        console.log("Node symbol", node._symbol);
        console.log("Node start", node._symbol.startIndex);
        console.log("Node stop", node._symbol.stopIndex);

        // TODO aussi retourner et traiter start et stop index
        const terminalNode = {
            "text": node.text,
            "start": node._symbol.startIndex,
            "stop": node._symbol.stopIndex
        };

        return terminalNode;
    }
}