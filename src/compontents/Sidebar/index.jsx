import { FilterOutlined } from "@ant-design/icons";
import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2><FilterOutlined /> BỘ LỌC TÌM KIẾM</h2>
            <form>
                <div className="content">
                    <p>Theo thể loại</p>
                    <input type="checkbox" /> Giày thể thao <br />
                    <input type="checkbox" /> Quần áo thể thao <br />
                    <input type="checkbox" /> Phụ kiện thể thao
                </div>
                <div className="content">
                    <p>Thương hiệu</p>
                    <input type="checkbox" /> Adidas <br />
                    <input type="checkbox" /> Jordan <br />
                    <input type="checkbox" /> Nike <br />
                    <input type="checkbox" /> Fila <br />
                    <input type="checkbox" /> Puma
                </div>
                <div className="content">
                    <p>Khoảng giá</p>
                    <input className="price" type="text" placeholder="TỪ" /> - <input className="price" type="text" placeholder="ĐẾN" />
                    <button>Áp dụng</button>
                </div>
            </form>
        </div>
    );
}

export default Sidebar;