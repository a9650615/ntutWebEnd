import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import FlatButton from 'material-ui/FlatButton'
import axios from 'axios'
import qs from 'qs'

export default class LoginRegister extends Component {

  responseGoogle(response) {
    // console.log(response.getBasicProfile())
    // console.log(response.getAuthResponse().id_token)
    console.log(response.getBasicProfile())
    localStorage.setItem('token', response.getAuthResponse().id_token)
    if (this.props.loginEvent)
      this.props.loginEvent()
    axios.post(process.env['REACT_APP_API_URL']+'account/?type=login',qs.stringify({
      token: response.getBasicProfile().Eea,
      email: response.getBasicProfile().U3,
      name: response.getBasicProfile().ig,
      profile: response.getBasicProfile().Paa,
      proile: '他很懶，不想寫自介',
    }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
  }

  fail() {

  }

  clickGoogleLogin() {
    this.refs.googleLogin.signIn()
  }

  render() {
    return (
      <div>
        <GoogleLogin 
          clientId="890187450380-gkc7knsure8gf57g8c16n13hp95c7e44.apps.googleusercontent.com"
          buttonText="登入"
          ref="googleLogin"
          scope="profile email"
          onSuccess={this.responseGoogle.bind(this)}
          onFailure={this.fail.bind(this)}
          style={{display: 'none'}}
          />
         <FlatButton 
          label="登入"
          onTouchTap={this.clickGoogleLogin.bind(this)}
          labelStyle={{color: 'white'}}
          style={{marginTop: 6}}
          />
      </div>
    )
  }
}