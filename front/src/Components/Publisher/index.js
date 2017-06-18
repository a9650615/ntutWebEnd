import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import './Publisher.css'

class Publisher extends Component {
  render() {
    return (
      <div className="publish">
        <div>
          <Avatar 
            src=""
            size={128}
            className="avatar"
            />
        </div>
        <div className="content">
          Content
        </div>
      </div>
    )
  }
}

export default Publisher