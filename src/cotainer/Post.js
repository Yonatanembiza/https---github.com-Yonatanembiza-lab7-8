import React from 'react'

const Post = (props) => {
  return (
    <div>
        <p>{props.post.id}</p>
        <p>{props.post.title}</p>
        <p>{props.post.content}</p>
        <p>{props.post.author}</p>
        <button onClick={()=>props.deletePost(props.post.id)}>Delete</button>
    </div>
  )
}

export default Post
