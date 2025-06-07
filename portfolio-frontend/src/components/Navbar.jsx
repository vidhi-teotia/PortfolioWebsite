import React from "react";
import {
  Box,
  Button,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  {
    label: "About",
    icon: <FaUser size={18} style={{ fontWeight: "bold" }} />,
    page: "about",
  },
  {
    label: "Projects",
    icon: <FaProjectDiagram size={18} style={{ fontWeight: "bold" }} />,
    page: "projects",
  },
  {
    label: "Resume",
    icon: <FaFileAlt size={18} style={{ fontWeight: "bold" }} />,
    page: "resume",
  },
  {
    label: "Contact",
    icon: <FaEnvelope size={18} style={{ fontWeight: "bold" }} />,
    page: "contact",
  },
];

const Navbar = ({ activePage, setActivePage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    // Mobile view: fixed bottom navbar with all icons/buttons visible
    return (
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "background.paper",
          boxShadow: "0 -1px 8px rgba(0,0,0,0.15)",
          display: "flex",
          justifyContent: "space-around",
          py: 1,
          zIndex: 1300,
        }}
      >
        {navItems.map((item) => (
          <Tooltip key={item.page} title={item.label} arrow>
            <Button
              onClick={() => setActivePage(item.page)}
              startIcon={item.icon}
              sx={{
                minWidth: 0,
                px: 1,
                color:
                  activePage === item.page
                    ? "primary.main"
                    : "text.secondary",
                fontWeight: activePage === item.page ? "bold" : 500,
                textTransform: "none",
                fontSize: "0.9rem",
              }}
            >
              {item.label}
            </Button>
          </Tooltip>
        ))}
      </Box>
    );
  }

  // Desktop view: normal horizontal navbar buttons
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {navItems.map((item) => (
        <Tooltip key={item.page} title={item.label} arrow>
          <Button
            onClick={() => setActivePage(item.page)}
            startIcon={item.icon}
            sx={{
              color:
                activePage === item.page
                  ? "primary.main"
                  : "text.secondary",
              fontWeight: activePage === item.page ? "bold" : 500,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
              px: 2,
              py: 1,
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            {item.label}
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Navbar;
