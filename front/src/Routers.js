import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import App from './App'
import Project from './Pages/Project'
import Intruction from './Pages/Intruction'
import Creator from './Pages/Creator'
import Funding from './Pages/Funding'
import CreatorLists from './Pages/CreatorLists'
import Footer from './Components/Footer/'
// import LoginRegister from './Pages/LoginRegister'

export default class Routers extends Component{
  render() {
    return (
      <div style={{position: 'relative'}}>
        <Header />
        <div className="mainContent" style={{paddingTop: 64, minHeight: 'calc(100vh - 334px)'}}>
          <Switch>
            <Route path="/project/:projectId/fund/:fundId" component={Funding} />
            <Route path="/project/:projectId/" component={Project} />
            <Route path="/intruction" component={Intruction} />
            <Route path="/creator" component={CreatorLists} />
            <Route path="/creator/:name" component={Creator} />
            <Route path="/" component={App}/>
          </Switch>
          {/*<Route path="/login" component={LoginRegister} />*/}
        </div>
        <Footer />
      </div>
    )
  }
}
