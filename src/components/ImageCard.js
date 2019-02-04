import React, { Component } from 'react';
import { connect } from 'react-redux'

import { selectPic } from '../actions'

class ImageCard extends Component {
	render() {
		const {description, urls} = this.props.image

		return (
			<div 
				className="item" 
				onClick={() => this.props.selectPic(this.props.image)}
			>
				<img
					src={urls.regular}
					alt={description}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {pic: state.selectedPic}
}

export default connect(mapStateToProps, {selectPic})(ImageCard)
