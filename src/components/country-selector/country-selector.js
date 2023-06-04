import React from 'react';
import PropTypes from 'prop-types';
import './country-selector.css';

import africaShapes from '../../assets/africa-outline_1138.json';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const CountrySelector = () => {
  let countryList = africaShapes.features.map(feature => feature.properties).push({
    admin: 'Global',
    iso_a3: ''
  }),
  setSelectedCoutry = ({target}) => {
    console.log(target)
  }
  return (
    <div className="country-selector" data-testid="CountrySelector">

      <div>
        <FormControl fullWidth>
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            onChange={setSelectedCoutry}
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
