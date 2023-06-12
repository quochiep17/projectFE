import React from "react";
import { Row, Col } from "antd";
import Sidebar from "../../compontents/Sidebar";
import "./shoppage.scss";
import Product from "../../compontents/Product";

const ShopPage = () => {
    return (
        <div className="shop">
            <Row>
                <Col span={4} xs={24} md={6} xl={4}>
                    <Sidebar />
                </Col>

                <Col span={20} xs={24} md={18} xl={20}>
                    <Product />
                </Col>
            </Row>
        </div>
    );
}

export default ShopPage;