import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@mui/material';
import Features from './components/Features';
import Works from './components/Works';
import Footer from './components/Footer';
import Contact from './components/Contact';

const theme = createTheme ({
  typography: {
    fontFamily: 'Poppins, sans-serif'
  }
})

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Navbar aboutRef={aboutRef} contactRef={contactRef} />
          <Hero />
          <Features />
          <Works ref={aboutRef}/>
          <Contact ref={contactRef}/>
        </header>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
