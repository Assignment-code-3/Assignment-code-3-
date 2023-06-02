import React from 'react';
import PropTypes from 'prop-types';
import './map.css';

import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Map = () => (
  <div className="map" data-testid="Map" style={{ height: '900px' }}>
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVuc2VnIiwiYSI6ImNpbm8ydWdnbzEwM2h1a20zanU5dTRmd2IifQ.HJplRyZIckK5LQLTgj5WAA"
      />
    </MapContainer>
  </div>
);

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
