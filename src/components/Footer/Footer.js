import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Footer/Footer.scss"; // Import SCSS
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-container">
          <Col md={3} className="footer-info">
            <h2 className="footer-brand">BERNICE BAKERY</h2>
            <p>
              5135 Notre-Dame Ouest
              <br />
              Montréal, QC H4C 1T4
            </p>
            <p className="footer-information">
              <Link to="/" className="bonjour">
                bonjour@bernicebakery.com
              </Link>
              <Link to="/" className="bonjour">
                (514) 931-8444
              </Link>
            </p>
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
            <p className="follow-text">
              <a
                href="https://www.instagram.com/vunguyen.22/"
                className="bonjour"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us on Instagram
              </a>
            </p>
          </Col>

          {/* Cột Menu */}
          <Col md={6} className="footer-menu">
            <Row className="information">
              <Col>
                <Link to="/cookies">COOKIES</Link>
                <Link to="/cakes">CAKES</Link>
              </Col>
              <Col>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
              </Col>
            </Row>
          </Col>

          {/* Cột Đăng Ký Email */}
          <Col md={3} className="footer-newsletter">
            <h2 className="discount">GET 15% OFF YOUR FIRST ORDER</h2>
            <div className="subscribe">
              <input type="email" placeholder="EMAIL" />
              <button className="join">JOIN</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="Footer_Big_Logo">
        <h1 className="footer-big-logo">Bernice </h1>
      </div>

      {/* Dòng Bản Quyền */}
      <div className="footer-bottom">
        <p>Copyright 2025 | Bernice Bakery</p>
        <p>Terms of use | Privacy policy</p>
        <p>Made by Casa Media</p>
      </div>
    </footer>
  );
};

export default Footer;
