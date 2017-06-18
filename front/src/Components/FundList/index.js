import React, { Component } from 'react'
import axios from 'axios'
import ListElement from './ListElement'

export default class FundList extends Component {
  state = {}
  componentWillMount() {
    // axios.get(`${process.env['REACT_APP_API_URL']}`)
  }

  render() {
    return (
      <div>
        <ListElement />
      </div>
    )
  }
}