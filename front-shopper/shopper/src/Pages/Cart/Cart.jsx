import React from 'react'
import axios from 'axios'

const Cart = () => {

    const item = JSON.parse( window.localStorage.getItem( 'pedido' ) )
    const [quantity, setQuantity] = React.useState( 0 )
    const [cartProduct, setCartProduct] = React.useState([])
    const [cart, setCart] = React.useState( [] )
    console.log( cart );
    
    const addToCart = () => {
        setQuantity( quantity + 1 )
    }

    console.log(cartProduct);

    
    const handleSubmit = () => {

        const body = {
            quantity,
        }
        const token = window.localStorage.getItem( 'token' )

        axios.post( `https://back-shopper.herokuapp.com/add-products/${item.id}`, body, {
            headers: {
                Authorization: token
            }
        } )
            .then( ( res ) => {
                setCartProduct( res.data );
            } ).catch( ( err ) => {
                console.log( err.message );
            } )
    }


    React.useEffect( () => {
        const token = window.localStorage.getItem( 'token' )
        axios.get( 'https://back-shopper.herokuapp.com/my-cart', {
            headers: {
                Authorization: token
            }
        } ).then( ( res ) => {
            setCart( res.data );
        } ).catch( ( err ) => {
            console.log( err );
        } )

    }, [] )


    const renderCart  = cartProduct && cartProduct.map((product) => {
        return (
            <div>
                <h5>{product.product_id}</h5>
            </div>
        )
    })




        return (


            <div >
                <h5> {item.name} </h5>
                <h4>{item.price}</h4>
                <h4>ID: {item.id}</h4>
                <h2>{item.qty_stock}</h2>
                <h1>QUANTIDADE: <strong>{quantity}</strong></h1>
                <button onClick={() => setQuantity( quantity + 1 )}> + </button>
                <button onClick={() => setQuantity( quantity - 1 )}> - </button>
                <button onClick={() => handleSubmit()}>ADD </button>

                {renderCart}
            </div>


        )
    }

export default Cart