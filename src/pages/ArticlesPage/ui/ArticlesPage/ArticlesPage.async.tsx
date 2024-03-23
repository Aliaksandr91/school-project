import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // For course
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
