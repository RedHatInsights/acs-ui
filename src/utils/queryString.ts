import qs from 'qs';

export function getQueryObject(search) {
  return qs.parse(search, { ignoreQueryPrefix: true });
}

export function getQueryString(searchObject) {
  return qs.stringify(searchObject, { encode: false });
}
