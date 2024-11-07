import React from 'react'
import { useSelector } from 'react-redux'

const Basket = () => {
    const {count,basket,data} = useSelector((state)=>state.allState)

  return (
    <div style={{height:"100vh",backgroundColor:"blue",padding:"20px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"30px"}}>

    {basket?.map((item)=>(
      <div className="box" style={{width:"200px",height:"200px"}}>
        <div style={{width:"200px",height:"170px"}}>
        <img style={{width:"100%",height:"100%"}} src={item.image} alt="" />
        </div>
       
      </div>
    ))}
  
    </div>
  )
}

export default Basket