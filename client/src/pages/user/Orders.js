import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    // Only keep the 5 most recent orders
    setOrders(savedOrders.slice(0, 5));
  }, []);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = parseInt(priceStr.toString().replace(/[^0-9]/g, ""), 10);
    return isNaN(num) ? 0 : num;
  };

  return (
    <div className="orders-page">
      <h2>Your Order History</h2>
      
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to="/" className="browse-btn">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div>
                  <span className="order-id">Order #{order.id}</span>
                  <span className="order-date">{new Date(order.date).toLocaleString()}</span>
                </div>
                <div className="order-status">Completed</div>
              </div>
              
              <div className="order-items">
                {order.items.map((item, idx) => (
                  <div key={idx} className="order-item">
                    <img src={item.image} alt={item.name} className="order-item-img" />
                    <div className="order-item-info">
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <div className="order-item-price">
                      ₹{(parsePrice(item.price) * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="order-footer">
                <div className="shipping-info">
                  <strong>Shipped to:</strong> {order.shippingDetails?.fullName}, {order.shippingDetails?.city}
                </div>
                <div className="order-total-price">
                  Total: ₹{order.total.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
