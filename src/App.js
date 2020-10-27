import React, { useState } from 'react';
import Palette from './Pages/Palette';
import Home from './Pages/Home';
import NewPalette from './Pages/NewPalette'
import SinglePalette from './SinglePalette';
import seedColors from './Utils/seedColors';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './Utils/colorHelpers';
import './App.css';
// import Landing from './Pages/Landing';
// import dbAuth from './dbAuth';

function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id)
  }

  const saveNewPalette = (palette) => {
    setPalettes([...seedColors, palette]);
  }

  return (
    <div className="h-screen bg-gray-100">
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/" render={() => <Home palettes={palettes} />} />
        <Route exact path="/palette/new" render={(routeProps) => <NewPalette saveNewPalette={saveNewPalette} {...routeProps} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
        <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SinglePalette {...routeProps} palette={generatePalette(findPalette(routeProps.match.params.paletteId))} />} />
      </Switch>
    </div>
  );
}

export default App;
