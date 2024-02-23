import React from 'react';
import CalendarScheduleWrapper from './style';
import { InlineWidget } from "react-calendly";
import { Col, Row } from 'react-bootstrap';
import Container from '../../../UiComponent/Container';
import SocialIcons from "../../../UiComponent/SocialIcons";

const CalendarSchedule = () => {
  const socialLinks = [
    {
      img: '/facebook',
      to: 'https://www.facebook.com/qbatch/',
    },
    {
      img: '/linkedin',
      to: 'https://www.linkedin.com/company/qbatch/',
    },
    {
      img: '/twitter',
      to: 'https://twitter.com/qbatchofficial',
    },
    {
      img: '/instagram',
      to: 'https://www.instagram.com/qbatch/',
    },
  ]
  return (
    <CalendarScheduleWrapper id='event-form'>
      <Container>
      <div className='custom-container'>
        <div className='calendar-schedule-inner'>
          <Row className='justify-content-center w-100 g-0'>
            <Col lg={12}>
              <div className='inner-left'>
                <h2 className='heading text-h2'>Meet to innovate!</h2>
                <p className='paragraph'>We’re excited to learn, build, and broaden our horizons at the<br/> <span>White Label Expo 2024</span>, are you? </p>
                <p className='paragraph-small'>Follow us on social media for live event updates</p>
                <div className='m-auto socials'>
                <SocialIcons socialIcons={socialLinks} />
                </div>
              </div>
          </Col>
          <Col lg={12}>
            <div className='calendly-container'>
              <InlineWidget
                  url="https://calendly.com/qbatch/prosper-show-2024?month=2024-03"
                  styles={{
                    height: "100%",
                    width: "100%",
                    marginLeft: "0",
                    paddingRight: "0",
                  }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "008989",
                    justifyContent: "end",
                  }}
                />
            </div>
          </Col>
          </Row>
        </div>
      </div>
      </Container>
    </CalendarScheduleWrapper>
  );
};

export default CalendarSchedule;