import { configureStore } from '@reduxjs/toolkit'
import layersReducer from '../components/layer-selector/layers-selector-slice'

export default configureStore({
  reducer: {
    layers: layersReducer,
  },
})
