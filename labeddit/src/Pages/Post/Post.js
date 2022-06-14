import { Button, Card, CardActions, CardContent, Input, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledToolbar } from "../Feed/styled";
import vetor from "../../img/vetor.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../contants/Baseurl";
import { useForm } from "../../hooks/useForm";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Campo, CardComentario, CardComentario2, CardInput, CardLike, CardReact } from "./styled";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

export default function App() {
  const postId = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  const [form, onChange, clean] = useForm({ body: "" });
  const [comments, setComments] = useState([]);
  const [vote, setVote] = useState({})
  



  const PullPost = () => {
    const token = window.localStorage.getItem("token");

    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        const array = filterPost(res.data);
        setPost(array);
      })
      .catch((err) => {
        alert("Erro tente novamente", err.response.data);
      });
  };

  useEffect(() => {
    PullPost();
    GetComments(postId.id);
  }, []);

  console.log(postId.id)

  const filterPost = (posts) => {
    return posts.find((post) => {
      if (post.id === postId.id) {
        return true;
      }
    });
  };

  const GetComments = (id) => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BASE_URL}/posts/${id}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const CreateComments = (id) => {
    const token = window.localStorage.getItem("token");
    const body = {
      body: form.body
    };

    axios
      .post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
          Authorization: token
        }
      })
      
      .then((res) => {
        console.log(res.data)
        GetComments(id);
        clean()
        PullPost()
      })
      .catch((err) => {
        console.log("Erro tente novamente!");
        console.log(err.response)
      });
  };

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



  
  const goBack = () =>{
    navigate(-1)
  }

  return (
    <div>
      <StyledToolbar>
        <img src={vetor} />
        <Button onClick={() => goBack()} color="inherit">
          Voltar
        </Button>
      </StyledToolbar>

      <div>
      <Card variant="outlined" sx={{ m: 3, width:"300px", marginLeft:"40px" }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          enviado por: {post.username}
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 , color:"black"}}  variant="h6">
            {post.title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 15 }}>
           {post.body}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button  sx={{ color: post.userVote === 1 ? "#32CD32" : "#1E90FF"}} onClick={()=> botaoLike(post.userVote,post.id)} size="small"><ThumbUpOutlinedIcon /></Button>
        <Typography>{post.voteSum}</Typography>
        <Button sx={{ color: post.userVote == -1 ? "#B22222" : "#1E90FF"}} onClick={()=> botaoDeslike(post.userVote,post.id)} size="small"><ThumbDownAltOutlinedIcon/></Button>

        <Button size="small"><ChatBubbleOutlineOutlinedIcon/></Button>
        <Typography>{post.commentCount}</Typography>
      </CardActions>
     </Card>
       
      </div>

      <CardInput>
         <TextField sx={{width:"300px", marginLeft: "9px", marginBottom:"20px", wordWrap:"break-word"}}
          id="outlined-multiline-static"
          label="Adcionar comentário"
          multiline
          rows={4}
          value={form.body}
          onChange={onChange}
          name="body"
          
        />
      </CardInput>
       
    
      <Button variant="contained" sx={{borderRadius: "100px", width: "300px", marginLeft:"45px"  ,height:"45px", backgroundImage: "linear-gradient(180deg, #7fdeff, #eabaf6)", color:"black"}}  onClick={()=> CreateComments(post.id)}>Criar</Button >


      {comments.map((coment) => {
        return(

          <Card variant="outlined" sx={{ m: 3, width:"300px", marginLeft:"40px", wordWrap:"break-word", backgroundColor:"#f5f5f5" }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          enviado por: {coment.username}
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 , color:"black"}}  variant="h6">
            {Comment.title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 18 }}>
           {coment.body}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button sx={{ color: post.userVote === 1 ? "#32CD32" : "#1E90FF"}} onClick={()=> botaoLike(post.userVote,post.id)}  size="small"><ThumbUpOutlinedIcon /></Button>
        <Typography>{coment.voteSum}</Typography>
        <Button sx={{ color: post.userVote == -1 ? "#B22222" : "#1E90FF"}} onClick={()=> botaoDeslike(post.userVote,post.id)} size="small"><ThumbDownAltOutlinedIcon/></Button>

        
      </CardActions>
     </Card>

          // <p>{coment.body}</p>
        ) 
      })}
    </div>
  );
}
