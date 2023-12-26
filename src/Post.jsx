import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {
    
  return (
    <article className='post'>
      <Link to={`post/${post.id}`}>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.dataTime}</p>
      </Link>
      <p className='postBody'>
      {
        (post.Body).length <= 25
          ? post.Body
          :`${(post.Body).slice(0,25)}...`
      }
      </p>
    </article>
  )
}
