import React from 'react';
import PropTypes from 'prop-types';
import './map.css';

import 'leaflet/dist/leaflet.css';
import { useSelector, useDispatch } from 'react-redux';

import L from 'leaflet';

import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet'

const Map = () => {

  const hazardsVisible = useSelector((state) => state.layers.hazardsVisible),
  hazardsData = useSelector((state) => state.layers.hazardsData),
  hazardPointStyle = (geoJsonPoint, latlng) => {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: `map-icons/${geoJsonPoint.properties.type}.png`,
        iconSize: [24, 24],
        iconAnchor: [18, 35],
        popupAnchor: [-3, -76],
        shadowUrl:`map-icons/shade_${geoJsonPoint.properties.severity}.png`,
        shadowSize: [30, 30],
        shadowAnchor: [21, 37]
      })
    });
  };
  return (
    <div className="map" data-testid="Map" style={{ height: '900px' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVuc2VnIiwiYSI6ImNpbm8ydWdnbzEwM2h1a20zanU5dTRmd2IifQ.HJplRyZIckK5LQLTgj5WAA"
        />
        {hazardsVisible && <GeoJSON data={hazardsData} pointToLayer={hazardPointStyle} />}
      </MapContainer>
    </div>
  );
}

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
