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

        const date = new Date(Date.now()).getTime() 

        const [quantity, setQuantity] = React.useState( 0 ) 
        const [total, setTotal] = React.useState() 
        const [cart, setCart] = React.useState( [] )    
        const [dateValue, setDateValue] = React.useState( '' )     
        const [order, setOrder] = React.useState( '' ) 

        const [alertEmptyCart, setAlertEmptyCart] = React.useState( null ) 
        const [errorEmptyData, setErrorEmptyData] = React.useState( null ) 


        const item = JSON.parse( window.localStorage.getItem( 'pedido' ) )
        
    
        const addItemToCart = () => {
            let body 

            if(!dateValue){
                body = {
                    quantity,
                    date
                }

            }else { 
                body = {
                    quantity,
                    date: dateValue 
                }
            }
                                   
            axios.post( `${BASE_URL}/add-products/${item.id}`, body, auth)  
                .then( ( res ) => {
                    console.log( res.data );

                } ).catch( ( err ) => {
                    console.log(err.response.data);
                } )
        }



        React.useEffect( () => {
            axios.get( `${BASE_URL}/my-cart`, auth )
            .then( ( res ) => {
                setCart( res.data )  

            } ).catch( ( err ) => {
                console.log( err )
            } )

        }, [auth] ) 



        React.useEffect( () => {
            window.localStorage.setItem( 'cart_quantity', cart.length )
        }, [cart] )

        

        const RemoveItemFromCart = ( product ) => {
            axios.delete( `${BASE_URL}/delete/${product.product_id}`, auth)
            .then( ( res ) => {
                console.log( res.data );

            } ).catch( ( err ) => {
                console.log( err.message );
            } )
        }


        
        const editCartProduct = ( product ) => {
            const body = {
                quantity
            }
          
            axios.put( `${BASE_URL}/${product.product_id}/update`, body, auth)
            .then( ( res ) => {
                console.log(res.data)
        
            } ).catch( ( err ) => {
                console.log(err.response);
            } )
        

        }



        const AlertError = ( ) => {

            if(cart.length <= 0){
                setAlertEmptyCart( 'Adicione um produto' )

            }else{
                setAlertEmptyCart( 'Pedido finalizado com sucesso' )
                clearTimeout( timeoutRef.current )

                timeoutRef.current = setTimeout( () => {
                    setAlertEmptyCart( null )
                }, 5000 )
            }
        }


        
        const purchase = ( ) => {

            if(dateValue){
                axios.get(`${BASE_URL}/purchase`, auth )
                .then( ( res ) => {
                    setOrder(res.data);
                    AlertError()
                    
                } ).catch( ( err ) => {
                    console.log(err.response);
                } )

            }else {
                setErrorEmptyData( 'escolha uma data de entrega' )
            }

        }
       
        
        React.useEffect( ( ) => {
        
            axios.get(`${BASE_URL}/total-cart`, auth)
            .then( ( res ) => {
                let valorTotal = res.data[0].Total 
                setTotal(valorTotal.toFixed(2))
                
            } ).catch( ( err ) => {
                console.log(err.response);
            } )
        
        },[auth])



       const onchangeData = ( { target } ) => {
            setDateValue(target.value); 

       }

       
        
        const getOrder = order && order.map( ( item, index ) => {
                return (
                    <Order key={index}>
                        <p className='order-name'>{item.name}</p>
                        <p> R$: {item.price}</p>
                    </Order>
                )
        })



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
                        { !dateValue ? <p className='delivery-date-label'>{errorEmptyData}</p> : null}

                        <input 
                            className='input-date' 
                            value={dateValue}  
                            type={'date'} 
                            onChange={onchangeData} 
                        />

                        { total ?  <p className='total'>Total : R$ {total}</p> : null}
                        <button onClick={purchase} className='button-footer'>Finalizar</button>
                        <p className=' alert-message animeLeft'>{alertEmptyCart}</p>

                        {getOrder}
                    </Divfooter>

            </ContainerCart>

        )
    }


