import React, { useState, useEffect, useRef, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
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
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(-1);
  const [headings, setHeadings] = useState([]);
  const lastScrollPositionRef = useRef(0);
  const blogArticle = Queries();
  const blogLikedData = blogArticle.allStrapiArticle.nodes.filter(
    (item) => item.blogTitle !== data?.blogTitle
  );

  const handleScroll = useCallback(() => {
    const headingElements = document.querySelectorAll("#contentContainer h2");

    if (!headingElements.length) return; // Check if there are no heading elements

    const scrollPosition = window.scrollY + 100;

    let found = false;

    for (let i = 0; i < headingElements.length; i++) {
      const heading = headingElements[i];
      const offsetTop = heading.offsetTop;
      const offsetBottom = offsetTop + heading.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        setActiveHeadingIndex(i);
        found = true;
        break;
      }

      if (scrollPosition < offsetTop && lastScrollPositionRef.current > scrollPosition) {
        setActiveHeadingIndex(i - 1);
        found = true;
        break;
      }
    }

    if (!found && scrollPosition < headingElements[0].offsetTop) {
      setActiveHeadingIndex(-1);
    }

    if (!found && scrollPosition >= headingElements[headingElements.length - 1].offsetTop + headingElements[headingElements.length - 1].offsetHeight) {
      setActiveHeadingIndex(headingElements.length - 1);
    }

    lastScrollPositionRef.current = scrollPosition;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const addUniqueIdsToHeadings = () => {
      const contentContainer = document.getElementById("contentContainer");

      if (contentContainer) {
        const headingElements = contentContainer.querySelectorAll("h2");

        headingElements.forEach((heading) => {
          const headingText = heading.textContent
            .trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

          heading.id = headingText;
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
      const extractedHeadings = Array.from(h2Elements).map((h2) => ({
        title: h2.textContent,
      }));
  
      const anchorElements = tempDiv.querySelectorAll("a");
      anchorElements.forEach((anchor) => {
        const href = anchor.getAttribute("href");
        const rel = anchor.getAttribute("rel");
  
        if (href && (href.startsWith("http://qbatch.com/") || href.startsWith("https://qbatch.com/"))) {} 
        else {
          if (rel) {
            if (!rel.includes("nofollow")) {
              anchor.setAttribute("rel", `${rel} nofollow`);
            }
          } else {
            anchor.setAttribute("rel", "nofollow");
          }
        }
      });
  
      data.blogDescription.data.blogDescription = tempDiv.innerHTML;
  
      setHeadings(extractedHeadings);
    };

    extractHeadings();
  }, [data]);

  const handleLinkClick = (index) => {
    setActiveHeadingIndex(index);
    const headingId = headings[index].title
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    const headingElement = document.getElementById(headingId);

    if (headingElement) {
      const headerOffset = 90;
      const elementPosition = headingElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const socialIcons = [
    {
      img: "/facebook",
      to: `https://www.facebook.com/sharer.php?u=https://qbatch.com/blog/${path}`,
    },
    {
      img: "/twitter",
      to: `https://twitter.com/intent/tweet?url=https://qbatch.com/blog/${path}`,
    },
    {
      img: "/linkedin",
      to: `https://www.linkedin.com/shareArticle?url=https://qbatch.com/blog/${path}`,
    },
  ];

  return (
    <ContentWrapper>
      <div className="content-section content">
        <Container>
          <div className="position-relative">
            <Row>
              <Col lg={3}>

                <div className={`side-scroll`}>

                  {headings.length > 0 && (
                    <div className="table-content">
                      <div className="side-scroll-content">
                        <span>Table of Content</span>
                        <ul>
                          {headings.map((list, index) => (
                            <React.Fragment key={index}>
                              <li>
                                <a
                                  href={`#${list.title
                                    .trim()
                                    .toLowerCase()
                                    .replace(/[^\w\s-]/g, "")
                                    .replace(/\s+/g, "-")}`}
                                  className={`title ${activeHeadingIndex === index ? "active" : ""}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(index);
                                  }}
                                >
                                  {list.title}
                                </a>
                              </li>
                            </React.Fragment>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  <div className="sidebar-socials">
                    <span className="text-h5 d-xl-block">Share this article</span>
                    <SocialIcons socialIcons={socialIcons} />
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={9} sm={12}>
                <div className="section inner-content">
                  <div
                    id="contentContainer"
                    className="paragraph"
                    dangerouslySetInnerHTML={{
                      __html: data?.blogDescription?.data?.blogDescription,
                    }}
                  />
                </div>
                <div className="divider">
                  <hr />
                </div>
              </Col>
              <Col xl={3} sm={12}>
                <div className="side-scroll">
                  <ContentWrapper>
                    <Row className="g-lg-0">
                      <Col xs={12}>
                        <div
                          className="author-name"
                        >
                          <div className="avatar-box d-flex flex-wrap align-items-center">
                            <img
                              className="avatar-image"
                              width="72px"
                              height="72px"
                              src={data?.user?.image?.localFile?.url || "/avatar.svg"}
                              alt="no-avatar"
                            />
                            <span
                              onClick={() => {
                                navigate(`/authors/${data?.user?.username}`, {
                                  state: { slug: data.seo.slug },
                                });
                              }}
                            >{data?.user?.name}
                            </span>
                          </div>
                          <span className="title">{data?.user?.description}</span>
                          <div className="d-flex justify-content-between mt-32 socials-wrapper">
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
                          <div className="contributors-wrapper">
                            <span className="inner-heading">Contributors:</span>
                            <div className="contributors">
                              {data?.contributor?.map((contributor, index) => (
                                <a href={`/authors/${contributor.username}`} key={index} title={contributor.username}
                                  onClick={() => {
                                    navigate(`/authors/${contributor.username}`, {
                                      state: { slug: data.seo.slug },
                                    })
                                  }}
                                >
                                  <img src={contributor.image?.localFile.url} />
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="subscribe-button mt-0">
                          <h4 className="text-h4"><b>Subscribe</b></h4>
                          <p className="subscribe-paragraph">
                            Get the top stories like these delivered to your inbox!
                          </p>
                          <div className="subscribe-email">
                            <img src="/email.svg" alt="email" />
                            <input type="email" placeholder="Email Address" />
                          </div>
                          <div className="d-flex justify-content-end">
                            <Button className="primary-btn" text="Subscribe" />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </ContentWrapper>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xxl={6} sm={12}>
                <div className="might-section">
                  <h3 className="might-heading text-h2">You might also like…</h3>
                  <BlogCardsWrapper className="might-wrapper">
                    <Row>
                      {blogLikedData.slice(0, 2).reverse().map((card, ind) => {
                        const customDate = new Date(card?.publishedAt);
                        return (
                          <Col xl={6} lg={6} md={6} key={ind}>
                            <div className="inner">
                              <div className="card-img">
                                <img
                                  src={card.blogImg?.localFile.url}
                                  alt={card.blogTitle}
                                />
                              </div>
                              <div className="inner-content">

                                {data?.blogTags && (
                                  <div className="d-flex gap-2">
                                    {data?.blogTags?.strapi_json_value.map((tag, ind) => (
                                      <div className="blog-badge mb-4" key={ind}>
                                        <span>{tag}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                <p onClick={() => {
                                  navigate(`/blog${card.seo.slug}`, {
                                    state: { blogId: card.id },
                                  });
                                }}
                                  className="blog-title mb-4">
                                  {card.blogTitle}
                                </p>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 read-time">
                                  <div
                                    className="d-flex align-items-center gap-2 pointer"
                                    onClick={() => {
                                      navigate(`/authors/${card?.user?.username}`, {
                                        state: { slug: card.seo.slug },
                                      });
                                    }}
                                  >
                                    <img
                                      src={card?.user?.image.localFile.url || "/avatar.svg"}
                                      width="24px"
                                      height="24px"
                                      alt="no-user"
                                      className="avatar-sm-img"
                                    />
                                    <span>{card?.user?.name || "No User"}</span>
                                  </div>
                                  <div className="timer">
                                    <img src="/timer-blue.svg" alt="timer" />
                                    <span>
                                      <ReadingTime description={card?.blogDescription?.data?.blogDescription} />{" "}
                                      Minutes Read
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </BlogCardsWrapper>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </ContentWrapper>
  );
}

export default App;
