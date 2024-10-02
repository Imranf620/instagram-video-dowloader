import React from "react";
import { MdDownload } from "react-icons/md";
import { MdOutlineHighQuality } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";

function Keyfeatures() {
  return (
    <div className=" mx-auto flex   flex-col items-center justify-center gap-10 pt-[0px]">
      <h1 className="text-3xl font-bold text-[#C937AB] md:text-5xl">
        Key Features
      </h1>
      <div className="grid-col-1 grid w-[100%] items-center gap-x-6 gap-y-6 sm:gap-y-16 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <MdDownload size={45} />
          <p className="w-[65%] border-b-[1px] border-b-[#000] pb-2 text-center text-[22px] font-semibold text-[#1D4ED8]">
            Fast & Free Downloads
          </p>
          <p className="pt-2 text-center text-[23px]">
            Save videos in seconds without any charges.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <MdOutlineHighQuality size={45} />
          <p className="w-[65%] border-b-[1px] border-b-[#000] pb-2 text-center text-[22px] font-semibold text-[#1D4ED8]">
            High-Quality Resolution
          </p>
          <p className="pt-2 text-center text-[23px]">
            Download videos in HD quality.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <IoLogInOutline size={45} />
          <p className="w-[65%] border-b-[1px] border-b-[#000] pb-2 text-center text-[22px] font-semibold text-[#1D4ED8]">
            No Login Required
          </p>
          <p className="pt-2 text-center text-[23px]">
            No need to sign in to your Instagram account.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <FaLaptop size={45} />
          <p className="w-[65%] border-b-[1px] border-b-[#000] pb-2 text-center text-[22px] font-semibold text-[#1D4ED8]">
            Compatible with All Devices
          </p>
          <p className="pt-2 text-center text-[23px]">
            Works on smartphones, tablets, and PCs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <MdDownload size={45} />
          <p className="w-[65%] border-b-[1px] border-b-[#000] pb-2 text-center text-[22px] font-semibold text-[#1D4ED8]">
            Unlimited Downloads
          </p>
          <p className="pt-2 text-center text-[23px]">
            No restrictions on how many videos you can download.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Keyfeatures;
