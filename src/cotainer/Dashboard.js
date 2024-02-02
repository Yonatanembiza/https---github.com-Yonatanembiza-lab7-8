import React from 'react';
import { useState, useEffect } from 'react';
import Posts from '../cotainer/Posts'
import axios from 'axios';

const Dashboard = () => {

    
    const [fetchedPostsState, setFetchedPostsState] = useState([]);
    useEffect(() => {
    // fetch("http://localhost:5010/api/v1/posts")
    // .then(fetchedData => fetchedData.json())
    // .then(receivedData => setFetchedPostsState(receivedData))
    // .catch(err => 
    //     console.log(err))
    axios.get("http://localhost:5010/api/v1/posts")
    .then(res => setFetchedPostsState(res.data))
    .catch(err => console.error(err))
    }, []);

    const deletePost =  (id) => {
        const newPost = fetchedPostsState.filter(post =>  post.id !== id);
        setFetchedPostsState(newPost);
    }

  return (
    <div>
        {fetchedPostsState && <Posts posts={fetchedPostsState} deletePost={deletePost}/>}
    </div>
  )
}

export default Dashboard
