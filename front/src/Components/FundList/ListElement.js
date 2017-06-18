import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import './ListElement.css'

class ListElement extends Component {
  state = {  }
  render() {
    return (
      <Paper className="listElement">
        <p>title</p>
        <p>content</p>
      </Paper>
    );
  }
}

export default ListElement