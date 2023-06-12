import { Carousel } from "antd";
import React from "react";
import "./homepage.scss";
import img1 from "../../images/4.png";
import img2 from "../../images/4_1.png";
import img3 from "../../images/4_2.png";


const HomePage = () => {


    return (
        <div className="content">
            <div className="slider">
                <Carousel autoplay>
                    <div className="slide-1"></div>
                    <div className="slide-2"></div>
                    <div className="slide-3"></div>
                </Carousel>
            </div>
            <div className="product">
                <div className="title">
                    <h3>SẢN PHẨM NỔI BẬT</h3>
                </div>
                <div className="list-product">
                    <div className="product-item">
                        <img src={img1} alt="img1" />
                        <h3>Giày A</h3>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                    <div className="product-item">
                        <img src={img2} alt="img2" />
                        <h3>Giày A</h3>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                    <div className="product-item">
                        <img src={img3} alt="img3" />
                        <h3>Giày A</h3>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="title">
                    <h3>SẢN PHẨM MỚI</h3>
                </div>
                <div className="list-product">
                    <div className="product-item">
                        <img src={img1} alt="img1" />
                        <h3>Giày A</h3>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                    <div className="product-item">
                        <img src={img2} alt="img2" />
                        <h3>Giày A</h3>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                    <div className="product-item">
                        <img src={img3} alt="img3" />
                        <h3>Giày A</h3>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;