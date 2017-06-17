import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from 'react-flexbox-grid'
import ReactMarkdown from 'react-markdown'

class Creator extends Component {
  state = {
    textData: ''
  }

  componentWillMount() {
    axios.get('/mdData/AuthorIn.md').then((data) => {
      this.setState({textData: data.data})
    })
  }

  render() {
    return (
      <Grid fluid>
        創造者頁面
        <ReactMarkdown source={this.state.textData} />
      </Grid>
    )
  }
}

export default Creator