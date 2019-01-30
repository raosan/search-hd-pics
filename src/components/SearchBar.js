import React, { Component } from 'react';

class SearchBar extends Component {
	state = {term: ''}

	onInputChange = (event) => {
		this.setState({term: event.target.value})
	}

	onFormSubmit = (e) => {
		e.preventDefault()

		this.props.onSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="">Image Search</label>
						<input 
							type="text" 
							onChange={this.onInputChange} 
							value={this.state.term} 
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar
