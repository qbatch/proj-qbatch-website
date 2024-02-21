import React from 'react';
import { navigate } from 'gatsby'
import EventsBannerWrapper from './style';
import ArrowRight from '../../../assets/images/icons/right-icon-button.svg'
const index = ({eventLogo1, eventName1, eventBoothNo1, eventDate1, eventLogo2, eventName2, eventBoothNo2, eventDate2}) => {
  return (
    <EventsBannerWrapper>
      <div className='box-left box'>
        <img src='/uk-flag.svg' />
        <div className='box-inner'>
          <div className='event-name'>
            <img src={eventLogo1} alt='event-logo'/>
            <h2 className='text-h3 mb-0'>{eventName1}</h2>
          </div>
          <div className='details'>
            <p className='date'>{eventDate1}</p>
            <p className='booth'>Booth No. {eventBoothNo1}</p>
          </div>
        </div>

        <button className='arrow-button' onClick={() => navigate(`/events/white-label-expo`)}>
          <ArrowRight />
        </button>
      </div>
      <div className='center-box'>
        <span>We are Exhibiting at</span>
      </div>
      <div className='box-right box'>
      <div className='box-inner'>
          <div className='event-name'>
            <img src={eventLogo2} alt='event-logo'/>
            <h2 className='text-h3 mb-0'>{eventName2}</h2>
          </div>
          <div className='details'>
            <p className='date'>{eventDate2}</p>
            <p className='booth'>Booth No. {eventBoothNo2}</p>
          </div>
        </div>

        <button className='arrow-button' onClick={() => navigate(`/events/white-label-expo`)}>
          <ArrowRight />
        </button>

        <img src='/us-flag.svg' />
      </div>
    </EventsBannerWrapper>
  );
};

export default index;