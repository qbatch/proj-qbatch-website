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
        <Link to="/sitemap-services.html"><img src="/folder-icon.svg" />Services</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-blog.html"><img src="/folder-icon.svg" />Blog</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-authors.html"><img src="/folder-icon.svg" />Authors</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-events.html"><img src="/folder-icon.svg" />Events</Link>
      </div>
      <div className="sitemap-link">
        <Link to="/sitemap-pages.html"><img src="/folder-icon.svg" />Pages</Link>
      </div>
    </>
  );
};

export default Sitemap;
