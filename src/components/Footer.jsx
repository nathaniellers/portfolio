import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#121212', color: '#fff', py: 3, mt: 8 }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Nathanielle Romero. All rights reserved.
        </Typography>

        <Link
          href="https://www.linkedin.com/in/nathanielle-romero-a2580020a/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center', mt: { xs: 1, md: 0 } }}
        >
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            Connect on LinkedIn
          </Typography>
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
