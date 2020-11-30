import { IClone } from "@aicacia/core";
export declare class State implements IClone {
    private index;
    private row;
    private col;
    constructor(index?: number, row?: number, col?: number);
    getIndex(): number;
    getRow(): number;
    getCol(): number;
    read(isNewline?: boolean): this;
    clone(): State;
    copy(state: State): this;
}
