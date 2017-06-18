import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import './ListElement.css'

class ListElement extends Component {
  state = {  }
  render() {
    return (
      <Paper className="listElement">
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

export default ListElement