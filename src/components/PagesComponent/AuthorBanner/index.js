import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from '../../UiComponent/Container';
import BlogDetailsWrapper from './style';

const AuthorBanner = (props) => {
  const { title, description, authorImage, socials } = props;

  return (
    <BlogDetailsWrapper>
      <Container>
        <div className='d-flex gap-5 align-items-start justify-content-left'>
          <div>
            <div className="image-box">
              <img width='300px' height='300px' src={authorImage || '/author-pic.png'} alt="no-author" />
            </div>
          </div>

          <div>
            <div className="d-flex gap-4">
              <div className="details-flex">
                <h2 className="title">{title || 'No Author Name'}</h2>
                <span className="position">Content Manager</span>
                <div className="social-icons">
                  <ul className="d-flex social-link social-icons ps-0">
                    {socials?.map((social, index) => (  
                      <li key={index}>
                        <a href={social.socialLink} target="_blank" rel="noopener noreferrer">
                          {/* You may need to adjust the paths to your social media icons */}
                          {social.socialPlatform === "linkedin" && <img src="/linkedin.svg" alt="LinkedIn" />}
                          {social.socialPlatform === "twitter" && <img src="/twitter.svg" alt="Twitter" />}
                          {social.socialPlatform === "medium" && <img src="/medium.svg" alt="Medium" />}
                          {social.socialPlatform === "instagram" && <img src="/instagram.svg" alt="Instagram" />}
                          {social.socialPlatform === "facebook" && <img src="/facebook.svg" alt="Facebook" />}
                          {social.socialPlatform === "reddit" && <img src="/reddit.svg" alt="Reddit" />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="paragraph">{description || 'No Description'}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </BlogDetailsWrapper>
  )
}

export default AuthorBanner;
