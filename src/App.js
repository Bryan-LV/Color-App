import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import SinglePalette from './SinglePalette';

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id)
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <Home palettes={seedColors}/>}/>
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}/>
      <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SinglePalette {...routeProps} palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>} />
    </Switch>
  );
}

export default App;
