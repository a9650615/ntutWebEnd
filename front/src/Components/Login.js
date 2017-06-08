import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import FlatButton from 'material-ui/FlatButton'

export default class LoginRegister extends Component {

  responseGoogle(response) {
    // console.log(response.getBasicProfile())
    // console.log(response.getAuthResponse().id_token)
    localStorage.setItem('token', response.getAuthResponse().id_token)
    if (this.props.loginEvent)
    this.props.loginEvent()
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