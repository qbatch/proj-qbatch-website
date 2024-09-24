import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';

import ProjectChallengesWrapper from './style';

const ProjectChallenges = ({ projectDetails }) => {
  return (
    <ProjectChallengesWrapper>
      <Container>
        <div className='inner-wrapper'>
          {projectDetails && projectDetails.map((detail, index) => (
            <div className='detail-wrapper' key={index}>
              <h2 className='heading text-h1'>{detail.heading}</h2>
              <p className='paragraph text-h4'>{detail.paragraph}</p>
              {detail.detailBox && detail.detailBox.length > 0 && (
                <Row className='gy-4'>
                  {detail.detailBox.map((box, boxIndex) => (
                    <Col lg={3} key={boxIndex}>
                      <div className='inner-box'>
                        <h3 className={`text-h4 inner-heading ${box.heading.length >= 30 && 'text-width'}`}>{box.heading}</h3>
                        <p className='inner-paragraph'>{box.paragraph}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          ))}
        </div>
      </Container>
    </ProjectChallengesWrapper>
  );
};

export default ProjectChallenges;
