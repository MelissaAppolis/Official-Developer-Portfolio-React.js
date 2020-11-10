import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Introduction id="introduction" />
      <About id="about"/>
      <Projects id="projects"/>
      <Footer id="footer"/>
    </>
  );
}

export default App;
