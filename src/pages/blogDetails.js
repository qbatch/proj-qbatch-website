import * as React from 'react';
import Layout from '../components/Layout/layout';
import BlogDetailBanner from '../components/PagesComponent/BlogDetailBanner';
import BlogDetailsContent from "../components/PagesComponent/BlogDetailsContent";
import SEO from '../components/Seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <BlogDetailBanner />
      <BlogDetailsContent />
    </Layout>
  )
}
export const Head = () => <SEO title="My Blog Posts" />

export default BlogPage;
