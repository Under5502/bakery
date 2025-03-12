import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Header/Header.scss"; // Ensure SCSS file is correctly set up
import { Link } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const toggleNav = () => {
      // This checks if the scroll position is greater than the window's height (100vh)
      setShowNav(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", toggleNav);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", toggleNav);
    };
  }, []);

  return (
    <>
      {/* Always shown if showNav is false */}
      {!showNav && (
        <div className="header-container">
          <div className="logo">
            <Link to={"/"}>
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
                    to={`/collections/${item.toLowerCase()}`}
                    aria-label={item}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={"/"} className="Grow_Anim">
                  Français
                </Link>
              </li>
            </ul>
            <div className="menu-right">
              <div className="main-menu_right">
                <Link
                  className="menu_icon"
                  to={"/cart"}
                  data-action="open-cart"
                >
                  <FontAwesomeIcon icon={faShoppingBag} className="Icon-cart" />
                </Link>
                <Link
                  className="menu_icon"
                  to={"/search"}
                  data-action="toggle-search"
                >
                  <FontAwesomeIcon icon={faSearch} className="Icon-search" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shown only when showNav is true */}
      {showNav && (
        <div className="header-container-nav">
          <div className="logo-nav">
            <Link to={"/"}>
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
                  <a
                    className="Grow_Anim"
                    href={`/collections/${item.toLowerCase()}`}
                    aria-label={item}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a className="Grow_Anim" href="/">
                  Français
                </a>
              </li>
            </ul>
            <div className="menu-right-nav">
              <div className="main-menu_right-nav">
                <a
                  className="menu_icon-nav"
                  href="/cart"
                  data-action="open-cart-nav"
                >
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="Icon-cart-nav"
                  />
                </a>
                <a
                  className="menu_icon-nav"
                  href="/search"
                  data-action="toggle-search"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="Icon-search-nav"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
