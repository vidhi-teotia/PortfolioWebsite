import React from "react";
import { Box } from "@mui/material";
import NavbarPill from "./NavbarPill";

const RightContent = ({ activePage, setActivePage, children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        marginLeft: 2,
        padding: 3,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        position: "relative",
        minHeight: "80vh",  // Adjust as needed
        backgroundColor: "#fff",
      }}
    >
      {/* Navbar Pill positioned top-right */}
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <NavbarPill activePage={activePage} setActivePage={setActivePage} />
      </Box>

      {/* Main Content below navbar */}
      <Box sx={{ marginTop: 6 }}>{children}</Box>
    </Box>
  );
};

export default RightContent;
