"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var emotion_1 = require("emotion");
var Dropdown_1 = tslib_1.__importDefault(require("../styles/Dropdown"));
var useStyle = function (styleObject) {
    var styles = react_1.useRef(styleObject);
    var getStyle = react_1.useCallback(function (key, props, state, extraState) {
        var baseStyle = Dropdown_1.default[key](props, state, extraState || {});
        var customStyle = styles.current[key];
        return customStyle ? emotion_1.css(customStyle(baseStyle, state, extraState)) : emotion_1.css(baseStyle);
    }, []);
    return getStyle;
};
exports.default = useStyle;
