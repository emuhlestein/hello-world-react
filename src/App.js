import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Hello></Hello>
      <Greet name="Ed" age="61"></Greet>
      <Greet name="Bobi" age="62"></Greet>
      <Greet name="Ben" age="21"></Greet>
      <Welcome></Welcome> */}
    </div>
  );
}

export default App;
