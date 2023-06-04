import { createSlice } from '@reduxjs/toolkit'

export const layersSlice = createSlice({
  name: 'country',
  initialState: {
    activeCountry: '',
    countryData: null,
    activeCountryData: null
  },
  reducers: {
    selectCountry: (state, action) => {
      state.activeCountry = action.payload
      state.activeCountryData = state.countryData.find((country) => {
        return country.country.iso3 === action.payload
      })
    },
    setCountryData: (state, action) => {
      state.countryData = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectCountry, setCountryData } = layersSlice.actions

export default layersSlice.reducer
