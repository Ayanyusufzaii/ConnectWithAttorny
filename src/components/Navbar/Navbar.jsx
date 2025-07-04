import React, { useState } from "react";
import logo from "../../assets/Logo.png"; // Adjust the path as necessary
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs"; // Importing Twitter icon from react-icons

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "/ServiceMain" },
  { name: "Contact Us", href: "#contact" },
];

function DesktopNavbar() {
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-32 object-contain" />
      </div>
      {/* Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[#0A1F8F] font-semibold hover:underline transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Call Now Tile */}
      <div className="flex items-center">
        <div className="bg-[#0A1F8F] rounded-lg px-4 py-2 text-white text-center shadow">
          <div className="font-bold text-sm">Call Now</div>
          <div className="text-xs">+1 888 202 1350</div>
        </div>
      </div>
    </nav>
  );
}

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const NAV_LINKS = [
    { name: "Home", href: "/  " },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "/ServiceMain" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQs", href: "#faqs" },
  ];
  // Define socialLinks here, matching the footer
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: BsTwitterX , href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];
  const [active, setActive] = useState("Home");
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-4 py-3 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-24 object-contain" />
      </div>
      {/* Hamburger */}
      <button
        className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-blue-600 mb-1 rounded"></span>
        <span className="block w-6 h-0.5 bg-blue-600 mb-1 rounded"></span>
        <span className="block w-6 h-0.5 bg-blue-600 rounded"></span>
      </button>
      {/* Fullscreen Dropdown */}
      <div
        className={`fixed inset-0 bg-yellow-400 z-50 flex flex-col transition-all duration-500 ease-in-out ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
        style={{ transitionProperty: 'transform, opacity' }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#EDC14A]">
          <button
            className="text-white text-3xl font-bold focus:outline-none"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <span className="text-white text-lg font-bold mx-auto">BE WITH LAW </span>
          <span className="w-8"></span> {/* Spacer for symmetry */}
        </div>
        {/* Blue Section */}
        <div className="flex-1 bg-[#0A1F8F] w-full flex flex-col justify-start">
          <ul className="flex flex-col w-full mt-6">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.name} className="w-full">
                <a
                  href={link.href}
                  className={`block w-full px-8 py-4 text-lg font-semibold text-left border-b border-blue-700 transition-colors duration-200 ${active === link.name ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
                  onClick={() => { setActive(link.name); setOpen(false); }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4 py-6 px-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 bg-[#001F4D] hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"

                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6 text-white" />

                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

const Navbar = () => {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Navbar;