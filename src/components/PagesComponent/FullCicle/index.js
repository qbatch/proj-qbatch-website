import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import FullCycleWrapper from './style';

const Container  = lazy(() => import('../../UiComponent/Container'));

const Index = ({ className, heading, paragraph, data, sliceIndex }) => {
  const firstHalf = data.slice(0, sliceIndex);
  const secondHalf = data.slice(sliceIndex, sliceIndex * 2);

  return (
    <FullCycleWrapper className={className}>
      <Container>
        <h2 className='main-heading text-h2'>{heading}</h2>
        <p className='paragraph'>{paragraph}</p>
        <Row>
          <Col lg={6} md={12} sm={12}>
            {firstHalf.map((project, index) => {
              const { title, img, description } = project;
              return (
                <div key={index} className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt={title} title={title} loading='lazy' />
                    <h3 className='text-h4 title'>{title}</h3>
                  </div>
                  <div className="description">{description}</div>
                </div>
              );
            })}
          </Col>
          <Col lg={6} md={12} sm={12}>
            {secondHalf.map((project, index) => {
              const { title, img, description } = project;
              return (
                <div key={index} className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt={title} />
                    <h3 className='text-h4 title'>{title}</h3>
                  </div>
                  <div className="description">{description}</div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </FullCycleWrapper>
  );
};

Index.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  sliceIndex: PropTypes.number,
};

Index.defaultProps = {
  className: '',
  sliceIndex: 4,
};

export default Index;
