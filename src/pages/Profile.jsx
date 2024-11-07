import React, { useContext } from 'react'
import { Context } from '../context/contex'

const Profile = () => {

    const { setUser } = useContext(Context);


    return (
        <div>
            <div>Profile</div>
            <button onClick={() => setUser(false)}>Profilden cixis</button>
        </div>
    )
}

export default Profile