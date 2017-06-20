import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import './ListElement.css'

class ListElement extends Component {
  state = { 
    zDepth: 1
  }
  go(path) {
    this.props.history.push(path)
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
      <Paper className="listElement" 
        zDepth={this.state.zDepth}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        onTouchTap={this.go.bind(this, `${this.props.match.params.projectId}/fund/${this.props.data.ID}`)}>
        <div className="avatar">
          <Avatar 
            src={this.props.data.profile}
            size={64}
            style={{ display: 'inline-block', verticalAlign: 'middle'}}
            />
        </div>
        <div className="content">
          <Row>
            <Col xs={12} sm={8}>{this.props.data.title}</Col>
            <Col xs={12} sm={4} className="goal">$ {this.props.data.sponsored} / $ {this.props.data.goal}</Col>
          </Row>
        </div>
      </Paper>
    );
  }
}

export default withRouter(ListElement)
