import React from "react";
import CollaborationWrapper from "./style";
import { BsArrowRight } from "react-icons/bs";

import Container from "../../UiComponent/Container";
import TimeIcon from "../../../assets/images/icons/time-clock.svg";
import FixedScopeIcon from "../../../assets/images/icons/fixed-scope.svg";
import DevTeamIcon from "../../../assets/images/icons/dev-team.svg";

const Index = ({ headingClass, paragraph, expertiseData, heading, largeHeading }) => {
  const experties = expertiseData || [
    {
      img: TimeIcon,
      title: "Time and Material",
      description:
        "We empower you to choose our Time and Material model where you only pay for the time and quality resources spent on the project.",
    },
    {
      img: FixedScopeIcon,
      title: "Fixed Scope Product Development",
      description:
        "Pull down barriers like compromised quality and slow project delivery with our Fixed Scope Product Development model under a fixed budget.",
    },
    {
      img: DevTeamIcon,
      title: "Hire Dedicated Development Team ",
      description:
        "Leverage your global footprint in the rising techno-verse with Qbatch’s self-driven, smart, and skilled team of software developers.",
    },
  ];

  return (
    <CollaborationWrapper>
      <Container>
        <div className="collaboration-inn">
          <div className="section-heading">
            <h2 className={`heading ${largeHeading && 'text-h1'} ${headingClass}`}>{heading || 'Collaboration Models For Everlasting Partnerships'}</h2>
            <p>
              {paragraph ||
                'Our unique "Happy Paths" approach is a predictive and transparent way to implement your idea. Choose what suits you best'}
            </p>
          </div>
          <div className="collaboration-content">
            {experties.map((list, index) => {
              return (
                <div className="d-flex skill-section align-items-center justify-content-between" key={index}>
                  <div className="d-flex add-gap">
                    <div className="list-icon">
                      <list.img />
                    </div>
                    <div>
                      {headingClass === 'services-light' ? 
                      <span className="title fw-normal">{list.title}</span>
                      :
                      <span className="title text-h4">{list.title}</span>
                      }
                      <p>{list.description}</p>
                      
                    </div>
                  </div>
                  {/* <div className="arrow-box">
                    <BsArrowRight />
                  </div> */}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </CollaborationWrapper>
  )
}

export default Index;
