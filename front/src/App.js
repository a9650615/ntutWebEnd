import React, { Component } from 'react'
import MainContent from './Components/MainContent'
import SecendContent from './Components/SecendContent/'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContent />
        <SecendContent />
      </div>
    );
  }
}

export default App;
