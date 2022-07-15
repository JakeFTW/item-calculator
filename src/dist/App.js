"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var Calculator_1 = require("./webparts/components/Calculator");
require("./App.css");
var styles_1 = require("@mui/material/styles");
var darkTheme = styles_1.createTheme({
    palette: {
        mode: "dark"
    }
});
function App() {
    return (react_1["default"].createElement(styles_1.ThemeProvider, { theme: darkTheme },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(Calculator_1["default"], null)));
}
exports["default"] = App;
