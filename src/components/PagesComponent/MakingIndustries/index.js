import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

import Container from "../../UiComponent/Container";

import Ecommerce from "../../../assets/images/e-commerce.svg";
import Logictics from "../../../assets/images/logictics.svg";
import FinTech from "../../../assets/images/fin-tech.svg";
import HealthCare from "../../../assets/images/health-care.svg";
import EdTech from "../../../assets/images/edtech.svg";
import RetailGoods from "../../../assets/images/retail.svg";
import Traval from "../../../assets/images/traval.svg";

import MakingIndustriesWrapper from "./style";

const Index = () => {

  const industries = [
    {
      title: "E-Commerce",
      img: Ecommerce,
    },
    {
      title: "Logistics and Supply Chain",
      img: Logictics,
    },
    {
      title: "FinTech",
      img: FinTech,
    },
    {
      title: "Healthcare",
      img: HealthCare,
    },
    {
      title: "EdTech",
      img: EdTech,
    },
    {
      title: "Retail and Consumer Goods",
      img: RetailGoods,
    },
    {
      title: "Travel and Transportation",
      img: Traval,
    },
  ];
  
  return (
    <MakingIndustriesWrapper>
      <Container>
        <h1 className="text-center color-primary">
          Happily Making Industries People-First
        </h1>
        <p className="text-center">
          You are the industry leader of today and tomorrow. Let us help you
          become unstoppable with versatile expertise and wide-spectrum
          technologies.
        </p>
        <Row className="justify-content-center">
          <Col md={8} lg={6} sm={12} sx={12}>
            <div className="arrow-section">
              {industries.map((title, index) => {
                return (
                  <div className="d-flex justify-content-between arrow-box-section">
                    <div className="d-flex gap-3 mb-3">
                      <title.img />
                      <h4> {title.title}</h4>
                    </div>
                    <div className="arrow-box">
                      <BsArrowRight className="arrow-right" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </MakingIndustriesWrapper>
  );
};
export default Index;
