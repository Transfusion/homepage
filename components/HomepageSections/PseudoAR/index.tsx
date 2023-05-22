import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import KeywordPillbox from "../../KeywordPillbox";
import IPhoneMockup, { IPhoneVideoMockup } from "../../IPhoneMockup";

import pseudo_ar_home from '../../../public/img/static/pseudo-ar/IMG_B327098ADDBD-1.jpeg'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import MajorLinkButton from "../../MajorLinkButton";

export default function PseudoAR(props: React.ComponentPropsWithoutRef<"div">) {
  const scrollable = useRef<HTMLDivElement | null>(null);

  return <div {...props} className="break-after-avoid">

    <div className="flex flex-row">
      <div className="inline-block grow">
        <BlurbTitle>AR Overlay</BlurbTitle>
      </div>
      <div>
        <div className="inline-block text-xs whitespace-nowrap border px-2 py-1 rounded text-slate-500 border-slate-500 dark:text-slate-300 dark:border-slate-300">
          Proof of concept
        </div>
      </div>
    </div>
    <BlurbSubtitle>A simple AR experience for a retail voucher platform</BlurbSubtitle>


    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto snap-x"}>
        <IPhoneVideoMockup model={8} res={'medium'} renderWidth={250} renderHeight={500} url={'https://r2.bryankok.com/videos/pseudo-ar_compressed.mp4'} aspectRatio={"16_9"} />
        <IPhoneMockup model={8} res={'medium'} renderWidth={250} renderHeight={500} pic={pseudo_ar_home} aspectRatio={"16_9"} />
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>

    <KeywordPillbox keywords={['Swift 4']} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>The client requested help with the iOS version of their app, which had <strong className="text-red-500">iOS 9.0</strong> as the deployment target. Due to this, the budget, timeframe, and limited roadmap of the project, a minimum viable solution was insisted upon, precluding true world tracking implementations with ARKit or ARCore.</p>

      <p>Created a convincing experience by calculating the bounds of the camera's viewport and projecting animated sprites onto the camera viewport using the roll and yaw values returned by the device's gyroscope, using <strong>quaternions</strong> instead of Euler angles to avoid gimbal lock.</p>

    </article>

    <div className="flex justify-end pt-5">
      <MajorLinkButton text={"The Algorithm"} href={"/aroverlay"} />
    </div>
  </div>

}