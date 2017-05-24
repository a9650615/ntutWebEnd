import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routers from './Routers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css'

injectTapEventPlugin()

ReactDOM.render(
  <Router>
    <MuiThemeProvider>
      <Routers />
    </MuiThemeProvider>
  </Router>, 
document.getElementById('root'));
registerServiceWorker();
