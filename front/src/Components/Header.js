import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  drawerSw() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  rightButtons() {
    return (
      <div>
        <IconButton iconClassName="material-icons">face</IconButton>
        <IconButton iconClassName="material-icons">&#xE8AF;</IconButton>
        <IconButton iconClassName="material-icons">&#xE5C5;</IconButton>
      </div>
    )
  }

  render() {
    return (
      <div>
        <AppBar
          title="Fakebook"
          onLeftIconButtonTouchTap={this.drawerSw.bind(this)}
          iconElementRight={this.rightButtons()}
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