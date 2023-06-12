import React from "react";
import { Link } from "react-router-dom";
import { SHOP_ROUTER } from "../../constants/router";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../images/logo.jpg";
import "./header.scss"
import { Col, Row } from "antd";

const Header = () => {
    return (
        <div className="header">
            <Row>
                <Col span={8} md={8}>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </Col>
                <Col span={10} md={12}>
                    <div className="menu">
                        <Row>
                            <Col span={4}>
                                <li><Link to={SHOP_ROUTER.HOME_PAGE}>Trang chủ</Link></li>
                            </Col>
                            <Col span={4}>
                                <li><Link to={SHOP_ROUTER.SHOP_PAGE}>Cửa hàng</Link></li>
                            </Col>
                            <Col span={4}>
                                <li><Link to={SHOP_ROUTER.ABOUT_PAGE}>Giới thiệu</Link></li>
                            </Col>
                            <Col span={4}>
                                <li><Link to={SHOP_ROUTER.CONTACT_PAGE}>Liên hệ</Link></li>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={6} md={4} style={{ display: "flex", gap: 20 }}>
                    <div className="cart">
                        <Link to={SHOP_ROUTER.CART_PAGE}><ShoppingCartOutlined /></Link>
                    </div>
                    <div className="user">
                        <Link to={SHOP_ROUTER.USER_PAGE}><UserOutlined /></Link>
                    </div>
                </Col>
                {/* <Col span={5} md={8}>
                    <div className="user">
                        <Link to={SHOP_ROUTER.USER_PAGE}><UserOutlined /></Link>
                    </div>
                </Col> */}
            </Row>
        </div>
    );
}

export default Header;