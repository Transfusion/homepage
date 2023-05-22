import Head from "next/head";
import Image from 'next/image';
import BlurbSubtitle from "../../components/BlurbSubtitle";
import BlurbTitle from "../../components/BlurbTitle";
import HeaderLayout from "../../components/HeaderLayout";
import { ReactNode, useEffect } from "react";

import sharedStyles from '../../styles/Shared.module.css';

import bearer_id_resolver_snippet from './snippets/bearer_id_resolver_snippet.txt';
import keycloak_jwt from './snippets/keycloak_jwt.txt';

import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-typescript'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import MY_eRecruitment_calculator_AD_1 from '../../public/img/static/erecruitment/MY_eRecruitment_calculator_AD_1.jpg';

import MY_eRecruitment_calculator_AD_1_real from '../../public/img/static/erecruitment/MY_eRecruitment_calculator_AD_1_real.png';

import MY_eRecruitment_calculator_AD_2 from '../../public/img/static/erecruitment/MY_eRecruitment_calculator_AD_2.jpg';

import MY_eRecruitment_calculator_AD_2_real from '../../public/img/static/erecruitment/MY_eRecruitment_calculator_AD_2_real.jpg'

import mockup_form_ux from '../../public/img/static/erecruitment/mockup-form-ux.jpg'

import mobile_forms_reducer_snippet from './snippets/mobile_forms_reducer_snippet.txt';

import mockup_form_section_d from '../../public/img/static/erecruitment/mockup-form-section-d.jpg';
import form_section_d from '../../public/img/static/erecruitment/form-section-d.png';

import mockup_form_section_a from '../../public/img/static/erecruitment/mockup-form-section-a.jpg';
import form_section_a from '../../public/img/static/erecruitment/form-section-a.png';

