import React from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import ChoiceEnterpriseWrapper from "./style";
import { Col, Row } from "react-bootstrap";

const index = (props) => {
  const { heading, desc1, desc2, listData, isBtn, className } = props;
  return (
    <ChoiceEnterpriseWrapper className={className}>
      <Container>
        <div className="choice-heading">
          <h2>{heading}</h2>
          {desc1 && <p>{desc1}</p>}
          {desc2 && <p>{desc2}</p>}
        </div>
        <Row className="equal-height-row">
          {listData.map((item, ind) => (
            <Col lg={6}>
              <div
                className="d-flex align-items-start gap-4 choice-list"
                key={ind}
              >
                <img src={item.icon} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
          {isBtn && (
            <div className="choice-btn">
              <Button text="Got Something in Mind?" />
            </div>
          )}
        </Row>
      </Container>
    </ChoiceEnterpriseWrapper>
  );
};

export default index;
