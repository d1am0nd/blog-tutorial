import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {getPosts} from '../api/posts';
import {getCategories} from '../api/categories';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getPosts()
			.then(({data}) => {
				setPosts(data.data);
			})
			.catch(console.log);

		getCategories()
			.then(({data}) => {
				setCategories(data.data);
			})
			.catch(console.log);
	}, []);

    return (
        <>
            <div className="title">Our blog</div>
            <div>Categories</div>
            <ul className="categories">
            	{categories.map((category) => (
            		<li key={category.slug}>
            			<a href={`/categories/${category.slug}`}>
	            			{category.name}
	            		</a>
            		</li>
        		))}
            </ul>
            <h1>Home</h1>
            {posts.map((post) => (
            	<div key={post.slug}>
            		<h2>{post.title}</h2>
            		<p className="summary">{post.content.substring(0, 200)} ...</p>
            		<em>{post.category.name}</em>
            		<a href={`/posts/${post.slug}`} className="read-more">Read</a>
            	</div>
        	))}
        </>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
