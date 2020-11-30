import { IClone } from "@aicacia/core";
import { State } from "./State";

export class TokenMeta implements IClone {
  private indexStart: number;
  private indexEnd: number;
  private colStart: number;
  private colEnd: number;
  private lineStart: number;
  private lineEnd: number;

  constructor(
    indexStart = 0,
    indexEnd = 0,
    colStart = 1,
    colEnd = 1,
    lineStart = 1,
    lineEnd = 1
  ) {
    this.indexStart = indexStart;
    this.indexEnd = indexEnd;
    this.colStart = colStart;
    this.colEnd = colEnd;
    this.lineStart = lineStart;
    this.lineEnd = lineEnd;
  }

  static from(current: State, next: State) {
    return new TokenMeta(
      current.getIndex(),
      next.getIndex(),
      current.getCol(),
      next.getCol(),
      current.getRow(),
      next.getRow()
    );
  }

  clone() {
    return new TokenMeta().copy(this);
  }
  copy(other: TokenMeta) {
    this.indexStart = other.indexStart;
    this.indexEnd = other.indexEnd;
    this.colStart = other.colStart;
    this.colEnd = other.colEnd;
    this.lineStart = other.lineStart;
    this.lineEnd = other.lineEnd;
    return this;
  }
}
