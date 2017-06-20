import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routers from './Routers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import './index.css'

injectTapEventPlugin()

const style = {
  appBar: {
    color: '#fff',
    textColor: '#333'
  }
}

ReactDOM.render(
  <Router>
    <MuiThemeProvider muiTheme={getMuiTheme(style)}>
      <Routers />
    </MuiThemeProvider>
  </Router>, 
document.getElementById('root'));
registerServiceWorker();
