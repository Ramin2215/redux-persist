import React, { useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Context } from '../../context/contex';

const HomeLayout = () => {

    const [count,setCount] = useState(1);

    const {user} = useContext(Context);

  return (
    <>
   <nav>
        <ul className='erestun' style={{ display: "flex", listStyle: "none" }}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/basket">Basket</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/map">Map</NavLink></li>
          <li><NavLink to={`/dinamik/${count}`}>Dinamik</NavLink></li>
          <button onClick={()=>setCount(count=>count+1)} style={{backgroundColor:'yellow',color:"black"}}>Dinmik count {count}</button>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li>{user ? user : ""}</li>
        </ul>
      </nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout