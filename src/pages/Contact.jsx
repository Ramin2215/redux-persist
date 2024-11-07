import { decrement } from '@/redux/feature/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Contact = () => {

  const {count} = useSelector(state=>state.allState)

  const dispatch = useDispatch()

  return (
    <div style={{height:"100vh",backgroundColor:"green"}}>Contact
    <br /><br />

    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <div>{count}</div>
    </div>
  )
}

export default Contact