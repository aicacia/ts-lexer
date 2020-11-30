"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWhitespace = exports.RE_WHITESPACE = void 0;
exports.RE_WHITESPACE = /^\s+$/;
function isWhitespace(char) {
    return exports.RE_WHITESPACE.test(char);
}
exports.isWhitespace = isWhitespace;
