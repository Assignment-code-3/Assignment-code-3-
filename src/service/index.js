import axios from 'axios';

export default {
  loadHazardsData
}

async function loadHazardsData(){
  const resp = await axios.get(`https://api.hungermapdata.org/v1/climate/hazards`);
  return resp.data;
}
