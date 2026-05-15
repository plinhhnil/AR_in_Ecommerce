import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();
  const navigate = useNavigate();

  // Parse price string like "₹4926" to number 4926
  const parsePrice = (priceStr) => {
    const num = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
    return isNaN(num) ? 0 : num;
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="browse-btn" onClick={() => navigate("/category")}>
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart ({cartCount} items)</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.name} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p className="cart-item-price">{item.price}</p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => updateQuantity(item.name, item.quantity - 1)}
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.name, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.name)}
              title="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          Total: <span>₹{totalPrice.toLocaleString()}</span>
        </div>
        <div className="cart-actions">
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
