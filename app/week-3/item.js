import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li>
      <div className="text-lg font-semibold text-white">{name}</div>
      <div className="text-sm text-gray-300">Quantity: {quantity}</div>
      <div className="text-sm text-gray-300">Category: {category}</div>
    </li>
  );
}
