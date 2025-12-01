import React from 'react';
import { createRoot } from 'react-dom/client';
import AppEntry from './AppEntry';

const rootElm = document.getElementById('root');

const root = createRoot(rootElm!);

root.render(<AppEntry />);
