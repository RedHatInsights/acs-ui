import { createContext } from 'react';

export const defaultState = {
  isEntitled: false,
  isEntitlementLoaded: false,
};

export const AppContext = createContext(defaultState);
export default AppContext;
