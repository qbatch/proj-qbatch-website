import React, { lazy } from 'react'
import Layout from '../../components/Layout/layout'
import { ImagineTravelAppData, ImagineTravelAppData2, SimplifyYourTravelData, TravelLanguagesData, TravelSliderData, TravelSoftwareDevelopmentFaq, TravelSolutionsData } from '../../constants'
import SEO from '../../components/Seo'
import { Queries } from '../../constants/queries'

const CtoBanner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const ImagineRetailExperience = lazy(() => import('../../components/PagesComponent/ImagineRetailExperience'));
const HospitalityAndTravelBusinesses = lazy(() => import('../../components/PagesComponent/HospitalityAndTravelBusinesses'));
const TravelAppSolutionsForYourPurposes = lazy(() => import('../../components/PagesComponent/TravelAppSolutionsForYourPurposes'));
const TheTravelLandscape = lazy(() => import('../../components/PagesComponent/TheTravelLandscape'));
const InnovativeRetailSolutions = lazy(() => import('../../components/PagesComponent/InnovativeRetailSolutions'));
const TravelApplications = lazy(() => import('../../components/PagesComponent/TravelApplications'));
const FeelingLikeYouAreInItAlone = lazy(() => import('../../components/PagesComponent/FeelingLikeYouAreInItAlone'));
const GenericTravelApps = lazy(() => import('../../components/PagesComponent/GenericTravelApps'));
const LanguagesAndFrameworksNew = lazy(() => import('../../components/PagesComponent/LanguagesAndFrameworksComponent'));
const LookingToProvide = lazy(() => import('../../components/PagesComponent/LookingToprovide'));
const WhyTrustQbatch = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'));
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'));
const StartProject = lazy(() => import('../../components/PagesComponent/StartProject'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const StartYourHealthTech = lazy(() => import('../../components/PagesComponent/StartYourHealthTech'));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'));

const TravelAppDevelopment = () => {

  return (
    <Layout>
      <CtoBanner
        subheading="Travel App Development"
        heading="Let’s Create Epic Travel Experiences that Fly!"
        paragraph="Dull, non-value-adding travel experiences may drive your guests to competitors. We develop and design contemporary travel and hospitality apps that drive bookings and build guest loyalty. Get a free quote today and transform travel!"
        buttonText="Discuss Your Project"
        wrapperClass="hire-developer-banner"
        col1lg={7}
        className="d-flex justify-between"
        imgSrc="/travel-page-bg.svg"
        gridClass="justify-content-between w-100 align-items-center"
      customCrumbs={[
        { crumbSeparator: '>', pathname: '/industries/', crumbLabel: 'Industries',  },
        {pathname: '/industries/travel-app-development', crumbLabel: 'Travel App Development', crumbSeparator: '>' },
      ]}
      />
      <ImagineRetailExperience button text={null} travelApp heading="Travel and Tours Industry may have Issues, but we’ve got Solutions" ImagineRetailExperienceData={ImagineTravelAppData} />
      <HospitalityAndTravelBusinesses />
      <TravelAppSolutionsForYourPurposes />
      <TheTravelLandscape />
      <Slider
        data={TravelSliderData}
        heading="Explore Our Travel and Transport App Development Solutions"
        paragraph=""
        seconedHeading=""
        width="300px"
        height="200px"
        className="retail-slider-wrapper"
        btnClass="custom-btn"
        dividerClass="custom-divider"
        maxWidth="100%"
      />
      <InnovativeRetailSolutions heading="Treat your guests better with our innovative hospitality and tour solutions. Set the benchmark!" InnovativeRetailSolutionsData={TravelSolutionsData} />
      <TravelApplications />
      <StartYourHealthTech className="travel-your-travel-data" text="Let us guide you!" heading="Unsure about what features to add in your future travel app?" StartYourHealthTechData={SimplifyYourTravelData} />
      <FeelingLikeYouAreInItAlone className="dont-just-rebuild" img="/Don't-just-rebuild.svg" heading="Don't just rebuild, reimagine your travel business!" text="Leverage chatbots, AI, and more to create a travel experience that delights guests and cuts costs. We'll help you chart your course." buttonText="Hire your travel app developers" />
      <GenericTravelApps />
      <ImagineRetailExperience text="We integrate AI, Big Data, and AR to craft unforgettable travel journeys." heading="Building tech-powered travel experiences" ImagineRetailExperienceData={ImagineTravelAppData2} />
      <LanguagesAndFrameworksNew
        heading="Travel and Hospitality App Integrations We Support"
        paragraph=""
        languagesData={TravelLanguagesData}
        paragraphMaxWidth="500px"
        className="travel-app-stack"
        showBtn={true}
        buttonText="Start Your Project"
        onButtonClick={() => console.log("Button Clicked!")}
      />
      <LookingToProvide />
      <WhyTrustQbatch />
      <SuccessStories className="travel-app-development-wrapper" heading="Success Stories from Our Travel and Tour Industry Portfolio" />
      <CollaborationNew />
      <FaqSection className="health-care-faq" faqQuestion={TravelSoftwareDevelopmentFaq} />
      <FeelingLikeYouAreInItAlone className="dont-just-rebuild" img="/tired-of.svg" heading="Tired of one-size-fits-all travel experiences?" text="We build custom travel & hospitality apps that ignite wanderlust and drive bookings." buttonText="Talk to our experts today!" />
      <StartProject />
    </Layout>
  )
}
export const Head = () => {
  const RetailSoftwareDevelopment = Queries()
  const seoData = RetailSoftwareDevelopment.allStrapiTravelAppDevelopment.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0].localFile?.url}
      pathname={seoData.slug}
    />
  )
}

export default TravelAppDevelopment
