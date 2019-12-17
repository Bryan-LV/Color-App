import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import {Route, Switch} from 'react-router-dom';

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id)
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette Grid List Home</h1>}/>
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>}/>
      {/* <Palette palette={generatePalette(seedColors[4])}/> */}
    </Switch>
  );
}

export default App;
