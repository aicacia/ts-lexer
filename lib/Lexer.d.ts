import { IIterator, Iterator, Result } from "@aicacia/core";
import { Input } from "./Input";
import { IReader } from "./IReader";
import { Token } from "./Token";
export declare class Lexer<T> implements IIterator<Result<Token<T>>> {
    private readers;
    private input;
    private state;
    constructor(readers: ReadonlyArray<IReader<T>>, input: Input);
    iter(): Iterator<Result<Token<T>, Error>>;
    next(): import("@aicacia/core").Option<Result<Token<T>, Error>>;
}
