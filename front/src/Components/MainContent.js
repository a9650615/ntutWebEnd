import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import './MainContent.css'

class MainContent extends Component {
	render () {
		return (
			<div className="MainContent">
				<Grid>
					<div className="titleBlock">
						<h1 className="mainTitle">為這個美好世界獻上肥皂</h1>
						<p>水 肥皂 阿克亞</p>
					</div>
				</Grid>
				<div className="background"></div>
			</div>
		)
	}
}

export default MainContent