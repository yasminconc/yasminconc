import styled from "styled-components"


export const ContainerCart = styled.div `
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`

export const Card = styled.div `
    /* display: flex;
    align-items: center;
    border-top: 1px solid #A8A8A8;
    
    height: 5rem;
    width: 24rem; */
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    font-family: 'Poppins', sans-serif;
    color: #282828;
    border-top: 1px solid #A8A8A8;

    .card-container {
        background-color: #282828;
    }

    
    .card-quantity {
        display: flex;
        align-items: center;
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 0.9rem;
    }

    .card-name {

        font-size: 0.9rem;
        word-wrap: break-word !important;
        font-weight: 500;
        
    }

    .card-price {
        margin-right: 3rem;
        font-size: 0.9rem;
    }


`

export const CardButton = styled.div `
    display: flex;
    font-family: 'Poppins', sans-serif;
    align-items: center;
    margin-top: -1rem;
    

    .card-edit {
        color: #e8222e;
        margin-left: 8rem;
        cursor:pointer;
    }

     .card-button {
        display: flex;
        font-size: 1rem;
        color: #808080;
        margin-left: 2rem;
        cursor:pointer;
    }
`

export const TopCard = styled.div `
    display: flex;
    width: 25rem;
    font-family: 'Poppins';
    margin-left: 1rem;

    .unity {
        margin-left: 1rem;
    }
    
    .name {
        margin-left: 3rem;
        word-wrap: break-word !important;
    }

    .price {
        margin-right: 3.5rem;
    }
`

export const CardsButton = styled.div `
    display: flex;
    align-items: center;
    cursor:pointer;

    .plus {
        height: 1rem;
        margin-left: 8.5rem;
        
    }

    .minus {
        height: 1rem;
        margin-left: 1rem;
    }

    .add {
        display: flex;
        align-items: center;
        font-family: 'Poppins';
        margin-left: 1rem;
    }
`

export const Divfoorter = styled.div `
    margin-left: 1rem;
    width: 25rem;
    border-top: 1px solid #A8A8A8;
 


    .total {
        display: flex;
        margin-left: 8rem;
        font-family: 'Poppins';
    }

    .button-footer {
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 4.5rem;
        margin-top: 1.5rem;
        width: 15rem;
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
    .alert-message {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        font-family: 'Poppins';
        font-size: 1.3rem;
        
    }

    `

    export const Order = styled.div `
        display: flex;
      
        align-items: center;
        flex-direction: column;
        justify-content: center;
        font-family: 'Poppins';

        .list-name {
            word-wrap: break-word !important;
            font-size: 0.9em;
            width: 15rem;
            color: #e8222e;
            
        }

        
    `