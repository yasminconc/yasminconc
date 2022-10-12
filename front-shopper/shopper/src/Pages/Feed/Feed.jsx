import axios from "axios"
import React from "react"
import { BASE_URL } from "../Baseurl/Baseurl"
import Card from "../Card/Card"


export default function Feed() {

    const [products, setProducts] = React.useState( '' )
    

    React.useEffect( () => {

        axios.get(`${BASE_URL}/products/stock`)
            .then( ( res ) => {
                setProducts( res.data )

            }).catch((err)=> {
                console.log(err.message);
            })

    }, [] )


    const renderProducts = products && products.map( ( item,index ) => {
        return <Card key={index} item={item} />
    } )

    return (
        <div>
            {renderProducts}
        </div>
    )
}