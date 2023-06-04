import React, {useEffect} from 'react';

import './map.css';
import africaShapes from '../../assets/africa-outline_1138.json';

import 'leaflet/dist/leaflet.css';
import { useSelector, useDispatch } from 'react-redux';

import service from '../../service';
import { setCountryData, selectCountry } from '../country-selector/country-selector-slice';

import L from 'leaflet';

import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';

function CountryJson () {
  let activeCountry = useSelector((state) => state.country.activeCountry),
  dispatch = useDispatch(),
  africaShapesFiltered = activeCountry ?
    {"type":"FeatureCollection","features":africaShapes.features.filter(feature => feature.properties.iso_a3 === activeCountry)} :
    africaShapes;

  const map = useMap();
  return (<GeoJSON eventHandlers={{
    add: (data) => {
      map.flyToBounds(data.target.getBounds(), {
        padding: [100,100]
      })
    },
    click: (data) => {
      dispatch(selectCountry(data.layer.feature.properties.iso_a3))
    }
  }} key={activeCountry} data={africaShapesFiltered} />)
}

const Map = () => {

  const hazardsVisible = useSelector((state) => state.layers.hazardsVisible),
  hazardsData = useSelector((state) => state.layers.hazardsData),
  dispatch = useDispatch(),
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

  useEffect(() => {
    (async () => {
      let data = await service.loadCountryData();
      dispatch(setCountryData(data.countries))
    })()
  });

  return (
    <div className="map" data-testid="Map" style={{ height: '900px' }}>
      <MapContainer center={[-5.355848, 21.640487]} zoom={3}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVuc2VnIiwiYSI6ImNpbm8ydWdnbzEwM2h1a20zanU5dTRmd2IifQ.HJplRyZIckK5LQLTgj5WAA"
        />
        {hazardsVisible && <GeoJSON data={hazardsData} pointToLayer={hazardPointStyle} />}
        <CountryJson/>
      </MapContainer>
    </div>
  );
}

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
