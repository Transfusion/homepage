import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { ReactNode } from 'react'

import { SettingsContextProvider } from "../contexts/SettingsContextProvider";
import { NextPage } from 'next';

// https://dev.to/ofilipowicz/next-js-per-page-layouts-and-typescript-lh5
type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? defaultGetLayout;

  return <SettingsContextProvider>
    {getLayout(<Component {...pageProps} />)}
  </SettingsContextProvider>
}
export default MyApp
