import React, { Component } from 'react'
import unsplash from './api/unsplash'

import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

class App extends Component {
	state = {
		images: [],
		total: null,
		pages: 0
	}

	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		})


		this.setState({
			images: response.data.results,
			total: response.data.total,
			pages: response.data.pages
		});
	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{
					this.state.total !== null &&
					<div>Found: {this.state.total} images</div>
				}

				<ImageList images={this.state.images} />
			</div>
		)
	}
}

export default App
