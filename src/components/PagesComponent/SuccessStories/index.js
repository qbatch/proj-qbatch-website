import React from "react";
import { Row, Col } from "react-bootstrap";
import { StoriesWrapper, ImageOpenStyle } from "./style";
import { useStaticQuery, graphql } from "gatsby";

// import PrimaryButton from "../../UiComponent/PrimaryButton";
import Container from "../../UiComponent/Container";

const Index = () => {
  const data = useStaticQuery(graphql`
    query storiesQuery {
      allStrapiOurProject {
        nodes {
          projectName
          projectDesc
          projectCategory
          imgOpen
          projectTags {
            strapi_json_value
          }
          projectImg {
            localFile {
              url
            }
          }
          projectLogo {
            localFile {
              url
            }
          }
        }
      }
    }
  `);

  const portfolioData = data.allStrapiOurProject.nodes;

  return (
    <StoriesWrapper>
      <Container>
        <h2 className="color-primary heading">Our Success Stories</h2>
        <p className="desc">
          Our Success Stories Innovators from across the industry have trusted
          Qbatch to build high-impact products
        </p>
        <Row className="wrapper">
          {portfolioData.map((item, index) => (
            <Col xl={item.imgOpen ? 8 : 4}>
              <div className="column" key={index}>
                <div
                  className={`column-inner ${
                    item.imgOpen ? "primary-boder" : ""
                  }`}
                >
                  {item.imgOpen ? (
                    <ImageOpenStyle src={item.projectImg.localFile?.url}></ImageOpenStyle>
                  ) : (
                    <div className="close-small-img">
                      <ImageOpenStyle
                        src={item.projectImg.localFile?.url}
                        type="close"
                      ></ImageOpenStyle>
                    </div>
                  )}
                  <div
                    className={`column-inner-right ${
                      item.imgOpen ? "" : "close-column-inner"
                    }`}
                  >
                    <div className="close-image">
                      <img src={item.projectImg.localFile?.url} alt="story" />
                    </div>
                    <div className="content">
                      <img className="logo" src={item.projectLogo?.localFile?.url} alt="logo" />
                      <h3>{item.projectName}</h3>
                      <p className="paragraph">{item.projectDesc}</p>
                      <div className="badge">
                        {item.projectTags?.strapi_json_value.map((badge) => (
                          <span>{badge}</span>
                        ))}
                      </div>
                    </div>
                    {/* <PrimaryButton text="View Details" /> */}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </StoriesWrapper>
  );
};

export default Index;
