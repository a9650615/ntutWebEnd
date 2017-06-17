import React, { Component } from 'react'
import ActionSolgan from './Components/ActionSolgan/'
import MainContent from './Components/MainContent'
import SecendContent from './Components/SecendContent/'
import Footer from './Components/Footer/'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActionSolgan />
        <MainContent />
        <SecendContent />
        <Footer />
      </div>
    );
  }
}

export default App;
