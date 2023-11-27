import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import Container from "../../UiComponent/Container";
import Button from "../../../components/UiComponent/Button";
import ContentWrapper from "./style";

const Index = () => {
  const [target, setTarget] = useState("First Section");
  const handleClick = (value) => {
    setTarget(value);
    const element = document.getElementById(value);
    if (element) {
      // element.scrollIntoView({ behavior: 'smooth', block: 'start',top: 0 })
    }
  };
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
    // eslint-disable-next-line no-unreachable
    <ContentWrapper>
      <div className="position-relative">
        <div className="side-scroll">
          <ul className="dashed-ul">
            <li
              className={`line ${target === "First Section" ? "active" : ""}`}
            />
            <li
              className={`line ${target === "Second Section" ? "active" : ""}`}
            />
            <li
              className={`line ${target === "Third Section" ? "active" : ""}`}
            />
            <li
              className={`line ${target === "Fourth Section" ? "active" : ""}`}
            />
          </ul>
          <ul className="title-ul">
            <li
              className={`title ${target === "First Section" ? "active" : ""}`}
              onClick={() => handleClick("First Section")}
            >
              First Section
            </li>
            <li
              className={`title ${target === "Second Section" ? "active" : ""}`}
              onClick={() => handleClick("Second Section")}
            >
              Second Section
            </li>
            <li
              className={`title ${target === "Third Section" ? "active" : ""}`}
              onClick={() => handleClick("Third Section")}
            >
              Third Section
            </li>
            <li
              className={`title ${target === "Fourth Section" ? "active" : ""}`}
              onClick={() => handleClick("Fourth Section")}
            >
              Fourth Section
            </li>
          </ul>
        </div>
        <Container>
          <Row>
            <Col lg={8} md={6} sm={12}>
              <div className="content-section">
                <div className="inner-content" id="First Section">
                  <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="paragraph">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                </div>
                <div id="Second Section">
                  <img src="/content-box.svg" alt="no-content" />
                </div>
                <div className="inner-content small-space">
                  <h3>Heading</h3>
                  <p className="paragraph">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                  <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="can-help" id="Third Section">
                  <h4>Can't get the hang of latest tools & technology?</h4>
                  <h4>We know, deciding & making the right</h4>
                  <h4> investments is difficult.</h4>
                  <div className="d-flex justify-content-center can-help-button">
                    <Button className="secondary-btn" text="We Can Help" />
                  </div>
                </div>
                <div
                  className="inner-content last-paragraph"
                  id="Fourth Section"
                >
                  <p className="paragraph mb-32">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                  <p className="paragraph ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="social-links d-flex">
                  <span className="title">Share</span>
                  <ul className="d-flex social-link">
                    {socialIcons.map((icon) => (
                      <li>
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
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="author-name">
                <div className="avatar-box d-flex align-items-center">
                  <img src="/avatar.svg" alt="no-avartar" />
                  <span>Author Name Will Come Here</span>
                </div>
                <span className="title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
                    <img
                      src="/author-name-arrow.svg"
                      className="pointer"
                      alt="no-arrow"
                    />
                  </div>
                </div>
              </div>
              <div className="subsribe-button">
                <h2>Get the top stories like these delivered to your inbox</h2>
                <div>
                  <Button className="secondary-btn" text="We Can Help" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ContentWrapper>
  );
};

export default Index;
