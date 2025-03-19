import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // ✔️ Thư viện đúng
import { motion } from "framer-motion";
import "../Header/Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar({ onCartClick }) {
  const handleCloseMobileMenu = () => setMobileMenuOpen(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const slideFromBottomLeft = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    const toggleNav = () => {
      setShowNav(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", toggleNav);
    return () => window.removeEventListener("scroll", toggleNav);
  }, []);

  const handleSearchToggle = () => setShowSearch(!showSearch);
  const handleCloseSearch = () => setShowSearch(false);

  const menuItems = ["Cookies", "Cakes", "About", "Contact"];

  return (
    <>
      {isHome && !showNav && !showSearch ? (
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img
                src="//bernicebakery.com/cdn/shop/files/bernice-logo-temp.png?v=1714674815&width=300"
                alt="Bernice Bakery"
                width="200"
                height="29"
              />
            </Link>
          </div>
          <div className="menu-container">
            <div className="desktop-only">
              <ul className="main-menu">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="Grow_Anim">
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/fr" className="Grow_Anim">
                    Français
                  </Link>
                </li>
              </ul>
            </div>

            <div className="menu-right">
              <div className="nav-icons-right">
                <button className="menu_icon" onClick={onCartClick}>
                  <FontAwesomeIcon icon={faShoppingBag} className="Icon-cart" />
                </button>
                <button className="menu_icon" onClick={handleSearchToggle}>
                  <FontAwesomeIcon icon={faSearch} className="Icon-search" />
                </button>
                <button
                  className="hamburger-menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  ☰
                </button>
              </div>

              {mobileMenuOpen && (
                <div className="mobile-nav-menu">
                  {menuItems.map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <Link to="/fr" onClick={() => setMobileMenuOpen(false)}>
                    Français
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="header-container-nav">
          <div className="nav-light">
            <div className="logo-nav">
              <Link to="/" className="Logo-Dark">
                <img
                  src="//bernicebakery.com/cdn/shop/files/bernice-logo-temp-dark.png?v=1714674815&width=300"
                  alt="Bernice Bakery"
                  width="200"
                  height="29"
                />
              </Link>
            </div>

            {/* Menu Desktop */}

            <ul className="main-menu-nav">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="Grow_Anim">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/fr" className="Grow_Anim">
                  Français
                </Link>
              </li>
            </ul>
            <div className="nav-icons-right">
              <button className="menu_icon-nav" onClick={onCartClick}>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="Icon-cart-nav"
                />
              </button>
              <button className="menu_icon-nav" onClick={handleSearchToggle}>
                <FontAwesomeIcon icon={faSearch} className="Icon-search-nav" />
              </button>
              <button
                className="hamburger-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                ☰
              </button>
            </div>

            {/* Mobile Nav Menu */}
            {mobileMenuOpen && (
              <motion.div
                className="mobile-nav-menu"
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                variants={slideFromBottomLeft}
              >
                <div className="logo">
                  <Link to="/">
                    <img
                      src="//bernicebakery.com/cdn/shop/files/bernice-logo-temp.png?v=1714674815&width=300"
                      alt="Bernice Bakery"
                      width="200"
                      height="29"
                    />
                  </Link>
                </div>
                <motion.button
                  className="search-close-nav"
                  onClick={handleCloseMobileMenu}
                >
                  <svg className="Icon Icon-close-nav" viewBox="0 0 16 14">
                    <path
                      d="M15 0L1 14m14 0L1 0"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </motion.button>
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Link to="/fr" onClick={() => setMobileMenuOpen(false)}>
                  Français
                </Link>
                <Link to="https://www.instagram.com/vunguyen.22/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="logo-instagram"
                  />
                </Link>
                <div class="Fluid">
                  <img
                    className="img-nav-mobile"
                    src="//bernicebakery.com/cdn/shop/files/2.png?v=1729541687&amp;width=420"
                    alt=""
                    srcset="//bernicebakery.com/cdn/shop/files/2.png?v=1729541687&amp;width=352 352w, //bernicebakery.com/cdn/shop/files/2.png?v=1729541687&amp;width=420 420w"
                    width="420"
                    height="525"
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Search Popup */}
          {showSearch && (
            <div className="Search_Popup">
              <div className="Search_Popup_Inner">
                <form className="Search Form">
                  <input
                    type="text"
                    name="q"
                    className="Form__Input"
                    placeholder="PRODUCT, COLLECTION, PAGE..."
                  />
                  <div className="Form_Button Form__Submit">
                    <button type="submit" className="Button Button--primary">
                      Search
                    </button>
                  </div>
                </form>
                <button className="search-close" onClick={handleCloseSearch}>
                  <svg className="Icon Icon-close" viewBox="0 0 16 14">
                    <path
                      d="M15 0L1 14m14 0L1 0"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
