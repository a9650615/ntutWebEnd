import React, { Component } from 'react'
import {Grid} from 'react-flexbox-grid'
import CreatorInfo from '../Components/CreatorInfo/'

class CreatorLists extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Grid fluid>
          <CreatorInfo img="/img/enChen.jpg" name="許景程" content={"理念擔當-創世神 Demiurge"} mdFile="EnChen.md"/>
          <CreatorInfo name="蔡銘祐" content={"程式擔當-造物者 Creater"} mdFile="MingYou.md"/>
          <CreatorInfo name="彭旭豪" content={"美術擔當-雕塑者 Sculptor"} mdFile="HowLemon.md"/>
          <CreatorInfo name="林軒弘" content={"執行擔當-奔波者 Rider"} mdFile="Mental.md"/>
        </Grid>
      </div>
    )
  }
}

export default CreatorLists
