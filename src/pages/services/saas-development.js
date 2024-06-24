import React from 'react';
import SeoComponent from "../../utils/seo"
import { Queries } from '../../constants/queries'
import Layout from '../../components/Layout/layout';
import Banner from "../../components/PagesComponent/PageBanner";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import SaasInnerBanner from '../../components/PagesComponent/ExtensionInnerBanner';
import OurSaasDev from '../../components/PagesComponent/ChoiceYourEnterprise'
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";
import SaasAppDev from '../../components/PagesComponent/SaasAppDev';
import GridData from '../../components/PagesComponent/GridData'
import TackleSaas from '../../components/PagesComponent/TackleSaas';
import Slider from '../../components/UiComponent/Slider';
import Languages from '../../components/PagesComponent/SaasLanguages';
import FullCycle from "../../components/PagesComponent/FullCicle";
import Collaboration from '../../components/PagesComponent/Collaboration'

import { OurSaasData, AdvanceSaasData, saasFaq, SaasSliderData, SaasProduct, SaasDevelop, SaaslanguagesData } from "../../constants";
import QuickResponse from '../../components/PagesComponent/QuickResponse';
import SaasArchitecture from '../../components/PagesComponent/SaasArchitecture';
import SaasDevProcess from '../../components/PagesComponent/SaasDevProcess';

const SaasDevelopment = () => {
  return (
    <Layout>
      <Banner
        subheading="SaaS App Development"
        subheadingColor={'#D2D9DC'}
        heading="Want to Build a SaaS App Hassle-Free?"
        paragraph={
          <span className='banner-paragraph'>
            SaaS businesses hustle to attract and retain customers, master technology, set fair prices, ensure high security, and outwork a busy market. The fix? We test your idea and build a fully functional and scalable SaaS product beyond market constraints.
          </span>
        }
        buttonText="Discuss Your Project"
        wrapperClass="saas-dev"
        className="inner-container"
        col1lg={7}
        col2lg={5}
        headingMaxWidth={'660px'}
        paragraphMaxWidth={'690px'}
        // imgSrc="/devops-banner-img.svg"
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/saas-development/', crumbLabel: 'Saas Development' },
        ]}
      />

      <SaasAppDev
        heading="Are you familiar with these SaaS App Development challenges?"
      />
      <TackleSaas />
      <ProvenWorkExperience
        headerClass="saas-dev-experience"
        exploreBtn
        heading="Explore our SaaS Portfolio"
        paragraph="Our firsthand experience in launching superior SaaS products has moved us beyond blind coding and toward holistic product ownership, ensuring excellence at every turn."
        paragraphWidth="1280px"
      />
      <OurSaasDev
        isBtn={true}
        btnText="Build Your SaaS Solution"
        className="our-saas"
        heading="Our SaaS Development Services"
        listData={OurSaasData}
      />
      <OurSaasDev
        lg={4}
        className="advance-saas-wrapper"
        heading="Advanced SaaS Development Capabilities "
        headingClass="text-start"
        listData={AdvanceSaasData}
      />
      <GridData
        enterprise data={SaasProduct}
        textAlign='text-center'
        margin="auto"
        maxWidth={977}
        heading='Features Your SaaS Product May Require'
        paragraph="Want to improve your SaaS with custom features? From MVPs to enterprise solutions, we use top-tier tools to create your envisioned features quickly. Here's what we can implement" />
        <QuickResponse/>
      <Slider
        heading="Streamlined Collaboration, Clear Results — With Qbatch"
        paragraph={
          <span>
            Our solutions not only expand clientele, increase profits, and reduce operational costs but also provide a competitive edge.
            <b> 100+ </b>
            growth-focused businesses have boosted revenue with our scalable SaaS solutions.
          </span>
        }
        data={SaasSliderData}
        align="center"
        className="saas-slider"
        width="334"
      />
      <SaasInnerBanner
        bannerImg="/saas-inner-banner-1.svg"
        heading="Looking to Develop a SaaS App with Ease?"
        paragraph="With Qbatch’s end-to-end SaaS development expertise, we launch an MVP in 1-2 months and iteratively into a comprehensive solution with major updates every 2-4 weeks."
        headingMaxWidth="811px"
        className="saas-inner-banner"
        headingSize="ms-0"
        wrapperClass="text-lg-start text-center extension-banner-inner"
        isButton={true}
        btnText="Get in touch with your SaaS experts"
        btnSpacingTop={32}
        btnAlign="left"
      />
      <SaasDevProcess/>
      <SaasArchitecture/>
      <FullCycle
        className="saas-app-development"
        heading="Types of SaaS Applications We Develop "
        paragraph="Our portfolio of 150+ projects includes solutions that successfully enable versatile interactions and valuable results on the B2C, B2B, B2CB2B, P2P, or corporate levels"
        data={SaasDevelop}
        sliceIndex={5}
      />
      <Collaboration />
      <SaasInnerBanner
        bannerImg="/why-trust-qbatch.svg"
        heading="Why Trust Qbatch for an Award-winning SaaS Product? "
        paragraph={
          <ul>
            <li>- Clean and crisp product design</li>
            <li>- Faster sprint releases</li>
            <li>- Competitive costs</li>
            <li>- Secure SaaS product development environment</li>
            <li>- 99% application availability</li>
            <li>- Accelerated time-to-market</li>
          </ul>
        }
        headingMaxWidth="811px"
        className="saas-inner-banner why-trust"
        headingSize="ms-0"
        wrapperClass="text-left extension-banner-inner"
        isButton={true}
        btnText="Let’s Get Started"
        btnSpacingTop={64}
        btnAlign="end"
      />
      <Languages languagesData={SaaslanguagesData} heading="Teck Stack and Frameworks for Your SaaS Product" showBtn={false}/>
      <FaqSection faqQuestion={saasFaq} />
      <SaasInnerBanner
        bannerImg="/hire-dedicated-saas-dev.svg"
        heading="Hire Dedicated SaaS Developers"
        paragraph="Achieve frictionless performance and delightful, platform-agnostic digital experiences for your customers with our industry-leading SaaS developers. "
        headingMaxWidth="811px"
        className="saas-inner-banner"
        headingSize="ms-0"
        wrapperClass="text-lg-start text-center extension-banner-inner"
        isButton={true}
        btnText="Get in touch with your SaaS experts"
        btnSpacingTop={32}
        btnAlign="left"
      />
      <StartProject
        heading="Get a free quote for your SaaS development project"
      />
    </Layout>
  );
};
export const Head = () => {
  const saasDevData = Queries()
  const seoData = saasDevData?.allStrapiSaasDev?.nodes[0]?.seo
  const schemaData = saasDevData?.allStrapiSaasDev?.nodes[0]?.schema;
  return (
    <SeoComponent seoData={seoData} schemaData={schemaData} />
  )
}

export default SaasDevelopment;