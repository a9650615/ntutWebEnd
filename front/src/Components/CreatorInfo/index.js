import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Row, Col} from 'react-flexbox-grid'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import './CreatorInfo.css'

class CreatorInfo extends Component {
  state = {
    zDepth: 1
  }

  onMouseOver() {
    this.setState({
      zDepth: 2
    })
  }

  onMouseOut() {
    this.setState({
      zDepth: 1
    })
  }

  render() {
    return (
      <Paper 
        className="creatorInfo"
        zDepth={this.state.zDepth}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}>
        <Row>
          <Col xs={12} sm={3} className="avatarInfo">
            <Avatar
              src={this.props.img||"//i.imgur.com/TymTGMF.jpg"}
              size={128}
              style={{minWidth: 'auto'}}
              />
          </Col>
          <Col xs={12} sm={8}>
            <h2>{this.props.name}</h2>
            <p>{this.props.content}</p>
          </Col>
        </Row>
      </Paper>
    )
  }
}

export default CreatorInfo
