import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id)
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <Home palettes={seedColors}/>}/>
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}/>
      {/* <Palette palette={generatePalette(seedColors[4])}/> */}
    </Switch>
  );
}

export default App;
