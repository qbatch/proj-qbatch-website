import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import ArrowDown from "../../../assets/images/arrow_downward.svg";

import Container from "../../UiComponent/Container";

import Ecommerce from "../../../assets/images/e-commerce.svg";
import Logictics from "../../../assets/images/logictics.svg";
import FinTech from "../../../assets/images/fin-tech.svg";
import HealthCare from "../../../assets/images/health-care.svg";
import EdTech from "../../../assets/images/edtech.svg";
import RetailGoods from "../../../assets/images/retail.svg";
import Traval from "../../../assets/images/traval.svg";
import { StaticQuery, graphql } from "gatsby";
import MakingIndustriesWrapper from "./style";

export const query = graphql`
  query {
    allStrapiHappilyMaking {
      nodes {
        heading
        description {
          data {
            description
          }
        }
        list {
          internal {
            content
          }
        }
      }
    }
  }
`;

const Index = () => {
  return (
    <MakingIndustriesWrapper>
      <StaticQuery
        query={query}
        render={(data) => (
          <Container className="industries-inner-wrapper">
            <h1 className="text-center color-primary">{data.allStrapiHappilyMaking.nodes[0].heading}</h1>
            <p className="text-center">{data.allStrapiHappilyMaking.nodes[0].description.data.description}</p>
            <Row className="justify-content-center">
              <Col md={8} lg={6} sm={12} sx={12}>
                <div className="arrow-section">
                  {JSON.parse(data.allStrapiHappilyMaking.nodes[0].list.internal.content).map((title, i) => {
                    return (
                      <div className="d-flex justify-content-between arrow-box-section" key={i}>
                        <div className="d-flex gap-3 mb-3">
                          <img src={title.img} />
                          <h4> {title.name}</h4>
                        </div>
                        <div className="arrow-box">
                          <ArrowDown className="arrow-right" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        )}
      />
    </MakingIndustriesWrapper>
  );
};
export default Index;
