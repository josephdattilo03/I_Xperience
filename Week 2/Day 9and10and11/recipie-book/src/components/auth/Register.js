import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase/firebase"
import { useNavigate } from 'react-router-dom'
import Alert from '../common/Alert'
import Button from "../common/Button"

export default function Register() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function onRegister(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCred)
            navigate("/")
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)

    }

    return (
        <div>
            <h1 className='text-center mt-5 display-1'>Register</h1>
            <form className='container card bg-light mt-5 p-5' onSubmit={(e) => { onRegister(e) }}>
                <div className='form-group'>
                    <label className='form-text ms-2'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label className='form-text ms-2'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='form-control'></input>
                </div>
                <Button type="submit" className="px-5" loading={loading}>
                    Login
                </Button>
            </form>
            <div className='container'>
                <Alert
                    variant="danger"
                    className="mt-5"
                    show={error}
                    onHide={() => setError('')}
                >
                    {error}
                </Alert>
            </div>
        </div>
    )
}
