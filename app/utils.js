export const getPhotos = (page) => {
	return axios.get('https://api.flickr.com/services/rest/', {
		params: {
			method: 'flickr.people.getPhotos',
			user_id: 'clairefreehafer',
			api_key: '7358a7e094d78889664b99d33aed9e02',
			format: 'json',
			nojsoncallback: '?',
			per_page: 10
		}
	})
	.then(res => res.data)
	.catch(console.error)
}
