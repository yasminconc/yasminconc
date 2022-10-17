import React, { useRef } from 'react'
import axios from 'axios'

import { UseProtectedPage } from '../Hooks/UseProtectedPage'
import { CardButton, Card, TopCard, CardsButton,  Divfoorter, ContainerCart, Order } from './styled'


import plus from '../../Img/plus.png'
import minus from '../../Img/minus.png'

import { BASE_URL } from '../Baseurl/Baseurl'

    export default function Cart() {

        UseProtectedPage()
        const timeoutRef = useRef()
        

        const item = JSON.parse( window.localStorage.getItem( 'pedido' ) )
        const [quantity, setQuantity] = React.useState( 0 )
        const [cart, setCart] = React.useState( [] )
        const [alert, setAlert] = React.useState( null )
        const [order, setOrder] = React.useState('')
        
        
        const refreshPage = () => {
            window.location.reload()
        }



        // add item ao carrinho - endpoint

        const handleSubmit = () => {

            const body = {
                quantity,
            }
            const token = window.localStorage.getItem( 'token' )

            axios.post( `${BASE_URL}/add-products/${item.id}`, body, {
                headers: {
                    Authorization: token
                }
            } )
                .then( ( res ) => {
                    console.log( res.data );

                } ).catch( ( err ) => {
                    console.log( err.message );
                } )
        }

        // ver todos os itens do carrinho - endpoint

        React.useEffect( () => {
            const token = window.localStorage.getItem( 'token' )
            axios.get( `${BASE_URL}/my-cart`, {
                headers: {
                    Authorization: token
                }
            } ).then( ( res ) => {
                setCart( res.data );
            } ).catch( ( err ) => {
                console.log( err );
            } )

        }, [cart] )


        React.useEffect( () => {
            window.localStorage.setItem( 'cart_quantity', cart.length )
        }, [cart] )

        

        // removendo os itens do carrinho
        const RemoveItemFromCart = ( product ) => {

            const token = window.localStorage.getItem( 'token' )

            if ( product ) {
                axios.delete( `${BASE_URL}/delete/${product.product_id}`, {
                    headers: {
                        Authorization: token
                    }
                } )
                    .then( ( res ) => {
                        console.log( res.data );
                        refreshPage()
                    } ).catch( ( err ) => {
                        console.log( err.message );
                    } )
            }

        }



        const editCartProduct = ( product ) => {

            const body = {
                quantity
            }

            const token = window.localStorage.getItem( 'token' )

            if(product) {

                axios.put( `${BASE_URL}/${product.product_id}/update`, body, {
                    headers: {
                        Authorization: token
                    }
        
                }).then((res) => {
                    console.log(res.data)
        
                }).catch((err) => {
                    console.log(err.response);
                })
        
            }

            }

        
        const purchase = () => {
            const token = window.localStorage.getItem( 'token' )

            axios.get(`${BASE_URL}/my-cart/purchase`, {
                headers: {
                    Authorization: token
                }

            }).then((res) => {
                setOrder(res.data);
                AlertError()
                

            }).catch((err) => {
                console.log(err.reponse);
            })
        }

        const getOrder = order && order.map((item) => {
                return (
                    <Order>
                        <p className='list-name'>{item.name}</p>
                        <p className='list-price'> R$: {item.price}</p>
                    </Order>
                )
        })



        //calculando total do carrinho

        let total = 0
        for ( let item of cart ) {
            total += Number( item.price * item.quantity )
        }


        const cartRendered = cart && cart.map( ( x, index ) => {
            return <div className='card-container' key={index}>
                
                <Card>
                    <p className='card-quantity'>{x.quantity}x</p>
                    <p className='card-name'>{x.name}</p>
                    <p className='card-price'>R${x.price}</p> 
                </Card>
                
                <CardButton>
                <p className='card-edit' onClick={ () => editCartProduct(x)}>Editar</p>
                <p className='card-button' onClick={() => RemoveItemFromCart( x )}>Remover</p>
                </CardButton>
            
            </div>
        } )


            const AlertError = (  ) => {
                setAlert( 'Pedido finalizado com sucesso')
                clearTimeout( timeoutRef.current )
                timeoutRef.current = setTimeout( () => {
                    setAlert( null )
                }, 5000 )
            }



        return (


            <ContainerCart>
                
                {item ? <div >

                    <TopCard>
                        <p className='unity'>{quantity}x</p>
                        <p className='name'> {item.name} </p>
                        <p className='price'> R${item.price}</p>
                    </TopCard>

                    <CardsButton>
                        <img src={plus} alt='plus' className='plus' onClick={() => setQuantity( quantity + 1 )}/>
                        <p className='add' onClick={handleSubmit}>Adicionar </p>
                        <img src={minus} alt='minus' className='minus' onClick={() => setQuantity( quantity - 1 )} />
                    </CardsButton>
                    
                </div> : null}

                {cartRendered}
                
                <Divfoorter>
                    <p className='total'>Total : R$ {total.toFixed( 2 )}</p>
                    <button onClick={purchase} className='button-footer'>Finalizar</button>

                
                    <p className=' alert-message animeLeft'>{alert}</p>

                    {getOrder}
                </Divfoorter>

            

            </ContainerCart>



        )
    }


