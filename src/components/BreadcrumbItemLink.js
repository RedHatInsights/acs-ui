/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { BreadcrumbItem } from '@patternfly/react-core';
import { Link } from 'react-router-dom';

function BreadcrumbItemLink({ children, to, ...rest }) {
  function render({ className, ariaCurrent }) {
    return (
      <Link className={className} aria-current={ariaCurrent} to={to}>
        {children}
      </Link>
    );
  }
  return <BreadcrumbItem {...rest} render={render} />;
}

export default BreadcrumbItemLink;
