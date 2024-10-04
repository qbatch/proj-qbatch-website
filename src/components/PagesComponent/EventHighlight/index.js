import React, { lazy } from 'react';
import { Col, Row } from 'react-bootstrap';

const Container = lazy(() => import("../../UiComponent/Container"));

import EventHighlightBanner from './style';

const Index = () => {
  return (
    <EventHighlightBanner>
      <Container>
        <h2 className="event-heading">Event Highlight</h2>
        <Row className='events-row'>
          <Col xl={7} className='p-lg-12 p-0'>
            <img className="event-image" src='/event-highlight-img.png' title="event" loading="lazy" alt='event' />
          </Col>
          <Col xl={5}>
            <div className='event-wrapper'>
              <div className="blog-badge">
                Event Highlight
              </div>
              <div className="event-title">
                <h2 className="text-h3">Prosper Show 2024</h2>
                <div className="event-desc">
                  <p>Join us for a day of thought-provoking discussions, cutting-edge tech demos, and networking opportunities with top industry experts.</p>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between flex-wrap event-date'>
                <div className='d-flex align-items-center gap-sm-3 gap-2'>
                  <img src='/calendar_month.svg' alt='calender' title='calendar' loading='lazy' />
                  <span>February 27 to 28 2024</span>
                </div>
                <div className='d-flex align-items-center gap-sm-3 gap-2'>
                  <img src='/icon-location.svg' alt='location' title='location' loading='lazy' />
                  <span>Royal Victoria Dock, London</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </EventHighlightBanner>
  )
}

export default Index;
