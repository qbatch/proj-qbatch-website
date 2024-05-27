import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby'

import Container from '../../UiComponent/Container';
import BlogDetailsWrapper from './style';
import Breadcrumb from '../Breadcrumb';

const AuthorBanner = (props) => {
  const { title, description, authorImage, socials, customCrumbs } = props;
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];
  return (
    <BlogDetailsWrapper>
      <Container>
        <Breadcrumb crumbs={crumbs} />
        <div className='d-lg-flex gap-lg-5 align-items-start justify-content-left text-lg-start text-center'>
          <div className='d-flex justify-content-center'>
            <div className="image-box">
              <img width='300px' height='300px' src={authorImage || '/author-pic.png'} alt="no-author" />
            </div>
          </div>

          <div>
            <div className="d-flex gap-4 justify-content-lg-start  justify-content-center">
              <div className="details-flex">
                <h1 className="title text-h2 mt-lg-0 mt-4">{title || 'No Author Name'}</h1>
                <span className="position">Content Manager</span>
                <div className="social-icons  justify-content-lg-start  justify-content-center mb-lg-3 mb-0" >
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
