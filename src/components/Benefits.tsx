import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Benefits() {
  return (
    <section className="mb-6 mt-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading Section */}
        <h2 className="mx-auto  mb-16   max-w-[600px] text-3xl font-bold text-[#C937AB] md:text-4xl">
          Benefits of Using an Instagram Video Downloader
        </h2>

        {/* Benefits Section */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Save Data</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-[23px]">
              Download once and watch offline without using extra data.
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Share with Friends</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-[23px]">
              Easily share downloaded videos on other platforms.
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">
                Create Your Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-[23px]">
              Keep your favorite videos for inspiration or reference.
            </CardContent>
          </Card>
        </div>

        <h2 className="mx-auto mb-8 mt-16  max-w-[720px] text-3xl font-bold text-[#C937AB]   md:text-4xl">
          Tips for Using Instagram Video Downloader Efficiently
        </h2>
        <div className="mb-12 text-left">
          <ul className="mx-auto flex max-w-[700px] list-inside list-disc flex-col items-start justify-center  text-[23px]">
            <li className="mb-2">
              Ensure you have a stable internet connection for quick downloads.
            </li>
            <li className="mb-2">
              Always respect the original content creator by not re-uploading
              without permission.
            </li>
            <li className="mb-2">
              Use the videos for personal or educational purposes to avoid
              copyright issues.
            </li>
          </ul>
        </div>

        <div className="mb-8 rounded-lg bg-secondary p-6  shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-[#C937AB] md:text-4xl">
            Conclusion
          </h2>
          <p className="mb-6 text-lg">
            The Instagram Video Downloader is your go-to solution for saving and
            enjoying Instagram videos offline. With its user-friendly interface,
            high-speed downloads, and top-quality resolution, it's the easiest
            way to build your collection of favorite content.
          </p>
          <Button size="lg" className="text-lg">
            Start Downloading Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
