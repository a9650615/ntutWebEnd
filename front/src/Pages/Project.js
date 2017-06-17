import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import FundProject from '../Components/FundProject/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FundProject />
        <Grid fluid>
          這裡是詳細頁面
        </Grid>
      </div>
    );
  }
}

export default App;
