import React, { useState } from "react";
import { Box, Paper, useTheme, useMediaQuery, CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./theme"; // your MUI theme file
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("about");

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Navbar always at top */}
        <Box
          sx={{
            px: 2,
            py: 1,
            borderBottom: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "flex-end",
            bgcolor: "background.paper",
          }}
        >
          <Navbar activePage={activePage} setActivePage={setActivePage} />
        </Box>

        {/* Main layout */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            px: isMobile ? 2 : 3,
            pt: isMobile ? 2 : 3,
            pb: isMobile ? 2 : 3,
            gap: 3,
            bgcolor: "background.default",
          }}
        >
          {/* Sidebar */}
          <Paper
            elevation={3}
            sx={{
              width: isMobile ? "100%" : 260,
              borderRadius: 3,
              p: 3,
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            <Sidebar />
          </Paper>

          {/* Main content */}
          <Paper
            elevation={3}
            sx={{
              flexGrow: 1,
              borderRadius: 3,
              p: 3,
              boxSizing: "border-box",
            }}
          >
            {renderPage()}
          </Paper>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
