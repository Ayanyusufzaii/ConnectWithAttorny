import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs";

const ContactThree = () => {
  return (
   <div className="bg-[#F5F7FE] py-6 px-4 md:px-12 font-[Quicksand] flex items-center">
  {/* Desktop / Laptop Version */}
  <div className="hidden md:flex max-w-7xl mx-auto w-full flex-row justify-between items-center gap-4 lg:gap-8 px-4">
    {/* Left - Contact Info */}
    <div className="flex flex-col gap-3 lg:gap-4 justify-center">
      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0A1F8F]">Contact Us</h3>

      <div className="flex flex-col xl:flex-row gap-4 lg:gap-6">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="bg-[#0A1F8F] p-1.5 lg:p-2 rounded-xl text-white flex-shrink-0">
            <Phone className="w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16" />
          </div>
          <div className="min-w-0">
            <p className="text-lg lg:text-xl xl:text-2xl text-[#EDC14A] font-semibold">Call Us</p>
            <p className="text-sm lg:text-[16px] xl:text-[16px] font-semibold text-[#0A1F8F]">+1 888 202 1350</p>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <div className="bg-[#0A1F8F] p-1.5 lg:p-2 rounded-xl text-white flex-shrink-0">
            <Mail className="w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16" />
          </div>
          <div className="min-w-0">
            <p className="text-lg lg:text-xl xl:text-2xl text-[#EDC14A] font-semibold">Reach Us</p>
            <p className="text-sm lg:text-[16px] xl:text-[16px] text-[#0A1F8F] font-semibold break-all">Info@Connect2attorney.Com</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right - Social Media */}
    <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0 justify-center">
      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0A1F8F]">Follow Us</h3>
      <div className="flex gap-2 lg:gap-4">
        <div className="bg-[#0A1F8F] p-1.5 lg:p-2 rounded-xl text-white">
          <Facebook className="w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16" />
        </div>
        <div className="bg-[#0A1F8F] p-1.5 lg:p-2 rounded-xl text-white">
          <BsTwitterX className="w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16" />
        </div>
        <div className="bg-[#0A1F8F] p-1.5 lg:p-2 rounded-xl text-white">
          <Instagram className="w-12 h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16" />
        </div>
      </div>
    </div>
  </div>

      {/* Mobile Version */}
      <div className="md:hidden max-w-md mx-auto flex flex-col gap-6">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-[#0A1F8F]">Contact Us</h3>

          <div className="flex items-center gap-3">
            <div className="bg-[#0A1F8F] p-2 rounded-md text-white">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-[#EDC14A] font-semibold">Call Us</p>
              <p className="text-sm text-[#0A1F8F]">+1 888 202 1350</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#0A1F8F] p-2 rounded-md text-white">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-[#EDC14A] font-semibold">Reach Us</p>
              <p className="text-sm text-[#0A1F8F] break-all">Info@Connect2attorney.Com</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-[#0A1F8F]">Follow Us</h3>
          <div className="flex gap-4">
            <div className="bg-[#0A1F8F] p-2 rounded-md text-white">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="bg-[#0A1F8F] p-2 rounded-md text-white">
              <BsTwitterX className="w-5 h-5" />
            </div>
            <div className="bg-[#0A1F8F] p-2 rounded-md text-white">
              <Instagram className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactThree;
