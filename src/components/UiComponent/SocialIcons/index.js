import React from "react";

import SocialWrapper from "./style";

const Index = (props) => {
  const { socialIcons } = props;
  return (
    <SocialWrapper>
      <div className="d-flex flex-wrap social">
        {socialIcons?.map((item, ind) => (
          <a href={item.to} target="_blank" rel="noreferrer">
            <div className={`social__${item.img.replace('/', '')}`} key={ind}>
              <img src={`${item.img}-icon.svg`} alt={item.img} width="24px" height="24px" />
            </div>
          </a>
        ))}
      </div>
    </SocialWrapper>
  )
}

export default Index;
