import './App.css';

import Map from './components/map/map';
import CountrySelector from './components/country-selector/country-selector';
import LayerSelector from './components/layer-selector/layer-selector';
import Legend from './components/legend/legend';


function App() {
  return (
    <div className="App">
      <CountrySelector/>
      <LayerSelector/>
      <Legend/>
      <Map/>
    </div>
  );
}

export default App;
