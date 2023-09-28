import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import AddressRequest from './AddressRequest';
function App() {
  return (
    <div className="App">
    <Banner text="Sextant"/>
    <Exhibit name="IPv4 address!">
    <AddressRequest url='https://api.ipify.org?format=json' /></Exhibit>
    <Exhibit name="IPv6 address!">
    <AddressRequest url='https://api64.ipify.org?format=json' />
</Exhibit>
    </div>
  );
}

export default App;
