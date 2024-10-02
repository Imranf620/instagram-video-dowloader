import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Questions() {
  return (
    <main className="md:mx-auto md:min-w-[768px] md:max-w-[768px]">
      <h1 className="mb-10  text-center text-3xl font-bold  text-[#C937AB] md:text-5xl">
        Q&A
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            Is it legal to download Instagram videos?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Downloading videos for personal use is allowed, but always respect
            copyright laws and the creator’s rights.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">
            Does this tool work on private accounts?{" "}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            No, it only works with videos from public accounts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">
            Can I download Instagram reels with this tool?{" "}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes, our downloader supports both videos and reels!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
