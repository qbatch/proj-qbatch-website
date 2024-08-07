import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { navigate, Link } from "gatsby";

import { ReadingTime } from "../../../constants/Utils";

import PrimaryButton from "../../UiComponent/PrimaryButton";
import Button from "../../UiComponent/Button";

import BlogCardsWrapper from "./style";

const Index = (props) => {
  const { heading, isBtn, isSlice, blogInner, data, isFavorite, upperHeading, padding, isLoadMoreBtn } = props;
  const [loadMore, setLoadMore] = useState(false);

  const categoryData = data?.filter(
    (item) => item.category?.categoryName === heading
  );
  const editorPicksData = data?.filter((item) => item.favorite === true);

  const BlogPost = ({ card, ind }) => {
    const customDate = new Date(card.publishedAt)
    return (
      <Col lg={4} md={6} className="d-flex flex-column card-main">
        <div className="inner flex-1" key={ind}>
          <div className="card-img">
            <img src={card.blogImg?.localFile.url} alt={card.blogTitle} title={card.blogTitle} loading="lazy" />
          </div>
          <div className="inner-content">
            {card.blogTags && <div className="blog-badge">{card.blogTags?.strapi_json_value[0]}</div>}
            <Link to={`/blog/${card.slug}/`} state={{ blogId: card.id }}>
              <p
                className="inner-title pointer"
              >
                {card.blogTitle}
              </p>
            </Link>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 read-time">
              <div className="d-flex align-items-center gap-2 pointer"
                onClick={() => {
                  navigate(`/authors/${card?.user?.username}/`, {
                    state: { slug: card.seo.slug },
                  })
                }}>
                <img className="avatar-sm-img" src={card?.user?.image.localFile.url || '/avatar.svg'} width="24px" height="24px" alt="no-user" />
                <span>{card?.user?.name || "No User"}</span>
              </div>
              <div className="timer">
                <img src="/timer-blue.svg" alt="timer" title="timer" loading="lazy" />
                <span>
                  <ReadingTime description={card.blogDescription?.data?.blogDescription} /> Minutes Read
                </span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }

  return (
    <>
      <BlogCardsWrapper padding={padding}>
        <div className="d-flex align-items-center justify-content-between blog-heading">
          {upperHeading && <h2>{props.upperHeading}</h2>}
          <h2>{heading}</h2>
          {isBtn && <PrimaryButton text="Explore More" />}
        </div>
        {data?.length === 0 ? (
          <span className="text-h2 no-data-text">No Data Found</span>
        ) : (
          <Row>
            {data && (() => {
              let displayData = isFavorite ? editorPicksData : 
              (heading && !blogInner) ? categoryData : data;
              
              displayData = [...displayData].reverse();
              
              if (isSlice) {
                displayData = displayData.slice(0, 3);
              } else if (!loadMore) {
                displayData = displayData.slice(0, 6);
              }
              
              return displayData.map((card, ind) => (
                <BlogPost key={card.id || ind} card={card} ind={ind} />
              ));
            })()}
          </Row>
        )}
        {isLoadMoreBtn && data.length > 3 && 
          <div className="d-flex justify-content-center load-more-btn">
            <Button 
              text={loadMore ? "Show Less" : "Load More"} 
              onClick={() => setLoadMore(!loadMore)} 
            />
          </div>
        }
      </BlogCardsWrapper>
    </>
  )
};

export default Index;
