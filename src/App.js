import React, { Component } from 'react'

import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

class App extends Component {
	render() {
		return (
			<div 
				className="ui container" 
				style={{marginTop: '10px'}}
				data-test="component-app"
			>
				<SearchBar data-test="search-bar" />

				<ImageList data-test="pic-list" />
			</div>
		)
	}
}

export default App
