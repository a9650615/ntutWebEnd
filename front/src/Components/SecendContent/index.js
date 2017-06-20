import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import './SecendContent.css'

class SecendContent extends Component {
  go(path) {
    this.props.history.push(path)
  }

	render () {
		return (
			<Grid fluid>
				<Row className="secendContent">
          {/* Section 1 */}
					<Col xs={12} sm={6}>
						<Paper className="listContent">
              <div className="coverImage"></div>
              <div className="detail">
                <h1 className="mainTitle">受到漠視的族群</h1>
                <p className="tag">#地位低 #無權 #無勢</p>
                <RaisedButton
                  label="查看詳細"
                  secondary
                  onTouchTap={this.go.bind(this, '/project/2')}
                  />
              </div>
						</Paper>
					</Col>
           {/* Section 2 */}
          <Col xs={12} sm={6}>
            <Paper className="listContent beach">
              <div className="coverImage"></div>
              <div className="detail">
                <h1 className="mainTitle">被人類侵蝕的淨土</h1>
                <p className="tag">#沙灘破壞</p>
                <RaisedButton
                  label="查看詳細"
                  secondary
                  onTouchTap={this.go.bind(this, '/project/3')}
                  />
              </div>
						</Paper>
          </Col>
				</Row>
			</Grid>
		)
	}
}

export default withRouter(SecendContent)
