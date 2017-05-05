import React, { Component } from 'react';

import SelectedPhoto from './SelectedPhoto';
import { getPhotos } from './utils';

export default class Page extends Component {
	constructor (props) {
		super();

		this.state = {
			page: 1,
			photos: [],
			selectedPhoto: {}
		};

		this.closeImage = this.closeImage.bind(this);
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

	handlePhotoClick (photo, e) {
		this.setState({ selectedPhoto: photo })
	}

	closeImage () {
		this.setState({ selectedPhoto: {} });
		console.log('test')
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
						let onPhotoClick = this.handlePhotoClick.bind(this, photo)
						return (
							<div key={photo.id} className="photo">
								<img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} onClick={onPhotoClick}/>
							</div>
						)
					}) : null}

					{/* pagination */}
					{this.state.page > 1 ? <div id="previous" onClick={this.handlePreviousClick}>&larr; previous</div> : null}
					<div id="next" onClick={this.handleNextClick}>next &rarr;</div>


				</div>

				{/* selected photo */}
					{Object.keys(this.state.selectedPhoto).length > 0 ?
						<div onClick={this.closeImage}>
							<SelectedPhoto metadata={this.state.selectedPhoto} />
						</div>
						: null}
			</div>
		);
	}
}
