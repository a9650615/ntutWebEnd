import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar'
import TextInput from '../TextInput'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import qs from 'qs'

class ProjectForm extends Component {
  state = {
    formOpen: false,
    message: null
  }

  closeForm() {
    this.setState({
      formOpen: false
    })
  }

  openForm() {
    if (localStorage.getItem('token'))
      this.setState({
        formOpen: true
      })
    else 
      this.setState({
        message: '請先登入!'
      })
  }

  submit() {
    let data = jwtDecode(localStorage.getItem('token'))
    this.setState({message: '新增中...'})
    let send = qs.stringify({
      token: data.sub,
      title: this.refs.title.getValue(),
      content: this.refs.content.getValue(),
      category: this.props.category,
      goal: this.refs.goal.getValue()
    })
    
    axios.post(process.env['REACT_APP_API_URL']+'fundings/?type=POST', send,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then((data) => {
      this.setState({
        formOpen: false,
        message: '新增成功'
      })
      this.props.reload()
    }).catch(function (error) {
      this.setState({message: error})
    });
  }

  closeNotice() {
    this.setState({message: null})
  }

  buttonElements = (
    <div>
      <FlatButton primary label="新增" onTouchTap={this.submit.bind(this)} />
      <FlatButton label="取消" onTouchTap={this.closeForm.bind(this)} />
    </div>
  )

  render() {
    return (
      <div>
        <Snackbar 
          open={this.state.message?true:false}
          message={this.state.message||''}
          autoHideDuration={4000}
          onRequestClose={this.closeNotice.bind(this)}
          />
        <Dialog 
          title="新增項目"
          actions={this.buttonElements}
          open={this.state.formOpen}
          contentStyle={{
            width: '50%',
            maxWidth: '1024px',
            minWidth: '300px',
            padding: '30px'
          }}
        >
          <div>
            <TextInput 
            hintText="輸入項目標題"
            floatingLabelText="項目標題"
            ref="title"
            fullWidth
            />
          </div>
          <div>
            <TextInput 
              hintText="輸入項目說明"
              floatingLabelText="項目說明"
              ref="content"
              multiLine
              fullWidth
              />
          </div>
          <div>
            <TextInput 
              type="number"
              floatingLabelText="項目目標金額"
              defaultValue={0}
              min={0}
              ref="goal"
              fullWidth
              />
          </div>
        </Dialog>
        <FloatingActionButton 
          onTouchTap={this.openForm.bind(this)}
          style={{position: 'fixed', right: '10%', bottom: '5%', zIndex: 5}}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default ProjectForm
