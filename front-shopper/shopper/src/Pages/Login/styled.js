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

export const ContainerInput = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 8rem;
`

export const ButtonLogin = styled.button`
    && {
        width: 22rem;
        height: 2.7rem;
        background-color: #e8222e;
        border: none;
        color: white;
        border-radius: 4.5px;
        cursor:pointer;
        

        :hover{
            background-color: #e8222e;
        }


        
    }
`



export const LoginText = styled.div `
    display: flex;
    font-family: 'Clicker Script', cursive;
    font-weight: 600;
    font-size: 1.6rem;
 
`

export const FooterText = styled.p `
    display: flex;
    font-family: 'Poppins', sans-serif;
    position: fixed;
    margin-top: 26.5rem ;
    margin-left: 8rem;
    font-size: 0.8rem;
    

    span {
        color:#e8222e;
        margin-left: 5px;
        cursor:pointer;
    }
`


