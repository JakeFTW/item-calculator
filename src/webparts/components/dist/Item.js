"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Item = void 0;
var react_1 = require("react");
var Button_1 = require("@mui/material/Button");
var Slider_1 = require("@mui/material/Slider");
var Grid_1 = require("@mui/material/Grid");
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
var Typography_1 = require("@mui/material/Typography");
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var Paper_1 = require("@mui/material/Paper");
var ButtonGroup_1 = require("@mui/material/ButtonGroup");
var Card = styles_1.styled(Paper_1["default"])(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff" }, theme.typography.body2), { padding: theme.spacing(1), color: theme.palette.text.secondary }));
});
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
    return (react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1 } },
        react_1["default"].createElement(Card, null,
            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 1 },
                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 8, sm: 8, md: 8 },
                    react_1["default"].createElement(Typography_1["default"], { component: "div", variant: "h6" }, item.name),
                    react_1["default"].createElement(Typography_1["default"], { variant: "subtitle2", color: "text.secondary", component: "div" },
                        "Quantity: ",
                        item.amount)),
                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 4, sm: 4, md: 4 },
                    react_1["default"].createElement(Typography_1["default"], { variant: "h6", component: "div", align: "right" },
                        "\u00A3",
                        item.price),
                    react_1["default"].createElement(Typography_1["default"], { variant: "subtitle2", color: "text.secondary", component: "div", align: "right" },
                        "Total: \u00A3",
                        item.total)),
                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 12, md: 12 },
                    item.style === "button" ? (react_1["default"].createElement(ButtonGroup_1["default"], { variant: "contained", "aria-label": "outlined primary button group" },
                        react_1["default"].createElement(Button_1["default"], { onClick: function () { return handleAmountDecrease(item.id, item.amount); }, variant: "outlined" }, "-"),
                        react_1["default"].createElement(Button_1["default"], { onClick: function () { return handleAmountIncrease(item.id, item.amount); } }, "+"))) : null,
                    item.style === "slider" ? (react_1["default"].createElement(Slider_1["default"], { "aria-label": "Item amount", step: 1, max: 16, valueLabelDisplay: "auto", value: sliderValue, onChange: handleSliderChange, marks: true, sx: { width: "95%", ml: 1 } })) : null)))));
};
