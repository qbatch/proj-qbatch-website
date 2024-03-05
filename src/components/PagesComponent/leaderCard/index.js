import React from "react";
import { LeaderCardWrapper } from "./style";

const LeaderCard = (props) => {
    const { title, profile, designation,socialLink, aboutText } = props;
  return (
    <LeaderCardWrapper>
    <div className='team-wrapper'>
      <div className="inner-box-wrapper">
        <img className="img" src={profile} alt="CTO" />
        <div className="inner-box">
          <div className="inner-box-header">
            <h3 className="name">{title}</h3>
            <span>{designation}</span>
          </div>
          <div className="social">
            <a href={socialLink} target="_blank">
              <img src="/linkedin.svg" alt="linkedin" />
            </a>
          </div>
          <p className="paragraph">
           {aboutText}
          </p>
        </div>
      </div>
    </div>
    </LeaderCardWrapper>
  );
};

export default LeaderCard;
