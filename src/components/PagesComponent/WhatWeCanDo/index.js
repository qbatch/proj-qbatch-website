import React from "react";
import WhatWeDoWrapper from "./style";

import { Row, Col } from "react-bootstrap";

import Button from "../../../components/UiComponent/Button";
import Divider from "../../../components/UiComponent/Divider";
import Container from "../../../components/UiComponent/Container";

import { graphql, useStaticQuery } from "gatsby";

import { weDoData } from "../../../constants";

const query = graphql`
  {
    allStrapiService(sort: {strapi_id: ASC}) {
    nodes {
      Title
      Subtitle
      Service_Item {
        Title
        Description
        id
        Image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
  }
`;

const Index = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiService: { nodes: service },
  } = data;
  const services = service[0];
  console.log(services);

  return (
    <WhatWeDoWrapper>
      <Container>
        <div className="base-space">
          <div className="d-flex flex-column align-items-center text-center section-heading">
            <h1>{services.Title}</h1>
            <p>{services.Subtitle}</p>
          </div>
          <div className="services-provided">
            <Row>
              {services.Service_Item.map((data, i) => (
                <Col xl={4} md={6} sm={12} key={i}>
                  <div className={i !== 5 ? "service" : ""}>
                    {/* {i === 5 ? (
                      <div className="services-btn">
                        <Button text="View All Services" />
                      </div>
                    ) : ( */}
                    <div className="d-flex align-items-start">
                      <div className="mt-2">
                        <img src={data.Image.localFile.publicURL} />
                      </div>
                      <div className="do-title">
                        <h4>{data.Title}</h4>
                        <span>{data.Description}</span>
                      </div>
                    </div>
                    {/* )} */}
                  </div>
                </Col>
              ))}
              <Col xl={4} md={6} sm={12}>
                <div>
                <div className="services-btn">
                  <Button text="View All Services" />
                </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Divider />
    </WhatWeDoWrapper>
  );
};

export default Index;
