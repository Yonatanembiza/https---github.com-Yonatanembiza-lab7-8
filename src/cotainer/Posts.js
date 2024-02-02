import React from 'react'
import Post from './Post';

const Posts = (props) => {

    const posts = props.posts.map(post => {
        return <Post post={post} deletePost={props.deletePost} key={post.id}/>
    });

    return (
        posts
    )
}

export default Posts
