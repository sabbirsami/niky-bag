import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const exist = cart.find((carts) => carts === product);
        if (!exist) {
            const newCart = [...cart, product];
            if (newCart.length > 4) {
                alert("You can't select more then 4 products");
            } else {
                setCart(newCart);
            }
        }
    };
    const chooseOne = () => {
        if (cart.length > 0) {
            let randomOne = parseInt(Math.round(Math.random() * cart.length));
            if (randomOne < 0) {
                randomOne = 0;
            }

            setCart(cart[randomOne].id);
            setCart([cart[randomOne]]);
        }
    };
    const chooseAgain = () => {
        setCart([]);
    };

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <Container>
                <div className="row">
                    <Col lg={8}>
                        <div className="row">
                            {products.map((product) => (
                                <Product
                                    key={product.id}
                                    product={product}
                                    addToCart={addToCart}
                                ></Product>
                            ))}
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="cart_section bg-warning full-height">
                            <div className="cart_body">
                                <h2 className="text-start p-3 pb-1">
                                    Selected Item
                                </h2>
                                <hr />
                                {cart.map((product) => (
                                    <Cart
                                        key={product.id}
                                        product={product}
                                    ></Cart>
                                ))}
                                <div className="cart_btn p-3">
                                    <button
                                        onClick={chooseOne}
                                        className="btn btn-danger w-100"
                                    >
                                        Choose 1 for me
                                    </button>
                                    <button
                                        onClick={chooseAgain}
                                        className="btn btn-success w-100 mt-2"
                                    >
                                        Choose again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Shop;
