import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
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
                    <div className="col-8">
                        <div className="row">
                            {products.map((product) => (
                                <Product
                                    key={product.id}
                                    product={product}
                                    addToCart={addToCart}
                                ></Product>
                            ))}
                        </div>
                    </div>
                    <Col lg={4}>
                        <div className="cart_section bg-warning full-height">
                            <div className="cart_body">
                                <h1 className="text-start p-3 pb-1">
                                    Selected Item
                                </h1>
                                <hr />
                                {cart.map((product) => (
                                    <Cart
                                        key={product.id}
                                        product={product}
                                    ></Cart>
                                ))}
                                <div className="cart_btn p-3">
                                    <button className="btn btn-danger text-start w-100">
                                        Choose 1 for me
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
