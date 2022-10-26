import styled from "styled-components";
import TextField from '@mui/material/TextField';


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
    gap: 2.3rem;
    margin-top: 7rem;

    .shopper-title {
        display: flex;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2rem;
        height: 0.5rem;
    }   

    strong {
        color: #e8222e;   
    }
`

export const LoginTitle = styled.div `
    display: flex;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.3rem;
 
`

export const InputLogin = styled(TextField)`
    && {
        height: 0.6rem;
        width: 22rem;  
        margin-bottom: 2rem;
    }
    
`

export const InputPassword = styled(TextField)`
    && {
        height: 0.6rem;
        width: 22rem;  
        margin-bottom: 2rem;
    }
    
`

export const ButtonLogin = styled.button`
        width: 22rem;
        height: 2.7rem;
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
    margin-top: 24.4rem ;
    margin-left: 6.2rem;
    font-size: 0.9rem;
    font-weight: 500;
    

    span {
        color:#e8222e;
        margin-left: 5px;
        cursor:pointer;
    }
`


