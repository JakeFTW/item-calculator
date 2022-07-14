"use strict";
exports.__esModule = true;
exports.ItemRow = void 0;
var react_1 = require("react");
var Button_1 = require("@mui/material/Button");
var Slider_1 = require("@mui/material/Slider");
var Grid_1 = require("@mui/material/Grid");
exports.ItemRow = function (_a) {
    var item = _a.item, handleAmountDecrease = _a.handleAmountDecrease, handleAmountIncrease = _a.handleAmountIncrease, handleUpdate = _a.handleUpdate;
    // slider state
    var _b = react_1["default"].useState(0), sliderValue = _b[0], setSliderValue = _b[1];
    var handleSliderChange = function (event, newValue) {
        setSliderValue(newValue);
        handleUpdate(item.id, sliderValue);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, item.name),
        react_1["default"].createElement("p", null,
            "Price: \u00A3",
            item.price,
            " ",
            react_1["default"].createElement("br", null),
            " Amount: ",
            item.amount),
        item.style === "button" ? (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Button_1["default"], { onClick: handleAmountDecrease }, "-"),
            react_1["default"].createElement(Button_1["default"], { onClick: handleAmountIncrease }, "+"))) : null,
        item.style === "slider" ? (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2, alignItems: "center" },
                react_1["default"].createElement(Grid_1["default"], { item: true, xs: true },
                    react_1["default"].createElement(Slider_1["default"], { "aria-label": "Item amount", step: 1, max: 16, valueLabelDisplay: "on", value: sliderValue, onChange: handleSliderChange, marks: true }))))) : null,
        react_1["default"].createElement("p", null,
            "Total: \u00A3",
            item.total)));
};
