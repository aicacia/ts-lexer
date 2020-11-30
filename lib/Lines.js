"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lines = void 0;
var Lines = /** @class */ (function () {
    function Lines(state, input) {
        this.state = state;
        this.input = input;
    }
    Lines.prototype.peekLine = function () {
        return this.input.peekLine(this.state);
    };
    Lines.prototype.skipLine = function () {
        return this.input.skipLine(this.state);
    };
    Lines.prototype.next = function () {
        return this.input.readLine(this.state);
    };
    return Lines;
}());
exports.Lines = Lines;
