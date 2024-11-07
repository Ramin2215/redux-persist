import React from 'react'
import errorImg from "../assets/erroe.webp"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <button><Link to="/">Go to Home Page</Link></button>
        <img src={errorImg} alt="" />
    </div>
  )
}

export default Error