import React, { Component } from 'react';

const Photo = function (props) {
	const photo = props.metadata;

	return (
		<div className="photo">
			{Object.keys(props.metadata).length > 0 ?
			<img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
			: null}
		</div>
	)
}

export default Photo;
