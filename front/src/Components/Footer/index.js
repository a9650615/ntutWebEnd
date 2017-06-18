import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {Link} from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <Grid fluid>
          <Row>
            <Col sm={3}>
              <img src="/img/logo.png" alt="" style={{width: '100%'}}/>
            </Col>
            <Col smOffset={6} sm={3}>
              <p><Link to="/intruction">美好世界</Link></p>
              <p><Link to="/creator">創世神</Link></p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} sm={6}>只有愛心不被冷漠，為你為台灣</Col>
            <Col xs={12} sm={6} className="textRight">CopyRight@2017.Aqua</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Footer