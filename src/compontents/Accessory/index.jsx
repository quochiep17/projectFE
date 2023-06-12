import { Col, Row } from "antd";
import React from "react";
import accessory from "../../images/accessory/glove/wika/wika4.jpg";
import "./accessory.scss";
import { DoubleRightOutlined } from "@ant-design/icons";

const Accessory = () => {
    return (
        <div className="accessory">
            <div className="title">
                <div>
                    <h3>Phụ kiện thể thao</h3>
                </div>
                <div>
                    <a href="">Xem tất cả <DoubleRightOutlined /></a>
                </div>
            </div>
            <Row>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="product-item">
                        <img src={accessory} alt="accessory" />
                        <h5>Phụ kiện A</h5>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Accessory;