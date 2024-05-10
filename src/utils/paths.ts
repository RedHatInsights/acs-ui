import { To } from 'react-router-dom';

export const linkBasename = '/application-services/acs';
export const mergeToBasename = (to: To, basename: string): To => {
  const currBaseName =
    location.pathname.includes('/openshift/') &&
    basename.includes('/application-services/')
      ? basename.replace('/application-services/', '/openshift/')
      : basename;
  if (typeof to === 'string') {
    // replace possible "//" after basename
    return `${currBaseName}/${to}`.replace(`^${currBaseName}//`, '/');
  }

  return {
    ...to,
    pathname: `${currBaseName}/${to.pathname}`.replace(
      `^${currBaseName}//`,
      '/'
    ),
  };
};
