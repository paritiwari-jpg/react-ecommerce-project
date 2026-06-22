import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity =
      (updatedCart[index].quantity || 1) + 1;

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];

    if ((updatedCart[index].quantity || 1) > 1) {
      updatedCart[index].quantity -= 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1
        style={{
          color: "#111827",
          fontSize: "40px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        My Cart 🛒 ({cartItems.length})
      </h1>

      {cartItems.map((car, index) => (
        <div key={index}>
          <h3>{car.name}</h3>

          <p style={{ margin: "10px 0" }}>{car.price}</p>

          <button onClick={() => decreaseQuantity(index)}>
            -
          </button>

          <span style={{ margin: "0 15px" }}>
            {car.quantity || 1}
          </span>

          <button onClick={() => increaseQuantity(index)}>
            +
          </button>

          <button
            onClick={() => removeItem(index)}
            style={{ marginLeft: "15px" }}
          >
            Delete
          </button>

          <hr style={{ margin: "20px 0" }} />
        </div>
      ))}

      <div
        style={{
          marginTop: "40px",
          lineHeight: "2.5",
        }}
      >
        <h2>Order Summary</h2>

        <p>Subtotal: ₹{cartItems.length * 100000}</p>

        <p>GST (18%): ₹{cartItems.length * 18000}</p>

        <p>
          <strong>
            Total: ₹{cartItems.length * 118000}
          </strong>
        </p>

        <h3>Payment Method</h3>

        <div>
          <input type="radio" name="payment" /> Cash On Delivery
        </div>

        <div>
          <input type="radio" name="payment" /> UPI
        </div>

        <div>
          <input type="radio" name="payment" /> Credit / Debit Card
        </div>

        <button
          style={{
            padding: "12px 25px",
            marginTop: "15px",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;