import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import KeywordPillbox from "../../KeywordPillbox";
import { FirefoxLinkButton } from "../../MajorLinkButton";

export default function FFDevTools(props: React.ComponentPropsWithoutRef<"div">) {
  // const scrollable = useRef<HTMLDivElement | null>(null);
  return <div {...props} className="break-after-avoid">

    <BlurbTitle>Firefox DevTools</BlurbTitle>
    <BlurbSubtitle>Contributed various bugfixes and features to Mozilla Firefox's Developer Tools</BlurbSubtitle>

    <KeywordPillbox keywords={[<strong>React</strong>, <strong>Redux</strong>]} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      {/* <ul> */}
      <p>
        <a target="_blank" href="https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/#:~:text=SignalR%20formatting">Added support for the SignalR protocol to the WebSocket Inspector.</a>
      </p>

      <p>
        <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1592535">Added a clickable stack trace</a> to identify the <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=1618417">initiator of a network request</a> in the network monitor.
      </p>

      <p>
        <a target="_blank" href="https://blog.nightly.mozilla.org/2019/07/12/these-weeks-in-firefox-issue-60/#:~:text=made%20it%20so%20that%20the%20nascent" >Improved the UX of multiline input in the browser console.</a>
      </p>

      {/* </ul> */}

    </article>

    <div className="flex flex-wrap justify-end pt-5 gap-2">
      <FirefoxLinkButton target="_blank" text={"Bugzilla Profile"} href={"https://bugzilla.mozilla.org/buglist.cgi?query_format=advanced&emailtype1=exact&emailassigned_to1=1&email1=bryan.wyern1%40gmail.com"} />
    </div>

  </div>
}