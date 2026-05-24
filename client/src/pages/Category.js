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
    { name: "Đèn Bàn", category: "lamps", rating: "★★★★★", price: "₫1,477,800", originalPrice: "₫1,477,800", image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=600&auto=format&fit=crop&q=60", model: "/models/table_lamp.glb" },
    { name: "Đèn Sàn", category: "lamps", rating: "★★★★★", price: "₫1,979,100", originalPrice: "₫2,480,100", image: "https://images.unsplash.com/photo-1743578666060-49a1747d61df?w=600&auto=format&fit=crop&q=60", model: "/models/lamp.glb" },
    { name: "Đèn Hiện Đại", category: "lamps", rating: "★★★★☆", price: "₫1,477,800", originalPrice: "₫1,728,600", image: "https://images.unsplash.com/photo-1729825128716-13221811859f?w=600&auto=format&fit=crop&q=60", model: "/models/modern_lamp.glb" },
    { name: "Đèn Vintage", category: "lamps", rating: "★★★★★", price: "₫1,979,100", originalPrice: "₫2,480,100", image: "https://images.unsplash.com/photo-1667316636895-0346ca648046?w=600&auto=format&fit=crop&q=60", model: "/models/vintage_lamp.glb" },
    { name: "Đèn Bàn Làm Việc", category: "lamps", rating: "★★★★☆", price: "₫989,100", originalPrice: "₫1,227,600", image: "https://plus.unsplash.com/premium_photo-1685287731237-d119a3d95711?w=600&auto=format&fit=crop&q=60", model: "/models/new_table_lamp.glb" },
    { name: "Giường Hiện Đại", category: "beds", rating: "★★★★★", price: "₫7,490,100", originalPrice: "₫8,745,600", image: "https://images.unsplash.com/photo-1688384452844-8364c3e2fc28?w=600&auto=format&fit=crop&q=60", model: "/models/modern_bed.glb" },
    { name: "Giường King Size", category: "beds", rating: "★★★★★", price: "₫9,995,100", originalPrice: "₫11,247,600", image: "https://images.unsplash.com/photo-1592229505678-cf99a9908e03?w=600&auto=format&fit=crop&q=60", model: "/models/king_size.glb" },
    { name: "Giường Gỗ", category: "beds", rating: "★★★★★", price: "₫7,490,100", originalPrice: "₫11,247,600", image: "https://images.unsplash.com/photo-1688384452844-8364c3e2fc28?w=600&auto=format&fit=crop&q=60", model: "/models/wooden_bed.glb" },
    { name: "Giường Hiện Đại Kiểu", category: "beds", rating: "★★★★★", price: "₫7,991,100", originalPrice: "₫9,243,600", image: "https://plus.unsplash.com/premium_photo-1670076515907-2736a3492f23?w=600&auto=format&fit=crop&q=60", model: "/models/sleek_bed.glb" },
    { name: "Giường Tối Giản", category: "beds", rating: "★★★★☆", price: "₫6,989,100", originalPrice: "₫8,241,600", image: "https://plus.unsplash.com/premium_photo-1671269943825-e45b177add8f?w=600&auto=format&fit=crop&q=60", model: "/models/minimalist_bed.glb" },
    { name: "Sofa Da", category: "sofas", rating: "★★★★★", price: "₫12,500,100", originalPrice: "₫13,752,600", image: "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?w=600&auto=format&fit=crop&q=60", model: "/models//chesterfield-sofa.glb" },
    { name: "Sofa Hiện Đại", category: "sofas", rating: "★★★★★", price: "₫9,995,100", originalPrice: "₫11,247,600", image: "https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?w=600&auto=format&fit=crop&q=60", model: "/models/low_poly_modern_sofa_free_model.glb" },
    { name: "Sofa Nhung", category: "sofas", rating: "★★★★★", price: "₫11,498,100", originalPrice: "₫12,500,100", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60", model: "/models/green_velvet_three_seatersofa.glb" },
    { name: "Sofa Gọn Nhẹ", category: "sofas", rating: "★★★★☆", price: "₫8,750,100", originalPrice: "₫9,744,600", image: "https://images.unsplash.com/photo-1647221598498-245f6ed6c720?w=600&auto=format&fit=crop&q=60", model: "/models/compact_sofa.glb" },
    { name: "Sofa Hình Chữ L", category: "sofas", rating: "★★★★★", price: "₫15,005,100", originalPrice: "₫16,257,600", image: "https://plus.unsplash.com/premium_photo-1692130314358-30f911957d7f?w=600&auto=format&fit=crop&q=60", model: "/models/L-shape.glb" },
    { name: "Bàn Cà Phê", category: "tables", rating: "★★★★★", price: "₫3,230,100", originalPrice: "₫3,732,600", image: "https://images.unsplash.com/photo-1461418559055-6f020c5a91e7?w=600&auto=format&fit=crop&q=60", model: "/models/bar_table.glb" },
    { name: "Bàn Ăn", category: "tables", rating: "★★★★★", price: "₫7,490,100", originalPrice: "₫8,745,600", image: "https://images.unsplash.com/photo-1656470176663-1f5ed664e539?w=600&auto=format&fit=crop&q=60", model: "/models/simple_dining_table.glb" },
    { name: "Bàn Phụ", category: "tables", rating: "★★★★☆", price: "₫1,979,100", originalPrice: "₫2,480,100", image: "https://images.unsplash.com/photo-1494949385013-8b57482a0e4f?w=600&auto=format&fit=crop&q=60", model: "/models/ikea_lack_side_table_55x55x45.glb" },
    { name: "Bàn Tròn", category: "tables", rating: "★★★★☆", price: "₫3,732,600", originalPrice: "₫4,233,600", image: "https://plus.unsplash.com/premium_photo-1670869816894-e020bc93b279?w=600&auto=format&fit=crop&q=60", model: "/models/round_table.glb" },
    { name: "Bàn Kính", category: "tables", rating: "★★★★★", price: "₫4,985,100", originalPrice: "₫5,736,600", image: "https://images.unsplash.com/photo-1563146413-d915a569d6b1?w=600&auto=format&fit=crop&q=60", model: "/models/round_glass_table.glb" }
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
              <p className="product-price">
                {product.price}{" "}
                <span className="original-price">{product.originalPrice}</span>
              </p>
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
              <p className="product-price">
                {selectedProduct.price}{" "}
                <span className="original-price">{selectedProduct.originalPrice}</span>
              </p>
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