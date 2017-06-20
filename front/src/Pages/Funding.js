import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Publish from '../Components/Publisher/'
import FundDetail from '../Components/FundDetail/'
import axios from 'axios'

class Funding extends Component {
  state = {
    data: []
  }

  componentWillMount() {
    axios.get(`${process.env['REACT_APP_API_URL']}fundings/subject/${this.props.match.params.fundId}`).then((data) => {
      this.setState({data: data.data.data[0]})
      console.log(data.data.data[0])
    })
  }

  render () {
    return (
      <Grid fluid>
        <Row style={{padding: '30px 0'}}>
          <Col xs={12} sm={8}>
            <FundDetail data={this.state.data} id={this.props.match.params.fundId} />
          </Col>
          <Col xs={12} sm={4}>
            <Publish data={this.state.data} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Funding