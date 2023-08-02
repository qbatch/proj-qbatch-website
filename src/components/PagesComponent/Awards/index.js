import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import DesignRush from "../../../assets/images/design-rush.svg";
import TopDevelopers from "../../../assets/images/top-developers.svg";
import GoodFirms from "../../../assets/images/good-firms.svg";
import TopFirms from "../../../assets/images/top-firms.svg";
import TopCompanies from "../../../assets/images/top-companies.svg";
import TopRated from "../../../assets/images/top-rated.svg";
import Upfirms from "../../../assets/images/upfirms.svg";
import TechImply from "../../../assets/images/tech-imply.svg";

import AwardsWrapper from "./style";

const awardsData = [
  {
    id: 1,
    link: "https://www.designrush.com/agency/profile/qbatch",
    img: <DesignRush />,
  },
  {
    id: 2,
    link: "#",
    img: <TopCompanies />,
  },
  {
    id: 3,
    link: "https://www.topdevelopers.co/profile/qbatch",
    img: <TopDevelopers />,
  },
  {
    id: 4,
    link: "https://www.goodfirms.co/company/qbatch-llc",
    img: <GoodFirms />,
  },
  {
    id: 5,
    link: "https://topfirms.co/company-detail/3768/qbatch",
    img: <TopFirms />,
  },
  {
    id: 6,
    link: "#",
    img: <TopRated />,
  },
  {
    id: 7,
    link: "#",
    img: <Upfirms />,
  },
  {
    id: 8,
    link: "https://www.techimply.com/profile/qbatch",
    img: <TechImply />,
  },
];

const Index = () => {
  
  return (
    <AwardsWrapper>
      <div className="awards-main">
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <h2 className="heading">Awards & Recognition</h2>
            </Col>
            <Col md={8} sm={12}>
              <Row className="awards-logos">
                {awardsData.map((data, ind) => (
                  <Col md={3} sm={3} xs={6}>
                    <a href={data.link} target="_blank">
                      {data.img}
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm={12}>
              <div className="btn-awards">
                <Button text="Explore More" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </AwardsWrapper>
  );
};

export default Index;
