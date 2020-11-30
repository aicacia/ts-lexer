import { none, Option, some, Peekable, iter } from "@aicacia/core";
import { isNewline } from "./isNewline";
import { isWhitespace } from "./isWhitespace";
import { Lines } from "./Lines";
import { State } from "./State";

export abstract class Input {
  abstract peek(state: State, offset: number): Option<string>;

  read(state: State): Option<string> {
    const charOption = this.peek(state, 0);

    if (charOption.isNone()) {
      return charOption;
    } else {
      state.read(isNewline(charOption.unwrap()));
      return charOption;
    }
  }

  lines(state: State): Lines {
    return new Lines(state, this);
  }

  readCount(state: State, count = 0): number {
    let read = 0;

    for (let i = 0; i < count; i++) {
      if (this.read(state).isNone()) {
        break;
      } else {
        read += 1;
      }
    }

    return read;
  }

  readLine(state: State): Option<string> {
    if (this.isDone(state)) {
      return none();
    } else {
      let string = "",
        charOption;

      while ((charOption = this.read(state)).isSome()) {
        const char = charOption.unwrap();

        if (isNewline(char)) {
          break;
        } else {
          string += char;
        }
      }

      return some(string);
    }
  }

  readWhitespace(state: State): Option<string> {
    if (this.isDone(state)) {
      return none();
    } else {
      let string = "",
        charOption;

      while ((charOption = this.peek(state, 0)).isSome()) {
        const char = charOption.unwrap();

        if (isWhitespace(char)) {
          string += char;
          this.read(state);
        } else {
          break;
        }
      }

      return some(string);
    }
  }

  peekLine(state: State): Option<string> {
    if (this.isDone(state)) {
      return none();
    } else {
      let string = "",
        index = 0,
        charOption;

      while ((charOption = this.peek(state, index)).isSome()) {
        const char = charOption.unwrap();

        if (isNewline(char)) {
          break;
        } else {
          index += 1;
          string += char;
        }
      }

      return some(string);
    }
  }

  skipWhitespace(state: State) {
    let charOption;

    while ((charOption = this.peek(state, 0)).isSome()) {
      if (isWhitespace(charOption.unwrap())) {
        this.read(state);
      } else {
        break;
      }
    }
  }

  skipLine(state: State) {
    let charOption;

    while ((charOption = this.read(state)).isSome()) {
      if (isNewline(charOption.unwrap())) {
        break;
      }
    }
  }

  isDone(state: State) {
    return !this.canPeek(state);
  }

  canPeek(state: State, offset = 0) {
    return this.peek(state, offset).isSome();
  }
}

export class StringInput extends Input {
  private source: Peekable<string>;

  constructor(source: string) {
    super();
    this.source = iter(source).peekable();
  }

  peek(state: State, offset = 0): Option<string> {
    return this.source.peek(state.getIndex() + offset);
  }
}
