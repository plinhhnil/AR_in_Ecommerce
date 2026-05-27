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
              src="/images/n_lamp.jpg"
              alt="Slide đầu tiên"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>MẶT HÀNG NỘI THẤT ĐANG HOT</h1>
              <p>Xem ngay!</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/n_sofa2.jpg"
              alt="Slide thứ hai"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>KHÁM PHÁ SOFA ĐỘC QUYỀN</h1>
              <p>Sự thoải mái sang trọng với giá hợp lý</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/bed6.jpg"
              alt="Slide thứ ba"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>KHÁM PHÁ GIƯỜNG ĐỘC QUYỀN</h1>
              <p>Thiết kế hiện đại, chất lượng cao</p>
            </div>
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
            Lựa chọn hàng đầu
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
            Khám phá
          </button>
        </div>
        <div className="trending-grid">
          <div className="trending-item">
            <img src="/images/sofa6.jpg" alt="Sofa hiện đại" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Sofa hiện đại</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₫9,425,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Sofa hiện đại", price: "₫9,425,000", image: "/images/sofa6.jpg" })}>
                  Thêm vào Giỏ
                </button>
              )}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/office-chair-1.jpg" alt="Ghế hiện đại" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Ghế hiện đại</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₫7,250,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Ghế hiện đại", price: "₫7,250,000", image: "/images/office-chair-1.jpg" })}>
                  Thêm vào Giỏ
                </button>
              )}
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/table6.jpg" alt="Bàn cà phê" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Bàn cà phê</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₫1,700,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Bàn cà phê", price: "₫1,700,000", image: "/images/table6.jpg" })}>
                  Thêm vào Giỏ
                </button>
              )}
            </div>
          </div>
          <div className="office-chair-6">
            <img src="/images/office-chair-6.jpg" alt="Ghế văn phòng" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Ghế văn phòng</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₫6,500,000</p>
              {isLoggedIn && (
                <button className="add-to-cart" onClick={() => handleAddToCart({ name: "Ghế văn phòng", price: "₫6,500,000", image: "/images/office-chair-6.jpg" })}>
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
            Dòng sản phẩm
          </h2>
        </div>
        <div className="categories-grid">
          <div className="category-box" onClick={() => navigate("/category?type=sofas")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/sofa3.jpg" alt="Sofa" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Sofa</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=beds")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/bed_2.jpg" alt="Giường" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Giường</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=lamps")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/chandalier1.jpg" alt="Đèn" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Đèn</p>
            </div>
          </div>
          <div className="category-box" onClick={() => navigate("/category?type=tables")} style={{ cursor: "pointer" }}>
            <img className="category-image" src="/images/table5.jpg" alt="Bàn" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
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
