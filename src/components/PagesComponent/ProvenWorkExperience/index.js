import React, { useState, useRef, useCallback, useMemo, lazy } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

const Button  = lazy(() => import("../../../components/UiComponent/Button"));
const Container  = lazy(() => import("../../UiComponent/Container"));

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
                  width: 190
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
        <div className="section-heading d-flex flex-sm-row flex-column gap-1 flex-wrap justify-content-between align-items-start">
          <div className={headerClass}>
            <h2 className={`heading ${componentName === 'index' && 'text-h1'}`}>{heading}</h2>
            <p style={{maxWidth: paragraphWidth}} className="paragraph">{paragraph}</p>
          </div>
          {!exploreBtn ?
            <div>
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
                  {portfolioData.map((item, ind) => {
                    const logoImage = getImage(item.projectLogo?.localFile?.childImageSharp?.gatsbyImageData);
                    return (
                      <div className="project-title" key={ind}>
                        <GatsbyImage image={logoImage} alt="logo" title="logo" loading="lazy" width={190} height={52} />
                        <h3>{item.projectName}</h3>
                        <span>{item.projectCategory}</span>
                        <div className="project-tags d-flex">
                          {item.projectTags?.strapi_json_value.map((tag, ind) => (
                            <div key={ind}>{tag}</div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
                <div className="carousel-button-group d-flex align-items-center">
                  <ArrowLeftIcon
                    onClick={handlePrevClick}
                  />
                  <span>
                    <span className="fw-bold">
                      {currentInd < 10 && 0}
                      {currentInd}
                    </span>
                    <span>/</span>
                    <span>
                      {portfolioData.length < 10 && 0}
                      {portfolioData.length}
                    </span>
                  </span>
                  <ArrowRightIcon
                    onClick={handleNextClick}
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
                  {portfolioData.map((item, ind) => {
                    const projectImage = getImage(item.projectImg?.localFile?.childImageSharp?.gatsbyImageData);
                    return (
                      <div key={ind}>
                        <GatsbyImage image={projectImage} alt="project" title="project" loading="lazy" width="100%" height="100%" />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ProvenExperienceWrapper>
  );
};

export default Index;
