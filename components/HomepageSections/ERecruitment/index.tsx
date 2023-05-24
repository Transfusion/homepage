import { useRef } from "react";
import BlurbSubtitle from "../../BlurbSubtitle";
import BlurbTitle from "../../BlurbTitle";
import IPhoneMockup from "../../IPhoneMockup";

import income_calculator_pam from '../../../public/img/static/erecruitment/income-calculator-pam.png';

import income_calculator_pam_result from '../../../public/img/static/erecruitment/income-calculator-pam-result.png';

import form_working_experience from '../../../public/img/static/erecruitment/form-working-experience.png';

import form_signature from '../../../public/img/static/erecruitment/form-signature.png';

import pending_approval from '../../../public/img/static/erecruitment/pending-approval.png';

import MajorLinkButton from "../../MajorLinkButton";
import KeywordPillbox from "../../KeywordPillbox";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ERecruitment(props: React.ComponentPropsWithoutRef<"div">) {

  const scrollable = useRef<HTMLDivElement | null>(null);

  return <div {...props} className="break-after-avoid">
    <BlurbTitle>eRecruitment</BlurbTitle>
    <BlurbSubtitle>Digitalization of the entire recruitment process for various insurance distribution channels</BlurbSubtitle>
    <div className="relative">

      <div ref={scrollable}
        className={"p-5 flex flex-row space-x-5 overflow-x-auto snap-x"}>
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={income_calculator_pam} aspectRatio={"19dot5_9"} />
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={income_calculator_pam_result} aspectRatio={"19dot5_9"} />
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={form_working_experience} aspectRatio={"19dot5_9"} />
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={form_signature} aspectRatio={"19dot5_9"} />
        <IPhoneMockup model={13} res={'medium'} renderWidth={250} pic={pending_approval} aspectRatio={"19dot5_9"} />
      </div>

      <BsArrowLeftCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: -250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 left-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />

      <BsArrowRightCircleFill onClick={() => {
        scrollable.current?.scrollBy({ left: +250, behavior: 'smooth' });
      }} size={40} className="absolute top-1/2 right-2 cursor-pointer opacity-75 fill-slate-400 hover:fill-slate-600" />
    </div>

    <KeywordPillbox keywords={[<strong>Java</strong>, <strong>Kotlin</strong>, <strong>Spring Boot</strong>, <strong>Spring Security</strong>, <strong>Hibernate</strong>, <strong>QueryDSL</strong>, 'MSSQL', <strong>MapStruct</strong>, <strong>Python</strong>, 'Swagger', 'OpenAPI', 'Wildfly', 'React Native', 'Redux', 'Angular', 'OAuth2', <strong>CI/CD</strong>, <strong>Docker</strong>, <strong>200+ MAU</strong>]} />

    <article className="prose dark:prose-invert max-w-none leading-normal">
      <p>
        Won the RFP process against <strong>4 other shortlisted vendors</strong> by developing and demonstrating a functional, installable, proof of concept app to key stakeholders.
      </p>

      <p>
        Architected and implemented the RESTful backend with <strong>Spring Boot</strong>, MSSQL, Flyway, <strong>MapStruct</strong> and <strong>Hibernate</strong> for the mobile app, web dashboard, and sessionless signup form.
      </p>

      <p>Added <strong>300+ intranet users</strong> and granted access to other teams by extending eRecruitment to act as an <strong>OAuth2 resource server</strong> with <strong>Keycloak</strong>; wrote extensions exposing endpoints to query for users by custom attributes.</p>

      <p>Refactored SQL queries using <strong>QueryDSL</strong> instead of <strong>JPQL</strong> or native queries to improve maintainability and reduced load by caching intensive queries in Redis via Spring's CacheManager interface.
      </p>

      <p><strong>Singlehandedly</strong> developed the entire mobile app for recruiters in the field; used <strong>d3-shape</strong> and <strong>react-native-svg</strong> for the interactive calculator and charts, <strong>Redux</strong> and <strong>Realm</strong> for <strong>offline-capable forms</strong> with complex, cross-section validation requirements.
      </p>

      <p>Set up a <strong>GitLab CI/CD</strong> pipeline that built and deployed <strong>Docker</strong> images into production using docker-compose and Traefik.</p>


      {/* <p>
        After landing the project, led requirements elicitation sessions with the management team and implemented projected income calculation logic for the organizational hierarchy <strong>as a TypeScript library with 100% unit test coverage in Jest</strong> for subsequent reusability on the web and Node.js.
      </p>

      <p>
        Architected and implemented the <strong>REST</strong>ful backend with <strong>Spring Boot</strong>, <strong>Flyway</strong>, and <strong>MapStruct</strong>; performed role-based authorization and custom authentication against an internal API with <strong>Spring Security</strong> to deliver new user stories incl. a non-face to face recruitment flow initiated over SMS or email, push notifications with deep links upon system events, routing of the application to the correct PIC based on configurable criteria, a bird's-eye view dashboard to filter and collect stats on applications, non-blocking printables generation with <strong>Apache POI</strong>, etc.
      </p>

      <p>Refactored SQL queries using <strong>QueryDSL</strong> instead of <strong>JPQL</strong> or native queries to improve maintainability and reduced load by caching intensive queries in Redis via Spring's CacheManager interface.
      </p>

      <p><strong>Singlehandedly</strong> developed the entire mobile app for recruiters in the field; used <strong>d3-shape</strong> and <strong>react-native-svg</strong> for the interactive calculator and charts, <strong>Redux</strong> and <strong>Realm</strong> for <strong>offline-capable forms</strong> with very complex, cross-section validation requirements.
      </p>

      <p>
        Complied with regulatory pentests; applied measures such as <strong>certificate pinning</strong>, <strong>CSP</strong> on the web, AES-256 encryption for data at rest, input size limits, etc.
      </p>

      <p>
        Set up Wildfly, tuned JVM parameters, and reverse-proxied both Wildfly and the Angular dashboard SPA through IIS, resolving CORS and cookie scope issues.
      </p>

      <small>The following are bespoke customizations made on behalf of certain distribution channels.</small>

      <p>Supported <strong>300+ more users</strong> seamlessly by extending eRecruitment to act as an <strong>OAuth2 resource server</strong> with <strong>Keycloak</strong> as the authorization server. Granted access to other teams with service accounts and generated API documentation with <strong>springdoc-openapi</strong> and <strong>Swagger</strong>. Wrote a Keycloak extension implementing SPIs that exposed new endpoints to query for users based on custom attributes.</p>

      <p><strong>Docker</strong>ized eRecruitment and used <strong>docker-compose</strong> to spin up identical instances effortlessly.</p> */}

      <p>Achieved complete paperless recruiting in <strong>80%+</strong> of new cases, with <strong>200+ MAU</strong> across <strong>9 distribution channels.</strong></p>
    </article>

    <div className="flex justify-end pt-5">
      <MajorLinkButton text={"Technical / UI Notes"} href={"/erecruitment"} />
    </div>
  </div>
}
