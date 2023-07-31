import React from "react";
import CollaborationWrapper from "./style";
import { BsArrowRight } from "react-icons/bs";


import TimeIcon from "../../../assets/images/icons/time-clock.svg";
import FixedScopeIcon from "../../../assets/images/icons/fixed-scope.svg";
import DevTeamIcon from "../../../assets/images/icons/dev-team.svg";

import Container from '../../UiComponent/Container'

const experties = [
  {
    img: TimeIcon,
    title: "Time and Material",
    description: "We empower you to choose our Time and Material model where you only pay for the time and quality resources spent on the project.",
  },
  {
    img: FixedScopeIcon,
    title: "Fixed Scope Product Development",
    description: "Pull down barriers like compromised quality and slow project delivery with our Fixed Scope Product Development model under a fixed budget.",
  },
  {
    img: DevTeamIcon,
    title: "Hire Dedicated Development Team ",
    description: "Leverage your global footprint in the rising techno-verse with Qbatch’s self-driven, smart, and skilled team of software developers.",
  },
];
const Index = () => {
  
  return (
    <CollaborationWrapper>
      <Container>
        <div className="collaboration-inn">
          <div className="section-heading">
            <h1>Collaboration Models For Everlasting Partnerships</h1>
            <p>Our unique "Happy Paths" approach is a predictive and transparent way to implement your idea. Choose what suits you best</p>
          </div>
          <div className="collaboration-content">
          {experties.map((list, index) => {
              return (
                <div className="d-flex skill-section align-items-center justify-content-between ">
                  <div className="d-flex add-gap align-items-center">
                    <div className="list-icon">
                      <list.img />
                    </div>
                    <div>
                      <h4 className="title">{list.title}</h4>
                      <p>{list.description}</p>
                    </div>
                  </div>
                  <div className="arrow-box">
                    <BsArrowRight />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </CollaborationWrapper>
  );
};

export default Index;
