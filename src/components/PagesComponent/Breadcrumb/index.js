import React from 'react';
import { Link } from 'gatsby';
import BreadcrumbWrapper from './style';

const Breadcrumb = ({ crumbs, wrapperClass }) => {
  return (
    <BreadcrumbWrapper className={wrapperClass}>
      <div className="breadcrumb">
        <ul className="d-flex gap-2 ps-0">
          {crumbs.map((crumb, index) => (
            <li key={index}>
              <Link className="pointer" to={crumb.pathname}>
                <span>{crumb.crumbLabel}</span>
                {index < crumbs.length - 1 && <span className="ps-1">{crumb.crumbSeparator}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
