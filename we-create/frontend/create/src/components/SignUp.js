import React ,{useState}from 'react'
import {useNavigate } from 'react-router-dom'
import '../style/signup.css'

export const SignUp = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const collectData= async()=>{
        console.warn(name,email,password)
        let result=await fetch('http://localhost:8000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'content-Type':'application/json'
          },
        })
        result=await result.json()
        console.warn(result)
        if(result){
          navigate('/');
        }
    }
  return (
    <div className='register'>
        <h1>Register</h1>
        <input  className="inputBox" type='text' 
         value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
        <input  className="inputBox" type='text' 
        value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input  className="inputBox" type='text' 
        value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
        <button type='button' className='button' onClick={()=>collectData()}>Sign Up</button>
    </div>
  )
}
