import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getPosts} from '../api/posts';

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts()
			.then(({data}) => {
				setPosts(data.data);
			})
			.catch(console.log);
	}, []);

    return (
        <>
            <h1>Home</h1>
            {posts.map((post) => (
            	<div key={post.slug}>
            		<h2>{post.title}</h2>
            		<p className="summary">{post.content.substring(0, 200)} ...</p>
            		<em>{post.category.name}</em>
            		<Link to={`/posts/${post.slug}`} className="read-more">Read</Link>
            	</div>
        	))}
        </>
    );
}

export default Home;
