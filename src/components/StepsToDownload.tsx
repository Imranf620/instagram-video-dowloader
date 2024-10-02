import Image from "next/image";
import React from "react";

function StepsToDownload() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-0">
      <h1 className="border-b-[2px] pb-4 text-3xl font-bold text-[#C937AB] md:text-[40px]">
        How to Use the Instagram Video Downloader?
      </h1>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="downloaing-step flex flex-col items-center gap-6 pb-6">
          <Image
            className="h-auto w-full"
            priority
            width={300}
            src="/images/search.png" // Update with the correct path
            alt="Paste the URL"
            height={200} // Set the appropriate height
          />
          <p className="px-6 text-[20px] font-semibold md:text-[22px]">
            Copy the Video URL
          </p>
          <p className="px-6">
            Open Instagram, find the video you want to download, and copy its
            URL.
          </p>
        </div>
        <div className="downloaing-step flex flex-col items-center gap-6 pb-6">
          <Image
            className="h-auto w-full"
            priority
            width={300}
            src="/images/search.png" // Update with the correct path
            alt="Paste the URL"
            height={200} // Set the appropriate height
          />
          <p className="px-6 text-[22px] font-semibold">Paste the URL</p>
          <p className="px-6">
            Head to our Instagram Video Downloader and paste the copied link.
          </p>
        </div>
        <div className="downloaing-step flex flex-col items-center gap-6 pb-6">
          <Image
            className="h-auto w-full"
            priority
            width={300}
            src="/images/download.png" // Update with the correct path
            alt="Paste the URL"
            height={200} // Set the appropriate height
          />
          <p className="px-6 text-[22px] font-semibold">Click Download</p>
          <p className="px-6">
            Press the download button, and your video will be automatically
            saved instantly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepsToDownload;
