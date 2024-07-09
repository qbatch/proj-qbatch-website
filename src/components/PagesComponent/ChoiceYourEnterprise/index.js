import React from "react";
import { navigate } from 'gatsby'
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import ChoiceEnterpriseWrapper from "./style";
import { Col, Row } from "react-bootstrap";

const index = (props) => {
  const { heading, desc1, desc2, listData, isBtn, className, btnText, lg, headingClass,btnLink } = props;
  const buttonText = btnText || "Got Something in Mind?";
  const gridLg = lg || "6";
  const Link = btnLink || '/contact'
  return (
    <ChoiceEnterpriseWrapper className={className}>
      <Container>
        <div className={`choice-heading ${headingClass}`}>
          <h2>{heading}</h2>
          {desc1 && <p>{desc1}</p>}
          {desc2 && <p>{desc2}</p>}
        </div>
        <Row className="equal-height-row">
          {listData.map((item, ind) => (
            <Col lg={gridLg}>
              <div className="d-flex align-items-start gap-4 choice-list" key={ind}>
               {item.icon &&  <img src={item.icon} alt={item.title} />}
                <div>
                  <h3 className="text-h4">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
          {isBtn && (
            <div className="choice-btn">
              <Button text={buttonText} onClick={() => navigate(`${Link}`)} />
            </div>
          )}
        </Row>
      </Container>
    </ChoiceEnterpriseWrapper>
  )
};

export default index;
