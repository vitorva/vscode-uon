import { ANTLRErrorListener, CommonToken, RecognitionException, Recognizer, Token } from "antlr4ts";

export class ErrorCompletionListener implements ANTLRErrorListener<CommonToken> {

    public error = 0;
    public line = 0;
    public column = 0;

    public syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number,
        charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        if (this.error > 0) { return; }
        this.error = this.error + 1;
        this.line = line - 1;
        this.column = charPositionInLine;
    }
}