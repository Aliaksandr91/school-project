import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // For course
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
