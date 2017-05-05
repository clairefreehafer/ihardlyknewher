import React, { Component } from 'react';

const Photo = function (props) {
	const photo = props.metadata;

	return (
		<div id="selected-div">
			<img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`} id="selected-photo" />
		</div>
	)
}

export default Photo;
