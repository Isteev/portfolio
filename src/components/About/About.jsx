import { Avatar, Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import "./about.scss";

const AboutTitle = styled(Typography)({
  fontSize: "45px",
  fontWeight: "bold",
});

const About = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"90vh"}
    >
      <AboutTitle>
        Hi 👋🏽, <br />
        My name is <br />
        Steveen de la rosa <br />
        I'm a Developer.
      </AboutTitle>

      <Box className="gradiant">
        <Avatar
          style={{
            width: "300px",
            height: "300px",
          }}
        />
      </Box>
    </Stack>
  );
};

export default About;
