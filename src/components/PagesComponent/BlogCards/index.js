import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PrimaryButton from "../../UiComponent/PrimaryButton";

import BlogCardsWrapper from "./style";
import { Col, Row } from "react-bootstrap";
import { navigate } from "gatsby";

const index = (props) => {
  const { heading, isBtn, isSlice, blogInner, data } = props;
  const blogQuery = useStaticQuery(graphql`
  query blogQuery {
    allStrapiBlog {
      nodes {
        article {
          blogTitle
          blogTags {
            strapi_json_value
          }
          blogDescription {
            data {
              blogDescription
            }
          }
          blogImage {
            localFile {
              url
            }
          }
        }
        category {
          categoryName
        }
      }
    }
  }
    `);
    const blogData = blogQuery.allStrapiBlog.nodes;
    console.log(blogData,"iugeB;IOwhekl")
  return (
    <BlogCardsWrapper blogInner={blogInner}>
      <div className="d-flex align-items-center justify-content-between blog-heading">
        <h2>{heading}</h2>
        {isBtn && <PrimaryButton text="Explore More" />}
      </div>
      <Row>
        {(isSlice ? blogData?.slice(0, 3) : blogData).map((card, ind) =>
          ind === 0 ? (
            <Col md={12}>
              <div className="inner first-card" key={ind}>
                <Row>
                  <Col md={6}>
                    <div className="card-img">
                      <img src={card.article.blogImage.localFile.url} alt={card.article.blogTitle} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="inner-content">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="blog-badge">Blog</div>
                        <span className="hours">17 Hours ago</span>
                      </div>
                      <h3>{card.article.blogTitle}</h3>
                      <span className="descripiton">{card.article.blogDescription.data.blogDescription}</span>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <span className="blog-badge">{card.article.blogTags.strapi_json_value[0]}</span>
                        <div className="timer">
                          <img src="/timer-blue.svg" alt="timer" />
                          <span>5 Minutes Read</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 read-time">
                        <span>Author Name Here</span>
                        <PrimaryButton
                          text="Explore More"
                          fontSize="16px"
                          color="#0054A6"
                          onClick={() => navigate("/blogDetails")}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ) : (
            // <Col md={6}>
            //   <div className="inner" key={ind}>
            //     <div className="card-img">
            //       <img src={card.img} alt={card.title} />
            //       <div className="d-flex align-items-center justify-content-between">
            //         <div className="blog-badge">Blog</div>
            //         <span className="hours">17 Hours ago</span>
            //       </div>
            //     </div>
            //     <div className="inner-content">
            //       <p>{card.title}</p>
            //       <div className="blog-badge">{card.category}</div>
            //       <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 read-time">
            //         <span>Author Name Here</span>
            //         <div className="timer">
            //           <img src="/timer-blue.svg" alt="timer" />
            //           <span>5 Minutes Read</span>
            //         </div>
            //       </div>
            //       <PrimaryButton
            //         text="Explore More"
            //         fontSize="16px"
            //         onClick={() => navigate("/blogDetails")}
            //       />
            //     </div>
            //   </div>
            // </Col>
            ""
          )
        )}
      </Row>
    </BlogCardsWrapper>
  );
};

export default index;
