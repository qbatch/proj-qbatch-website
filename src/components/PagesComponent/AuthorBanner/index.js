import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby'

import Container from '../../UiComponent/Container';
import BlogDetailsWrapper from './style';

const AuthorBanner = (props) => {
  const { title, description, authorImage, socials, customCrumbs } = props;
  const defaultHomeCrumb = { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' };
  const crumbs = customCrumbs && customCrumbs.length > 0 ? [defaultHomeCrumb, ...customCrumbs] : [defaultHomeCrumb];
  return (
    <BlogDetailsWrapper>
      <Container>
      <div className="breadcrumb-wrapper">
          <div className="breadcrumb">
            <ul className="d-flex gap-2 ps-0">
              {crumbs.map((crumb, index) => (
                <li key={index}>
                  <Link className="pointer" to={crumb.pathname}>
                    <span>{crumb.crumbLabel}</span>
                    {index < crumbs.length - 1 && <span className="ps-1">{crumb.crumbSeparator}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='d-flex gap-5 align-items-start justify-content-left'>
          <div>
            <div className="image-box">
              <img width='300px' height='300px' src={authorImage || '/author-pic.png'} alt="no-author" />
            </div>
          </div>

          <div>
            <div className="d-flex gap-4">
              <div className="details-flex">
                <h1 className="title text-h2">{title || 'No Author Name'}</h1>
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
