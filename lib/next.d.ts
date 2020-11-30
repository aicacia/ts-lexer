import { Option, Result } from "@aicacia/core";
import { Input } from "./Input";
import { IReader } from "./IReader";
import { State } from "./State";
import { Token } from "./Token";
export declare function next<T>(readers: ReadonlyArray<IReader<T>>, input: Input, state: State): Option<Result<Token<T>>>;
