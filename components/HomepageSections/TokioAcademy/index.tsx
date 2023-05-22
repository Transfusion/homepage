import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import KeywordPillbox from "../../KeywordPillbox";

import tokioacademy_cpd_hours from '../../../public/img/static/tokioacademy/tokioacademy-cpd-hours.jpg';

import tokioacademy_event_activities from '../../../public/img/static/tokioacademy/tokioacademy-event-activities.jpg';

import tokioacademy_upcoming_events from '../../../public/img/static/tokioacademy/tokioacademy-upcoming-events.jpg';

import { PixelMockup } from "../../PixelMockup";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function TokioAcademy(props: React.ComponentPropsWithoutRef<"div">) {

  const scrollable = useRef<HTMLDivElement | null>(null);

  return <div {...props} className="break-after-avoid">

    <BlurbTitle>TokioAcademy</BlurbTitle>
    <BlurbSubtitle>Mobile app for insurance agents' continuing professional development</BlurbSubtitle>

    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto snap-x"}>
        <PixelMockup renderWidth={250} renderHeight={500} pic={tokioacademy_upcoming_events} aspectRatio={"16_9"} res={"medium"} model={1} />
        <PixelMockup renderWidth={250} renderHeight={500} pic={tokioacademy_cpd_hours} aspectRatio={"16_9"} res={"medium"} model={1} />
        <PixelMockup renderWidth={250} renderHeight={500} pic={tokioacademy_event_activities} aspectRatio={"16_9"} res={"medium"} model={1} />
        {/* <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={panel_hospital_search} aspectRatio={"19dot5_9"} /> */}
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>

    <KeywordPillbox keywords={[<strong>React Native</strong>, <strong>Redux</strong>, 'ASP.NET 4', 'Entity Framework', 'MSSQL']} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>Built upon the success of OneTokio and created an app for the needs of the entire insurance agency force which included attendance tracking at training events, dissemination of learning material, and records of logged CPD hours.</p>
    </article>

    {/* <div className="flex justify-end pt-5">
      <MajorLinkButton text={"Case Study & Video"} href={"/onetokio"} />
    </div> */}

  </div>
}