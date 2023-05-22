import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import { Pixel4VideoMockup } from "../../PixelMockup";
import KeywordPillbox from "../../KeywordPillbox";
import { GithubLinkButton } from "../../MajorLinkButton";


export default function Nitroless(props: React.ComponentPropsWithoutRef<"div">) {
  const scrollable = useRef<HTMLDivElement | null>(null);
  return <div {...props} className="break-after-avoid">

    <div className="flex flex-row">
      <div className="inline-block grow">
        <BlurbTitle>Nitroless</BlurbTitle>
      </div>
      <div>
        <div className="inline-block text-xs whitespace-nowrap border px-2 py-1 rounded text-slate-500 border-slate-500 dark:text-slate-300 dark:border-slate-300">
          Proof of concept
        </div>
      </div>
    </div>
    <BlurbSubtitle>An input method for Android that allows you to add and search for custom emotes</BlurbSubtitle>

    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto lg:snap-x"}>
        <Pixel4VideoMockup renderWidth={250} url={'https://r2.bryankok.com/videos/nitroless-demo.mp4'} aspectRatio={"19_9_exact"} />
        {/* <PictureMockup pic={radically_ogp} renderWidth={600} />
        <PictureMockup pic={radically_desktop} renderWidth={600} /> */}
      </div>

      {/* <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" /> */}
    </div>

    <KeywordPillbox keywords={['Kotlin', 'Room', 'LiveData']} />

    <div className="flex flex-wrap justify-end pt-5 gap-2">
      <GithubLinkButton target="_blank" text={"Repository"} href={"https://github.com/Transfusion/nitroless-android"} />
      {/* <MajorExternalLinkButton target="_blank" text={"Live Instance"} href={"https://radically.bryankok.com"} /> */}
    </div>

  </div>
}