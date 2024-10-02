import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Keyfeatures from "@/components/Keyfeatures";
import { Questions } from "@/components/Questions";
import StepsToDownload from "@/components/StepsToDownload";
import WhyUsingInsta from "@/components/WhyUsingInsta";
import { InstagramVideoForm } from "@/features/instagram/components/form";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="mb-8 text-balance text-center text-4xl font-extrabold">
        Instagram Video Downloader
      </h1>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
      <About />
      <StepsToDownload />
      <WhyUsingInsta />
      <Keyfeatures />
      <Benefits />
      <Questions />
    </div>
  );
}
