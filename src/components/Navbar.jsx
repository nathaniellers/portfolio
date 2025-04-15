import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Slide, useScrollTrigger, Fab, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit } from "@mui/icons-material";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#ecf0f3",
            color: "#000",
            boxShadow: hasShadow ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <Toolbar>
            <AcUnit />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              N
            </Typography>
            <Box>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {showScroll && (
        <Fab
          color="red"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            background: "rgb(255, 59, 87)"
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default Navbar;
