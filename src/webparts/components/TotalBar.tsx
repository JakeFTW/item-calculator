import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import AddMenu from "./AddMenu";

export default function TotalBar(props: any) {
  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  });

  const StyledBox = styled(Box)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  });
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledBox color="secondary" aria-label="add">
            <AddMenu />
          </StyledBox>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" color="inherit" align="right">
            Total: £{props.groupTotal}
          </Typography>
          <IconButton color="inherit" sx={{ ml: 3 }}>
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
