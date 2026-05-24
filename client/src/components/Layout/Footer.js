import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Trái: logo + bản quyền */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/images/logo_nhaminh.png" alt="Nhà Mình Logo" />
            <span className="footer-logo-text">nhà mình</span>
          </div>
          <p className="footer-copyright">
            Bản quyền &copy; {new Date().getFullYear()}&nbsp;
            <span className="footer-copyright-brand">nhà mình</span>
          </p>
        </div>

        {/* Phải: điều hướng */}
        <div className="footer-links">
          <a href="/about">Giới Thiệu</a>
          <a href="/contact">Liên Hệ</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
