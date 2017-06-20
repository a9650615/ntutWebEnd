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
import qs from 'qs'
import TextInput from '../TextInput'
import './FundDetail.css'

class FundDetail extends Component {
  state = {
    message: null,
    openFundSelect: false,
    fundPrice: 100,
    textPrice: this.textChange.bind(this),
    data: {}
  }

  textChange(event) {
    this.setState({fundPrice: event.target.value});
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps) {
      this.setState({
        data: nextProps.data
      })
    }
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
    axios.post(`${process.env['REACT_APP_API_URL']}founder/`, qs.stringify({
      name: jwtDecode(localStorage.getItem('token')).name,
      money: this.state.fundPrice,
      sponsorID: this.props.id,
      token: jwtDecode(localStorage.getItem('token')).sub,
      category: this.props.projectId
    }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
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
          <p>
                贊助金額(Max:100000):
          </p>
          <TextInput 
            value={this.state.fundPrice}
            onChange={this.state.textPrice}
            ref="price"
          />
          <Slider 
            step={0.10} 
            max={100000} 
            value={this.state.fundPrice}
            onChange={this.handleSlider.bind(this)}
          />
        </Dialog>
        <h2>{this.state.data?this.state.data.title:''}</h2>
        <Row>
          <Col xs={12} sm={8} className="progress">
            <LinearProgress mode="determinate" value={(this.state.data.sponsored/this.state.data.goal)*100} />
            {`${Number(this.state.data.sponsored).toFixed(2)} / ${Number(this.state.data.goal).toFixed(2)}`}
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
         {this.state.data.content}
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
