import { Box, Typography } from "@mui/material";
import styled from "styled-components";


export const ContainerMain = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #efefef;
    grid-template-columns: 36vw , 1fr;
    
`

export const ImgStyled = styled.img`
width: 36vw;
`

export const ContainerLeft = styled.div`
display: flex;
position: fixed;
justify-content:left;
left: 50px;
padding: 50px;

`

export const BoxTitle = styled.div`
display: flex;
position: fixed;
bottom: 50%;
left: 12%;
`

export const BoxImgRight = styled.div`
display: flex;
position: fixed;
bottom: 48.5%;
`

export const BoxImgLeft = styled.div`
display: flex;
position: fixed;
bottom: 48.5%;
`

export const BoxTitleFooter = styled.div`
display: flex;
position: fixed;
bottom: 12%;
`

export const NumberFooter = styled(Typography)`
&&{
    font-family: 'Montserrat';
    position: fixed;
    bottom: 7%;
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
`

export const FirstCircle = styled.div`
display: flex;
position: fixed;
right: 53%;
bottom: 44%;
`
export const SecondCircle = styled.div`
display: flex;
position: fixed;
right: 43%;
bottom: 44%;
`

export const ThirdCircle = styled.div`
display: flex;
position: fixed;
right: 33%;
bottom: 44%;
`

export const FourthCircle = styled.div`
display: flex;
position: fixed;
right: 23%;
bottom: 44%;
`

export const FifthCircle = styled.div`
display: flex;
position: fixed;
right: 13%;
bottom: 44%;
`

export const StyledCirculo = styled.img`
height: 106px;
width: 111px;
`

export const NumberCircle = styled(Typography)`
&&{
   font-family: 'Montserrat';
   position: absolute;
   left: 2.5rem;
   bottom: 40%;
   font-weight: 700; 
   font-size: 27px;
   line-height: 32px;
}

`

export const Loading = styled(Box)`
&&{
    display: flex;
    position: fixed;
    right: 36%;
    bottom: 44%;
}

`