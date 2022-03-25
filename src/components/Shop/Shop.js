import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Product from "../Product/Product";

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
                </div>
            </Container>
        </div>
    );
};

export default Shop;
