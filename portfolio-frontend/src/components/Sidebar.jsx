import React, { useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Divider,
  Typography,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    icon: <LinkedIn />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vidhi-teotia/",
  },
  {
    icon: <GitHub />,
    label: "GitHub",
    url: "https://github.com/vidhi-teotia",
  },
  {
    icon: <SiLeetcode size={24} />,
    label: "LeetCode",
    url: "https://leetcode.com/u/vidhi_teotia_/",
  },
  {
    icon: <Email />,
    label: "Email",
    url: "mailto:vidhiteotia6@gmail.com",
  },
  {
    icon: <Phone />,
    label: "Phone",
    url: "tel:+91-8535027028",
  },
  {
    icon: <LocationOn />,
    label: "Location: New Delhi, India",
    url: "https://www.google.com/maps/place/New Delhi,+India",
  },
];

const Sidebar = () => {
  // Detect if mobile view (width <= 600px)
  const isMobile = useMediaQuery("(max-width:600px)");
  const [showSocial, setShowSocial] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Box
        component="img"
        src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
        alt="Vidhi Teotia"
        sx={{
          width: 220,
          height: 220,
          borderRadius: 2,
          objectFit: "cover",
          mb: 1,
          boxShadow: 4,
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Vidhi Teotia
      </Typography>

      {/* Show toggle button ONLY on mobile */}
      {isMobile && (
        <IconButton
          onClick={() => setShowSocial(!showSocial)}
          size="small"
          sx={{ mb: 1 }}
          aria-label={showSocial ? "Hide social links" : "Show social links"}
        >
          {showSocial ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
      )}

      <Divider sx={{ width: "80%", mb: 2 }} />

      {/* On mobile, show social icons collapsible; on desktop, always visible */}
      {isMobile ? (
        <Collapse in={showSocial} timeout="auto" unmountOnExit>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              overflowX: "hidden",
            }}
          >
            {socialLinks.map(({ icon, label, url }) => (
              <Tooltip key={label} title={label} placement="right">
                <IconButton
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "#5a67d8",
                    color: "#fff",
                    "&:hover": { bgcolor: "#ff4081" },
                    width: 48,
                    height: 48,
                    mb: 1,
                    padding: 0,
                    minWidth: 48,
                    boxSizing: "border-box",
                  }}
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Collapse>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          {socialLinks.map(({ icon, label, url }) => (
            <Tooltip key={label} title={label} placement="right">
              <IconButton
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#5a67d8",
                  color: "#fff",
                  "&:hover": { bgcolor: "#ff4081" },
                  width: 48,
                  height: 48,
                  mb: 1,
                  padding: 0,
                  minWidth: 48,
                  boxSizing: "border-box",
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
