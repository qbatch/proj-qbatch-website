import React from "react";
import { graphql, Link } from "gatsby";

const BlogSitemap = ({ data }) => {
  const { allSitePage } = data;

  const pages = allSitePage.nodes.map((node) => {
    if (node.path.includes("/blogDetails/") || node.path.includes("/blog/cto/")) {
      return null;
    }

    const articleName = node.path;
    return (
      <div className="sitemap-link" key={node.path}>
        <a href={node.path}><img src="/page-icon.svg" />{articleName}</a>
      </div>
    );
  });

  return (
    <>
     <Link className="back-btn" to="/sitemap.xml"><img src="/back-arrow-sitemap.svg" />Back</Link>
      {pages}
    </>
  );
};

export const query = graphql`
  query {
    allSitePage(filter: { path: { regex: "/^/blog/" } }) {
      nodes {
        path
      }
    }
  }
`;

export default BlogSitemap;
