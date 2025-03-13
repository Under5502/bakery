import { Link } from "react-router-dom";
import "../Cakes/Cake.scss";
function Cake() {
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
      link: "/product",
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
      link: "/product",
      ingredients: ["White chocolate", "Dark chocolate", "Chunks"],
    },
    {
      name: "S'mores",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-89_websize_noBG.png?v=1728434267&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=480",
      link: "/product",
      ingredients: ["Marshmallows", "Dark chocolate", "Graham crackers"],
    },
    {
      name: "CARAMEL",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=352 352w, //bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480 480w",
      link: "/product",
      ingredients: ["Marshmallows", "Dark chocolate", "Graham crackers"],
    },
    {
      name: "CARAMEL",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=352 352w, //bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480 480w",
      link: "/product",
      ingredients: ["Marshmallows", "Dark chocolate", "Graham crackers"],
    },
    {
      name: "CARAMEL",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=352 352w, //bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480 480w",
      link: "/product",
      ingredients: ["Marshmallows", "Dark chocolate", "Graham crackers"],
    },
    {
      name: "CARAMEL",
      format: "Box of 6",
      weight: "4oz",
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=352 352w, //bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-86_websize_noBG_05dc09c3-ad95-474b-ba25-40af1610a20b.png?v=1721333419&width=480 480w",
      link: "/product",
      ingredients: ["Marshmallows", "Dark chocolate", "Graham crackers"],
    },
  ];
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
                      defaultValue="1"
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
        </div>
      </div>
      <div className="special-cookies-cake">
        <div className="Collection-top-cake">
          <h2>
            <span>SPECIALTY AND</span>
            <span>SEASONAL CAKES</span>
          </h2>
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
                      defaultValue="1"
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
        </div>
      </div>
      <div className="cookies-footer-cake">
        <h2 className="h2-cake-cake">ROOM FOR MORE?</h2>
        <div className="cookies-footer-children-cake">
          <div className="other-cookies-cake">
            <div>
              <img
                src="//bernicebakery.com/cdn/shop/collections/CookiesForBag.jpg?v=1715882158&amp;width=480"
                alt="Cookies"
                srcset="//bernicebakery.com/cdn/shop/collections/CookiesForBag.jpg?v=1715882158&amp;width=352 352w, //bernicebakery.com/cdn/shop/collections/CookiesForBag.jpg?v=1715882158&amp;width=480 480w"
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
                srcset="//bernicebakery.com/cdn/shop/files/Bernice-24.jpg?v=1727835564&amp;width=352 352w, //bernicebakery.com/cdn/shop/files/Bernice-24.jpg?v=1727835564&amp;width=480 480w"
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
