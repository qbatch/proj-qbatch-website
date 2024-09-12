import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from '../../UiComponent/Container';
import { HelpWrapper, Card } from './style';

const HelpingCard = ({ img, title, caption }) => {
  return (
    <Card>
      <img src={img} alt={title} title={title} loading='lazy' width='100%' height='100%' />
      <div className="title-box">
        <h3 className="text-h5">{title}</h3>
        <p>{caption}</p>
      </div>
    </Card>
  );
};
const WhatCanYouHelp = ({ helpingCardData, heading }) => {
  return (
    <HelpWrapper>
      <Container>
        <h2 className="text-h2 color-primary">{heading || 'What Can You Help Me With?'}</h2>
        <Row className="add-top-space">
          {helpingCardData.map((card, index) => (
            <Col style={{paddingInline:'10.5px'}} lg={4} md={6} sm={12} key={index}>
              <HelpingCard img={card.img} title={card.title} caption={card.caption} />
            </Col>
          ))}
        </Row>
      </Container>
    </HelpWrapper>
  );
};

export default WhatCanYouHelp;

