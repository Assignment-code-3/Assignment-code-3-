import React from 'react';
import PropTypes from 'prop-types';
import './layer-selector.css';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const LayerSelector = () => (
  <div className="layer-selector" data-testid="LayerSelector">
    <div>
      <FormControl fullWidth>
        <InputLabel id="layer-select-label">Layer</InputLabel>
        <Select
          labelId="layer-select-label"
          id="layer-select"
          label="Layer"
        >
          <MenuItem value={10}>2</MenuItem>
          <MenuItem value={20}>1</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div>
      <Button variant="outlined" size="small">
        Conflict
      </Button>
      <Button variant="outlined" size="small">
        Hazards
      </Button>
    </div>
  </div>
);

LayerSelector.propTypes = {};

LayerSelector.defaultProps = {};

export default LayerSelector;
