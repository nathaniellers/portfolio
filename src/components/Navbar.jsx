import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Slide, useScrollTrigger, Fab, Box } from "@mui/material";
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

const Navbar = ({ aboutRef, contactRef}) => {
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

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
              <Button color="inherit" onClick={scrollToTop}>Home</Button>
              <Button color="inherit" onClick={scrollToAbout}>About</Button>
              <Button color="inherit" onClick={scrollToContact}>Contact</Button>
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
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default Navbar;
