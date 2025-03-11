import React from "react";
import "./Products.scss"; // Import SCSS

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

const Products = () => {
  return (
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
            <a href={product.link} className="product-image">
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
            </a>
            <div className="product-info">
              <a href={product.link}>
                <h3>{product.name}</h3>
                <span>{product.format}</span>
                <span className="separator-dot"> • </span>
                <span>{product.weight}</span>
              </a>
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
  );
};

export default Products;
