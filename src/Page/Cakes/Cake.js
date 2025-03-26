import { Link, useOutletContext } from "react-router-dom";

import "../Cakes/Cake.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function Cake() {
  const handleCrumbEffect = (e, type = "plus") => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const crumbColor = type === "plus" ? "#ffa7ee" : "#0a6e90";

    for (let i = 0; i < 3; i++) {
      const crumb = document.createElement("div");
      crumb.className = "crumb";
      crumb.style.backgroundColor = crumbColor;
      crumb.style.position = "fixed";
      crumb.style.left = `${centerX}px`;
      crumb.style.top = `${centerY}px`;
      crumb.style.width = "20px";
      crumb.style.height = "20px";
      crumb.style.borderRadius = "50%";
      crumb.style.zIndex = "9999";
      document.body.appendChild(crumb);

      gsap.to(crumb, {
        duration: 1 + Math.random() * 0.3,
        ease: "power2.out",
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: 0, y: -10 },
            {
              x: (Math.random() - 0.5) * 30,
              y: 70 + Math.random() * 40,
            },
          ],
          curviness: 1.1,
          autoRotate: false,
        },
        scale: 0.5,
        opacity: 1,
        rotation: Math.random() * 180,
        onComplete: () => crumb.remove(),
      });
    }
  };
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

  const handleEnter = () => {
    circleRef.current?.classList.add("active");
  };

  const handleLeave = () => {
    circleRef.current?.classList.remove("active");
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
  const slideFromBottomLeft = {
    hidden: {
      opacity: 0,
      x: -50,
      y: -100,
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

  const { onAddToCart } = useOutletContext();
  const [products, setProducts] = useState([
    {
      id: "43568369139909",
      name: "Birthday",
      format: "Box of 6",
      quantity: 1,
      weight: "4oz",
      price: "$29",
      image1:
        "//bernicebakery.com/cdn/shop/files/Untitled_design_29.png?v=1729798251&width=350",
      image2:
        "//bernicebakery.com/cdn/shop/files/Untitled_design_30.png?v=1730216848&width=350",
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
        "//bernicebakery.com/cdn/shop/files/celebrationscake2.jpg?v=1721247301&width=350",
      image2:
        "//bernicebakery.com/cdn/shop/files/Bernice-6.jpg?v=1727835563&width=350",
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
        "//bernicebakery.com/cdn/shop/files/Bernice-3.jpg?v=1727835563&width=350",
      image2:
        "//bernicebakery.com/cdn/shop/files/Bernice-7.jpg?v=1727835563&width=350",
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
        "//bernicebakery.com/cdn/shop/files/Bernice-2.jpg?v=1727835563&width=350",
      image2:
        "//bernicebakery.com/cdn/shop/files/Bernice-12.png?v=1727835564&width=350",
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
        "//bernicebakery.com/cdn/shop/files/Bernice-1.jpg?v=1727835563&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=350",
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
        "//bernicebakery.com/cdn/shop/files/Bernice-1.jpg?v=1727835563&width=350",
      image2:
        "//bernicebakery.com/cdn/shop/files/Bernice-11.jpg?v=1727835564&width=350",
      link: "/product",
      ingredients: [],
    },
  ]);
  return (
    <div className="Collection-container-cake">
      <div className="cookies-cake">
        <div className="Collection-top-cake">
          <h2>CLASSIC CAKES</h2>
          <div className="Cool_Anim-cake">
            <p>
              <span>
                Our homemade-style cakes come in both a 6" size (which serves 8
                to 10 guests) and 9" size (which serves 14-16 guests). Each one
                of our cakes is made using only the purest ingredients to bring
                out the most comforting of flavours. The bakery's signature
                style is a three tiered layer cake with different types of
                frostings and toppings.
              </span>
            </p>
            <p>
              <span
                aria-label=""
                className="c-mrkdwn__br"
                data-stringify-type="paragraph-break"
              ></span>
              <span>
                Our cakes will bring you back to the basics, whether it's a more
                traditional flavor that will remind you of your childhood or one
                of our seasonal recipes which will treat you to something new.
              </span>
            </p>
          </div>
        </div>
        <motion.div
          className="Collection-bottom-cake"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={slideFromBottomLeft}
        >
          <iv className="product-cookies1-cake">
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
                      onMouseEnter={(e) => handleCrumbEffect(e, "minus")}
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
                      onMouseEnter={(e) => handleCrumbEffect(e, "plus")}
                    >
                      <span>+</span>
                    </button>
                  </div>
                </div>
                <button
                  className="add-to-cart"
                  onClick={onAddToCart}
                  onMouseMove={handleMove}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <span className="reveal-circle" ref={circleRef}></span>
                  <span className="text"> Add To Cart</span>
                </button>
              </div>
            ))}
          </iv>
        </motion.div>
      </div>
      <div className="special-cookies-cake">
        <div className="Collection-top-cake">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={slideFromBottomLeft}
          >
            <span>SPECIALTY AND</span>
            <span>SEASONAL CAKES</span>
          </motion.h2>
        </div>
        <div className="Collection-bottom-cake">
          <div className="product-cookies1-cake">
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
                      onClick={() => handleIncreaseQuantity(product.id)}
                      onMouseEnter={(e) => handleCrumbEffect(e, "minus")}
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
                      onMouseEnter={(e) => handleCrumbEffect(e, "plus")}
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
      <div className="cookies-footer-cake">
        <motion.h2
          className="h2-cake-cake"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
        >
          ROOM FOR MORE?
        </motion.h2>
        <div className="cookies-footer-children-cake">
          <div className="other-cookies-cake">
            <div>
              <img
                src="//bernicebakery.com/cdn/shop/collections/CookiesForBag.jpg?v=1715882158&amp;width=480"
                alt="Cookies"
                srcSet="//bernicebakery.com/cdn/shop/collections/CookiesForBag.jpg?v=1715882158&amp;width=352 352w, //bernicebakery.com/cdn/shop/collections/CookiesForBag.jpg?v=1715882158&amp;width=480 480w"
                width="480"
                height="320"
              />
              <h3>COOKIES</h3>
            </div>
          </div>
          <div className="special-cake-cake">
            <div>
              <img
                src="//bernicebakery.com/cdn/shop/files/Bernice-24.jpg?v=1727835564&amp;width=480"
                alt=""
                srcSet="//bernicebakery.com/cdn/shop/files/Bernice-24.jpg?v=1727835564&amp;width=352 352w, //bernicebakery.com/cdn/shop/files/Bernice-24.jpg?v=1727835564&amp;width=480 480w"
                width="480"
                height="600"
              />
              <h3>SPECIALTY COOKIES</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cake;
