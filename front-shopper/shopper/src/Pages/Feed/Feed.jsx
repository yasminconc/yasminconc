import axios from "axios"
import React from "react"
import { BASE_URL } from "../Baseurl/Baseurl"
import Card from "../Card/Card"
import {  useNavigate } from "react-router-dom"
import { goToCart } from "../Router/Coordinator"

export default function Feed() {
    const navigate = useNavigate()

    const [products, setProducts] = React.useState( '' )


    React.useEffect( () => {

        axios.get( `${BASE_URL}/products/stock` )
            .then( ( res ) => {
                setProducts( res.data )

            } ).catch( ( err ) => {
                console.log( err.message );
            } )

    }, [] )



    const addItem = ( id ) => {
        window.localStorage.setItem( 'pedido', JSON.stringify( id ) )
        goToCart(navigate)
    }


    const renderProducts = products && products.map( ( item, index ) => {

        return <div key={index}>

            <h5> {item.name} </h5>
            <h4>{item.price}</h4>
            <h4>ID: {item.id}</h4>
            <h2>{item.qty_stock}</h2>
            <button onClick={() => addItem( item )}> ADD TO CART </button>

        </div>
    } )


    return (
        <div>
            {renderProducts}
        </div>
    )
}