import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

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
    <Grid container>
      <Grid item xs={12}>
        <TechTitle>My Tech Stack</TechTitle>
      </Grid>
      <Grid item xs={12}>
        <TechSubtitle>Technologies I've been working.</TechSubtitle>
      </Grid>
    </Grid>
  );
};

export default Tech;
