import React from "react"
import axios from "axios"

import { BASE_URL } from "../Baseurl/Baseurl"

import { Box, ButtonLogin, Container, ContainerInput,  FooterText,  InputLogin, InputPassword, LoginTitle } from "./styled"

import { goToFeed, goToSignup } from "../Router/Coordinator"
import { useNavigate } from "react-router-dom"



    export default function Login() {
        const navigate = useNavigate()

        const [email, setEmail] = React.useState( '' )
        const [password, setPassword] = React.useState( '' )



        const login = ( event ) => {
            event.preventDefault()

            const body = {
                email,
                password,
            }

            axios.post( `${BASE_URL}/login`, body )
                .then( ( res ) => {
                    window.localStorage.setItem( 'token', res.data )
                    goToFeed(navigate)
                    
                } ).catch( ( err ) => {
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
            <Container>
                <Box>
                    <ContainerInput onSubmit={login}>
        
                        <p className="shopper-title">Sho<strong>pper</strong></p>
                        
                        <LoginTitle>Entrar</LoginTitle>

                        <InputLogin 
                            label="Email"
                            type="email"
                            onChange={onChangeEmail}
                            value={email}
                        />

                        <InputPassword
                            label="password"
                            type="password"
                            onChange={onChangePassword}
                            value={password}
                        />

                        <ButtonLogin>Entrar</ButtonLogin>

                        <FooterText>Ainda não tem conta? <span onClick={ () => goToSignup(navigate)}>Criar conta</span></FooterText>
                        
                    </ContainerInput>  
                </Box>
            </Container>
        )
    }