import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PostDetail = () => {
  const [postId, setPostId] = useState('');
  const [postDetails, setPostDetails] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch post details when postId changes
  //   if (postId) {
  //     fetchPostDetails();
  //     console.log("code is here")
  //   }
  // }, []);

  const fetchPostDetails = () => {
    axios.get(`http://localhost:5010/api/v1/posts/${postId}`)
    .then(res => setPostDetails(res.data))
    .catch(err => console.error(err))
  };
  // const fetchPostDetails = fetchPostDetails_();

  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Post Detail</h1>
      <label>Input The Post ID for details:</label>
      <input
        type="text"
        required
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={fetchPostDetails}>Get Details!</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {postDetails && (
        <div className="mt-8">
          <h2 className="text-3xl font-bold">Title</h2>
          <p data-testid="title">{postDetails.title}</p>

          <h2 className="text-l font-light mt-4">Content</h2>
          <p data-testid="content">{postDetails.content}</p>

          <h2 className="text-3xl font-bold">Author</h2>
          <p data-testid="body">{postDetails.author}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
