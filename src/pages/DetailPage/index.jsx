import { Col, Row } from "antd";
import React from "react";
import product from "../../images/4_1.png"
import "./detail.scss";

const DetailPage = () => {
    return (
        <div className="detail">
            <div className="infor">
                <Row>
                    <Col span={8}>
                        <div className="img">
                            <img src={product} alt="product" />
                        </div>
                    </Col>

                    <Col span={16}>
                        <div className="title">
                            <h2>Ten san pham</h2>
                        </div>
                        <div className="description">
                            <div>
                                <p>Mô tả: ...</p>
                            </div>
                            <div>
                                <p>Giá: ...</p>
                            </div>
                            <div>
                                <p>Mẫu: ... </p>
                            </div>
                            <div>
                                <p>Số lượng: ...</p>
                            </div>
                        </div>
                        <div>
                            <button>Thêm vào giỏ hàng</button>
                            <button>Mua ngay</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <div>
                    <h2>MÔ TẢ SẢN PHẨM</h2>
                </div>
                <div>
                    <p>aaaaaa</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
                </div>
            </div>

        </div>
    );
}

export default DetailPage;