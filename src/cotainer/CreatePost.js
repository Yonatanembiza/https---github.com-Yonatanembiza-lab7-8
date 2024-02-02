import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setData] = useState('');
    const [author, setAuthor] = useState('');

    const addPost = (e) =>{
        e.preventDefault();
        const  post = { title, content , author };
        fetch('http://localhost:5010/api/v1/posts', {
            method: 'POST', 
            headers: {'Content-Type': 'application/JSON'},
            body: JSON.stringify(post)         
        })
        .then(
            console.log("New Post Added!")
        )
    }

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={addPost}>
        <label>Title: </label>
        <input 
        type='text' placeholder='title here' required value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <label>Conetent: </label>
        <textarea 
        type='text' placeholder='content here' required value={content} onChange={(e)=>setData(e.target.value)}
        />
        <label>Author: </label>
        <input 
        type='text' placeholder='author here' required value={author} onChange={(e)=>setAuthor(e.target.value)}
        />
        <br></br>
        <button>Add Post</button>
      </form>
    </div>
  )
}

export default CreatePost
