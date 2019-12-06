import React from 'react';
import './App.css';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
  return (
    <Pallete {...seedColors}></Pallete>
  );
}

export default App;
