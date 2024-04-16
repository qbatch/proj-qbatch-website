import React from "react";

import { CgScrollH } from "react-icons/cg";

import Container from "../../components/UiComponent/Container";
import Qbatch from "../../../static/logo-qbatch.svg";
import { SoftwareDevelopersWrapper } from "./style";

const SoftwareDevelopers = () => {
  const dataColumn1 = [
    {
      text: "Factors",
    },
    {
      text: "Dedicated Resources",
    },
    {
      text: "Hiring Time",
    },
    {
      text: "Resource Replacement Cost",
    },
    {
      text: "Talent Pool",
    },
    {
      text: "Start Your Project",
    },
    {
      text: "Recurring Training      ",
    },
    {
      text: "Cost of Training and Benefits",
    },
    {
      text: "Working Hours",
    },
    {
      text: "Agile Development ",
    },
    {
      text: "Quality Guarantee",
    },
    {
      text: "Communication",
    },
    {
      text: "Communication Channels",
    },
    {
      text: "Project Management ",
    },
    {
      text: "Delivery Speed",
    },
    {
      text: "Time Zone Availability",
    },
  ];
  const dataColumn2 = [
    {
      text: "Readily available",
    },
    {
      text: "Within 48 hours",
    },
    {
      text: "No Cost",
    },
    {
      text: "Full Access",
    },
    {
      text: "Within 24 hours",
    },
    {
      text: "Yes",
    },
    {
      text: "Free",
    },
    {
      text: "Full time ",
    },
    {
      text: "Always",
    },
    {
      text: "Yes",
    },
    {
      text: "Easy",
    },
    {
      text: "Your Choice",
    },
    {
      text: "On-demand",
    },
    {
      text: "Fast Track",
    },
    {
      text: "Yes",
    },
  ];
  const dataColumn3 = [
    {
      text: "In-house",
    },
    {
      text: "Yes",
    },
    {
      text: "5 - 8 weeks",
    },
    {
      text: "High Costs",
    },
    {
      text: "Limited Access",
    },
    {
      text: "2 - 3 weeks",
    },
    {
      text: "Sometimes",
    },
    {
      text: "$12k - $25k",
    },
    {
      text: "Full time",
    },
    {
      text: "Sometimes",
    },
    {
      text: "Yes",
    },
    {
      text: "Moderate",
    },
    {
      text: "Depends",
    },
    {
      text: "Paid",
    },
    {
      text: "Expected delays ",
    },
    {
      text: "Yes",
    },
  ];
  const dataColumn4 = [
    {
      text: "Freelance",
    },
    {
      text: "N/A",
    },
    {
      text: "1 -2  weeks ",
    },
    {
      text: "No Cost",
    },
    {
      text: "Limited Access",
    },
    {
      text: "2 - 3 weeks",
    },
    {
      text: "No",
    },
    {
      text: "Free",
    },
    {
      text: "Depends",
    },
    {
      text: "Sometimes",
    },
    {
      text: "Sometimes",
    },
    {
      text: "Medium",
    },
    {
      text: "Depends",
    },
    {
      text: "Paid",
    },
    {
      text: "Time-consuming ",
    },
    {
      text: "Depends",
    },
  ];

  return (
    <SoftwareDevelopersWrapper>
        <Container>
        <h2>Why Hire Qbatch’s Software Developers?</h2>
        <p>
          We’ve curated a detailed comparative analysis for you to make a smart
          decision.
        </p>
        <div className="table-base-overlay-wrapper">
        <div className="table-base-overlay">
        <CgScrollH className="scroll-icon-wrapper"/>
          <div className="column-ui-wrapper">
            {dataColumn1.map((item, index) => (
              <p key={index} className="item-wrapper">
                {item.text}
              </p>
            ))}
          </div>
          <div className="column-ui-wrapper second-column">
          <img src={Qbatch} />
            {dataColumn2.map((item, index) => (
                <p key={index} className="item-wrapper">{item.text}</p>
            ))}
          </div>
          <div className="column-ui-wrapper third-column">
            {dataColumn3.map((item, index) => (
              <p key={index} className="item-wrapper">
                {item.text}
              </p>
            ))}
          </div>
          <div className="column-ui-wrapper fourth-column">
            {dataColumn4.map((item, index) => (
              <p key={index} className="item-wrapper">
                {item.text}
              </p>
            ))}
          </div>
        </div>
        </div>
    </Container>
      </SoftwareDevelopersWrapper>
  );
};

export default SoftwareDevelopers;
