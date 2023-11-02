import React from "react";
import { Row, Col } from "react-bootstrap";
import { peopleFirstData } from "../../../constants";

import Container from "../../UiComponent/Container";

import PeopleFirstWrapper from "./style";

const Index = () => {
  return (
    <PeopleFirstWrapper>
      <Container>
        <h2 className="main-heading">Happily Making Industries People-First</h2>
        <p className="paragraph">You are the industry leader of today and tomorrow. Let us help you become unstoppable with versatile expertise and wide-spectrum technologies.</p>
        <div className="counter-wrapper">
          <Row>
            {peopleFirstData.map((data, ind) => (
              <Col lg={3} md={4} xs={6} key={ind} className="achievements-col">
                  <img src={data.icon} alt={data.symbol} className="icon" />
                <p className="text-h4">{data.desc}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </PeopleFirstWrapper>
  );
};

export default Index;
