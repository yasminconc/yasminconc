import { Button, Container,  TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../contants/Baseurl"
import { useForm } from "../../hooks/useForm";
import { CardButton, CardInput, CardLogo, Logo } from "./styled";
import vetor from "../../img/vetor.png"

export default function LoginPage () {
  const navigate = useNavigate()

  const goToFeed = (navigate) =>{
    navigate('/feed')
  }

  const [form, onChange] = useForm({email:"", senha:""})


    const Login = () =>{
      const body = {
        email: form.email,
        password: form.senha
      }

      axios.post(`${BASE_URL}/users/login`, body)
      .then((res)=>{
        localStorage.setItem("token", res.data.token)
        alert("Login feito com sucesso!")
        goToFeed(navigate)
      })
      .catch((err)=>{
        alert("Erro, tente novamente", err.response)
      })

    }

  return(
   <div>
     <Container>

     
     
     <CardLogo>
        <Logo src={vetor}/>
     </CardLogo>
    

    <Typography variant="h4" align="center" marginBottom={"20px"}>LabEddite</Typography>

    <CardInput>

    <TextField id="outlined-basic" label="Nome" variant="outlined" value={form.email} name="email"  onChange={onChange} />

    <TextField 
     id="outlined-basic"
     label="Senha" variant="outlined"
     value={form.senha}
     name="senha"
     onChange={onChange} 
     type="password"
     autoComplete="current-password" />
     
    </CardInput>
    
    <CardButton>
      
      <Button variant="contained" color="primary" sx={{borderRadius: "200px", width: "270px", marginLeft:"19px", height:"45px", backgroundImage: "linear-gradient(180deg, #7fdeff, #eabaf6)", color:"black"}} onClick={() => {Login()}}>Continuar</Button>

      <Button variant="outlined" color="secondary"  sx={{borderRadius: "200px", width: "270px", marginLeft:"19px", height:"45px"}} onClick={() => {navigate("/cadastro")}}>Crie uma conta</Button>

    </CardButton>
   
    </Container>
   </div>
  )
}