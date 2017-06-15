import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import './MainContent.css'

class MainContent extends Component {
	render () {
		return (
			<div className="MainContent">
				<Grid fluid>
					<div className="titleBlock">
						<h1 className="mainTitle">為這個美好世界獻上肥皂</h1>
						<p>#水 #肥皂 #阿克亞</p>
						<RaisedButton label="贊助" secondary />
						<FlatButton label="查看詳細" style={{color: '#fff'}} />
					</div>
				</Grid>
				<div className="background"></div>
			</div>
		)
	}
}

export default MainContent