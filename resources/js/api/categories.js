import axios from 'axios';

export const getCategories = (page = 1) => axios.get(`/api/categories`, {
	query: {
		page
	},
});
export const getCategory = (slug) => axios.get(`/api/categories/${slug}`);