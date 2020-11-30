"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringInput = exports.Input = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@aicacia/core");
var isNewline_1 = require("./isNewline");
var isWhitespace_1 = require("./isWhitespace");
var Lines_1 = require("./Lines");
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.read = function (state) {
        var charOption = this.peek(state, 0);
        if (charOption.isNone()) {
            return charOption;
        }
        else {
            state.read(isNewline_1.isNewline(charOption.unwrap()));
            return charOption;
        }
    };
    Input.prototype.lines = function (state) {
        return new Lines_1.Lines(state, this);
    };
    Input.prototype.readCount = function (state, count) {
        if (count === void 0) { count = 0; }
        var read = 0;
        for (var i = 0; i < count; i++) {
            if (this.read(state).isNone()) {
                break;
            }
            else {
                read += 1;
            }
        }
        return read;
    };
    Input.prototype.readLine = function (state) {
        if (this.isDone(state)) {
            return core_1.none();
        }
        else {
            var string = "", charOption = void 0;
            while ((charOption = this.read(state)).isSome()) {
                var char = charOption.unwrap();
                if (isNewline_1.isNewline(char)) {
                    break;
                }
                else {
                    string += char;
                }
            }
            return core_1.some(string);
        }
    };
    Input.prototype.readWhitespace = function (state) {
        if (this.isDone(state)) {
            return core_1.none();
        }
        else {
            var string = "", charOption = void 0;
            while ((charOption = this.peek(state, 0)).isSome()) {
                var char = charOption.unwrap();
                if (isWhitespace_1.isWhitespace(char)) {
                    string += char;
                    this.read(state);
                }
                else {
                    break;
                }
            }
            return core_1.some(string);
        }
    };
    Input.prototype.peekLine = function (state) {
        if (this.isDone(state)) {
            return core_1.none();
        }
        else {
            var string = "", index = 0, charOption = void 0;
            while ((charOption = this.peek(state, index)).isSome()) {
                var char = charOption.unwrap();
                if (isNewline_1.isNewline(char)) {
                    break;
                }
                else {
                    index += 1;
                    string += char;
                }
            }
            return core_1.some(string);
        }
    };
    Input.prototype.skipWhitespace = function (state) {
        var charOption;
        while ((charOption = this.peek(state, 0)).isSome()) {
            if (isWhitespace_1.isWhitespace(charOption.unwrap())) {
                this.read(state);
            }
            else {
                break;
            }
        }
    };
    Input.prototype.skipLine = function (state) {
        var charOption;
        while ((charOption = this.read(state)).isSome()) {
            if (isNewline_1.isNewline(charOption.unwrap())) {
                break;
            }
        }
    };
    Input.prototype.isDone = function (state) {
        return !this.canPeek(state);
    };
    Input.prototype.canPeek = function (state, offset) {
        if (offset === void 0) { offset = 0; }
        return this.peek(state, offset).isSome();
    };
    return Input;
}());
exports.Input = Input;
var StringInput = /** @class */ (function (_super) {
    tslib_1.__extends(StringInput, _super);
    function StringInput(source) {
        var _this = _super.call(this) || this;
        _this.source = core_1.iter(source).peekable();
        return _this;
    }
    StringInput.prototype.peek = function (state, offset) {
        if (offset === void 0) { offset = 0; }
        return this.source.peek(state.getIndex() + offset);
    };
    return StringInput;
}(Input));
exports.StringInput = StringInput;
