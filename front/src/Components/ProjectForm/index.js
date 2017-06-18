import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextInput from '../TextInput'

class ProjectForm extends Component {
  state = {
    formOpen: false
  }

  closeForm() {
    this.setState({
      formOpen: false
    })
  }

  openForm() {
    this.setState({
      formOpen: true
    })
  }

  buttonElements = (
    <div>
      <FlatButton primary label="新增" onTouchTap={this.closeForm.bind(this)} />
      <FlatButton label="取消" onTouchTap={this.closeForm.bind(this)} />
    </div>
  )

  render() {
    return (
      <div>
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
          <p>
            <TextInput 
            hintText="輸入項目標題"
            floatingLabelText="項目標題"
            fullWidth
            />
          </p>
          <p>
            <TextInput 
              hintText="輸入項目說明"
              floatingLabelText="項目說明"
              multiLine
              fullWidth
              />
          </p>
          <p>
            <TextInput 
              type="number"
              floatingLabelText="項目金額"
              defaultValue={0}
              min={0}
              fullWidth
              />
          </p>
        </Dialog>
        <FloatingActionButton 
          onTouchTap={this.openForm.bind(this)}
          style={{position: 'fixed', right: '10%', bottom: '5%'}}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default ProjectForm
