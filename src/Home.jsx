import React from 'react'
import { Feed } from './Feed'

export const Home = ({post}) => {
  console.log("post"+post)
  return (
    <main className='Home'>
      {post.length ? (
          <Feed post={post} />
      ):(
        <p style = {{marginTop:"2rem"}}>
          No Post to Display.
        </p>
      )}
    </main>
  )
}
