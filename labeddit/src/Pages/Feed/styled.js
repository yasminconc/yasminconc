import styled from "styled-components"
import {  Toolbar} from "@mui/material";


export const StyledToolbar = styled(Toolbar)`
background-image: linear-gradient(180deg, #7fdeff, #eabaf6);
display: flex;



Button{
  margin-left: 76px;
}

img{
    height: 50px;
    margin-left: 150px;
}

`


export const ContainerInput = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
margin: 20px;
gap: 15px;

`

export const CardComentario = styled.div`
display: flex;
border: 0.5px solid #C0C0C0;
height: 150px;
flex-direction: column;
width: 320px;
padding-left: 10px;
margin-left: 28px;
margin-bottom: 15px;
border-radius: 6px;
`

export const CardReact = styled.div`
display: flex;
padding: 30px;
`

export const CardLike = styled.div`
display: flex;
width: 80px;
height: 26px;
justify-content: space-between;
`

export const CardComentario2 = styled.div`
margin-left: 20px;
display: flex;
align-items: center;
text-align: center;
width: 60px;
height: 35px;
padding-left: 10px;
`
