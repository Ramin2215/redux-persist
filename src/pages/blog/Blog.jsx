import { increment } from '@/redux/feature/counterSlice';
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Blog = () => {

  const dispatch = useDispatch();

  return (
    <div style={{height:"100vh",backgroundColor:"red"}}>
      <div>Blog</div>
      <button><Link to="blogdetails">Blog Getails</Link></button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Blog