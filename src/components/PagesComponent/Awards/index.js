import React from "react";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Container from "../../UiComponent/Container";
// import Button from "../../UiComponent/Button";

import AwardsWrapper from "./style";

const Index = ({ maxCols }) => {
  const data = useStaticQuery(graphql`
    query AwardsQuery {
      allStrapiAwardsAndRecognition {
        nodes {
          awards {
            link
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
            } 
          }
        }
      }
    }
  `);

  const awardsData = data.allStrapiAwardsAndRecognition.nodes;
  const displayedAwards = maxCols ? awardsData.slice(0, maxCols) : awardsData;

  return (
    <AwardsWrapper>
      <div className="awards-main">
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <h2 className="heading">Awards & Recognition</h2>
              {/* {maxCols && (
                <Col sm={12}>
                  <div className="btn-awards">
                    <Button text="Explore More" />
                  </div>
                </Col>
              )} */}
            </Col>
            <Col lg={8} sm={12}>
              <Row className="awards-logos">
                {displayedAwards.map((data, ind) => {
                  const awardImage = getImage(data.awards?.logo?.localFile?.childImageSharp?.gatsbyImageData);
                  return (
                    <Col md={3} sm={3} xs={6} key={ind}>
                      <a href={data.awards.link} target="blank">
                        <GatsbyImage 
                          image={awardImage} 
                          alt={`Award ${ind + 1}`} 
                          loading="lazy" 
                        />
                      </a>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </AwardsWrapper>
  );
};

export default Index;
