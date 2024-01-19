import React, { useState } from "react";
import products from "./Products";

function FeaturedProducts() {
  const [product, setProduct] = useState(products);
  return (
    <div id="featured-products">
      <h1 className="header">Our Featured Product</h1>
      <p className="sub-heading">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth Por scientie, musica.
      </p>
      <div className="services-container">
        {product.map((product) => {
          const { name, image, id, text } = product;
          return (
            <div key={id} className="products ">
              <img src={image} alt={name}></img>
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>

      <a
        href=""
        onClick={() => alert("You are currently viewing all products")}
      >
        See all products
      </a>
    </div>
  );
}

export default FeaturedProducts;
