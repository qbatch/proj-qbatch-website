import React from "react";
import { Col, Row } from "react-bootstrap";
import { navigate } from "gatsby";
import PrimaryButton from "../../UiComponent/PrimaryButton";
import { TimeAgo, ReadingTime } from "../../../constants/Utils";

import BlogCardsWrapper from "./style";

const Index = (props) => {
  const { heading, isBtn, isSlice, blogInner, data, isFavorite, upperHeading } = props;
  const categoryData = data?.filter(
    (item) => item.category.categoryName === heading
  );
  const editorPicksData = data?.filter((item) => item.favorite === true);

  const BlogPost = ({ card, ind, onClick }) => {
    const customDate = new Date(card.publishedAt)
    return ind === 0 ? (
      <Col md={12}>
        <div className="inner first-card" key={ind}>
          <Row>
            <Col md={6}>
              <div className="card-img">
                <img src={card?.blogImg?.localFile.url} alt={card.blogTitle} />
              </div>
            </Col>
            <Col md={6}>
              <div className="inner-content">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="blog-badge">Blog</div>
                  <span className="hours">
                    <TimeAgo customDate={customDate} />
                  </span>
                </div>
                <h3
                  className="pointer"
                  onClick={() => {
                    navigate(`/blog${card.seo.slug}`, {
                      state: { blogId: card.id },
                    })
                  }}
                >
                  {card.blogTitle}
                </h3>
                <div className="descripiton">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: card.blogDescription?.data.blogDescription,
                    }}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <span className="blog-badge">{card.blogTags.strapi_json_value[0]}</span>
                  <div className="timer">
                    <img src="/timer-blue.svg" alt="timer" />
                    <span>
                      <ReadingTime description={card.blogDescription?.data.blogDescription} /> Minutes Read
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-0 read-time">
                  <span>{card?.user?.username}</span>
                  <PrimaryButton
                    text="Explore More"
                    fontSize="16px"
                    color="#0054A6"
                    onClick={() => {
                      navigate(`/blog${card.seo.slug}`, {
                        state: { blogId: card.id },
                      })
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    ) : (
      <Col md={6}>
        <div className="inner" key={ind}>
          <div className="card-img">
            <img src={card.blogImg.localFile.url} alt={card.blogTitle} />
            <div className="d-flex align-items-center justify-content-between">
              <div className="blog-badge">Blog</div>
              <span className="hours">
                <TimeAgo customDate={customDate} />
              </span>
            </div>
          </div>
          <div className="inner-content">
            <p
              className="inner-title pointer"
              onClick={() => {
                navigate(`/blog${card.seo.slug}`, {
                  state: { blogId: card.id },
                })
              }}
            >
              {card.blogTitle}
            </p>
            <div className="blog-badge">{card.blogTags.strapi_json_value[0]}</div>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 read-time">
              <span>{card?.user?.username}</span>
              <div className="timer">
                <img src="/timer-blue.svg" alt="timer" />
                <span>
                  <ReadingTime description={card.blogDescription?.data.blogDescription} /> Minutes Read
                </span>
              </div>
            </div>
            <PrimaryButton
              text="Explore More"
              fontSize="16px"
              onClick={() => {
                navigate(`/blog${card.seo.slug}`, {
                  state: { blogId: card.id },
                })
              }}
            />
          </div>
        </div>
      </Col>
    )
  }

  return (
  <>
    <BlogCardsWrapper blogInner={blogInner}>
      <div className="d-flex align-items-center justify-content-between blog-heading">
        {upperHeading && <h2>{props.upperHeading}</h2>}
        <h2>{heading}</h2>
        {isBtn && <PrimaryButton text="Explore More" />}
      </div>
      {data?.length === 0 ? (
        'No Data Found'
      ) : (
        <Row>
          {data &&
          (isFavorite
            ? editorPicksData
            : isSlice
            ? (heading && !blogInner ? categoryData : data)?.slice(0, 3)
            : heading && !blogInner
            ? categoryData
            : data
          )
            .slice(0)
            .reverse()
            .map((card, ind) => {
              return <BlogPost card={card} ind={ind} />
            })} 
      
        </Row>
      )}
    </BlogCardsWrapper>
    </>
  )
};

export default Index;
