import React, { useEffect, useState, useMemo, lazy } from 'react';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { debounce } from 'lodash';

import Container from '../../UiComponent/Container';
import { achievementsData } from '../../../constants';

import AchievementsNewWrapper from './style';

const Marquee = lazy(() => import("react-fast-marquee"));
const Slider = lazy(() => import("react-slick"));

const AchievementCounter = ({ data }) => useMemo(() => (
  <Col lg={3} md={6} className='d-flex flex-column align-items-center counter-col'>
    <div className='d-flex align-items-center gap-2 count-data'>
      <CountUp end={data.count} duration={3} />
      <p className='text-h2'>{data.symbol}</p>
    </div>
    <p className='count-desc'>{data.desc}</p>
  </Col>
), [data]);

const Index = () => {
  const [width, setWidth] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = debounce(() => setWidth(window.innerWidth), 250);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

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

  return (
    <AchievementsNewWrapper>
      <Container>
        <div className='achievements-box'>
          <h2 className='heading text-center'>Achievements Through The Years...</h2>
          <div className='white-box'>
            <Row className='count-row d-md-flex d-none'>
              {achievementsData.map((data, ind) => (
                <AchievementCounter data={data} key={ind} />
              ))}
            </Row>
            {width < 768 && (
              <Row className='count-row d-md-none d-flex'>
                <Slider {...settings}>
                  {achievementsData.map((data, ind) => (
                    <AchievementCounter data={data} key={ind} />
                  ))}
                </Slider>
              </Row>
            )}
            <Row>
              <Col lg={6}>
                <div className='d-flex flex-sm-row flex-column align-items-center gap-4 mb-lg-0 mb-5'>
                  <img height="108" width="108" src='/awards-icon.svg' alt='awards' title='awards' loading='lazy' />
                  <div className='awards-heading'>
                    <p>Awards & Recognition</p>
                    <span>We’re pleased to share some of the honors and awards the Qbatch family has received.</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} className='d-flex align-items-center'>
                <Marquee direction="left" pauseOnHover={false} gradientColor="white" gradient={true} speed={40} loop={0}>
                  {awardsData.map((data, ind) => {
                    const awardImage = getImage(data.awards?.logo?.localFile?.childImageSharp?.gatsbyImageData);
                    return (
                      <a href={data.awards.link} target="blank" key={ind}>
                        <GatsbyImage image={awardImage} alt={`Award ${ind + 1}`} loading="lazy" className='awards-imgs' style={{ width: "74px", height: "74px" }} />
                      </a>
                    );
                  })}
                </Marquee>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </AchievementsNewWrapper>
  );
};

export default Index;
