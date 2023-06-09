import Head from 'next/head'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import HeaderLayout from '../components/HeaderLayout'
import SectionTitleComponent from '../components/SectionTitleComponent'
import SubtitleComponent from '../components/SubtitleComponent'
import TitleComponent from '../components/TitleComponent'

// import styles from '../styles/Home.module.css'
import sharedStyles from '../styles/Shared.module.css';

// import workds from "../data/work_descriptions.json";
import OneTokio from '../components/HomepageSections/OneTokio'
import ERecruitment from '../components/HomepageSections/ERecruitment'
import Formulary from '../components/HomepageSections/Formulary'
import KKPGEN from '../components/HomepageSections/KKPGEN'
import ChatWidget from '../components/HomepageSections/ChatWidget'
import PseudoAR from '../components/HomepageSections/PseudoAR'
import TokioAcademy from '../components/HomepageSections/TokioAcademy'
import DeployApp from '../components/HomepageSections/DeployApp'
import Radically from '../components/HomepageSections/Radically'
import FFDevTools from '../components/HomepageSections/FFDevTools'
import Nitroless from '../components/HomepageSections/Nitroless'

import devfest_headshot from '../public/img/misc/devfest_headshot.jpg';

/* export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
} */

export default function Home() {
  return (
    <div className={sharedStyles.container}>
      <Head>
        <title>Bryan Kok's Portfolio</title>
        <meta name="description" content="Software engineer passionate about modern microservice-oriented backend technologies. Seeking opportunities to implement distributed, scalable, and maintainable systems." />
      </Head>

      {/* remove container */}
      <main className="xl:container mx-auto px-4">

        <div className="mt-20">

          <Image className="max-w-[250px] p-1.5 my-5 rounded-full ring-2 ring-gray-400 dark:ring-gray-200" src={devfest_headshot} alt="Bordered avatar" />


          <TitleComponent>Bryan Kok</TitleComponent>

          {/* <SubtitleComponent className="mt-5">Software developer who isn&apos;t afraid to work at <span className="font-semibold">all levels of the stack.</span></SubtitleComponent> */}

          <SubtitleComponent className="my-2">
            Software engineer passionate about modern microservice-oriented backend technologies with a thorough understanding of the nuances of frontend and mobile.
          </SubtitleComponent>

          <SubtitleComponent className="my-2">Seeking opportunities to implement distributed, scalable, and maintainable systems.</SubtitleComponent>


        </div>

        <SectionTitleComponent>
          <span className="relative">
            <span className="block absolute -inset-1 -skew-y-[4deg] bg-slate-800 dark:bg-slate-600 rounded-md" aria-hidden="true"></span>
            <span className="relative text-white">Professional Work</span>
          </span>
        </SectionTitleComponent>

        {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <OneTokio />
          <ERecruitment />
          <Formulary />
        </div> */}

        <div className='hidden lg:grid grid-cols-2 gap-10'>
          <div className='space-y-5'>
            <Formulary id="formu" />
            <KKPGEN id="kkpgen" />
            <OneTokio id="1tokio" />
            <TokioAcademy id="tacad" />
          </div>
          <div className='space-y-5'>
            <ERecruitment id="erec" />
            <ChatWidget id="chatwidget" />
            <PseudoAR id="pseudoar" />
          </div>
        </div>

        <div className='grid lg:hidden grid-cols-1 gap-10'>
          <ERecruitment id="erec" />
          <Formulary id="formu" />
          <KKPGEN id="kkpgen" />
          <OneTokio id="1tokio" />
          <TokioAcademy id="tacad" />
          <ChatWidget id="chatwidget" />
          <PseudoAR id="pseudoar" />
        </div>


        <SectionTitleComponent>
          <span className="relative">
            <span className="block absolute -inset-1 -skew-y-6 bg-teal-700 rounded-md" aria-hidden="true"></span>
            <span className="relative text-white">Personal Work</span>
          </span>
        </SectionTitleComponent>

        <div className='hidden lg:grid grid-cols-2 gap-10'>
          <div className='space-y-5'>
            <DeployApp id="deployapp" />
          </div>
          <div className='space-y-5'>
            <Radically id="radically" />
          </div>
        </div>

        <div className='grid lg:hidden grid-cols-1 gap-10'>
          <DeployApp id="deployapp" />
          <Radically id="radically" />
        </div>


        <SectionTitleComponent>
          <span className="relative">
            <span className="block absolute -inset-1 -skew-y-6 bg-indigo-700 rounded-md" aria-hidden="true"></span>
            <span className="relative text-white">Publications</span>
          </span>
        </SectionTitleComponent>

        <div>
          <div>
            <em><u><a target="_blank" href="https://github.com/project-spectra/test-app" rel="noreferrer">Online Community-based Design of Free and Open Source Software for Voice Training</a></u></em>: Proceedings of the ACM on Human-Computer Interaction, Vol. 4, CSCW '20
          </div>
        </div>

        <SectionTitleComponent>
          <span className="relative">
            <span className="block absolute -inset-1 -skew-y-6 bg-fuchsia-700 rounded-md" aria-hidden="true"></span>
            <span className="relative text-white">Open Source</span>
          </span>
        </SectionTitleComponent>

        <div className='hidden lg:grid grid-cols-2 gap-10'>
          <div className='space-y-5'>
            <FFDevTools id="devtools" />
          </div>
          <div className='space-y-5'>
            <Nitroless id="nitroless" />
          </div>
        </div>

        <div className='grid lg:hidden grid-cols-1 gap-10'>
          <FFDevTools id="devtools" />
          <Nitroless id="nitroless" />
        </div>

      </main>

      {/* <footer className={styles.footer}> */}
      {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      {/* </footer> */}
    </div>
  )
}

// Home.getStaticProps = async () => {
//   return {
//     props: {
//       work_descriptions: works,
//     },
//   }
// }

Home.getLayout = (page: ReactNode) => {
  return <HeaderLayout>{page}</HeaderLayout>
}