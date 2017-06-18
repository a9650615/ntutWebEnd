import React, { Component } from 'react'
import {Grid} from 'react-flexbox-grid'
import CreatorInfo from '../Components/CreatorInfo/'

class CreatorLists extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Grid fluid>
          <CreatorInfo name="許景程" content={"理念擔當-創世神 Demiurge"} />
          <CreatorInfo name="蔡銘祐" content={"程式擔當-造物者 Creater"} />
          <CreatorInfo name="彭旭豪" content={"美術擔當-雕塑者 Sculptor"} />
          <CreatorInfo name="林軒弘" content={"執行擔當-奔波者 Rider"} />
        </Grid>
      </div>
    )
  }
}

export default CreatorLists
