import React, { lazy, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Form from 'react-bootstrap/Form';

import Container from '../../UiComponent/Container';
const SearchInput = lazy(() => import("../../UiComponent/SearchInput"));

import PortfolioSuccessWrapper from './style';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Industry');

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
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          projectLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
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

  const allCategories = ['Industry', ...new Set(portfolioData?.map(item => item.projectCategory))];

  const filteredPortfolio = portfolioData?.filter(item => {
    const matchesSearchTerm = item.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.projectDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.projectCategory.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'Industry' || item.projectCategory === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <PortfolioSuccessWrapper>
      <Container>
        <div className='d-flex align-items-start justify-content-between portfolio-filters'>
          <div>
            <h2 className="color-primary heading">Our Success Stories</h2>
            <p className="desc">
              Our Success Stories Innovators from across the industry have trusted
              Qbatch to build high-impact products
            </p>
          </div>
          <div className='d-flex gap-3 filters'>
            {/* <div className='portfolio-select'>
              <Form.Select aria-label="Technology">
                <option>Technology</option>
                <option value="react">React Js</option>
                <option value="vue">Vue Js</option>
                <option value="gatsby">Gatsby Js</option>
              </Form.Select>
            </div> */}
            <div className='portfolio-select'>
              <Form.Select
                aria-label="Industry"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {allCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </div>
            <SearchInput onChange={(e) => setSearchTerm(e.target.value)} className='portfolio-search' />
          </div>
        </div>
        <Row className='portfolio-row'>
          {filteredPortfolio.length > 0 ?
            filteredPortfolio?.map((item, ind) => {
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
                        <div className="d-flex align-items-center justify-content-between card-logo">
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
            })
            :
            <p className='text-h4 text-center'>No Record Found</p>
          }
        </Row>
      </Container>
    </PortfolioSuccessWrapper>
  )
}

export default Index;
