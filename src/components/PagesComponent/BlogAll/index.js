import React from "react";

import Button from "../../UiComponent/Button";
import WeCanHelp from "../../PagesComponent/WeCanHelp";
import NewsRoom from "../../PagesComponent/NewsRoom";
import DeliveredToInbox from "../../PagesComponent/DeliveredToInbox";
import BlogCards from "../../PagesComponent/BlogCards";

import BlogAllWrapprt from "./style";
import { navigate } from "gatsby";

const index = ({ data }) => {
  return (
    <BlogAllWrapprt>
      <div className="inner-banner">
        <div className="full-flex">
          <div className="blog-badge">Blog</div>
        </div>
        <div>
          <div className="blog-title">
            <h2>Blog Title will come here blog Title here.</h2>
            <span>
              Blog description in maximum two lines will come here. Blog
              description in max two lines will come here. Blog description in
              maximum two lines will come here. Blog description in maximum two
              lines will come here.{" "}
            </span>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <div className="blog-badge">E-Commerce</div>
            <div className="timer">
              <img src="/timer.svg" alt="timer" />
              <span>5 Minutes Read</span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
            <div className="author-name">
              <span>Author Name Here</span>
              <span>23 June, 2023</span>
            </div>
              <Button
                text="Explore More"
                className="header-btn blog-banner-btn"
                onClick={()=> navigate("/blogDetails")}
              />
          </div>
        </div>
      </div>
      <BlogCards
        heading="Latest Stories"
        isBtn={true}
        isSlice={true}
        blogInner={true}
        data={data}
      />
      <WeCanHelp />
      <BlogCards
        heading="Editor’s Picks"
        isBtn={true}
        isSlice={true}
        blogInner={true}
        data={data}
      />
      <NewsRoom />
      <DeliveredToInbox />
    </BlogAllWrapprt>
  );
};

export default index;
