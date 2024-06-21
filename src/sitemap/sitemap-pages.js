import React from "react";
import { Link, graphql } from "gatsby";

const SitemapPages = ({ data }) => {
  const { allSitePage } = data;

  const excludedPaths = [
    "/blog/", 
    "/events/", 
    "/sitemap.xml", 
    "/sitemap-services.xml" , 
    "/sitemap-pages.xml" , 
    "/sitemap-blog.xml", 
    "/sitemap-events.xml", 
    "/sitemap-authors.xml", 
    "/authors/",
    "/dev-404-page",
    "/404.html",
    "/blogDetails"
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
    allSitePage(filter: { path: { nin: ["/blog/", "/services/", "/", "/events/"] } }) {
      nodes {
        path
      }
    }
  }
`;

export default SitemapPages;
