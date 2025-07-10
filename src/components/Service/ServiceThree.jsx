import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Desktop Images
import depoImg from "../../assets/newServiceImg/new-desk-depo-lawsuit.png";
import paraquatImg from "../../assets/newServiceImg/new-desk-paraquat-lawsuit.png";
import roundupImg from "../../assets/newServiceImg/new-desk-roundup-lawsuit.png";
import babyFoodImg from "../../assets/newServiceImg/new-desk-toxic-baby-food-lawsuit.png";
import oxbrytaImg from "../../assets/newServiceImg/new-desk-oxbryta-lawsuit.png";
import talcumImg from "../../assets/newServiceImg/new-desk-talcum-powder-lawsuit.png";
import bardImg from "../../assets/newServiceImg/new-desk-bard-powerport-lawsuit.png";
import afffImg from "../../assets/newServiceImg/new-desk-afff-firefighting-foam-lawsuit.png";
import pfasImg from "../../assets/newServiceImg/new-desk-pfas-contamination-lawsuit.png";
import meshImg from "../../assets/newServiceImg/new-desk-transvaginal-mesh-lawsuit.png";

// Mobile Images
import depoImgMob from "../../assets/SubserviceMobile/mob-depo-provera-lawsuit.png";
import paraquatImgMob from "../../assets/SubserviceMobile/mob-paraquat-lawsuit.png";
import roundupImgMob from "../../assets/SubserviceMobile/mob-roundup-lawsuit.png";
import babyFoodImgMob from "../../assets/SubserviceMobile/mob-toxic-baby-food-lawsuit.png";
import oxbrytaImgMob from "../../assets/SubserviceMobile/mob-oxbryta-lawsuit.png";
import talcumImgMob from "../../assets/SubserviceMobile/mob-talcum-powder-lawsuit.png";
import bardImgMob from "../../assets/SubserviceMobile/mob-bard-powerport-lawsuit.png";
import afffImgMob from "../../assets/SubserviceMobile/mob-afff-firefighting-foam-lawsuit.png";
import pfasImgMob from "../../assets/SubserviceMobile/mob-pfas-contamination-lawsuit.png";
import meshImgMob from "../../assets/SubserviceMobile/mob-transvaginal-mesh-lawsuit.png";

// new images

// import newRoundup from "../../assets/newServiceImg/roundupnew.png"

const lawsuits = [
  { title: 'Depo-Provera Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: depoImg, link: '/DepoMain' },
  { title: 'Paraquat Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: paraquatImg, link: '/ParaquatMain' },
  { title: 'Roundup Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: roundupImg, link: '/roundupMain' },
  { title: 'Toxic Baby Food Lawsuit', description: 'Heavy metal exposure tied to developmental delays', image: babyFoodImg, link: '/Babyfood' },
  { title: 'Oxbryta Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: oxbrytaImg, link: '/OxbrytaMain' },
  { title: 'Talcum Powder Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: talcumImg, link: '/TalcumMain' },
  { title: 'Bard PowerPort Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: bardImg, link: '/BardPowerPortMain' },
  { title: 'AFFF Firefighting Foam Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: afffImg, link: '/AFFFMain' },
  { title: 'PFAS Contamination Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: pfasImg, link: '/PFASMain' },
  { title: 'Transvaginal Mesh Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: meshImg, link: '/TransvaginalMain' },
];

const Moblawsuits = [
  { title: 'Depo-Provera Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: depoImgMob, link: '/DepoMain' },
  { title: 'Paraquat Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: paraquatImgMob, link: '/ParaquatMain' },
  { title: 'Roundup Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: roundupImgMob, link: '/roundupMain' },
  { title: 'Toxic Baby Food Lawsuit', description: 'Heavy metal exposure tied to developmental delays', image: babyFoodImgMob, link: '/Babyfood' },
  { title: 'Oxbryta Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: oxbrytaImgMob, link: '/OxbrytaMain' },
  { title: 'Talcum Powder Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: talcumImgMob, link: '/TalcumMain' },
  { title: 'Bard PowerPort Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: bardImgMob, link: '/BardPowerPortMain' },
  { title: 'AFFF Firefighting Foam Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: afffImgMob, link: '/AFFFMain' },
  { title: 'PFAS Contamination Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: pfasImgMob, link: '/PFASMain' },
  { title: 'Transvaginal Mesh Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: meshImgMob, link: '/TransvaginalMain' },
];

// const ServiceThree = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Custom function to ensure all images fit consistently
//   const getImageStyles = () => {
//     return {
//       width: '100%',
//       height: '100%',
//       objectFit: 'fill',
//       objectPosition: 'center',
//       display: 'block',
//       margin: 0,
//       padding: 0,
//       border: 'none',
//       outline: 'none'
//     };
//   };

//   const renderCard = (item, idx) => (
//     <div
//       key={idx}
//       className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-[320px] mx-auto"
//     >
//       {/* Image Section */}
//       <div className="h-[200px] relative overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.title}
//           style={getImageStyles()}
//         />
//         <div className="absolute bottom-0 left-0 w-full  py-2 px-3 rounded-b-2xl">
//           <h3 className="text-white text-[14px] font-semibold leading-tight">{item.title}</h3>
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="p-4">
//         <p className="text-sm text-gray-600 min-h-[40px] mb-4">{item.description}</p>
//         <Link to={item.link}>
//           <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-200">
//             Learn More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white font-[Quicksand]">
//       <div className="mb-10 text-left">
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1F8F]">
//           What Do We <span className="text-[#EDC14A]">Help You</span> With?
//         </h2>
//       </div>

//       <div className={`grid gap-6 ${isMobile ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center'}`}>
//         {(isMobile ? Moblawsuits : lawsuits).map(renderCard)}
//       </div>
//     </section>
//   );
// };
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
           
          {Moblawsuits.map((item, idx) => (
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
                  className="w-full h-full object-fill rounded-[10%]"
                />
                <div className="absolute bottom-0 left-0 w-full text-left px-3 py-3">
                  {/* <h3 className="text-[16px] sm:text-[18px] font-bold text-white truncate px-2">
                    {item.title}
                  </h3> */}
              <h3 className="text-[14px] sm:text-[13px] font-bold text-white leading-tight px-3 py-2 break-words whitespace-normal">
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
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
                  className="w-full h-full object-fill"
                />
                
                <div className="absolute bottom-0 left-0 w-full text-left px-4 py-3">
                  <h3 className="text-[16px] font-bold text-white leading-tight px-3 py-2 break-words whitespace-normal">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-[#6b7280] leading-snug mb-4">{item.description}</p>
                <Link to={item.link}>
                  <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-[6px] text-sm transition-colors duration-200 hover:bg-yellow-400">
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