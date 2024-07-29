import React, { lazy } from "react";
import SEO from "../components/Seo";
import { Queries } from '../constants/queries'
import {
  hireDeveloper,
} from '../constants'
const Layout = lazy(() => import( "../components/Layout/layout"));
const Banner = lazy(() => import( "../components/PagesComponent/PageBanner"));
const RemoteDeveloper = lazy(() => import( "../components/PagesComponent/RemoteDeveloper"));
const HiringHassle = lazy(() => import( "../components/PagesComponent/HiringHassle"));
const PerfectDev = lazy(() => import( "../components/PagesComponent/PerfectDev"));
const SoftwareDevelopers = lazy(() => import( "../components/PagesComponent/SoftwareDevelopers"));
const ReasonToHire = lazy(() => import( "../components/PagesComponent/ReasonToHire"));
const FourStepsProcess = lazy(() => import( "../components/PagesComponent/FourStepsProcess"));
const AffordableHiring = lazy(() => import( "../components/PagesComponent/AffordableHiring"));
const HireTrustedDevelopers = lazy(() => import( "../components/PagesComponent/HireTrustedDevelopers"));
const ShareYourRequirements = lazy(() => import( "../components/PagesComponent/ShareYourRequirements"));
const FaqSection = lazy(() => import( '../components/PagesComponent/Faq'));
const StartProject = lazy(() => import( "../components/PagesComponent/StartProject"));
const Index = () => {
  return (
      <Layout>
        <Banner
          subheading="Hire Dedicated Developers"
          heading="Hire Deeply Vetted, Developers In 48 Hours"
          paragraph="Leverage our tried-and-tested developers with command over 200+ technologies and 300+ successful product launches. We mitigate spill time and stay accountable for every detail and deadline."
          buttonText="Start 1-Week Trail"
          wrapperClass="hire-developer-banner"
          col1lg={12}
          className="d-flex align-items-center justify-content-start"
          blogInner="/hire-developer-banner.png"
          customCrumbs={[
            { pathname: '/hire-developers/', crumbLabel: 'Hire Developers', crumbSeparator: '>' },
          ]}
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
export const Head = () => {
  const hireDeveloperData = Queries()
  const seoData = hireDeveloperData.allStrapiHireDeveloper.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
      image={seoData.metaimage[0].localFile?.url}
    />
  )
}

export default Index;