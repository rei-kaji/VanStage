import React from "react";
import { Box, Typography } from "@mui/material";

const Sample = ({ title, image }) => {
  return (
    <Box className="App">
      <Typography variant="h2">{title}</Typography>
      <Box className="sampleCard">
        <img
          src={image.url}
          alt={image.id}
          style={{ width: "500px", height: "500px" }}
        />
      </Box>
    </Box>
  );
};

export default Sample;
