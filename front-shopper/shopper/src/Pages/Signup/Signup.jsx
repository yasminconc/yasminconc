import { Box, Container } from "@mui/system"
import axios from "axios"
import React from "react"
import { BASE_URL } from "../Baseurl/Baseurl"
import { ButtonSignup, ContainerInput, FooterText, InputLogin, InputName, InputPassword, LoginText } from "./styled"
import laticinios from '../../Img/laticinios.png'
import { goToFeed, goToLogin } from "../Router/Coordinator"
import { useNavigate } from "react-router-dom"

export default function Signup() {

    const navigate = useNavigate()

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(null)

    

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
            goToFeed(navigate)
        })
        .catch((err) => {
            setError(err.response.data);
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
        <Container>
            <Box>
                <ContainerInput onSubmit={HandleSubmit}>

                <img src={laticinios}  alt='laticinio'/>     

                <LoginText>Cadastre-se</LoginText>

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
                        type="text" 
                        onChange={onchangePassword} 
                        placeholder='password' 
                        value={password}
                        // helperText={error? <p>{error}</p> : null}
                        />

                    <ButtonSignup>Entrar</ButtonSignup>

                    <FooterText>Já tem conta?<span onClick={() => goToLogin(navigate)}>Entrar</span></FooterText>

                </ContainerInput>
            </Box>
             
        </Container>
    )
}