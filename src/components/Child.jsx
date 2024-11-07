import React, { useContext } from 'react'
import { Context } from '../context/contex'

const Child = () => {

    const {name} = useContext(Context);
    
    
    // name --> Erestun
  return (
    <>
    <div>Child</div>
    <div>{name}</div>
    </>
  )
}

export default Child