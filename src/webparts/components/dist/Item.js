"use strict";
exports.__esModule = true;
exports.Item = void 0;
var react_1 = require("react");
var Button_1 = require("@mui/material/Button");
var Slider_1 = require("@mui/material/Slider");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Typography_1 = require("@mui/material/Typography");
var Box_1 = require("@mui/material/Box");
exports.Item = function (_a) {
    var item = _a.item, handleUpdate = _a.handleUpdate;
    var handleAmountDecrease = function (index, amount) {
        var min = 0;
        if (amount <= min) {
            console.log("Already at min: 0");
        }
        else {
            var newAmount = amount - 1;
            handleUpdate(index, newAmount);
        }
    };
    var handleAmountIncrease = function (index, amount) {
        var max = 16;
        if (amount >= max) {
            console.log("Already at max: 16");
        }
        else {
            var newAmount = amount + 1;
            handleUpdate(index, newAmount);
        }
    };
    // slider state
    var _b = react_1["default"].useState(0), sliderValue = _b[0], setSliderValue = _b[1];
    var handleSliderChange = function (event, newValue) {
        setSliderValue(newValue);
        handleUpdate(item.id, sliderValue);
    };
    return (react_1["default"].createElement(Card_1["default"], { sx: { display: "flex" } },
        react_1["default"].createElement(Box_1["default"], { sx: { display: "flex", flexDirection: "column" } },
            react_1["default"].createElement(CardContent_1["default"], { sx: { flex: "1 0 auto", width: 500 } },
                react_1["default"].createElement(Typography_1["default"], { component: "div", variant: "h5" }, item.name),
                react_1["default"].createElement(Typography_1["default"], { variant: "subtitle1", color: "text.secondary", component: "div" },
                    "Price: \u00A3",
                    item.price,
                    " ",
                    react_1["default"].createElement("br", null),
                    " Amount: ",
                    item.amount)),
            item.style === "button" ? (react_1["default"].createElement("div", null,
                react_1["default"].createElement(Button_1["default"], { onClick: function () { return handleAmountDecrease(item.id, item.amount); } }, "-"),
                react_1["default"].createElement(Button_1["default"], { onClick: function () { return handleAmountIncrease(item.id, item.amount); } }, "+"))) : null,
            item.style === "slider" ? (react_1["default"].createElement("div", null,
                react_1["default"].createElement(Slider_1["default"], { "aria-label": "Item amount", step: 1, max: 16, valueLabelDisplay: "on", value: sliderValue, onChange: handleSliderChange, marks: true, sx: { mx: 2, mt: 2 } }))) : null,
            react_1["default"].createElement("p", null,
                "Total: \u00A3",
                item.total))));
};
