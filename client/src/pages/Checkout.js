import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = parseInt(priceStr.toString().replace(/[^0-9]/g, ""), 10);
    return isNaN(num) ? 0 : num;
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: orderNumber,
      date: new Date().toISOString(),
      items: cart,
      total: totalPrice,
      shippingDetails: formData
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([newOrder, ...existingOrders]));

    // Simulate order placement processing time
    setTimeout(() => {
      clearCart();
      navigate("/order-success", { state: { order: newOrder } });
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page" style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Giỏ Hàng Của Bạn Trống</h2>
          <button className="place-order-btn" style={{ width: "auto", padding: "10px 20px" }} onClick={() => navigate("/category")}>
            Đi Đến Cửa Hàng
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-form-container">
        <h2>Chi Tiết Vận Chuyển</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Họ Tên Đầy Đủ</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Địa Chỉ Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Địa Chỉ</label>
            <textarea name="address" value={formData.address} onChange={handleInputChange} rows="3" required></textarea>
          </div>
          <div className="form-group">
            <label>Thành Phố</label>
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Số Điện Thoại</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="place-order-btn">Đặt Hàng</button>
        </form>
      </div>

      <div className="checkout-summary">
        <h3>Tóm Tắt Đơn Hàng</h3>
        <div className="summary-items">
          {cart.map((item, index) => (
            <div key={index} className="summary-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>₫{(parsePrice(item.price) * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="summary-total">
          <span>Tổng Cộng</span>
          <span>₫{totalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
