import { IClone } from "@aicacia/core";

export class State implements IClone {
  private index = 0;
  private row = 1;
  private col = 1;

  constructor(index = 0, row = 1, col = 1) {
    this.index = index;
    this.row = row;
    this.col = col;
  }

  getIndex() {
    return this.index;
  }
  getRow() {
    return this.row;
  }
  getCol() {
    return this.col;
  }

  read(isNewline = false) {
    if (isNewline) {
      this.row += 1;
      this.col = 1;
    } else if (this.index != 0) {
      this.col += 1;
    }
    this.index += 1;
    return this;
  }

  clone() {
    return new State().copy(this);
  }

  copy(state: State) {
    this.index = state.index;
    this.row = state.row;
    this.col = state.col;
    return this;
  }
}
