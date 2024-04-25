import React from 'react'
import './Login.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'

const Login = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("https://localhost:8000/",{
                email,password
            })
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className='login'>
            <form action="POST" className="login-container">
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.closeIcon} alt="" />
                </div>
                <div className="login-input">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Enter Name' required />}
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Example@gmail.com' required />
                    <input type="Password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>by continuing, i aagree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login