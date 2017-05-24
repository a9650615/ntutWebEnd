import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'
import Header from './Components/Header'
import App from './App'
import LoginRegister from './Pages/LoginRegister'

export default class Routers extends Component{
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={LoginRegister} />
        </Grid>
      </div>
    )
  }
}
