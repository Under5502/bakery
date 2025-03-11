import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss"; // Import SCSS

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Cột Thông Tin */}
          <Col md={3} className="footer-info">
            <h2 className="footer-brand">BERNICE BAKERY</h2>
            <p>
              5135 Notre-Dame Ouest
              <br />
              Montréal, QC H4C 1T4
            </p>
            <p>
              <a href="mailto:bonjour@bernicebakery.com">
                bonjour@bernicebakery.com
              </a>
            </p>
            <p>(514) 931-8444</p>
            <p className="follow-text">Follow us on Instagram</p>
            <div className="social-icons">
              <img
                src="https://media.vneconomy.vn/640x360/images/upload/2023/03/30/1200x630wa.png"
                alt="Uber Eats"
                className="icon"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeK3AX1bvUyOm-ieomGB3Yd-UCwWumE_4oQ&s"
                alt="DoorDash"
                className="icon"
              />
            </div>
          </Col>

          {/* Cột Menu */}
          <Col md={6} className="footer-menu">
            <Row>
              <Col>
                <a href="#">COOKIES</a>
                <a href="#">CAKES</a>
              </Col>
              <Col>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
              </Col>
            </Row>
          </Col>

          {/* Cột Đăng Ký Email */}
          <Col md={3} className="footer-newsletter">
            <h2>GET 15% OFF YOUR FIRST ORDER</h2>
            <div className="subscribe">
              <input type="email" placeholder="EMAIL" />
              <button>JOIN</button>
            </div>
          </Col>
        </Row>
        <div className="Footer_Big_Logo">
          <span className="Footer_Big_Logo_Text">Bernice</span>
        </div>

        {/* Dòng Bản Quyền */}
        <div className="footer-bottom">
          <p>Copyright 2025 | Bernice Bakery</p>
          <p>Terms of use | Privacy policy</p>
          <p>Made by Casa Media</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
