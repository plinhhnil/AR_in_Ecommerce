
import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#2E4A3D", padding: "2rem 1rem", minHeight: "15vh", display: "flex", alignItems: "center" }}>
      <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", width: "100%", padding: "0 2rem" }}>
        {/* Left Side: Logo and Copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap" }}>
          <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
            <img src="/images/logo_nhaminh.png" alt="Nhà Mình Logo" style={{ height: "40px" }} />
            <span style={{ color: '#c85a40', fontWeight: 'bold', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', textTransform: 'lowercase', fontSize: '1.5rem' }}>nhà mình</span>
          </div>
          <div className="footer-copyright" style={{ color: "#FFF", margin: 0 }}>
            All Rights Reserved © {new Date().getFullYear()} <span style={{ color: '#c85a40', fontWeight: 'bold', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', textTransform: 'lowercase' }}>nhà mình</span>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="footer-links" style={{ display: "flex", gap: "20px", margin: 0 }}>
          <a href="/about" style={{ color: "#FFF", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#FFF", textDecoration: "none" }}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;