"use strict";
exports.__esModule = true;
exports.ItemRow = void 0;
var react_1 = require("react");
var Button_1 = require("@mui/material/Button");
var Slider_1 = require("@mui/material/Slider");
exports.ItemRow = function (_a) {
    var item = _a.item, handleAmountDecrease = _a.handleAmountDecrease, handleAmountIncrease = _a.handleAmountIncrease;
    // style based on item style
    var style = "";
    if (item.style === "slider") {
        style = "slider";
    }
    if (item.style === "button") {
        style = "button";
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, item.name),
        react_1["default"].createElement("p", null,
            "Price: \u00A3",
            item.price,
            " ",
            react_1["default"].createElement("br", null),
            " Amount: ",
            item.amount),
        style === "button" ? (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Button_1["default"], { onClick: handleAmountDecrease }, "-"),
            react_1["default"].createElement(Button_1["default"], { onClick: handleAmountIncrease }, "+"))) : null,
        style === "slider" ? (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Slider_1["default"], { "aria-label": "Item amount", defaultValue: 0, step: 1, max: 16, valueLabelDisplay: "on", marks: true }))) : null,
        react_1["default"].createElement("p", null,
            "Total: \u00A3",
            item.total)));
};
