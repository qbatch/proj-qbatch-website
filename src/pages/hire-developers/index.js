import React from "react";
import Layout from "../../components/Layout/layout";
import Banner from "../../components/PagesComponent/PageBanner";
import AboutUs from "../../../static/About-Us-02.svg";
import { HireDeveloperStyleWrapper } from "./style";
import RemoteDeveloper from "./remote-developer";
import HiringHassle from "./hiring-hassle";
import PerfectDev from "./perfect-dev";
import SoftwareDevelopers from "./software-developers";
import ReasonToHire from "./reason-to-hire";
import FourStepsProcess from "./four-steps-process";
import AffordableHiring from "./affordable-hiring";
import HireTrustedDevelopers from "./Hire-Trusted-Developers";
import ShareYourRequirements from "./share-your-requirements";
import FaqSection from '../../components/PagesComponent/Faq'
import StartProject from "../../components/PagesComponent/StartProject";
import {
  hireDeveloper,
} from '../../constants'

const index = () => {
  return (
    <HireDeveloperStyleWrapper>
      <Layout>
        <Banner
          subheading="Dedicated Developers For Your Next Project"
          heading="Hire Deeply Vetted, Developers In 48 Hours"
          paragraph="Leverage our tried-and-tested developers with command over 200+ technologies and 300+ successful product launches. We mitigate spill time and stay accountable for every detail and deadline."
          buttonText="Start 1-Week Trail"
          wrapperClass="hire-developer-banner"
          col1lg={12}
          className="d-flex align-items-center justify-content-start"
          blogInner={AboutUs}
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
    </HireDeveloperStyleWrapper>
  );
};

export default index;
