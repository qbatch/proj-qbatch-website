import React, { useEffect } from "react";
import { Script } from 'gatsby'
import PageNotFound from '../pages/404';
import Layout from "../components/Layout/layout";
import BlogDetailBanner from "../components/PagesComponent/BlogDetailBanner";
import BlogDetailsContent from "../components/PagesComponent/BlogDetailsContent";
import SEO from "../components/Seo";
import ContentWrapper from "../components/PagesComponent/BlogDetailsContent/style";
import  { Queries }  from "../constants/queries";

const BlogDetails = ({ pageContext }) => {
  
    const path = pageContext?.title;
    const blogQuery = Queries()
    const blogData = blogQuery.allStrapiArticle.nodes.find((x) => x.slug === `${path}`)
     const schemaData= blogQuery.allStrapiArticle.nodes.find(x => x?.seo?.structuredData !== null).seo.structuredData.strapi_json_value[0]
       function replaceUnderscoreWithAt(obj) {
    if (obj && typeof obj === 'object') {
      if (Array.isArray(obj)) {
        return obj.map((item) => replaceUnderscoreWithAt(item))
      } else {
        const updatedObj = {}
        for (const [key, value] of Object.entries(obj)) {
          updatedObj[key.replace(/^_/, '@')] = replaceUnderscoreWithAt(value)
        }
        return updatedObj
      }
    } else {
      return obj
    }
  }
   const transformedObject = replaceUnderscoreWithAt(schemaData)
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
    if (!blogData) {
        return <PageNotFound />
      }
  const schemaAsString = JSON.stringify(transformedObject, null, 2);
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
      <BlogDetailsContent data={blogData} path={path} />
       {blogData.seo?.structuredData ? <Script type="application/ld+json">{schemaAsString}</Script>: null  } 
    </Layout>
  )
}

export const Head = ({ pageContext }) => {
  const path = pageContext?.title
  const { title } = pageContext;
  const blogQuery = Queries()
  const allStrapiArticleNodes = blogQuery.allStrapiArticle.nodes
  const blogData = allStrapiArticleNodes.find((node) => node.slug === `${path}`)
  const blogSeoData = allStrapiArticleNodes.find((node) => node.slug === `${path}`)
  const seoData = blogSeoData?.seo
  const seoImage = blogData?.blogImg?.localFile.url
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={blogData?.blogData}
      pathname={`/blog/${title}/`}
      image={seoImage}
    />
  )
}

export default BlogDetails;
