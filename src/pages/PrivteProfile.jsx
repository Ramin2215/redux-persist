import React, { useContext } from 'react'
import { Context } from '../context/contex'
import { Navigate, useLocation } from 'react-router-dom';

const PrivteProfile = ({ children }) => {


    const { user } = useContext(Context);
    const location = useLocation();

    console.log(location);
    

    if (!user) {
        return <Navigate to="/login" state={location.pathname} />
    }



    return (children)
}

export default PrivteProfile