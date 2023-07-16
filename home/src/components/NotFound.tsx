import React from "react";
import { Box, Container, Typography } from "@mui/material";

const defaultTitle: string = "Risorsa non trovata";

interface IProps {
  title?: string;
}

const PageNotFound = (props: IProps) => {
  return (
    <Container sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Typography
        variant="h1"
        fontWeight={700}
        color={"black"}
        sx={{ fontSize: { md: 150, xs: 100 } }}
      >
        404
      </Typography>
      <Typography
        variant="h3"
        fontWeight={700}
        whiteSpace="nowrap"
        color={"black"}
        sx={{ fontSize: { md: 60, xs: 20 } }}
      >
        {props.title ?? defaultTitle}
      </Typography>
    </Container>
  );
};

export default PageNotFound;
