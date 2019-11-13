import React from 'react';
import {useParams} from 'react-router-dom';

const Category = () => {
	const {slug} = useParams();

    return (
        <>
            Category slug: {slug}
        </>
    );
}

export default Category;
