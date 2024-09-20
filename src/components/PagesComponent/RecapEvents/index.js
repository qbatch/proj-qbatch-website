import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import { recapEventsData } from '../../../constants';

import { HelpWrapper, Card } from './style';

const HelpingCard = ({ img, title, caption, date, location }) => {
  return (
    <Card>
      <img src={img} className='event-img' alt={title} title={title} loading='lazy' width='100%' height='100%' />
      <div className="title-box">
        <h3 className="text-h5">{title}</h3>
        <p>{caption}</p>
        <div className='d-flex align-items-center justify-content-between event-date'>
          <div className='d-flex align-items-center gap-2'>
            <img src='/calendar_month.svg' alt='calender' title='calendar' loading='lazy' />
            <span>{date}</span>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <img src='/icon-location.svg' alt='location' title='location' loading='lazy' />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
const Index = () => {
  return (
    <HelpWrapper>
      <Container>
        <h2 className="text-h2 color-primary">Recap of Events</h2>
        <Row>
          {recapEventsData.map((card, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <HelpingCard img={card.img} title={card.title} caption={card.caption} date={card.date} location={card.location} />
            </Col>
          ))}
        </Row>
      </Container>
    </HelpWrapper>
  );
};

export default Index;
