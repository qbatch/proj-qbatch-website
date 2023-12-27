import React from "react";
import { Link } from 'gatsby'
import Container from "../../UiComponent/Container";
import BlogDetailsWrapper from "./style";
import { navigate } from "gatsby";
import { ReadingTime, TimeAgo } from "../../../constants/Utils";

const Index = ({ data }) => {
  const customDate = new Date(data?.publishedAt)
  const title = data?.blogTitle;
    const customCrumbs = [
      { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
      { pathname: '/blog', crumbLabel: 'Blog', crumbSeparator: '>' },
      { pathname: `/blog/${data?.category.categoryName}`, crumbLabel: data?.category.categoryName, crumbSeparator: '> ' },
      { pathname: '/blog', crumbLabel: data?.blogTitle, crumbSeparator: '>' },
    ]
  return (
    <BlogDetailsWrapper backgroundImage={data?.blogImg.localFile.url}>
      <Container>
        <div className="breadcrumb">
          <ul className="d-flex gap-2">
            {customCrumbs.map((crumb, index) => (
              <li key={index}>
                <Link className="cursor-pointer" to={crumb.pathname}>
                  <span>{crumb.crumbLabel}</span>
                  {index < customCrumbs.length - 1 && <span className="ps-1">{crumb.crumbSeparator}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex align-items-start details-flex gap-4">
          <img src="/back-arrow.svg" alt="no-arrow" className="pointer" onClick={() => navigate('/blog')} />
          <div>
            <h1 className="title text-h2">{title}</h1>
            <div className="d-flex gap-72">
              <div className="read-time">
                <img src="/clock.svg" alt="no-time" />
                <span>
                  <ReadingTime description={data?.blogDescription?.data.blogDescription} /> Minutes Read
                </span>
              </div>
              <div className="published-time">
                <span className="publish">Published on:</span>
                <TimeAgo customDate={customDate} />
              </div>
            </div>
            <div className="chips">
              {data?.blogTags.strapi_json_value.map((tag, ind) => (
                <span key={ind}>{tag}</span>
              ))}
            </div>
            <div className="author-name">
              <span>{data?.user.username}</span>
            </div>
          </div>
        </div>
      </Container>
    </BlogDetailsWrapper>
  )
}

export default Index;
