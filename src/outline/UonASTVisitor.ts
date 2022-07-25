import * as vscode from 'vscode';

import { AbstractParseTreeVisitor, RuleNode, TerminalNode } from "antlr4ts/tree";
import { AttributeContext, AttributesContext, BooleanContext, Json_mapContext, Json_pairContext, Json_seqContext, NumberContext, Number_presentation_propertieContext, Number_presentation_propertiesContext, Number_propertyContext, PairContext, Presentation_propertiesContext, Presentation_propertyContext, Quantity_scalarContext, SchemaContext, Schema_presentationContext, Seq_itemContext, StringContext, String_propertyContext, String_scalarContext, Types_propertieContext, Types_propertiesContext, Validation_propertiesContext, Yaml_mapContext, Yaml_seqContext } from "../generated/UONParser";
import { UONVisitor } from "../generated/UONVisitor";

export class UonASTVisitor extends AbstractParseTreeVisitor<any> implements UONVisitor<any> {

    level = 0; // Pour savoir si on est à la racine du document ou non

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

    aggregateResult(aggregate: any, nextResult: any) {
        return aggregate.concat(nextResult);
    }

    valueProps(ctx: any) {
        const children = this.visitChildren(ctx);

        children.shift();
        children.pop();

        let properties = new vscode.DocumentSymbol(
            "value props",
            "",
            vscode.SymbolKind.Property,
            children[0].range, children[0].range);

        for (let index = 0; index < children.length; index++) {
            if (children[index].text !== ",") {
                properties.children.push(children[index]);
            }
        }

        return properties;
    }

    visitNumber_presentation_properties(ctx: Number_presentation_propertiesContext) {
        return this.valueProps(ctx);
    }


    propertie(ctx: any) {
        var children = this.visitChildren(ctx);

        let property = new vscode.DocumentSymbol(
            children[0].text,
            children[2].name,
            children[2].kind,
            children[2].range, children[2].range);
        return property;
    }

    visitNumber_presentation_propertie(ctx: Number_presentation_propertieContext) {
        return this.propertie(ctx);
    }


    visitTypes_properties(ctx: Types_propertiesContext) {
        return this.valueProps(ctx);
    }

    visitTypes_propertie(ctx: Types_propertieContext) {
        return this.propertie(ctx);
    }

    visitPresentation_properties(ctx: Presentation_propertiesContext) {

        const children = this.visitChildren(ctx);

        children.shift();
        children.pop();

        let properties = new vscode.DocumentSymbol(
            "key props",
            "",
            vscode.SymbolKind.Property,
            children[0].range, children[0].range);

        for (let index = 0; index < children.length; index++) {
            if (children[index].text !== ",") {
                properties.children.push(children[index]);
            }
        }

        return properties;
    }

    visitPresentation_property(ctx: Presentation_propertyContext) {
        return this.propertie(ctx);
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

        const head = response[0];
        const tail = response[response.length - 1];

        if (response.length > 1) {
            const tmp = tail.name;
            tail.detail = tmp;
            tail.name = head.name;
        }

        if (children[1] instanceof vscode.DocumentSymbol) {
            tail.children.push(children[1]);
        }

        return tail;
    }

    visitSchema(ctx: SchemaContext) {
        return this.structure(ctx, vscode.SymbolKind.Object);
    }

    visitSchema_presentation(ctx: Schema_presentationContext) {
        return this.propertie(ctx);
    }

    visitQuantity_scalar(ctx: Quantity_scalarContext) {
        var children = this.visitChildren(ctx);

        if (!(children[children.length - 1] instanceof vscode.DocumentSymbol)) { // ça veut dire qu'on a une quantité
            children[children.length - 2].name = children[children.length - 2].name + " " + children[children.length - 1].text;
            children.pop();
        }

        if (children[1] instanceof vscode.DocumentSymbol && children[1].name === "value props") {
            children[2].children.push(children[1]);
        }

        return children;
    }

    visitString_property(ctx: String_propertyContext) {
        return this.propertie(ctx);
    }

    visitNumber_property(ctx: Number_propertyContext) {
        return this.propertie(ctx);
    }


    visitValidation_properties(ctx: Validation_propertiesContext) {
        var children = this.visitChildren(ctx);

        const properties = this.createDocumentSymbol(children[0], vscode.SymbolKind.Property);

        for (let index = 1; index < children.length; index++) {
            const element = children[index];
            if (element.text !== "(" && element.text !== ")" && element.text !== ":" && element.text !== ",") {
                properties.children.push(element);
            }
        }

        return properties;
    }


    createDocumentSymbol(word: any, kind: any) {
        const text = word.text;

        const start = new vscode.Position(word.line - 1, word.column);
        const end = new vscode.Position(word.line - 1, word.column + word.text.length);
        const range = new vscode.Range(start, end);

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

        let structure;
        if (head instanceof vscode.DocumentSymbol) {
            structure = head;
        } else {
            structure = this.createDocumentSymbol(head, kind);
        }

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


    pair(children: any, head: any, tail: any) {
        if (tail.kind === vscode.SymbolKind.Object || tail.kind === vscode.SymbolKind.Array) {
            // {} name
            tail.name = head.name;

            for (let index = 0; index < children.length; index++) {
                const element = children[index];
                if (element instanceof vscode.DocumentSymbol && (element.name === "key props")) {
                    tail.children.push(element);
                }
            }

        } else { // On fait les modifs pour obtenir le résultat visuel suivant :
            //[abc] name paul
            const tmp = tail.name;
            tail.detail = tmp;
            tail.name = head.name;

            for (let index = 0; index < children.length; index++) {
                const element = children[index];
                if (element instanceof vscode.DocumentSymbol && (element.name === "key props")) {
                    tail.children.push(element);
                }
            }
        }
        return tail;
    }


    visitJson_pair(ctx: Json_pairContext) { // name(....) : !str toto
        var children = this.visitChildren(ctx); // cool dfs garde l'ordre donc agrlable à manipuler car c'est ce qu'on attend à recevoir

        const head = children[0];
        let tail = children[children.length - 1];

        return this.pair(children, head, tail);
    }

    visitJson_seq(ctx: Json_seqContext) {
        return this.structure(ctx, vscode.SymbolKind.Array);
    }

    visitYaml_map(ctx: Yaml_mapContext) {
        return this.structure(ctx, vscode.SymbolKind.Object);
    }

    visitPair(ctx: PairContext) {
        var children = this.visitChildren(ctx);

        const head = children[0];
        const tail = children[children.length - 2];

        return this.pair(children, head, tail);
    }

    visitSeq_item(ctx: Seq_itemContext) {
        var children = this.visitChildren(ctx);
        children[0].text = " ";
        return children;
    }

    visitYaml_seq(ctx: Yaml_seqContext) {
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
        var text;

        if (node.text === "[" || node.text === "]" || node.text === "{" || node.text === "}" || node.text === "-") {
            text = " ";
        } else {
            text = node.text;
        }

        const terminalNode = {
            "text": text,
            "line": node._symbol.line,
            "column": node._symbol.charPositionInLine
        };

        return terminalNode;
    }
}