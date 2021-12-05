import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let{user, logoutUser} = useContext(AuthContext);
    return (
        <div>
            <Link to="/" ><button>HOME</button></Link>
            <span>   |   </span>
            {user ? (
                <button onClick={logoutUser}>LOGOUT</button>
            ): (
            <Link to="/login" ><button>LOGIN</button></Link>
            )}

            

            {user && <h1>Hello {user.username}</h1>}
              
        </div>
    )
}

export default Header
