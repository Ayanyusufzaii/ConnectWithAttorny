import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
// Desktop Images
import depoImg from "../../assets/newServiceImg/depodesktopp.png";
import paraquatImg from "../../assets/newServiceImg/paradesktopp.png";
import roundupImg from "../../assets/newServiceImg/roundupdesktopp.png";
import babyFoodImg from "../../assets/newServiceImg/toxicbabydesktopp.png";
import oxbrytaImg from "../../assets/newServiceImg/oxbrytadesktopp.png";
import talcumImg from "../../assets/newServiceImg/Talcumdesktopp.png";
import bardImg from "../../assets/bardservicee.png";
import afffImg from "../../assets/newServiceImg/afffdesktopp.png";
import pfasImg from "../../assets/newServiceImg/pfasdesktopp.png";
import meshImg from "../../assets/newServiceImg/transdesktopp.png";
 
// Mobile Images
import depoImgMob from "../../assets/SubserviceMobile/depomobb.png";
import paraquatImgMob from "../../assets/SubserviceMobile/paramobb.png";
import roundupImgMob from "../../assets/SubserviceMobile/roundupmobb.png";
import babyFoodImgMob from "../../assets/SubserviceMobile/toxicbabymobb.png";
import oxbrytaImgMob from "../../assets/SubserviceMobile/oxbrytamobb.png";
import talcumImgMob from "../../assets/SubserviceMobile/talcummobb.png";
import bardImgMob from "../../assets/bardmobbb.png";
import afffImgMob from "../../assets/afffmobbbbb.png";
import pfasImgMob from "../../assets/SubserviceMobile/pfasmobb.png";
import meshImgMob from "../../assets/SubserviceMobile/transmobb.png";
 
const lawsuits = [
  { title: 'Depo-Provera Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: depoImg, link: '/Service/Depo-Provera-Lawsuit' },
  { title: 'Paraquat Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: paraquatImg, link: '/Service/Paraquat-Lawsuit' },
  { title: 'Roundup Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: roundupImg, link: '/Service/Roundup-Lawsuit' },
  { title: 'Toxic Baby Food Lawsuit', description: 'Heavy metal exposure tied to developmental delays', image: babyFoodImg, link: '/Service/Toxic-Baby-Food-Lawsuit' },
  { title: 'Oxbryta Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: oxbrytaImg, link: '/Service/Oxbryta-Lawsuit' },
  { title: 'Talcum Powder Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: talcumImg, link: '/Service/Talcum-Powder-Lawsuit' },
  { title: 'Bard PowerPort Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: bardImg, link: '/Service/Bard-PowerPort-Lawsuit' },
  { title: 'AFFF Firefighting Foam Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: afffImg, link: '/Service/AFFF-Firefighting-Foam-Lawsuit' },
  { title: 'PFAS Contamination Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: pfasImg, link: '/Service/PFAS-Contamination-Lawsuit' },
  { title: 'Transvaginal Mesh Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: meshImg, link: '/Service/Transvaginal-Mesh-Lawsuit' },
];
 
const Moblawsuits = [
  { title: 'Depo-Provera Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: depoImgMob, link: '/Service/Depo-Provera-Lawsuit' },
  { title: 'Paraquat Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: paraquatImgMob, link: '/Service/Paraquat-Lawsuit' },
  { title: 'Roundup Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: roundupImgMob, link: '/Service/Roundup-Lawsuit' },
  { title: 'Toxic Baby Food Lawsuit', description: 'Heavy metal exposure tied to developmental delays', image: babyFoodImgMob, link: '/Service/Toxic-Baby-Food-Lawsuit' },
  { title: 'Oxbryta Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: oxbrytaImgMob, link: '/Service/Oxbryta-Lawsuit' },
  { title: 'Talcum Powder Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: talcumImgMob, link: '/Service/Talcum-Powder-Lawsuit' },
  { title: 'Bard PowerPort Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: bardImgMob, link: '/Service/Bard-PowerPort-Lawsuit' },
  { title: 'AFFF Firefighting Foam Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: afffImgMob, link: '/Service/AFFF-Firefighting-Foam-Lawsuit' },
  { title: 'PFAS Contamination Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: pfasImgMob, link: '/Service/PFAS-Contamination-Lawsuit' },
  { title: 'Transvaginal Mesh Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: meshImgMob, link: '/Service/Transvaginal-Mesh-Lawsuit' },
];
 
const ServiceThree = () => {
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
 
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white w-full font-[Quicksand]">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#162766]">
            What Do We <span className="text-[#EDC14A]">Help You</span> With?
          </h2>
        </div>
 
        {isMobile ? (
          <div className="grid grid-cols-2 gap-6">
            {Moblawsuits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[14px] overflow-hidden w-full">
                <div className="w-full h-[180px] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-fill rounded-[10%]"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-left px-3 py-3">
                    <h3 className="text-[14px] sm:text-[13px] font-bold text-white leading-tight px-3 py-2 break-words whitespace-normal">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {lawsuits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[14px] overflow-hidden w-full max-w-[300px] mx-auto">
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
                <div className="p-4">
                  <p className="text-sm text-[#6b7280] leading-snug mb-4">
                    {item.description}
                  </p>
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
      </div>
    </section>
  );
};
 
export default ServiceThree;
 
 