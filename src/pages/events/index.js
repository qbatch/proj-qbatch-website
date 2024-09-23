import React, { lazy } from 'react';

import Layout from "../../components/Layout/layout";

const EventsBanner = lazy(() => import("../../components/PagesComponent/EventsSmallBanner"));
const EventHighlight = lazy(() => import("../../components/PagesComponent/EventHighlight"));
const RecapEvents = lazy(() => import("../../components/PagesComponent/RecapEvents"));
const PreviousEvents = lazy(() => import("../../components/PagesComponent/PreviousEvents"));
const PressRelease = lazy(() => import("../../components/PagesComponent/PressRelease"));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));

const Index = () => {
  return (
    <Layout>
     <EventsBanner />
     <EventHighlight />
     <RecapEvents />
     <PreviousEvents />
     <PressRelease />
     <StartProject />
    </Layout>
  )
}

export default Index;
