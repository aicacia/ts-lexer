"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var State = /** @class */ (function () {
    function State(index, row, col) {
        if (index === void 0) { index = 0; }
        if (row === void 0) { row = 1; }
        if (col === void 0) { col = 1; }
        this.index = 0;
        this.row = 1;
        this.col = 1;
        this.index = index;
        this.row = row;
        this.col = col;
    }
    State.prototype.getIndex = function () {
        return this.index;
    };
    State.prototype.getRow = function () {
        return this.row;
    };
    State.prototype.getCol = function () {
        return this.col;
    };
    State.prototype.read = function (isNewline) {
        if (isNewline === void 0) { isNewline = false; }
        if (isNewline) {
            this.row += 1;
            this.col = 1;
        }
        else if (this.index != 0) {
            this.col += 1;
        }
        this.index += 1;
        return this;
    };
    State.prototype.clone = function () {
        return new State().copy(this);
    };
    State.prototype.copy = function (state) {
        this.index = state.index;
        this.row = state.row;
        this.col = state.col;
        return this;
    };
    return State;
}());
exports.State = State;
