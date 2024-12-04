import React, { lazy } from 'react';

const Container = lazy(() => import("../../UiComponent/Container"));
const Breadcrumb = lazy(() => import("../Breadcrumb"));

import EventsSmallBannerWrapper from './style';

const Index = () => {
  return (
    <EventsSmallBannerWrapper>
      <Container>
        <Breadcrumb crumbs={[
          { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
          { pathname: '/events/', crumbLabel: 'Events and PR' },
        ]} />
        <div className="events-banner">
          <h1 className="text-h2">Engage, Innovate, Inspire.</h1>
          <p className="text-h5">
            At Qbatch, we believe in the power of connection and the magic that happens when passionate minds come together.
          </p>
        </div>
      </Container>
    </EventsSmallBannerWrapper>
  )
}

export default Index;
