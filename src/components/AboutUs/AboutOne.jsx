import React from 'react'
import imgR from '../../assets/abUsHero.png'
import bgImg from '../../assets/aboutUsHeroBg.png'
import MobileHeroBg from '../../assets/aboutUsMobHeroBg.png'

const AboutOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative items-center justify-between overflow-hidden
        h-[33.19vh]
        md:h-[300px]
        lg:h-[320px]
        xl:h-[500px]
        2xl:h-[574px]
        min-[3840px]:h-[956px]">
        <img
          src={bgImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black/20 z-10" /> */}
        
        {/* Content - Precisely positioned */}
        <div className="relative z-20 flex flex-col items-start w-full 
          pl-[5.56vw]
          md:pl-[16px]
          lg:pl-[26px]
          xl:pl-[70px]
          2xl:pl-[96px]
          4xl:pl-[160px]">
          
          <h1
            className="text-white mb-4 md:mb-5 lg:mb-6 drop-shadow-lg text-left capitalize
              text-[35px] leading-[42px] max-w-[85vw]
              md:text-[38px] md:leading-[45px] md:max-w-[50vw]
              lg:text-[44px] lg:leading-[53px] lg:max-w-[45vw]
              xl:text-[50px] xl:leading-[60px] xl:max-w-[568px]
              2xl:text-[60px] 2xl:leading-[72px] 2xl:max-w-[680px]
              min-[3840px]:text-[100px] min-[3840px]:leading-[120px] min-[3840px]:max-w-[1136px]
              font-[Quicksand] font-bold"
          >
            Who We Are
          </h1>
          
          <h2
            className="text-white drop-shadow text-left
              text-[14px] leading-[19px] max-w-[698px]
              md:text-[14px] md:leading-[19px] md:max-w-[368px]
              lg:text-[16px] lg:leading-[22px] lg:max-w-[490px]
              xl:text-[18px] xl:leading-[25px] xl:max-w-[698px]
              2xl:text-[22px] 2xl:leading-[30px] 2xl:2xl:max-w-[690px]
              min-[3840px]:text-[36px] min-[3840px]:leading-[50px] min-[3840px]:max-w-[1510px]
              font-[Quicksand]"
          >
            <span className="text-[#EDC14A] font-bold">BeWithLaw </span>is a legal support platform dedicated to helping individuals & families navigate complex injury and product-related lawsuits. We connect people harmed 
by dangerous drugs, medical devices, and toxic exposures with legal teams who understand their pain and are ready to fight for justice.
          </h2>
        </div>

        {/* Right Image - With Top Padding */}
        <div className="relative z-20 flex items-end h-full">
  <img
    src={imgR}
    alt="Hero Right"
    className="md:max-w-[368px] md:max-w-[368px]
              lg:max-w-[490px] lg:max-w-[490px]
              xl:max-h-[478px] xl:max-w-[786px]
              2xl:2xl:max-w-[690px] 2xl:2xl:max-w-[690px]"
  />
</div>
      </section>

      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full h-[554px] flex-col items-start justify-between overflow-hidden">
        {/* Background Image */}
        <img
          src={MobileHeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Content - Positioned at top */}
        <div className="relative z-20 flex flex-col items-start w-full px-4 pt-[50px]">
          <h1 
            className="text-white mb-4 text-left capitalize
              text-[32px] leading-normal
              font-[Quicksand] font-bold"
          >
            Who We Are
          </h1>
          
          <h2 
            className="text-white text-left
              text-[15px] leading-normal
              font-[Quicksand]"
          >
            BeWithLaw is a legal support platform dedicated to helping individuals & families navigate complex injury and product-related lawsuits. We connect people harmed by dangerous drugs, medical devices, and toxic exposures with legal teams who understand their pain and are ready to fight for justice.
          </h2>
        </div>

        {/* Bottom Image */}
        <div className="relative z-30 w-full flex justify-center mt-auto">
          <img
            src={imgR}
            alt="Bottom illustration"
            className="h-auto object-contain aspect-[374/227.30]"
          />
        </div>
      </section>
    </>
  )
}

export default AboutOne