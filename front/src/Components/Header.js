import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Login from './Login'

class Logged extends Component {
  logout() {
    localStorage.setItem('token', '')
    this.props.loginEvent()
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color='white' /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="個人資料" />
        <MenuItem onTouchTap={this.logout.bind(this)} primaryText="登出" />
      </IconMenu>
    )
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      login: localStorage.getItem('token') !== null && localStorage.getItem('token') !== ''
    }
  }

  drawerSw() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  loginUpdate() {
    let state = localStorage.getItem('token') !== null && localStorage.getItem('token') !== ''
    this.setState({login: state})
  }

  render() {
    return (
      <div>
        <AppBar
          title="集資網站"
          onLeftIconButtonTouchTap={this.drawerSw.bind(this)}
          iconElementRight={this.state.login? <Logged loginEvent={this.loginUpdate.bind(this)} /> : <Login loginEvent={this.loginUpdate.bind(this)} />}
          />
        <Drawer 
          open={this.state.drawerOpen} 
          docked={false}
          width={300}
          onRequestChange={(data) => this.setState({drawerOpen: data})}>

        </Drawer>
      </div>
    );
  }
}