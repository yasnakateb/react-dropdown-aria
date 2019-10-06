"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var OptionItem_1 = tslib_1.__importDefault(require("./OptionItem"));
var constants_1 = require("../utils/constants");
var emotion_1 = require("emotion");
;
var OptionGroup = function (_a) {
    var optionGroup = _a.optionGroup, getStyle = _a.getStyle, selectedOption = _a.selectedOption, startingIndex = _a.startingIndex, focusedIndex = _a.focusedIndex, onOptionClicked = _a.onOptionClicked, itemRenderer = _a.itemRenderer;
    var groupOptions = optionGroup.groupOptions, label = optionGroup.label;
    var index = startingIndex;
    return (react_1.default.createElement("div", { className: getStyle(constants_1.StyleKeys.GroupContainer) },
        react_1.default.createElement("div", { className: getStyle(constants_1.StyleKeys.GroupHeading) },
            react_1.default.createElement("div", null,
                label.toUpperCase(),
                " | \u00A0"),
            react_1.default.createElement("div", null, groupOptions.length)),
        groupOptions.map(function (groupOption) {
            var selected = groupOption.value === selectedOption;
            var focused = index === focusedIndex;
            var groupOptionClass = emotion_1.cx(groupOption.className, getStyle(constants_1.StyleKeys.OptionItem, { selected: selected }));
            index += 1;
            return (react_1.default.createElement(OptionItem_1.default, { key: groupOption.value, optionClass: groupOptionClass, onOptionClicked: onOptionClicked, option: groupOption, focused: focused, itemRenderer: itemRenderer }));
        }),
        react_1.default.createElement("div", { className: getStyle(constants_1.StyleKeys.GroupDivider) })));
};
OptionGroup.defaultProps = {
    itemRenderer: undefined,
};
exports.default = OptionGroup;
