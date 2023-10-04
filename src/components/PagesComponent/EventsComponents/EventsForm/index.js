import React from 'react';
import EventsFormWrapper from './style';
import Container from '../../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

import ButtonArrow from '../../../../../static/event-btn-arrow.svg'
import FormVector from '../../../../../static/event-form-vector-1.svg'

const EventsForm = () => {
  return (
    <EventsFormWrapper>
      <div className='section-bg'>
        <div className='left-box'>
          <img src={FormVector} />
        </div>
        <div className='right-box'></div>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='section-box-left'>
              <p className='text-h3 paragraph'>
              Qbatch is excited to exhibit at the most influential e-commerce marketplace show. Let’s catch up and explore the cutting-edge developments in selling, white label, retailer, and supplier markets.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className='form-wrapper'>
              <p className='form-paragraph'>Effortless Networking Without The Chase</p>
              <h2 className='form-heading'>BOOK A MEETING</h2>
              <form className='event-input-form'>
                <input type='text'  placeholder='Name'/>
                <input type='text'  placeholder='Email'/>
                <input type='text'  placeholder='Contact Number'/>
                <input type='text'  placeholder='Company'/>
                <label>How would you like to meet us?</label>
                <select>
                  <option>In-Person</option>
                  <option>In-Person</option>
                  <option>In-Person</option>
                </select>
                <button type='submit'>Let’s Meet<img src={ButtonArrow} alt='arrow' /></button>
              </form>
              <div className='text-center'>
                <p>Or <a href='#'><i>schedule a meeting at your convenience</i></a></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </EventsFormWrapper>
  );
};

export default EventsForm;