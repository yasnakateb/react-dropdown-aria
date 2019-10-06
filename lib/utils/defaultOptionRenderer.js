"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var emotion_1 = require("emotion");
var OptionItem_1 = tslib_1.__importDefault(require("../components/OptionItem"));
var OptionGroup_1 = tslib_1.__importDefault(require("../components/OptionGroup"));
var helper_1 = require("./helper");
var constants_1 = require("./constants");
function defaultOptionRenderer(selectedOption, options, focusedIndex, onOptionClicked, getStyle, optionItemRenderer) {
    var itemRenderer = optionItemRenderer ?
        function (props, optionRef) { return optionItemRenderer(props, optionRef, getStyle); } :
        undefined;
    var index = 0;
    return options.map(function (option) {
        if (helper_1.isOptionGroup(option)) { // Is group of options
            var startingIndex = index;
            index += option.groupOptions.length;
            return (react_1.default.createElement(OptionGroup_1.default, { key: option.label, optionGroup: option, selectedOption: selectedOption, focusedIndex: focusedIndex, startingIndex: startingIndex, onOptionClicked: onOptionClicked, getStyle: getStyle, itemRenderer: itemRenderer }));
        }
        var value = option.value, className = option.className;
        var isFocused = index === focusedIndex;
        var optionClass = emotion_1.cx(className, getStyle(constants_1.StyleKeys.OptionItem, { selected: value === selectedOption }));
        index += 1;
        return (react_1.default.createElement(OptionItem_1.default, { key: value, optionClass: optionClass, onOptionClicked: onOptionClicked, option: option, focused: isFocused, itemRenderer: itemRenderer }));
    });
}
exports.default = defaultOptionRenderer;
