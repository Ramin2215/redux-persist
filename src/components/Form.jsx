import React, { useContext, useEffect } from 'react'
import { Context } from '../context/contex'

const Form = () => {


    const {value,dispatch,submit} = useContext(Context);
   
    useEffect(()=>{


      return ()=>{
        console.log("component destroy");
        
      }
  
    },[])
  
  return (
    <form onSubmit={submit}>
        <input value={value} onChange={(e)=>dispatch({type:"value",payload:e.target.value})} type="text" />
        <button>add</button>
    </form>
  )
}

export default Form