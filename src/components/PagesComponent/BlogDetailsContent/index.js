import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BsReddit } from "react-icons/bs";
import { navigate } from "gatsby";
import SocialIcons from "../../UiComponent/SocialIcons";
import Container from "../../UiComponent/Container";
import PrimaryButton from "../../UiComponent/PrimaryButton";
import Button from "../../../components/UiComponent/Button";
import BlogCardsWrapper from "../BlogCards/style";
import { Queries } from "../../../constants/queries";
import { ReadingTime, TimeAgo } from "../../../constants/Utils";

import ContentWrapper from "./style";

function App({ data, path }) {
  const [activeSection, setActiveSection] = useState(0);
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(0);
  const [headings, setHeadings] = useState([]);
  const blogArticle = Queries();
  const blogLikedData = blogArticle.allStrapiArticle.nodes.filter(
    (item) => item.blogTitle !== data?.blogTitle,
  );
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("#contentContainer h2");
      const scrollPosition = window.scrollY + 100;

      headings.forEach((heading, index) => {
        const offsetTop = heading.offsetTop;
        const offsetBottom = offsetTop + heading.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveHeadingIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const addUniqueIdsToHeadings = () => {
      const contentContainer = document.getElementById("contentContainer");

      if (contentContainer) {
        const headings = contentContainer.querySelectorAll("h2");

        headings.forEach((heading, index) => {
          const wrapperDiv = document.createElement("div");
          wrapperDiv.classList.add("heading-wrapper");

          const emptyDiv = document.createElement("div");
          const headingText = heading.textContent
            .trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, "") // Remove any characters that are not word characters, spaces, or hyphens
            .replace(/\s+/g, "-"); // Replace spaces with hyphens

          const headingId = `${headingText}`;
          const emptyDivId = `${headingText}`;

          wrapperDiv.appendChild(emptyDiv);
          emptyDiv.id = emptyDivId; // Set ID for empty div

          const clonedHeading = heading.cloneNode(true);
          clonedHeading.id = headingId;

          wrapperDiv.appendChild(clonedHeading);

          heading.parentNode.replaceChild(wrapperDiv, heading);
        });
      }
    };

    addUniqueIdsToHeadings();
  }, [data]);

  useEffect(() => {
    const extractHeadings = () => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data?.blogDescription?.data.blogDescription;

      const h2Elements = tempDiv.querySelectorAll("h2");
      const extractedHeadings = Array.from(h2Elements).map((h2, index) => {
        const headingText = h2.textContent;
        return {
          title: headingText,
          content: (
            <ContentWrapper key={index} id={`section${index + 1}`}>
              <h2>{headingText}</h2>
            </ContentWrapper>
          ),
        };
      });

      setHeadings(extractedHeadings);
    };

    extractHeadings();
  }, [data]);

  const socialIcons = [
    {
      img: "/facebook",
      to: `https://www.facebook.com/sharer.php?u=https://qbatch.com/blog${path}`,
    },
    {
      img: "/twitter",
      to: `https://twitter.com/intent/tweet?url=https://qbatch.com/blog${path}`,
    },
    {
      img: "/linkedin",
      to: `https://www.linkedin.com/shareArticle?url=https://qbatch.com/blog${path}`,
    },
    {
      img: "/reddit",
      to: `https://reddit.com/submit?url=https://qbatch.com/blog${path}`,
    },
  ];

  return (
    <ContentWrapper>
      <div className="d-lg-flex">
        <div className={`side-scroll`}>
          <span className="table-content-header">Table of Content</span>
          <div className="side-scroll-content">
            <ol>
              {headings.map((list, index) => (
                <React.Fragment key={index}>
                  <li>
                    <a
                      href={`#${list.title
                        .trim()
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, "")
                        .replace(/\s+/g, "-")}`}
                      className="title"
                    >
                      {list.title}
                    </a>
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </div>
        </div>

        <div className="content-section content">
          <Container className="ps-lg-5">
            <Row>
              <Col xl={8} sm={12}>
                <div className="section inner-content">
                  <div
                    id="contentContainer"
                    className="paragraph"
                    // dangerouslySetInnerHTML={{
                    //   __html: data?.blogDescription?.data.blogDescription,
                    // }}
                  />
                </div>
                <div className="social-links d-flex gap-4">
                  <span className="title">Share</span>
                  <SocialIcons socialIcons={socialIcons} />
                </div>
                <div className="divider">
                  <hr />
                </div>
                <div className="might-section">
                  <h3>You might also like…</h3>
                  <BlogCardsWrapper>
                    <Row>
                      {blogLikedData
                        .slice(0, 2)
                        .reverse()
                        .map((card, ind) => {
                          const customDate = new Date(card?.publishedAt);
                          return (
                            <Col xl={6} key={ind}>
                              <div className="inner">
                                <div className="card-img">
                                  <img
                                    src={card.blogImg?.localFile.url}
                                    alt={card.blogTitle}
                                  />
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="blog-badge">Blog</div>
                                    <span className="hours">
                                      <TimeAgo customDate={customDate} />
                                    </span>
                                  </div>
                                </div>
                                <div className="inner-content">
                                  <p className="blog-title">{card.blogTitle}</p>
                                  {data?.blogTags && (
                                    <div className="d-flex gap-2">
                                      {data?.blogTags?.strapi_json_value.map(
                                        (tag, ind) => (
                                          <div className="blog-badge" key={ind}>
                                            <span>{tag}</span>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 read-time">
                                    <div
                                      className="d-flex gap-2 pointer"
                                      onClick={() => {
                                        navigate(
                                          `/authors/${card?.user?.username}`,
                                          {
                                            state: { slug: card.seo.slug },
                                          },
                                        );
                                      }}
                                    >
                                      <img
                                        src={
                                          card?.user?.image.localFile.url ||
                                          "/avatar.svg"
                                        }
                                        width="24px"
                                        height="24px"
                                        alt="no-user"
                                      />
                                      <span>
                                        {card?.user?.name || "No User"}
                                      </span>
                                    </div>
                                    <div className="timer">
                                      <img src="/timer-blue.svg" alt="timer" />
                                      <span>
                                        <ReadingTime
                                          description={
                                            card?.blogDescription?.data?.blogDescription
                                          }
                                        />{" "}
                                        Minutes Read
                                      </span>
                                    </div>
                                  </div>
                                  <PrimaryButton
                                    text="Explore More"
                                    fontSize="16px"
                                    onClick={() => {
                                      navigate(`/blog${card.seo.slug}`, {
                                        state: { blogId: card.id },
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                            </Col>
                          );
                        })}
                    </Row>
                  </BlogCardsWrapper>
                </div>
              </Col>
              <Col xl={4} sm={12}>
                <ContentWrapper>
                  <div
                    className="author-name"
                    onClick={() => {
                      navigate(`/authors/${data?.user?.username}`, {
                        state: { slug: data.seo.slug },
                      });
                    }}
                  >
                    <div className="avatar-box d-flex flex-wrap align-items-center">
                      <img
                        className="avatar-image"
                        width="72px"
                        height="72px"
                        src={data?.user?.image?.localFile?.url || "/avatar.svg"}
                        alt="no-avartar"
                      />
                      <span>{data?.user?.name}</span>
                    </div>
                    <span className="title">{data?.user?.description}</span>
                    <div className="d-flex justify-content-between mt-32">
                      <ul className="d-flex social-link ps-0">
                        {data?.user?.Socials.map((social, index) => (
                          <li key={index}>
                            <a
                              href={social.socialLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {social.socialPlatform === "linkedin" && (
                                <img src="/linkedin.svg" alt="LinkedIn" />
                              )}
                              {social.socialPlatform === "twitter" && (
                                <img src="/twitter.svg" alt="Twitter" />
                              )}
                              {social.socialPlatform === "medium" && (
                                <img src="/medium.svg" alt="Medium" />
                              )}
                              {social.socialPlatform === "instagram" && (
                                <img src="/instagram.svg" alt="Instagram" />
                              )}
                              {social.socialPlatform === "facebook" && (
                                <img src="/facebook.svg" alt="Facebook" />
                              )}
                              {social.socialPlatform === "reddit" && (
                                <img src="/reddit.svg" alt="Reddit" />
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <img
                          src="/author-name-arrow.svg"
                          className="pointer"
                          alt="no-arrow"
                          onClick={() => {
                            navigate(`/authors/${data?.user?.username}`, {
                              state: { slug: data.seo.slug },
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="subsribe-button">
                    <h2>
                      Get the top stories like these delivered to your inbox
                    </h2>
                    <div className="subscribe-email">
                      <img src="/email.svg" alt="email" />
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div>
                      <Button className="secondary-btn" text="We Can Help" />
                    </div>
                  </div>
                </ContentWrapper>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default App;