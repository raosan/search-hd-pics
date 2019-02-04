import React from 'react';
import { connect } from 'react-redux'

import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {
	console.log(props.pics)
	const pics = props.pics.map((pic) => {
		return <ImageCard key={pic.id} image={pic} />
	})

	return (
		<div className="image-list">{pics}</div>
	)
}

const mapStateToProps = (state) => {
  return {pics: state.pics}
}

export default connect(mapStateToProps)(ImageList)
