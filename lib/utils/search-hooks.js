"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSearch = function (setFocusedIndex, flattenedOptions) {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var searchTimer = react_1.useRef(null);
    var searchList = react_1.useCallback(function (value) {
        var index = flattenedOptions.findIndex(function (option) { return option.value.toLowerCase().indexOf(value) === 0; });
        if (index)
            setFocusedIndex(index);
    }, [flattenedOptions, setFocusedIndex]);
    var clearTimer = react_1.useCallback(function () {
        if (searchTimer.current) {
            clearTimeout(searchTimer.current);
            searchTimer.current = null;
        }
    }, [searchTimer.current]);
    var clearSearch = react_1.useCallback(function () { return setSearchTerm(''); }, [setSearchTerm]);
    var searchDropdown = react_1.useCallback(function (key) {
        var oldTerm = searchTerm;
        setSearchTerm(function (p) { return (p + key); });
        searchList(oldTerm + key);
        clearTimer();
        var timer = setTimeout(clearSearch, 1500);
        searchTimer.current = timer;
    }, [searchTerm]);
    return searchDropdown;
};
exports.default = useSearch;
