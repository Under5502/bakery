import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Header/Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar({ onCartClick }) {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const toggleNav = () => {
      setShowNav(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", toggleNav);

    return () => {
      window.removeEventListener("scroll", toggleNav);
    };
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && !showNav && !showSearch && (
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <div className="Logo-Light">
                <img
                  src="//bernicebakery.com/cdn/shop/files/bernice-logo-temp.png?v=1714674815&width=300"
                  alt="Bernice Bakery"
                  width="300"
                  height="49"
                />
              </div>
            </Link>
          </div>
          <div className="menu-container">
            <ul className="main-menu">
              {["Cookies", "Cakes", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    className="Grow_Anim"
                    to={`/${item.toLowerCase()}`}
                    aria-label={item}
                  >
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
            <div className="menu-right">
              <div className="main-menu_right">
                <button className="menu_icon" onClick={onCartClick}>
                  <FontAwesomeIcon icon={faShoppingBag} className="Icon-cart" />
                </button>
                <button className="menu_icon" onClick={handleSearchToggle}>
                  <FontAwesomeIcon icon={faSearch} className="Icon-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ////////////////////nav-light /////////////////////////////////////*/}
      {(!isHome || showNav || showSearch) && (
        <div className="header-container-nav">
          <div className="nav-light">
            <div className="logo-nav">
              <Link to="/">
                <div className="Logo-Dark">
                  <img
                    src="//bernicebakery.com/cdn/shop/files/bernice-logo-temp-dark.png?v=1714674815&width=300"
                    alt="Bernice Bakery"
                    width="300"
                    height="49"
                  />
                </div>
              </Link>
            </div>
            <div className="menu-container-nav">
              <ul className="main-menu-nav">
                {["Cookies", "Cakes", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      className="Grow_Anim"
                      to={`/${item.toLowerCase()}`}
                      aria-label={item}
                    >
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
              <div className="menu-right-nav">
                <div className="main-menu_right-nav">
                  <button className="menu_icon-nav" onClick={onCartClick}>
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      className="Icon-cart-nav"
                    />
                  </button>

                  <button
                    className="menu_icon-nav"
                    onClick={handleSearchToggle}
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="Icon-search-nav"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showSearch && (
            <div className="Search_Popup">
              <div className="Search_Popup_Inner">
                <form className="Search Form">
                  <input
                    type="text"
                    name="q"
                    id="result-q"
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
                  <svg
                    className="Icon Icon-close"
                    role="presentation"
                    viewBox="0 0 16 14"
                  >
                    <path
                      d="M15 0L1 14m14 0L1 0"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd" // <-- lưu ý: dùng `fillRule` thay vì `fill-rule`
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
