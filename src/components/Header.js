import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss"; // Import SCSS

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Nếu cuộn xuống thì ẩn navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      }
      // Nếu cuộn lên thì hiện navbar
      else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${showNavbar ? "visible" : "hidden"}`}
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand href="#" className="logo">
          BERNICE
        </Navbar.Brand>

        {/* Navigation Menu */}
        <Nav className="menu">
          <Nav.Link href="#">COOKIES</Nav.Link>
          <Nav.Link href="#">CAKES</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
          <Nav.Link href="#">CONTACT</Nav.Link>
          <Nav.Link href="#">FRANÇAIS</Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    
  );
};

export default Header;


