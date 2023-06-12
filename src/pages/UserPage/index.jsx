import React from "react";
import "./userpage.scss";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { SHOP_ROUTER } from "../../constants/router";
import { generatePath, useNavigate } from "react-router-dom";

const UserPage = () => {
    const navigate = useNavigate();

    const handleGoRegister = () => {
        navigate(generatePath(SHOP_ROUTER.REGISTER_PAGE))
    }

    return (
        <div className="user-login">
            <div className="wrapper-login">
                <div className="form-box">
                    <h2>Đăng nhập</h2>
                    <form action="">
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
                                <input type="checkbox" />Nhớ mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu</a>
                        </div>
                        <button type="submit" className="btn">Đăng nhập</button>
                        <div className="login-register">
                            <p>Bạn không có tài khoản? <a onClick={handleGoRegister} className="register-link"> Đăng ký</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserPage;