"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var Item_1 = require("./Item");
var TotalBar_1 = require("./TotalBar");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
// array of items to be displayed in the list
var initialItems = [
    {
        id: 0,
        name: "Slider",
        price: 200,
        amount: 0,
        total: 0,
        style: "slider"
    },
    {
        id: 1,
        name: "Button",
        price: 150,
        amount: 0,
        total: 0,
        style: "button"
    },
    {
        id: 2,
        name: "Button 2",
        price: 150,
        amount: 0,
        total: 0,
        style: "button"
    },
];
function ItemGroup() {
    var _a = react_2.useState(initialItems), items = _a[0], setItems = _a[1];
    var handleUpdate = function (index, amount) {
        var item = {
            id: items[index].id,
            name: items[index].name,
            price: items[index].price,
            amount: amount,
            total: amount * items[index].price,
            style: items[index].style
        };
        var newItems = __spreadArrays(items);
        newItems[index] = item;
        setItems(newItems);
    };
    var itemsGroup = items.map(function (items) { return (react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6, md: 4, xl: 3 },
        react_1["default"].createElement(Item_1.Item, { key: items.id, item: items, handleUpdate: handleUpdate }))); });
    var groupTotal = items.reduce(function (total, currentValue) { return (total = total + currentValue.total); }, 0);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1, padding: 2 } },
            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2 }, itemsGroup)),
        react_1["default"].createElement(TotalBar_1["default"], { groupTotal: groupTotal })));
}
exports["default"] = ItemGroup;
