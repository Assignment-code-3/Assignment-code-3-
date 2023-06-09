import React from 'react';

import './country-highlights.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';

import { useSelector  } from 'react-redux';

const CountryHighlights = () => {
  let activeCountryData = useSelector((state) => state.country.activeCountryData);
  return (
    <div className="country-highlights" data-testid="CountryHighlights">
    {activeCountryData && <Box sx={{
        backgroundColor: 'rgba(0,0,0,0.06)'
      }}>
      <List>
        <ListItem>
          {activeCountryData.population && <ListItemText primary={activeCountryData.population.number} secondary={'Population ' + activeCountryData.population.year}>
          </ListItemText>}
        </ListItem>
        <ListItem>
          {activeCountryData.chronic_hunger && <ListItemText primary={activeCountryData.chronic_hunger.number} secondary={'Chronic hunger ' + activeCountryData.chronic_hunger.period}>
          </ListItemText>}
        </ListItem>
        <ListItem>
          {activeCountryData.malnutrition && <ListItemText primary={activeCountryData.malnutrition.acute_percent + '%'} secondary={'Acute Malnutrition ' + activeCountryData.malnutrition.year + ' (% population)'}>
          </ListItemText>}
        </ListItem>
        <ListItem>
          {activeCountryData.malnutrition && <ListItemText primary={activeCountryData.malnutrition.chronic_percent + '%'} secondary={'Chronic Malnutrition ' + activeCountryData.malnutrition.year + ' (% population)'}>
          </ListItemText>}
        </ListItem>
      </List>
      </Box>}
    </div>
  )
};

CountryHighlights.propTypes = {};

CountryHighlights.defaultProps = {};

export default CountryHighlights;
