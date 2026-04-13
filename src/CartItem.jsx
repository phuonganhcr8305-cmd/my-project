import React from "react";

const cartItems = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
];

function CartItem() {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Cost: ${totalAmount}</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <img src={item.image} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button>Increase</button>
          <button>Decrease</button>
          <button>Delete</button>
        </div>
      ))}

      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
