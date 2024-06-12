import React from "react";

import SocialWrapper from "./style";

const Index = (props) => {
  const { socialIcons } = props;
  return (
    <SocialWrapper>
      <div className="d-flex social">
        {socialIcons?.map((item, ind) => (
          <a href={item.to} target="_blank" rel="noreferrer">
            <div className={`${item.img.replace('/', '')}_icon`} key={ind}>
              <img src={`${item.img}_icon.svg`} alt={item.img} width="24px" height="24px" />
            </div>
          </a>
        ))}
      </div>
    </SocialWrapper>
  )
}

export default Index;
