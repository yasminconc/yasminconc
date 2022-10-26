import React from 'react'
import axios from 'axios'

import { BASE_URL } from '../Baseurl/Baseurl'

import { UseProtectedPage } from '../Hooks/UseProtectedPage'
import { UseAuthorization } from '../Hooks/UseAuthorization'

import { CardButton, TopCard, ContainerCart, Order, BottonCard, CardMain, Divfooter } from './styled'

import plus from '../../Img/plus.png'
import minus from '../../Img/minus.png'




    export default function Cart() {

        UseProtectedPage()

        const timeoutRef = React.useRef()
        const auth = UseAuthorization()

        
        const [quantity, setQuantity] = React.useState( 0 )
        const [cart, setCart] = React.useState( [] )
        const [order, setOrder] = React.useState( '' )
        const [inputData, setInputData] = React.useState( '' )
        
        const [alert, setAlert] = React.useState( null )
        const [ error, setError] = React.useState( null )
        const [unavailableError, setUnavailableError] = React.useState( null )

        
        const item = JSON.parse( window.localStorage.getItem( 'pedido' ) )
        
    

        const addItemToCart = () => {
            const body = {
                quantity,
            }
    
            axios.post( `${BASE_URL}/add-products/${item.id}`, body, auth)
                .then( ( res ) => {
                    console.log( res.data );

                } ).catch( ( err ) => {
                     setUnavailableError(err.response.data) ;
                        console.log(err.response.data);
                } )
        }


        // ver todos os itens do carrinho - endpoint

        React.useEffect( () => {

            axios.get( `${BASE_URL}/my-cart`, auth )
            .then( ( res ) => {
                setCart( res.data );

            } ).catch( ( err ) => {
                console.log( err );
            } )

        }, [auth] )



        React.useEffect( () => {
            window.localStorage.setItem( 'cart_quantity', cart.length )
        }, [cart] )

        

        // removendo os itens do carrinho
        const RemoveItemFromCart = ( product ) => {

            if ( product ) {
                axios.delete( `${BASE_URL}/delete/${product.product_id}`, auth)
                    .then( ( res ) => {
                        console.log( res.data );
                    } ).catch( ( err ) => {
                        console.log( err.message );
                    } )
            }

        }



        const editCartProduct = ( product ) => {
            const body = {
                quantity
            }

            if(product) {

                axios.put( `${BASE_URL}/${product.product_id}/update`, body, auth)
                .then( ( res ) => {
                    console.log(res.data)
        
                } ).catch( ( err ) => {
                    console.log(err.response);
                } )
        
            }

        }

        const AlertError = ( ) => {

            if(cart.length <= 0){
                setAlert( 'Adicione um produto' )

            }else{
                setAlert( 'Pedido finalizado com sucesso' )
                clearTimeout( timeoutRef.current )

                timeoutRef.current = setTimeout( () => {
                    setAlert( null )
                }, 5000 )
            }
        }

        
        const purchase = () => {

            if(inputData){
                axios.get(`${BASE_URL}/purchase`, auth )
                .then( ( res ) => {
                    setOrder(res.data);
                    AlertError()
                    
                } ).catch( ( err ) => {
                    console.log(err.reponse);
                } )

            }else {
              setError( 'escolha uma data de entrega' )
            }

        }


       const onchangeData = ( { target } ) => {
            setInputData(target.value);      
       }

       
        
        const getOrder = order && order.map( ( item ) => {
                return (
                    <Order>
                        <p className='order-name'>{item.name}</p>
                        <p> R$: {item.price}</p>
                    </Order>
                )
        })



        //calculando total do carrinho

        let total = 0

        for ( let item of cart ) {
            total += Number( item.price * item.quantity )
        }



        const cartRendered = cart && cart.map( ( product, index ) => {
            return (
                 <div key={index}> 
                    <CardMain>
                        <p className='card-quantity'>{product.quantity}x</p>
                        <p className='card-name'>{product.name}</p>
                        <p className='card-price'>R${product.price}</p> 
                    </CardMain>
                    
                    <CardButton>
                        <p className='card-edit' onClick={() => editCartProduct(product)}>Editar</p>
                        <p className='card-button' onClick={() => RemoveItemFromCart( product )}>Remover</p>
                    </CardButton>
                </div> 
                
               )
        } )



        return (

            <ContainerCart>
   
                {item ? <div >

                    <TopCard>
                        <p className='unity'>{quantity}x</p>
                        <p className='name'> {item.name}</p>
                        <p className='price'> R${item.price}</p>
                    </TopCard>

                    <BottonCard>
                        <img 
                            src={plus} 
                            alt='plus' 
                            className='plus' 
                            onClick={() => setQuantity( quantity + 1 )}
                        />

                        <p className='add' onClick={addItemToCart}>Adicionar</p>

                        <img 
                            src={minus} 
                            alt='minus' 
                            className='minus' 
                            onClick={() => setQuantity( quantity - 1 )} 
                        />
                    </BottonCard>
                    
                        </div> : null}

                        {cartRendered}
                
                    <Divfooter>
                        { !inputData ? <p className='delivery-date-label'>{error}</p> : null}

                        <input 
                            className='input-date' 
                            value={inputData}  
                            type={'date'} 
                            onChange={onchangeData} 
                        />

                        <p className='total'>Total : R$ {total.toFixed( 2 )}</p>
                        <button onClick={purchase} className='button-footer'>Finalizar</button>
                        <p className=' alert-message animeLeft'>{alert}</p>

                        {getOrder}
                    </Divfooter>

            </ContainerCart>

        )
    }


