import React from 'react';
import {  Instagram, Linkedin } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import footerVector from '../../assets/Vector.svg';
import { Link, useLocation } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/footerlogoo.png"; // Adjust the path as necessary


const Footer = () => {
  
  const location = useLocation();

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: BsTwitterX , href: '#', label: 'X ' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/AboutUs' },
    { name: 'Services', href: '/Services' },
    { name: 'Contact Us', href: '/ContactUs' },
  ];

  const legalLinks = [
    { name: 'Disclaimer', path: '/Disclaimer' },
    { name: 'Privacy Policy', path: '/PrivacyPolicy' },
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('contactUs');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <footer className="bg-[#162766] text-white relative overflow-hidden">
        {/* Vector Background */}




        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile View */}
          <div className="block md:hidden text-center">
            <h2 className="text-3xl font-bold font-[Quicksand] mt-8">Contact Us To Explore </h2>
<h2 className="text-3xl font-bold font-[Quicksand] mt-2 text-white">
  Your <span className="text-[#F8D216]">Legal Options</span> Today
</h2>
          <a href="/ContactUs">
  <button className="bg-[#F8D216] hover:bg-yellow-600 text-[#162766] px-4 py-4 rounded font-bold mt-8">
    Book an Appointment
  </button>
</a>


            {/* Social Icons */}
            <div className="flex justify-center gap-8 mt-10">
              {socialLinks.map(({ icon: Icon, href, label }) => (
               <a
  key={label}
  href={href}
  aria-label={label}
  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-white bg-[#00085B] hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
>
  <Icon className="w-5 h-5 text-white" />
</a>

              ))}
            </div>

            {/* Navigation */}
            <nav className="flex justify-center gap-8 mt-10">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.href ? 'text-[#F8D216]' : 'text-gray-300 hover:text-white'
                  }`}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-4 border-t-2 border-yellow-300" />

            {/* Bottom Branding & Legal */}
            <div className="mt-4">
             
            
              
              <nav className="flex justify-between items-center mt-2 ">
  {/* Left side */}
  <div className="text-2xl font-bold text-white font-[Quicksand]">
    <div>
                  <Link to="/">
                    <img src={logo} alt="Logo" className="h-[25px] w-auto" />
                  </Link>
                </div>
  </div>

  {/* Right side */}
  <div className="flex space-x-6">
     
    <Link
      to="/PrivacyPolicy"
      className="font-[Quicksand] text-sm text-gray-300 hover:text-white transition"
    >
      Privacy Policy
    </Link>
   <Link
      to="/Disclaimer"
      className="font-[Quicksand] text-sm text-gray-300 hover:text-white transition"
    >
      Disclaimer
    </Link>
  </div>
</nav>


            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                 <h2 className="text-2xl font-bold font-[Quicksand] mt-8">Contact Us To Explore </h2>
          <h2 className="text-2xl font-bold font-[Quicksand] mt-2 text-white">
  Your <span className="text-[#F8D216]">Legal Options</span> Today
</h2>

                <nav className="flex flex-wrap gap-6 mt-8">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-base font-medium transition-colors ${
                        location.pathname === link.href ? 'text-[#F8D216]' : 'text-gray-300 hover:text-white'
                      }`}
                      aria-current={location.pathname === link.href ? 'page' : undefined}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right */}
              <div className="flex items-center justify-end gap-8">
            <a href="/ContactUs">
  <button className="bg-[#F8D216] hover:bg-[#F8D216] text-[#162766] px-2 py-2 rounded font-bold ">
    Book an Appointment
  </button>
</a>


                {socialLinks.map(({ icon: Icon, href, label }) => (
                 <a
  key={label}
  href={href}
  aria-label={label}
  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-white bg-[#00085B] hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
>
  <Icon className="w-5 h-5 text-white" />
</a>

                ))}
              </div>
            </div>

            {/* Branding & Legal */}
            <div className="mt-4 pt-8 border-t-2 border-yellow-300">
              <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                <div className="text-3xl font-bold text-[#fffff] font-[Quicksand]">
                  <div>
                  <Link to="/">
                    <img src={logo} alt="Logo" className="h-[35px] w-auto" />
                  </Link>
                </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <nav className="flex gap-6">
                    {legalLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="text-sm text-gray-300 hover:text-white transition"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;