import React, { Component } from 'react';

import Photo from './Photo';
import { getPhotos } from './utils';

export default class Page extends Component {
	constructor (props) {
		super();

		this.state = {
			page: 1,
			prevDisplay: 'none',
			photos: []
		};
	}

	componentWillMount () {
		if (this.state.page > 1) this.setState({ prevDisplay: 'inline' });
		getPhotos()
		.then(photos => this.setState({ photos: photos.photos.photo }))
	}

	render () {
		return (
			<div id="app">
				<div id="photos">
					{this.state.photos ? this.state.photos.map(photo => {
						return (
							<div key={photo.id} className="photo">
								<img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
							</div>
						)
					}) : null}
				</div>
				<div id="pagnation">
					<div id="previous" style={{ display: this.state.prevDisplay }}>&larr; previous</div>
					<div id="next">next &rarr;</div>
				</div>
			</div>
		);
	}
}


// get list of photos
// map over list
