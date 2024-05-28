import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
// import ArrowDown  from '../../../assets/images/arrow_downward.svg'

import MakingIndustriesWrapper from "./style";

const Index = () => {

  const industries = [
    {
      title: "E-Commerce",
      img: '/e-commerce.svg',
    },
    {
      title: "Logistics and Supply Chain",
      img: '/logictics.svg',
    },
    {
      title: "FinTech",
      img: '/fin-tech.svg',
    },
    {
      title: "Healthcare",
      img: '/health-care.svg',
    },
    {
      title: "EdTech",
      img: '/edtech.svg',
    },
    {
      title: "Retail and Consumer Goods",
      img: '/retail.svg',
    },
    {
      title: "Travel and Transportation",
      img: '/traval.svg',
    },
  ];
  
  return (
    <MakingIndustriesWrapper id="industries">
      <Container className="industries-inner-wrapper">
        <h2 className="text-center color-primary text-h1 heading">
          Happily Making Industries People-First
        </h2>
        <p className="text-center">
          You are the industry leader of today and tomorrow. Let us help you
          become unstoppable with versatile expertise and wide-spectrum
          technologies.
        </p>
        <Row className="justify-content-center">
          <Col md={8} lg={6} sm={12} sx={12}>
            <div className="arrow-section">
              {industries.map((title, i) => (
                  <div className="d-flex justify-content-between arrow-box-section" key={i}>
                    <div className="d-flex gap-3 mb-sm-3 mb-2">
                      <img src={title.img} alt={title.title} loading="lazy" />
                      <h3 className="text-h4"> {title.title}</h3>
                    </div>
                    <div className="arrow-box">
                      {/* <ArrowDown className="arrow-right" /> */}
                    </div>
                  </div>
                  ))}
            </div>
          </Col>
        </Row>
      </Container>
    </MakingIndustriesWrapper>
  );
};
export default Index;
