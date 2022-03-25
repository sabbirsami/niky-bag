import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { img, name, price } = props.product;
    return (
        <div>
            <div className="cart_section">
                <div className="single_product d-flex">
                    <div className="image_area d-flex">
                        <img className="w-100 ps-3" src={img} alt="" />
                    </div>
                    <div className="info ">
                        <h4 className="text-start">{name}</h4>
                        <p className="text-start">Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
