import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Headedr } from './Headedr'
import { Nav } from './Nav'
import { Home } from './Home'
import { NewPost } from './NewPost'
import { PostPage } from './PostPage'
import { About } from './About'
import { Missing } from './Missing'
import { Footer } from './Footer'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { Post} from './Post'
import {format} from "date-fns"
function App() {
  
  const [post,setPost] = useState([
    {
      id:1,
      title:"My 1st post",
      dataTime:"july 01,2021 11:17:36 AM",
      Body:"Made a video about Testla"
    },
    {
      id:2,
      title:"My 2nd post",
      dataTime:"july 02,2021 12:17:36 AM",
      Body:"this second video"
    },
    {
      id:3,
      title:"My 3rd post",
      dataTime:"july 03,2021 1:17:36 AM",
      Body:"This my third video"
    },
    {
      id:4,
      title:"My 4th post",
      dataTime:"july 04,2021 2:17:36 AM",
      Body:"this is my Fourth video"
    }
  ])
  const [search,setSearch] = useState('')
  const [serachResults,setSearchResults] = useState([])
  const [postTitle,setPostTitle] = useState();
  const [postBody,setPostBody] = useState()
  const  Navigate = useNavigate();
  
  useEffect (()=>{
    const filteredResults = post.filter((post)=>((post.Body).toLowerCase()).includes(search.toLowerCase())) || (((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse())
  },[post,search])

  const handleSubmit = (event)=>{
    event.preventDefault();
    const id = post.length ? post[post.length-1].id + 1 : 1;
    const datatime = format(new Date(),'MMMM dd,yyy pp');
    const newPost = {id, title: postTitle, datatime, Body:postBody}
    const allPosts = [...post, newPost]
    setPost(allPosts)
    setPostTitle('')
    setPostBody('')
    Navigate('/')
  }

  const handleDelete = (id) =>{
    console.log("handleDelete")
    const postList = post.filter(post=> post.id !== id);
    setPost(postList) 
    Navigate('/')
  }

  return (
    <div className="App">
        <Headedr 
             title = "Qube Social Media"
        />
        <Nav
            search={search}
            setSearch={setSearch}
        />
        <Routes>
          <Route path = "/" element = { <Home  post = {serachResults} /> }  />
          <Route path = "post" >
                <Route index  element =   { <NewPost handleSubmit={handleSubmit}
                      postTitle={postTitle}
                      setPostTitle={setPostTitle}
                      postBody={postBody}
                      setPostBody={setPostBody}
                  /> }  />
                <Route path=":id" element = {<PostPage post = {post} handleDelete = {handleDelete}/>} />
          </Route>
         
            <Route path = "about" element = {<About />} />
            <Route path = "*"  element = { <Missing/>} />
        </Routes>
        
        <Footer/>
    </div>
  )
}

export default App
