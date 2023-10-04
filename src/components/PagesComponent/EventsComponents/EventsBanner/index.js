import React from 'react';
import Container from '../../../UiComponent/Container';

import EventsBannerWrapper from './style';
import ArrowImg from "../../../../../static/event-left-arrows.svg"
import BoothIcon from "../../../../../static/booth-icon.svg"
import EventIcon from "../../../../../static/event-calendar.svg"
import LocationIcon from "../../../../../static/event-location.svg"

const EventsBanner = ({ backgroundImage, eventName, eventLogo, boothNumber, eventDate, eventVenue }) => {
  return (
    <EventsBannerWrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
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
            <img className='arrow-img' src={ArrowImg}/>
          </div>
        </h1>
        <div className='event-info'>
          <div className='event-inner'>
            <img src={BoothIcon} alt='booth' className='event-icon'/>
            <span className='event-inner-text'>Booth NO. {boothNumber}</span>
          </div>
          <div className='event-inner'>
            <img src={EventIcon} alt='booth' className='event-icon'/>
            <span className='event-inner-text'>{eventDate}</span>
          </div>
          <div className='event-inner'>
            <img src={LocationIcon} alt='booth' className='event-icon'/>
            <span className='event-inner-text'>{eventVenue}</span>
          </div>
        </div>
      </Container>
    </EventsBannerWrapper>
  );
};

export default EventsBanner;