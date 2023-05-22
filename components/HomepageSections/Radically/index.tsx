import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import KeywordPillbox from "../../KeywordPillbox";
import { GithubLinkButton, MajorExternalLinkButton } from "../../MajorLinkButton";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { PictureMockup } from "../../PictureMockup";

import radically_ogp from '../../../public/img/static/radically/radically-ogp.jpg';
import radically_desktop from '../../../public/img/static/radically/radically-desktop.png';

export default function Radically(props: React.ComponentPropsWithoutRef<"div">) {
  const scrollable = useRef<HTMLDivElement | null>(null);
  return <div {...props} className="break-after-avoid">

    <BlurbTitle>Radically</BlurbTitle>
    <BlurbSubtitle>A component-based Chinese character search engine</BlurbSubtitle>

    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto lg:snap-x"}>
        <PictureMockup pic={radically_ogp} renderWidth={600} />
        <PictureMockup pic={radically_desktop} renderWidth={600} />
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>


    <KeywordPillbox keywords={[<strong>React</strong>, <strong>PWA</strong>, <strong>Jest</strong>, <strong>React Testing Library</strong>, <strong>Python</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>CI/CD</strong>, <strong>Unicode</strong>]} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>
        Created ETL pipelines that parsed, transformed, and cleaned Unicode Consortium data of all 93000+ encoded CJK characters in the basic multilingual plane and blocks A to G.
      </p>

      <p>
        Devised and unit tested recursive algorithms that decompose characters into their components like a tree and group semantically or structurally-related characters together to aid learners and users looking for obscure characters alike.
      </p>

      <p>Used Workbox to manage the lifecycle of the service worker caching the served JSON data, enabling offline installation as a Progressive Web App.</p>

      <p>Used the Adobe AFDKO font creation toolkit to create <a target="_blank" href="http://radically.github.io/hanazonolite">an OpenType font</a> with 100% CJK Unicode codepoint coverage as a bonus.</p>

    </article>

    <div className="flex flex-wrap justify-end pt-5 gap-2">
      <GithubLinkButton target="_blank" text={"Repository"} href={"https://github.com/Radically/radically"} />
      <MajorExternalLinkButton target="_blank" text={"Live Instance"} href={"https://radically.bryankok.com"} />
    </div>

  </div>
}