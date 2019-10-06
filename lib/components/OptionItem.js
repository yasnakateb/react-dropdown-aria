"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
;
var OptionItem = function (props) {
    var buttonRef = react_1.useRef(null);
    var onOptionClicked = props.onOptionClicked, option = props.option, optionClass = props.optionClass, focused = props.focused, itemRenderer = props.itemRenderer;
    react_1.useEffect(function () {
        if (focused && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [focused]);
    if (itemRenderer) {
        return itemRenderer(props, buttonRef);
    }
    return (react_1.default.createElement("button", { ref: buttonRef, "aria-label": option.ariaLabel, className: optionClass, onClick: onOptionClicked, onKeyDown: onOptionClicked, tabIndex: -1, title: option.title, type: "button" },
        option.iconClass && react_1.default.createElement("i", { className: option.iconClass + " option-icon" }),
        option.value));
};
OptionItem.defaultProps = {
    optionClass: undefined,
    itemRenderer: undefined,
};
exports.default = OptionItem;
