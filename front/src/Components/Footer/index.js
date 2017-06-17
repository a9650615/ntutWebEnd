import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <Grid fluid>
          <Row>
            <Col sm={6}>
              title
            </Col>
            <Col sm={6}>
              網站連結
            </Col>
          </Row>
          <hr />
        </Grid>
      </div>
    )
  }
}

export default Footer