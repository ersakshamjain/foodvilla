import React from "react";
import { emptyCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(emptyCart());
  };
  return (
    <div>
      <h1>Cart</h1>
      <button
        className="p-2 m-5 bg-green-100"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
