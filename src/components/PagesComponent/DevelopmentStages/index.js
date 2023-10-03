import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import StagesWrapper from "./style";

const DevelopmentStages = () => {
  const sliderItems = [
    {
      image: "/slide-img.jpg",
      title: "Discovery Phase",
      content:
        "Perform competitor market research, choose suitable tech stack and MVP features, and write technical documentation to understand your concept in real-world terms under limited risks. ",
      list: [
        "Technology Consultancy",
        "Risk Mitigation",
        "Tech Stack Selection ",
        "MVP feature Composition",
      ],
    },
    {
      image: "/slide-img.jpg",
      title: "Project Planing",
      content:
        "After data collection, we elevate your development stages with strategy and logic by setting a realistic project plan, budget, and timeline according to available resources.",
      list: [
        "Shaping and Optimizing Development Plan",
        "Technical Audit & Decision-making",
        "Devising The Development Processes",
        "Time, Budget, & Resource Estimate",
      ],
    },
    {
      image: "/slide-img.jpg",
      title: "Product Development",
      content:
        "We, as your virtual CTO, ensure transparency in and continuous optimization of processes, communication, reporting, and project-critical documentation from start to end.",
      list: [
        "Team Composition & Planning",
        "Set Clear Project Goals",
        "Development Process Optimization",
        "Daily Project and Team Management",
      ],
    },
    {
      image: "/slide-img.jpg",
      title: "Project Scaling & Pitching",
      content:
        "We help startups stay wary of possible nuances and pitfalls by building and fostering scaling strategy, comprehensive pitch decks, and carefully communicating with investors as your CTO.",
      list: [
        "Forming Scaling Strategy ",
        "IT Pitch Deck Development",
        "Capturing Investments",
        "Technical Dialogue with Investors",
      ],
    },
    {
      image: "/slide-img.jpg",
      title: "Project Audit",
      content:
        "Conduct a project audit, review the code quality, and assess overall project performance and speed with our CTO services to streamline the IT delivery process, offering constant feedback for enhancements. ",
      list: [
        "Code Quality Reviews",
        "Project Audits",
        "Report and Predictive Analysis",
        "Offering Problem-Solution Fit",
      ],
    },
    {
      image: "/slide-img.jpg",
      title: "Handing Over & Retaining",
      content:
        "We won’t leave you at the very climax of your development stage like the rest. You will have all the intellectual property rights and our long-term support on a retainer basis as needed.",
      list: [
        "Knowledge & Documentation Transfer",
        "Intellectual Property Rights",
        "Ad-hoc Support & Maintenance",
      ],
    },
  ];
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  const handlePaginationItemClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    // Handle mousewheel events to change slides
    // const handleMouseWheel = (e) => {
    //   e.preventDefault();
    //   if (e.deltaY > 0) {
    //     sliderRef.current.slickNext();
    //   } else {
    //     sliderRef.current.slickPrev();
    //   }
    // };

    // Add event listener for mousewheel
    // document.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when component unmounts
      //   document.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  return (
    <StagesWrapper>
      <div className="stages-header">
        <h2>Stuck at any of these development stages?  We can help.</h2>
        <p>
          Optimize your idea at each step with our technological prowess and
          business-critical insight.
        </p>
      </div>
      <Container>
        <div className="slider-section">
          <Row>
            <Col lg={4} className="fixed-slider-column">
              <div className="pagination fixed-slider-pagination">
                <ul>
                  {sliderItems.map((item, index) => (
                    <li
                      key={index}
                      className={`pagination-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handlePaginationItemClick(index)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={8} md={12} className="slider-column">
              <Slider {...sliderSettings} ref={sliderRef}>
                {sliderItems.map((item, index) => (
                  <div key={index} className="slider-item">
                    <Row>
                      <Col lg={5} md={5}>
                        <img src={item.image} alt="project" />
                      </Col>
                      <Col lg={7} md={7} className="slider-column-text">
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="content">
                          {item.content}
                          <ul>
                            {item.list.map((listItem, listIndex) => (
                              <li key={listIndex}>{listItem}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </StagesWrapper>
  );
};

export default DevelopmentStages;
