import React from "react";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from 'gatsby'

// import { clientsData } from "../../../constants";

import Container from "../../UiComponent/Container";

import AwardsWrapper from "./style";

const Index = () => {

  const data = useStaticQuery(graphql`
  query ClientsQuery {
    allStrapiOurClient {
      nodes {
        clients {
          link
          logo {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`);

const clientsData = data.allStrapiOurClient.nodes;
  
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
                {clientsData.map((data, ind) => (
                  <div className="logo" key={ind}>
                    <a href={data.clients.link} target="_blank" rel="noreferrer">
                      <img src={data.clients.logo.localFile.url} alt="client_logo"/>
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
