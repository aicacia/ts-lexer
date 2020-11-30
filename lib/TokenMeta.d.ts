import { IClone } from "@aicacia/core";
import { State } from "./State";
export declare class TokenMeta implements IClone {
    private indexStart;
    private indexEnd;
    private colStart;
    private colEnd;
    private lineStart;
    private lineEnd;
    constructor(indexStart?: number, indexEnd?: number, colStart?: number, colEnd?: number, lineStart?: number, lineEnd?: number);
    static from(current: State, next: State): TokenMeta;
    clone(): TokenMeta;
    copy(other: TokenMeta): this;
}
