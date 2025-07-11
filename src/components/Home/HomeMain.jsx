import React, { useState, useEffect } from 'react';
import Turnstile from 'react-turnstile';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import HomeOne from './HomeOne.jsx';
import HomeTwo from './HomeTwo.jsx';
import HomeThree from './HomeThree.jsx';
import HomeFour from './HomeFour.jsx';
import HomeFive from './HomeFive.jsx';
import HomeSix from './HomeSix.jsx';
 
const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;
 
const HomeMain = () => {
  const [verified, setVerified] = useState(false);
 
  // Check localStorage on first render
  useEffect(() => {
    const isVerified = localStorage.getItem('isHumanVerified');
    if (isVerified === 'true') {
      setVerified(true);
    }
  }, []);
 
  // Handle success and persist verification
  const handleVerificationSuccess = (token) => {
    // console.log('Turnstile token:', token);
    localStorage.setItem('isHumanVerified', 'true');
    setVerified(true);
  };
 
  return (
    <div className="relative">
      {/* Main layout */}
      <div className={`${!verified ? 'pointer-events-none blur-sm select-none' : ''}`}>
        <Navbar />
        <HomeOne />
        <HomeTwo />
        <HomeThree />
        <HomeFour />
        <HomeFive />
        <HomeSix />
        <Footer />
      </div>
 
      {/* Turnstile verification — only runs once */}
      {!verified && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
          <div className="backdrop-blur-sm px-2 py-1 rounded-lg">
            <Turnstile
              sitekey={TURNSTILE_SITE_KEY}
              onSuccess={handleVerificationSuccess}
              options={{
                theme: 'light',
                size: 'invisible',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
 
export default HomeMain;
 
 