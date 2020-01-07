import React from 'react';
import Palette from './Palette';
import Home from './Home';
import NewPalette from './NewPalette'
import SinglePalette from './SinglePalette';
import seedColors from './seedColors';
import {Route, Switch} from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import './App.css';

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id)
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <Home palettes={seedColors}/>}/>
      <Route exact path="/palette/new" render={() => <NewPalette />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}/>
      <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SinglePalette {...routeProps} palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>} />
    </Switch>
  );
}

export default App;
