export const getPhotos = (page) => {
	return axios.get('https://api.flickr.com/services/rest/', {
		params: {
			method: 'flickr.people.getPublicPhotos',
			user_id: '34650416@N08',
			api_key: '7358a7e094d78889664b99d33aed9e02',
			format: 'json',
			nojsoncallback: '?', // was returning string w/o this
			per_page: 10,
			page: page
		}
	})
	.then(res => res.data)
	.catch(console.error)
}