export default function ERecruitmentPage() {

  useEffect(() => {
    Prism.highlightAll()
  }, []);

  return <div className={sharedStyles.container}>

    <Head>
      <title>eRecruitment</title>
      <meta name="description" content="Digitalization of the entire recruitment process for various insurance distribution channels" />
    </Head>

    <main className="container mx-auto px-4">
      <div className="py-10">
        <BlurbTitle>eRecruitment</BlurbTitle>
        <BlurbSubtitle>Digitalization of the entire recruitment process for various insurance distribution channels</BlurbSubtitle>
      </div>

      <article className="prose dark:prose-invert max-w-none leading-normal">
        <h2>Technical decisions</h2>

        <p>
          eRecruitment authenticates against an ODS which contains the status and role of the users; these details are then loaded into the authentication principal and used for authorization via the <code>SecurityContextHolder</code>.
        </p>

        <p>
          The following requirements were must-haves:
        </p>
        <ol>
          <li>Inactive login (session or otherwise) timeout guarantee.</li>
          <li>Users can store temporary data associated with their login session.</li>
          <li>Users with certain roles would login via the mobile app and others via an Angular SPA, hence token-based authentication was required.</li>
        </ol>

        <p><strong>1.</strong> could be supported in a stateless manner with the <code>exp</code> claim in JWTs. However, users expecting their login session to be automatically lengthened transparently when they interact with the app is a common UX pattern. This would have required management of the token rotation lifecycle with refresh tokens, and certainly storage and eviction of invalidated tokens if the user logs out.</p>

        <p><strong>2.</strong> would have required reinventing the concept of a session store anyways; e.g. serializing and deserializing the user's session data to a key-value store like Redis where the key is their user ID.</p>

        <p><strong>spring-session</strong> supports these two use cases out of the box. The remaining challenge was to figure out if there were other means of passing the session ID besides the default <strong>JSESSIONID</strong> cookie.</p>

        <p>
          Extremely conveniently, the <code><a target="_blank" href="https://docs.spring.io/spring-session/docs/current/api/org/springframework/session/web/http/HttpSessionIdResolver.html" rel="noreferrer">HttpSessionIdResolver</a></code> interface allows us to customize the way that the session ID is resolved from any incoming request.

          In eRecruitment's case, it was as simple as:
        </p>

        <pre className="line-numbers">
          <code className="language-kotlin">
            {bearer_id_resolver_snippet}
          </code>
        </pre>

        <p>A login endpoint in a <strong>@RestController</strong> that returned the session ID in a DTO was then written.</p>

        <p>
          After migrating certain instances to KeyCloak, the aforementioned roles were imported as <a href="https://www.keycloak.org/docs/15.0/server_admin/#realm-roles">Realm Roles</a>.

          eRecruitment then extracts the roles and scopes from the KeyCloak-issued JWT as follows:
        </p>

        <pre className="line-numbers">
          <code className="language-kotlin">
            {keycloak_jwt}
          </code>
        </pre>

        <p>
          This allowed SpEL expressions like <code>@PreAuthorize("hasAnyRole('ADMIN', 'SUPERADMIN')")</code> to work seamlessly.
        </p>

        <p>
          Certain attributes (e.g. phone number and other identification) that would belong in a <strong>Profile</strong> entity were migrated to <a target="_blank" href="https://www.keycloak.org/docs/15.0/server_admin/#_user-attributes" rel="noreferrer">KeyCloak User Attributes</a> for other related applications to consume after granting them access to <a target="_blank" href="https://www.keycloak.org/docs-api/19.0.1/rest-api/" rel="noreferrer">KeyCloak's REST API</a> with service accounts. Having KeyCloak expose new endpoints to filter or query for those attributes was as simple as implementing a new <a target="_blank" href="https://www.keycloak.org/server/configuration-provider" rel="noreferrer">Service Provider Interface</a>, in particular <code>RealmProvider</code> for realm-wide attributes.
        </p>

        <p>Many of these attributes were often-read but very rarely written to, such as "Introducer of the agent" or "Agent code." Naturally, to avoid a round trip to KeyCloak every time the user accessed their profile details, these were also cached with an appropriate TTL using <a target="_blank" href="https://docs.spring.io/spring-data/redis/docs/current/api/org/springframework/data/redis/cache/RedisCacheManager.html" rel="noreferrer">Spring's RedisCacheManager</a>.</p>

        <p>After containerizing eRecruitment, <a target="_blank" href="https://doc.traefik.io/traefik/providers/docker/" rel="noreferrer">Traefik with the Docker provider</a> was used as a self-contained ingress solution.</p>

        <h2>UI implementation notes</h2>

        <p>
          After the mobile prototype was accepted, iterated upon the UI with the regional design team to strike a balance between usability, feasibility of implementation, and embodying their design philosophy.
        </p>

        {/* calculator design goes here */}
        <div className="flex flex-row flex-wrap gap-x-10 justify-center">

          {/* 1st  */}
          <div className="inline-flex flex-row gap-5 max-w-[600px]">

            <figure className="text-center">
              <a href={MY_eRecruitment_calculator_AD_1.src} target='_blank' rel="noreferrer">
                <Image src={MY_eRecruitment_calculator_AD_1} alt={""} />
              </a>
              {/* caption */}
              <figcaption>Iterated Mockup</figcaption>
            </figure>

            <figure className="text-center">
              <a href={MY_eRecruitment_calculator_AD_1_real.src} target='_blank' rel="noreferrer">
                <Image src={MY_eRecruitment_calculator_AD_1_real} alt={""} />
              </a>
              {/* caption */}
              <figcaption>Production (Android 11)</figcaption>
            </figure>
          </div>

          {/* 2nd  */}

          <div className="inline-flex flex-row gap-5 max-w-[600px]">

            <figure className="text-center">
              <a href={MY_eRecruitment_calculator_AD_2.src} target='_blank' rel="noreferrer">
                <Image src={MY_eRecruitment_calculator_AD_2} alt={""} />
              </a>
              <figcaption>Iterated Mockup</figcaption>
            </figure>

            <figure className="text-center">
              <a href={MY_eRecruitment_calculator_AD_2_real.src} target='_blank' rel="noreferrer">
                <Image src={MY_eRecruitment_calculator_AD_2_real} alt={""} />
              </a>
              <figcaption>Production</figcaption>
            </figure>
          </div>
        </div>

        <p>This screen, for instance, mostly involved using RN's <a target="_blank" href="https://reactnative.dev/docs/animated" rel="noreferrer">Animated</a> and <a target="_blank" href="https://reactnative.dev/docs/panresponder" rel="noreferrer">PanResponder</a> libraries for peak performance; in particular <code>Animated.Value.interpolate</code> to derive the position at which UI elements like the slider tooltip / handles or the graph should be (the graph changes in real time as the users interact with the sliders), and calculating the angle with respect to 0° and the center of the interactive donut in the <code>onPanResponderMove</code> callback.</p>

        {/* calc design ends here */}
        <div className="mx-auto max-w-[600px]">

          <figure className="text-center">
            <a href={mockup_form_ux.src} target='_blank' rel="noreferrer">
              <Image src={mockup_form_ux} alt={""} />
            </a>
            {/* caption */}
            <figcaption>Form sections UX mockup</figcaption>
          </figure>

        </div>

        <p>
          Several libraries like react-hook-form and Formik that could do validation and form state management were considered in light of these requirements. However, these factors had to be kept in mind:

          <ol>
            <li>The form was composed of 9 sections (A - I), with 60+ input fields. The validity of section I conditionally depended on the state of fields in A and B. The number of subsections in sections C and D depended on the state of fields in A.</li>

            <li>The user would be logged out client-side too after an inactivity period (e.g. if they were in the middle of a discussion with the candidate). However, immediately wiping their data would be bad UX; they should be able to continue where they left off if they logged in again with the same account.</li>

            <li>Images and files were to be temporarily stored within app-managed data on disk before the final submission due to this.</li>

            <li>Fine control over the management and purging of data at rest (e.g. the device was lost) due to data compliance policies was required.</li>

            <li>The user should be able to revert to the last-saved version of the form in case of accidental changes.</li>

            <li>Each section of the form was a different route in a <a href="https://reactnavigation.org/docs/tab-based-navigation/#jumping-between-tabs">TabNavigator</a>, i.e. they were independent in terms of the component hierarchy, and not all sections might even be mounted at any given moment.</li>
          </ol>
        </p>

        <p>
          Due to <strong>1</strong>, <strong>3</strong> and <strong>4</strong>, the form had to be manipulated in memory and only flushed to disk when the user tapped "Save" or the session went idle and the in-memory form was in a valid state.
        </p>

        <p><code>react-native-form</code> <a target="_blank" href="https://react-hook-form.com/faqs/#:~:text=React%20Hook%20Form%20is%20focusing,for%20the%20initial%20input%20value." rel="noreferrer">keeps form state in the (virtual) DOM</a>; i.e. prefers uncontrolled inputs for performance reasons. It also supports controlled components by means of a <code>Controller</code> HOC, which depends on a <strong>control</strong> variable returned from the <code>useForm</code> hook which initializes the form. Given that eRecruitment made extensive use of controlled inputs (e.g. dropdowns and keeping track of whether a form section was "dirty"), this would have required initializing and exposing the form in a globally accessible way via Context or Redux anyways.</p>

        <p>The effort to work around the abstractions of said libraries would have been significant, hence the decision was made to store the form data directly in Redux and write pure actions that created new forms, deleted forms, wrote to or erased a particular form field, etc. in a reducer.</p>

        <pre className="line-numbers">
          <code className="language-typescript">
            {mobile_forms_reducer_snippet}
          </code>
        </pre>

        <p>Realm DB was settled upon as the on-disk storage mechanism because it allows schemas to be defined and versioned as objects in TypeScript, which conveniently allowed types to be reused within the components themselves and when fetching submitted forms from the API. Migrations are also done in code in situations such as application start or a schema version bump.</p>

        {/* Forms UX goes here */}
        <div className="flex flex-row flex-wrap gap-x-10 justify-center">

          {/* 1st  */}
          <div className="inline-flex flex-row gap-5 max-w-[600px]">

            <figure className="text-center">
              <a href={mockup_form_section_d.src} target='_blank' rel="noreferrer">
                <Image src={mockup_form_section_d} alt={""} />
              </a>
              {/* caption */}
              <figcaption>Iterated Mockup</figcaption>
            </figure>

            <figure className="text-center">
              <a href={form_section_d.src} target='_blank' rel="noreferrer">
                <Image src={form_section_d} alt={""} />
              </a>
              {/* caption */}
              <figcaption>
                <p>Production</p>
                <p>The top-right circular icon in the <a target="_blank" href="https://reactnavigation.org/docs/bottom-tab-navigator#header-related-options" rel="noreferrer">header of the Material Top Tabs navigator</a> is a component <code>connect</code>ed to the Redux store. It is shown if the focused form has been modified but not saved and reverts the form to its previous state.</p>
              </figcaption>
            </figure>
          </div>

          {/* 2nd  */}

          <div className="inline-flex flex-row gap-5 max-w-[600px]">

            <figure className="text-center">
              <a href={mockup_form_section_a.src} target='_blank' rel="noreferrer">
                <Image src={mockup_form_section_a} alt={""} />
              </a>
              <figcaption>Iterated Mockup</figcaption>
            </figure>

            <figure className="text-center">
              <a href={form_section_a.src} target='_blank' rel="noreferrer">
                <Image src={form_section_a} alt={""} />
              </a>
              <figcaption>
                <p>Production</p>
              </figcaption>
            </figure>
          </div>
        </div>


      </article>
    </main>
  </div >
}


ERecruitmentPage.getLayout = (page: ReactNode) => {
  return <HeaderLayout>{page}</HeaderLayout>
}

