import Head from "next/head";
import BlurbSubtitle from "../../components/BlurbSubtitle";
import BlurbTitle from "../../components/BlurbTitle";
import HeaderLayout from "../../components/HeaderLayout";
import { ReactNode, useEffect } from "react";

import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-swift'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import sharedStyles from '../../styles/Shared.module.css';

import delta_sync_snippet from './snippets/delta-sync.txt';
import delta_sync_optimized_snippet from './snippets/delta-sync-optimized.txt';

import formulary_response_time_percentiles from "../../public/img/static/formulary/formulary-response-time-percentiles.jpg"

import formulary_android_mau from "../../public/img/static/formulary/formulary-android-mau.png"
import formulary_ios_mau from "../../public/img/static/formulary/formulary-ios-mau.png"


export default function FormularyPage() {

  useEffect(() => {
    Prism.highlightAll()
  }, []);

  return <div className={sharedStyles.container}>

    <Head>
      <title>PPUKM Drug Formulary</title>
      <meta name="description" content="Case study on the development of a comprehensive drug reference app" />
    </Head>

    <main className="container mx-auto px-4">
      <div className="py-10">
        <BlurbTitle>PPUKM Drug Formulary</BlurbTitle>
        <BlurbSubtitle>A comprehensive drug reference app developed with the needs of The Pharmacy Department of the National University Hospital of Malaysia's practicing staff in mind</BlurbSubtitle>
      </div>

      <article className="prose dark:prose-invert max-w-none leading-normal">
        <h2>Technical decisions</h2>
        <p>The choice to use PHP on traditional LAMP-stack shared hosting was primarily a cost-driven one; nevertheless, it proved to be more than adequate seeing as Formulary is a straightforward, read-heavy app with a read-write ratio in excess of <strong>2000:1</strong>.</p>

        <p>
          Initially, the delta-sync endpoint was implemented in code, approximately as follows;
        </p>

        <pre className="line-numbers">
          <code className="language-php">
            {delta_sync_snippet}
          </code>
        </pre>

        <p>The main bottleneck was doing</p>
        <pre className="line-numbers">
          <code className="language-php">
            {`foreach ($hashes as $hash_entry) {
  $drug = DrugCurrentVersion::whereDrugId($hash_entry['drug_id'])->take(1)->get();
  ...`}
          </code>
        </pre>
        <p>followed by the cloning of the returned entities.</p>

        <p>
          One straightforward optimization could have been to create a <code>HASH</code> index on the primary <code>id</code> key, or perhaps load the entire drugs table into memory at once. The ultimate solution was to offload this "diffing" process to MySQL for the following reasons:
        </p>

        <ul>
          <li>The MySQL server was higher-specced and would likely handle concurrency better than <code>php-fpm</code>.</li>
          <li>Our problem is easily expressed in terms of <code>JOIN</code>s; the code is perfectly concise despite manually written SQL queries.</li>
          <li>The entire drugs table wouldn't need to be loaded into PHP memory all at once.</li>
        </ul>


        <pre className="line-numbers">
          <code className="language-php">
            {delta_sync_optimized_snippet}
          </code>
        </pre>

        <h2>Metrics</h2>

        I conducted a load test using <strong>Gatling</strong> with the following parameters; <strong>20 concurrent users per second, over 30 seconds</strong>, with a 1 second pause between requests:

        <pre className="line-numbers">
          <code className="language-java">
            {`    ScenarioBuilder scn = scenario("RecordedSimulation")
      .exec(
        http("request_0")
          .post("/api/app/v1/drugs/syncState")
          .headers(headers_0)
          .body(RawFileBody("recordedsimulation/0000_request.json"))
      ).pause(1);

	  setUp(scn.injectOpen(constantUsersPerSec(20).during(30))).protocols(httpProtocol);`}
          </code>
        </pre>

        <p>A mean response time of <strong>562 ms</strong> was achieved, with each request body containing 1372 drug entity ID-hash pairs.</p>
        <pre>
          <code className="language-bash">
            {`================================================================================
---- Global Information --------------------------------------------------------
> request count                                        600 (OK=600    KO=0     )
> min response time                                    374 (OK=374    KO=-     )
> max response time                                   1465 (OK=1465   KO=-     )
> mean response time                                   562 (OK=562    KO=-     )
> std deviation                                        255 (OK=255    KO=-     )
> response time 50th percentile                        432 (OK=432    KO=-     )
> response time 75th percentile                        522 (OK=522    KO=-     )
> response time 95th percentile                       1107 (OK=1107   KO=-     )
> response time 99th percentile                       1227 (OK=1227   KO=-     )
> mean requests/sec                                  18.75 (OK=18.75  KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                           473 ( 79%)
> 800 ms <= t < 1200 ms                                114 ( 19%)
> t >= 1200 ms                                          13 (  2%)
> failed                                                 0 (  0%)
================================================================================
`}
          </code>
        </pre>

        <div className="overflow-x-auto">
          <div className="mx-auto w-[1024px]">
            <a href={formulary_response_time_percentiles.src} target='_blank'>
              <img src={formulary_response_time_percentiles.src} />
            </a>
          </div>
        </div>

        <p>The figure of <strong>5.5K MAU</strong> is arrived at by:</p>
        <ul>
          <li>
            <strong>~2.5K</strong> users are from the <strong>Statistics</strong> section of the Google Play Console, <strong>Monthly Active Users</strong>.

            {/* <div className="overflow-x-auto"> */}
            <div className="mx-auto max-w-[768px]">
              <a href={formulary_android_mau.src} target='_blank'>
                <img src={formulary_android_mau.src} />
              </a>
            </div>
            {/* </div> */}


          </li>
          <li>
            <strong>~1K</strong> of users, comprising 33% of the entire iOS userbase, opted in to share their usage information, which was taken from the <strong>Metrics</strong> section in Apple's App Store Connect, <strong>ACTIVE LAST 30 DAYS</strong>.

            <p>It was known beforehand that iOS, in particular iPad users, outnumber Android users among the target demographic, hence extrapolating to <strong>3K</strong> is a reasonable assumption.</p>

            {/* <div className="overflow-x-auto"> */}
            <div className="mx-auto max-w-[768px]">
              <a href={formulary_ios_mau.src} target='_blank'>
                <img src={formulary_ios_mau.src} />
              </a>
            </div>
            {/* </div> */}

          </li>
        </ul>
      </article>
    </main>
  </div>
}


FormularyPage.getLayout = (page: ReactNode) => {
  return <HeaderLayout>{page}</HeaderLayout>
}