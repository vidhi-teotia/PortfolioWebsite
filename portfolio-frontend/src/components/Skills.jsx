import React from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  Tooltip,
  Fade,
} from "@mui/material";

import { FaJava } from "react-icons/fa";

// ✅ Real Tech Logos using react-icons
import {

  SiReact,
  SiSpringboot,
  SiMui,
  SiGit,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "Java", level: 90 },
  { name: "React", level: 85 },
  { name: "Spring Boot", level: 80 },
  { name: "Material UI", level: 75 },
  { name: "Git", level: 85 },
  { name: "SQL", level: 70 },
];

const iconMap = {
  Java: <FaJava size={28}  color="#007396" />,
  React: <SiReact size={28} color="#61DBFB" />,
  "Spring Boot": <SiSpringboot size={28} color="#6DB33F" />,
  "Material UI": <SiMui size={28} color="#007FFF" />,
  Git: <SiGit size={28} color="#F05032" />,
  SQL: <SiMysql size={28} color="#00758F" />,
};

const Skills = () => {
  return (
    <section id="skills">
      <Fade in timeout={1400}>
        <Box>
          <Typography variant="h2" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map(({ name, level }) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={name}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Tooltip title={name}>
                  <Box>{iconMap[name]}</Box>
                </Tooltip>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                    {name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={level}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>
    </section>
  );
};

export default Skills;
