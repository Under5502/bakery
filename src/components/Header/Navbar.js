import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // ✔️ Thư viện đúng
import { motion } from "framer-motion";
import "./Navbar.scss";
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
                  <svg
                    className="Icon-cart"
                    role="presentation"
                    viewBox="0 0 17 20"
                  >
                    <path
                      d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className="menu_icon" onClick={handleSearchToggle}>
                  <svg
                    class="Icon-search"
                    role="presentation"
                    viewBox="0 0 18 17"
                  >
                    <g
                      transform="translate(1 1)"
                      stroke="currentColor"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="square"
                    >
                      <path d="M16 16l-5.0752-5.0752"></path>
                      <circle cx="6.4" cy="6.4" r="6.4"></circle>
                    </g>
                  </svg>
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
        <motion.div
          className="header-container-nav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
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
                <svg
                  class="Icon-cart-nav"
                  role="presentation"
                  viewBox="0 0 17 20"
                >
                  <path
                    d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="menu_icon-nav" onClick={handleSearchToggle}>
                <svg
                  class="Icon-search-nav"
                  role="presentation"
                  viewBox="0 0 18 17"
                >
                  <g
                    transform="translate(1 1)"
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                  >
                    <path d="M16 16l-5.0752-5.0752"></path>
                    <circle cx="6.4" cy="6.4" r="6.4"></circle>
                  </g>
                </svg>
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
                transition={{ duration: 0.8, delay: 1 }}
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
              <motion.div
                className="Search_Popup_Inner"
                initial={{ y: -100, opacity: 0, delay: 1 }}
                animate={{ y: 0, opacity: 1, delay: 1 }}
                exit={{ y: -100, opacity: 0, delay: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
              >
                <motion.form
                  className="Search Form"
                  initial={{ y: -100, opacity: 0, delay: 1 }}
                  animate={{ y: 0, opacity: 1, delay: 1 }}
                  exit={{ y: -100, opacity: 0, delay: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
                >
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
                </motion.form>
                <button className="search-close" onClick={handleCloseSearch}>
                  <svg className="Icon Icon-close" viewBox="0 0 16 14">
                    <path
                      d="M15 0L1 14m14 0L1 0"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
