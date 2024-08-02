import React from 'react';
import { navigate } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';
import { projects } from '../../../constants';

import ManagementWrapper from './style';

const Index = () => {
  const ProjectBox = ({ title, img, description, key }) => (
    <div className="hover-box" key={key}>
      <div className="d-flex align-items-center pb-4">
        <img src={img} alt={title} title={title} loading='lazy' width='40px' height='40px' />
        <h4>{title}</h4>
      </div>
      <div className="description">{description}</div>
    </div>
  )
  return (
    <ManagementWrapper>
      <Container>
        <h3 className="text-h2">Custom e-commerce business management software solutions for your next big project.</h3>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            {[...projects].slice(0, 5).map((project, index) => {
              return <ProjectBox {...project} key={index} />
            })}
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            {[...projects].slice(5, 10).map((project, index) => {
              return <ProjectBox {...project} key={index} />
            })}
          </Col>
          <Col lg={12} md={12}>
            <div className="d-flex justify-content-center add-space">
              <Button onClick={() => navigate('/contact')} text="Get Services" className="secondary-btn" />
            </div>
          </Col>
        </Row>
      </Container>
    </ManagementWrapper>
  )
}
export default Index
