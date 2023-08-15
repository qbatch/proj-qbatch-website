import React from "react";
import { Col, Row } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import CareerWrapper from "./style";

const CareersData = [
  {
    jobTitle: "Job Title 1",
    location: "Onsite, Lahore",
    tags: ["Chip/Label", "RubyOnRails", "Django", "nice"],
  },
  {
    jobTitle: "Job Title 2",
    location: "Onsite, Lahore",
    tags: ["Chip/Label", "React", "Node.js", "nice", "nice-2"],
  },
  // Add more card objects as needed
];
const Index = () => {
  return (
    <CareerWrapper>
      <Container>
        <Row className="justify-content-between">
          <Col xl={4} lg={8}>
            <h2 className="heading">Careers</h2>
            <h4 className="underline-heading">Join Us!</h4>
            <p className="paragraph">We believe our strength is derived from the brains and experiences of a like-minded community of experts. Qbatch is a workplace where you are invited to reach your full potential without any discrimination. Let’s achieve big things while having fun!</p>
          </Col>
          <Col xxl={6} xl={8}>
            <div className="cards-wrapper">
            <div className="d-block">
              <Button text="Explore All Jobs" className="ms-auto" />
            </div>
            <Row>
              {CareersData.map((card, index) => (
                <Col md={6} key={index} className="inner-card">
                  <div className="wrapper">
                    <h4 className="card-heading">{card.jobTitle}</h4>
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
                      {card.tags.length > 3 && (
                        <div className="remaining-tags">
                          +{card.tags.length - 3} 
                        </div>
                      )}
                    </div>
                    <div className="bottom-wrapper">
                      <span className="time">Posted 1 hour ago</span>
                      <Button text="Explore More"/>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            </div>

          </Col>
        </Row>
      </Container>
    </CareerWrapper>
  )
}

export default Index;