import axios from 'axios';

export const getPosts = (page = 1) => axios.get('/api/posts', {
	query: {
		page,
	},
});
export const getPost = (slug) => axios.get(`/api/posts/${slug}`);