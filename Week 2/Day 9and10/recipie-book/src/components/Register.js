import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebase/firebase"
import { useNavigate } from 'react-router-dom'

export default function Register() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function onRegister(e) {
        e.preventDefault()
        try {
            const userCred = await createUserWithEmailAndPassword(auth,email,password)
            console.log(userCred)
            navigate("/")
        } catch(err) {
            alert("could not create user")
            navigate("/")
        }

    }

    return (
        <div>
            <h1 className='text-center mt-5 display-1'>Register</h1>
            <form className='container card bg-light mt-5 p-5' onSubmit={(e) => {onRegister(e)}}>
                <div className='form-group'>
                    <label className='form-text ms-2'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label className='form-text ms-2'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='form-control'></input>
                </div>
                <button type="submit" className='btn btn-primary mt-2'>Register</button>
            </form>
        </div>
    )
}
