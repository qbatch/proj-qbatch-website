import React from 'react';
import Container from '../../../UiComponent/Container';

import EventsBannerWrapper from './style';

import Button from '../../../UiComponent/HomeButton/index'

const EventsBanner = ({ backgroundImage, eventName, eventLogo, boothNumber, eventDate, eventVenue, promoCode, valuedAt, couponLink }) => {
  return (
    <EventsBannerWrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <div className='d-flex justify-content-between align-items-center py-5 flex-wrap'>
          <h1 className='banner-heading'>
            <span>Join Qbatch at </span> 
            <div className='banner-heading-wrapper'>
              <span className='event-name'>
                <img className='event-img' src={eventLogo}/>
                <span>
                  {eventName} 
                  <span className='event-year'>2024</span>
                </span>
              </span>
              <img className='arrow-img' src='/event-left-arrows.svg'/>
            </div>
          </h1>
          {promoCode && (
            <div className='coupon-wrapper ms-auto'>
              <h3 className='heading'>Use Promo Code <span className='promo-code'>{promoCode}</span> for 
                <span> a <span className='highlighted'>FREE</span> Attendee Expo Hall Only Pass
                {valuedAt && <span className='highlighted d-block'>(valued at {valuedAt})</span>}</span>
              </h3>
              <a href={couponLink}>
              <Button text="Register Now" />
              </a>
            </div>
          )}
        </div>
        <div className='event-info'>
          <div className='event-inner'>
            <img src='/booth-icon.svg' alt='booth' className='event-icon'/>
            <span className='event-inner-text'>Booth NO. {boothNumber}</span>
          </div>
          <div className='event-inner'>
            <img src='/event-calendar.svg' alt='booth' className='event-icon'/>
            <span className='event-inner-text'>{eventDate}</span>
          </div>
          <div className='event-inner'>
            <img src='/event-location.svg' alt='booth' className='event-icon'/>
            <span className='event-inner-text'>{eventVenue}</span>
          </div>
        </div>
      </Container>
    </EventsBannerWrapper>
  );
};

export default EventsBanner;
