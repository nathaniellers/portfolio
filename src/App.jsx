import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@mui/material';
import Features from './components/Features';
import Works from './components/Works';
import Footer from './components/Footer';

const theme = createTheme ({
  typography: {
    fontFamily: 'Poppins, sans-serif'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Hero />
          <Features />
          <Works />
        </header>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
