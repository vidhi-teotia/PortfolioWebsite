import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { FaRegEye, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const skills = {
  "Programming Languages": "Java, C++, JavaScript, C++/C, HTML, CSS", 
  Databases: "MySQL, Oracle SQL Developer, PostgreSQL",
  "Frameworks/Libraries": "React.js, Spring Boot, Material UI, Hibernate, Microservices",
  "Tools & Technologies": "RestFul Web Services, Spring Security, JavaFX, AWS",
  "DevOps & Deployment": "Docker, Git, Kubernetes",
};

const experience = [
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services (TCS)",
    year: "Jan 2024 - May 2025",
    details: "At Tata Consultancy Services (TCS), I have worked as a Software Developer, contributing to the development of scalable and secure backend applications using Java, Spring Boot, and SQL. I developed a JavaFX-based transaction processing system that improved processing speed by 30% and built an email automation tool that handled over 10,000 emails daily, leading to a 25% increase in customer engagement. Additionally, I contributed to several other internal tools and enterprise-level projects focused on process automation, performance optimization, and backend integration."
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Guru Gobind Singh Indraprastha University, Delhi",
    year: "2021 - 2023",
    cgpa: "8.8",
  },
  {
    degree: "Bachelor of Mathematics (Hons)",
    institution: "University of Delhi, Delhi",
    year: "2017 - 2020",
    cgpa: "7.4",
  },
];

const TimelineItem = ({ children, isLast }) => (
  <Box sx={{ position: "relative", pl: 4 }}>
    {/* Dot */}
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 14,
        height: 14,
        bgcolor: "#1976d2",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />
    {/* Line */}
    {!isLast && (
      <Box
        sx={{
          position: "absolute",
          left: 6,
          top: 20,
          width: 2,
          height: "calc(100% + 24px)",
          bgcolor: "#1976d2",
          zIndex: 0,
        }}
      />
    )}
    <Box sx={{ mb: isLast ? 0 : 4 }}>{children}</Box>
  </Box>
);

const Resume = () => {
  return (
    <Box sx={{ textAlign: "left" }}>
      {/* Resume Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mt: 0,
          mb: 1,
          textTransform: "none",
        }}
      >
        Resume
      </Typography>

      {/* Preview Resume Link */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <FaRegEye style={{ marginRight: 8 }} />
        <Link
          href="https://drive.google.com/file/d/1g3lRDNhvlNjqEY1kX5uQC53TSd7HiLt4/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Preview Vidhi's Resume
        </Link>
      </Box>

      {/* Skills Section */}
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 2,
          p: 2,
          mb: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Skills
        </Typography>
        {Object.entries(skills).map(([key, value]) => (
          <Typography key={key} variant="body1" sx={{ mb: 1 }}>
            <strong>{key}:</strong> {value}
          </Typography>
        ))}
      </Box>

      {/* Experience Section */}
      <Box sx={{ ml: 2, position: "relative", mb: 6 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <FaBriefcase color="#1976d2" /> Experience
        </Typography>
        {experience.map((exp, index) => (
          <TimelineItem key={index} isLast={index === experience.length - 1}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {exp.role}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
              sx={{ fontStyle: "italic" }}
            >
              {exp.company} | {exp.year}
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
              {exp.details}
            </Typography>
          </TimelineItem>
        ))}
      </Box>

      {/* Education Section */}
      <Box sx={{ ml: 2, position: "relative", mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <FaGraduationCap color="#1976d2" /> Education
        </Typography>
        {education.map((edu, index) => (
          <TimelineItem key={index} isLast={index === education.length - 1}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {edu.degree}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
              sx={{ fontStyle: "italic" }}
            >
              {edu.institution} | {edu.year}
            </Typography>
            {edu.cgpa && (
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>CGPA:</strong> {edu.cgpa}
              </Typography>
            )}
          </TimelineItem>
        ))}
      </Box>
    </Box>
  );
};

export default Resume;
