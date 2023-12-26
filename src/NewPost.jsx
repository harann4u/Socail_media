import React from 'react'

export const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
    <main className='NewPost'>
        <h2>New Post</h2>
        <form className = "newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input type="text" 
                 id="PostTitle"
                 required
                 value={postTitle}
                 onChange={(event)=>setPostTitle(event.target.value)}
          />
          <label htmlFor="postBody">post:</label>
          <textarea  
            id="postBody" 
            required
            value ={postBody}
            onChange={(event)=>setPostBody(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
    </main>
  )
}
 