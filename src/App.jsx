import { Grid } from "@mui/material";
import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Tech from "./components/Tech/Tech";
import "./styles/app.scss";

const App = () => {
  return (
    <Grid container className="app-container">
      <Header />
      <About />
      <Tech />
    </Grid>
  );
};

export default App;
