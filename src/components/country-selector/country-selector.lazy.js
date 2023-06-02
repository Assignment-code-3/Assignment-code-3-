import React, { lazy, Suspense } from 'react';

const LazyCountrySelector = lazy(() => import('./CountrySelector'));

const CountrySelector = props => (
  <Suspense fallback={null}>
    <LazyCountrySelector {...props} />
  </Suspense>
);

export default CountrySelector;
