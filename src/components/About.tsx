import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-20 py-[100px] lg:flex-row">
      <div className="flex w-[100%] flex-col gap-6 lg:w-[60%]">
        <h2 className="text-3xl font-bold text-[#C937AB] md:text-5xl">
          What is an Instagram Video Downloader?
        </h2>
        <p className="text-[20px] font-normal text-[#717171] md:text-[24px]">
          An Instagram Video Downloader is an online tool that allows users to
          download Instagram videos directly to their devices. It&apos;s
          user-friendly, requires no installation, and is compatible with mobile
          phones, tablets, and computers. Save your favorite content and watch
          it anytime, even offline!
        </p>
      </div>
      <div className="flex w-[100%] items-center justify-center lg:w-[40%]">
        <Image
          src="/images/pnghq.com-instagram-icon-logo-trans-1-removebg.png"
          width={500}
          height={500}
          alt="Instagram Logo"
        />
      </div>
    </div>
  );
}

export default About;
