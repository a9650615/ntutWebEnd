import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import FundProject from '../Components/FundProject/'
import FundList from '../Components/FundList/'
import FundProgress from '../Components/FundProgress/'
import ProjectForm from '../Components/ProjectForm/'

let title = [
  '為這個世界獻上肥皂',
  '受到漠視的族群',
  '遭遇人類迫害的砂礫'
]

class Project extends Component {
  getTitle() {
    return title[this.props.match.params.projectId-1]
  }

  render() {
    return (
      <div className="App">
        <FundProject title={this.getTitle()} />
        <Grid fluid>
          <div>
            <FundProgress />
          </div>
          <FundList />
          <ProjectForm />
        </Grid>
      </div>
    );
  }
}

export default Project
