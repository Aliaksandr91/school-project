import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // For course
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
