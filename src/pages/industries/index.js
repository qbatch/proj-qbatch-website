import React, { lazy } from 'react'
import Layout from '../../components/Layout/layout';
import CtoBanner from '../../components/PagesComponent/PageBanner';
import { FrequentlyAskedQuestionsIndustryFaq, industriesPageData } from '../../constants';
import UsersNowManageTheirFinances from '../../components/PagesComponent/UsersNowManageTheirFinances';
import SEO from '../../components/Seo';
import { Queries } from '../../constants/queries';
const Achievements = lazy(() => import('../../components/PagesComponent/Achievements'));
const DevelopmentServices = lazy(() => import('../../components/PagesComponent/DevelopmentServices'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const WhyTrustQbatch = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'));
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'));

const Industry = () => {
  return (
    <Layout>
       <CtoBanner
        heading="Empowering Industries with Expertise"
        paragraph="At Qbatch, we go beyond building solutions—we create revolutions. By challenging norms and disrupting industries, we redefine what's possible with technology. From tailored innovations to scalable impact, our expertise transforms bold ideas into industry-leading solutions."
        buttonText="Get Started Today"
        wrapperClass="hire-developer-banner"
        col1lg={7}
        className="d-flex justify-between"
        imgSrc="/industries-banner-image.svg"
        gridClass="justify-content-between w-100 align-items-center"
        customCrumbs={[
          {pathname: '/industries', crumbLabel: 'Industries', crumbSeparator: '>' },
        ]}
      />
        <Achievements mainHeading="Achievements Through The Years" innerPage page="contact" />
      <DevelopmentServices className="industry-page-cards" industryHeading servicesData={industriesPageData} />
      <UsersNowManageTheirFinances buttonText="Contact Us Today!" heading="Ready to Disrupt Your Industry? Let’s take your vision and turn it into a reality." />
      <SuccessStories heading="Proven Results That Redefine Success" text="Dive into the stories behind our success. Our case studies highlight how Qbatch transforms challenges into opportunities, delivering tailored solutions that drive measurable impact across industries." />
      <WhyTrustQbatch heading='Why trust Qbatch for your business-critical project?' />
      <CollaborationNew borderBottom />
      <FaqSection className="health-care-faq" faqQuestion={FrequentlyAskedQuestionsIndustryFaq} />
      <StartProject />
    </Layout>
  )
}

export const Head = () => {
  const saasDevData = Queries()
  const seoData = saasDevData?.allStrapiIndustry?.nodes[0]?.seo
  // const schemaData = saasDevData?.allStrapiHealthcare?.nodes[0]?.schema;
  // const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0]?.localFile?.url}
      pathname={`${seoData.slug}`}
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

export default Industry;
