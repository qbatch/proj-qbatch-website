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
import EventsBannerImg from "../../../static/events-banner-img.jpeg"
import EventImg from "../../../static/prosper-show-logo.svg"
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
       backgroundImage={EventsBannerImg}
       eventName="Prosper Show"
       eventLogo={EventImg}
       boothNumber=" WL1546"
       eventDate="February 27 to 28, 2024"
       eventVenue="Royal Victoria Dock, London"
      />
      <EventsForm 
        paragraph="Qbatch is exhibiting at the world’s biggest marketplace seller event. We’re excited to meet with top-tier sellers and various stakeholders to discuss resilient business solutions for a brighter future."
      />
      <SoftwareSolutions/>
      <BusinessExperience
      dark
        sectionBackground="/experience-bg-2.svg"
      />
      <OurTeam/>
      <WhatToExpect
        paragraph="Prosper Show is a unique networking and educational platform for established marketplace sellers focused on maximizing profits, outdoing competition, and increasing brand footprint. Team Qbatch looks forward to meeting you there — don't miss this chance to take your business to the next level!"
        innerContentData={innerContentData}
      />
      <PreviousEvents/>
      <CalendarSchedule/>
    </Layout>
  );
};

export default WLevent;