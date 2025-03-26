import React from "react";
import "./Main.scss"; // Import SCSS
import Hero from "../../components/Header/Hero";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollectionsCTASection from "../MainFooter/CollectionsCTASection ";

const Main = () => {
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

  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState("cookies"); // Mặc định hiển thị Cookies

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };
  const { onAddToCart } = useOutletContext();
  const handleClick = (product) => {
    if (typeof onAddToCart === "function") {
      onAddToCart(product);
    } else {
      console.warn("onAddToCart is not a function");
    }
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
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Birthday",
      format: "Box of 6",
      weight: "4oz",
      quantity: 1,
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-100_websize_noBG.png?v=1728434205&width=350",
      image2:
        "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-111_websize_noBG.png?v=1728434172&width=350",
      link: "/product",
      ingredients: [],
    },
    {
      id: 2,
      name: "Chocolate Chunk",
      format: "Box of 6",
      weight: "4oz",
      quantity: 1,
      price: "$29",
      image1:
        "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-89_websize_noBG.png?v=1728434267&width=350",
      image2:
        "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=350",
      link: "/product",
      ingredients: [],
    },
    {
      id: 3,
      name: "Chocolate Chunk",
      format: "Box of 6",
      weight: "4oz",
      quantity: 1,
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-83_websize_noBG.png?v=1728434128&width=350",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Bernice-28.png?v=1728434336&width=350",
      link: "/product",
      ingredients: [],
    },
  ]);

  ////////Images///////////
  const images = [
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-168.jpg?v=1721423202&width=500",
      alt: "Description for image 168",
      width: "500",
      height: "750",
      link: "/product",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-50.jpg?v=1721423202&width=500",
      alt: "Description for image 50",
      width: "500",
      height: "750",
      link: "/product",
    },
    {
      src: "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-164.jpg?v=1721423202&width=500",
      alt: "Description for image 123",
      width: "500",
      height: "750",
      link: "/product",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-59.jpg?v=1721423202&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
      link: "/product",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-160.jpg?v=1716391349&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
      link: "/product",
    },
    {
      src: "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-4.jpg?v=1721423203&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
      link: "/product",
    },
  ];
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingProduct = prevCartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        // Nếu sản phẩm đã có, tăng số lượng
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu chưa có, thêm sản phẩm vào giỏ hàng với số lượng 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <div className="main-container">
      <Hero />
      <section className="main-section">
        {/* Tiêu đề */}
        <motion.div
          className="main-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={slideFromBottomLeft}
        >
          <h2 className="main-title">
            <span className="sp-h2m">Good food should</span>

            <span className="sp-h2m">both comfort and</span>

            <span className="sp-h2m">nourish the soul.</span>
          </h2>
          <motion.img
            src="https://bernicebakery.com/cdn/shop/files/cake.svg?v=1714513357&width=400"
            alt="Cake Illustration"
            width="200"
            height="132"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={slideFromBottomLeft}
          />
        </motion.div>

        {/* Nội dung */}
        <motion.div
          className="main-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={slideFromBottomLeft}
        >
          <p className="mp">
            We are centrally located in the neighborhood of St-Henri. Stop by
            for a coffee, catch up on work, or grab some of our delicious
            goodies to go. With cookies and cakes available for online order,
            there’s something for everyone, and every occasion.
          </p>
        </motion.div>
      </section>

      {/*  Product */}

      <section className="products-section">
        {/* Chữ chạy nền */}
        <div className="bestsellers-background">
          {[...Array(4)].map((_, i) => (
            <div className="marquee-content" key={i}>
              {Array(6)
                .fill("Bestsellers")
                .map((text, index) => (
                  <div key={index}>{text}</div>
                ))}
            </div>
          ))}
        </div>

        {/* Hiển thị danh sách sản phẩm */}
        <div className="product-display">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <Link to={product.link} className="product-image">
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
                onClick={handleClick}
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
      </section>

      {/* Images */}

      <section className="Section Arches_Display_Section Parallax_Wrapper SectionPadded">
        <div
          className="Arches_Display_Heading Centered Parallax_Front"
          style={{ transform: "translate3d(0px, -43.4207%, 0px)" }}
        >
          <h2
            className="SectionTitle Cool_Text_Anim Lines"
            aria-label="The best things in life are sweet"
          >
            <motion.span
              className="Line"
              aria-hidden="true"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={slideFromBottomLeft}
            >
              The best things in life
            </motion.span>
            <motion.span
              className="Line"
              aria-hidden="true"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={slideFromBottomLeft}
            >
              are sweet
            </motion.span>
          </h2>
        </div>
        <div className="Arches_Display_Container">
          <motion.div
            className="Arches_Display_Inner Cool_Anim Fade Multiple"
            style={{ transform: "translate(-13.3429px, 0px)", opacity: 1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={slideFromBottomLeft}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="Window_Image1 Instant"
                style={{ opacity: 1 }}
              >
                <div
                  className="Window_Image1_Limit"
                  style={{ height: "100%", width: "100%" }}
                >
                  <div className="Window_Image1_Container Fluid">
                    <img
                      src={image.src}
                      alt={image.alt}
                      srcSet={`${
                        image.src.split("&width=")[0]
                      }&width=352 352w, ${image.src} 500w`}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* GallerySection */}
      <div className="Section-btn">
        <div className="Collection_Browser_Tabs">
          <div
            className={`Collection_Browser_Tab_Button-Cookies ${
              currentTab === "cookies" ? "active" : ""
            }`}
          >
            <button
              className={`btn-main-cookie ${
                currentTab === "cookies" ? "active" : ""
              }`}
              onClick={() => handleTabClick("cookies")}
            >
              <span className="main-cookies">COOKIES</span>
            </button>
          </div>
          <div
            className={`Collection_Browser_Tab_Button-Cake ${
              currentTab === "cake" ? "active" : ""
            }`}
          >
            <button
              onClick={() => handleTabClick("cake")}
              className={`btn-main-cake ${
                currentTab === "cake" ? "active" : ""
              }`}
            >
              <span className="main-cakes">CAKES</span>
            </button>
          </div>
        </div>
      </div>
      {/* ////product//// */}
      <AnimatePresence mode="wait">
        {currentTab === "cookies" && (
          <motion.div
            key="cookies"
            className="product-cookies"
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            variants={slideFromBottomLeft}
          >
            {products.map((product) => (
              <div key={product.id} className="product-item-cookies">
                <Link to={product.link} className="product-image-cookies">
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="img-default"
                    onMouseEnter={(e) => (e.target.src = product.image2)}
                    onMouseLeave={(e) => (e.target.src = product.image1)}
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
                    <input type="number" value={product.quantity} readOnly />
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
                  onClick={() => handleClick(product)}
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
          </motion.div>
        )}

        {currentTab === "cake" && (
          <motion.div
            key="cake"
            className="product-cookies"
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            variants={slideFromBottomLeft}
          >
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
                    onMouseEnter={(e) => (e.target.src = product.image2)}
                    onMouseLeave={(e) => (e.target.src = product.image1)}
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
                    <input type="number" value={product.quantity} readOnly />
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
                  onClick={() => handleClick(product)}
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom */}
      <div className="bottom">
        <div className="bottom-navigate">
          <button>
            <svg viewBox="0 0 24 24">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="view-all">VIEW ALL</div>
      </div>
      {/* Testimonial */}
      <div className="Testimonial-container">
        <div className="Testimonial">
          <h3 className="Citations">‘’</h3>
          <p className="p-p">
            Why You Need To Go: This is one of those bakeries that's like
            stepping into a little oasis. Not only is the decor so beautiful and
            so serene, but the pastries themselves are incredible, too.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Fove_12.png?v=1721333605&amp;width=200"
              alt=""
              srcSet="//bernicebakery.com/cdn/shop/files/Fove_12.png?v=1721333605&amp;width=200 200w"
              width="200"
              height="152"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial2">
          <h3 className="Citations">‘’</h3>
          <p className="p-p">
            I still remember that bite. A moist crumb which caresses here and
            which does not take long to melt, releasing its aromas of spices,
            and which does not saturate the palate with sugar. A brown butter
            icing, a bitter caramel. Bernice's Pumpkin, Carrot and Spice Layer
            Cake is sinful!
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/4.png?v=1714669992&amp;width=200"
              alt=""
              srcSet="//bernicebakery.com/cdn/shop/files/4.png?v=1714669992&amp;width=200 200w"
              width="200"
              height="59"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial">
          <h3 className="Citations">‘’</h3>
          <p className="p-p">
            I still remember that bite. A moist crumb which caresses here and
            which does not take long to melt, releasing its aromas of spices,
            and which does not saturate the palate with sugar.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200"
              alt=""
              srcSet="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200 200w"
              width="200"
              height="123"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial2">
          <h3 className="Citations">‘’</h3>
          <p className="p-p">
            I still remember that bite. A moist crumb which caresses here and
            which does not take long to melt, releasing its aromas of spices,
            and which does not saturate the palate with sugar.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200"
              alt=""
              srcSet="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200 200w"
              width="200"
              height="123"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial2">
          <h3 className="Citations">‘’</h3>
          <p className="p-p">
            I still remember that bite. A moist crumb which caresses here and
            which does not take long to melt, releasing its aromas of spices,
            and which does not saturate the palate with sugar.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200"
              alt=""
              srcSet="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200 200w"
              width="200"
              height="123"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="main-footer">
        <CollectionsCTASection />
      </div>
    </div>
  );
};

export default Main;
