import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Components/Header'
import App from './App'
import Project from './Pages/Project'
import Intruction from './Pages/Intruction'
import Creator from './Pages/Creator'
// import LoginRegister from './Pages/LoginRegister'

export default class Routers extends Component{
  render() {
    return (
      <div>
        <Header />
        <div style={{paddingTop: 64}}>
          <Route exact path="/" component={App}/>
          <Route path="/project/*" component={Project}/>
          <Route path="/intruction" component={Intruction} />
          <Route path="/creator" component={Creator} />
          {/*<Route path="/login" component={LoginRegister} />*/}
        </div>
      </div>
    )
  }
}
