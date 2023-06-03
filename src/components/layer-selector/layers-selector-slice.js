import { createSlice } from '@reduxjs/toolkit'

export const layersSlice = createSlice({
  name: 'layers',
  initialState: {
    hazardsVisible: false,
    hazardsData: null
  },
  reducers: {
    toggleHazards: (state) => {
      state.hazardsVisible = !state.hazardsVisible
    },
    setHazardsData: (state, action) => {
      if(state.hazardsData) return state;

      let features = action.payload.map((conflict) => {
        return {
          "type": "Feature",
          "properties": {
            "name": conflict.name,
            "created": conflict.created,
            "lastUpdate": conflict.lastUpdate,
            "type": conflict.type,
            "severity": conflict.severity,
          },
          "geometry": {
            "type": "Point",
            "coordinates": [conflict.longitude, conflict.latitude]
          }
        }
      })
      state.hazardsData = {
        "type": "FeatureCollection",
        "features": features
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleHazards, setHazardsData } = layersSlice.actions

export default layersSlice.reducer
