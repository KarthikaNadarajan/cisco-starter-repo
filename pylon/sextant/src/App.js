import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
function App() {
  return (
    <div className="App">
    <Banner text="Sextant"/>
    <Exhibit heading="IP address!"></Exhibit>
    <Exhibit content="First address"></Exhibit>


    </div>
  );
}

export default App;
