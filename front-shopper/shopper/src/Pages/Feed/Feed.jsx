import axios from "axios";
import React from "react";
import { BASE_URL } from "../Baseurl/Baseurl";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToSignup } from "../Router/Coordinator";
import { Box, Container, ContainerCart, HeaderFeed } from "./styled";
import carrinho4 from "../../Img/carrinho4.png";
import comprar from "../../Img/comprar.png";
import Cart from "../Cart/Cart";

    export default function Feed() {
        const navigate = useNavigate();

        const [products, setProducts] = React.useState("");

        const cartQuantity = window.localStorage.getItem("cart_quantity");
        const [active, setActive] = React.useState(false);


        React.useEffect(() => {
            axios
            .get(`${BASE_URL}/products/stock`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        }, []);


        const addItem = (id) => {
            window.localStorage.setItem("pedido", JSON.stringify(id));
            setActive(true);
        };
        

        const renderProducts = products && products.map((item, index) => {
            return (
                <Container key={index}>
                    <h2 className="card-qty">{item.qty_stock} unidades</h2>
                    <img className="card-img" src={comprar} alt="dwsd" />
                    <h5 className="card-name">{item.name} </h5>
                    <h4 className="card-price"> R$ {item.price}</h4>
                    <button className="card-button" onClick={() => addItem(item)}> {" "}  ADD TO CART{" "} </button>
                </Container>
            )
            })

        return (
            <div>
                <HeaderFeed>
                    <p className="shopper-text">Sho<strong>pper</strong></p>
                    <p onClick={() => goToLogin(navigate)} className="login">Fazer login</p>

                    <button onClick={() => goToSignup(navigate)} className="button-header">Criar conta</button>

                    <img
                        onClick={() => setActive(!active)}
                        className="carrinho"
                        src={carrinho4}
                        alt="carrinho"
                    />

                    <p className="Cart-quantity"> Itens : {cartQuantity}</p>
                </HeaderFeed>

                <ContainerCart>
                    <Box className="box">{renderProducts}</Box>

                    <div className="cart animeLeft">{active ? <Cart /> : null}</div>
                </ContainerCart>
            </div>
        );
     }
