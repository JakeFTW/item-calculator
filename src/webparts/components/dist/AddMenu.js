"use strict";
exports.__esModule = true;
var React = require("react");
var IconButton_1 = require("@mui/material/IconButton");
var Add_1 = require("@mui/icons-material/Add");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
function BasicMenu() {
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (React.createElement("div", null,
        React.createElement(IconButton_1["default"], { "aria-label": "more", id: "long-button", "aria-controls": open ? "long-menu" : undefined, "aria-expanded": open ? "true" : undefined, "aria-haspopup": "true", size: "large", sx: { m: 1 }, onClick: handleClick },
            React.createElement(Add_1["default"], null)),
        React.createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                "aria-labelledby": "basic-button"
            } },
            React.createElement(MenuItem_1["default"], { onClick: handleClose }, "Profile"),
            React.createElement(MenuItem_1["default"], { onClick: handleClose }, "My account"),
            React.createElement(MenuItem_1["default"], { onClick: handleClose }, "Logout"))));
}
exports["default"] = BasicMenu;
