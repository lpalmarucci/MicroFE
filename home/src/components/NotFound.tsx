import React from "react";
import { Box, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        fontWeight={700}
        sx={{ fontSize: { md: 220, xs: 150 } }}
      >
        404
      </Typography>
      <Typography
        variant="h3"
        fontWeight={700}
        whiteSpace="nowrap"
        sx={{ fontSize: { md: 110, xs: 35 } }}
      >
        Pagina non trovata
      </Typography>
    </Box>
  );
};

export default PageNotFound;
