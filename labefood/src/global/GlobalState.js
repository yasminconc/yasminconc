import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [carrinho, setCarrinho] = useState([])
    const [restaurante, setRestaurante] = useState(-1)

    const updateCarrinho = (product, quantity, restaurant, newCart = false) => {
        const novoCarrinho = newCart? [] : [...carrinho]
        if(novoCarrinho.some(produto => produto.produto.id === product.id)){
            const index = novoCarrinho.findIndex(produto => produto.produto.id === product.id)
            const novoProduto = { produto: product, quantidade: quantity}
            quantity ? novoCarrinho.splice(index, 1, novoProduto) : novoCarrinho.splice(index, 1)
        } else {
            novoCarrinho.push({ produto: product, quantidade: quantity})
        }
        setCarrinho(novoCarrinho)
        setRestaurante(restaurant)
    }

    const limpaCarrinho = () => {
        setCarrinho([])
    }

    const states = {carrinho, restaurante}
    const funcs = {updateCarrinho, limpaCarrinho}

    return (
        <GlobalStateContext.Provider value={{states, funcs}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState