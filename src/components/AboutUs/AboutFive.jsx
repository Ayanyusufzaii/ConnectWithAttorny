import React from 'react'
import bgImg from '../../assets/abUs005.png'
import MobileHeroBg from '../../assets/abUs005Mob.png'
 
const AboutFive = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Section */}
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
          className="absolute inset-0 w-full h-full z-0"
        />
 
  {/* Text Block - Positioned at 45% mark (start of right 55%) */}
  <div className="absolute left-[45%] top-1/2 -translate-y-1/2 z-10
    pr-[20px]
    md:pr-[30px]
    lg:pr-[40px]
    xl:pr-[50px]
    2xl:pr-[60px]
    min-[3840px]:pr-[100px]
    ">
   
    {/* Heading */}
    <h1 className=" mb-2
      text-[28px]
      md:text-[30px]
      lg:text-[32px]
      xl:text-[36px]
      2xl:text-[40px]
      min-[3840px]:text-[45px]
      font-[Quicksand] font-bold leading-normal capitalize ">
      <span className="text-[#0A1F8F]">Our Network</span>
    </h1>
   
    {/* Subtext */}
    <p className="text-[#757575]
      text-[10px] leading-[15px]
      md:text-[12px] md:leading-[18px]
      lg:text-[14px] lg:leading-[20px]
      xl:text-[16px] xl:leading-[22px]
      2xl:text-[18px] 2xl:leading-[25px]
      min-[3840px]:text-[20px] min-[3840px]:leading-[28px]
      font-[Quicksand] font-medium">
      BeWithLaw partners with vetted law firms that focus on mass torts and personal injury cases across the United States. These firms work on a contingency basis, meaning you pay nothing unless compensation is awarded.
    </p>
  </div>
</section>
 
      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full h-[654px] flex-col items-start justify-between overflow-hidden ">
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
            Our Network
          </h1>
         
          <h2
            className="text-[#757575] text-left
              text-[12px] leading-normal
              font-[Quicksand]"
          >
            BeWithLaw partners with vetted law firms that focus on mass torts and personal injury cases across the United States. These firms work on a contingency basis, meaning you pay nothing unless compensation is awarded.
          </h2>
        </div>
 
      </section>
    </>
  )
}
 
export default AboutFive