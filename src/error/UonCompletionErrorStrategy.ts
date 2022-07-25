import { DefaultErrorStrategy, Parser, RecognitionException, Token } from "antlr4ts";
import { IntervalSet } from "antlr4ts/misc/IntervalSet";

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
    return defaultRecoverySet;
  }
}