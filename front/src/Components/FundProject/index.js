import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import './FundProject.css'

class FundProject extends Component {
  render () {
    return (
      <div 
        style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486724008897-90887422ab51?dpr=1&auto=format&fit=crop&w=1500&h=846&q=80&cs=tinysrgb&crop=&bg=)'
        }}
        className="FundProject"
        >
        <Grid>
          <h1>專案項目</h1>
          <div>
            <p>專案項目共有{}項</p>
          </div>
          <div>專案圖片</div>
        </Grid>
      </div>
    )
  }
}

export default FundProject