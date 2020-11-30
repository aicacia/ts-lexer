import { IIterator, Option } from "@aicacia/core";
import { Input } from "./Input";
import { State } from "./State";
export declare class Lines implements IIterator<string> {
    private state;
    private input;
    constructor(state: State, input: Input);
    peekLine(): Option<string>;
    skipLine(): void;
    next(): Option<string>;
}
