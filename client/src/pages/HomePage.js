import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";


const HomePage = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const isLoggedIn = !!auth?.token;
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBrowseShop = () => {
    navigate("/category"); // This will redirect to Category.js if the route is set up correctly
  };

  return (
    <>
      <Carousel style={{ height: "85vh" }}>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/hero-furniture.jpg"
              alt="First slide"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>Big Savings Await!</h1>
              <p>Discover Unbeatable Deals on Furniture</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/lamp.jpg"
              alt="Second slide"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>Explore Exclusive Sofa</h1>
              <p>Luxury Comfort at Affordable Prices</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/new_bed.jpg"
              alt="Third slide"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
             
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Categories Section */}
      <div className="categories-section">
        <div style={{ textAlign: "left", padding: "0 20px", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ color: "#8B4513", backgroundColor: "#E8F5E9", padding: "10px 20px", display: "inline-block", borderRadius: "8px", margin: "20px 0" }}>Categories</h2>
        </div>
        <div className="categories-grid">
          <div className="category-box" onClick={() => navigate("/category?type=beds")} style={{ cursor: "pointer" }}>
            <img
              className="category-image"
              src="/images/bed_1.jpg"
              alt="Beds"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Beds</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=sofas")} style={{ cursor: "pointer" }}>
            <img
              className="category-image"
              src="/images/n_sofa.jpg"
              alt="Sofas"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Sofas</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=tables")} style={{ cursor: "pointer" }}>
            <img
              className="category-image"
              src="/images/cabinet.jpg"
              alt="Tables"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Tables</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=lamps")} style={{ cursor: "pointer" }}>
            <img
              className="category-image"
              src="/images/etienne-girardet-NGb91VwnOWY-unsplash.jpg"
              alt="Lamps"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Lamps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="trending-section">
        <div className="trending-header" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "20px", marginBottom: "20px", backgroundColor: "#E8F5E9", padding: "10px 20px", borderRadius: "8px" }}>
          <h2 style={{ color: "#8B4513", margin: 0, flex: "none", textAlign: "left" }}>Top Choices</h2>
          <button className="browse-shop" onClick={handleBrowseShop} style={{ position: "static", backgroundColor: "#4CAF50", color: "white", fontWeight: "bold", padding: "8px 20px", borderRadius: "25px", border: "none" }}>
            Browse Shop <span>»</span>
          </button>
        </div>
        <div className="trending-grid">
          <div className="trending-item">
            <img src="/images/new_sofa.jpg" alt="Modern Sofa" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Modern Sofa</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₹6597</p>
              {isLoggedIn && <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Modern Sofa", price: "₹6597", image: "/images/new_sofa.jpg" })}>Add to Cart</button>}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/n_chair.jpg" alt="Modern Chair" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Modern Chair</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₹2900 <span className="original-price">$95.00</span></p>
              {isLoggedIn && <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Modern Chair", price: "₹2900", image: "/images/n_chair.jpg" })}>Add to Cart</button>}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/dinning.jpg" alt="Coffee Table" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Coffee Table</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₹3500 <span className="original-price">$85.00</span></p>
              {isLoggedIn && <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Coffee Table", price: "₹3500", image: "/images/dinning.jpg" })}>Add to Cart</button>}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/table2.jpg" alt="Tallest Chair" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Tallest Chair</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₹3900 <span className="original-price">$110.00</span></p>
              {isLoggedIn && <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Tallest Chair", price: "₹3900", image: "/images/table2.jpg" })}>Add to Cart</button>}
            </div>
          </div>
        </div>
      </div>

      {/* AR App Banner Image */}
      <div style={{ display: "flex", justifyContent: "center", margin: "40px 0", padding: "40px 20px", backgroundColor: "#E8F5E9" }}>
        <img src="/images/banner_nhaminh.jpg" alt="AR App Banner" style={{ width: "100%", maxWidth: "1200px", height: "auto", objectFit: "contain", borderRadius: "8px" }} />
      </div>
    </>
  );
};

export default HomePage;