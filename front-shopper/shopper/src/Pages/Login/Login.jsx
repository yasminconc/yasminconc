import axios from "axios"
import React from "react"
import { BASE_URL } from "../Baseurl/Baseurl"
import { Box, ButtonLogin, Container, ContainerInput,  FooterText,  InputLogin, InputPassword, LoginText } from "./styled"
import mercearia from '../../Img/mercearia.png'
import { goToFeed, goToSignup } from "../Router/Coordinator"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

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
                console.log(res);
                window.localStorage.setItem( 'token', res.data )
                goToFeed(navigate)
                
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
        <Container>
            <Box>
                <ContainerInput onSubmit={handleSubmit}>
    
                   <img src={mercearia} alt='mercearia'/>
                    
                    <LoginText>Entrar</LoginText>

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

                    <FooterText>Ainda não tem conta? <span onClick={() => goToSignup(navigate)}>Criar conta</span></FooterText>
                    
                </ContainerInput>  
            </Box>
        </Container>
    )
}