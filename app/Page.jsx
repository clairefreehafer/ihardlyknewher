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
			<div id="photos">
				{this.state.photos ? this.state.photos.map((photo, idx) => {
					return (
						<div key={photo.id}>
						{console.log(photo)}
							<img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} />
						</div>
					)
				}) : null}
				<div id="previous" style={{ display: this.state.prevDisplay }}>&larr; previous</div>
				<div id="next">next &rarr;</div>
			</div>
		)
	}
}


// get list of photos
// map over list
