import React, { lazy, Suspense } from 'react';

const LazyLayerSelector = lazy(() => import('./LayerSelector'));

const LayerSelector = props => (
  <Suspense fallback={null}>
    <LazyLayerSelector {...props} />
  </Suspense>
);

export default LayerSelector;
