import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
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
                                ></Product>
                            ))}
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="cart_section bg-warning full-height">
                            <div className="cart_body">
                                <h1 className="text-start p-3 pb-1">
                                    Selected Item
                                </h1>
                                <hr />
                                {products.map((product) => (
                                    <Cart product={product}></Cart>
                                ))}
                                <button className="btn btn-danger text-start">
                                    Choose 1 for me
                                </button>
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Shop;
