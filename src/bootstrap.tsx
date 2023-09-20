import React from 'react';
import { createRoot } from 'react-dom/client';
import AppEntry from './AppEntry';

const rootElm = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootElm!);

root.render(<AppEntry />);
