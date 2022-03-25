import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
                    {products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Shop;
