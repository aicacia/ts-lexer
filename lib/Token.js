"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
var Token = /** @class */ (function () {
    function Token(value, meta) {
        this.value = value;
        this.meta = meta;
    }
    Token.prototype.getValue = function () {
        return this.value;
    };
    Token.prototype.getMeta = function () {
        return this.meta;
    };
    Token.prototype.clone = function () {
        return new Token(this.value, this.meta.clone());
    };
    Token.prototype.copy = function (other) {
        this.value = other.value;
        this.meta.copy(other.meta);
        return this;
    };
    return Token;
}());
exports.Token = Token;
