import React from "react";
import { navigate, Link } from "gatsby";
import { Col, Row } from "react-bootstrap";

import WeCanHelp from "../../PagesComponent/WeCanHelp";
import BlogCards from "../../PagesComponent/BlogCards";
import { ReadingTime } from "../../../constants/Utils";
import Container from "../../UiComponent/Container";
import Divider from "../../UiComponent/Divider";
import StartAProject from "../../PagesComponent/StartProject";

import { BlogAllWrapprt, InnerBannerWrapper } from "./style";

const stripHtmlTags = (html) => {
  return html.replace(/<[^>]*>?/gm, '');
};

const index = ({ data }) => {
  return (
    <BlogAllWrapprt>
      <Container>
        <h2 className="latest-heading">Latest Blog</h2>
        {data
          .slice(-1)
          .map((item, ind) => (
            <InnerBannerWrapper key={ind}>
              <Row>
                <Col lg={7}>
                  <img className="blog-image" src={item.blogImg?.localFile.url} />
                </Col>
                <Col lg={5}>
                  <div className="blog-wrapper">
                    {item.blogTags && (
                      <div className="blog-badge">
                        {item.blogTags?.strapi_json_value[0]}
                      </div>
                    )}
                    <div className="blog-title">
                      <Link to={`/blog/${item.seo.slug}/`} state={{ blogId: item.id }}>
                        <h2>{item.blogTitle}</h2>
                      </Link>
                      <div className="banner-desc">
                        <p>{stripHtmlTags(item.blogDescription?.data.blogDescription)}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap gap-3">
                      <div
                        className="author-name pointer"
                        onClick={() => {
                          navigate(`/authors/${item?.user?.username}/`, {
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
                            className="avatar-sm-img"
                          />{" "}
                          {item.user?.name || "No User"}
                        </span>
                      </div>
                      <div className="timer">
                        <img src="/timer.svg" alt="timer" width={16} height={16} />
                        <div>
                          <ReadingTime
                            description={item.blogDescription?.data.blogDescription}
                          />{" "}
                          Minutes Read
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </InnerBannerWrapper>
          ))}
      </Container>
      <Divider margin="64px 0" />
      <Container>
        <BlogCards
          heading="Popular Blogs"
          isSlice={true}
          blogInner={true}
          padding="0"
          data={data}
          isFavorite={true}
        />
      </Container>
      <Divider margin="64px 0" />
      <Container>
        <BlogCards
          heading="All Blogs"
          blogInner={true}
          data={data}
          padding="0"
          isLoadMoreBtn={true}
        />
      </Container>
      <WeCanHelp />
      <StartAProject />
    </BlogAllWrapprt>
  );
};

export default index;