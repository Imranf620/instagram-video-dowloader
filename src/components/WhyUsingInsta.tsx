import React from "react";

function WhyUsingInsta() {
  return (
    <div>
      <div className="why-using-insta mx-auto my-[100px]  flex  flex-col items-center justify-between gap-6  rounded-lg bg-[#A867BD]  p-9 lg:flex-row lg:gap-0 ">
        <h1 className="text-3xl font-bold text-[#000] md:text-[40px] ">
          Why Use Our Instagram Video Downloader?
        </h1>
        <div className="flex flex-col gap-4 text-[#000]">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-semibold sm:text-[24px]">
              Fast & Reliable:{" "}
            </p>
            <p className=" text-[18px] sm:text-[20px]">
              Quick download speeds with no interruptions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-semibold sm:text-[24px]">
              Safe & Secure:{" "}
            </p>
            <p className="text-[18px] sm:text-[20px]">
              {" "}
              Your data is protected; we don’t store any personal information.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-semibold sm:text-[24px]">
              No watermarks:{" "}
            </p>
            <p className="text-[18px] sm:text-[20px]">
              Get clean, high-quality videos without watermarks.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-semibold sm:text-[24px]">
              Access Anytime:{" "}
            </p>
            <p className="text-[18px] sm:text-[20px]">
              Download videos and access them offline whenever you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsingInsta;
