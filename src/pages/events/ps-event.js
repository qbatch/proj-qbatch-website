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
      <EventsForm/>
      <SoftwareSolutions/>
      <BusinessExperience/>
      <OurTeam/>
      <WhatToExpect/>
      <PreviousEvents/>
      <CalendarSchedule/>
    </Layout>
  );
};

export default WLevent;