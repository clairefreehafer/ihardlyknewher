import React, { Component } from 'react';

import Photo from './Photo';
import { getPhotos } from './utils';

export default class Page extends Component {
	constructor (props) {
		super();

		this.state = {
			page: 1,
			prevDisplay: 'none',
			photos: {}
		};
	}

	componentWillMount () {

	}

	render () {
		if (this.state.page > 1) this.setState({ prevDisplay: 'inline' });
		getPhotos()
		.then(photos => console.log(photos))

		return (
			<div id="photos">
				{typeof this.state.photos}
				<div id="previous" style={{ display: this.state.prevDisplay }}>&larr; previous</div>
				<div id="next">next &rarr;</div>
			</div>
		)
	}
}


// get list of photos
// map over list
