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
		this.setState
	}

	render () {
		if (this.state.page > 1) this.setState({ prevDisplay: 'inline' });

		return (
			<div id="photos">
				{this.state.photos.map(photo => {
					return (
						<div class="photo">test</div>
					)
				})}
				<div id="previous" style={{ display: this.state.prevDisplay }}>&larr; previous</div>
				<div id="next">next &rarr;</div>
			</div>
		)
	}
}


// get list of photos
// map over list
