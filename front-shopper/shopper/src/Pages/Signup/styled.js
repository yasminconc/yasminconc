import { TextField } from "@mui/material";
import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    height: 100vh;
    justify-content: center;
`

export const Box = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vw;
`

export const ContainerInput = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    gap: 0.5rem;

    
    .shopper-title {
        display: flex;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2rem;
        height: 1rem;
    }   

    span {
        color: #e8222e;   
    }
`


export const SignupTitle = styled.p `
    display: flex;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.1rem;
`

export const InputName = styled(TextField) `
    && {
        height: 0.6rem;
        width: 22rem;  
        margin-bottom: 3.5rem;

    }
`

export const InputLogin = styled(TextField) `
    && {
        height: 0.6rem;
        width: 22rem;  
        margin-bottom: 3.5rem;

    }
`
export const InputPassword = styled(TextField) `
    && {
        height: 0.6rem;
        width: 22rem;  
        margin-bottom: 3.7rem;

    }
`


export const ButtonSignup = styled.button`
        width: 22rem;
        height: 2.9rem;
        background-color: #e8222e;
        border: none;
        color: white;
        border-radius: 4.5px;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;

        cursor:pointer;   
    
`


export const FooterText = styled.p `
    display: flex;
    font-family: 'Poppins', sans-serif;
    position: fixed;
    margin-top: 27.4rem ;
    margin-left: 12.2rem;
    font-size: 0.9rem;
    font-weight: 500;
    

    span {
        color:#e8222e;
        margin-left: 5px;
        
        cursor:pointer;
    }
`