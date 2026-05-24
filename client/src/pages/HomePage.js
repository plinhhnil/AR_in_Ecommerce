import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const SECTION_FONT = {
  fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
  fontWeight: 800,
};

const DARK_GREEN = "#2E4A3D";

const HomePage = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const isLoggedIn = !!auth?.token;
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} được thêm vào giỏ hàng!`);
  };

  const handleBrowseShop = () => {
    navigate("/category");
  };

  return (
    <>
      {/* 1. Banner Carousel */}
      <Carousel>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/hero-furniture.jpg"
              alt="Slide đầu tiên"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>Mặt Hàng Nội Thất Đang Hot</h1>
              <p>Xem Ngay!</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/lamp.jpg"
              alt="Slide thứ hai"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>Khám Phá Sofa Độc Quyền</h1>
              <p>Sự Thoải Mái Sang Trọng Với Giá Hợp Lý</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/new_bed.jpg"
              alt="Slide thứ ba"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text"></div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* 2. AR App Banner — vị trí thứ 2 */}
      <div style={{ display: "flex", justifyContent: "center", margin: "0", padding: "24px 20px", backgroundColor: "#E8F5E9" }}>
        <img
          src="/images/banner_nhaminh.jpg"
          alt="Banner Ứng Dụng AR"
          style={{ width: "100%", maxWidth: "1400px", height: "auto", objectFit: "contain", borderRadius: "8px" }}
        />
      </div>

      {/* 3. Trending — Lựa Chọn Hàng Đầu */}
      <div className="trending-section">
        <div className="section-header">
          <h2 style={{ color: "#8B4513", margin: 0, flex: "none", textAlign: "left", ...SECTION_FONT }}>
            Lựa Chọn Hàng Đầu
          </h2>
          <button
            className="browse-shop"
            onClick={handleBrowseShop}
            style={{
              position: "static",
              backgroundColor: DARK_GREEN,
              color: "white",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "25px",
              border: "none",
            }}
          >
            Khám Phá
          </button>
        </div>
        <div className="trending-grid">
          <div className="trending-item">
            <img src="/images/new_sofa.jpg" alt="Sofa Hiện Đại" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Sofa Hiện Đại</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₫164,925,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Sofa Hiện Đại", price: "₫164,925,000", image: "/images/new_sofa.jpg" })}>
                  Thêm vào Giỏ
                </button>
              )}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/n_chair.jpg" alt="Ghế Hiện Đại" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Ghế Hiện Đại</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₫72,500,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Ghế Hiện Đại", price: "₫72,500,000", image: "/images/n_chair.jpg" })}>
                  Thêm vào Giỏ
                </button>
              )}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/dinning.jpg" alt="Bàn Cà Phê" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Bàn Cà Phê</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₫87,500,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Bàn Cà Phê", price: "₫87,500,000", image: "/images/dinning.jpg" })}>
                  Thêm vào Giỏ
                </button>
              )}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/table2.jpg" alt="Ghế Cao Nhất" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Ghế Cao Nhất</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₫97,500,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Ghế Cao Nhất", price: "₫97,500,000", image: "/images/table2.jpg" })}>
                  Thêm vào Giỏ
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Categories — Dòng Sản Phẩm */}
      <div className="categories-section">
        <div className="section-header">
          <h2 style={{ color: "#8B4513", margin: 0, flex: "none", textAlign: "left", ...SECTION_FONT }}>
            Dòng Sản Phẩm
          </h2>
        </div>
        <div className="categories-grid">
          <div className="category-box" onClick={() => navigate("/category?type=sofas")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/n_sofa.jpg" alt="Sofa" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Sofa</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=beds")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/bed_1.jpg" alt="Giường" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Giường</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=lamps")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/etienne-girardet-NGb91VwnOWY-unsplash.jpg" alt="Đèn" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Đèn</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=tables")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/cabinet.jpg" alt="Bàn" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Bàn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
