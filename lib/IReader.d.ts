import { Option, Result } from "@aicacia/core";
import { Input } from "./Input";
import { State } from "./State";
import { Token } from "./Token";
export interface IReader<T> {
    read(readers: ReadonlyArray<IReader<T>>, input: Input, current: State, next: State): Option<Result<Option<Token<T>>>>;
}
