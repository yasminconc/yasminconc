import React from "react";
import axios from "axios";

import { BASE_URL } from "../Baseurl/Baseurl";

import { UseAuthorization } from '../Hooks/UseAuthorization'
import { useNavigate } from "react-router-dom";

import { goToLogin, goToSignup } from "../Router/Coordinator";
import Cart from "../Cart/Cart";

import { BoxCartQuantity, BoxImgCart, CardContainer, ContainerCart, HeaderFeed, MainFeed } from "./styled";

import carrinho from "../../Img/carrinho.png";
import comprar from "../../Img/comprar.png";


    
export default function Feed() {
    
        const navigate = useNavigate()
        const auth = UseAuthorization()
        const token = window.localStorage.getItem('token') 

        const [products, setProducts] = React.useState('')
        const [getProfile, setGetProfile] = React.useState('') 
        const [openModelCartButton, setOpenModelCartButton] = React.useState(false)

    
        const cartQuantity = window.localStorage.getItem("cart_quantity")

        React.useEffect( ( ) => {
            axios.get(`${BASE_URL}/products/stock`)
                .then( ( res ) => {
                    setProducts(res.data);
                } )
                .catch(( err ) => {
                    console.log(err.message);
                } )
        }, [])



        React.useEffect( ( ) => {
            axios.get(`${BASE_URL}/get-user`, auth)
                .then((res) => {
                    setGetProfile(res.data)
                })
                .catch((err) => {
                    console.log(err.message);
                })

        },[auth])
        

        
        const addItem = ( item ) => {

            const token = window.localStorage.getItem('token') 
            if(!token) {
                goToLogin(navigate)

            } else if (item.qty_stock === 0){
                window.alert('produto indisponivel')

            } else {
                window.localStorage.setItem("pedido", JSON.stringify(item))
                setOpenModelCartButton(true) 
            }    
        
        }

        

        const renderProducts = products && products.map((item, index) => {
            return (
                <CardContainer key={index}>
                    <h2 className="card-qty">{item.qty_stock} unidades</h2>
                     <img className="card-img" src={comprar} alt="card img" />
                      <h5 className="card-name">{item.name} </h5>
                     <h4 className="card-price"> R$ {item.price}</h4>
                    <button className="card-button" onClick={() => addItem(item)}>  Adicionar </button>
                </CardContainer>
             )
            })


        
        const openCartFromHeader = () => {

            const token = window.localStorage.getItem('token')
            if(!token){
                goToLogin(navigate)

            }else{
                setOpenModelCartButton(!openModelCartButton)  
            }

        }

           

        return (
            <div>
                <HeaderFeed>
                    { token ? <div className="Logged"> 
                        
                                    <p className="logo-shopper">Sho<span>pper</span></p> 
                                    <p className="user-name"> Olá <span>{getProfile.name}</span></p>

                                    <BoxImgCart>
                                        <img
                                            onClick={() => openCartFromHeader()}
                                            className="carrinho"
                                            src={carrinho}
                                            alt="carrinho"
                                        />
                                    </BoxImgCart>

                                    <BoxCartQuantity>
                                        <p className="Cart-quantity"> {cartQuantity}</p>
                                    </BoxCartQuantity>

                                </div>
                    :  
                              
                                <div className="logged-out">

                                    <p className="logo-shopper">Sho<span>pper</span></p>
                                    <p onClick={() => goToLogin(navigate)} className="login">Fazer login</p>

                                    <button onClick={() => goToSignup(navigate)} className="button-header">Criar conta</button> 

                                <BoxImgCart>
                                    <img
                                        onClick={() => openCartFromHeader()}
                                        className="carrinho"
                                        src={carrinho}
                                        alt="carrinho"
                                    />
                                </BoxImgCart>

                                </div>
                    }

                </HeaderFeed>
                
                <ContainerCart>
                    <MainFeed>{renderProducts}</MainFeed>
                    <div className="cart">{openModelCartButton ? <Cart /> : null}</div>
                </ContainerCart>
            </div>
        );
     }
