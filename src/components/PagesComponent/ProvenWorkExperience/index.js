import React, { useState, useRef, useCallback, useMemo } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Button from "../../../components/UiComponent/Button";
import Container from "../../UiComponent/Container";
import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import ProvenExperienceWrapper from "./style";

const responsive = {

  superLargeDesktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 1,
    partialVisibilityGutter: 202,
  },
  desktop: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const responsiveTitle = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Index = ({ heading, paragraph, componentName, exploreBtn, btnClass, headerClass, paragraphWidth }) => {
  const [currentInd, setCurrentInd] = useState(1);

  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  const handleButtonClickPre = () => {
    carousel1Ref.current.previous();
    carousel2Ref.current.previous();
  };

  const handleButtonClickNext = () => {
    carousel1Ref.current.next();
    carousel2Ref.current.next();
  };

    const data = useStaticQuery(graphql`
      query portfolioQuery {
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
    `)

    const portfolioData = useMemo(() => data.allStrapiOurProject.nodes.filter(x => x.imgOpen), [data]);

    const handlePrevClick = useCallback(() => {
      handleButtonClickPre();
      setCurrentInd((prev) => (prev === 1 ? 1 : prev - 1));
    }, [handleButtonClickPre]);

    const handleNextClick = useCallback(() => {
      const maxIndex = portfolioData.length;
      if (currentInd !== maxIndex) {
        handleButtonClickNext();
      }
      setCurrentInd((prev) => (prev === maxIndex ? prev : prev + 1));
    }, [handleButtonClickNext, currentInd, portfolioData.length]);
    
  return (
    <ProvenExperienceWrapper>
      <Container>
        <div className="section-heading d-flex flex-wrap justify-content-between align-items-start">
          <div className={headerClass}>
            <h2 className={`heading ${componentName === 'index' && 'text-h1'}`}>{heading}</h2>
            <p style={{maxWidth: paragraphWidth}} className="paragraph">{paragraph}</p>
          </div>
          {!exploreBtn ?
            <div className="mt-md-4 mt-3">
              <Button className={btnClass} onClick={() => navigate('/portfolio')} text="Explore More" />
            </div>
            :
            ''
          }
        </div>
      </Container>
      <div className="container-slider">
        <div className="section-slider">
          <Row>
            <Col lg={4} md={12} sm={12} className="p-0 d-flex flex-column justify-content-center">
              <div className="carousel-padding">
                <Carousel
                  responsive={responsiveTitle}
                  arrows={false}
                  ref={carousel2Ref}
                  swipeable={false}
                  draggable={false}
                >
                  {portfolioData
                    .filter((x) => x.imgOpen)
                    .map((item, ind) => (
                      <div className="project-title" key={ind}>
                        <img src={item.projectLogo?.localFile?.url} alt="logo" width="190px" height="52px" loading="lazy" />
                        <h3>{item.projectName}</h3>
                        <span>{item.projectCategory}</span>
                        <div className="project-tags d-flex">
                          {item.projectTags?.strapi_json_value.map((tag, ind) => (
                            <div key={ind}>{tag}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                </Carousel>
                <div className="carousel-button-group d-flex align-items-center">
                  <ArrowLeftIcon
                    onClick={() => {
                      handlePrevClick()
                      setCurrentInd(currentInd === 1 ? 1 : currentInd - 1)
                    }}
                  />
                  <span>
                    <span className="fw-bold">
                      {currentInd < 10 && 0}
                      {currentInd}
                    </span>
                    <span>/</span>
                    <span>
                      {portfolioData.filter((x) => x.imgOpen).length < 10 && 0}
                      {portfolioData.filter((x) => x.imgOpen).length}
                    </span>
                  </span>
                  <ArrowRightIcon
                    onClick={() => {
                      if ( currentInd !== portfolioData.filter((x)=> x.imgOpen).length) {
                        handleNextClick()
                      };
                      setCurrentInd(currentInd === portfolioData.filter((x)=> x.imgOpen).length ? currentInd : currentInd + 1)
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={8} md={12} sm={12} className="p-0">
              <div className="projects-carousel">
                <Carousel
                  partialVisible={true}
                  responsive={responsive}
                  arrows={false}
                  ref={carousel1Ref}
                  swipeable={false}
                  draggable={false}
                  itemClass="qb-carousel-item"
                >
                  {portfolioData
                    .filter((x) => x.imgOpen)
                    .map((item, ind) => (
                      <div key={ind}>
                        <img src={item.projectImg?.localFile?.url} alt="project" loading="lazy" width="100%" height="100%" />
                      </div>
                    ))}
                  <div></div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ProvenExperienceWrapper>
  )
};

export default Index;
