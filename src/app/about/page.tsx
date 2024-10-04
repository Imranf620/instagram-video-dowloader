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
          download Instagram videos directly to their devices. It's
          user-friendly, requires no installation, and is compatible with mobile
          phones, tablets, and computers. Save your favorite content and watch
          it anytime, even offline!
        </p>
        <h3 className="text-2xl font-semibold text-[#C937AB] md:text-4xl">
          Why Use Our Downloader?
        </h3>
        <p className="text-[20px] font-normal text-[#717171] md:text-[24px]">
          Our downloader offers a seamless experience for users looking to save
          Instagram videos. With just a few clicks, you can access your desired
          videos without any hassle. Here are some of the key benefits:
        </p>
        <ul className="list-disc pl-5 text-[20px] font-normal text-[#717171] md:text-[24px]">
          <li>
            🖥️ <b>High-Quality Downloads</b> Enjoy videos in the highest quality
            available.
          </li>
          <li>
            🔗 <b>Simple URL Input</b>: Just paste the video URL, and we’ll do
            the rest!
          </li>
          <li>
            📱 <b>Device Compatibility </b>: Works on any device—be it a
            smartphone, tablet, or computer.
          </li>
          <li>
            🔒 <b>Privacy</b> We respect your privacy—no user data is stored or
            tracked.
          </li>
          <li>
            ⏱️ <b>Fast Processing</b> Get your videos quickly without
            unnecessary delays.
          </li>
        </ul>
        <p className="text-[20px] font-normal text-[#717171] md:text-[24px]">
          Join thousands of users who have made the switch to our Instagram
          Video Downloader. Whether it's for entertainment, education, or
          inspiration, you can now have your favorite videos at your fingertips!
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
