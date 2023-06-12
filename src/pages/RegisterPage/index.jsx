import React from "react";
import { SHOP_ROUTER } from "../../constants/router";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "./register.scss";
import { generatePath, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleGoLogin = () => {
        navigate(generatePath(SHOP_ROUTER.USER_PAGE))
    }
    return (
        <div className="user-register">
            <div className="wrapper">
                <div className="form-box register">
                    <h2>Đăng ký</h2>
                    <form action="">
                        <div className="input-box">
                            <span className="icon"><UserOutlined /></span>
                            <input type="text" required />
                            <label for="">Tên người dùng</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><MailOutlined /></span>
                            <input type="email" required />
                            <label for="">Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><LockOutlined /></span>
                            <input type="password" required />
                            <label for="">Mật khẩu</label>
                        </div>
                        <div className="remember-forgot">
                            <label for="">
                                <input type="checkbox" />Tôi đồng ý với các Điều khoản & Điều kiện
                            </label>
                        </div>
                        <button type="submit" className="btn">Đăng ký</button>
                        <div className="login-register">
                            <p>Bạn đã có tài khoản ? <a onClick={handleGoLogin} className="login-link">Đăng nhập</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;