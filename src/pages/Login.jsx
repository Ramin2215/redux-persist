import React, { useContext, useState } from 'react'
import { Context } from '../context/contex'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const {setUser} = useContext(Context);
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location,"login sehifesi");
    

    const Register = (e)=>{
        e.preventDefault()
        navigate(location.state);
        setUser(input)
    }


  return (
    <div style={{height:"100vh",backgroundColor:"blue"}}>
        <div>Login</div>


<form onSubmit={Register} action="">
    <input onChange={(e)=>setInput(e.target.value)} type="text" />
    <button>Qeydiyyat</button>
</form>

       
        <button >
            <Link to="/">Ana Sehife</Link>
        </button>
    </div>
  )
}

export default Login