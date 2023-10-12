import * as React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";

const BlogPage = () => {
  return <Layout pageTitle="My Blog Posts"></Layout>;
};
export const Head = () => <SEO title="My Blog Posts" />;

export default BlogPage;
