import React, { Component } from 'react'
import axios from 'axios'
import ListElement from './ListElement'

export default class FundList extends Component {
  state = {
    data: []
  }
  componentWillMount() {
    this.reload()
  }

  reload() {
    axios.get(`${process.env['REACT_APP_API_URL']}fundings/category/${this.props.category}`).then((data) => {
      this.setState({
        data: data.data.data
      })
      this.getLength()
    })
  }

  getLength() {
    this.props.getLength(this.state.data.length)
  }

  render() {
    return (
      <div style={{minHeight: '40vh'}}>
        {
          (this.state.data.length>0) && 
          this.state.data.map((data) => {
            return (
            <ListElement key={data.ID} data={data}/>
            )
          })
        }
      </div>
    )
  }
}