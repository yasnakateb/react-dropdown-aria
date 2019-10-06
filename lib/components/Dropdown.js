"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var emotion_1 = require("emotion");
var constants_1 = require("../utils/constants");
var defaultOptionRenderer_1 = tslib_1.__importDefault(require("../utils/defaultOptionRenderer"));
var dropdown_hooks_1 = tslib_1.__importDefault(require("../utils/dropdown-hooks"));
var Dropdown = function (props) {
    var ariaDescribedBy = props.ariaDescribedBy, ariaLabel = props.ariaLabel, ariaLabelledBy = props.ariaLabelledBy, arrowRenderer = props.arrowRenderer, contentClassName = props.contentClassName, buttonClassName = props.buttonClassName, disabled = props.disabled, hideArrow = props.hideArrow, id = props.id, options = props.options, optionItemRenderer = props.optionItemRenderer, pageKeyTraverseSize = props.pageKeyTraverseSize, placeholder = props.placeholder, searchable = props.searchable, setSelected = props.setSelected, selectedOption = props.selectedOption, selectedValueClassName = props.selectedValueClassName;
    var _a = dropdown_hooks_1.default(props), internalSelectedOption = _a.internalSelectedOption, setInternalSelectedOption = _a.setInternalSelectedOption, getStyle = _a.getStyle, open = _a.open, setOpen = _a.setOpen, focusedIndex = _a.focusedIndex, setFocusedIndex = _a.setFocusedIndex, dropdownButton = _a.dropdownButton, container = _a.container, closeDropdown = _a.closeDropdown, searchDropdown = _a.searchDropdown, flattenedOptions = _a.flattenedOptions;
    var onDropdownClick = react_1.useCallback(function (_a) {
        var nativeEvent = _a.nativeEvent;
        if (nativeEvent instanceof KeyboardEvent) {
            if (nativeEvent.keyCode !== constants_1.KEY_CODES.ENTER)
                return;
            nativeEvent.preventDefault();
        }
        if (!disabled) {
            setOpen(function (p) { return !p; });
            setFocusedIndex(function (p) { return (open ? -1 : p); });
        }
    }, [open, disabled, setOpen]);
    var onOptionClicked = react_1.useCallback(function (_a) {
        var nativeEvent = _a.nativeEvent;
        if (nativeEvent instanceof KeyboardEvent) {
            if (nativeEvent.keyCode !== constants_1.KEY_CODES.ENTER)
                return;
            nativeEvent.preventDefault();
        }
        if (nativeEvent.target) {
            var newSelectedOption = nativeEvent.target.innerText;
            setSelected(newSelectedOption);
            setOpen(false);
            setInternalSelectedOption(newSelectedOption);
            if (nativeEvent instanceof KeyboardEvent && nativeEvent.keyCode && nativeEvent.keyCode === constants_1.KEY_CODES.ENTER && dropdownButton.current) {
                dropdownButton.current.focus();
            }
        }
    }, [setSelected, setOpen, setInternalSelectedOption, dropdownButton.current]);
    var onNavigation = react_1.useCallback(function (keyCode) {
        switch (keyCode) {
            case constants_1.KEY_CODES.UP_ARROW:
                setFocusedIndex(function (prev) {
                    if (prev === -1)
                        return 0;
                    if (prev === 0)
                        return flattenedOptions.length - 1;
                    return prev - 1;
                });
                break;
            case constants_1.KEY_CODES.DOWN_ARROW:
                setFocusedIndex(function (p) { return ((p + 1) % flattenedOptions.length); });
                break;
            case constants_1.KEY_CODES.PAGE_UP:
                setFocusedIndex(function (prev) {
                    if (prev === -1 || (prev - pageKeyTraverseSize < 0 && prev !== 0))
                        return 0;
                    if (prev - pageKeyTraverseSize < 0)
                        return flattenedOptions.length - 1;
                    return prev - pageKeyTraverseSize;
                });
                break;
            case constants_1.KEY_CODES.PAGE_DOWN:
                setFocusedIndex(function (prev) {
                    if (prev === -1 || prev === flattenedOptions.length - 1)
                        return 0;
                    if (prev + pageKeyTraverseSize > flattenedOptions.length - 1)
                        return flattenedOptions.length - 1;
                    return (prev + pageKeyTraverseSize) % flattenedOptions.length;
                });
                break;
            case constants_1.KEY_CODES.ESCAPE:
                closeDropdown(true);
                break;
            default:
                break;
        }
    }, [setFocusedIndex, flattenedOptions, pageKeyTraverseSize]);
    var onKeyDown = react_1.useCallback(function (_a) {
        var nativeEvent = _a.nativeEvent;
        var keyCode = nativeEvent.keyCode, key = nativeEvent.key;
        if (constants_1.NAVIGATION_KEYS.indexOf(keyCode) !== -1) {
            nativeEvent.preventDefault();
            onNavigation(keyCode);
        }
        else if (keyCode === constants_1.KEY_CODES.TAB) {
            closeDropdown();
        }
        else if (key.length === 1 && searchable) {
            searchDropdown(key.toLowerCase());
        }
    }, []);
    // ---------------- RENDER METHODS ---------------
    var renderArrow = react_1.useCallback(function () {
        var arrowClass = getStyle(constants_1.StyleKeys.Arrow);
        if (hideArrow)
            return null;
        if (arrowRenderer)
            return arrowRenderer(open);
        return react_1.default.createElement("div", { className: arrowClass });
    }, [open, hideArrow, arrowRenderer]);
    var displayedValue = selectedOption || internalSelectedOption || placeholder || '';
    var wrapperClass = getStyle(constants_1.StyleKeys.DropdownWrapper);
    var dropdownButtonClass = emotion_1.cx(buttonClassName, getStyle(constants_1.StyleKeys.DropdownButton));
    var displayedValueClass = emotion_1.cx(selectedValueClassName, getStyle(constants_1.StyleKeys.DisplayedValue));
    var contentClass = emotion_1.cx(contentClassName, getStyle(constants_1.StyleKeys.OptionContainer));
    return (react_1.default.createElement("div", { className: wrapperClass, onKeyDown: onKeyDown, ref: container },
        react_1.default.createElement("button", { "aria-label": ariaLabel, "ari-describedby": ariaDescribedBy, "aria-labelledby": ariaLabelledBy, className: dropdownButtonClass, disabled: disabled, id: id, onClick: onDropdownClick, onKeyDown: onDropdownClick, ref: dropdownButton, type: "button" },
            react_1.default.createElement("div", { className: displayedValueClass }, displayedValue),
            renderArrow()),
        react_1.default.createElement("ul", { className: contentClass }, defaultOptionRenderer_1.default(selectedOption, options, focusedIndex, onOptionClicked, getStyle, optionItemRenderer))));
};
Dropdown.defaultProps = {
    ariaDescribedBy: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    arrowRenderer: undefined,
    buttonClassName: undefined,
    centerText: false,
    contentClassName: null,
    disabled: false,
    height: null,
    hideArrow: false,
    id: null,
    maxContentHeight: null,
    openUp: false,
    optionItemRenderer: undefined,
    options: [],
    pageKeyTraverseSize: 10,
    placeholder: 'Select ...',
    searchable: true,
    selectedOption: null,
    selectedValueClassName: null,
    style: {},
    width: null,
};
exports.default = Dropdown;
