import styled from "styled-components"


export const ContainerCart = styled.div `
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`


export const TopCard = styled.div `
    display: flex;
    width: 25rem;
    font-family: 'Poppins', sans-serif;
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


export const BottonCard = styled.div `
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
        font-family: 'Poppins',sans-serif;
        margin-left: 1rem;
    }
`

export const CardMain = styled.div `
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    font-family: 'Poppins', sans-serif;
    color: #282828;
    border-top: 1px solid #A8A8A8;
    
    
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

export const Divfooter = styled.div `
    width: 26rem;
    border-top: 1px solid #A8A8A8;
    font-family: 'Poppins', sans-serif;

    .delivery-date-label {
        display: flex;
        justify-content: center;
        font-size: 1.1rem;
        color:#e8222e;
        font-weight: 500;
    }
        
    
    .input-date {
        display: flex;
        margin-left: 6.5rem;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        border: 1px solid #4F4F4F;
        border-radius: 0.2rem;
        padding-right: 0.8rem;
        height: 1.5rem;
        font-family: 'Poppins', sans-serif;
        height: 2.8rem;
        font-size: 0.9rem;
        width: 12rem;
        text-align: center;


        cursor:pointer;

        :hover {
            border-color: #A9A9A9;
        }
        
    }

    .total {
        display: flex;
        justify-content: center;
        
    }

    .button-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
        margin-left: 4.3rem;
        margin-top: 1.5rem;
        width: 18rem;
        height: 2.7rem;
        background-color: #e8222e;
        border: none;
        color: white;
        border-radius: 4.5px;

        cursor:pointer;   
        
    }

    .alert-message {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-left: 1.2rem;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;

    }


    `

export const Order = styled.div `
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 0.9rem;
        text-align: center;
        border-top: 1px solid #A8A8A8;
       

        .order-name {
            word-wrap: break-word !important;
            font-size: 0.9em;
            width: 15rem;
            color: #e8222e;     
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

