import React from "react";
import "../Body/Main.scss"; // Import SCSS
import { Link } from "react-router-dom";

const Main = () => {
  const products = [
    {
      id: "43568369139909",
      name: "Birthday",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-100_websize_noBG.png?v=1728434205&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-111_websize_noBG.png?v=1728434172&width=480",
      link: "/products/birthday-sprinkle",
      ingredients: ["White chocolate", "Sprinkles"],
    },
    {
      id: "43122499289285",
      name: "Chocolate Chunk",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-83_websize_noBG.png?v=1728434128&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Bernice-28.png?v=1728434336&width=480",
      link: "/products/cookie-4",
      ingredients: ["White chocolate", "Dark chocolate", "Chunks"],
    },
    {
      id: "43568390406341",
      name: "S'mores",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-89_websize_noBG.png?v=1728434267&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=480",
      link: "/products/smores",
      ingredients: ["Marshmallows", "Dark chocolate", "Graham crackers"],
    },
  ];

  ////////Images///////////
  const images = [
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-168.jpg?v=1721423202&width=500",
      alt: "Description for image 168",
      width: "500",
      height: "750",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-50.jpg?v=1721423202&width=500",
      alt: "Description for image 50",
      width: "500",
      height: "750",
    },
    {
      src: "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-164.jpg?v=1721423202&width=500",
      alt: "Description for image 123",
      width: "500",
      height: "750",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-59.jpg?v=1721423202&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
    },
    {
      src: "//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-160.jpg?v=1716391349&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
    },
    {
      src: "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-4.jpg?v=1721423203&width=500",
      alt: "Description for image 531",
      width: "500",
      height: "750",
    },
  ];

  return (
    <>
      <section className="main-section">
        {/* Tiêu đề */}
        <div className="main-heading">
          <h2 className="main-title">
            <span>Good</span> <span>food</span> <span>should</span>
            <br />
            <span>both</span> <span>comfort</span> <span>and</span>
            <br />
            <span>nourish</span> <span>the</span> <span>soul.</span>
          </h2>
          <img
            src="https://bernicebakery.com/cdn/shop/files/cake.svg?v=1714513357&width=400"
            alt="Cake Illustration"
            width="200"
            height="132"
          />
        </div>

        {/* Nội dung */}
        <div className="main-content">
          <p>
            We are centrally located in the neighborhood of St-Henri. Stop by
            for a coffee, catch up on work, or grab some of our delicious
            goodies to go. With cookies and cakes available for online order,
            there’s something for everyone, and every occasion.
          </p>
        </div>
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
                {product.ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient-label">
                    {ingredient}
                  </span>
                ))}
                <img
                  src={product.image1}
                  alt={product.name}
                  className="img-default"
                />
                <img
                  src={product.image2}
                  alt={product.name}
                  className="img-hover"
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
                  <button className="Minus">-</button>
                  <input
                    type="number"
                    name="quantity"
                    value="1"
                    pattern="[0-9]*"
                    aria-label="Quantity"
                  />
                  <button className="Plus">+</button>
                </div>
              </div>
              <button className="add-to-cart">Add To Cart</button>
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
            <span className="Line" aria-hidden="true">
              The best things in life
            </span>
            <span className="Line" aria-hidden="true">
              are sweet
            </span>
          </h2>
        </div>
        <div className="Arches_Display_Container">
          <div
            className="Arches_Display_Inner Cool_Anim Fade Multiple"
            style={{ transform: "translate(-13.3429px, 0px)", opacity: 1 }}
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
          </div>
        </div>
      </section>
      {/* GallerySection */}
      <div className="Section-btn">
        <div className="Collection_Browser_Tabs">
          <div className="Collection_Browser_Tab_Button-Cookies">
            <button>
              <span>COOKIES</span>
            </button>
          </div>
          <div className="Collection_Browser_Tab_Button-Cake">
            <button>
              <span>CAKES</span>
            </button>
          </div>
        </div>
      </div>
      {/* ////product//// */}

      <div className="product-cookies">
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
              />
              <img
                src={product.image2}
                alt={product.name}
                className="img-hover"
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
                <button className="Minus">-</button>
                <input
                  type="number"
                  name="quantity"
                  value="1"
                  pattern="[0-9]*"
                  aria-label="Quantity"
                />
                <button className="Plus">+</button>
              </div>
            </div>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="bottom">
        <div className="bottom-navigate">
          <button>
            <svg viewBox="0 0 24 24">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
          <p>
            Why You Need To Go: This is one of those bakeries that's like
            stepping into a little oasis. Not only is the decor so beautiful and
            so serene, but the pastries themselves are incredible, too.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Fove_12.png?v=1721333605&amp;width=200"
              alt=""
              srcset="//bernicebakery.com/cdn/shop/files/Fove_12.png?v=1721333605&amp;width=200 200w"
              width="200"
              height="152"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial">
          <h3 className="Citations">‘’</h3>
          <p>
            Bernice puts forth the kind of sweets that take you back to
            childhood. Nothing too complex, but everything is well done.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/4.png?v=1714669992&amp;width=200"
              alt=""
              srcset="//bernicebakery.com/cdn/shop/files/4.png?v=1714669992&amp;width=200 200w"
              width="200"
              height="59"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial">
          <h3 className="Citations">‘’</h3>
          <p>
            I still remember that bite. A moist crumb which caresses here and
            which does not take long to melt, releasing its aromas of spices,
            and which does not saturate the palate with sugar.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200"
              alt=""
              srcset="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200 200w"
              width="200"
              height="123"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial">
          <h3 className="Citations">‘’</h3>
          <p>
            I still remember that bite. A moist crumb which caresses here and
            which does not take long to melt, releasing its aromas of spices,
            and which does not saturate the palate with sugar.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200"
              alt=""
              srcset="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200 200w"
              width="200"
              height="123"
              loading="lazy"
            />
          </div>
        </div>
        <div className="Testimonial">
          <h3 className="Citations">‘’</h3>
          <p>
            I still remember that bite. A moist crumb which caresses here and
            which does not take long to melt, releasing its aromas of spices,
            and which does not saturate the palate with sugar.
          </p>
          <div className="Testimonial-logo">
            <img
              src="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200"
              alt=""
              srcset="//bernicebakery.com/cdn/shop/files/Journal-de-montreal-logo.png?v=1729211396&amp;width=200 200w"
              width="200"
              height="123"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
