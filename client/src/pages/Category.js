// export default Category;
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/category.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const CATEGORIES = ["all", "lamps", "beds", "sofas", "tables"];

const Category = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [auth] = useAuth();
  const isLoggedIn = !!auth?.token;
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("type") || "all";

  const handleCategoryChange = (cat) => {
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ type: cat });
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} được thêm vào giỏ hàng!`);
  };

  const products = [
    { name: "Đèn bàn", category: "lamps", rating: "★★★★★", price: "₫1,477,000", originalPrice: "₫1,477,800", image: "/images/furnitures/table_lamp.png", model: "/models/table_lamp.glb" },
    { name: "Đèn sàn", category: "lamps", rating: "★★★★★", price: "₫1,979,000", originalPrice: "₫2,480,000", image: "/images/furnitures/floor_lamp.png", model: "/models/lamp.glb" },
    { name: "Đèn hiện đại", category: "lamps", rating: "★★★★☆", price: "₫1,477,800", originalPrice: "₫1,728,600", image: "/images/furnitures/morden_lamp.png", model: "/models/modern_lamp.glb" },
    { name: "Đèn vintage", category: "lamps", rating: "★★★★★", price: "₫1,979,000", originalPrice: "₫2,480,000", image: "/images/furnitures/vintage_lamp.png", model: "/models/vintage_lamp.glb" },
    { name: "Đèn bàn làm việc", category: "lamps", rating: "★★★★☆", price: "₫989,000", originalPrice: "₫1,227,600", image: "/images/furnitures/work_lamp.png", model: "/models/new_table_lamp.glb" },
    { name: "Giường tối giản", category: "beds", rating: "★★★★★", price: "₫7,490,000", originalPrice: "₫8,745,600", image: "/images/furnitures/minimalist_bed.png", model: "/models/modern_bed.glb" },
    { name: "Giường King size", category: "beds", rating: "★★★★★", price: "₫9,995,000", originalPrice: "₫11,247,6₀₀", image: "/images/furnitures/ksz_bed.png", model: "/models/king_size.glb" },
    { name: "Giường gỗ", category: "beds", rating: "★★★★★", price: "₫7,490,000", originalPrice: "₫₁₁,₂₄₇,₆₀₀", image: "/images/furnitures/wooden_bed.png", model: "/models/wooden_bed.glb" },
    { name: "Giường hiện đại", category: "beds", rating: "★★★★★", price: "₫7,990,000", originalPrice: "₫9,₂₄₃,₆₀₀", image: "/images/furnitures/modern_bed.png", model: "/models/sleek_bed.glb" },
    { name: "Giường đơn", category: "beds", rating: "★★★★☆", price: "₫6,989,000", originalPrice: "₫8,241,600", image: "/images/furnitures/single_bed.png", model: "/models/minimalist_bed.glb" },
    { name: "Sofa da", category: "sofas", rating: "★★★★★", price: "₫12,500,000", originalPrice: "₫13,752,600", image: "/images/furnitures/sofa1.png", model: "/models//chesterfield-sofa.glb" },
    { name: "Sofa hiện đại", category: "sofas", rating: "★★★★★", price: "₫9,995,000", originalPrice: "₫11,247,600", image: "/images/furnitures/sofa2.png", model: "/models/low_poly_modern_sofa_free_model.glb" },
    { name: "Sofa nhung", category: "sofas", rating: "★★★★★", price: "₫11,498,000", originalPrice: "₫12,500,100", image: "/images/furnitures/sofa3.png", model: "/models/green_velvet_three_seatersofa.glb" },
    { name: "Sofa gọn nhẹ", category: "sofas", rating: "★★★★☆", price: "₫8,750,000", originalPrice: "₫9,744,600", image: "/images/furnitures/sofa4.png", model: "/models/compact_sofa.glb" },
    { name: "Sofa hình chữ L", category: "sofas", rating: "★★★★★", price: "₫15,350,000", originalPrice: "₫16,257,600", image: "/images/furnitures/sofa5.png", model: "/models/L-shape.glb" },
    { name: "Bàn cà phê", category: "tables", rating: "★★★★★", price: "₫4230,000", originalPrice: "₫432,600", image: "/images/furnitures/table1.png", model: "/models/bar_table.glb" },
    { name: "Bàn ăn", category: "tables", rating: "★★★★★", price: "₫2,490,000", originalPrice: "₫2,745,600", image: "/images/furnitures/table2.png", model: "/models/simple_dining_table.glb" },
    { name: "Bàn phụ", category: "tables", rating: "★★★★☆", price: "₫510,000", originalPrice: "₫510,100", image: "/images/furnitures/table3.png", model: "/models/ikea_lack_side_table_55x55x45.glb" },
    { name: "Bàn tròn", category: "tables", rating: "★★★★☆", price: "₫3,732,000", originalPrice: "₫4,233,600", image: "/images/furnitures/table4.png", model: "/models/round_table.glb" },
    { name: "Bàn kính", category: "tables", rating: "★★★★★", price: "₫4,985,000", originalPrice: "₫5,736,600", image: "/images/furnitures/table5.png  ", model: "/models/round_glass_table.glb" }
  ];

  const handleARView = (product) => {
    setSelectedProduct(product);
  };

  const closeARView = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products
    .filter((product) => activeCategory === "all" || product.category === activeCategory)
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="category-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="category-tabs">
        {CATEGORIES.map((cat) => {
          const categoryNames = {
            all: "Tất Cả",
            lamps: "Đèn",
            beds: "Giường",
            sofas: "Sofa",
            tables: "Bàn"
          };
          return (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {categoryNames[cat] || cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          );
        })}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <div className="product-rating">{product.rating}</div>
              <p className="product-price">{product.price}</p>
              <div className="product-actions">
                {isLoggedIn && <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Thêm vào Giỏ</button>}
                <button className="ar-button" onClick={() => handleARView(product)}>
                  <img
                    src="/models/cube_838538.png"
                    alt="Xem AR"
                    style={{ width: "24px", height: "24px", verticalAlign: "middle" }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="ar-modal">
          <div className="ar-modal-content">
            <button className="close-ar-modal" onClick={closeARView}>
              ×
            </button>
            <div className="product-description">
              <h3>{selectedProduct.name}</h3>
              <div className="product-rating">{selectedProduct.rating}</div>
              <p className="product-price">{selectedProduct.price}</p>
              {selectedProduct.description && <p>{selectedProduct.description}</p>}
            </div>
            <model-viewer
              src={selectedProduct.model}
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-placement="floor wall"
              camera-controls
              auto-rotate
              environment-image="neutral"
              shadow-intensity="1"
              style={{ width: "100%", height: "500px" }}
            >
              <div slot="ar-prompt">Di chuyển thiết bị của bạn từ từ để phát hiện mặt phẳng...</div>
              <button slot="ar-button" className="ar-activate-button">
                Xem Trên AR
              </button>
            </model-viewer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;