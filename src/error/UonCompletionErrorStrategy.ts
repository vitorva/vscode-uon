import { DefaultErrorStrategy, Parser, RecognitionException, Token } from "antlr4ts";
import { IntervalSet } from "antlr4ts/misc/IntervalSet";
import { UONParser } from "../generated/UONParser";

export class UonCompletionErrorStrategy extends DefaultErrorStrategy {
  protected singleTokenDeletion(recognizer: Parser): Token | undefined {
    return super.singleTokenDeletion(recognizer);
  }

  protected consumeUntil(recognizer: Parser, set: IntervalSet): void {
    super.consumeUntil(recognizer, set);
  }

  public recover(recognizer: Parser, e: RecognitionException): void {
    super.recover(recognizer, e);
  }

  protected getErrorRecoverySet(recognizer: Parser): IntervalSet {
    const defaultRecoverySet = super.getErrorRecoverySet(recognizer);
    if (recognizer.ruleContext.ruleIndex === UONParser.RULE_presentation_properties) {
      const uonFollowSet = new IntervalSet();
      uonFollowSet.add(UONParser.DESCRIPTION);
      uonFollowSet.add(UONParser.OPTIONAL);
      if (uonFollowSet.size > 0) { return uonFollowSet; };
    }
    return defaultRecoverySet;
  }
}