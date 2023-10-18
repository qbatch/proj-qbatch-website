import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Container from '../../UiComponent/Container'
import BusinessMangementWrapper from './style'
const Index = () => {
const projects = [
  {
    img: '/blank-project.svg',
    title: 'Custom E-commerce Software Development',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
  {
    img: '/blank-project.svg',
    title: '️Inventory Management',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
  {
    img: '/blank-project.svg',
    title: '️️Workflow Automation',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
  {
    img: '/blank-project.svg',
    title: '️️️Warehouse Management Software (WMS)',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
  {
    img: '/blank-project.svg',
    title: '️Inventory Management',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
  {
    img: '/blank-project.svg',
    title: '️️Workflow Automation',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
  {
    img: '/blank-project.svg',
    title: '️️️Warehouse Management Software (WMS)',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
]
  return (
    <BusinessMangementWrapper>
      <Container>
        <h2>Custom e-commerce business management software solutions for your next big project.</h2>
        <Row>
          <Col md={6} >
            {projects.slice(0, 5).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt="no-project" />
                    <h4>{title}</h4>
                  </div>
                  <div className="description">{description}</div>
                </div>
              )
            })}
          </Col>
          <Col md={6}>
            {projects.slice(5, 10).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt="no-project" />
                    <h4>{title}</h4>
                  </div>
                  <div className="description">{description}</div>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </BusinessMangementWrapper>
  )
}
export default Index
