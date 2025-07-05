// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import img1 from '../../assets/home3_1.png';

// const lawsuits = [
//   {
//     title: 'Depo-Provera Lawsuit',
//     description: 'Linked to brain tumors and bone loss in long-term users',
//     image: img1,
//     link: '/DepoMain',
//   },
//   {
//     title: 'Paraquat Lawsuit',
//     description: 'Parkinsons disease caused by toxic herbicide exposure',
//     image: img1,
//     link: '/lawsuits/paraquat',
//   },
//   {
//     title: 'Roundup-Lawsuit',
//     description: 'Cancer linked to glyphosate-based weed killer',
//     image: img1,
//     link: '/lawsuits/roundup-lawsuit',
//   },
//   {
//     title: 'Toxic Baby Food Lawsuit',
//     description: 'Heavy metal exposure tied to developmental delays',
//     image: img1,
//     link: '/lawsuits/toxic-baby-food-lawsuit',
//   },
//   {
//     title: 'Oxbryta Lawsuit',
//     description: 'Linked to brain tumors and bone loss in long-term users',
//     image: img1,
//     link: '#',
//   },
//   {
//     title: 'Talcum Powder Lawsuit',
//     description: 'Parkinson’s disease caused by toxic herbicide exposure',
//     image: img1,
//     link: '#',
//   },
//   {
//     title: 'Bard PowerPort Lawsuit',
//     description: 'Cancer linked to glyphosate-based weed killer',
//     image: img1,
//     link: '#',
//   },
//   {
//     title: 'Ultra-Processed Foods Lawsuit',
//     description: 'Heavy metal exposure tied to developmental delays',
//     image: img1,
//     link: '#',
//   },
//   {
//     title: 'AFFF Firefighting Foam Lawsuit',
//     description: 'Linked to brain tumors and bone loss in long-term users',
//     image: img1,
//     link: '#',
//   },
//   {
//     title: 'PFAS Contamination Lawsuit',
//     description: 'Parkinson’s disease caused by toxic herbicide exposure',
//     image: img1,
//     link: '#',
//   },
//   {
//     title: 'Transvaginal Mesh Lawsuit',
//     description: 'Cancer linked to glyphosate-based weed killer',
//     image: img1,
//     link: '#',
//   },
// ];

// const HomeFour = () => {
//   const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1280 : false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1280);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section
//       className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white w-full"
//       style={{ fontFamily: 'Quicksand, sans-serif' }}
//     >
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1F8F]">
//           What Do We <span className="text-[#EDC14A]">Help</span> You With <span className="text-[#EDC14A]">?</span>
//         </h2>
//       </div>

//       {/* Cards */}
//       <div
//         className={`${
//           isMobile
//             ? 'flex overflow-x-auto gap-6 scrollbar-hide pb-2'
//             : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
//         }`}
//       >
//         {lawsuits.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-[14px] overflow-hidden flex-shrink-0 min-w-[260px] max-w-[280px] w-full"
//           >
//             {/* Image */}
//             <div className="w-full h-[180px] overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover rounded-t-[14px]"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-4">
//               <h3 className="text-[18px] font-bold text-[#0A1F8F] mb-2 leading-snug">{item.title}</h3>
//               <p className="text-sm text-[#6b7280] leading-snug">{item.description}</p>
//               <Link to={item.link}>
//                 <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-[6px] text-sm transition-colors duration-200 hover:bg-yellow-400">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HomeFour;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Import each image with a unique name
import depoImg from "../../assets/subservice/depo-provera-lawsuit.png";
import paraquatImg from "../../assets/subservice/paraquat-lawsuit.png";
import roundupImg from "../../assets/subservice/roundup-lawsuit.png";
import babyFoodImg from "../../assets/subservice/toxic-baby-food-lawsuit.png";
import oxbrytaImg from "../../assets/subservice/oxbryta-lawsuit.png";
import talcumImg from "../../assets/subservice/talcum-powder-lawsuit.png";
import bardImg from "../../assets/subservice/bard-powerport-lawsuit.png";
import ultraProcessedImg from "../../assets/subservice/ultra-processed-foods-lawsuit.png";
import afffImg from "../../assets/subservice/afff-firefighting-foam-lawsuit.png";
import pfasImg from "../../assets/subservice/pfas-contamination-lawsuit.png";
import meshImg from "../../assets/subservice/transvaginal-mesh-lawsuit.png";

