import "./Cart.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

function Cart({ onClose, onCheckoutClick }) {

  const circleRef = useRef(null);

const handleMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (circleRef.current) {
    circleRef.current.style.left = `${x - 10}px`;
    circleRef.current.style.top = `${y - 10}px`;
  }
};

const handleHover = () => {
  if (circleRef.current) {
    circleRef.current.classList.add("active");
  }
};

const handleLeave = () => {
  if (circleRef.current) {
    circleRef.current.classList.remove("active");
  }
};
  const [isCartOpen, setIsCartOpen] = useState(false); // Track cart open state

  const getTotalPrice = () => {
    return products
      .reduce((total, product) => {
        const numericPrice = parseFloat(product.price.replace("$", ""));
        return total + numericPrice * product.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleIncreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Birthday",
      price: "$29.00",
      quantity: 1,
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-100_websize_noBG.png?v=1728434205&width=480",
      link: "/product",
    },
    {
      id: 2,
      name: "Chocolate",
      price: "$29.00",
      quantity: 1,
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-83_websize_noBG.png?v=1728434128&width=480",
      link: "/product",
    },
    {
      id: 3,
      name: "S'mores",
      price: "$29.00",
      quantity: 1,
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-89_websize_noBG.png?v=1728434267&width=480",
      link: "/product",
    },
  ]);

  const handleRemove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <motion.div
      initial={{ x: 500 }} // Bắt đầu từ phải (100px) và ẩn
      animate={{ x: 0 }} // Trượt qua trái (0px) và hiện lên
      exit={{ x: 500 }} // Khi đóng lại trượt về phải
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`cart-container ${isCartOpen ? "open" : ""}`}
    >
      <div className="cart-main">
        <div className="cart-top">
          <h2 className="h2-cart">CART</h2>
          <button className="cart-close" onClick={onClose}>
            <svg
              className="Icon Icon-close"
              role="presentation"
              viewBox="0 0 16 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <hr className="cart-hr" />
        <div className="cart-content">
          <div className="cart-content-product">
            <div className="cart-image">
              {products.map((product) => (
                <div key={product.id} className="cart-item">
                  <Link to={product.link} className="cart-item">
                    <img
                      src={product.image1}
                      alt={product.name}
                      className="cart-default"
                    />
                  </Link>
                </div>
              ))}
            </div>

            <div className="cart-display">
              {products.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-info">
                    <h3 className="cart-name">
                      <Link to={product.link}>{product.name}</Link>
                    </h3>
                    <span className="price-cart">{product.price}</span>
                  </div>
                  <div className="cart-item-change">
                    <div className="cart-details">
                      <div className="cart-selector">
                        <button
                          className="Minus-cart"
                          onClick={() => handleDecreaseQuantity(product.id)}
                        >
                          <span className="cart-btn">-</span>
                        </button>
                        <input
                          type="number"
                          name="quantity"
                          value={product.quantity}
                          pattern="[0-9]*"
                          aria-label="Quantity"
                        />
                        <button
                          className="Plus-cart"
                          onClick={() => handleIncreaseQuantity(product.id)}
                        >
                          <span className="cart-btn">+</span>
                        </button>
                      </div>
                    </div>
                    <div className="cart-remove">
                      <button
                        className="btn-remove"
                        onClick={() => handleRemove(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cart-bottom">
          <button
            type="button"
            className="btn-checkout"
            onClick={onCheckoutClick}
            onMouseEnter={handleHover}
  onMouseLeave={handleLeave}
  onMouseMove={handleMove}
          >
            <span className="reveal-circle" ref={circleRef}></span>
            <div className="in-btn">
              <span className="checkout">Check Out</span>
              <span className="btn-cham"></span>
              <span className="price-sum">${getTotalPrice()}</span>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
