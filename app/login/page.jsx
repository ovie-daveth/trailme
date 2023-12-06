"use client"
import { Button } from '@/components/ui/button'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import './login.scss'

const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputChange, setInputChange] = useState(0)
  const router = useRouter();

  function changeLabel (num){
    if (num == 1){
      setInputChange(1)
    } else if (num == 2){
      setInputChange(2)
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
    if(!email){
      alert("Please enter your email")
    } else if(!password){
      alert("Please enter your password")
    } else {
      console.log("LoggedIn")
      router.push("/")
    }
  }
  return (
    <div className="formContainer">
      <div className="form shadow-md">
        <h1>Welcome to Trail me</h1>
        <p>Please Login to continue</p>
        <form onSubmit={handleSubmit}>
           <div className="formInput">
              <label className={inputChange == 1 ? "labelOnchange" : "labelbeforeChange"} htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} onClick={() => changeLabel(1)}/>
           </div>
           <div className="formInput">
            <label className={inputChange == 2 ? "labelOnchange" : "labelbeforeChange"} htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} onClick={() => changeLabel(2)} />
           </div>
           <Button>Register</Button>
        </form>
        <div className="again">Or</div>
        <div className="alternate">
          <span><FaGoogle /></span>
          <span><FaGithub /></span>
          <span><FaFacebook /></span>
        </div>
        <span className="account">Don't have an account? <a href="/register">Register</a></span>
      </div>
    </div>
  )
}

export default page
