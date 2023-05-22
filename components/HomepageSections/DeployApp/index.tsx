import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import KeywordPillbox from "../../KeywordPillbox";
import MajorLinkButton, { GithubLinkButton, MajorExternalLinkButton } from "../../MajorLinkButton";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { PictureMockup } from "../../PictureMockup";

import app_page from '../../../public/img/static/deployapp/app-page.png';
import manage_credentials_page from '../../../public/img/static/deployapp/manage-credentials-page.png';

export default function DeployApp(props: React.ComponentPropsWithoutRef<"div">) {
  const scrollable = useRef<HTMLDivElement | null>(null);
  return <div {...props} className="break-after-avoid">

    <BlurbTitle>DeployApp</BlurbTitle>
    <BlurbSubtitle>A beta app distribution platform allowing users to attach their own cloud storage</BlurbSubtitle>

    <div className="relative">
      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto lg:snap-x"}>
        <PictureMockup pic={app_page} renderWidth={250} />
        <PictureMockup pic={manage_credentials_page} renderWidth={650} />
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +400, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>


    <KeywordPillbox keywords={[<strong>Spring Boot</strong>, <strong>JUnit 5</strong>, <strong>Kubernetes</strong>, <strong>Microservices</strong>, <strong>Docker</strong>, 'CI/CD', <strong>GraalVM</strong>, <strong>OAuth2</strong>, <strong>Redis</strong>, <strong>AMQP</strong>, <strong>RabbitMQ</strong>, 'PostgreSQL', <strong>AWS S3</strong>, 'React',]} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>
        Created this utility to solve real-world hurdles encountered during enterprise app development and beta testing, such as data handling requirements and faster, more reliable installs in a corporate network environment.
      </p>

      <p>Wrote and unit tested <a target="_blank" href="https://github.com/Transfusion/app-info-java-graalvm" rel="noreferrer">Java wrappers for existing app binary parsing libraries</a> in other languages such as Ruby, leveraging the GraalVM polyglot runtime.</p>

      <p>Designed a horizontally scalable microservice architecture to parallelize CPU-intensive operations with worker microservices, using event-driven inter-service communication over AMQP / RabbitMQ.</p>

      <p>Profiled JVM memory usage with VisualVM, <code>jcmd</code>, and native memory tracking to fix leaks especially in resource-constrained environments like 1 replica each on a single-node K3s cluster.</p>

      <p>Implemented common authentication patterns such as social login with multiple OAuth2 providers, email/password login, account merging, and session data for anonymous users to be persisted upon signup using Spring Security.</p>

      <p>Orchestrated unit and integration tests against external services using <code>docker-compose</code>, built images and deployed to Kubernetes in a GitHub Actions CI/CD pipeline.</p>

      <p>
        Distributed 100+ app builds to testers in a couple different organizations so far.
      </p>
    </article>

    <div className="flex flex-wrap justify-end pt-5 gap-2">
      <GithubLinkButton target="_blank" text={"Arch. Diagram"} href={"https://github.com/Transfusion/deployapp-platform#architecture"} />
      <MajorExternalLinkButton target="_blank" text={"Live Instance"} href={"https://deploy.plan.ovh"} />
    </div>

  </div>
}