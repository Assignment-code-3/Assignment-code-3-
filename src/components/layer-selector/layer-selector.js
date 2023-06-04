import React from 'react';

import './layer-selector.css';

import { useSelector, useDispatch } from 'react-redux';
import { toggleHazards, setHazardsData } from './layers-selector-slice';

import service from '../../service';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';


const LayerSelector = () => {
  const hazardsVisible = useSelector((state) => state.layers.hazardsVisible),
  hazardsData = useSelector((state) => state.layers.hazardsData),
  dispatch = useDispatch()


  let getConflict = async () => {
    let data = await service.loadHazardsData();
    return data;
  }

  let handleHazardsToggle = async () => {
    if(hazardsData === null) {
      let data = await getConflict();
      dispatch(setHazardsData(data.hazards))
    }
    dispatch(toggleHazards())
  }

  return(
    <div className="layer-selector" data-testid="LayerSelector">
      <div>
        <FormControl fullWidth>
          <InputLabel id="layer-select-label">Layer</InputLabel>
          <Select
            labelId="layer-select-label"
            id="layer-select"
            variant="filled"
            label="Layer"
          >
            <MenuItem value={10}>2</MenuItem>
            <MenuItem value={20}>1</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
      <ToggleButton
        value="conflict"
        size="small"
        selected={hazardsVisible}
        onChange={handleHazardsToggle}
      >
        Hazards
      </ToggleButton>
        <Button variant="outlined" size="small">
          Conflict
        </Button>
      </div>
    </div>
  )};

LayerSelector.propTypes = {};

LayerSelector.defaultProps = {};

export default LayerSelector;
