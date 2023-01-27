import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

import Navigation from "../components/navigation/navigation";
import FooterNote from "../components/footer/customFooter";

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
    <div className="flex flex-col bg-gradient-to-l from-[#4B79A1] to-[#283E51] min-h-screen gap-3 items-center">
      <Navigation></Navigation>
      <Component {...pageProps} />
      <FooterNote></FooterNote>
    </div>
  )
  
};

export default MyApp;
