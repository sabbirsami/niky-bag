import React from "react";
import { Card, CardGroup, Col } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
    console.log(props);

    const { name, price, img } = props.product;
    return (
        <div className="col-lg-4">
            <CardGroup className="p-2">
                <Card>
                    <Card.Img
                        className="product_image"
                        variant="top"
                        src={img}
                    />
                    <Card.Body>
                        <Card.Title className="text-start">{name}</Card.Title>
                        <Card.Text className="text-start">
                            Price: {price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="p-0">
                        <button className="btn btn-warning w-100">
                            Add To Cart
                        </button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Product;
