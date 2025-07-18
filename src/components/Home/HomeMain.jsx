import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const isVerified = localStorage.getItem('isHumanVerified');
    if (isVerified === 'true') {
      setVerified(true);
      return;
    }

    // Define callback function globally
    window.javascriptCallback = function (token) {
      if (token) {
        localStorage.setItem('isHumanVerified', 'true');
        setVerified(true);
      }
    };

    // Dynamically inject Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Create Turnstile div
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'cf-turnstile';
    widgetDiv.setAttribute('data-sitekey', TURNSTILE_SITE_KEY);
    widgetDiv.setAttribute('data-callback', 'javascriptCallback');
    widgetDiv.setAttribute('data-theme', 'light');
    widgetDiv.setAttribute('data-size', 'invisible');

    const container = document.getElementById('turnstile-container');
    if (container) {
      container.appendChild(widgetDiv);
    }

    // Cleanup on unmount
    return () => {
      delete window.javascriptCallback;
    };
  }, []);

  return (
    <div className="relative">
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

      {!verified && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
          <div
            id="turnstile-container"
            className="backdrop-blur-sm px-2 py-1 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default HomeMain;
