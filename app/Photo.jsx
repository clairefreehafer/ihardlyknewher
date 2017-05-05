import React, { Component } from 'react';

const Photo = function (props) {
	const photo = props.metadata;

	return (
		<div className="photo">
			<img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
		</div>
	)
}

export default Photo;
