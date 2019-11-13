import React from 'react';
import {useParams} from 'react-router-dom';

const Post = () => {
	const {slug} = useParams();

    return (
        <>
            Post slug: {slug}
        </>
    );
}

export default Post;
