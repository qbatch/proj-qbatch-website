import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import PortfolioSuccessWrapper from './style';

const Index = () => {
  const data = useStaticQuery(graphql`
    query newPortfolioQuery {
      allStrapiOurProject {
        nodes {
          projectName
          projectDesc
          projectCategory
          slug
          projectImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          projectLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  const portfolioData = data?.allStrapiOurProject?.nodes;

  return (
    <PortfolioSuccessWrapper>
      <Container>
        <h2 className="color-primary heading">Our Success Stories</h2>
        <p className="desc">
          Our Success Stories Innovators from across the industry have trusted
          Qbatch to build high-impact products
        </p>
        <Row>
          {portfolioData?.map((item, ind) => {
            const logoImage = getImage(item?.projectLogo?.localFile?.childImageSharp?.gatsbyImageData);
            const projectImage = getImage(item?.projectImg?.localFile?.childImageSharp?.gatsbyImageData);
            return (
              <Col md={6} key={ind} className='stories-col'>
                <Link to={item.slug ? `/portfolio/${item.slug}/` : "#"}>
                  <Card>
                    <div className="position-relative card-img">
                      {projectImage && (
                        <GatsbyImage
                          image={projectImage}
                          alt={item?.projectName}
                          title={item?.projectName}
                          className="w-100 project-img"
                          loading='lazy'
                        />
                      )}
                      <div className="arrow-div">
                        <img src="/arrow-black.svg" alt="arrow" title="arrow" />
                      </div>
                    </div>
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between card-logo mb-3">
                        {logoImage && (
                          <GatsbyImage
                            image={logoImage}
                            alt="logo"
                            title="logo"
                            loading='lazy'
                          />
                        )}
                        <div className='project-category'>{item?.projectCategory}</div>
                      </div>
                      <p className="card-desc mb-0">{item?.projectDesc}</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </PortfolioSuccessWrapper>
  )
}

export default Index;
