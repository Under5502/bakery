import "../Body/Cart.scss";
import { Link } from "react-router-dom";
function Cart() {
  const products = [
    {
      name: "Birthday",

      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-100_websize_noBG.png?v=1728434205&width=480",

      link: "/product",
    },
    {
      name: "Chocolate Chunk",

      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-83_websize_noBG.png?v=1728434128&width=480",

      link: "/product",
    },
    {
      name: "S'mores",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-89_websize_noBG.png?v=1728434267&width=480",

      link: "/product",
    },
  ];
  return (
    <div className="cart-container">
      <div className="cart-top">
        <h2 className="h2-cart">CART</h2>
        <button className="cart-close">
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
      <div className="cart-content">
        <div className="cart-content-product">
          <div className="cart-display">
            {products.map((product) => (
              <div key={product.id} className="cart-item">
                <Link to={product.link} className="cart-image">
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="cart-default"
                  />
                </Link>
                <div className="cart-info">
                  <Link to={product.link}>
                    <h3>{product.name}</h3>
                  </Link>
                </div>
                <div className="cart-details">
                  <span className="price-cart">{product.price}</span>
                  <div className="quantity-selector">
                    <button className="Minus-cart">
                      <span>-</span>
                    </button>
                    <input
                      type="number"
                      name="quantity"
                      defaultValue="1"
                      pattern="[0-9]*"
                      aria-label="Quantity"
                    />
                    <button className="Plus-cart">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cart-bottom">
        <button className="btn-checkout">
          <span>Check Out</span>
          <span className="btn-cham">.</span>
          <span className="price-sum">$169.00</span>
        </button>
      </div>
    </div>
  );
}

export default Cart;
