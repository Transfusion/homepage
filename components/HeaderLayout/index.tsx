import { PropsWithChildren } from 'react';
import Navbar from '../Navbar';
export default function Layout(props: PropsWithChildren<{}>) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {/* <main> */}
      {children}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  )
}
