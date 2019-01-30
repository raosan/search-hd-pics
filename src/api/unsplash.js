import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID a26c3399ef159e492eb3b13d35b450db5f0f462b53338c82d2bb52e722a170ac'
	}
})
