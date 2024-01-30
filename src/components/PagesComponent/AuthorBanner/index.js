import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from '../../UiComponent/Container'
import BlogDetailsWrapper from './style'

const Index = (props) => {
  const { title, description, authorImage } = props
  return (
    <BlogDetailsWrapper>
      <Container>
        <Row>
          <Col lg={8}>
            <div class="d-flex gap-4">
              {/* <div className="d-flex align-items-start arrow-box ">
                <img
                  src="/back-arrow.svg"
                  alt="no-arrow"
                  className="pointer"
                  onClick={() => navigate(`/blog${authorData?.seo.slug}`)}
                />
              </div> */}
              <div className="details-flex">
                <h2 class="title">{title || 'No Author Name'} </h2>
                <span class="position">Content Manager</span>
                <div class="social-icons">
                  <img src="/linkdin.svg" alt="no-icon" />
                  <img src="/twitter.svg" alt="no-icon" />
                  <img src="/medium.svg" alt="no-icon" />
                </div>
                <p className="paragraph">{description || 'No Description'}</p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="image-box">
              <img width='300px' height='300px' src={authorImage || '/author-pic.png'} alt="no-author" />
            </div>
          </Col>
        </Row>
      </Container>
    </BlogDetailsWrapper>
  )
}

export default Index
