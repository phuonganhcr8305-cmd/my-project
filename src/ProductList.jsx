import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    image: "https://via.placeholder.com/150",
  },
];

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width="150" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
