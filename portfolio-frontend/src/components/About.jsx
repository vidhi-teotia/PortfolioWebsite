// About.jsx
import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mt: 0,
          mb: 3, // space after heading
          textTransform: "none",
        }}
      >
        About Me
      </Typography>
      <Typography paragraph>
        Hello and Welcome! I am Vidhi Teotia, a passionate and dedicated Software Developer. I thrive on building efficient, scalable, and innovative backend solutions. With strong experience in Java, Spring Boot, and SQL, I specialize in developing robust applications that align with modern business requirements. I also have a foundational understanding of AWS, which helps me incorporate cloud technologies for enhanced performance and reliability.
         </Typography>

 <Typography paragraph>I’m committed to continuous learning and staying up to date with evolving technologies. I enjoy collaborating with cross-functional teams to deliver high-quality results and am always ready to take on new challenges that push me to grow as a developer.  </Typography>

 <Typography>I am currently seeking exciting full-time opportunities as a Software Developer. If you're working on impactful projects, hiring for technical roles, or simply interested in discussing software engineering, I’d love to connect. Feel free to reach out—let’s explore possibilities together!  
      </Typography>
    </Box>
  );
};

export default About;
