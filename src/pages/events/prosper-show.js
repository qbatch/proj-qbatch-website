import React from 'react';
import Layout from "../../components/Layout/layout";
import EventsBanner from '../../components/PagesComponent/EventsComponents/EventsBanner';
import EventsForm from '../../components/PagesComponent/EventsComponents/EventsForm';
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";
import SoftwareSolutions from '../../components/PagesComponent/EventsComponents/SoftwareSolutions';
import BusinessExperience from '../../components/PagesComponent/EventsComponents/BusinessExperiences';
import OurTeam from '../../components/PagesComponent/EventsComponents/OurTeam';
import WhatToExpect from '../../components/PagesComponent/EventsComponents/WhatToExpectBoxes';
import PreviousEvents from '../../components/PagesComponent/EventsComponents/PreviousEvents';
import CalendarSchedule from '../../components/PagesComponent/EventsComponents/CalendarSchedule';
import EventImg from "../../../static/prosper-show-logo.svg"
const WLevent = () => {
  const innerContentDataBox = [
    { heading: 'Connect with Fellow Sellers',
      paragraph: 'Learn from peers to grow your business, boost profits, and improve efficiency.' },
    { heading: 'Network with Solution Providers', 
      paragraph: 'Access 140+ industry experts to enhance your brand and scale your business.' },
    { heading: 'Know Secrets to Expand More',
      paragraph: 'Add media from different events, pictures mostly with events names and years showing on hover.' }
  ];
  return (
    <Layout>
      <EventsBanner
       backgroundImage='/prosper-event-banner-img.svg'
       eventName="Prosper Show"
       eventLogo={EventImg}
       boothNumber="814"
       eventDate="March 4 to 6, 2024"
       eventVenue="Mandalay Bay Las Vegas"
       promoCode="EXIV882491"
       valuedAt="$300"
       couponLink='https://registration.experientevent.com/ShowPSL241/?flow=attendee&MarketingCode=EXIV882491'
      />
      <EventsForm 
        paragraph="Qbatch is exhibiting at the world’s biggest marketplace seller event. We’re excited to meet with top-tier sellers and various stakeholders to discuss resilient business solutions for a brighter future."
        dark
        eventName="Prosper Show"
      />
      <SoftwareSolutions/>
      <BusinessExperience
        dark
        sectionBackground="/experience-bg-2.svg"
        backgroundIcons="/business-experience-bg-icons.svg"
      />
      <OurTeam/>
      <WhatToExpect
        paragraph="Prosper Show is a unique networking and educational platform for established marketplace sellers focused on maximizing profits, outdoing competition, and increasing brand footprint. Team Qbatch looks forward to meeting you there — don't miss this chance to take your business to the next level!"
        innerContentData={innerContentDataBox}
      />
      <PreviousEvents/>
      <CalendarSchedule
      eventName="Prosper Show 2024"
        widgetUrl="https://calendly.com/qbatch/prosper-show-2024?month=2024-03"
      />
    </Layout>
  );
};
export const Head = () => {
  const prosperShow = Queries();
  const seoData = prosperShow.allStrapiProsperShow.nodes[0]?.seo
  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={`/${seoData.slug}/`}
    />
  )
}

export default WLevent;