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
		console.log(this.state.page)
		return (
			<div id="app">
				<div id="photos">
					{this.state.photos ? this.state.photos.map(photo => {
						return (
							<div key={photo.id} className="photo">
								<img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} onClick={this.handlePhotoClick} />
							</div>
						)
					}) : null}

					{this.state.page > 1 ? <div id="previous" style={{ display: this.state.prevDisplay }} onClick={this.handlePreviousClick}>&larr; previous</div> : null}
					<div id="next" onClick={this.handleNextClick}>next &rarr;</div>
				</div>
			</div>
		);
	}
}


// get list of photos
// map over list
