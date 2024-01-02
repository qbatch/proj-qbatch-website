import React, { useEffect, useState } from "react";
import { useLocation } from '@reach/router'
import Layout from "../components/Layout/layout";
import BlogDetailBanner from "../components/PagesComponent/BlogDetailBanner";
import BlogDetailsContent from "../components/PagesComponent/BlogDetailsContent";
import SEO from "../components/Seo";
import ContentWrapper from "../components/PagesComponent/BlogDetailsContent/style";
import  { Queries }  from "../constants/queries";

const BlogDetails = ({ pageContext }) => {
    const path = pageContext?.title;
    const blogQuery = Queries()
    const blogData = blogQuery.allStrapiArticle.nodes.find((x) => x.seo.slug === `${path}`)
  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100
    document.getElementById('progressBar').style.width = scrolled + 5 + '%'
  }

  useEffect(() => {
    window.addEventListener('scroll', progressBarScroll)
    return () => {
      window.removeEventListener('scroll', progressBarScroll)
    }
  }, [])
  
  return (
    <Layout pageTitle="My Blog Posts">
      <ContentWrapper>
        <div class="scroll-propgress">
          <div class="progress-container">
            <div class="progress-bar" id="progressBar"></div>
          </div>
        </div>
      </ContentWrapper>
      <BlogDetailBanner data={blogData} />
      <BlogDetailsContent data={blogData} />
    </Layout>
  )
}

export const Head = ({ pageContext }) => {
  const { title } = pageContext;
  const location = useLocation()
  const id = location.state?.blogId
  const blogSeo = Queries()
  const blogSeoData = blogSeo.allStrapiArticle.nodes.find((node) => node.id === id)
  const seoData = blogSeoData?.seo
  console.log(seoData, 'seoData')
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      pathname={`/blog${title}`}
    />
  )
}

export default BlogDetails;
