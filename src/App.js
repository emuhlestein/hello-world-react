import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Greet name="Ed" age="61"></Greet>
      <Greet name="Bobi" age="62"></Greet>
      <Greet name="Ben" age="21"></Greet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
