"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMeta = void 0;
var TokenMeta = /** @class */ (function () {
    function TokenMeta(indexStart, indexEnd, colStart, colEnd, lineStart, lineEnd) {
        if (indexStart === void 0) { indexStart = 0; }
        if (indexEnd === void 0) { indexEnd = 0; }
        if (colStart === void 0) { colStart = 1; }
        if (colEnd === void 0) { colEnd = 1; }
        if (lineStart === void 0) { lineStart = 1; }
        if (lineEnd === void 0) { lineEnd = 1; }
        this.indexStart = indexStart;
        this.indexEnd = indexEnd;
        this.colStart = colStart;
        this.colEnd = colEnd;
        this.lineStart = lineStart;
        this.lineEnd = lineEnd;
    }
    TokenMeta.from = function (current, next) {
        return new TokenMeta(current.getIndex(), next.getIndex(), current.getCol(), next.getCol(), current.getRow(), next.getRow());
    };
    TokenMeta.prototype.clone = function () {
        return new TokenMeta().copy(this);
    };
    TokenMeta.prototype.copy = function (other) {
        this.indexStart = other.indexStart;
        this.indexEnd = other.indexEnd;
        this.colStart = other.colStart;
        this.colEnd = other.colEnd;
        this.lineStart = other.lineStart;
        this.lineEnd = other.lineEnd;
        return this;
    };
    return TokenMeta;
}());
exports.TokenMeta = TokenMeta;
