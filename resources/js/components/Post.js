import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getPost} from '../api/posts';

const Post = () => {
	const {slug} = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		getPost(slug)
			.then(({data}) => {
				setPost(data.data);
			})
			.catch(console.log);
	}, [slug]);

    return post === null 
    	? <>Loading...</>
    	: <>
	        	<h1>{post.title}</h1>
	        	<p>{post.content}</p>
	    </>;
}

export default Post;
