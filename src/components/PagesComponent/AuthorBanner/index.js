import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from '../../UiComponent/Container'
import BlogDetailsWrapper from './style'
import { navigate } from 'gatsby'

const Index = (props) => {
  const {data,slug}=props;
    const authorData = data?.filter((x) => x.seo.slug === slug)[0]
  return (
    <BlogDetailsWrapper>
      <Container>
        <Row>
          <Col lg={8}>
            <div class="d-flex gap-4">
              <div className="d-flex align-items-start arrow-box ">
                <img
                  src="/back-arrow.svg"
                  alt="no-arrow"
                  className="pointer"
                  onClick={() => navigate(`/blog${authorData?.seo.slug}`)}
                />
              </div>
              <div className="details-flex">
                <h2 class="title">{authorData?.user.username} </h2>
                <span class="position">Content Manager</span>
                <div class="social-icons">
                  <img src="/linkdin.svg" alt="no-icon" />
                  <img src="/twitter.svg" alt="no-icon" />
                  <img src="/medium.svg" alt="no-icon" />
                </div>
                <p className="paragraph">
                  “Farwa decodes tech stories with her words. With over 7 years of expertise in writing, she now
                  oversees thought leadership content across the Qbatch website. Recognized for her experience in
                  content marketing strategy, distribution, and writing, Farwa has optimized content banks with above
                  5,000 articles — engaging organic traffic to achieve business goals. She’s expanding her focus on
                  writing and distributing more human-first content that helps businesses and everyday folks solve
                  problems and find answers.”
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="image-box">
              <img src="/author-pic.png" alt="no-author" />
            </div>
          </Col>
        </Row>
      </Container>
    </BlogDetailsWrapper>
  )
}

export default Index
