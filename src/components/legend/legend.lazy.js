import React, { lazy, Suspense } from 'react';

const LazyLegend = lazy(() => import('./Legend'));

const Legend = props => (
  <Suspense fallback={null}>
    <LazyLegend {...props} />
  </Suspense>
);

export default Legend;
