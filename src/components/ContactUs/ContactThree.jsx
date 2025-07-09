import React from "react";
import { Instagram, Phone, Mail } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import {FaFacebookF} from 'react-icons/fa'; // Importing Facebook icon from react-icons
import { IoMail } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";


const ContactThree = () => {
  return (
    <div className="bg-[#F5F7FE] py-6 px-4 md:px-12 font-[Quicksand] flex items-center">
      {/* Desktop / Laptop Version */}
      <div className="hidden md:flex max-w-7xl mx-auto w-full flex-row justify-between items-center gap-4 lg:gap-8 px-4">
        {/* Left - Contact Info */}
        <div className="flex flex-col gap-3 lg:gap-4 justify-center">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0A1F8F]">
            Contact Us
          </h3>

          <div className="flex xl:flex-row gap-4 lg:gap-6">
            {[
              { icon: PiPhoneCallFill, label: "Call Us", value: "+1 (888) 202-1350" },
              { icon: IoMail, label: "Reach Us", value: "reachus@bewithlaw.com" },
            ].map(({ icon: Icon, label, value }, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-[#0A1F8F] rounded-[13px] flex justify-center items-center text-white w-[clamp(4rem,4vw,5rem)] h-[clamp(4rem,4vw,5rem)]">
                  <Icon className="w-[clamp(2rem,3vw,4rem)] h-[clamp(2rem,3vw,4rem)]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[23px] lg:text-[23px] xl:text-[27px] font-semibold text-[#EDC14A] whitespace-nowrap text-ellipsis overflow-hidden">
                    {label}
                  </p>
                  <p className="text-sm lg:text-base xl:text-base font-semibold text-[#0A1F8F] whitespace-nowrap text-ellipsis overflow-hidden">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Social Media */}
        <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0 justify-center">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0A1F8F]">
            Follow Us
          </h3>
          <div className="flex gap-2 lg:gap-4">
            {[FaFacebookF, BsTwitterX, Instagram].map((Icon, index) => (
              <div
                key={index}
                className="w-[clamp(4rem,4vw,5rem)] h-[clamp(4rem,4vw,5rem)] bg-[#0A1F8F] rounded-[13px] flex justify-center items-center text-white"
              >
                <Icon className="w-[clamp(3rem,3vw,4rem)] h-[clamp(3rem,3vw,4rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* Mobile Version */}
<div className="md:hidden flex flex-col gap-6">
  {/* Contact Info */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[30px] font-bold text-[#0A1F8F]">Contact Us</h3>

    {[
      { icon: PiPhoneCallFill, label: "Call Us", value: "+1 (888) 202-1350" },
      { icon: IoMail, label: "Reach Us", value: "reachus@bewithlaw.com" },
    ].map(({ icon: Icon, label, value }, idx) => (
      <div key={idx} className="flex items-center gap-3">
        <div className="bg-[#0A1F8F] p-2 rounded-md w-[48px] h-[48px] text-white flex items-center justify-center">
          <Icon className="w-[28px] h-[28px]" />
        </div>
        <div>
          <p className="text-[24px] text-[#EDC14A] font-semibold">
            {label}
          </p>
          <p
            className={`text-sm lg:text-base xl:text-base font-semibold text-[#0A1F8F] whitespace-nowrap text-ellipsis overflow-hidden ${
              label === "Reach Us" ? "break-all" : ""
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Social Icons */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[30px] font-bold text-[#0A1F8F]">Follow Us</h3>
    <div className="flex gap-4">
      {[FaFacebookF, BsTwitterX, Instagram].map((Icon, idx) => (
        <div
          key={idx}
          className="bg-[#0A1F8F] p-2 rounded-md text-white w-[48px] h-[48px] flex items-center justify-center"
        >
          <Icon className="w-[28px] h-[28px]" />
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default ContactThree;
// the mobile version is perfect the desktop and 