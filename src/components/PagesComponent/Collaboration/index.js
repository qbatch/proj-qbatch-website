import React, { lazy } from "react";
// import { BsArrowRight } from "react-icons/bs";

import CollaborationWrapper from "./style";

const Button  = lazy(() => import("../../../components/UiComponent/Button"));
const Container  = lazy(() => import("../../UiComponent/Container"));

const Index = ({ headingClass, paragraph, expertiseData, heading, largeHeading, button }) => {
  const experties = expertiseData || [
    {
      img: '/time-clock.svg',
      title: "Time and Material",
      description:
        "Only pay for the time and quality resources spent on the project.",
    },
    {
      img: '/fixed-scope.svg',
      title: "Fixed Scope Product Development",
      description:
        "Pull down barriers like compromised quality and slow project delivery under a fixed budget.",
    },
    {
      img: '/dev-team.svg',
      title: "Hire Dedicated Development Team ",
      description:
        "Leverage your global footprint with Qbatch’s self-driven team of software developers.",
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
                      <img src={list.img} alt={list.title} loading="lazy" width={72} height={72} />
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
        {button &&
          <div className='d-flex justify-content-center pt-5'>
            <Button className="mt-5" onClick={() => navigate('/contact')} text="Start Your Project" />
          </div>
        }
      </Container>
    </CollaborationWrapper>
  )
}

export default Index;
