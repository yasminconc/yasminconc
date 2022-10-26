import styled from "styled-components";


export const HeaderFeed = styled.header `
    display: flex;
    margin-left: 10rem;
    height: 5rem;

    .Logged {
        display: flex;

        .logo-shopper {
            display: flex;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.5rem;
            align-items: center;
            margin-left: 1rem;
            
            span {
                color: #e8222e;
                
            }
        }
        
            .user-name {
                display: flex;
                align-items: center;
                margin-left: 61.2rem;
                font-size: 1.1rem;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
        
                span{
                    margin-left: 0.3rem;
                    color: #e8222e;
                }
                
            }

    }

    .logged-out{
        display: flex;

            .logo-shopper {
                display: flex;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: 1.5rem;
                align-items: center;
                margin-left: 1rem;
                
                span {
                    color: #e8222e;
                    
                }
            }
        
            .login {
                display: flex;
                align-items: center;
                font-family: 'Poppins', sans-serif ;
                font-size: 1.2rem;
                margin-left: 52rem;
                font-weight: 500;
        
                cursor:pointer;
            }

            .button-header {
               
                height: 2.6rem;
                width: 10rem;
                border-radius: 50px;
                border: 0;
                background-color: #e8222e;
                box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
                letter-spacing: 1.5px;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                transition: all .5s ease;
                margin-top: 1.3rem;
                margin-left: 1.5rem;
                color: white;
        
                cursor:pointer;
        
        
                :hover {
                    letter-spacing: 3px;
                    background-color: #e8222e;
                    color: hsl(0, 0%, 100%);
                    box-shadow: #e8222e 0px 3px 5px 0px;
                }
        
        
               :active {
                    letter-spacing: 3px;
                    background-color: #e8222e;
                    color: hsl(0, 0%, 100%);
                    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
                    transform: translateY(10px);
                    transition: 100ms;
        
                }
        
            }
    }


`

export const BoxImgCart = styled.div`
    display: flex;
    height: 2.7rem;
    width: 2.8rem;
    align-items: center;
    justify-content: center;
    margin-top: 1.2rem; 
    margin-left: 1.3rem;
    background-color: white;
    border-radius: 20rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .carrinho {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.5rem;
    
        cursor:pointer;
    }
        
`

export const BoxCartQuantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: 78.6rem;
    position: absolute;
    background-color: #e8222e;
    border-radius: 20rem;
    height: 1.4rem;
    width: 1.4rem;
    


    .Cart-quantity {
        display: flex;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 1rem;
        color: white;

    }
`


export const MainFeed = styled.div `
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    height: 800vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    background-color: #f5f5f5;
    flex-wrap: wrap;


`

export const CardContainer = styled.div `
    height: 24rem;
    width: 16rem;
    margin-top: 2rem; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    background-color: white;
    font-family: 'Poppins';



    .card-qty {
        display: flex;
        justify-content:flex-end;
        margin-right: 1rem; 
        font-size: 0.9rem;
    }

    .card-img {
        display: flex;
        margin-left: 4rem;
        margin-top: 2rem;
    }

    .card-name {
        display: flex;
        justify-content: center;
        text-align: center; 
        height: 3rem;
        font-size: 0.4;
        word-wrap: break-word !important;
        flex-wrap: wrap;
        
    }

    .card-price {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: -1rem;
          
    }

    .card-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 3.5rem;
        width: 10rem;
        height: 2.7rem;
        background-color: #e8222e;
        border: none;
        color: white;
        border-radius: 4.5px;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 1rem;

        cursor:pointer;  
    }
`


export const ContainerCart = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    
    .cart {
        display: flex;
        position: absolute;
        width: 15rem;
        top: 5rem;
        right: 176px;
        max-height: 500vh;
          
    }
    
   
`

