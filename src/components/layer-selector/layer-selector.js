import React from 'react';

import './layer-selector.css';

import { useSelector, useDispatch } from 'react-redux';
import { toggleHazards, setHazardsData } from './layers-selector-slice';

import service from '../../service';

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
      <ToggleButton
        value="conflict"
        size="small"
        selected={hazardsVisible}
        onChange={handleHazardsToggle}
      >
        Hazards
      </ToggleButton>
      </div>
    </div>
  )};

LayerSelector.propTypes = {};

LayerSelector.defaultProps = {};

export default LayerSelector;
