import React from "react";
import { graphql, Link } from "gatsby";

const ServicesSitemap = ({ data }) => {
  const { allSitePage } = data;
  const excludedPaths = [
    "/services/style/"
  ];

  const pages = allSitePage.nodes.map((node) => {
    if (excludedPaths.some((path) => node.path.startsWith(path))) {
      return null; 
    }
    return (
      <div className="sitemap-link" key={node.path}>
        <a href={node.path}><img src="/page-icon.svg" />{node.path}</a>
      </div>
    );
  });

  return (
    <>
    <Link className="back-btn" to="/sitemap.html"><img src="/back-arrow-sitemap.svg" />Back</Link>
      {pages}
    </>
  );
};

export const query = graphql`
  query {
    allSitePage(filter: { path: { regex: "/^/services/" } }) {
      nodes {
        path
      }
    }
  }
`;

export default ServicesSitemap;

