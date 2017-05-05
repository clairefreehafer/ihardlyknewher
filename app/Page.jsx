import React, { Component } from 'react';

import Photo from './Photo';
import { getPhotos } from './utils';

export default class Page extends Component {
	constructor (props) {
		super();

		this.state = {
			page: 1,
			photos: []
		};

		this.handlePhotoClick = this.handlePhotoClick.bind(this);
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
	}

	componentDidMount () {
		getPhotos(this.state.page)
		.then(photos => this.setState({ photos: photos.photos.photo }))
	}

	componentDidUpdate () {
		// load new page of photos
		getPhotos(this.state.page)
		.then(photos => this.setState({ photos: photos.photos.photo }))
	}

	handlePhotoClick () {

	}

	handleNextClick () {
		this.setState({ page: this.state.page + 1 });
	}

	handlePreviousClick () {
		this.setState({ page: this.state.page - 1 });
	}

	render () {
		return (
			<div id="app">
				<div id="photos">

					{/* render photos */}
					{this.state.photos ? this.state.photos.map(photo => {
						return (
							<Photo key={photo.id} metadata={photo} />
						)
					}) : null}

					{/* pagination */}
					{this.state.page > 1 ? <div id="previous" onClick={this.handlePreviousClick}>&larr; previous</div> : null}
					<div id="next" onClick={this.handleNextClick}>next &rarr;</div>

				</div>
			</div>
		);
	}
}


// get list of photos
// map over list
