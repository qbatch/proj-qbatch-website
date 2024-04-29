import React from "react";
import { navigate } from "gatsby";
import moment from "moment/moment";

import Button from "../../UiComponent/Button";
import WeCanHelp from "../../PagesComponent/WeCanHelp";
import NewsRoom from "../../PagesComponent/NewsRoom";
import DeliveredToInbox from "../../PagesComponent/DeliveredToInbox";
import BlogCards from "../../PagesComponent/BlogCards";
import { ReadingTime } from "../../../constants/Utils";

import { BlogAllWrapprt, InnerBannerWrapper } from "./style";

const index = ({ data }) => {
  const blogBannerData = data.filter((item) => item.bannerBlog === true);
  return (
    <BlogAllWrapprt>
      {blogBannerData
        .slice(0, 1)
        .reverse()
        .map((item, ind) => (
          <InnerBannerWrapper key={ind}>
            <div className="blog-badge blog-badge-main">Blog</div>
            <div>
              <img className="blog-image" src={item.blogImg?.localFile.url} />
              <div className="blog-wrapper">
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
                  {item.blogTags && (
                    <div className="blog-badge">
                      {item.blogTags?.strapi_json_value[0]}
                    </div>
                  )}
                  <div className="timer">
                    <img src="/timer.svg" alt="timer" />
                    <div>
                      <ReadingTime
                        description={item.blogDescription?.data.blogDescription}
                      />{" "}
                      Minutes Read
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                  <div
                    className="author-name pointer"
                    onClick={() => {
                      navigate(`/authors/${item?.user?.username}`, {
                        state: { slug: item.seo.slug },
                      });
                    }}
                  >
                    <span>
                      {" "}
                      <img
                        src={item?.user?.image?.localFile?.url || "/avatar.svg"}
                        width="24px"
                        height="24px"
                        alt="no-user"
                      />{" "}
                      {item.user?.name || "No User"}
                    </span>
                  </div>
                  <span>
                    {moment(item.publishedAt).format("DD MMMM, YYYY")}
                  </span>
                  <Button
                    text="Explore More"
                    className="header-btn"
                    onClick={() => {
                      navigate(`/blog${item.seo.slug}`, {
                        state: { blogId: item.id },
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </InnerBannerWrapper>
        ))}

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
        isFavorite={true}
      />
      <NewsRoom />
      <DeliveredToInbox />
    </BlogAllWrapprt>
  );
};

export default index;
