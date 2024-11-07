import React, { useContext } from 'react'
import Todo from './Todo'
import { Context } from '../context/contex'

const Todos = () => {


    const {todos} = useContext(Context);

  return (
    <>
    <ul>
        {todos.map((i,index)=>{
            return <Todo key={index}  todo={i}/>
        })}
    </ul>
    <hr />
    </>
  )
}

export default Todos