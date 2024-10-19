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
    <div className='border border-black flex flex-col w-[30%] h-[60%] items-center relative bg-slate-700 
    text-white rounded-md'>
    {/* form */}
    <div className='absolute left-8 '>

    <div
    className='mt-7 text-3xl font-sans font-semibold'
    >Create an account</div>
        <div className='flex flex-col mb-5 mt-4 gap-1 relative'>
        <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className='bg-slate-500  pl-2 w-[24rem]
                h-[2.2rem] rounded-lg text-white
                '
            /> 
        </div>
        <div className='flex flex-col mb-5 mt-4 gap-1 relative'>
        <label>E-mail</label>
            <input type='text' name='email' placeholder='Enter your E-mail'
                value={formData.email}
                onChange={handleChange}
                className='bg-slate-500 text-white pl-2 w-[24rem]
                h-[2.2rem] rounded-lg
                '
            /> 
        </div>
        <div className='flex flex-col mb-5 mt-4 gap-1 relative'>
        <label>Password</label>
            <input type='password' name='password' placeholder='Enter your Password'
                value={formData.password}
                onChange={handleChange}
                className='bg-slate-500 text-white pl-2 w-[24rem]
                h-[2.2rem] rounded-lg p-5
                '
            /> 
        </div>
       <div className='bg-blue-700 text-center p-2 rounded-lg'>
       <Link to="/login" onClick={handleSubmit} className='w-full'>Create an account</Link>
       </div>
       <div className='mt-4 mb-2'>
       <span className='text-gray-500 font-semibold'>Already an account? </span>
       <Link to="/login" className='text-blue-600'>Login here</Link>
       </div>

    </div>
    
    </div>
  )
}

export default Register