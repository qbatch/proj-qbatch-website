import React from "react";

import { CgScrollH } from "react-icons/cg";

import Container from "../../../components/UiComponent/Container";
import Qbatch from "../../../../static/logo-qbatch.svg";
import {   dataColumn1, dataColumn2, dataColumn3, dataColumn4 } from '../../../constants/index'
import { SoftwareDevelopersWrapper } from "./style";

const SoftwareDevelopers = () => {


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
          <img src={Qbatch} alt="Qbatch" loading="lazy" />
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
