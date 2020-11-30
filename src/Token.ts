import { IClone } from "@aicacia/core";
import { TokenMeta } from "./TokenMeta";

export class Token<T> implements IClone {
  private value: T;
  private meta: TokenMeta;

  constructor(value: T, meta: TokenMeta) {
    this.value = value;
    this.meta = meta;
  }

  getValue() {
    return this.value;
  }
  getMeta() {
    return this.meta;
  }

  clone() {
    return new Token(this.value, this.meta.clone());
  }
  copy(other: Token<T>) {
    this.value = other.value;
    this.meta.copy(other.meta);
    return this;
  }
}
