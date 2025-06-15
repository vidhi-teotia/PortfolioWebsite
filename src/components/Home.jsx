import React from "react";
import { Box, Typography, Fade } from "@mui/material";

const Home = () => {
  return (
    <section id="home">
      <Fade in timeout={1000}>
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "flex-start",   // Align content to top, not center
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
            pt: 0,                     // Remove top padding
            mt: 0,                     // Remove top margin
          }}
        >
          <Box sx={{ flex: 1, minWidth: 280, mt: 0 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 0 }}>
              Hi, I'm <span style={{ color: "#5a67d8" }}>Your Name</span>
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 0 }}>
              A Passionate Full Stack Developer
            </Typography>
            <Typography paragraph sx={{ maxWidth: 450, mt: 0 }}>
              I build beautiful and performant web applications using modern
              technologies like React and Spring Boot.
            </Typography>
          </Box>

          {/* Your profile picture here if needed */}
          {/* <Box
            component="img"
            src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
            alt="Profile"
            sx={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              boxShadow: 6,
              objectFit: "cover",
              flexShrink: 0,
            }}
          /> */}
        </Box>
      </Fade>
    </section>
  );
};

export default Home;
