import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import './Publisher.css'

class Publisher extends Component {
  state = {
    data: {}
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps) {
      this.setState({
        data: nextProps.data
      })
    }
  }
  
  render() {
    return (
      <div className="publish">
        <div>
          <Avatar 
            src={this.state.data.profile}
            size={128}
            className="avatar"
            style={{minWidth: 'auto'}}
            />
        </div>
        <div className="content">
          {this.state.data.name}
        </div>
        <div>
          {this.state.data.description}
        </div>
      </div>
    )
  }
}

export default Publisher