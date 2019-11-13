import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {getCategory} from '../api/categories';

const Category = () => {
	const {slug} = useParams();
	const [category, setCategory] = useState(null);

	useEffect(() => {
		getCategory(slug)
			.then(({data}) => {
				setCategory(data.data);
			})
			.catch(console.log);
	});

    return category === null 
    	? <>Loading...</>
    	: <>
    		<h1>{category.name}</h1>
            {category.posts.map((post) => (
            	<div key={post.slug}>
            		<h2>{post.title}</h2>
            		<p className="summary">{post.content.substring(0, 200)} ...</p>
            		<em>{category.name}</em>
            		<Link to={`/posts/${post.slug}`} className="read-more">Read</Link>
            	</div>
        	))}
    	</>;
}

export default Category;
