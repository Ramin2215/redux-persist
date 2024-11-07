import React, { useEffect, useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

const Dinamik = () => {
 
    const data = useLoaderData();

    console.log(data);
    
    
    return (
        <>
            <div style={{height:"100vh",backgroundColor:"orangered"}}>Dinamik
                <img height={300} width={300} src={data.image} alt="" />
            </div>

        </>
    )
}

export default Dinamik