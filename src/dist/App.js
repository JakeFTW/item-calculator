"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var ItemGroup_1 = require("./webparts/components/ItemGroup");
require("./App.css");
function App() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(ItemGroup_1["default"], null)));
}
exports["default"] = App;
