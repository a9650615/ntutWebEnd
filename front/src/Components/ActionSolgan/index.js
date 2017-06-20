import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import './ActionSolgan.css'

class ActionSolgan extends Component {
	state = {  
		
	}
	render() {
		return (
			<div>
				<div className="ActionSolgan">
					<Grid fluid>
						<div className="titleBlock">
							<h1 className="mainTitle">愛心不會被冷漠無視</h1>
							<RaisedButton 
								label="Join Us"
								onTouchTap={() => this.props.history.push('/intruction')}
								className="joinButton" secondary />
						</div>
					</Grid>
					<div className="background"></div>
				</div>
				<RaisedButton label="Join Us" 
					className="joinButton-sm" 
					onTouchTap={() => this.props.history.push('/intruction')}
					fullWidth 
					secondary />
			</div>
		)
	}
}

export default withRouter(ActionSolgan)