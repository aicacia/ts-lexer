"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
var core_1 = require("@aicacia/core");
var next_1 = require("./next");
var State_1 = require("./State");
var Lexer = /** @class */ (function () {
    function Lexer(readers, input) {
        this.state = new State_1.State();
        this.readers = readers;
        this.input = input;
    }
    Lexer.prototype.iter = function () {
        return new core_1.Iterator(this);
    };
    Lexer.prototype.next = function () {
        return next_1.next(this.readers, this.input, this.state);
    };
    return Lexer;
}());
exports.Lexer = Lexer;
