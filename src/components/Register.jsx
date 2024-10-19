import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
      setFormData({
        ...formData,
        [name]:value
      })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
    
        const result = await axios.post('https://login-reg-for-backend.vercel.app/register/reg', formData)
        if(result.data.acknowledged){
            alert('Register Successfully')

            setFormData({
                name: '',
                email: '',
                password: ''
            });
          
        }
    };
    
  return (
    // card
    <div>
    <div>Register</div>
        <div>
            <input type='text' name='name' placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
            /> 
        </div>
        <div>
            <input type='text' name='email' placeholder='Enter your E-mail'
                value={formData.email}
                onChange={handleChange}
            /> 
        </div>
        <div>
            <input type='password' name='password' placeholder='Enter your Password'
                value={formData.password}
                onChange={handleChange}
            /> 
        </div>
        <Link to="/login" onClick={handleSubmit}>Register</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Register