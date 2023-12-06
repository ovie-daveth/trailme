"use client"
import { Button } from '@/components/ui/button'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import './login.scss'

const page = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputChange, setInputChange] = useState(0)
  const router = useRouter();

  function changeLabel (num){
    if (num == 1){
      setInputChange(1)
    } else if (num == 2){
      setInputChange(2)
    } else if (num == 3){
      setInputChange(3)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name == 'name'){
      setName(value)
    } else if(name == 'email'){
      setEmail(value)
    } else if(name == 'password'){
      setPassword(value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.length >= 5){
      if(password.length <= 5){
        console.log('Please enter a longer password')
      } else if(!email){
        console.log("Please enter an email address")
      } else{
        console.log(name,email,password)
        router.push('/login')
      }
    } else {
      console.log("Username too short")
    }
  }
  return (
    <div className="formContainer">
      <div className="form shadow-md">
        <h1>Welcome to Trail me</h1>
        <p>Please Register to continue</p>
        <form onSubmit={handleSubmit}>
            <div className="formInput">
              <label className={inputChange == 1 ? "labelOnchange" : "labelbeforeChange"} htmlFor="username">Username</label>
              <input type="text" name="name"  onChange={handleChange} onClick={() => changeLabel(1)}/>
           </div>
           <div className="formInput">
              <label className={inputChange == 2 ? "labelOnchange" : "labelbeforeChange"} htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} onClick={() => changeLabel(2)}/>
           </div>
           <div className="formInput">
            <label className={inputChange == 3 ? "labelOnchange" : "labelbeforeChange"} htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} onClick={() => changeLabel(3)} />
           </div>
           <Button>Register</Button>
        </form>
        <div className="again">Or</div>
        <div className="alternate">
          <span><FaGoogle /></span>
          <span><FaGithub /></span>
          <span><FaFacebook /></span>
        </div>
        <span className="account">Already have an account? <a href="/login">Login</a></span>
      </div>
    </div>
  )
}

export default page
