import './App.css';

import Map from './components/map/map';
import CountrySelector from './components/country-selector/country-selector';
import LayerSelector from './components/layer-selector/layer-selector';
import CountryHighlights from './components/country-highlights/country-highlights';
import Legend from './components/legend/legend';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Container sx={{ pt: 3 }}>
        <Grid className="top-interface" container spacing={2}>
          <Grid item xs={3}>
            <CountrySelector/>
            <CountryHighlights/>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <LayerSelector/>
          </Grid>
        </Grid>
        <Legend/>
        <Map/>
      </Container>
    </div>
  );
}

export default App;
