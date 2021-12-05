import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            
            <h3 class="mb-5">Sign in</h3>
			
            <form onSubmit={loginUser}>
            <div class="form-outline mb-4">
             <input type="text" name="username" placeholder='Enter Username'></input>
            </div>

            <div class="form-outline mb-4">
              <input type="password" name="password" placeholder="Enter Password"></input>
            </div>
            <br/>
            <input type="submit"/>
            </form>
			


         
        </div>
    )
}

export default LoginPage
