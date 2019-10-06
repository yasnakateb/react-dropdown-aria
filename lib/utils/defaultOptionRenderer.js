"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var emotion_1 = require("emotion");
var OptionItem_1 = tslib_1.__importDefault(require("../components/OptionItem"));
var helper_1 = require("./helper");
var constants_1 = require("./constants");
function defaultOptionRenderer(selectedOption, options, focusedIndex, onOptionClicked, getStyle, optionItemRenderer) {
    var itemRenderer = optionItemRenderer ?
        function (props, optionRef) { return optionItemRenderer(props, optionRef, getStyle); } :
        undefined;
    var index = 0;
    return options.map(function (option) {
        if (helper_1.isOptionGroup(option)) { // Is group of options
            var groupOptions = option.groupOptions, label = option.label;
            return (react_1.default.createElement("div", { key: label, className: getStyle(constants_1.StyleKeys.GroupContainer) },
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
        }
        var value = option.value, className = option.className;
        var isFocused = index === focusedIndex;
        var optionClass = emotion_1.cx(className, getStyle(constants_1.StyleKeys.OptionItem, { selected: value === selectedOption }));
        index += 1;
        return (react_1.default.createElement(OptionItem_1.default, { key: value, optionClass: optionClass, onOptionClicked: onOptionClicked, option: option, focused: isFocused, itemRenderer: itemRenderer }));
    });
}
exports.default = defaultOptionRenderer;
