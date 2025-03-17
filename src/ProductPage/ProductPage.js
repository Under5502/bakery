import { Link, useOutletContext } from "react-router-dom";
import "../ProductPage/ProductPage.scss";
import React from "react";
import { useState } from "react";

function ProductPage() {
  const [mainProductQuantity, setMainProductQuantity] = useState(1);

  const handleIncreaseMainQuantity = () => {
    setMainProductQuantity((prev) => prev + 1);
  };

  const handleDecreaseMainQuantity = () => {
    if (mainProductQuantity > 1) {
      setMainProductQuantity((prev) => prev - 1);
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
      quantity: 1,
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
      quantity: 1,
      price: "$29",
      image1:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-89_websize_noBG.png?v=1728434267&width=480",
      image2:
        "https://bernicebakery.com/cdn/shop/files/Two_Food_Photograhers-130_websize_noBG.png?v=1728434280&width=480",
      link: "/product",
      ingredients: ["Marshmallows", "Dark chocolate", "Graham crackers"],
    },
  ]);
  return (
    <div className="product-container">
      <div className="product-top">
        <div className="product-media">
          <div className="product-main">
            <div className="main-image">
              <img
                className="img-product"
                src="//bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=4096"
                alt="Birthday"
                srcSet="
        //bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=352 352w,
        //bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=832 832w,
        //bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=1200 1200w,
        //bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=1920 1920w,
        //bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=4096 4096w"
                width="409"
                height="512"
              />
            </div>
            {/* <div className="main-image">
              <img
              className="img-product"
                src="//bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=4096"
                alt="Birthday"
                srcSet="//bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=352 352w,
              //bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=832 832w,
              //bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=1200 1200w,
              //bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=1920 1920w,
              //bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=4096 4096w"
                width="409"
                height="512"
              />
            </div> */}
          </div>
          <div className="product-other-media">
            <div className="Additional_Image">
              <img
                className="img-additional"
                src="//bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=720"
                alt="Birthday"
                srcSet="//bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=352 352w,
              //bernicebakery.com/cdn/shop/files/Bernice-15.jpg?v=1727835563&width=720 720w"
                width="360"
                height="450"
              />
            </div>
            <div className="Additional_Image">
              <img
                className="img-additional"
                src="//bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=720"
                alt="Birthday"
                srcSet="//bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=352 352w,
              //bernicebakery.com/cdn/shop/files/Bernice-36.jpg?v=1727835563&width=720 720w"
                width="360"
                height="450"
              />
            </div>
          </div>
        </div>
        <div className="product-infos">
          <div className="Wrapper">
            <h1 className="title-product">
              <span className="title-birthday">Birthday</span>
            </h1>
            <div className="Product_Format">
              <span>Box of 6</span>
              <span className="Separator_Dot"></span>
              <span>4oz</span>
              <span className="Separator_Dot"></span>
              <span className="Product_Price">$29.00</span>
            </div>

            {/* ///////// */}
            <div className="Product_Ingredients">
              <div className="Ingredient_Pill">
                <span>White chocolate</span>
              </div>
              <div className="Ingredient_Pill">
                <span>Sprinkles</span>
              </div>
            </div>
            {/* ///////////////////////// */}
            <div className="Product_Description">
              <p>
                Created as an homage to the traditional sprinkle cookie; white
                chocolate and colourful sprinkles combined to create a little
                celebration in your mouth.{" "}
              </p>
              <span className="disclaimer">
                <div className="disclaimer_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M8.8973 6.08458C6.64279 6.79018 3.96587 8.62574 2.86371 10.6418C2.23423 11.5878 1.48908 13.776 2.48323 17.1684C2.66517 17.9528 3.02601 19.6529 2.80768 20.1862C3.3379 19.9666 5.02795 20.3296 5.80769 20.5126C9.18004 21.5127 11.3553 20.7631 12.2957 20.1299C14.2998 19.0212 16.1245 16.3283 16.826 14.0604"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22.001 4.91385C21.3544 4.46681 19.5601 3.88112 17.6999 5.34815M15.8049 4.08838C13.1452 2.66152 11.0115 2.88592 9.84114 3.37043C9.6518 3.44881 9.47979 3.56968 9.35958 3.73636C8.43064 5.02442 9.61053 6.96877 11.8955 9.75483C12.2745 10.217 12.6972 10.6438 13.156 11.0259C15.8603 13.2781 17.961 14.5919 19.2548 13.6261C19.3961 13.5207 19.5028 13.3754 19.5767 13.2148C20.2169 11.8243 20.0993 9.53093 18.7963 7.08782C18.1184 5.81677 17.0703 4.76723 15.8049 4.08838Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                May contain nuts
              </span>
            </div>

            {/* ///////////// */}

            <div className="Product_Form_Top">
              <span className="Product_Form_Label">Quantity :</span>

              <div className="Product_Form_Quantity">
                {/* Normally you would import CSS in the React component or use inline styles */}
                <div className="Quantity_Selector">
                  <div
                    className="Minus_Button Quantity_Selector_Button"
                    onClick={handleDecreaseMainQuantity}
                  >
                    <span>-</span>
                  </div>
                  <input
                    type="number"
                    value={mainProductQuantity}
                    pattern="[0-9]*"
                  />
                  <div
                    className="Plus_Button Quantity_Selector_Button"
                    onClick={handleIncreaseMainQuantity}
                  >
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////// */}

            <div className="product-form-bottom">
              <button className="add-to-cart-product" onClick={onAddToCart}>
                ADD TO CART
              </button>
            </div>
          </div>

          {/* //////////////// */}
          <div className="Product_Icons">
            <div className="Product_Icon">
              <div className="Product_Icon_Image Contain_Fluid">
                <img
                  src="//bernicebakery.com/cdn/shop/files/VACHE_3746077a-a023-493a-96d2-6321af921e0e.svg?v=1722873427&width=480"
                  alt="Made with real butter"
                  srcSet="//bernicebakery.com/cdn/shop/files/VACHE_3746077a-a023-493a-96d2-6321af921e0e.svg?v=1722873427&width=352 352w, 
                    //bernicebakery.com/cdn/shop/files/VACHE_3746077a-a023-493a-96d2-6321af921e0e.svg?v=1722873427&width=480 480w"
                  width="100"
                  height="100"
                />
              </div>
              <span className="Product_Icon_Title">Made with real butter</span>
            </div>

            <div className="Product_Icon">
              <div className="Product_Icon_Image Contain_Fluid">
                <img
                  src="//bernicebakery.com/cdn/shop/files/spatula.svg?v=1714513357&width=480"
                  alt="Gooey inside"
                  srcSet="//bernicebakery.com/cdn/shop/files/spatula.svg?v=1714513357&width=352 352w,
                    //bernicebakery.com/cdn/shop/files/spatula.svg?v=1714513357&width=480 480w"
                  width="100"
                  height="100"
                />
              </div>
              <span className="Product_Icon_Title">Gooey inside</span>
            </div>

            <div className="Product_Icon">
              <div className="Product_Icon_Image Contain_Fluid">
                <img
                  src="//bernicebakery.com/cdn/shop/files/cookie.svg?v=1716373877&width=480"
                  alt="Soft baked"
                  srcSet="//bernicebakery.com/cdn/shop/files/cookie.svg?v=1716373877&width=352 352w,
                    //bernicebakery.com/cdn/shop/files/cookie.svg?v=1716373877&width=480 480w"
                  width="100"
                  height="100"
                />
              </div>
              <span className="Product_Icon_Title">Soft baked</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <h2 className="product-bottom-h2">YOU MAY ALSO LIKE:</h2>

        <div className="product-cookies1-cake-1">
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
              <button className="add-to-cart">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
