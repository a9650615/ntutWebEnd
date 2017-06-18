import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import LinearProgress from 'material-ui/LinearProgress'
import FontIcon from 'material-ui/FontIcon'
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
          <FontIcon className="material-icons" style={{fontSize: 32}}>account_circle</FontIcon>
          <span className="funders">200 人</span>
        </Col>
      </Row>
    );
  }
}

export default FundProgress
