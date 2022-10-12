import axios from "axios"
import React from "react"
import { BASE_URL } from "../Baseurl/Baseurl"


export default function Login() {

    const [email, setEmail] = React.useState( '' )
    const [password, setPassword] = React.useState( '' )


    const handleSubmit = ( event ) => {
        event.preventDefault()
        const body = {
            email,
            password,
        }

        axios.post( `${BASE_URL}/login`, body )
            .then( ( res => {
                window.localStorage.setItem( 'token', res.data );
            } ) ).catch( ( err ) => {
                console.log( err.message );
            } )
    }

    const onChangeEmail = ( { target } ) => {
        setEmail( target.value );
    }

    const onChangePassword = ( { target } ) => {
        setPassword( target.value );
    }

   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={onChangeEmail} placeholder='email' value={email} />
                <input type="text" onChange={onChangePassword} placeholder='password' value={password} />
                <button>Entrar</button>
            </form>  
        </div>
    )
}