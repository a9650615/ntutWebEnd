import React, { Component } from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Row , Col } from 'react-flexbox-grid'
import Snackbar from 'material-ui/Snackbar'
import Dialog from 'material-ui/Dialog'
import Slider from 'material-ui/Slider'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import './FundDetail.css'

class FundDetail extends Component {
  state = {
    message: null,
    openFundSelect: false,
    fundPrice: 100
  }

  setMessage(message = null) {
    this.setState({
      message
    })
  }

  handleRequestClose() {
    this.setState({
      message: null
    })
  }

  requestOpenFund() {
    if (!localStorage.getItem('token')) {
      this.setState({
        message: '請先登入以進行贊助!'
      })
    } else {
      this.setState({
        openFundSelect: true
      })
    }
  }

  handleClose() {
    this.setState({
      openFundSelect: false
    })
  }

  handleSlider(e, value) {
    this.setState({
      fundPrice: value
    })
  }

  submit() {
    axios.post(`${process.env['REACT_APP_API_URL']}founders/`, {
      name: jwtDecode(localStorage.getItem('token')).name,
      money: this.state.fundPrice,
      spronsorID: this.props.id,
      token: jwtDecode(localStorage.getItem('token')).sub
    })
    this.handleClose()
  }

  render() {
    return (
      <div className="fundDetail">
        <Dialog
          title="選擇贊助額度"
          actions={<FlatButton primary label="贊助" onTouchTap={this.submit.bind(this)} />}
          modal={false}
          open={this.state.openFundSelect}
          onRequestClose={this.handleClose.bind(this)}
          contentStyle={{width: '300px'}}
        >
          <Slider 
            step={0.10} 
            max={100000} 
            value={this.state.fundPrice}
            onChange={this.handleSlider.bind(this)}
            />
            <p>
              贊助金額: {this.state.fundPrice}
            </p>
        </Dialog>
        <h2>標題</h2>
        <Row>
          <Col xs={12} sm={8} className="progress">
            <LinearProgress mode="determinate" value={60} />
          </Col>
          <Col xs={12} sm={4}>
            <RaisedButton 
              primary 
              label="贊助" 
              className="fundButton"
              onTouchTap={this.requestOpenFund.bind(this)}
              fullWidth
              />
          </Col>
        </Row>
        <div className="detail">
          Bababababababa
          Bababababababa
        </div>
        <Snackbar
          open={this.state.message?true:false}
          message={this.state.message||''}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
          />
      </div>
    )
  }
}

export default FundDetail
