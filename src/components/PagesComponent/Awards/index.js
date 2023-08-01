import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import GoodFirms from "../../../assets/images/good-firms.svg";
import TopFirms from "../../../assets/images/top-firms.svg";
import TopCompanies from "../../../assets/images/top-companies.svg";
import TopRated from "../../../assets/images/top-rated.svg";
import Upfirms from "../../../assets/images/upfirms.svg";
import AwardsWrapper from "./style";

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
                <Col md={3} sm={3} xs={6}>
                  <a
                    href="https://www.designrush.com/agency/profile/qbatch"
                    target="_blank"
                  >
                    <img
                      width={65}
                      src="https://www.designrush.com/topbest/images/svg/top-agency-badges/top-web-development-companies.svg"
                    />
                  </a>
                </Col>
                <Col md={3} sm={3} xs={6}>
                  <a href="#" target="_blank">
                    <TopCompanies />
                  </a>
                </Col>
                <Col md={3} sm={3} xs={6}>
                  <a
                    target="_blank"
                    href="https://www.topdevelopers.co/profile/qbatch"
                  >
                    <img
                      width={84}
                      src="https://www.topdevelopers.co/assets/badges/app-2023/Cloud-Computing/badge-top-cloud-computing-companies-2023.png"
                      alt="Cloud Computing Service Providing Companies"
                      title="Cloud Computing Service Providing Companies"
                    />
                  </a>
                </Col>
                <Col md={3} sm={3} xs={6}>
                  <a
                    target="_blank"
                    href="https://www.goodfirms.co/company/qbatch-llc"
                  >
                    <GoodFirms />
                  </a>
                </Col>
                <Col md={3} sm={3} xs={6}>
                  <div>
                    <a
                      href="https://topfirms.co/company-detail/3768/qbatch"
                      target="_blank"
                    >
                      <TopFirms />
                    </a>
                  </div>
                </Col>
                <Col md={3} sm={3} xs={6}>
                  <a href="#">
                    <TopRated />
                  </a>
                </Col>
                <Col md={3} sm={3} xs={6}>
                  <a href="#">
                    <Upfirms />
                  </a>
                </Col>
                <Col md={3} sm={3} xs={6}>
                  <a
                    target="blank"
                    href="https://www.techimply.com/profile/qbatch"
                  >
                    <img
                      width={98}
                      src="https://www.techimply.com/uploads/sub_icon/68/media_image/top-ecommerce-development-companies_Badge6.svg"
                    />
                  </a>
                </Col>
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
