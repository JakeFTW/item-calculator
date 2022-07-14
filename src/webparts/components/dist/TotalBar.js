"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Toolbar_1 = require("@mui/material/Toolbar");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var styles_1 = require("@mui/material/styles");
var Fab_1 = require("@mui/material/Fab");
var IconButton_1 = require("@mui/material/IconButton");
var Menu_1 = require("@mui/icons-material/Menu");
var MoreVert_1 = require("@mui/icons-material/MoreVert");
var Add_1 = require("@mui/icons-material/Add");
var Typography_1 = require("@mui/material/Typography");
function TotalBar(props) {
    var StyledFab = styles_1.styled(Fab_1["default"])({
        position: "absolute",
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: "0 auto"
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(AppBar_1["default"], { position: "fixed", color: "primary", sx: { top: "auto", bottom: 0 } },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(IconButton_1["default"], { color: "inherit", "aria-label": "open drawer" },
                    react_1["default"].createElement(Menu_1["default"], null)),
                react_1["default"].createElement(StyledFab, { color: "secondary", "aria-label": "add" },
                    react_1["default"].createElement(Add_1["default"], null)),
                react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1 } }),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", color: "inherit", align: "right" },
                    "Total: \u00A3",
                    props.groupTotal),
                react_1["default"].createElement(IconButton_1["default"], { color: "inherit", sx: { ml: 3 } },
                    react_1["default"].createElement(MoreVert_1["default"], null)))),
        react_1["default"].createElement(Toolbar_1["default"], null)));
}
exports["default"] = TotalBar;
