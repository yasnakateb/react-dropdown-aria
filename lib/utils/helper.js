"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOptionGroup(option) {
    return option.groupOptions !== undefined;
}
exports.isOptionGroup = isOptionGroup;
exports.arrayReducer = function (acc, val) {
    if (isOptionGroup(val)) {
        return acc.concat(val.groupOptions);
    }
    return acc.concat(val);
};
