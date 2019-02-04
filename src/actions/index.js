import unsplash from '../api/unsplash'

export const fetchPics = (term) => async dispatch => {
	const response = await unsplash.get('/search/photos', {
		params: { query: term },
	})

	dispatch({
		type: 'FETCH_PICS',
		payload: response.data.results
	})
}

export const selectPic = (pic) => {
	console.log(pic)
  return {
    type: 'PIC_SELECTED',
    payload: pic
  }
}