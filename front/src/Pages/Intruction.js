import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from 'react-flexbox-grid'
import ReactMarkdown from 'react-markdown'

class Intruction extends Component {
  state = {
    textData: ''
  }

  componentWillMount() {
    axios.get('/mdData/intruction.md').then((data) => {
      this.setState({textData: data.data})
    })
  }

  render() {
    return (
      <Grid fluid>
        <ReactMarkdown source={this.state.textData} />
      </Grid>
    )
  }
}

export default Intruction