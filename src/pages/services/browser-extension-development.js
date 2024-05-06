import React from "react";
import { Script } from 'gatsby'
import {replaceUnderscoreWithAt} from '../../constants/Utils'
import SEO from "../../components/Seo";
import { Queries } from '../../constants/queries'
import Layout from "../../components/Layout/layout";
import StartProject from "../../components/PagesComponent/StartProject";
import ExtensionDevInfo from "../../components/PagesComponent/ExtensionDevInfo"
import Banner from "../../components/PagesComponent/PageBanner";
import Achievements from '../../components/PagesComponent/Achievements3';
import ExtensionInnerBanner from '../../components/PagesComponent/ExtensionInnerBanner';
import ExperienceDriven from "../../components/PagesComponent/ExperienceDriven";
import InnerBanner from '../../components/PagesComponent/InnerBanner';
import ProcessBehind from "../../components/PagesComponent/ProcessBehind";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import FaqSection from "../../components/PagesComponent/Faq";
import Slider from '../../components/UiComponent/Slider'
import Languages from "../../components/PagesComponent/LanguagesAndFrameworks";
import ExtensionTypes from '../../components/PagesComponent/ExtensionTypes'
import { extensionSliderItems, extensionFaq } from "../../constants";
import BannerImage from "../../../static/extension-banner.svg";

const BrowserExtension = () => {
  return (
    <Layout>
      <Banner
        subheading="Browser Extension Development"
        heading="Building Custom Extensions for Every Browser"
        paragraph={
          <>
            Making the <a href="#">“I wish this site had that feature”</a> wish come true with our highly customizable and fast-performing browser extensions, plug-ins, toolbars, and add-ons.
          </>
        }
        buttonText="Let’s Get Started"
        imgSrc={BannerImage}
        col1lg={7}
        className="d-flex align-items-center"
        wrapperClass="extension-dev-banner"
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/extension-development/', crumbLabel: 'Browser Extension Development' },
        ]}
      />
      <ExtensionDevInfo />
      <ExtensionInnerBanner
        heading="So, why invest in a browser extension?"
        paragraph="Businesses will continue to use browsers as a critical part of their everyday work. Thus, creating safer, simpler, and cost-effective user-browser interactions without any cybersecurity threats is crucial."
        headingMaxWidth="900px"
        headingSize="ms-0"
        wrapperClass="text-left"
        isButton={true}
        btnText="Get Free Consultation"
        btnSpacingTop={72}
        btnAlign="left"
      />
      <Achievements mainHeading="Achievements Through The Years" innerPage page="contact" />
      <Slider
        heading="Browser Extension Development Services"
        data={extensionSliderItems}
        width="390px"
        align='center'
        className='extension-dev-slider'
        btnText="Let’s Get Started"
        btnClass="m-auto mt-5"
      />
      <ProcessBehind />
      <ExtensionTypes />
      <InnerBanner
        heading="Build On-Demand Extensions"
        caption="Didn’t find your type? Share your idea and we’ll build the right fit for your enterprise."
        headingMaxWidth="900px"
        headingSize="ms-0"
        wrapperClass="text-left"
        className="extension-dev-inner-banner"
        isButton={true}
        btnText="Schedule a Call"
        btnSpacingTop={72}
        btnAlign="left"
      />

      <ProvenWorkExperience heading="Our Featured Projects in Chrome Browser Extensions Development" headerClass="text-center w-100" btnClass="d-none" />
      <InnerBanner
        heading="Customize your user-browsing experiences with our powerful browser extensions"
        headingMaxWidth="900px"
        headingSize="ms-0"
        wrapperClass="text-left"
        isButton={true}
        btnText="Launch Your Browser Extension"
        btnSpacingTop={72}
        btnAlign="left"
      />
      <Languages />
      <ExperienceDriven />
      <FaqSection faqQuestion={extensionFaq} />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
  const extensionDevData = Queries()
  const seoData = extensionDevData.allStrapiExtensionDevelopment.nodes[0]?.seo
  const schemaData = replaceUnderscoreWithAt(seoData?.structuredData)

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0].localFile.url}
      pathname={`/services${seoData.slug}`}
    >
      {schemaData && <Script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>}
    </SEO>
  )
}

export default BrowserExtension;
