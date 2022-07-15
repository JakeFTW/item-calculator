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
var Typography_1 = require("@mui/material/Typography");
// array of items to be displayed in the list
var initialItems = [
    {
        id: 0,
        name: "Item 1",
        price: 100,
        amount: 0,
        total: 0,
        style: "slider",
        category: "cat1",
        display: true
    },
    {
        id: 1,
        name: "Item 2",
        price: 150,
        amount: 0,
        total: 0,
        style: "slider",
        category: "cat1",
        display: false
    },
    {
        id: 2,
        name: "Item 3",
        price: 350,
        amount: 0,
        total: 0,
        style: "button",
        category: "cat2",
        display: true
    },
];
function ItemGroup() {
    var _a = react_2.useState(initialItems), items = _a[0], setItems = _a[1];
    // update the amount of an item
    var handleUpdate = function (index, amount, remove) {
        var item = {
            id: items[index].id,
            name: items[index].name,
            price: items[index].price,
            amount: amount,
            total: amount * items[index].price,
            style: items[index].style,
            category: items[index].category,
            display: remove ? false : true
        };
        var newItems = __spreadArrays(items);
        newItems[index] = item;
        setItems(newItems);
        console.log(newItems);
    };
    // map through the items and return a list of Item components
    // const itemsGroup = items.map((items: any) => (
    //   <Grid item xs={12} sm={6} md={4} xl={3}>
    //     <Item key={items.id} item={items} handleUpdate={handleUpdate} />
    //   </Grid>
    // ));
    // calculate total price of all items
    var groupTotal = items.reduce(function (total, currentValue) { return (total = total + currentValue.total); }, 0);
    //filter items by category
    var cat1 = items.filter(function (item) {
        return item.category === "cat1" && item.display === true;
    });
    var cat2 = items.filter(function (item) {
        return item.category === "cat2" && item.display === true;
    });
    //display category 1 items
    var cat1Items = cat1.map(function (items) { return (react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6, md: 4, xl: 3 },
        react_1["default"].createElement(Item_1.Item, { key: items.id, item: items, handleUpdate: handleUpdate }))); });
    //display category 2 items
    var cat2Items = cat2.map(function (items) { return (react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6, md: 4, xl: 3 },
        react_1["default"].createElement(Item_1.Item, { key: items.id, item: items, handleUpdate: handleUpdate }))); });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1, px: 2 } },
            react_1["default"].createElement(Typography_1["default"], { component: "div", variant: "h6", sx: { my: 1 } }, "Category 1"),
            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2 }, cat1Items),
            react_1["default"].createElement(Typography_1["default"], { component: "div", variant: "h6", sx: { my: 1 } }, "Category 2"),
            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2 }, cat2Items)),
        react_1["default"].createElement(TotalBar_1["default"], { groupTotal: groupTotal })));
}
exports["default"] = ItemGroup;
