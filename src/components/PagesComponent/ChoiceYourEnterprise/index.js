import React, { lazy } from "react";
import { navigate } from 'gatsby'
import { Col, Row } from "react-bootstrap";

import ChoiceEnterpriseWrapper from "./style";

const Container  = lazy(() => import("../../UiComponent/Container"));
const Button  = lazy(() => import("../../UiComponent/Button"));

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
