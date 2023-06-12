import { Col, Row } from "antd";
import React from "react";
import clothes from "../../images/clothes/soccer/bayern/white/1.jpg";
import "./clothes.scss";
import { DoubleRightOutlined } from "@ant-design/icons";

const Clothes = () => {
    return (
        <div className="clothes">
            <div className="title">
                <div>
                    <h3>Quần áo thể thao</h3>
                </div>
                <div>
                    <a href="">Xem tất cả <DoubleRightOutlined /></a>
                </div>
            </div>
            <Row>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={clothes} alt="clothes" />
                        <h5>Đồng phục A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Clothes;