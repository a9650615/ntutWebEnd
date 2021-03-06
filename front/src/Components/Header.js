import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {ListItem} from 'material-ui/List'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextInput from '../Components/TextInput'
import Login from './Login'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import qs from 'qs'
import Snackbar from 'material-ui/Snackbar'

class Logged extends Component {
  state = {
    editProfile: false,
    message: null,
    description: ''
  }

  componentWillMount() {
    let data = jwtDecode(localStorage.getItem('token'))
    axios.get(process.env['REACT_APP_API_URL']+'account/id/'+data.sub).then((data) => {
      if (data.data.data[0])
      this.setState({
        description: data.data.data[0].description
      })
    })
  }

  openEditor() {
    this.setState({editProfile: true})
  }

  closeEditor() {
    this.setState({
      editProfile: false,
      message: null
    })
  }

  logout() {
    localStorage.setItem('token', '')
    this.props.loginEvent()
  }

  closeNotice() {
    this.setState({message: null})
  }

  submit() {
    let data = jwtDecode(localStorage.getItem('token'))
     axios.post(process.env['REACT_APP_API_URL']+'account/?type=edit',qs.stringify({
      token: data.sub,
      email: data.email,
      name: data.name,
      profile: data.picture,
      description: this.refs.info.getValue()
    }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    this.setState({
        message: '修改個人資料成功',
        description: this.refs.info.getValue(),
        editProfile: false
    })
  }

  buttonElements = (
    <div>
      <FlatButton primary label="修改" onTouchTap={this.submit.bind(this)} />
      <FlatButton label="關閉" onTouchTap={this.closeEditor.bind(this)} />
    </div>
  )

  render() {
    return (
      <div>
         <Snackbar
          open={this.state.message?true:false}
          message={this.state.message||''}
          autoHideDuration={4000}
          onRequestClose={this.closeNotice.bind(this)}
        />
        <Dialog
          title="修改個人資料"
          actions={this.buttonElements}
          modal={false}
          open={this.state.editProfile}
          onRequestClose={this.closeEditor.bind(this)}
          autoScrollBodyContent
          >
          <TextInput
            hintText="修改個人簡介"
            floatingLabelText="個人簡介"
            ref="info"
            default={this.state.description}
            multiLine
            fullWidth
            />
        </Dialog>
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon color='black' /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
          <MenuItem onTouchTap={this.openEditor.bind(this)} primaryText="個人資料" />
          <MenuItem onTouchTap={this.logout.bind(this)} primaryText="登出" />
        </IconMenu>
      </div>
    )
  }
}

class Header extends Component {
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
          title="弱勢!沙灘!肥皂!?"
          style={{position: 'fixed'}}
          onLeftIconButtonTouchTap={this.drawerSw.bind(this)}
          iconElementRight={this.state.login? <Logged loginEvent={this.loginUpdate.bind(this)} /> : <Login loginEvent={this.loginUpdate.bind(this)} />}
          />
        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          width={300}
          onRequestChange={(data) => this.setState({drawerOpen: data})}>
            <ListItem primaryText="首頁" onTouchTap={() => {this.drawerSw();this.props.history.push('/')}} />
            <ListItem primaryText="美好世界" onTouchTap={() => {this.drawerSw();this.props.history.push('/intruction')}} />
            <ListItem primaryText="創世神" onTouchTap={() => {this.drawerSw();this.props.history.push('/creator')}} />
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Header)
