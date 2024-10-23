"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity < 20) {
        return prevQuantity + 1;
      }
      return prevQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="text-center">
      <h1 className="inline-block mx-4 text-xl">{quantity}</h1>
      <button
        onClick={decrement}
        disabled={quantity <= 1}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block disabled:opacity-50">
        -
      </button>

      <button
        onClick={increment}
        disabled={quantity >= 20}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block m-2 disabled:opacity-50">
        +
      </button>
    </div>
  );
}
