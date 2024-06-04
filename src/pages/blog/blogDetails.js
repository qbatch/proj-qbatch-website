import React, { useEffect } from "react";
import PageNotFound from '../404';
import Layout from "../../components/Layout/layout";
import { replaceUnderscoreWithAt } from '../../constants/Utils'
import BlogDetailBanner from "../../components/PagesComponent/BlogDetailBanner";
import BlogDetailsContent from "../../components/PagesComponent/BlogDetailsContent";
import SEO from "../../components/Seo";
import ContentWrapper from "../../components/PagesComponent/BlogDetailsContent/style";
import  { Queries }  from "../../constants/queries";

const BlogDetails = ({ pageContext }) => {
  
    const path = pageContext?.title;
    const blogQuery = Queries()
    const blogData = blogQuery.allStrapiArticle.nodes.find((x) => x.slug === `${path}`)
       
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
    </Layout>
  )
}

export const Head = ({ pageContext }) => {
  const path = pageContext?.title
  const blogQuery = Queries()
  const allStrapiArticleNodes = blogQuery.allStrapiArticle.nodes
  const currentArticle = allStrapiArticleNodes.find((node) => node.slug === path)

  if (!currentArticle) {
    return null;
  }

  const { schema: articleSchema } = currentArticle;
  const seoData = currentArticle.seo;
  const seoImage = currentArticle.blogImg?.localFile.url;

  const transformedSchemaData = articleSchema.map(schemaItem => ({
    ...schemaItem.childStrapiComponentSchemaSchemaStructureddataJsonnode.strapi_json_value,
    visibilityIn: schemaItem.visibilityIn
  }));

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      pathname={`/blog/${path}/`}
      image={seoImage}
    >
      {transformedSchemaData
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data)}
          </script>
        ))}
    </SEO>
  )
}



export default BlogDetails;
