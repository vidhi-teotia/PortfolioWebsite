import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#283593",
        color: "rgba(255, 255, 255, 0.9)",
        fontWeight: "600",
        py: 2,
        mt: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "600" }}>
        &copy; {new Date().getFullYear()} Vidhi Teotia. All rights reserved. |{" "}
        <Link
          href="https://github.com/vidhi-teotia"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="hover"
          sx={{ fontWeight: "600" }}
        >
          GitHub
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
