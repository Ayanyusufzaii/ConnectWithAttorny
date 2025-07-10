import React from 'react'
import imgR from '../../assets/abUsHero.png'
import bgImg from '../../assets/abUs002.png'
import MobileHeroBg from '../../assets/abUs002Mob.png'

const AboutTwo = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Section */}
{/* Desktop/Laptop/Tablet Section */}
<section className="hidden sm:flex relative items-center overflow-hidden
  min-h-[50vh] h-[clamp(300px,35vw,956px)]">
  
  {/* Background Image - Fixed to always cover */}
  <img
    src={bgImg}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover object-center z-0"
  />
  
  {/* Text Block - Positioned at center with padding */}
  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 z-10
    pl-[20px] pr-[20px]
    md:pl-[30px] md:pr-[30px]
    lg:pl-[40px] lg:pr-[40px]
    xl:pl-[50px] xl:pr-[50px]
    2xl:pl-[60px] 2xl:pr-[60px]
    min-[3840px]:pl-[100px] min-[3840px]:pr-[100px]
    w-1/2">
    
    {/* Heading */}
    <h1 className="mb-4 md:mb-5 lg:mb-6
      text-[35px] 
      md:text-[38px]
      lg:text-[44px]
      xl:text-[50px]
      2xl:text-[60px]
      min-[3840px]:text-[100px]
      font-[Quicksand] font-bold leading-normal capitalize">
      <span className="text-[#0A1F8F]">Our </span>
      <span className="text-[#EDC14A]">Mission</span>
    </h1>
    
    {/* Subtext */}
    <p className="text-[#757575] 
      text-[13px] leading-[18px]
      md:text-[14px] md:leading-[19px]
      lg:text-[16px] lg:leading-[22px]
      xl:text-[18px] xl:leading-[25px]
      2xl:text-[22px] 2xl:leading-[30px]
      min-[3840px]:text-[36px] min-[3840px]:leading-[50px]
      font-[Quicksand] font-medium">
      To simplify legal access for people harmed by negligence & hold corporations accountable through trusted, compassionate, and professional support.
    </p>
  </div>
</section>

      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full h-[610px] flex-col items-start justify-between overflow-hidden ">
        {/* Background Image */}
        <img
          src={MobileHeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-#FDF9ED;/30 z-10" />

        {/* Content - Positioned at top */}
        <div className="relative z-20 flex flex-col items-start w-full px-4 pt-[97px]">
          <h1 
            className="text-[#0A1F8F] mb-4 text-left capitalize
              text-[32px] leading-normal
              font-[Quicksand] font-bold"
          >
            Our <span className="text-[#EDC14A]">Mission</span>
          </h1>
          
          <h2 
            className="text-[#757575] text-left
              text-[14px] leading-normal font-medium
              font-[Quicksand]"
          >
            To simplify legal access for people harmed by negligence & hold corporations accountable through trusted, compassionate, and professional support.
          </h2>
        </div>

      </section>
    </>
  )
}

export default AboutTwo