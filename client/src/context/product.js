import React, { useState, useContext, createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Các trạng thái cơ bản cho sản phẩm
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <ProductContext.Provider 
      value={{ 
        products, setProducts, 
        loading, setLoading, 
        search, setSearch 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook
const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
