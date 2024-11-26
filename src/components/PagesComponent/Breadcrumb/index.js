import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { RiArrowRightSLine } from "react-icons/ri";

import BreadcrumbWrapper from './style';

const Breadcrumb = ({ crumbs, wrapperClass }) => {

  const location = useLocation();

  return (
    <BreadcrumbWrapper className={wrapperClass}>
      <div className="breadcrumb">
        <ul className="d-flex ps-0">
          {crumbs.map((crumb, index) => {
            const isCurrentPath = location.pathname.replace(/\/$/, '') === crumb.pathname.replace(/\/$/, '');
            return (<li key={index} className={isCurrentPath ? 'current-breadcrumb' : ''}>
              <Link className="pointer" to={crumb.pathname}>
                <span>{crumb.crumbLabel}</span>
                {index < crumbs.length - 1 && <span>{crumb.crumbSeparator && <RiArrowRightSLine />}</span>}
              </Link>
            </li>)
          })}
        </ul>
      </div>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
