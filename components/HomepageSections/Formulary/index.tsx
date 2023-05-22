import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { PixelMockup, Pixel4VideoMockup } from "../../PixelMockup";

import formulary_home from '../../../public/img/static/formulary/formulary-home.png';
import formulary_android_favorite_drugs from '../../../public/img/static/formulary/formulary-android-favorite-drugs.png';
import formulary_android_calculators from '../../../public/img/static/formulary/formulary-android-calculators.png';
import formulary_android_liraglutide from '../../../public/img/static/formulary/formulary-android-liraglutide.png';

import MajorLinkButton, { AppStoreLinkButton, PlayStoreLinkButton } from "../../MajorLinkButton";
import KeywordPillbox from "../../KeywordPillbox";

export default function Formulary(props: React.ComponentPropsWithoutRef<"div">) {
  const scrollable = useRef<HTMLDivElement | null>(null);

  return <div {...props} className="break-after-avoid">

    <BlurbTitle>PPUKM Drug Formulary</BlurbTitle>
    <BlurbSubtitle>A comprehensive drug reference app developed with the needs of The Pharmacy Department of the National University Hospital of Malaysia's practicing staff in mind</BlurbSubtitle>

    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto snap-x"}>
        <PixelMockup renderWidth={250} pic={formulary_home} aspectRatio={"19_9_exact"} res={"medium"} model={4} />
        <Pixel4VideoMockup renderWidth={250} url={'https://r2.bryankok.com/videos/ppukm_recording.mp4'} aspectRatio={"19_9_exact"} />
        <PixelMockup renderWidth={250} pic={formulary_android_favorite_drugs} aspectRatio={"19_9_exact"} res={"medium"} model={4} />
        <PixelMockup renderWidth={250} pic={formulary_android_calculators} aspectRatio={"19_9_exact"} res={"medium"} model={4} />
        <PixelMockup renderWidth={250} pic={formulary_android_liraglutide} aspectRatio={"19_9_exact"} res={"medium"} model={4} />
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>

    <KeywordPillbox keywords={[<strong>Python</strong>, <strong>React Native</strong>, <strong>Redux</strong>, 'Laravel', 'MySQL', 'Angular', <strong>5.5K MAU</strong>]} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>
        Parsed and cleaned data of 1000s of drugs from assorted Word and Excel documents into <strong>MySQL</strong> with <strong>Python</strong>.
      </p>

      <p>Reduced the average response time <strong>from seconds to sub 500ms</strong> by hashing each Drug entity upon modification and implementing and optimizing a delta-sync endpoint for the mobile app.</p>

      <p><strong>Singlehandedly</strong> developed the entire mobile app for practicing staff with <strong>Redux</strong> and <strong>Realm</strong> with <strong>offline</strong> capabilities; integrated <strong>Sentry</strong> for exception tracing and performance monitoring. Increased ratings to 4.7 on the App Store and a perfect 5 on the Play Store after implementing and optimizing a phonebook-style alphabetical scroll view with a <code>SectionList</code>.
      </p>

      <p><strong>40% retention rate since launch</strong> (5.5K MAU / 14K first-time downloads).</p>
    </article>

    <div className="flex flex-wrap justify-end pt-5 gap-2">
      <PlayStoreLinkButton target="_blank" text="Play Store" href="https://play.google.com/store/apps/details?id=my.ukm.ppukm.ppukmformulary&hl=en&gl=US" />
      <AppStoreLinkButton target="_blank" text="App Store" href="https://apps.apple.com/app/ppukm-drug-formulary/id1213297895" />
      <MajorLinkButton text={"Technical Notes & Metrics"} href={"/formulary"} />
    </div>

  </div>
}