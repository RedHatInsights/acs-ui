import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { linkBasename, mergeToBasename } from '../utils/paths';

const AppLink = (props: LinkProps) => (
  <Link {...props} to={mergeToBasename(props.to, linkBasename)} />
);

export default AppLink;
