import React,{useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import Container from "../../UiComponent/Container";

import CareerWrapper from "./style";

const Index = ({id}) => {
   useEffect(() => {
    loadScripts();
    return () => {
    };
  }, []);

  const loadScripts = () => {
    const script = document.createElement("script");
    script.src = "https://s3.amazonaws.com/files.freshteam.com/production/65182/attachments/6013099378/original/6000003854_widget.js?1706874422";
    script.async = true;
    document.body.appendChild(script);

  };

  return (
    <CareerWrapper id={id}>
      <Container>
        <Row className="justify-content-between" id="career">
          <Col xl={12} lg={12}>
            <h2 className="heading"><span className="underline-heading text-h4">Join Us!</span> Careers</h2>
            <p className="paragraph">
              We believe our strength is derived from the brains and experiences of a like-minded community of experts.
              Qbatch is a workplace where you are invited to reach your full potential without any discrimination. Let’s
              achieve big things while having fun!
            </p>
          </Col>
          <Col xxl={12} xl={12}>
            <div className="cards-wrapper">
              {/* <div className="d-block">
                <a href="https://careers.qbatch.com/jobs">
                <Button text="Explore All Jobs" className="ms-auto"/>
                </a>
              </div> */}
              <Row>
                <div id='freshteam-widget'></div> 

                {/* {CareersData.map((card, index) => (
                  <Col md={6} key={index} className="inner-card">
                    <div className="wrapper">
                      <h3 className="card-heading text-h4">{card.jobTitle}</h3>
                      <div className="location-wrapper">
                        <img src="/location-icon.svg" alt="Location Icon" />
                        <span className="location">{card.location}</span>
                      </div>
                      <div className="project-tags d-flex">
                        {card.tags.slice(0, 3).map((tag, tagIndex) => (
                          <div key={tagIndex} className="tag">
                            {tag.length > 11 ? tag.substring(0, 11) + "..." : tag}
                          </div>
                        ))}
                        {card.tags.length > 3 && <div className="remaining-tags">+{card.tags.length - 3}</div>}
                      </div>
                      <div className="bottom-wrapper">
                        <span className="time">Posted 1 hour ago</span>
                        <PrimaryButton text=" Explore More" />
                      </div>
                    </div>
                  </Col>
                ))} */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </CareerWrapper>
  );
}

export default Index;
