import React from 'react';
import BusinessExperienceWrapper from './style';
import Container from '../../../UiComponent/Container';

import ButtonArrow from '../../../../../static/event-btn-arrow.svg';

const BusinessExperience = ({ sectionBackground, dark, backgroundIcons }) => {
  return (
    <BusinessExperienceWrapper
      style={{ backgroundImage: `url(${sectionBackground})` }}
      className={dark ? 'dark' : ''}
    >
      <div style={{ backgroundImage: `url(${backgroundIcons})` }}>
      <Container>
        <h2 className='heading'>We’re launching <span>Seller Terminal </span>tool to simplify your marketplace business experiences</h2>
        <div className='experience-wrapper'>
          <div className='experience-box'>
            <h3 className='inner-heading'>Amazon Reimbursement</h3>
            <p>Quick and painless refund recovery from Amazon. We file your case and bring the money back.</p>
          </div>
          <div className='experience-box'>
            <h3 className='inner-heading'>3PL Warehouse Manager</h3>
            <p>Manage inventory, streamline repetitive tasks, and deliver accuracy and visibility.</p>
          </div>
          <div className='experience-box'>
            <h3 className='inner-heading'>Warehouse Management Software (WMS)</h3>
            <p>Keep track of in-house fulfillment from any device at your ease.</p>
          </div>
        </div>
        <button type='submit'>You’re invited to our live product demo<img src={ButtonArrow} alt='arrow' /></button>
      </Container>
      </div>
    </BusinessExperienceWrapper>
  );
};

export default BusinessExperience;
