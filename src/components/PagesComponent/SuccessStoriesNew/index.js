import React, { useRef, useState, useMemo, Suspense } from "react";
import { navigate, useStaticQuery, graphql, Link } from "gatsby";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";
import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";
import SuccessStoriesNewWrapper from "./style";

const PortfolioCard = React.memo(({ item }) => {
  const logoImage = getImage(
    item?.projectLogo?.localFile?.childImageSharp?.gatsbyImageData
  );
  const projectImage = getImage(
    item?.projectImg?.localFile?.childImageSharp?.gatsbyImageData
  );

  return (
    <Link to={item.slug ? `/portfolio/${item.slug}/` : "#"}>
      <Card className="mb-md-0 mb-sm-5 mb-4">
        <div className="position-relative card-img">
          {projectImage && (
            <GatsbyImage
              image={projectImage}
              alt={item?.projectName}
              title={item?.projectName}
              className="w-100 project-img"
              loading="lazy"
            />
          )}
          <div className="arrow-div">
            <img
              src="/arrow-black.svg"
              alt="arrow"
              title="arrow"
              height="22"
              width="23"
            />
          </div>
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between card-logo">
            {logoImage && (
              <GatsbyImage
                image={logoImage}
                alt="logo"
                title="logo"
                loading="lazy"
                rel="preload"
                fetchPriority="high"
              />
            )}
            <div className="project-category">{item?.projectCategory}</div>
          </div>
          <p className="card-desc mb-0">{item?.projectDesc}</p>
        </Card.Body>
      </Card>
    </Link>
  );
});

const Index = ({ heading, className }) => {
  const [currentInd, setCurrentInd] = useState(1);
  const sliderRef = useRef(null);

  const portfolioQuery = useStaticQuery(graphql`
    query successStoriesQuery {
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

  const portfolioData = useMemo(() => {
    const nodes = portfolioQuery?.allStrapiOurProject?.nodes || [];
    return nodes.slice(-6);
  }, [portfolioQuery]);

  const handleButtonClickPrev = () => {
    if (currentInd > 1) {
      sliderRef.current?.slickPrev();
    }
  };

  const handleButtonClickNext = () => {
    if (currentInd < portfolioData.length) {
      sliderRef.current?.slickNext();
    }
  };

  const sliderSettings = useMemo(() => ({
    infinite: false,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentInd(current + 1),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
    lazyLoad: 'ondemand',
  }), []);

  return (
    <SuccessStoriesNewWrapper className={className}>
      <Container>
        <div className="section-heading d-flex justify-content-between align-items-center">
          <div>
            <h2 className="heading mb-sm-3 mb-2">
              {heading || "Our Success Stories"}
            </h2>
            <p className="mb-0 desc">
              Innovators from across the industry have trusted Qbatch to build
              high-impact products.
            </p>
          </div>
          <div className="d-md-block d-none">
            {portfolioData.length === currentInd ? (
              <Button
                onClick={() => navigate("/portfolio")}
                text="Explore More"
              />
            ) : (
              <div className="bottom-slider">
                <div className="carousel-button-group d-flex align-items-center">
                  <ArrowLeftIcon
                    onClick={handleButtonClickPrev}
                    className="slider-arrow"
                  />
                  <ArrowRightIcon
                    onClick={handleButtonClickNext}
                    className="slider-arrow"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Slider {...sliderSettings} ref={sliderRef}>
            {portfolioData.map((item, ind) => (
              <div key={item.slug || ind}>
                <PortfolioCard item={item} />
              </div>
            ))}
          </Slider>
        </Suspense>
        <div className="d-flex justify-content-center">
          <div className="mt-sm-5 mt-0">
            <Button
              onClick={() => navigate("/portfolio")}
              text="Explore More"
            />
          </div>
        </div>
      </Container>
    </SuccessStoriesNewWrapper>
  );
};

export default Index;
