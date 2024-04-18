import React from "react";
import Layout from "../components/Layout/layout";
import Banner from "../components/PagesComponent/PageBanner";
import RemoteDeveloper from "../components/PagesComponent/RemoteDeveloper";
import HiringHassle from "../components/PagesComponent/HiringHassle";
import PerfectDev from "../components/PagesComponent/PerfectDev";
import SoftwareDevelopers from "../components/PagesComponent/SoftwareDevelopers";
import ReasonToHire from "../components/PagesComponent/ReasonToHire";
import FourStepsProcess from "../components/PagesComponent/FourStepsProcess";
import AffordableHiring from "../components/PagesComponent/AffordableHiring";
import HireTrustedDevelopers from "../components/PagesComponent/HireTrustedDevelopers";
import ShareYourRequirements from "../components/PagesComponent/ShareYourRequirements";
import FaqSection from '../components/PagesComponent/Faq'
import StartProject from "../components/PagesComponent/StartProject";
import {
  hireDeveloper,
} from '../constants'
const index = () => {
  return (
      <Layout>
        <Banner
          subheading="Dedicated Developers For Your Next Project"
          heading="Hire Deeply Vetted, Developers In 48 Hours"
          paragraph="Leverage our tried-and-tested developers with command over 200+ technologies and 300+ successful product launches. We mitigate spill time and stay accountable for every detail and deadline."
          buttonText="Start 1-Week Trail"
          wrapperClass="hire-developer-banner"
          col1lg={12}
          className="d-flex align-items-center justify-content-start"
          blogInner="/About-Us-02.svg"
        />
        <RemoteDeveloper />
        <HiringHassle />
        <PerfectDev />
        <SoftwareDevelopers />
        <ReasonToHire />
        <FourStepsProcess />
        <AffordableHiring />
        <HireTrustedDevelopers />
        <ShareYourRequirements />
        <FaqSection faqQuestion={hireDeveloper} />
        <StartProject />
      </Layout>
  );
};

export default index;
