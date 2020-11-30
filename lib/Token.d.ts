import { IClone } from "@aicacia/core";
import { TokenMeta } from "./TokenMeta";
export declare class Token<T> implements IClone {
    private value;
    private meta;
    constructor(value: T, meta: TokenMeta);
    getValue(): T;
    getMeta(): TokenMeta;
    clone(): Token<T>;
    copy(other: Token<T>): this;
}
