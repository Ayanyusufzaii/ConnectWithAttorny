import React, { useState, useEffect } from 'react';
import teamImg from '../../assets/team_new.png'; // replace with your image
import aposthopthe_icon from '../../assets/aposthopthe_icon.png'; 
const HomeFive = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-[#ffffff] py-12 px-2 sm:px-4 md:px-8 lg:px-16" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {isMobile ? (
        // Mobile Version: Right section (content) on top, left section (image) on bottom
        <div className="max-w-full mx-auto bg-white rounded-md p-4 flex flex-col items-center gap-6">
          {/* Right Content (on top) */}
          <div className="w-full flex flex-col items-start order-1">
            <div className="text-3xl text-[#FFC928] font-bold mb-2 flex justify-start"><img src={aposthopthe_icon} alt="" className="w-[48px] h-[38px] object-cover" /></div>
            <h2 className="text-[28px] xs:text-[24px] sm:text-[26px] font-quicksand font-semibold text-[#0A1F8F] mb-2 leading-[30px] xs:leading-[32px] sm:leading-[36px] capitalize text-left">
              Experienced <span className="text-[#FFC928] font-quicksand font-semibold capitalize">Legal Teams</span>
              <br />
              <span className="text-[#0A1F8F] font-quicksand font-semibold capitalize">Who Work For You</span>
            </h2>
            <p className="text-[#757575] font-quicksand text-[12px] xs:text-[16px] sm:text-[16px] font-medium leading-normal text-left">
              We connect you with law firms that understand complex injury claims and treat your case with urgency, compassion, and attention to detail.
            </p>
          </div>
          {/* Left Image (on bottom) */}
          <div className="w-full flex flex-col items-center order-2">
            <div className="rounded-xl overflow-hidden w-full mb-0">
              <img
                src={teamImg}
                alt="Legal Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        // Desktop Version
        <div className="w-full md:max-w-full lg:max-w-[1440px] mx-auto bg-white rounded-md p-4 sm:p-6 md:p-0 lg:p-0 xl:p-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-20">
          {/* Left Image */}
          <div className="relative flex-shrink-0">
            <div className="rounded-xl overflow-hidden w-[180px] h-[180px] sm:w-[240px] sm:h-[220px] md:w-[300px] md:h-[260px] lg:w-[350px] lg:h-[320px] xl:w-[400px] xl:h-[360px] 2xl:w-[480px] 2xl:h-[420px]">
              <img
                src={teamImg}
                alt="Legal Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-left md:text-left flex-1">
            <div className="mb-4 flex items-center">
              <img src={aposthopthe_icon} alt="" className="w-[48px] h-[38px] sm:w-[60px] sm:h-[48px] md:w-[76px] md:h-[60px] lg:w-[90px] lg:h-[70px] xl:w-[110px] xl:h-[85px] flex-shrink-0 object-cover" />
            </div>
            <h2
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-quicksand font-semibold text-[#0A1F8F] mb-4 leading-[32px] sm:leading-[44px] md:leading-[54px] lg:leading-[64px] xl:leading-[72px] 2xl:leading-[80px] capitalize"
            >
              Experienced <span className="text-[#FFC928] font-quicksand font-semibold capitalize">Legal Teams</span>
              <br />
              <span className="text-[#0A1F8F] font-quicksand font-semibold capitalize">Who Work For You</span>
            </h2>
            <p className="text-[#757575] font-quicksand text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium leading-normal max-w-[700px]">
              We connect you with law firms that understand complex injury claims and
              treat your case with urgency, compassion, and attention to detail.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeFive;
