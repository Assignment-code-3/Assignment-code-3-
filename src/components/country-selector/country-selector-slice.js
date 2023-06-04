import { createSlice } from '@reduxjs/toolkit'

export const layersSlice = createSlice({
  name: 'layers',
  initialState: {
    activeCountry: '',
    countryData: null,
    activeCountryData: null
  },
  reducers: {
    selectCountry: (state, action) => {
      state.activeCountry = action.payload
    },
    setActiveCountryData: (state, action) => {
      if(state.hazardsData) return state;

      let features = action.payload
      .filter(hazard => hazard.type !== 'COMBAT' && hazard.type !== 'TERRORISM'
        && hazard.type !== 'CIVILUNREST' && hazard.type !== 'CYBER'
        && hazard.type !== 'SEVEREWEATHER' && hazard.type !== 'ACCIDENT'
        && hazard.type !== 'INCIDENT' && hazard.type !== 'EQUIPMENT'
      )
      .map((hazard) => {
        return {
          "type": "Feature",
          "properties": {
            "name": hazard.name,
            "created": hazard.created,
            "lastUpdate": hazard.lastUpdate,
            "type": hazard.type,
            "severity": hazard.severity,
          },
          "geometry": {
            "type": "Point",
            "coordinates": [hazard.longitude, hazard.latitude]
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
