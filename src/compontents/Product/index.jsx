import React from "react";
import "./product.scss";
import Sneaker from "../Sneakers";
import Clothes from "../Clothes";
import Accessory from "../Accessory";


const Product = () => {
    return (
        <div className="product">
            <div className="content">
                <div className="product-card">
                    <Sneaker />
                    <Clothes />
                    <Accessory />
                </div>
            </div>
        </div>
    );
}

export default Product;