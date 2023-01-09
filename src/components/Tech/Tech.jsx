import { Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import "./tech.scss";

//images
import react from "../../assets/images/react.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import github from "../../assets/images/github.png";

const TechTitle = styled(Typography)({
  fontSize: "30px",
  fontWeight: "bold",
  textAlign: "center",
});

const TechSubtitle = styled(Typography)({
  color: "#A7A7A7",
  textAlign: "center",
});

const Tech = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TechTitle>My Tech Stack</TechTitle>
        <TechSubtitle>Technologies I've been working.</TechSubtitle>
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={4}
        >
          <img src={react} alt={"react"} />
          <img src={html} alt={"html"} />
          <img src={css} alt={"css"} />
          <img src={github} alt={"github"} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Tech;
