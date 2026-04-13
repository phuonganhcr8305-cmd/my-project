import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = {
  "Air Purifying Plants": [
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 18,
      image: "https://via.placeholder.com/150",
    },
  ],
  Succulents: [
    {
      id: 3,
      name: "Aloe Vera",
      price: 12,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Jade Plant",
      price: 14,
      image: "https://via.placeholder.com/150",
    },
  ],
  "Decorative Plants": [
    {
      id: 5,
      name: "Monstera",
      price: 22,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Pothos",
      price: 16,
      image: "https://via.placeholder.com/150",
    },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <nav>
        <h1>Paradise Nursery</h1>
        <p>Home | Products | Cart</p>
      </nav>

      <h2>Product Listing Page</h2>

      {Object.entries(products).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <div>
            {items.map((product) => (
              <div key={product.id} style={{ marginBottom: "20px" }}>
                <img src={product.image} alt={product.name} width="150" />
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={isInCart(product.id)}
                >
                  {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
