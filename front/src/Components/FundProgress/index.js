import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import LinearProgress from 'material-ui/LinearProgress'
import FontIcon from 'material-ui/FontIcon'
import axios from 'axios'
import './FundProgress.css'

class FundProgress extends Component {
  state = { 
    goal: 0,
    response: 0
  }
  componentWillMount() {
    axios.get(process.env['REACT_APP_API_URL']+'founder/category/'+this.props.projectId).then(data => {
      if (data.data.data[0]) {
        this.setState({
          response: data.data.data[0].response,
          goal: data.data.data[1].response,
        })
      }
    })
  }

  render() {
    console.log(this.state.response,this.state.goal)
    return (
      <Row className="fundProgress">
        <Col xs={12} sm={8} className="progress">
          <LinearProgress mode="determinate" value={(this.state.response/this.state.goal)*100} />          
        </Col>
        <Col xs={12} sm={4} className="funder">
          <FontIcon className="material-icons" style={{fontSize: 32}}>account_circle</FontIcon>
          <span className="funders">{this.props.length} 人</span>
        </Col>
      </Row>
    );
  }
}

export default FundProgress
