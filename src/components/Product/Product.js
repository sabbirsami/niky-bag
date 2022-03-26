import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
    const { name, price, img } = props.product;
    return (
        <div className="col-lg-4 col-sm-6">
            <CardGroup className="p-2">
                <Card className="cart_area">
                    <Card.Img
                        className="product_image"
                        variant="top"
                        src={img}
                    />
                    <Card.Body>
                        <Card.Title className="text-start">{name}</Card.Title>
                        <Card.Text className="text-start">
                            Price: ${price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="p-0">
                        <button
                            onClick={() => props.addToCart(props.product)}
                            className="btn btn-primary bg-primary bg-gradient w-100"
                        >
                            Add To Cart
                            <FontAwesomeIcon
                                className="ps-2"
                                icon={faCartPlus}
                            />
                        </button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Product;
