import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import './SecendContent.css'

class SecendContent extends Component {
	render () {
		return (
			<Grid fluid>
				<Row  className="secendContent">
          {/* Section 1 */}
					<Col xs={12} sm={6}>
						<Paper className="listContent">
              <div className="coverImage"></div>
              <div className="detail">
                <h1 className="mainTitle">弱勢族群</h1>
                <p>#地位低 #無權 #無勢</p>
                <RaisedButton label="贊助" secondary />
                <FlatButton label="查看詳細" />
              </div>
						</Paper>
					</Col>
           {/* Section 2 */}
          <Col xs={12} sm={6}>
            <Paper className="listContent">
              <div className="coverImage"></div>
              <div className="detail">
                <h1 className="mainTitle">海洋廢棄物</h1>
                <p>#沙灘破壞</p>
                <RaisedButton label="贊助" secondary />
                <FlatButton label="查看詳細" />
              </div>
						</Paper>
          </Col>
				</Row>
			</Grid>
		)
	}
}

export default SecendContent