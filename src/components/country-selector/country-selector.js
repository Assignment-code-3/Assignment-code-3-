import React from 'react';
import PropTypes from 'prop-types';
import './country-selector.css';

import africaShapes from '../../assets/africa-outline_1138.json';

import service from '../../service';

import { useSelector, useDispatch } from 'react-redux';
import { selectCountry, setCountryData } from './country-selector-slice';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const CountrySelector = () => {
  let countryList = africaShapes.features.map(feature => feature.properties);
  const activeCountry = useSelector((state) => state.country.activeCountry),
  countryData = useSelector((state) => state.country.countryData),
  dispatch = useDispatch();
  let handleSelectCoutry = async ({target}) => {
    if(!countryData) {
      let data = await service.loadCountryData();
      dispatch(setCountryData(data.countries))
    }
    dispatch(selectCountry(target.value))
  }
  return (
    <div className="country-selector" data-testid="CountrySelector">
      <div>
        <FormControl fullWidth>
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={activeCountry}
            onChange={handleSelectCoutry}
            variant="filled"
            label="Layer"
          >
            {countryList.map((country) => {
              return <MenuItem key={country.iso_a3} name={country.admin} value={country.iso_a3}>{country.admin}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

CountrySelector.propTypes = {};

CountrySelector.defaultProps = {};

export default CountrySelector;
