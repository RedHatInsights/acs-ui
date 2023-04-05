/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { BreadcrumbItem } from '@patternfly/react-core';
import AppLink from '../components/AppLink';

function BreadcrumbItemLink({ children, to, ...rest }) {
  function render({ className, ariaCurrent }) {
    return (
      <AppLink className={className} aria-current={ariaCurrent} to={to}>
        {children}
      </AppLink>
    );
  }
  return <BreadcrumbItem {...rest} render={render} />;
}

export default BreadcrumbItemLink;
