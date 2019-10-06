"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useClickListener = function (closeDropdown, container) {
    react_1.useEffect(function () {
        document.addEventListener('mouseup', onClick, false);
        document.addEventListener('touchend', onClick, false);
        return function () {
            document.removeEventListener('mouseup', onClick);
            document.removeEventListener('touchend', onClick);
        };
    }, []);
    var onClick = react_1.useCallback(function (e) {
        if (container.current && !container.current.contains(e.target)) {
            closeDropdown();
        }
    }, [container.current]);
};
exports.default = useClickListener;
