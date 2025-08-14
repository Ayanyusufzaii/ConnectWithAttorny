import React, { useState, useEffect } from 'react';
import Turnstile from 'react-turnstile';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import AboutOne from './AboutOne.jsx';
import AboutTwo from './AboutTwo.jsx';
import AboutThree from './AboutThree.jsx';
import AboutFour from './AboutFour.jsx';
import AboutFive from './AboutFive.jsx';
import AboutSix from './AboutSix.jsx';


const AboutMain = () => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // avoid animation delay for initial load
    });
  }, []);


  return (
<>
        <Navbar />
        <AboutOne />
        <AboutTwo />
        <AboutThree />
        <AboutFour />
        <AboutFive />
        <AboutSix />
        <Footer />
</>

  );
};

export default AboutMain;
