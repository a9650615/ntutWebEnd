import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import axios from 'axios'
import ReactMardown from 'react-markdown'
import FundProject from '../Components/FundProject/'
import FundList from '../Components/FundList/'
import FundProgress from '../Components/FundProgress/'
import ProjectForm from '../Components/ProjectForm/'

let title = [
  '為這個世界獻上肥皂',
  '受到漠視的族群',
  '遭遇人類迫害的砂礫'
]

let mdData = [
  'Soap.md',
  'Social_vulnerable_groups.md',
  'beach_damage.md'
]

class Project extends Component {
  state = {data: ''}
  getTitle() {
    return title[this.props.match.params.projectId-1]
  }

  componentWillMount() {
    axios.get(`/mdData/${mdData[this.props.match.params.projectId-1]}`).then((data) => {
      this.setState({
        data: data.data
      })
    })
  }

  reload() {
    this.refs.list.reload()
  }

  render() {
    return (
      <div className="App">
        <FundProject title={this.getTitle()} projectNumber={0} />
        <Grid fluid>
          <div style={{marginBottom: 50}}>
            <FundProgress />
            <ReactMardown source={this.state.data} />
          </div>
          <FundList ref="list" category={this.props.match.params.projectId} />
          <ProjectForm reload={this.reload.bind(this)} category={this.props.match.params.projectId} />
        </Grid>
      </div>
    );
  }
}

export default Project
