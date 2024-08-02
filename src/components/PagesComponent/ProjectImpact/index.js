import React from 'react';
import ProjectImpactWrapper from './style';
import { Col, Row } from 'react-bootstrap';
import Container from '../../UiComponent/Container';

const ProjectImpact = ({ projectImpact }) => {
  return (
    <ProjectImpactWrapper>
      <Container>
        <h2 className='heading text-h2'>Impact Created</h2>
        <Row className='g-4'>
          <Col md={5}>
            {projectImpact[0] && <img src={projectImpact[0]} alt="Impact 1" className='impact-image' />}
          </Col>
          <Col md={7}>
            {projectImpact[1] && <img src={projectImpact[1]} alt="Impact 2" className='impact-image' />}
          </Col>
          <Col md={4}>
            {projectImpact[2] && <img src={projectImpact[2]} alt="Impact 3" className='impact-image' />}
          </Col>
          <Col md={4}>
            {projectImpact[3] && <img src={projectImpact[3]} alt="Impact 4" className='impact-image' />}
          </Col>
          <Col md={4}>
            {projectImpact[4] && <img src={projectImpact[4]} alt="Impact 5" className='impact-image' />}
          </Col>
        </Row>
      </Container>
    </ProjectImpactWrapper>
  );
};

export default ProjectImpact;
