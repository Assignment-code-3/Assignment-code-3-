import axios from 'axios';

export default {
  loadHazardsData,
  loadCountryData
}

async function loadHazardsData(){
  const resp = await axios.get(`https://api.hungermapdata.org/v1/climate/hazards`);
  return resp.data;
}

async function loadCountryData() {
  const resp = await axios.get(`https://api.hungermapdata.org/v2/info/country`);
  return resp.data;
}
