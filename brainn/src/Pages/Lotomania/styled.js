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
right: 50%;
bottom: 69%;
`
export const SecondCircle = styled.div`
display: flex;
position: fixed;
right: 50%;
bottom: 53%;
`

export const ThirdCircle = styled.div`
display: flex;
position: fixed;
right: 50%;
bottom: 37%;
`

export const FourthCircle = styled.div`
display: flex;
position: fixed;
right: 40%;
bottom: 69%;
`

export const FifthCircle = styled.div`
display: flex;
position: fixed;
right: 40%;
bottom: 53%;
`

export const SixthCircle = styled.div`
display: flex;
position: fixed;
right: 40%;
bottom: 37%;
`

export const SeventhCircle = styled.div`
display: flex;
position: fixed;
right: 30%;
bottom: 69%;
`

export const EighthCircle = styled.div`
display: flex;
position: fixed;
right: 30%;
bottom: 53%;
`

export const NinthCircle = styled.div`
display: flex;
position: fixed;
right: 30%;
bottom: 37%;
`

export const TenthCircle = styled.div`
display: flex;
position: fixed;
right: 20%;
bottom: 69%;
`

export const EleventhCircle = styled.div`
display: flex;
position: fixed;
right: 20%;
bottom: 53%;
`

export const TwelfthCircle = styled.div`
display: flex;
position: fixed;
right: 20%;
bottom: 37%;
`

export const ThirteenthCircle = styled.div`
display: flex;
position: fixed;
right:10%;
bottom: 69%;
`

export const FourteenthCircle = styled.div`
display: flex;
position: fixed;
right:10%;
bottom:53%;
`

export const FifteenthCircle = styled.div`
display: flex;
position: fixed;
right:10%;
bottom:37% ;
`

export const SixteenthCircle = styled.div`
display: flex;
position: fixed;
right: 50%;
bottom:20%;
`

export const SeventeenthCircle = styled.div`
display: flex;
position: fixed;
right: 40%;
bottom: 20%;
`

export const EighteenthCircle = styled.div`
display: flex;
position: fixed;
right: 30%;
bottom: 20%;
`

export const NineteenthCircle = styled.div`
display: flex;
position: fixed;
right: 20%;
bottom: 20%;
`

export const TwentiethCircle = styled.div`
display: flex;
position: fixed;
right:10%;
bottom: 20%;
`

export const StyledCirculo = styled.img`
height: 100px;
width: 100px;
`

export const NumberCircle = styled(Typography)`
&&{
   font-family: 'Montserrat';
   position: absolute;
   left: 2.3rem;
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
