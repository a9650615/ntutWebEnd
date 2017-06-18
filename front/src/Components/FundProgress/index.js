import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import LinearProgress from 'material-ui/LinearProgress'
import './FundProgress.css'

class FundProgress extends Component {
  state = {  }
  render() {
    return (
      <Row className="fundProgress">
        <Col xs={12} sm={8} className="progress">
          <LinearProgress mode="determinate" value={60} />          
        </Col>
        <Col xs={12} sm={4} className="funder">
          Funders
        </Col>
      </Row>
    );
  }
}

export default FundProgress
