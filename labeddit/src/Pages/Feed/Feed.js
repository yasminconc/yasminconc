import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../contants/Baseurl";
import { useToken } from "../../hooks/useToken";
import { CardComentario2, CardLike, ContainerInput, StyledToolbar} from "./styled";
import vetor from "../../img/vetor.png"
import { Button, CardActions, CardContent, TextField, Typography } from "@mui/material";
import Card from '@mui/material/Card'
import { formatMuiErrorMessage } from "@mui/utils";
import { useForm } from "../../hooks/useForm";
import { CardComentario,CardReact } from "./styled";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export default function Feed () {
   useToken()

  const[post,setPost] = useState([])
  const navigate = useNavigate()

  const [form, onChange] = useForm({ titulo:"", body:""})

  const postCadastro = () =>{
    const token = window.localStorage.getItem('token')


    axios.get(`${BASE_URL}/posts`,{
      headers:{
        Authorization:token
      }
    })
    .then((res)=>{
      setPost(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      alert(err.response)
    })
  }

  useEffect(()=>{
    postCadastro()
  },[])


  const creatPost = () =>{
    const token = window.localStorage.getItem('token')
    const body ={
      title: form.titulo,
      body: form.body
    }

    axios.post(`${BASE_URL}/posts`, body ,{
      headers:{
        Authorization: token
      }
    })
    .then((res)=>{
      postCadastro()
      alert("Post criado com sucesso!")
    })
    .catch((err)=>{
      alert("erro tente novamente!")
      console.log(err.response)
    })

   


  }

  const Logout = () =>{
    window.localStorage.removeItem('token')
    navigate('/')
  }

  const GoToPost = (id) =>{
    navigate(`/post/${id}`)
  }

  const botaoLike = (vote,postId) =>{
    if(vote === 1){
        Like(postId)
    }else{
      Like(postId, 1)
    }
  }

  const botaoDeslike = (vote,postId) =>{
    if(vote === -1){
        Like(postId)
    }else{
      Like(postId, - 1)
    }
  }

  const Like = (postId, direction) =>{
    const token = window.localStorage.getItem('token')
    const body ={
      direction: direction
    }

    if(direction === 1){
      axios.post(`${BASE_URL}/posts/${postId}/votes`,body,{
        headers:{
          Authorization: token
        } 
      })
      .then((res)=>{
        postCadastro()
      })
      .catch((err)=>{
        alert("erro tente novamente")
      })

    }else if (direction === -1){
      axios.put(`${BASE_URL}/posts/${postId}/votes`,body,{
        headers:{
          Authorization: token
        }
      })
      .then((res)=>{
        postCadastro()
      })
      .catch((err)=>{
        alert("erro tente novamente")
      })

    } else {
      axios.delete(`${BASE_URL}/posts/${postId}/votes`,{
        headers:{
          Authorization: token
        }

      })
      .then((res)=>{
        postCadastro()
      })
      .catch((err)=>{
        alert("erro tente novamente")
      })
    }

  }

  return(
   <div>
     <StyledToolbar>

     <img src={vetor} /> 
     <Button onClick={Logout} color="inherit" >Logout</Button>

     </StyledToolbar>

     
     <ContainerInput>
      <TextField placeholder="titulo" value={form.titulo} onChange={onChange} name="titulo"/>
    
     

        <TextField
          id="outlined-multiline-static"
          label="Digite seu post aqui"
          multiline
          rows={4}
          defaultValue="Default Value"
          value={form.body}
          onChange={onChange}
          name="body"
        />


  

     <Button variant="contained" sx={{borderRadius: "100px", width: "300px", marginLeft:"10px"  ,height:"45px", backgroundImage: "linear-gradient(180deg, #7fdeff, #eabaf6)", color:"black"}}  onClick={()=> creatPost()}>Postar</Button >
    
     </ContainerInput>

     <div>
       {post.map((posts)=>{
         return(

          <Card variant="outlined" sx={{ m: 2 }} >
      <CardContent>
        <Typography onClick={()=> GoToPost(posts.id) } sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          enviado por:{posts.username}
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 , color:"black"}}  variant="h6">
            {posts.title}
        </Typography>
        <Typography variant="body2">
           {posts.body}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button sx={{ color: posts.userVote === 1 ? "#32CD32" : "#1E90FF"}} onClick={()=> botaoLike(posts.userVote,posts.id)} size="small"><ThumbUpOutlinedIcon /></Button>
        <Typography>{posts.voteSum}</Typography>
        <Button  sx={{ color: posts.userVote == -1 ? "#B22222" : "#1E90FF"}}  onClick={()=> botaoDeslike(posts.userVote,posts.id)} size="small"><ThumbDownAltOutlinedIcon/></Button>
            {post.userVote && "null"}
        <Button  size="small"><ChatBubbleOutlineOutlinedIcon/></Button>
        <Typography>{posts.commentCount}</Typography>
      </CardActions>
     </Card>
              

           
           
         ) 
       })}
     </div>
     
   </div>
  )
}