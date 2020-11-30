import { none, Option, Result, ok, some, err } from "@aicacia/core";
import { Input } from "./Input";
import { IReader } from "./IReader";
import { State } from "./State";
import { Token } from "./Token";

export function next<T>(
  readers: ReadonlyArray<IReader<T>>,
  input: Input,
  state: State
): Option<Result<Token<T>>> {
  if (input.isDone(state)) {
    return none();
  } else {
    const nextState: Option<State> = none();

    let nextToken: Option<Token<T>> = none(),
      isEmpty = false;

    for (const reader of readers) {
      const tmpState = state.clone(),
        resultOption = reader.read(readers, input, state.clone(), tmpState);

      if (resultOption.isSome()) {
        const result = resultOption.unwrap();

        if (result.isOk()) {
          const tokenOption = result.unwrap();

          nextState.replace(tmpState);

          if (tokenOption.isSome()) {
            nextToken = tokenOption;
          } else {
            isEmpty = true;
          }
          break;
        } else {
          return some(err(result.unwrapErr()));
        }
      }
    }

    if (nextState.isSome()) {
      state.copy(nextState.unwrap());
    }

    if (isEmpty) {
      return next(readers, input, state);
    } else {
      return nextToken.map(ok);
    }
  }
}
