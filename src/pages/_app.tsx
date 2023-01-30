import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

import Navigation from "../components/navigation/navigation";
import FooterNote from "../components/footer/customFooter";
import Head from "next/head";


const MyApp: AppType = ({ Component, pageProps }) => {
  return(
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-[#4B79A1] to-[#283E51] gap-5 items-center">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name='theme-color' content='#4B79A1' media="(prefers-color-scheme: light)"></meta>
        <meta name='theme-color' content='#283E51' media="(prefers-color-scheme: dark)"></meta>
      </Head>
      <Navigation></Navigation>
     <Component {...pageProps} />
     <FooterNote></FooterNote>
    </div>
  )
  
};

export default MyApp;
