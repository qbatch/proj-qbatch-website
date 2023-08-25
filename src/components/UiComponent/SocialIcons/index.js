import React from "react";

import SocialWrapper from "./style";

const socialIcons = [
  {
    img: "/facebook",
    to: "https://www.google.com",
  },
  {
    img: "/instagram",
    to: "/",
  },
  {
    img: "/linkedin",
    to: "/",
  },
  {
    img: "/twitter",
    to: "/",
  },
  {
    img: "/behance",
    to: "/",
  },
  {
    img: "/youtube",
    to: "/",
  },
];

const Index = () => {
  return (
    <SocialWrapper>
      <div className="d-flex flex-wrap social">
        {socialIcons.map((item, ind) => (
          <a href={item.to}>
            <div className={`social__${item.img.replace("/", "")}`} key={ind}>
              <img src={`${item.img}-icon.svg`} alt={item.img} />
            </div>
          </a>
        ))}
      </div>
    </SocialWrapper>
  );
};

export default Index;