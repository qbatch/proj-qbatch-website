import React from 'react';
import Layout from "../../components/Layout/layout";
import EventsBanner from '../../components/PagesComponent/EventsComponents/EventsBanner';
import EventsForm from '../../components/PagesComponent/EventsComponents/EventsForm';
import SoftwareSolutions from '../../components/PagesComponent/EventsComponents/SoftwareSolutions';
import BusinessExperience from '../../components/PagesComponent/EventsComponents/BusinessExperiences';
import OurTeam from '../../components/PagesComponent/EventsComponents/OurTeam';
import WhatToExpect from '../../components/PagesComponent/EventsComponents/WhatToExpect';
import PreviousEvents from '../../components/PagesComponent/EventsComponents/PreviousEvents';
import CalendarSchedule from '../../components/PagesComponent/EventsComponents/CalendarSchedule';
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";

const WLevent = () => {
  const innerContentData = [
    { number: '300', title: 'Exhibitors' },
    { number: '150', title: 'Keynote Speakers' },
    { number: '150', title: 'Seminars' },
    { number: '50', title: 'Innovation Awards' },
    { number: '150', title: 'Product Launches' }
  ];
  return (
    <Layout>
      <EventsBanner
       backgroundImage="/events-banner-img.jpeg"
       eventName=" White Label Expo"
       eventLogo="/white-label-expo.svg"
       boothNumber=" WL1546"
       eventDate="February 27 to 28, 2024"
       eventVenue="Royal Victoria Dock, London"
      />
      <EventsForm
       paragraph="Qbatch is excited to exhibit at the most influential e-commerce marketplace show. Let’s catch up and explore the cutting-edge developments in selling, white label, retailer, and supplier markets. "
       dark
       eventName="White Label World Expo"
      />
      <SoftwareSolutions/>
      <BusinessExperience
        dark
        sectionBackground="/experience-bg-2.svg"
        backgroundIcons="/business-experience-bg-icons.svg"
      />
      <OurTeam/>
      <WhatToExpect
        paragraph="White Label World Expo is the ‘Digital Davos’ for online retailers, sellers, start-ups, and entrepreneurs looking to meet and greet with top-tier industry leaders. From product sourcing to online selling, this event offers an unparalleled opportunity, connecting a multitude of professionals with suppliers and manufacturers of white and private-label goods. Don't miss this chance to take your business to the next level!"
        innerContentData={innerContentData}
      />
      <PreviousEvents/>
      <CalendarSchedule
      eventName="White Label World Expo 2024"
        widgetUrl="https://calendly.com/qbatch/while-label-expo-2024"
      />
    </Layout>
  );
};

export const Head = () => {
  const whiteLabelExpo = Queries();
  const seoData = whiteLabelExpo.allStrapiWhiteLabelExpo.nodes[0]?.seo
  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
    />
  )
}

export default WLevent;