import React from 'react';
import WhatToExpectWrapper from './style';
import Container from '../../../UiComponent/Container';

const WhatToExpect = () => {
  
  return (
    <WhatToExpectWrapper style={{backgroundImage: "url(/what-to-expect-bg.svg)"}}>
      <Container>
        <h2 className='heading'>What to expect?</h2>
        <p className='paragraph'>White Label World Expo is the ‘Digital Davos’ for online retailers, sellers, start-ups, and entrepreneurs looking to meet and greet with top-tier industry leaders. From product sourcing to online selling, this event offers an unparalleled opportunity, connecting a multitude of professionals with suppliers and manufacturers of white and private-label goods. Don't miss this chance to take your business to the next level!</p>
        <div className='inner-content'>
          <div className='inner-content-circle'>
            <h3>
              <span className='circle-content-heading'>300</span>
              <span>Exhibitors</span>
            </h3>
          </div>
          <div className='inner-content-circle'>
            <h3>
              <span className='circle-content-heading'>150</span>
              <span>Keynote Speakers</span>
            </h3>
          </div>
          <div className='inner-content-circle'>
            <h3>
              <span className='circle-content-heading'>150</span>
              <span>Seminars</span>
            </h3>
          </div>
          <div className='inner-content-circle'>
            <h3>
              <span className='circle-content-heading'>50</span>
              <span>Innovation Awards</span>
            </h3>
          </div>
          <div className='inner-content-circle'>
            <h3>
              <span className='circle-content-heading'>150</span>
              <span>Product Launches</span>
            </h3>
          </div>
        </div>
      </Container>
    </WhatToExpectWrapper>
  );
};

export default WhatToExpect;