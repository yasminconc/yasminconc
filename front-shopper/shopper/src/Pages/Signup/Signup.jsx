import React from "react"
import axios from "axios"

import { BASE_URL } from "../Baseurl/Baseurl"

import { useNavigate } from "react-router-dom"
import { goToFeed, goToLogin } from "../Router/Coordinator"

import { Box, Container } from "@mui/system"
import { ButtonSignup, ContainerInput, FooterText, InputLogin, InputName, InputPassword, SignupTitle } from "./styled"



    export default function Signup() {

        const navigate = useNavigate()

        const [name, setName] = React.useState('')
        const [email, setEmail] = React.useState('')
        const [password, setPassword] = React.useState('')
        const [error, setError] = React.useState(null)

        

        const signup = ( event ) => {
            event.preventDefault()

            const body = {
                name,
                email,
                password
            }

            axios.post(`${BASE_URL}/signup`, body) 
            .then( ( res ) => {
                window.localStorage.setItem('token', res.data)
                goToFeed(navigate)
            } )
            .catch( ( err ) => {
                setError(err.response.data);
            } )
        }


        const onchangeName = ( { target } ) => {
            setName(target.value)
        }

        const onchangeEmail = ( { target } ) => {
            setEmail(target.value)
        }

        const onchangePassword = ( { target } ) => {
            setPassword(target.value)
        }


        return (
            <Container>
                <Box>
                    <ContainerInput onSubmit={signup}>

                    <p className="shopper-title">Sho<span>pper</span></p>    

                    <SignupTitle>Cadastre-se</SignupTitle>

                        <InputName
                            label='Name' 
                            type="text" 
                            onChange={onchangeName} 
                            placeholder='name'
                            value={name}    
                        />

                        <InputLogin
                            label='Email' 
                            type="email" 
                            onChange={onchangeEmail}
                            placeholder='email' 
                            value={email} 
                        />

                        <InputPassword
                            label='Password'  
                            type="password" 
                            onChange={onchangePassword} 
                            placeholder='password' 
                            value={password}
                        />

                        <ButtonSignup>Entrar</ButtonSignup>

                        <FooterText>Já tem conta?<span onClick={() => goToLogin(navigate)}>Entrar</span></FooterText>

                    </ContainerInput>
                </Box>

            </Container>
        )
    }