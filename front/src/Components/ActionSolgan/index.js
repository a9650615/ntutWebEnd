import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import './ActionSolgan.css'

class ActionSolgann extends Component {
	state = {  
		
	}
	render() {
		return (
			<div>
				<div className="ActionSolgan">
					<Grid fluid>
						<Row className="titleBlock">
							<Col sm={9}>
								<h1 className="mainTitle">愛心不會被冷漠無視</h1>
							</Col>
							<Col sm={3} className="actionButtonBlock">
								<RaisedButton label="Join Us" className="joinButton" secondary />
							</Col>
						</Row>
					</Grid>
					<div className="background"></div>
				</div>
				<RaisedButton label="Join Us" className="joinButton-sm" fullWidth secondary />
			</div>
		)
	}
}

export default ActionSolgann