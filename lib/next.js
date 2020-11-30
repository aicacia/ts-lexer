"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.next = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@aicacia/core");
function next(readers, input, state) {
    var e_1, _a;
    if (input.isDone(state)) {
        return core_1.none();
    }
    else {
        var nextState = core_1.none();
        var nextToken = core_1.none(), isEmpty = false;
        try {
            for (var readers_1 = tslib_1.__values(readers), readers_1_1 = readers_1.next(); !readers_1_1.done; readers_1_1 = readers_1.next()) {
                var reader = readers_1_1.value;
                var tmpState = state.clone(), resultOption = reader.read(readers, input, state.clone(), tmpState);
                if (resultOption.isSome()) {
                    var result = resultOption.unwrap();
                    if (result.isOk()) {
                        var tokenOption = result.unwrap();
                        nextState.replace(tmpState);
                        if (tokenOption.isSome()) {
                            nextToken = tokenOption;
                        }
                        else {
                            isEmpty = true;
                        }
                        break;
                    }
                    else {
                        return core_1.some(core_1.err(result.unwrapErr()));
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (readers_1_1 && !readers_1_1.done && (_a = readers_1.return)) _a.call(readers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (nextState.isSome()) {
            state.copy(nextState.unwrap());
        }
        if (isEmpty) {
            return next(readers, input, state);
        }
        else {
            return nextToken.map(core_1.ok);
        }
    }
}
exports.next = next;
