import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
// import SkillViewer from './SkillViewer'

import Home from "./Pages/Home";
import Layout from "./Component/Layout";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffd4d9",
      dark: "#ffd4d9",
      contrastText: "#000",
    },
    secondary: {
      light: "#ffffff",
      main: "#fcfcfc",
      dark: "#c9c9c9",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Baloo Bhaina 2",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout content={<Home />} />
    </ThemeProvider>
  );
}

export default App;
