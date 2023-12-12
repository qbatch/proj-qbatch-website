import React, { useEffect, useState } from "react";

import Layout from "../components/Layout/layout";
import BlogDetailBanner from "../components/PagesComponent/BlogDetailBanner";
import BlogDetailsContent from "../components/PagesComponent/BlogDetailsContent";
import SEO from "../components/Seo";
import ContentWrapper from "../components/PagesComponent/BlogDetailsContent/style";
import  { Queries }  from "../constants/queries";

const BlogDetails = () => {
  const [blogId, setBlogId] = useState();
  
  const blogQuery = Queries();
  const blogData = blogQuery.allStrapiArticle.nodes.find(node => node.id === blogId);

  function progressBarScroll() {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + 5 + "%";
  }

  useEffect(() => {
    window.addEventListener("scroll", progressBarScroll);
    return () => {
      window.removeEventListener("scroll", progressBarScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('blog_id');
      setBlogId(item);
    }
  }, []);

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
  );
};

export const Head = () => {
  const [blogId, setBlogId] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('blog_id');
      setBlogId(item);
    }
  }, []);

  const blogSeo = Queries();
  const blogSeoData = blogSeo.allStrapiArticle.nodes.find(node => node.id === blogId);

  const seoData = blogSeoData?.seo
  
  return <SEO title={seoData?.metaTitle} description={seoData?.metaDescription} keyword={seoData?.keywords} />
}

export default BlogDetails;
