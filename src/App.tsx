import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Calculator from "./webparts/components/Calculator";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
