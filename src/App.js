import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <>
    <Palette palette={seedColors[4]}/>
    </>
  );
}

export default App;
