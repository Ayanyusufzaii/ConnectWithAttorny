import React, { useState } from "react";
import logo from "../../assets/Logo.png"; // Adjust the path as necessary
import {  Instagram, Linkedin, ChevronDown, Check } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs"; // Importing Twitter icon from react-icons
import { FaFacebookF } from 'react-icons/fa';
const NAV_LINKS = [
  { name: "Home", href: "/" },  
    { name: "About Us", href: "/AboutUs" },
  { name: "Services", hasDropdown: true },
  { name: "Contact Us", href: "/ContactUs" },
];

const LAWSUIT_TYPES = [
  { name: "Depo-Provera Lawsuit", href: "/Depomain" },
  { name: "Paraquat Lawsuit", href: "/ParaquatMain" },
  { name: "Roundup Lawsuit", href: "/RoundupMain" },
  { name: "Toxic Baby Food Lawsuit", href: "/Babyfood" },
  { name: "Oxbryta Lawsuit", href: "/OxbrytaMain" },
  { name: "Talcum Powder Lawsuit", href: "/TalcumMain" },
  { name: "Bard PowerPort Lawsuit", href: "/BardPowerPortMain" },
  // { name: "Ultra-Processed Foods Lawsuit", href: "/UltraProcessedMain" },
  { name: "AFFF Firefighting Foam Lawsuit", href: "/AFFFMain" },
  { name: "PFAS Contamination Lawsuit", href: "/PFASMain" },
  { name: "Transvaginal Mesh Lawsuit", href: "/TransvaginalMain" },
];

function DesktopNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Get current page from URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '/  ') return 'Home';
    if (path === '/AboutUs') return 'About Us';
    if (path === '/ContactUs') return 'Contact Us';
    // Check if it's a service page
    const isServicePage = LAWSUIT_TYPES.some(lawsuit => lawsuit.href === path);
    if (isServicePage) return 'Services';
    return 'Home';
  };
  const [activePage, setActivePage] = useState(getCurrentPage());

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
            <li key={link.name} className="relative">
              {link.hasDropdown ? (
                <div className="relative">
                  <button
                    className={`font-semibold hover:underline transition flex items-center gap-1 cursor-pointer ${
                      activePage === link.name ? 'text-[#0A1F8F]' : 'text-gray-600'
                    }`}
                    onClick={() => setDropdownOpen(prev => !prev)}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                      <div className="py-2">
                        {LAWSUIT_TYPES.map((lawsuit) => (
                          <a
                            key={lawsuit.name}
                            href={lawsuit.href}
                            className="group block px-4 py-3 text-sm text-gray-700 hover:text-[#0A1F8F] transition-colors relative flex items-center justify-between"
                          >
                            <span>{lawsuit.name}</span>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="w-5 h-5 bg-[#0A1F8F] rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className={`font-semibold hover:underline transition ${
                    activePage === link.name ? 'text-[#0A1F8F]' : 'text-gray-600'
                  }`}
                  onClick={() => setActivePage(link.name)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Call Now Tile */}
      <div className="flex items-center">
       <div className="bg-[#0A1F8F] rounded-lg px-6 py-1 text-white text-center shadow font-quicksand">
  <div className="text-xs">CALL NOW</div>
  <div className="text-l">888 201-1350</div>
</div>

      </div>
    </nav>
  );
}

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const NAV_LINKS = [
    { name: "Home", href: "/  " },
    { name: "About Us", href: "/AboutUs" },
    { name: "Services", hasDropdown: true },
    { name: "Contact Us", href: "/ContactUs" },
  
  ];
  // Define socialLinks here, matching the footer
  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: BsTwitterX , href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    
  ];
  // Get current page from URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '/  ') return 'Home';
    if (path === '/AboutUs') return 'About Us';
    if (path === '/ContactUs') return 'Contact Us';
    // Check if it's a service page
    const isServicePage = LAWSUIT_TYPES.some(lawsuit => lawsuit.href === path);
    if (isServicePage) return 'Services';
    return 'Home';
  };
  const [active, setActive] = useState(getCurrentPage());
  return (




    <nav className="w-full bg-white shadow px-4 py-3 relative">
  
<div
  className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ease-in-out ${
    open ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
  }`}
>
  <button
    className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
    onClick={() => setOpen(true)}
    aria-label="Open menu"
  >
    <span className="block w-6 h-0.5 bg-blue-600 mb-1 rounded transition-all duration-300"></span>
    <span className="block w-6 h-0.5 bg-blue-600 mb-1 rounded transition-all duration-300"></span>
    <span className="block w-6 h-0.5 bg-blue-600 rounded transition-all duration-300"></span>
  </button>
</div>


    <div className="flex justify-center items-center w-full">
      <img src={logo} alt="Logo" className="h-16 w-24 object-contain mx-auto" />
    </div>

 
  <div
    className={`fixed inset-0 bg-white z-40 flex flex-col font-quicksand transition-all duration-500 ease-in-out ${
      open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
    }`}
    style={{ transitionProperty: 'transform, opacity' }}
  >
   
    <div className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
      <button
        className="text-[#0A1F8F] text-3xl font-bold focus:outline-none transition-all duration-200 hover:scale-110"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      >
        &times;
      </button>
      <span className="text-[#0A1F8F] text-lg font-bold mx-auto">BE WITH LAW</span>
      <span className="w-8"></span> 
    </div>

    <div className="flex-1 bg-[#E7E9F4] overflow-y-auto">
      <div className="flex flex-col min-h-full">
     
        <div className="flex-1">
          <ul className="flex flex-col w-full">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.name} className="w-full">
                {link.hasDropdown ? (
                  <div className="w-full">
                    <button
                      className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${
                        active === link.name
                          ? 'text-[#0A1F8F] bg-gray-300'
                          : 'text-gray-600'
                      } hover:text-[#0A1F8F] flex items-center justify-between`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="bg-gray-100">
                        {LAWSUIT_TYPES.map((lawsuit) => (
                          <a
                            key={lawsuit.name}
                            href={lawsuit.href}
                            className="block px-12 py-3 text-sm text-gray-700 hover:text-[#0A1F8F] hover:bg-gray-200 transition-colors duration-200"
                            onClick={() => setOpen(false)}
                          >
                            {lawsuit.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${
                      active === link.name
                        ? 'text-[#0A1F8F]'
                        : 'text-gray-600'
                    } hover:text-[#0A1F8F]`}
                    onClick={() => {
                      setActive(link.name);
                      setOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

     
        <div className="mt-8 px-8 pb-8 bg-[#0A1F8F]">
          <h3 className="text-white font-semibold text-lg mb-4 mt-8">Follow Us</h3>
          <div className="flex justify-left gap-8 mt-5">
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



















//     <nav className="w-full bg-white shadow flex items-center justify-between  px-4 py-3 relative">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-16 w-24 object-contain" />
//       </div>
//       <button
//         className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
//         onClick={() => setOpen((v) => !v)}
//         aria-label="Open menu"
//       >
//         <span className="block w-6 h-0.5 bg-blue-600 mb-1 rounded"></span>
//         <span className="block w-6 h-0.5 bg-blue-600 mb-1 rounded"></span>
//         <span className="block w-6 h-0.5 bg-blue-600 rounded"></span>
//       </button>
     
      
//      <div
//   className={`fixed inset-0 bg-white z-50 flex flex-col font-quicksand transition-all duration-500 ease-in-out ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
//   style={{ transitionProperty: 'transform, opacity' }}
// >

      
//         <div className="flex items-center justify-between px-4 py-4 bg-white">
//           <button
//             className="text-[#0A1F8F] text-3xl font-bold focus:outline-none"
//             onClick={() => setOpen(false)}
//             aria-label="Close menu"
//           >
//             &times;
//           </button>
//           <span className="text-[#0A1F8F] text-lg font-bold mx-auto">BE WITH LAW</span>
//           <span className="w-8"></span>
//         </div>
        
       
//         <div className="flex-1 bg-[#E7E9F4] overflow-y-auto">
//           <div className="flex flex-col min-h-full">
         
//             <div className="flex-1">
//               <ul className="flex flex-col w-full">
//                 {NAV_LINKS.map((link, idx) => (
//                   <li key={link.name} className="w-full">
//                     {link.hasDropdown ? (
//                       <div className="w-full">
//                         <button
//                           className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${active === link.name ? 'text-[#0A1F8F] bg-gray-300' : 'text-gray-600'} hover:text-[#0A1F8F]  flex items-center justify-between`}
//                           onClick={() => setServicesOpen(!servicesOpen)}
//                         >
//                           {link.name}
//                           <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
//                         </button>
//                         {servicesOpen && (
//                           <div className="bg-gray-100">
//                             {LAWSUIT_TYPES.map((lawsuit) => (
//                               <a
//                                 key={lawsuit.name}
//                                 href={lawsuit.href}
//                                 className="block px-12 py-3 text-sm text-gray-700 hover:text-[#0A1F8F] hover:bg-gray-200 transition-colors duration-200"
//                                 onClick={() => setOpen(false)}
//                               >
//                                 {lawsuit.name}
//                               </a>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <a
//                         href={link.href}
//                         className={`block w-full px-8 py-4 text-lg font-semibold text-left transition-colors duration-200 ${active === link.name ? 'text-[#0A1F8F] ' : 'text-gray-600'} hover:text-[#0A1F8F] `}
//                         onClick={() => { setActive(link.name); setOpen(false); }}
//                       >
//                         {link.name}
//                       </a>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
          
//             <div className="mt-8 px-8 pb-8 bg-[#0A1F8F]">
//               <h3 className="text-gray-700 font-semibold text-lg mb-4 text-white mt-8">Follow Us</h3>
//                  <div className="flex justify-left gap-8 mt-5 ">
//               {socialLinks.map(({ icon: Icon, href, label }) => (
//                <a
//   key={label}
//   href={href}
//   aria-label={label}
//   className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-white bg-[#00085B] hover:bg-opacity-80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
// >
//   <Icon className="w-5 h-5 text-white" />
// </a>

//               ))}
//             </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>