import React from 'react';
import PropTypes from 'prop-types';
import './country-selector.css';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const CountrySelector = () => (
  <div className="country-selector" data-testid="CountrySelector">

    <div>
      <FormControl fullWidth>
        <InputLabel id="country-select-label">Select country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          label="Layer"
        >
          <MenuItem value={10}>Global</MenuItem>
          <MenuItem value={20}>Ghana</MenuItem>
          <MenuItem value={30}>Egypt</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div>
);

CountrySelector.propTypes = {};

CountrySelector.defaultProps = {};

export default CountrySelector;
