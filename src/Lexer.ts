import { IIterator, Iterator, Result } from "@aicacia/core";
import { Input } from "./Input";
import { IReader } from "./IReader";
import { Token } from "./Token";
import { next } from "./next";
import { State } from "./State";

export class Lexer<T> implements IIterator<Result<Token<T>>> {
  private readers: ReadonlyArray<IReader<T>>;
  private input: Input;
  private state: State = new State();

  constructor(readers: ReadonlyArray<IReader<T>>, input: Input) {
    this.readers = readers;
    this.input = input;
  }

  iter() {
    return new Iterator(this);
  }

  next() {
    return next(this.readers, this.input, this.state);
  }
}
