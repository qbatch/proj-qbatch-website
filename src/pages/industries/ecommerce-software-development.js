import React, { lazy } from 'react';

import Layout from '../../components/Layout/layout';
import { ecommerceBusinessData, commerceService, ecommerceFeaatures, mobileAppFaq, ecommerceSolutions, ecomBenifits1, ecomBenifits2 } from '../../constants';
import OnDemandFeatures from '../../components/PagesComponent/OnDemandFeatures';
import EcommerceFuture from '../../components/PagesComponent/EcommerceFuture';
import EcommerceDevelopment from '../../components/PagesComponent/EcommerceDevelopment';
import Divider from "../../components/UiComponent/Divider";
import EcommerceTopTier from '../../components/PagesComponent/EcommerceTopTier';
import { Queries } from '../../constants/queries';
import SEO from '../../components/Seo';

const Banner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const RealEstateIndustry = lazy(() => import('../../components/PagesComponent/EdTechPotential'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const NextLevelInnovations = lazy(() => import('../../components/PagesComponent/DevOpsService'));
const ScaredToInvest = lazy(() => import('../../components/PagesComponent/FeelingLikeYouAreInItAlone'));
const PropertyBusiness = lazy(() => import('../../components/PagesComponent/InstitutionsBenefiting'));
const WhyTrustQbatch = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'));
const FaqSection = lazy(() => import("../../components/PagesComponent/Faq"));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));

export default function EcommerceDev() {
  return (
    <Layout>
      <Banner
        subheading="E-commerce Software Development"
        heading="Let’s Change Commerce Forever"
        paragraph="From the rise of artificial intelligence to a privacy-first world, and a surprising focus on boomer shoppers, the e-commerce industry deals with volatile trends. But turning these shifts into business opportunities is the real game-changer. "
        buttonText="Get Started Already!"
        wrapperClass="edu-software-banner"
        col1lg={8}
        col2lg={4}
        imgSrc="/edu-software-banner.svg"
        gridClass="justify-content-between w-100 align-items-center"
        customCrumbs={[
          { crumbSeparator: '>', pathname: '/industries/', crumbLabel: 'Industries', },
          { pathname: '/industries/ecommerce-software-development/', crumbLabel: 'E-commerce Software Development', crumbSeparator: '>' },
        ]}
      />
      <RealEstateIndustry
        heading='Is your e-commerce business failing to cultivate brand devotion and generate sales?'
        subHeading="Having an eCommerce website isn't enough. To stay ahead of the curve, businesses need eCommerce website development services that consider the latest challenges. "
        data={ecommerceBusinessData}
      />
      <EcommerceFuture />
      <Slider
        data={ecommerceSolutions}
        heading="Explore Our Full-Suite of E-commerce Solutions"
        paragraph="With 8+ years of expertise, our custom e-commerce software development company develops feature-rich, bespoke e-commerce business solutions that accelerate day-to-day processes into uncompromised customer experiences."
        width="300px"
        height="200px"
        className="realestate-slider-wrapper"
        dividerClass="real-estate-divider"
        maxWidth="100%"
      />
      <Divider />
      <NextLevelInnovations
        heading="E-commerce Services for your specific business needs"
        paragraph="100% focused on tangible business results, we create market-driven digital solutions, systems, and modules powered by APIs or custom integrations to enable permanent control over your e-commerce processes — driving highly addictive customer experiences."
        data={commerceService}
        className='innovations-wrapper'
      />
      <Divider />
      <EcommerceDevelopment />
      <PropertyBusiness
        heading='Will your company benefit from our E-commerce Development Services?'
        desc="Regardless of your business's scale or type, as long as you have an e-commerce platform idea, we can help. Still unsure? Take a look at some of the E-commerce market players we serve:"
        data1={ecomBenifits1}
        data2={ecomBenifits2}
        imgSrc='/e-commerce-benifits.svg'
        className='property-business'
      />
      <OnDemandFeatures
        heading="Upgrade your eCommerce Web Store with these essential features"
        featuresData={ecommerceFeaatures}
      />
      <ScaredToInvest
        heading="From Bricks to Clicks"
        text="Our e-commerce development experts are well-versed in the industry's leading tools needed to drive the transition with expertise and precision."
        buttonText='Schedule Free Growth Consultation'
        img='/bricks-to-click.svg'
        className='enabling-force'
      />
      <EcommerceTopTier/>
      <SuccessStories heading="Success Stories from our E-commerce Portfolio" />
      <WhyTrustQbatch heading='Why trust Qbatch for your business-critical E-com project?' />
      <CollaborationNew />
      <FaqSection faqQuestion={mobileAppFaq} />
      <StartProject />
    </Layout>
  )
}

export const Head = () => {
  const saasDevData = Queries()
  const seoData = saasDevData?.allStrapiEcommerceIndustry?.nodes[0]?.seo
  // const schemaData = saasDevData?.allStrapiEcommerceIndustry?.nodes[0]?.schema;
  // const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0]?.localFile?.url}
      pathname={`/industries${seoData.slug}`}
    >
      {/* {transformedObject
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </script>
        ))} */}
    </SEO>
  )
}