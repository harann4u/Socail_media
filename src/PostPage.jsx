import React from 'react'
import { Routes,Link, Route, useParams } from 'react-router-dom'


export const PostPage = ({post,handleDelete}) => {
  
  const {id} = useParams();
  const posts = post.find(post=>(post.id).toString()=== id)
  console.log("postPage")
  return (
    <main className='PostPage'>
      <article className='post'>
          {posts &&
            <>
              <h2>{post.title}</h2>
              <p className='postDate'>{posts.dataTime}</p>
              <p className="postBody">{posts.Body}</p>
              <button onClick={()=>handleDelete(posts.id)} className='deleteButton'>Delete Post</button>
            </>
          }
      </article>
      {!posts &&
          <>
            <h2>Page Not found</h2>
            <p>Well,that's disappointing.</p>
            <p> <Link to ="/">Visit Our Home page </Link></p>
          </>

      }
    </main>
  )
}
