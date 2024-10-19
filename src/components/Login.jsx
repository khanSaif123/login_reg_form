import axios from 'axios'
import React, { useState } from 'react'
import Home from './Home'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

  const [isloggin, setIsLoggin] = useState(false)

  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate()

  const handleChange = (e)=>{
     const {name, value} = e.target
     setLoginData({
      ...loginData,
      [name]:value
     })
  }

  const checkUser =async ()=>{

    if(loginData.email == '' || loginData.password == ''){
      alert('enter the values in the input files')
      return
    }

    try{
      
    let result = await axios.post('https://login-reg-for-backend.vercel.app/register/login', loginData)
    console.log(result)
    console.log(result.data)
    if(result.data == 'Success'){
      // how to navigate to the home page
      navigate('/home')
    }
    else{
      alert(result.data)
    }

    }catch(err){
      console.log(err.message)
    }

  }

  return (
    <div>
        <div>Login</div>

        <div>
            <input type='text' name='email' placeholder='Enter your E-mail'
              required
                value={loginData.email}
                onChange={handleChange}
            /> 
        </div>
        <div>
            <input type='password' name='password' placeholder='Enter your Password'
                value={loginData.password}
                onChange={handleChange}
            /> 
        </div>
    
      <div>
      <button onClick={checkUser}>
        Login
       </button>

       <button>
        <Link to="/register">Register</Link>
       </button>
      </div>
    </div>
    
  )
}

export default Login