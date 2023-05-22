import { BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import IPhoneMockup from "../../IPhoneMockup";
import MajorLinkButton from "../../MajorLinkButton";
import { useRef } from "react";
import { PixelMockup } from "../../PixelMockup";

import onetokio_home_screen_android from '../../../public/img/static/onetokio/onetokio-home-screen-android.png';

import panel_hospital_search from '../../../public/img/static/onetokio/onetokio-panel-hospital-search.jpg';

import panel_hospital from '../../../public/img/static/onetokio/onetokio-panel-hospital.jpg';

import coverage from '../../../public/img/static/onetokio/onetokio-coverage.jpg';

import KeywordPillbox from "../../KeywordPillbox";

export default function OneTokio(props: React.ComponentPropsWithoutRef<"div">) {

  const scrollable = useRef<HTMLDivElement | null>(null);

  return <div {...props} className="break-after-avoid">

    <BlurbTitle>OneTokio</BlurbTitle>
    <BlurbSubtitle>Mobile app for insurance policyholders</BlurbSubtitle>
    {/* <p></p> */}
    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto snap-x"}>
        <PixelMockup renderWidth={250} pic={onetokio_home_screen_android} aspectRatio={"19_9"} res={"medium"} model={4} />
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={panel_hospital_search} aspectRatio={"19dot5_9"} />
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={panel_hospital} aspectRatio={"19dot5_9"} />
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={coverage} aspectRatio={"19dot5_9"} />
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>

    <KeywordPillbox keywords={[<strong>React Native</strong>, <strong>Redux</strong>, 'ASP.NET 4', 'MSSQL', <strong>20K+ Downloads</strong>]} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>Rewrote OneTokio, originally written in Cordova, from scratch in <strong>React Native</strong> with <strong>Redux</strong>. This allowed the design language to be easily kept consistent throughout and state to be managed more effectively across components, resulting in a <strong>3x increase in development velocity.</strong></p>

      <p><strong>Increased user retention by more than 2x</strong> by implementing <strong>push notifications with Firebase</strong>, an in-app inbox, geolocation of surrounding panel hospitals, and the beginnings of a loyalty program amongst other features, culminating in a press release in late 2019.</p>

    </article>


    {/* <div className="flex justify-end pt-5">
      <MajorLinkButton text={"Case Study & Video"} href={"/onetokio"} />
    </div> */}


  </div>
}

