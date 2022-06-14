import { Button, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardFilho, CardInput } from "./styled";
import TextField from '@mui/material/TextField'
import axios from "axios";
import { BASE_URL } from "../../contants/Baseurl";
import { StyledToolbar} from "./styled";
import vetor from "../../img/vetor.png"
import {useForm} from "../../hooks/useForm"

export default function Cadastro () {
   const navigate = useNavigate()

   const [form, onChange] = useForm({ nome:"" , email:"", senha:""})

   const goToFeed = (navigate) =>{
    navigate('/feed')
  }

  const GoToLogin = (navigate)=>{
    navigate('/login')
  }

   const Cadastro = () =>{
     const body = {
      username: form.nome,
      email: form.email,
      password: form.senha
     }

     axios.post(`${BASE_URL}/users/signup`,body)
     .then((res)=>{
      window.localStorage.setItem("token", res.data.token)
      alert("Cadastro feito com sucesso!")
       goToFeed(navigate)
     })
     .catch((err)=>{
       alert("Erro tente novamente", err.response)
     })
   }

  return(
   <div>

      <StyledToolbar>

      <img src={vetor} /> 
      <Button color="inherit" onClick={()=> {navigate("/")} }>Entrar</Button>
      
      </StyledToolbar>      
          
         
   <CardFilho>

   
       <Typography sx={{marginTop:"50px"}} variant="h4" textAlign={"center"}  >Olá,boas vindas ao LabEddite!</Typography>
   
    
  
     
      <CardInput>
     <TextField id="outlined-basic" label="Nome" variant="outlined" value={form.nome} name="nome"  onChange={onChange} />

     <TextField id="outlined-basic" label="email" variant="outlined" value={form.email} name="email"  onChange={onChange} />

      <TextField 
      id="outlined-basic"
      label="Senha" variant="outlined"
      value={form.senha}
      name="senha"
      onChange={onChange} 
      type="password"
      autoComplete="current-password"
      pattern={"^.{8,30}"}
      title={"A precisa precisa contem no mínimo 8 caracteres e no máximo 30"} 
      />
      </CardInput> 
     

    
     

       

       {/* <p>Ao continuar, Você concorda com os nossos termos de uso</p>
       <input type="checkbox" required/> Concordo Com os termos de uso */}
      
   
     <Button variant="contained"  sx={{borderRadius: "100px", width: "290px", marginLeft:"45px"  ,height:"45px", backgroundImage: "linear-gradient(180deg, #7fdeff, #eabaf6)", color:"black"}} onClick={() => Cadastro()}>Cadastrar</Button>
     

     </CardFilho>
   </div>
  )
}