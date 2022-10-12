import axios from "axios"
import React from "react"
import { BASE_URL } from "../Baseurl/Baseurl"


export default function Signup() {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    const HandleSubmit = (event) => {
        event.preventDefault()
        const body = {
            name,
            email,
            password
        }

        axios.post(`${BASE_URL}/signup`, body) 
        .then((res) => {
            console.log(res);
            window.localStorage.setItem('token', res.data)
        })
        .catch((err) => {
            console.log(err.message);
        })
    }


    const onchangeName = ({target}) => {
        setName(target.value)
    }

    const onchangeEmail = ({target}) => {
        setEmail(target.value)
    }

    const onchangePassword = ({target}) => {
        setPassword(target.value)
    }


    return (
        <div>
             <form onSubmit={HandleSubmit}>
                <input type="text" onChange={onchangeName} placeholder='name' value={name} />
                <input type="text" onChange={onchangeEmail} placeholder='email' value={email} />
                <input type="text" onChange={onchangePassword} placeholder='password' value={password} />
                <button>Entrar</button>
             </form>
        </div>
    )
}