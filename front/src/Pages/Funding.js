import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Publish from '../Components/Publisher/'
import FundDetail from '../Components/FundDetail/'

class Funding extends Component {
  render () {
    return (
      <Grid fluid>
        <Row style={{padding: '30px 0'}}>
          <Col xs={12} sm={8}>
            <FundDetail />
          </Col>
          <Col xs={12} sm={4}>
            <Publish />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Funding