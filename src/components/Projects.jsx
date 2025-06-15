import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Fade,
  Link,
  useTheme,
} from "@mui/material";

const projects = [
  {
    title: "GetCitations- A Platform for Researchers & Freelancers",
    description:
      "Developed a full-stack platform using React.js for the frontend, Spring Boot for the backend, and MySQL as the database. The platform features a bidding system that allows freelancers to place bids on research projects. I optimized workflow automation, which resulted in a 40% reduction in manual workload. To ensure secure user access control, I integrated JWT authentication. Additionally, I deployed the application as a Dockerized service on Render, incorporating MongoDB to support advanced search capabilities.",
    demo: "https://get-citationsv2.vercel.app/",
  },
  {
    title: "Smart Queue Management System for Hospitals",
    description:
      "In the modern healthcare environment, efficiently managing patient queues is crucial to ensure timely medical attention and maintain high standards of patient care. This project is an extension of an existing Queue Management System designed to handle both normal and extreme scenarios, such as those experienced during the COVID-19 pandemic. The system is built using React and JavaScript and aims to streamline patient flow into outpatient departments (OPDs) while adapting to varying operational conditions.",
  },
];

const MAX_LINES = 2;

const Projects = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const theme = useTheme();

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Box sx={{ textAlign: "left", paddingBottom: 4 }}>
      <Fade in timeout={1600}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mt: 0,
              mb: 3,
              textTransform: "none",
              color: "text.primary",
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={3}>
            {projects.map(({ title, description, github, demo }, index) => {
              const isExpanded = expandedIndexes.includes(index);
              const isLongDesc = description.split(" ").length > 15;

              return (
                <Grid item xs={12} sm={6} md={4} key={title}>
                  <Card
                    elevation={6}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      minHeight: 180,
                      padding: 1,
                      bgcolor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, padding: "8px 12px" }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontSize: "1.1rem", fontWeight: "600" }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: isExpanded ? "none" : MAX_LINES,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontSize: "0.85rem",
                        }}
                      >
                        {description}
                      </Typography>
                      {isLongDesc && (
                        <Link
                          component="button"
                          variant="body2"
                          onClick={() => toggleExpand(index)}
                          sx={{
                            mt: 0.5,
                            display: "block",
                            fontSize: "0.85rem",
                            color: theme.palette.primary.light,
                          }}
                        >
                          {isExpanded ? "Read less" : "Read more..."}
                        </Link>
                      )}
                    </CardContent>
                    <CardActions sx={{ padding: "4px 12px" }}>
                      {github && (
                        <Button
                          size="small"
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: theme.palette.primary.light }}
                        >
                          GitHub
                        </Button>
                      )}
                      {demo && (
                        <Button
                          size="small"
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: theme.palette.primary.light }}
                        >
                          Live Demo
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Fade>
    </Box>
  );
};

export default Projects;
