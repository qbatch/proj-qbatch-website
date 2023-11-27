import React from "react";

import SocialWrapper from "./style";

const socialIcons = [
  {
    img: "/facebook",
    to: "https://www.facebook.com/qbatch/",
  },
  {
    img: "/instagram",
    to: "https://www.instagram.com/qbatch/",
  },
  {
    img: "/linkedin",
    to: "https://www.linkedin.com/company/qbatch/",
  },
  {
    img: "/twitter",
    to: "https://twitter.com/qbatchofficial",
  },
  {
    img: "/behance",
    to: "https://www.behance.net/ibrahimzahoor",
  },
  {
    img: "/youtube",
    to: "https://www.youtube.com/@qbatch6700",
  },
];

const Index = () => {
  return (
    <SocialWrapper>
      <div className="d-flex flex-wrap social">
        {socialIcons.map((item, ind) => (
          <a href={item.to} target="_blank" rel="noreferrer">
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
