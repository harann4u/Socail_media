import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = ({search,setSearch}) => {
  return (
    <nav className='Nav'>
        <form className='searchForm' onSubmit={(event)=>{event.preventDefault()}} >
            <label htmlFor="search">search Post</label>
            <input 
                type="text"
                id = "search"
                placeholder='Search Posts'
                value = {search}
                onChange={(event)=> setSearch(event.target.value)}
            />
        </form>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="Post">Post</Link></li>
            <li><Link to ="about">About</Link></li>
        </ul>
    </nav>
  )
}
