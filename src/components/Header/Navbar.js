import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Header/Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar({ onCartClick }) {
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
      {isHome && !showNav && (
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
                <Link
                  className="menu_icon"
                  to="/search"
                  data-action="toggle-search"
                >
                  <FontAwesomeIcon icon={faSearch} className="Icon-search" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {(!isHome || showNav) && (
        <div className="header-container-nav">
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

                <Link
                  className="menu_icon-nav"
                  to="/search"
                  data-action="toggle-search"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="Icon-search-nav"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
