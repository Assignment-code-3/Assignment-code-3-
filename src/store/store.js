import { configureStore } from '@reduxjs/toolkit'
import layersReducer from '../components/layer-selector/layers-selector-slice'
import countryReducer from '../components/country-selector/country-selector-slice'

export default configureStore({
  reducer: {
    layers: layersReducer,
    country: countryReducer
  },
})
