import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/OrderSuccess.css";

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  // Fallback in case someone directly navigates to /order-success
  const orderNumber = order ? order.id : Math.floor(100000 + Math.random() * 900000);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = parseInt(priceStr.toString().replace(/[^0-9]/g, ""), 10);
    return isNaN(num) ? 0 : num;
  };

  return (
    <div className="order-success-page">
      <div className="success-icon">✅</div>
      <h1>Đơn Hàng Được Đặt Thành Công!</h1>
      <p>Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được nhận.</p>
      
      <div className="order-receipt">
        <div className="order-ref">Số Tham Chiếu Đơn Hàng: #{orderNumber}</div>
        
        {order && (
          <div className="receipt-details">
            <h3>Hóa Đơn</h3>
            <div className="receipt-items">
              {order.items.map((item, index) => (
                <div key={index} className="receipt-item">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₫{(parsePrice(item.price) * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="receipt-total">
              <strong>Tổng Thanh Toán:</strong>
              <strong>₫{order.total.toLocaleString()}</strong>
            </div>
          </div>
        )}
      </div>

      <div className="action-buttons">
        <Link to="/dashboard/user/orders" className="view-orders-btn">
          Xem Lịch Sử Đơn Hàng
        </Link>
        <Link to="/" className="continue-shopping-btn">
          Tiếp Tục Mua Sắm
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
