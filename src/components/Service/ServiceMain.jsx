import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import HomeOne from './HomeOne';  
import HomeTwo from './HomeTwo';
// import HomeThree from './HomeThree';    
import HomeFour from './HomeFour';
// import HomeFive from './HomeFive';
// import HomeSix from './HomeSix';
import HomeEight from './HomeEight';
import HomeSeven from './HomeSeven';
import Footer from '../Footer/Footer';

const ServiceMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <HomeOne />
      <HomeTwo />
      {/* <HomeThree /> */}
      <HomeFour />
      {/* <HomeFive /> */}
      {/* <HomeSix /> */}
      <HomeEight />
      <HomeSeven />
      <Footer />
    </div>
  );
};

export default ServiceMain;


// src\components\Home\HomeTwo.jsx