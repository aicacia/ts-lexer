import { IIterator, Option } from "@aicacia/core";
import { Input } from "./Input";
import { State } from "./State";

export class Lines implements IIterator<string> {
  private state: State;
  private input: Input;

  constructor(state: State, input: Input) {
    this.state = state;
    this.input = input;
  }

  peekLine() {
    return this.input.peekLine(this.state);
  }

  skipLine() {
    return this.input.skipLine(this.state);
  }

  next(): Option<string> {
    return this.input.readLine(this.state);
  }
}
