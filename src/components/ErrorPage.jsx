import React from "react";
import { Stack, Typography } from "@mui/material";

const Loader = ({ message }) => (
  <Stack direction="row" justifyContent="center" alignItems="center">
    <Typography variant="body1" color="error">
      {message}
    </Typography>
  </Stack>
);

export default Loader;
