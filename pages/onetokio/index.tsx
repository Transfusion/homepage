import Head from "next/head";
import BlurbSubtitle from "../../components/BlurbSubtitle";
import BlurbTitle from "../../components/BlurbTitle";
import HeaderLayout from "../../components/HeaderLayout";
import { ReactNode } from "react";

import sharedStyles from '../../styles/Shared.module.css';

export default function OneTokioPage() {
  return <div className={sharedStyles.container}>

    <main className="container mx-auto px-4">

      <BlurbTitle>OneTokio</BlurbTitle>
      <BlurbSubtitle>Mobile app for insurance policyholders</BlurbSubtitle>
    </main>
  </div>
}


OneTokioPage.getLayout = (page: ReactNode) => {
  return <HeaderLayout>{page}</HeaderLayout>
}