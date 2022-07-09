import { AbstractParseTreeVisitor, RuleNode} from "antlr4ts/tree";
import { BooleanContext, NumberContext, StringContext } from "../../../generated/UONParser";

import { UONVisitor } from '../../../generated/UONVisitor';

export class UonASTVisitorTest extends AbstractParseTreeVisitor<number> implements UONVisitor<number> {

    defaultResult() {
        return 0;
    }

    visitChildren(node: RuleNode) {
        let result: number = this.defaultResult();
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

    aggregateResult(aggregate: number, nextResult: number) {
        let result = aggregate + nextResult;
        return result;
    }

    visitString(ctx: StringContext) {
        return 1;
    }

    visitBoolean(ctx: BooleanContext) {
        return 1;
    }

    visitNumber(ctx: NumberContext) {
        return 1;
    }
}