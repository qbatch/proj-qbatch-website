/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import PrimaryButton from "../../UiComponent/PrimaryButton";
import { blogCardsData } from "../../../constants";
import Button from "../../../components/UiComponent/Button";
import BlogCardsWrapper from "../BlogCards/style";
import ContentWrapper from "./style";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [showbars, setShowbars] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        const offsetTop = section.offsetTop; // Adjust the offset as needed
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const firstContent = () => {
    return (
      <ContentWrapper>
        <div className="inner-content">
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
        <img src="/content-box.svg" alt="no-content" />
      </ContentWrapper>
    );
  };
  const secondContent = () => {
    return (
      <ContentWrapper>
        <p className="paragraph">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p className="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </ContentWrapper>
    );
  };
  const thirdContent = () => {
    return (
      <ContentWrapper>
        <div className="can-help" id="Third Section">
          <h4>
            Can’t get the hang of latest tools & technology? We know, deciding &
            making the right investments is difficult.
          </h4>
          <div className="d-flex justify-content-center can-help-button">
            <Button className="secondary-btn" text="We Can Help" />
          </div>
        </div>
      </ContentWrapper>
    );
  };
  const forthContent = () => {
    return (
      <ContentWrapper>
        <p className="paragraph mb-32">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?{" "}
        </p>
        <p className="paragraph ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </ContentWrapper>
    );
  };
  const content = [
    {
      title: "First Heading",
      content: firstContent(),
    },
    {
      title: "Seconed Heading",
      content: secondContent(),
    },
    {
      title: "Third Heading",
      content: thirdContent(),
    },
    {
      title: "Forth Heading",
      content: forthContent(),
    },
  ];
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
      img: "/linkdin",
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
      to: "/",
    },
  ];

  return (
    <ContentWrapper>
      <div className="d-sm-flex">
        <div className={`side-scroll`}>
          {content.map((list, index) => (
            <>
              <a
                key={index}
                href={`#section${index + 1}`}
                className={index === activeSection ? 'title active' : 'title'}
              >
                {list.title}
              </a>
              <a
                key={index}
                href={`#section${index + 1}`}
                className={[activeSection, showbars]?.includes(index) ? 'active line' : 'line'}
              />
            </>
          ))}
        </div>

        <div className="content-section content">
          <Container>
            <Row>
              <Col lg={8} md={6} sm={12}>
                {content.map((list, index) => (
                  <div key={index} className="section inner-content" id={`section${index + 1}`}>
                    {list.content}
                  </div>
                ))}
                <div className="social-links d-flex">
                  <span className="title">Share</span>
                  <ul className="d-flex social-link">
                    {socialIcons.map((icon, key) => (
                      <li key={key}>
                        <a href={icon.to} target="_blank" rel="noreferrer">
                          <img src={`${icon.img}.svg`} alt="no-icon" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="divider">
                  <hr />
                </div>
                <div className="might-section">
                  <h3>You might also like…</h3>
                  <BlogCardsWrapper>
                    <Row>
                      {blogCardsData.slice(0, 2).map((card, ind) => (
                        <Col xl={6}>
                          <div className="inner" key={ind}>
                            <div className="card-img">
                              <img src={card.img} alt={card.title} />
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="blog-badge">Blog</div>
                                <span className="hours">17 Hours ago</span>
                              </div>
                            </div>
                            <div className="inner-content">
                              <p>{card.title}</p>
                              <div className="d-flex gap-2">
                                <div className="blog-badge">{card.category}</div>
                                <div className="blog-badge">Cybersecurity</div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 read-time">
                                <span>Author Name Here</span>
                                <div className="timer">
                                  <img src="/timer-blue.svg" alt="timer" />
                                  <span>5 Minutes Read</span>
                                </div>
                              </div>
                              <PrimaryButton text="Explore More" fontSize="16px" />
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </BlogCardsWrapper>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <ContentWrapper>
                  <div className="author-name">
                    <div className="avatar-box d-flex flex-wrap align-items-center">
                      <img src="/avatar.svg" alt="no-avartar" />
                      <span>Author Name Will Come Here</span>
                    </div>
                    <span className="title">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                    <div className="d-flex justify-content-between mt-32">
                      <ul className="d-flex social-link">
                        <li>
                          <img src="/facebook.svg" alt="no-svg" />
                        </li>
                        <li>
                          <img src="/instagram.svg" alt="no-svg" />
                        </li>
                        <li>
                          <img src="/linkdin.svg" alt="no-svg" />
                        </li>
                        <li>
                          <img src="/twitter.svg" alt="no-svg" />
                        </li>
                        <li>
                          <img src="/behance.svg" alt="no-svg" />
                        </li>
                      </ul>
                      <div>
                        <img src="/author-name-arrow.svg" className="pointer" alt="no-arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="subsribe-button">
                    <h2>Get the top stories like these delivered to your inbox</h2>
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
  )
}

export default App;
