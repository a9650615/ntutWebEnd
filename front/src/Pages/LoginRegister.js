import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import TextInput from '../Components/TextInput'
import FlatButton from 'material-ui/FlatButton'
import { Tab, Tabs } from 'material-ui/Tabs'
import './LoginRegister.css'

export default class LoginRegister extends Component {
  render() {
    return (
      <Row center="xs">
        <Col xs={12} md={10}>
          <Paper zDepth={2} className="login-box">
            <Tabs>
              <Tab label="註冊">

              </Tab>
              <Tab label="登入">
                <div className="content">
                  <div>
                    <TextInput 
                      hintText="帳號"
                      floatingLabelText="輸入您的帳號"
                      fullWidth
                      />
                  </div>
                  <div>
                    <TextInput
                      hintText="密碼"
                      floatingLabelText="輸入您的密碼"
                      fullWidth
                      />
                  </div>
                  <div>
                    <FlatButton label="登入" fullWidth />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Paper>
        </Col>
      </Row>
    )
  }
}