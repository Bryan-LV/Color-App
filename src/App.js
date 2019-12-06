import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {

  const colorCheck = () => {
    console.log('color check function');
    console.log(...seedColors);
  }
  return (
    <>
    <Palette palette={seedColors[4]}/>
    {colorCheck()}
    </>
  );
}

export default App;
