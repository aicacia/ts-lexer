"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNewline = exports.RE_NEWLINE = void 0;
exports.RE_NEWLINE = /^\n+$/;
function isNewline(char) {
    return exports.RE_NEWLINE.test(char);
}
exports.isNewline = isNewline;
