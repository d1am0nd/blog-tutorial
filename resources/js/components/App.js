import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Category from './Category';
import {getCategories} from '../api/categories';

const App = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories()
			.then(({data}) => {
				setCategories(data.data);
			})
			.catch(console.log);
	}, []);

    return (
        <Router>
            <div className="title">Our blog</div>
            <div>Categories</div>
            <ul className="categories">
            	{categories.map((category) => (
            		<li key={category.slug}>
            			<Link to={`/categories/${category.slug}`}>
            				{category.name}
            			</Link>
            		</li>
        		))}
            </ul>
        	<Switch>
        		<Route path="/" exact>
        			<Home />
        		</Route>
                <Route path="/posts/:slug" exact>
                    <Post />
                </Route>
                <Route path="/categories/:slug" exact>
                    <Category />
                </Route>
        	</Switch>
        </Router>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
