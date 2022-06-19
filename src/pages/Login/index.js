import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                Username: <input />
            </div>
            <div>
                Password: <input type='password' />
            </div>
            <div><button>Login</button></div>
            <div><button onClick={() => navigate('/')}>Çıkış</button></div>
        </>
    )
}

export default Login;
