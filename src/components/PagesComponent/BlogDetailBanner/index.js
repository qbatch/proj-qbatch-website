import React from "react";
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import Container from "../../UiComponent/Container";
import BlogDetailsWrapper from "./style";
import { navigate } from "gatsby";
import { ReadingTime, TimeAgo } from "../../../constants/Utils";
import moment from "moment"
import { Queries } from '../../../constants/queries'
import Breadcrumb from "../Breadcrumb";
const Index = ({ data }) => {
  const location = useLocation()

  const title = data?.blogTitle;
  const customCrumbs = [
    { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
    { pathname: '/blog', crumbLabel: 'Blog', crumbSeparator: '>' },
    { pathname: `/blog/${data?.category?.slug}`, crumbLabel: data?.category?.categoryName, crumbSeparator: '> ' },
    { pathname: `/blog/${data?.slug}`, crumbLabel: data?.blogTitle, crumbSeparator: '>' },
  ]

  return (
    <BlogDetailsWrapper>
      <Container>
        <Breadcrumb crumbs={customCrumbs} />
        <div className="d-flex align-items-start details-flex gap-4">
          <img src="/back-arrow.svg" alt="no-arrow" className="pointer" onClick={() => navigate('/blog')} />
          <div>

            <div className="chips">
              {data?.blogTags?.strapi_json_value.map((tag, ind) => (
                <span key={ind}>{tag}</span>
              ))}
            </div>
            <h1 className="title text-h2">{title}</h1>
            <div className="d-flex gap-72 mb-0">
              <div className="read-time">
                <img src="/clock.svg" alt="no-time" />
                <span>
                  <ReadingTime description={data?.blogDescription?.data.blogDescription} /> Minutes Read
                </span>
              </div>
              <div className="published-time">
               Modified Date:
               <span className="publish"> {moment(data?.updatedAt).format('DD/MM/YYYY')}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </BlogDetailsWrapper>
  )
}

export default Index;
