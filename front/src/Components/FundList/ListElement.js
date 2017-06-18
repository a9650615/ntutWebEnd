import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
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
        onTouchTap={this.go.bind(this, `${this.props.match.params.projectId}/fund/1`)}>
        <div className="avatar">
          <Avatar 
            src="https://lh6.googleusercontent.com/-byV2gLoJ0rk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF7Jt2kovwja6Ys3VOwpP-nsqT_xWg/s96-c/photo.jpg"
            size={64}
            style={{ display: 'inline-block', verticalAlign: 'middle'}}
            />
        </div>
        <div className="content">
          <p>title</p>
          <p>content</p>
          <p className="goal">$ 123</p>
        </div>
      </Paper>
    );
  }
}

export default withRouter(ListElement)
