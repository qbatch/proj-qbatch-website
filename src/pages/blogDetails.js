import React, { useEffect } from "react";
import Layout from "../components/Layout/layout";
import BlogDetailBanner from "../components/PagesComponent/BlogDetailBanner";
import BlogDetailsContent from "../components/PagesComponent/BlogDetailsContent";
import SEO from "../components/Seo";
import ContentWrapper from "../components/PagesComponent/BlogDetailsContent/style";

const BlogPage = () => {
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
  
  return (
    <Layout pageTitle="My Blog Posts">
      <ContentWrapper>
        <div class="scroll-propgress">
          <div class="progress-container">
            <div class="progress-bar" id="progressBar"></div>
          </div>
        </div>
      </ContentWrapper>
      <BlogDetailBanner />
      <BlogDetailsContent />
    </Layout>
  );
};
export const Head = () => <SEO title="My Blog Posts" />;

export default BlogPage;
