import React, { lazy, Suspense } from 'react';

const LazyCountryHighlights = lazy(() => import('./CountryHighlights'));

const CountryHighlights = props => (
  <Suspense fallback={null}>
    <LazyCountryHighlights {...props} />
  </Suspense>
);

export default CountryHighlights;
