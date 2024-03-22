import React from "react";
import { Link } from "gatsby";
import "./style.css";

const Sitemap = () => {
  return (
    <>
      <div className="sitemap-link">
        <Link to="/"><img src="/page-icon.svg" />Home</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-services.xml"><img src="/folder-icon.svg" />Services</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-blog.xml"><img src="/folder-icon.svg" />Blog</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-authors.xml"><img src="/folder-icon.svg" />Authors</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-events.xml"><img src="/folder-icon.svg" />Events</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-pages.xml"><img src="/folder-icon.svg" />Pages</Link>
      </div>
    </>
  );
};

export default Sitemap;
