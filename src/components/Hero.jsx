import React from "react";
import { Box, Typography, Button, Grid, useTheme, useMediaQuery, Container } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { makeStyles } from "@mui/styles";
import { redColor } from "../assets/theme";
import Profile from "../utils/Profile";

// const pageStyles = makeStyles(() => ({
//   image:{
//     height:'462px',
//     width:'350px',
//     borderRadius:'40%'
//   },
//   mobileSkills:{
//     width:'100%',
//     fontFamily:'Poppins'
//   },
// }))

const Hero = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // const SocialButton = ({ href, children }) => {
  //   return (
  //     <Button
  //       variant="outlined"
  //       component="a"
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       sx={{
  //         color: "black",
  //         padding: "10px",
  //         border: "none",
  //         boxShadow: "1px 1px 5px #ccc",
  //         "&:hover": { color: "white", backgroundColor: redColor, borderColor: redColor },
  //       }}
  //     >
  //       {children}
  //     </Button>
  //   );
  // };

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
