import "../Cookies/Cookie.scss";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

function Cookie() {
  const handleEnter = (e, id) => {
    const circle = document.getElementById(`reveal-${id}`);
    if (!circle) return;
    circle.classList.add("active");
  };

  const handleLeave = (e, id) => {
    const circle = document.getElementById(`reveal-${id}`);
    if (!circle) return;
    circle.classList.remove("active");
  };

  const handleMove = (e, id) => {
    const circle = document.getElementById(`reveal-${id}`);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (circle) {
      circle.style.left = `${x - 10}px`;
      circle.style.top = `${y - 10}px`;
    }
  };

  const { onAddToCart } = useOutletContext();
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
  const slideFromBottomLeft = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [products, setProducts] = useState([
    {
      id: "43568369139909",
      name: "Birthday",
      format: "Box of 6",
      quantity: 1,
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-100_websize_noBG.png?v=1728434205&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-111_websize_noBG.png?v=1728434172&width=350",
      link: "/product",
      ingredients: [],
    },
    {
      id: "43122499289285",
      name: "Chocolate Chunk",
      quantity: 1,
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-83_websize_noBG.png?v=1728434128&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Bernice-28.png?v=1728434336&width=350",
      link: "/product",
      ingredients: [],
    },
    {
      name: "S'mores",
      format: "Box of 6",
      quantity: 1,
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-89_websize_noBG.png?v=1728434267&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=350",
      link: "/product",
      ingredients: [],
    },
    {
      name: "CARAMEL",
      format: "Box of 6",
      weight: "4oz",
      quantity: 1,
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=350",
      link: "/product",
      ingredients: [],
    },
    {
      name: "CARAMEL",
      format: "Box of 6",
      weight: "4oz",
      quantity: 1,
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=350",
      link: "/product",
      ingredients: [],
    },
    {
      name: "CARAMEL",
      format: "Box of 6",
      weight: "4oz",
      quantity: 1,
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=350",
      link: "/product",
      ingredients: [],
    },
  ]);
  return (
    <div className="Collection-container">
      <div className="cookies">
        <div className="Collection-top">
          <h2>COOKIES</h2>
          <div className="Cool_Anim">
            <p>
              <span className="sp-ck">
                Our cookies are known for a chewy exterior and an ooey-gooey
                center. They are loaded with different types of chocolate and
                tons of butter. We believe these are the key ingredients for the
                best cookies.
              </span>
            </p>
            <p>
              <span
                aria-label=""
                className="c-mrkdwn__br"
                data-stringify-type="paragraph-break"
              ></span>
              <span className="sp-ck">
                We offer over a dozen different varieties that come in both 4
                ounces and 6 ounces. No matter what type of chocaholic you
                identify as, you will certainly find one perfect for you.
              </span>
            </p>
          </div>
        </div>
        <motion.div
          className="Collection-bottom"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={slideFromBottomLeft}
        >
          <div className="product-cookies1">
            {products.map((product) => (
              <div key={product.id} className="product-item-cookies">
                <Link to={product.link} className="product-image-cookies">
                  {product.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-label">
                      {ingredient}
                    </span>
                  ))}
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="img-default"
                    onMouseEnter={(e) => (e.target.src = product.image2)} // Change image on hover
                    onMouseLeave={(e) => (e.target.src = product.image1)} // Revert to the original image
                  />
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="img-default"
                    onMouseEnter={(e) => (e.target.src = product.image2)} // Change image on hover
                    onMouseLeave={(e) => (e.target.src = product.image1)} // Revert to the original image
                  />
                </Link>
                <div className="product-info">
                  <Link to={product.link}>
                    <h3>{product.name}</h3>
                    <span>{product.format}</span>
                    <span className="separator-dot"> • </span>
                    <span>{product.weight}</span>
                  </Link>
                </div>
                <div className="product-details">
                  <span className="price">{product.price}</span>
                  <div className="quantity-selector">
                    <button
                      className="Minus"
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      <span>-</span>
                    </button>
                    <input
                      type="number"
                      name="quantity"
                      value={product.quantity}
                      pattern="[0-9]*"
                      aria-label="Quantity"
                    />
                    <button
                      className="Plus"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      <span>+</span>
                    </button>
                  </div>
                </div>
                <button
                  className="add-to-cart"
                  onClick={onAddToCart}
                  onMouseEnter={(e) => handleEnter(e, product.id)}
                  onMouseMove={(e) => handleMove(e, product.id)}
                  onMouseLeave={(e) => handleLeave(e, product.id)}
                >
                  <span
                    className="reveal-circle"
                    id={`reveal-${product.id}`}
                  ></span>
                  <span className="text">Add To Cart</span>
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="special-cookies">
        <div className="Collection-top">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={slideFromBottomLeft}
          >
            <span>SPECIALTY</span>
            <span>COOKIES</span>
          </motion.h2>
        </div>
        <div className="Collection-bottom">
          <div className="product-cookies1">
            {products.map((product) => (
              <div key={product.id} className="product-item-cookies">
                <Link to={product.link} className="product-image-cookies">
                  {product.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-label">
                      {ingredient}
                    </span>
                  ))}
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="img-default"
                    onMouseEnter={(e) => (e.target.src = product.image2)} // Change image on hover
                    onMouseLeave={(e) => (e.target.src = product.image1)} // Revert to the original image
                  />
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="img-default"
                    onMouseEnter={(e) => (e.target.src = product.image2)} // Change image on hover
                    onMouseLeave={(e) => (e.target.src = product.image1)} // Revert to the original image
                  />
                </Link>
                <div className="product-info">
                  <Link to={product.link}>
                    <h3>{product.name}</h3>
                    <span>{product.format}</span>
                    <span className="separator-dot"> • </span>
                    <span>{product.weight}</span>
                  </Link>
                </div>
                <div className="product-details">
                  <span className="price">{product.price}</span>
                  <div className="quantity-selector">
                    <button
                      className="Minus"
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      <span>-</span>
                    </button>
                    <input
                      type="number"
                      name="quantity"
                      value={product.quantity}
                      pattern="[0-9]*"
                      aria-label="Quantity"
                    />
                    <button
                      className="Plus"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      <span>+</span>
                    </button>
                  </div>
                </div>
                <button
                  className="add-to-cart"
                  onClick={onAddToCart}
                  onMouseEnter={(e) => handleEnter(e, product.id)}
                  onMouseMove={(e) => handleMove(e, product.id)}
                  onMouseLeave={(e) => handleLeave(e, product.id)}
                >
                  <span
                    className="reveal-circle"
                    id={`reveal-${product.id}`}
                  ></span>
                  <span className="text">Add To Cart</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cookies-footer">
        <motion.h2
          className="h2-cake"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
        >
          ROOM FOR MORE?
        </motion.h2>
        <div className="cookies-footer-children">
          <div className="other-cookies">
            <div>
              <img
                src="//bernicebakery.com/cdn/shop/collections/chococaramel-01.jpg?v=1729791942&amp;width=480"
                alt="Classic Cakes"
                srcSet="//bernicebakery.com/cdn/shop/collections/chococaramel-01.jpg?v=1729791942&amp;width=352 352w, //bernicebakery.com/cdn/shop/collections/chococaramel-01.jpg?v=1729791942&amp;width=480 480w"
                width="480"
                height="720"
              />
              <h3>CLASSIC CAKES</h3>
            </div>
          </div>
          <div className="special-cake">
            <div>
              <img
                src="//bernicebakery.com/cdn/shop/files/1.png?v=1729541687&amp;width=480"
                alt=""
                srcSet="//bernicebakery.com/cdn/shop/files/1.png?v=1729541687&amp;width=352 352w, //bernicebakery.com/cdn/shop/files/1.png?v=1729541687&amp;width=480 480w"
                width="480"
                height="600"
              />
              <h3>SPECIALTY AND</h3>
              <h3>SEASONAL CAKES</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookie;
