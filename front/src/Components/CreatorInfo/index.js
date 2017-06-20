import React, { Component } from 'react'
import {Row, Col} from 'react-flexbox-grid'
import Dialog from 'material-ui/Dialog'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import './CreatorInfo.css'

class CreatorInfo extends Component {
  state = {
    zDepth: 1,
    dialogOpen: false,
    data: ''
  }

  componentWillMount() {
    axios.get(`mdData/Author/${this.props.mdFile}`).then((data) => {
      this.setState({
        data: data.data
      })
    })
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

  closeDialog() {
    this.setState({
      dialogOpen: false
    })
  }

  openDialog() {
    this.setState({
      dialogOpen: true
    })
  }

  render() {
    return (
      <div>
        <Dialog
          title={this.props.name}
          actions={<FlatButton label="關閉" onTouchTap={this.closeDialog.bind(this)} />}
          modal={true}
          open={this.state.dialogOpen}
          autoScrollBodyContent
          >
            <ReactMarkdown className="info" source={this.state.data} />
          </Dialog>
        <Paper
          className="creatorInfo"
          zDepth={this.state.zDepth}
          onTouchTap={this.openDialog.bind(this)}
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseOut={this.onMouseOut.bind(this)}>
          <Row>
            <Col xs={12} sm={3} className="avatarInfo">
              <Avatar
                src={this.props.img||"//i.imgur.com/TymTGMF.jpg"}
                size={128}
                style={{minWidth: 'auto', marginTop: 10}}
                />
            </Col>
            <Col xs={12} sm={8}>
              <h2>{this.props.name}</h2>
              <p>{this.props.content}</p>
            </Col>
          </Row>
        </Paper>
      </div>
    )
  }
}

export default CreatorInfo
