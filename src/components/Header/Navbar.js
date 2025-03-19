import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Header/Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar({ onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

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
