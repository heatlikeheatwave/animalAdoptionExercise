import React, { Component } from 'react';
import './App.css';
import PetsList from './PetsList';

class App extends Component {
  render() {
    

    return (
      <div className="App">
        <h1>Adopt us now, Please!</h1>
        <ul>
          <PetsList />
        </ul>
      </div>
    );
  };
}

export default App;