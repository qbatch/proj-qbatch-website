import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";


import AwardsWrapper from "./style";

const awardsData = [
  {
    id: 1,
    link: "https://www.designrush.com/agency/profile/qbatch",
    img: '/logo1.svg',
  },
  {
    id: 2,
    link: "#",
    img: '/logo2.svg',
  },
  {
    id: 3,
    link: "https://www.topdevelopers.co/profile/qbatch",
    img: '/logo3.svg',
  },
  {
    id: 4,
    link: "https://www.goodfirms.co/company/qbatch-llc",
    img: '/logo4.svg',
  },
  {
    id: 5,
    link: "https://topfirms.co/company-detail/3768/qbatch",
    img: '/logo5.svg',
  },
  {
    id: 6,
    link: "#",
    img: '/logo6.svg',
  },
  {
    id: 7,
    link: "#",
    img: '/logo7.svg',
  },
  {
    id: 8,
    link: "https://www.techimply.com/profile/qbatch",
    img: '/logo8.svg',
  },
  {
    id: 9,
    link: "https://www.techimply.com/profile/qbatch",
    img: '/logo9.svg',
  },
  {
    id: 10,
    link: "https://www.techimply.com/profile/qbatch",
    img: '/logo10.svg',
  },
];

const Index = () => {
  
  return (
    <AwardsWrapper>
      <div className="awards-main">
        <Container>
          <Row className="g-0">
            <Col lg={3} className="d-flex align-items-center">
              <h2 className="heading">Our <br className="d-lg-block d-none"/> Client's</h2>
            </Col>
            <Col lg={9}>
              <div className="clients-logos">
                {awardsData.map((data, ind) => (
                  <div className="logo" key={ind}>
                    <a href={data.link} target="_blank">
                      <img src={data.img} />
                    </a>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </AwardsWrapper>
  );
};

export default Index;
