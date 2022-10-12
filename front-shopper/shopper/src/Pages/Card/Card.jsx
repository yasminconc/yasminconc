import React from "react"

export default function Card ( {item}) {
    return (
        <div>
            <h1>{item.name}</h1>
                <h5>{item.price}</h5>
            <h6>{item.qty_stock}</h6>
        </div>
    )
}