// Map images correctly in the lawsuits array
const lawsuits = [
  {
    title: 'Depo-Provera Lawsuit',
    description: 'Linked to brain tumors and bone loss in long-term users',
    image: depoImg,
    link: '/DepoMain',
  },
  {
    title: 'Paraquat Lawsuit',
    description: 'Parkinsons disease caused by toxic herbicide exposure',
    image: paraquatImg,
    link: '/ParaquatMain',
  },
  {
    title: 'Roundup-Lawsuit',
    description: 'Cancer linked to glyphosate-based weed killer',
    image: roundupImg,
    link: '/roundupMain',
  },
  {
    title: 'Toxic Baby Food Lawsuit',
    description: 'Heavy metal exposure tied to developmental delays',
    image: babyFoodImg,
    link: '/Babyfood',
  },
  {
    title: 'Oxbryta Lawsuit',
    description: 'Linked to brain tumors and bone loss in long-term users',
    image: oxbrytaImg,
    link: '/OxbrytaMain',
  },
  {
    title: 'Talcum Powder Lawsuit',
    description: 'Parkinson’s disease caused by toxic herbicide exposure',
    image: talcumImg,
    link: '/TalcumMain',
  },
  {
    title: 'Bard PowerPort Lawsuit',
    description: 'Cancer linked to glyphosate-based weed killer',
    image: bardImg,
    link: '/BardPowerPortMain',
  },
  {
    title: 'Ultra-Processed Foods Lawsuit',
    description: 'Heavy metal exposure tied to developmental delays',
    image: ultraProcessedImg,
    link: '/UltraProcessedMain',
  },
  {
    title: 'AFFF Firefighting Foam Lawsuit',
    description: 'Linked to brain tumors and bone loss in long-term users',
    image: afffImg,
    link: '/AFFFMain',
  },
  {
    title: 'PFAS Contamination Lawsuit',
    description: 'Parkinson’s disease caused by toxic herbicide exposure',
    image: pfasImg,
    link: '/PFASMain',
  },
  {
    title: 'Transvaginal Mesh Lawsuit',
    description: 'Cancer linked to glyphosate-based weed killer',
    image: meshImg,
    link: '/TransvaginalMain',
  },
];


const ServiceThree = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white w-full"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1F8F]">
          What Do We <span className="text-[#EDC14A]">Help You </span>  With{' '}
          ?
        </h2>
      </div>

      {/* Cards */}
      {isMobile ? (
         <div className="grid grid-cols-2 gap-6">
          {/* </div> <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">  */}
           
          {lawsuits.map((item, idx) => (
            <div
              key={idx}
               className="bg-white rounded-[14px] overflow-hidden w-full"
              // className="bg-white rounded-[14px] overflow-hidden min-w-[260px] max-w-[280px] flex-shrink-0"

            >
              {/* Image */}
              <div className="w-full h-[180px] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[10%]"
                />
                <div className="absolute bottom-0 left-0 w-full text-left px-4 py-3">
                  {/* <h3 className="text-[16px] sm:text-[18px] font-bold text-white truncate px-2">
                    {item.title}
                  </h3> */}
              <h3 className="text-[16px] sm:text-[13px] font-bold text-white leading-tight px-2 break-words whitespace-normal">
              {item.title}
            </h3>

                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* <h3 className="text-[18px] font-bold text-[#0A1F8F] mb-2 leading-snug">
                  {item.title}
                </h3> */}
                <p className="text-sm text-[#6b7280] leading-snug">{item.description}</p>
                <Link to={item.link}>
                  <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-[6px] text-sm transition-colors duration-200 hover:bg-yellow-400">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {lawsuits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] overflow-hidden w-full"
            >
              {/* Image */}
              <div className="w-full h-[180px] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[10%]"
                />
                 <div className="absolute bottom-0 left-0 w-full text-left px-4 py-3">
                      <h3 className="text-[16px] font-bold text-white leading-tight px-2 break-words whitespace-normal">
              {item.title}
            </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* <h3 className="text-[18px] font-bold text-[#0A1F8F] mb-2 leading-snug">
                  {item.title}
                </h3> */}
                <p className="text-sm text-[#6b7280] leading-snug">{item.description}</p>
                <Link to={item.link}>
                  <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-[6px] text-sm transition-colors duration-200 hover:bg-yellow-400">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServiceThree;
