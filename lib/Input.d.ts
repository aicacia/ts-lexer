import { Option } from "@aicacia/core";
import { Lines } from "./Lines";
import { State } from "./State";
export declare abstract class Input {
    abstract peek(state: State, offset: number): Option<string>;
    read(state: State): Option<string>;
    lines(state: State): Lines;
    readCount(state: State, count?: number): number;
    readLine(state: State): Option<string>;
    readWhitespace(state: State): Option<string>;
    peekLine(state: State): Option<string>;
    skipWhitespace(state: State): void;
    skipLine(state: State): void;
    isDone(state: State): boolean;
    canPeek(state: State, offset?: number): boolean;
}
export declare class StringInput extends Input {
    private source;
    constructor(source: string);
    peek(state: State, offset?: number): Option<string>;
}
