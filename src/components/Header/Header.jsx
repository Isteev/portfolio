import { Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack direction={"row"} spacing={4} justifyContent="end" width="100%">
      <Typography>Home</Typography>
      <Typography>About</Typography>
      <Typography>Tech Stack</Typography>
      <Typography>Projects</Typography>
      <Typography>Contact</Typography>
    </Stack>
  );
};

export default Header;
