import React from "react";
import { navigate } from "gatsby";
import moment from "moment/moment";

import Button from "../../UiComponent/Button";
import WeCanHelp from "../../PagesComponent/WeCanHelp";
import NewsRoom from "../../PagesComponent/NewsRoom";
import DeliveredToInbox from "../../PagesComponent/DeliveredToInbox";
import BlogCards from "../../PagesComponent/BlogCards";
import { ReadingTime } from "../../../constants/Utils";

import { BlogAllWrapprt, InnerBannerWrapper } from './style'

const index = ({ data }) => {
  const blogBannerData = data.filter((item) => item.bannerBlog === true);
  return (
    <BlogAllWrapprt>
      {blogBannerData
        .slice(0, 1)
        .reverse()
        .map((item, ind) => (
          <InnerBannerWrapper key={ind} backgroundImage="/blog-main-banner.svg">
            <div className="full-flex mb-5">
              <div className="blog-badge">Blog</div>
            </div>
            <div>
              <div className="blog-title">
                <h2>{item.blogTitle}</h2>
                <div className="banner-desc">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.blogDescription?.data.blogDescription,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap gap-3">
                <div className="blog-badge">{item.blogTags?.strapi_json_value[0]}</div>
                <div className="timer">
                  <img src="/timer.svg" alt="timer" />
                  <span>
                    <ReadingTime description={item.blogDescription?.data.blogDescription} /> Minutes Read
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                <div className="author-name">
                  <span>{item.user.username}</span>
                  <span>{moment(item.publishedAt).format('DD MMMM, YYYY')}</span>
                </div>
                <Button
                  text="Explore More"
                  className="header-btn blog-banner-btn"
                  onClick={() => {
                    navigate(`/blog${item.seo.slug}`, {
                      state: { blogId: item.id },
                    })
                  }}
                />
              </div>
            </div>
          </InnerBannerWrapper>
        ))}

      <BlogCards heading="Latest Stories" isBtn={true} isSlice={true} blogInner={true} data={data} />
      <WeCanHelp />
      <BlogCards heading="Editor’s Picks" isBtn={true} isSlice={true} blogInner={true} data={data} isFavorite={true} />
      <NewsRoom />
      <DeliveredToInbox />
    </BlogAllWrapprt>
  )
};

export default index;
