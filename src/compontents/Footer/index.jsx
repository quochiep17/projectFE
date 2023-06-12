import React from "react";
import "./footer.scss";
import logo from "../../images/logo.jpg";
import { FacebookOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <div className="footer">
            <div></div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="information">
                <h2>HP SPORTS</h2>
                <div><EnvironmentOutlined /> Địa chỉ: ...</div>
                <div><PhoneOutlined /> Hotline: 0898674987</div>
                <div><MailOutlined /> Email: phamquochiep444@gmail.com</div>
            </div>
            <div className="facebook">
                <h4>FACEBOOK</h4>
                <a href="https://www.facebook.com/HP0205"><FacebookOutlined /></a>
                <div>Phạm Quốc Hiệp</div>
            </div>
            <div></div>
        </div>
    );
}

export default Footer;