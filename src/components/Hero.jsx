import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery, Container } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { redColor } from "../assets/theme";
import Profile from "../utils/Profile";

const Hero = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Grid
        container
        spacing={4}
        direction={isTablet ? 'column' : 'row'}
        alignItems="center"
        mt={3}
      >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#000' }}>
              WELCOME TO MY WORLD
            </Typography>
            <Typography variant="h2" fontWeight="bold" sx={{ color: '#000' }}>
              Hi, I'm <span style={{ color: redColor }}>Nathan</span>
            </Typography>
            <Typography variant="h3" fontWeight="bold" sx={{ color: redColor }}>
              a{' '}
              <span style={{ color: '#000' }}>
                <Typewriter
                  words={['Backend Developer.', 'Frontend Developer.', 'DevOps Engineer.']}
                  loop
                  cursor
                />
              </span>
            </Typography>
            <Typography mt={5} sx={{ color: '#000', lineHeight: 2 }}>
              Seeking to obtain a creative and challenging position that utilizes current
              knowledge of web development, infrastructure and cyber security. Having a
              positive outlook and always willing to learn new traits.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section (Profile Image) */}
        <Grid item xs={12} md={6}>
          <Profile />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
