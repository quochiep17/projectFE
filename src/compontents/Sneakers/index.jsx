import { Col, Row } from "antd";
import React from "react";
import sneaker from "../../images/4.png"
import "./sneakers.scss";
import { DoubleRightOutlined } from "@ant-design/icons";

const Sneaker = () => {
    return (
        <div className="sneakers">
            <div className="title">
                <div>
                    <h3>Giày thể thao</h3>
                </div>
                <div>
                    <a href="">Xem tất cả <DoubleRightOutlined /></a>
                </div>
            </div>
            <Row>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={sneaker} alt="sneaker" />
                        <h5>Giày A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Sneaker;