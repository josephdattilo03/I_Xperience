
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebase/firebase"
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function onLogin(e) {
        e.preventDefault()
        try {
            const userCred = await signInWithEmailAndPassword(auth,email,password)
            console.log(userCred)
            navigate("/")
        } catch(err) {
            alert("could not login")
            navigate("/")
        }

    }

    return (
        <div>
            <h1 className='text-center mt-5 display-1'>Login</h1>
            <form className='container card bg-light mt-5 p-5' onSubmit={(e) => {onLogin(e)}}>
                <div className='form-group'>
                    <label className='form-text ms-2'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label className='form-text ms-2'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='form-control'></input>
                </div>
                <button type="submit" className='btn btn-primary mt-2'>Login</button>
            </form>
        </div>
    )
}