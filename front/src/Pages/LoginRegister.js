import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import TextInput from '../Components/TextInput'
import FlatButton from 'material-ui/FlatButton'
import './LoginRegister.css'

export default class LoginRegister extends Component {
  render() {
    return (
      <Row center="xs">
        <Col xs={12} md={10}>
          <Paper zDepth={2} className="login-box">
            <div>
              <TextInput 
                hintText="帳號"
                floatingLabelText="輸入您的帳號"
                />
            </div>
            <div>
              <TextInput
                hintText="密碼"
                floatingLabelText="輸入您的密碼"
                />
            </div>
            <FlatButton label="登入" />
          </Paper>
        </Col>
      </Row>
    )
  }
}