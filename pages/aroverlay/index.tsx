import Head from "next/head";
import Image from 'next/image';
import BlurbSubtitle from "../../components/BlurbSubtitle";
import BlurbTitle from "../../components/BlurbTitle";
import HeaderLayout from "../../components/HeaderLayout";
import { ReactNode, useEffect } from "react";

import sharedStyles from '../../styles/Shared.module.css';

import algo_snippet from './snippets/algo.txt';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-swift'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import ar_perceptual_viewport from '../../public/img/static/pseudo-ar/ar_perceptual_viewport.jpg';

import ar_viewport_projection from '../../public/img/static/pseudo-ar/ar_viewport_projection.jpg';

export default function AROverlayPage() {

  useEffect(() => {
    Prism.highlightAll()
  }, []);

  return <div className={sharedStyles.container}>

    <Head>
      <title>AR Overlay</title>
      <meta name="description" content="A simple AR experience for a retail voucher platform" />
    </Head>

    <main className="container mx-auto px-4">
      <div className="py-10">
        <BlurbTitle>AR Overlay</BlurbTitle>
        <BlurbSubtitle>A simple AR experience for a retail voucher platform</BlurbSubtitle>
      </div>

      <article className="prose dark:prose-invert max-w-none leading-normal">
        <h2>The Algorithm</h2>

        <div className="mx-auto max-w-[350px]">
          <a href={ar_perceptual_viewport.src} target='_blank' rel="noreferrer">
            <Image src={ar_perceptual_viewport} alt="Illustration of the perceptual viewport that the mobile device sees in an AR application" />
          </a>
        </div>

        <div className="mx-auto max-w-[400px]">
          <a href={ar_viewport_projection.src} target='_blank' rel="noreferrer">
            <Image src={ar_viewport_projection} alt="Illustration of how the butterfly sprite is placed within the perceptual viewport" />
          </a>
        </div>

        <p>The <code>(roll, yaw)</code> tuple is arbitrarily designated as the upper left corner of the perceptual viewport, which in turn is defined as &quot;the slice&quot; of the 360-degree world that the camera sees in AR space.</p>

        <pre className="line-numbers">
          <code className="language-swift">
            {algo_snippet}
          </code>
        </pre>


      </article>
    </main>
  </div>
}


AROverlayPage.getLayout = (page: ReactNode) => {
  return <HeaderLayout>{page}</HeaderLayout>
}