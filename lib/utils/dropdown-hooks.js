"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable:object-literal-sort-keys */
var react_1 = require("react");
var search_hooks_1 = tslib_1.__importDefault(require("./search-hooks"));
var Dropdown_1 = tslib_1.__importDefault(require("../styles/Dropdown"));
var emotion_1 = require("emotion");
var dom_hooks_1 = tslib_1.__importDefault(require("./dom-hooks"));
var helper_1 = require("./helper");
var useDropdownHooks = function (props) {
    var style = props.style, options = props.options;
    var _a = react_1.useState(null), internalSelectedOption = _a[0], setInternalSelectedOption = _a[1];
    var _b = react_1.useState(-1), focusedIndex = _b[0], setFocusedIndex = _b[1];
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    var container = react_1.useRef(null);
    var dropdownButton = react_1.useRef(null);
    var flattenedOptions = react_1.useMemo(function () { return options.reduce(helper_1.arrayReducer, []); }, [options]);
    var searchDropdown = search_hooks_1.default(setFocusedIndex, flattenedOptions);
    var getStyle = react_1.useCallback(function (key, extraState) {
        var state = { focusedIndex: focusedIndex, open: open, internalSelectedOption: internalSelectedOption };
        var baseStyle = Dropdown_1.default[key](props, state, extraState || {});
        var customStyle = style[key];
        return customStyle ? emotion_1.css(customStyle(baseStyle, state, extraState)) : emotion_1.css(baseStyle);
    }, [style, focusedIndex, open, internalSelectedOption]);
    var closeDropdown = react_1.useCallback(function (focus) {
        if (focus === void 0) { focus = false; }
        setOpen(false);
        setFocusedIndex(function (p) { return (internalSelectedOption ? p : -1); });
        if (focus && dropdownButton.current) {
            dropdownButton.current.focus();
        }
    }, [dropdownButton.current, internalSelectedOption]);
    dom_hooks_1.default(closeDropdown, container);
    return {
        internalSelectedOption: internalSelectedOption, setInternalSelectedOption: setInternalSelectedOption,
        focusedIndex: focusedIndex, setFocusedIndex: setFocusedIndex,
        open: open, setOpen: setOpen,
        searchDropdown: searchDropdown,
        getStyle: getStyle,
        closeDropdown: closeDropdown,
        dropdownButton: dropdownButton,
        container: container,
        flattenedOptions: flattenedOptions,
    };
};
exports.default = useDropdownHooks;
