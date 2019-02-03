import React from 'react';
import { connect } from 'react-redux'

import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />
	})

	return (
		<div className="image-list">{images}</div>
	)
}

const mapStateToProps = (state) => {
  return {pics: state.pics}
}

export default connect(mapStateToProps)(ImageList)
