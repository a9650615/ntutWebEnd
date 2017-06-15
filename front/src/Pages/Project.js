import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import MainContent from '../Components/MainContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContent />
        <Grid fluid>
          這裡是詳細頁面
        </Grid>
      </div>
    );
  }
}

export default App;
