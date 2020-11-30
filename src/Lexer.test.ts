import * as tape from "tape";
import { State } from "./State";
import { Input, StringInput } from "./Input";
import { IReader } from "./IReader";
import { Token } from "./Token";
import { none, ok, Option, Result, some } from "@aicacia/core";
import { isWhitespace } from "./isWhitespace";
import { Lexer } from "./Lexer";
import { TokenMeta } from "./TokenMeta";

class WhitespaceReader implements IReader<string> {
  read(
    _readers: ReadonlyArray<IReader<string>>,
    input: Input,
    _current: State,
    next: State
  ): Option<Result<Option<Token<string>>>> {
    return input.readWhitespace(next).flatMap((whitespace) => {
      if (whitespace.length) {
        return some(ok(none()));
      } else {
        return none();
      }
    });
  }
}

class IdentifierReader implements IReader<string> {
  read(
    _readers: ReadonlyArray<IReader<string>>,
    input: Input,
    current: State,
    next: State
  ): Option<Result<Option<Token<string>>>> {
    return input.read(next).flatMap((char) => {
      if (!isWhitespace(char)) {
        let string = char,
          charOption;

        while ((charOption = input.peek(next, 0)).isSome()) {
          const char = charOption.unwrap();

          if (!isWhitespace(char)) {
            input.read(next);
            string += char;
          } else {
            break;
          }
        }

        return some(ok(some(new Token(string, TokenMeta.from(current, next)))));
      } else {
        return none();
      }
    });
  }
}

const readers = [new WhitespaceReader(), new IdentifierReader()];

tape("Lexer", (assert: tape.Test) => {
  const lexer = new Lexer(readers, new StringInput(" \n\t\r\n hello"));

  const tokenOption = lexer
    .iter()
    .map((token) => token.unwrap())
    .first();
  assert.true(tokenOption.isSome());

  const token = tokenOption.unwrap();
  assert.equal(token.getValue(), "hello");

  assert.end();
});
